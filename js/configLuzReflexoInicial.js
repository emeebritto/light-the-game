function configurar_Luz_e_Reflexo_Inicial(){
	// 1° Area de reflexo
	var setPosicaoBlock = positionPersoMain;
	var setPosicaoBlockW = positionPersoMain - (bordaInicialD);
	var setPosicaoBlockS = positionPersoMain + (bordaInicialD);
	var setPosicaoBlockA = positionPersoMain - 1;
	// 1° Area de reflexo - semi-verticais
	var setPosicaoBlockW1 = positionPersoMain - (bordaInicialD +1);
	var setPosicaoBlockS1 = positionPersoMain + (bordaInicialD +1);
	var setPosicaoBlockA1 = positionPersoMain + 38;
	var setPosicaoBlockD1 = positionPersoMain - 38;
	// 2° Area de reflexo
	var setPosicaoBlockW2 = positionPersoMain - (bordaInicialD +39);
	var setPosicaoBlockS2 = positionPersoMain + (bordaInicialD +39);
	var setPosicaoBlockA2 = positionPersoMain - 2;
	var setPosicaoBlockD2 = positionPersoMain + 2;

/*	// 1° Area de reflexo
	InicialBackgroundColor(setPosicaoBlockW, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockW, blurReflexoLateral);

	InicialBackgroundColor(setPosicaoBlockS, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockS, blurReflexoLateral);

	InicialBackgroundColor(setPosicaoBlockA, corReflexoLateral);
	InicialBoxShadow(setPosicaoBlockA, blurReflexoLateral);

	InicialBackgroundColor(); InicialBoxShadow();

	// 1° Area de reflexo - semi-verticais
	InicialBackgroundColor(setPosicaoBlockW1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockW1, blurReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockS1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockS1, blurReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockA1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockA1, blurReflexoSemiVertical);

	InicialBackgroundColor(setPosicaoBlockD1, corReflexoSemiVertical);
	InicialBoxShadow(setPosicaoBlockD1, blurReflexoSemiVertical);

	// 2° Area de reflexo
	InicialBackgroundColor(setPosicaoBlockW2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockW2, blurReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockS2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockS2, blurReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockA2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockA2, blurReflexoLateralCamada2);

	InicialBackgroundColor(setPosicaoBlockD2, corReflexoLateralCamada2);
	InicialBoxShadow(setPosicaoBlockD2, blurReflexoLateralCamada2);*/

	//Configurações iniciais - Personagem Principal.
	InicialBackgroundColor(setPosicaoBlock, corPersoMain);
	InicialBoxShadow(setPosicaoBlock, brilhoPersoMain);

	function InicialBackgroundColor(posicao=positionPersoMain+1, elemento=corReflexoLateral){ bottonList[posicao-1].style.backgroundColor= elemento; }
	function InicialBoxShadow(posicao=positionPersoMain+1, elemento=blurReflexoLateral){ bottonList[posicao-1].style.boxShadow= elemento; }
}

/*const tes = document.getElementById('323');
tes.style.backgroundColor= "white";
tes.style.position= "absolute";
var pos = "1px";*/


/*const div = document.createElement('div');
div.className = 'foo';*/