---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDHRSSU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIA5vM03ZQLEZc1xnjYOfRDKXleGKzXVCXlJe9LLGf4XHAiEArCU%2FaDEP9%2FXTUagBNmwkkryIqyXkgjilo7fFMSeMr78q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDChPEuGNgw%2B8TFohrCrcAwzXXEGgx4IJ75u4SBxCuFBlPGf%2BJOSlSh%2BjB%2BCrNxbsXnWU8MuiAMX2RxqD0NcXv2A0lF4VazGCbZXHtHS%2FmOMZ2uqkZEFAxngveev3oQz%2FmYsgLanw068mtjf7s6cPT2oI7GLUNBA8j0YMCM3rf5froiBm6ojvxzbvPxlfCa3d%2BUeFiACy9JB%2ForP1eLWSOAQNYYw9q3oX%2FsTpSz10pB5kPGKIGOU9NsG2XaAzPyMqNX9%2B%2FdFXvjS4j6h2WdgURNIsZRZWOZwetyRqlTnm59YBA5mf4NW9kZH6i6%2Fc3Yxp%2FaomxMChr%2Bh1OTkl%2Fp1ykgp5hgKM%2FEXGvr7rxsev6IlOOmlLl9%2F3lRC4EeBSDa%2BOOrvOYfiDNvETaPWp%2FBl0TJUVmVnNEBNUJSPTdibSuiGPdVbSB72BgRAFSP4NsHQbo9TSN8eQyQQur%2BYwSqIPlAiUOUV8FApcBGyYeS4rFRRuUaDXfa7c42%2FHoo2SE5ypWwcdzSawThj8%2FJmlLiKkToFvDGct8gZFVjmXlrGnou5RfkcF%2FNW7DR9d8seUCO4wdsft8pOSm3Kp6sWLlja5JdqSZezuTxzwwe5ZngMYFHllxSIEZcE1oKAxbIY8T%2FE6rxPLmTHwrvAihguxMLW%2B%2B70GOqUBTfcyTLdOXsDeRTkkHiuFNf9LQbg4rJgtkb0XTy6Hw%2BDufflcUvnipcujovWRsrVlLPVVzvZ2NkPuoIbQCqcJiMjPjw%2BZbCyj4h5YQYJjKo9DDCz77REXKAqmvZAQExsumbmcy3Z7VOVE4yrvYS9Z3Juu%2BU%2BSj88rdZPn73MGB5e3ivbUIMnwmFxivhkyEDwZza5huMkX6mKPMxe8JtPTvwMdJGLt&X-Amz-Signature=d1efe16e4112ffde43a323d5c748f245bd27cb739337b58b785215591e8659b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
