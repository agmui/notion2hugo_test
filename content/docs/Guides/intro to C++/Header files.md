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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2STIQNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGphVmlhH46TljXYYABmcmKD41YI5G%2Fy3yigs4bVYBrJAiBhAt50PXkHuzermEjUtzxJXHnI%2FWHD%2BVrt25JlLyJ4PCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMXnxbyGQFXUhGDVkGKtwDnmd0xsrrAqPronlmerUZzIU5v%2B9GVsngrILrI91lj6zUlNr%2BYujZPbZe3rcwEvLobMaCSOEvgVuvsKs6qkqKmuhXeu9EhNIkDBbEsbTJSLC54OP0RgPLbCvkwVgX%2FQnfzQzlEVakAR0eHnuecUbxBscJFu%2BuUbyRCoPHrqgkpjkgGy8qMbLTr0TluP7po3N%2BxvlGzjwBWGLiOIg%2F9fBrLyDPenk8zaA%2BqE2lKzSbEUmQukzz%2FXQOlyyaFGtW4Jv%2BBbSXxWKVYHnGwneD0jq8EbUnRY5ul9J%2BwX%2FxtOkO2aO0hwssU9cDEmV3AqkYKpfJQWp6wTedpx3%2B0QqkP30Yq51tbRvZTWdw%2FOeaCCd9OXeW2cFczd83aw8Qmv3wlIZ3oXXUp4jVHMNN3UEqnSvE5h57YiFfciBxCuIeUjCbuO%2F111KigT6Lid%2FxBbyEzsnbo85X09MuKCMWGScKpmO%2BI59PRi40fagWUMlKVntRNYAW9yCKRAEpBevpqxrk6LFK1l7c1x9yPROVCJ9fUEwnpBqWhFVoIE%2FFjx7sDBJwVrHlW2mNSEZB2SSdBgCoITS7k4tyDZlOKB40CZUwGzCNLP1qZ6WqfKdfF7SiiQDWyOyQuoRav9fxp0azZd4wjaO7wAY6pgE7OKwNXT4bGSGvUpoBCj0SZMEtLZiyreMfWuTr0fIxuT3swKC0N6uBsF2rMWUr0QESjbOjLQgoG123g98wACERXDpOr6L0dQ073tBEuhvTeYjdvXebgARYJF%2B42G4alA%2FF5jzVkAREGbupVO1Me9BuFmgzvWKQgY%2BHzWssaNEwNhz6xR%2F8B7pPFDuDGOiCMK3JCYSiJ3IFMhufzmys%2FvuND2vXz6wn&X-Amz-Signature=753c5c3d0069d800878a286e75e30f3a81f0a57630c5f7ace52c65b03b631afd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
