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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSSYSPLA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQqFcCmboRX7LoLTXUyBvSC%2BbzNLkYLyCTpq2l%2BEbagIhAOJaX%2BNd%2FaLSvhVdmn5EctHKL1fafdSolAIjCuaW6KmOKv8DCGgQABoMNjM3NDIzMTgzODA1Igzqz7KsAInoVABSBtEq3ANCXbocOUPAfxuFaeHQ8qqddVWr4BNI7Flri8fyF%2FeLtOv%2FZf4FNHFg%2F36HFHg9HzhkL38dfGxWn53KtjK6jMcaooAlokmJvlBP9dTkHm3kqu1iPDbgnY580yWNUCkRQF4WSwBWiezGV4n0kbMrG4q1RVYq7%2BE2wy6u0ZSxTEEplXRbk7YfAwgyPCwo7YWzae%2FxlkZRWKcbZc60f%2B6MB7kVTpXYDnPBpfrh%2BdDAoBWAycLsnkGFrHBE3cpfjsdTroTg9CYFdwmep4FPrRXfrWr0s6P%2BWT8%2BRPF3qaTra8dEE2cqBDGjtpKA7s5inHK9RecIYGLOMjZtbvbOuSxl7Oknw5sooL7eGAdscstgB5C4EvIt%2Fcz481IZD4OtDFEuoR0sufW6D0KvotnQYohlVCHDhafZtnBSdeJpMPVIDGJOVQuPpQtAYDvPkTu6LQaLnQApaHIml0A1ZXuSp73unP48UffjECp3Kpy9SwhSYxdOCvwHMgXHdcC2fLDlsBpQX%2BkjXl%2Fs9gZPImvGVQ7d%2BMzFjQZhXKdPSXZX0Bd4n4tZOOLNHOv9CdLxLvGkE5rub2a0fEeieJQDLoaTiRTLPM%2FgalvxAMoZRcnksGEcSH1ABdviRtiWLbYtbtRyYzCd%2BNjBBjqkAYzX%2Fn12wBIkNAtSsrcDGBvJLVLyhDTMpzplaR2esA9oPOOuqbr8LaisMXww5Jgd9pvvGK42M5oFJLXwPWiGVeVLPtu4Z2QJSzKhlKgqHmeNUZAAVrEZbyM4u%2BAeHWWyVWAg80rKDzFs6CivwrhEOvF2nJrkKJhDVho5rCCsS3QSb1wdloEwgrqovAPQrzWQLk9c%2FtAP2EA3ckeDT7vB5MUIw%2FUk&X-Amz-Signature=3ebd87d0c463cccc7cf2c1f2aea0e5d23290be1a3989484f65ecda91daa94a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
