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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMF5KMNQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx8HYB7foROq6MgxazKNnJJN0w9SQ9ej7GzsHMIMl5fgIhAOKnULtcra2zOPSL2gvCAQa5QUyz3cZ0kS9dZbowcIw2Kv8DCFcQABoMNjM3NDIzMTgzODA1Igwev4hMG8hYZOK00owq3APeoQ%2FY73SR3W%2FDL3kRjVvMFCzd5mSGzB5qBHknw5SHjqsZN5MgApNql%2BMktpXCOs06LU99iChXNAO7EF1H2r5hLCWzc1iAmC3jMy7GpxY7%2BHxZSu%2BR0%2BgA6CjGW9KOq7iEGWb9OkM7%2BQTdDnLpE19Cnb%2FhB7MKHLzgByeWbQVc0U62TfnYKaGl6LDUh6KG0gE%2FpmWTOFOBaj79WbeAm8Vbs68orEcCesW0q%2FkwY5R421dY3SUSrdo0IdxQKwpIQ6s9kdJJRyJT6ZyZr8WxgDPw8Xumf3lrdj3X2Lsp3vSfmNa%2FQZpkUS7aQn1TnEESwPFpp284n7UczBrCSpjdDZCArRFrZPlWcx3n4kfGf3VW0DHB8%2Ff8ajgqsh%2B9gFpziTqGpftiH9qJgH2S6O8LvMK1bcMj8jBklPQjrzJLJGU8tnh587rBdDV9njvXKCxMeJjlMXJjBZj7FUAh8xMbTS%2FNaiTRyX1RGZRg5okMkjjMVtESAjL%2Bj3POxS9ULPYQ7ufCcIxOq3NencU%2BlL%2BU7rXdCudXARMbFkeB9NA%2Fct7WyNzMRJ4maCEwH2WoNWsYWfmlyAeoSj3SJdq9sLGHsdC0Auba%2BuxmTsalr981h%2BD0hgteGLPXnX4aut3ONTC%2B6Zi%2FBjqkARKTiO%2BRQlHXkEnutMiAZfjfaq%2Fejs6KXgrWCwTkkiZGzVWCgvP6YZRUOoDFRckPj9tYe%2BSOvuX%2But8y3xxSFycO7t5Ij51a7IhF7CeVc%2BmKhCeNqU5QIMlmst5zhORS%2FLnJONBTMyTtFVX8sO86TZgsLoHc7kU0pbgFGN63LnJOukSOZK92Rb14%2BaVWDuHGa4vAzDlID85haniHiM9fb0Ua0jkp&X-Amz-Signature=326f5a82034bda104319d6a88f3975a3c99d122bd6dc8e9addb235170413f227&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
