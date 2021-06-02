function LoadContentForm()
{
    var Content = document.getElementsByTagName('textarea');
    var SelectedElement = document.getElementsByTagName('select');                        
    var Color = document.getElementById('color');    
    var LoadDiv = document.getElementById('LoadContent2');

    var Element = document.createElement(SelectedElement[0].value);
    Element.setAttribute("style", "color: "+ Color.value);
    Element.textContent = Content[1].value;
    LoadDiv.appendChild(Element);

    document.getElementById
    document.getElementsByClassName
    document.getElementsByName
    document.getElementsByTagName
    
    document.querySelectorAll

}