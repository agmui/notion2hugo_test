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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDLLITD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FCc2Vcgfe8T8nznuFKHAGFzPgVt%2FbAlhddyQ0al4gpAiBkbwb0jCiRPot6fPTQdHMsLkF%2Bafc4ygpmGzg4UGQkACqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGo2YLU1ZlqjcI%2ByfKtwDJNjjZzSARx2akYXuuDsaiKEOYYB3WNImjBY5cdxgEwbm0PPTekBs%2BRcd%2FviJSokiaxNVEaejPtIMV4OAaRW0FE6%2Ft8g31jA58zSllCJ5bdAFmjRqDsJtah6SzhKmw9ngvCcvxJpoM1BPfthYO5QnH5Jo9U4DXJCCHKHno9ZCEzGp%2F%2BGrd32Ih6UVO%2BGV9cG4tquITEfwoLV%2BAYMevLyMKhYP2Obx7N25LIMC5YkgSrGchCswuPM41xQWEtNLKQcnf7GOGVZ8hQiVVGFE8ik2CY7Ia8V7wSHaBGLaCDiLxMS%2FIHMDKjLAo3ZuIn3VL1RmDRaqi%2BIKOL9wKhmeeh5LdvZx0BIJKoue1z2Cep4zb9KTs3v8sYEzu1rCYbpouElHEn1%2Bo3DH5vorc%2FqUvNMQjRulVFABeEOcQ8H6QSwyZ8UiXXtBpjSKntgTLKyJBeP91p2Lf7rZBPKc4G%2FhQp3cjVaznKHjGCbVpnkHZfUuwTWtb6W67F%2F9qszSyeQKTVqhVfSq8p7ijXePuZzaZ%2Fww1fXccRcIUPmdICDsEaJEKuRSjML8uqAx1WIy4RnNhHXtUgqzr%2FUcg9jZz1DuDQDXMgsA8axvoLjftJ4zPMqrIOEGwzYSXWy2lRY%2B2iwwi%2BKXwgY6pgFi%2FMbjmk6r%2BhokQMZt2res93eNqUJEP1redHxeDhmDjog81fmpq2wQZUHhzeSsUTlPlZ%2BG5XdjbAYSNspqoX36cLPepBmIcAyP%2FB4zBND1WgrZqewcOHRL0FzymyOu1loxBEp%2FLDcQbAzuSflhD9W00ePyQ83eDz2TR35NRfA%2F%2B6oihheTadyIIhcsNbdvN3YC%2B301Z3JtDoRH0EVp2zeM92hCoyRh&X-Amz-Signature=ed1ab8013f7a3480bc150227e663d105b74a3c9169cd2b0b9fe8e17928c01341&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
