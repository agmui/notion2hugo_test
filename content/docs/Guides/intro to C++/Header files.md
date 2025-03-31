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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQXSZDB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDAFJfpTXprwD0yp%2F8A2L%2B4BnLk7k8hgVRomQlR7P%2BaDwIhALj5uyPAiqFjWRDrA%2BIed%2FKDgQmVgwsqmlnCayZ7H0kcKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz98P19pHBGVhCB0aAq3AM0AxkkSDwZ7P5SB8BHX4VUkpnBpZCH6m7Ciajgelgb2lsZ3cXisH1hV8yfZh8zMg2Bx3yL9cBOLKfMZtKz0i56n39KLqF%2FMt5OoKJb8BcB9BoVhtadFjtl2sflKew916DDUGt4nHZTs3GPRpeNNGKfcxsX6g8ZyKhS%2B5VqHPzK75OaMgPMK87oxhCYFwWeuO2%2B%2F20J8NjgYm4Aiz4%2B2fMjo3gPyGMYJNZxnaY%2BlnnttN%2FF1zUHAogXACXVoG4d9JaAlopzwchHdOa0VPLXtLdmWmH8KHPW1zn32dcH33t9yc7osd5fPza6%2B0z7ZwjAoR4SlHNvzQlLLkktETKQ5hZgYRnEeZ3Qf5tK0cNRaCDYT%2BUVQEy14%2BvlW1Z9PQY1g5PpZd1WrR2cehE7BJootMOok9kF63xYhbwb5uc7UmqMC3Biu7v2uuGa5EqRbhle0u2IvjKltkZbz44wrXRKexNYYPKCZeMHCnxklal1BVNFfp9a%2FXE2%2FIeh7aJxHEYrJJjzW9hml1wSD1FEl62mQFcxfbxU6c9f6iS4vNsn9N3daWbmnX%2FHBHA9ZW9qlihVgVw78Gar9sVWXR8AcBgZkoVZn0fZz1vmb3%2FxaJOuU0yLXHqQjBHXh62vF1McuDCAzKm%2FBjqkAXilt5EWYBkdR2U%2FuQcZmP7NpuneR4DAZa1HK64VX526Ac%2FpZqJuBM9prhcSQ%2FuK%2FEGVyFyb9FgMnbdUkrGg09Hz0JmdqbM0NUe3P%2F4pB5m%2FSLabrDBM%2FcyI0yRFinJ1pCdMmOIsEXqkkAIiEvx7os57DIi3ZapOBck6EQC5IwifIptUqh7jiU9dbaCfqjXHwxSuMdvaPDmoeRK8e34GWle9MpcQ&X-Amz-Signature=b294c9577b781d490aa5793545469ecd0c57e0bc468267f281de077d5b262bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
