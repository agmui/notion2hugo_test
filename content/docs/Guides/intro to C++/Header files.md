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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUEKBY7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDouAxaXmi8HbpG4YWN9Zslrhrb3INzKz7t3O9HACbiMgIgJ7ANYCv00297St7c03LLWs8%2FFS2wGJe4FaASil2iccwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKvdB%2B4SiniTOFY4JSrcA1bkwL03bxucsr5PqQnbpgTZJsVGZOkuplauRFUgbz9RE1E%2Bo5bWhlRNHF9%2BObPwArujMozCwnQFgihTiUI8hxvjJHX5rKm8a9mhBEpcKuaSJOe9eFrpFW%2BiSb%2B7lASuTo7PgR41eoE3vJ%2F2gX4WDYgxhoVb37tizPUIoLKL7EnYHnd1HjXqTRWp15c9RbI%2FKEJd3tq3tDEh0f9h6kerH3HP%2Fv5bia1d1x8vQaF6H9j78zBTZ5SAkvevBSiSU1mRwLpcdrzhfb1hV5BUNswgkXWwaREi5t6SL57NjoCBt8jSD%2BqeQBmJJDRGxNCTWV23YNZwMEq6nEk2JW%2FptoDK1ULAiBiXEDz%2FAXsf1abt0pPOWDVbSHCKLhQIk9IiWZH25jTJ3T%2Bu5xDmVg1WtBE2o2X9rpRuEd4x6DDHUqDK8E%2FsHKLoiL18hjsV%2FJvGW1LmhqPVZedPgKemSjcNAK0YTHmbyH2HVZGxvtqQ0PAJojRugvR3cI%2BzdoY3rC%2FMmYdtgkziV7JuF7VQ5oVkVh%2BXM%2FRIYVQQ2ChAuHUY7YJqDZk1kkGfLZ%2BTp45dCCT1O9GX451P8Qqlpd2LEaUDzlWaez%2F4SCI5T29sNmvmiUvaMA0iDxE2xAN7XPkns%2FZkMP3QhcAGOqUBgXMCrvBVyq2wRg1zHaLtI3sgy2EvI7ceUQFMLKwwQ3IkNDo8h%2FVWSKVMiPpoFOCtKr9%2BC73n2JaL1U%2FMbD5Du5bE4KL1MhsHygcwFUSWgWR3VMv7OwOpg8iHDE3zIF4oFmfxLLw0FXx9T2PKPW56yrUvJM39fQA6i7gTT%2FgiIHPLMYioJWOE5HB7EVSM2eqzFX3V1eI3PukFeiUDzbMEvyQu5xaz&X-Amz-Signature=10d2538838229d1d0105bfaf6a2fe52ddb4355563c9353a2657f3ef6159c4a19&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
