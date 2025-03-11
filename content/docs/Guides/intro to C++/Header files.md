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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7IINNXH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDvIJpM6wRdjZEW9zPJYOtzaZn%2Bj8D1TzzLP8lBGiSiSwIhAIKW9wvqYQ%2F5cBJu8DJeyBaJ2vqn3M4b7mHHDuTmtI4iKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbyMiQzU6ziK4T4e0q3AM8JWYxS25EYG88GD1EU11vecwNlsmdBPa6k700%2FU6IhZf9GJyV%2BMYKPulXNvDXUdJsh16hFNwsKAgA534UbcK%2FUHtjRG2%2BCrKzMUEVavscTHj6ta%2FgWARjpr5HZinu5J7fq4zKZXIyFydpyZEom%2BczB9lIGRCrzceIjMm0IBbvCPBJ%2B1glKIr%2FzzFo901vLTnPoOASyYUJCEQTCxr64m7n8F7jyb3RNjHit0TgauMTV6rOU5EXD6PRbMU%2F6FblqOss4PuHH%2BFR%2FUngZCt47h5tgrXznL0jzuvJxx80OP%2BtaUMPUNZvOUW4D%2Brc2wNtOpQj2LwLfzQQVNHYnitlSP5W9CQbUDOT%2BZxl5wwg657iM16XRSYhXt39uXTJBg0If1aap%2Fp4SfjPc30QnL6vxlwvmLhWzXudoMWAAYTRpoYX0%2F0fTA%2B2MKkaQkyy3lJccMRYNxSeSeahGxXlUS%2FKdAz3hFRH90Z9kBZhLe4sZ3N%2BvivLrScw%2BLWK6tZ%2Bjm8%2B4CKodGU0188PsHMe%2FsJafkcWTVFbPgvcL%2FR2BOM6LbELk0VPZGdnapnSI7HswN9r89aePIFE71LFryOmzN%2FbfcyQ1tq86VNh0L7dFBUDmZeLzKjiyrVken6X92BZ1TDO8b%2B%2BBjqkAXH%2B9NYXCq4%2F0BRiiwm3NZhnNcgCgj8hR%2BBr%2BSz7bqnB%2BXInwUBql9sVuiE6HA3RB7tRpQcMu8jObYaYvX%2F39bZhGwy2Fs4PmmpoU5X4WtMFeGZA%2B%2FD1SzVw%2FOGEJua2bm03Kc1kmP4rLi%2Bu8MFAy3ghpE2QjCH2unlu7bswKjd5ZTJjeAA%2BFCsn14YEqFh9vPLpgy%2FwKUvimluBikSyeO3sf6J5&X-Amz-Signature=ddbc9e9ae6345162398ee6b44d400b9792c3f224502bf0593c5215a379ffa0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
