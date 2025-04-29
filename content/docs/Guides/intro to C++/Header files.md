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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3OL4A6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T022346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCriAMB8wEAZKDZQEU%2BC109aBTFLz1Mc7%2F%2Fq7xJdCk6swIgEnp0vbrFNyrr1eVZUM1wEKLreuOTvfhkEQUSi2av%2F%2B8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgqU6stPNjAblklcSrcA6E%2Bh0b%2Fj8ZE%2BnvPb91LHC8mE7MdG5sIhHWWuvx5X%2FL5hksZ%2FQNilUM%2FHP%2BAuS2BOn5NTg0GVH2sHRhwW2LOHcan7jb%2FohFSpdRzyKPaqKgCd8ihLGHFYVNOJYTh9HIDm%2FDJIGJox9MvZECL7dq6oeIBp7PDaapu7X5r1PWglGs0D%2FbujR4F6l0mje2Lcw7G1f0O%2FU6mohBV1zvVJuIvNQ9uj4E6M9o1UqH8YDk2yA848Tu46ZZ9O15s%2F9wugl4LvpcXXtwdLb80O2IlRp3r9vi1lUA9ydXfNdmY5yYYad57Q41UlxWiL1dasGdfBJVoaVLh9NYdfVKa5Hokbfy304Ncv8aHt5HP3GhHB37UQ6UlCXA2APL%2BVCDBqUBXiZxtm9NCD44O1Doub1OVPl8nYGTMYu9a6PPuOVSS1pi3W0A2jVoUZkdfRDh%2BGbHIFikgxnAZn0Oen7LoJRkSTkeRN8cdXDuoMXDLhohqUmd7R%2BHBv%2FYHNaY7mZpdP2LpK21LwFL1Wa699Xb3iO5ODz5U9fldUJA93N8EKx18LB1eK9xYCOU8geJp8o3lvlYkYK8G0weaNUEyCXOve9P2qkKQh9swbHG%2FKSZwUCPL8Zng9czHwVyoG4nkWha%2BzkKQMNe%2BwMAGOqUBWXYW5qRio9Zc14DwlPgj2FgfMBY5%2FqAvnTR4UayQ8hrbP0fj4ZR%2BD2wL9JtiP2J6FQp7uxSejCe2sDrP50Qq0oRkFNGJinQnmUe6UpQhImPwwUQdthDPd58TPBlPxXs7GwJf6GXz8KSpQ3BeYl5tMT0croq4jiC34BfXvRW%2FiPNHHAKbo1oTYaneAHOecxeuWPDMEZxluwYpmLEJAqkTGxcg2UtY&X-Amz-Signature=6a561db0af7d1f2480fefad8be44b358d85576a324b617dccd1d9b7ca64e442d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
