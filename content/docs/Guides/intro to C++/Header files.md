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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUXSO7M%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T034106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiA%2BqzL0wCvHGOY2TLW%2FyDhFQ0isET4H02AgvRlVS6nAiBoWNywOk3msQMaFmBdsVfsKhsOI4lssfIyJ%2BrlhyvLWiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnOfE26STbCpx4sFrKtwDWDQgWW1VCr8KBiftfrN255USZ7KHf5n6ODpBoZQJmBoQw9%2BuTRZ8rHr1n5NzbwVAg0FfY%2B3XAPxprpNUOMlSTKr9nnlh2YsD9S4RtQuH%2FEcvsAjk2rccMnI2bAeOYAXfXqIN6w%2BYXJH9BTuuUo2574WUQsNV9pNrh7YO95kViTT%2BCvu2oTmQrjkDBI6mZ5dNqeyplbVbApebYBTqg75yTiJax2f4653cg7LpGAh21MjiuytY9ISZVHA%2FOdwwQXB3injBaIe8sOJiQX3ANb6l5L%2BwgrHFgHqhM89NJjSx0%2F1RrbJTtlQgpSy16IPQ7IsicIPRTAEflwUdG2OxKv2DOPGxQjoR4fhCWttfJP039oelRwGMuNgwB4IbVOyvXxQQaoQcyNm6pHX8EOwm7rcceoiIV6UV2maEiL0OROxhXzXntcNKNAkuJ5pP5%2BdFaWTiMfDqWEWlT%2F%2BLB1e2QXjKBIZuJciFHIRdAteWX3aK3tFLPXaBcA5%2F9ryGfLGy5%2BWvxPUdcLnQ5EgYSVq0y1ZNNQQKEtMVn3dZEd4p%2FWHCSENr8TWUb%2BoW76zl%2Bg%2F%2FAhSHN0fLDgrTgNLaDfoUxtK7m2axW3lj0Kiugbf8ctsviFbA8Y1k%2F2B6ba3OKHswjqGewgY6pgHGn2wNzwGJtoVT%2FT1su%2BFy85jX%2FBF3ug5ExndYkfLRIhYVLazWyuzb0qOD%2FSfGczOK8cPFBEL4BBhDcTpfLXdX8aM0j%2BYf%2ByduFrnJpo2CA9w7Aa3SYmLZvGf3byrxnCsySLNtxq4T1oUyIZwvOmT1s3C9llrBrsWxvje6c%2BPZHPGHkuXrDjuMAcp1FV4dry9%2FxRkPw1Tx586DztPvVHugSxczcSHa&X-Amz-Signature=01840e9f99cb27ce88642edaeee9d38855da35bc41b3184bcc0792e3e07c0f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
