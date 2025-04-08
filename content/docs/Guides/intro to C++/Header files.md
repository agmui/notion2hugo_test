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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667655LXQX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIC8pCq3xLY03BbcA7ij0k3nUCaA1FfG44YCt63t%2F%2BuD3AiEAq1tnjWOU3oXanOsKQvxalHzIBhKJME35N5SUtyL%2FbBwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKowoFVJ4sfh6C24FircA9ConvlONctiIE35bqpKtJkqxBqbFWjXvl8cNSwJSC14Hzk8dCK7GaSGKWkjM7oOZFEMczTHFq7GqPpzTwl%2Bnqg0oYek%2F1M2NrfQm4%2FPVXpZwQC8qo4U8rj65Jk2tOUEY4QxmVMLnRIVAaX5wWVUAkY%2BTx3ROu%2Fu3VibtxSdqDlSqPiSOigQxoXpsLwhUpG7SrQ9JKftmhQEjXaJN0hHHgHOijop1w30FPPSXmtJMpom5JAnTTPmkylnfRQ32ZRhou7vUHSOPZ4xSJ52ysijNHpTYTaaDSaWnZRgnEGRebxb7%2Bo%2Fp0WJdJme74OKXKHaeiL8CaeCClt01DQevJozV11V6WvP72rILk%2BwJti22YjW%2FXzN2wpPNnaE9XoUamZztZTpITc7sMtrF24rit6jyNBe8R68v8GJoiMxgji7P8PDuS8CMPoR0cT3GzGb18%2BUWGevfKLi01JhkYcmXq4F382UGcSuwS7NOX38tuDXpT13SQaRceqwbmYoyA%2BQIMRyZANkY0OS5mG1Cb3%2FQzsWaYLaGHmOiQGU0cYdMt11cWZ4U8Zh48EcIf8WsF2UnliH5AbilHKrS3sji5FAHUby9bQsETjbzsP5G1CEduwDa1PliPiLAgo9wg0GdahZMI2h1b8GOqUBsVxWfdIv6dpIJWWxRyvcTJSydvExn86nAriPcLae5VtdlaAxpEme3jMYP01fGB0MFJk%2FMCXbs3QNslnZirVQTGxo43R1NSp5eDTfWc5pZODVnraLe5ZYnK%2FzNlLU6MlskMVR4aL2bYcU7aFE9TUi0xUI%2FxL087hpvfgFQgZhMPYpAbYeqUhJn74iKRv4U9Ddoqa5UYKBLI%2BagjiJk9Cbwpy3Ltqy&X-Amz-Signature=5af8a2e67fd4b242d6b2dbaeb05a77c78c7fc561f3870a361effb5544de33b55&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
