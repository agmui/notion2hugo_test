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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLS4N3PD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCVIt2Hg209HqmlXhqWondYaCj6fJ1%2Fx0U%2FV2y5AbYtVQIhAIFJ%2Bm1qf6r5299Hy4lXUZ40Clcw5b7M0LkvqT%2FWc7XWKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4f5QtO9cSYjyI%2F3Mq3AOYD0EBJ4SqYhSn4n%2FQOo10hJE%2FRdEIZVNyhkDsROEAFoTJs1EhWJboes%2FVTzphcmK%2Bo7Yq49YQ6s4LEIlXhiX0brBjrZChics0DVCSw0IOp3BwGNX6ZpO4hAyUq0p%2BhoOVhvX6oIkyJ91L0LayVDnf7Fi8VRICps8138Wmhwdc%2FzXQf4pKNon5gVAD4nncbB2CmgajR5FnkneHWcg7%2FEQu2dfhJn4gMLXnT7CTjTR0B4RM%2BG9l3In%2B5cGVrBWbSXA4auQVlreC0UDFXQUPM42BwPGVDbaYunw3OYM0yUTeEQO7pZudn0nVKVN8i28YpBY2gFy3PFLFJXVJ24I2%2BD6roVTCaD1DBwud2i42hC4DwUyHrgy2kgGNdiU04oIROtu8OLzUhTOc9PpbecmOPeCR7%2B4F34G8hjsvAFGrXwaP63vilyK0n2lFYU9zGa5b4ObDnytMJ8uUf%2BVAbTIGlkecGqXz433fIeUlzLYO%2FpkliUvDHd6KGs3Ty5WTjQSyiVhicwLXcJX9G6Enh8ERoAQtoW%2BDfMbdcwdvEbLUP7N2kumXPXsL0m9AaKwm448Sg8qLoq2z66uoa7U49AtYuFRkZneMLBijTw2%2FwsZXtedNie%2BY1FDEMIYPJD%2FZXjCP6Pi%2BBjqkAVjWB7bdF%2FbaP5q4baV787At4NNCHb4rE7U1fu62%2BenK96XXyN4qyxhScnV8AdE1c9lC%2BlkKbYNrk9WRGB8ImNHhrTk2JwKF82CRAB0PPBwZhvEw0DyHmP0SuiP8rl%2FXaEF2MW8zEr3CrVStdWIUiXuWODaaY82zfHyb%2Fiem%2Bj7%2B7QtOOOWqkSabG5BH3qVRA7ci7JXTvTIJIn%2FmVnv41MbMyNOd&X-Amz-Signature=871ec02bc6ff02adac6f933fb9fc6f03c1bd8dce7ee2af5284876d9eafbe938a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
