System.register(["../views/index", "../service/index", "../models/index", "../helpers/decorators/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, timer, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_3.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._service = new index_2.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias uteis.');
                        return;
                    }
                    const negociacao = new index_3.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                    index_5.Imprime(negociacao, this._negociacoes);
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._service.obterNegociacoes(isOk)
                        .then((negociacoes) => negociacoes.forEach(negociacao => {
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                    }));
                }
            };
            __decorate([
                index_4.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_4.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_4.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_4.throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_4.throttle()
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
