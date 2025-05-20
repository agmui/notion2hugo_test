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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCN5EIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkbqNDe5aMtITPzriRXbFc0JzHbLnU9deDLbU8plpNhQIhANjliZZuMXdCDx3I4Kv%2Bz35%2Fo3yl%2FnuGTpWZqBo7q2jOKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMEaCtfQy%2Fb62Q%2BnYq3ANGMP1dPUwYx77yyT2qzZfMetz3W4HHVnRVGwAvLyB9kLrBINwEZ8%2FaeIQy9U06gay7WAaYQi0NdUcYBiFa7kzLktjZhBrBE6borZG7hqi4DQjRL3U8urbatxP18rMXMcd%2FG6SEDuzm8kNf%2BTQn9gnjycut9nyq4sY0P3HFS56c3CUWIctcFzNG17vWF37ket7u95oc46bF%2FNs4bDdMeTP2%2FGuo8tmsSCpYC7wEHl6TP2cL4fY1tjPTAKWx6gXTvRNdmoqV9YfTInxbWsJeQLdh2WxmOaEmXtLLmEh2y9UPorHxeRxjNtJBAXVyWuNCsMYhloSErn4XtfbsDf7GSsOEYZy%2BJgj%2B%2BodN%2F9KLanFf9i%2B%2FiQs91VEDGWpqMwg%2BtT4DcvnD9HK9FZUAqnVHQGjsWKzVC1Tl422%2FH9WIVAuEMK1s%2Fy6Je43iIYr0OZK8gXXHp1RuYV3cogkdsWTcWo3ZZwYWsJIzv8dynM%2FotDS1Q5c%2Bz%2FqlPxNf0TPcipm2KQ16BGriX8WbLXODxL3614cfIXq9zixBxku4cyZw79mcfsWY%2F%2BM8XYp1gNjDQ0O4zh1caPlGoaa05kNTJTiPfntjmEzzg0wBG%2FBj9VnYZnAp5293eZIUH1hTsv4x7DCoxrDBBjqkAfNd8P714NSLUmWCCf9b%2BN%2FTHWV4eK7QTIGQ52Zn68ATUTcPIZiDlCEzKkZEGdfXfPSD%2BJNKYmv0W%2FKhL8Gdez8%2B9vrkojFnQsrnW0g2EDoPZNw9AopiAQlG%2BCQTSlHaiFt3KsdUFPyhaGWAvjK6RxNt0%2F7mty9NrgqeBHvYQUGU1%2BgFqSYiEH29pHuWJyaAJUK9AS3xoinyunxOqbIs5Pi7HuMe&X-Amz-Signature=0eeb71baa6f7e81f2274b531eabb4a5322ebf8c3ccaa4f9bcb80a8af45f4a772&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
