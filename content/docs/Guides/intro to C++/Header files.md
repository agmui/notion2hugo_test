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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PB7IFX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7QuAlq4qRjdiuYQ9TloeQU5GfS7QuKtR6WESLBg3JfAiATyZGr8w5g%2BC%2BhdOWE79tqgeY1zSv6TeBI6kaUb0AdXCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMcF%2B8aDvurL280xgbKtwDgzHjmM1SbI%2B2qxkJ7epw7BJ5p12x5TJ%2Bh%2BQGMiFg%2Bf4e7ekou91R5Gs6gAPpQIAoBV8ynZvTcWuK3apea3O1tDX6R4A0KMS7IjG3pFP2PhF2VNTHG6mdxbZF%2FQI%2Bc%2FEy63Uby%2B6ELS2xi5YTrEBNJXzTqFwis7pSUyE%2BD9n0kxi0PrCVVrMvr7orri7irCJIIbJgKDVg%2BU3nwOP8MUQg86M65XpasghS5BPwPXtdByJcc5VTBke3wq%2Ftzz3A%2BD4HDnMAdVPCzmbeCJyLNt5%2BI9lgG4IamwLkvMGA1xbcra0LWBpbi1pYJAaZN%2FLIXNLfWIzkzyuKYRXu%2FYYFUy0T6D8mybKKRo5aWJA5p2W%2B64t7K%2FbGcWkHfO2cbLOpJhhDnQ4Ht%2B%2B%2BrWFTkrGImdBYZGmxkXaJ9Ac9j%2FeBO044Q2XY3O%2FrEWY1%2BuUa7nvEhvFDmfxlxf%2BCNLHTvof8Cp6HfvlGevxb7xkN7jNMZESHHc3prGcyzzAjhZ7QJwSj3p738oKBnLVQVmBh31XuWq779jHsR3p03l5VDLvcJ53UntF%2B4zEN0cJ7zasn5JyKRguj%2B4WrLjX04LCxh0gQE5nwjKGq%2B7WlE4ekDDihLCIw7EqB1mx1KNCDHMhezvQwwuPyvwY6pgEQsZXbL4MUHkCNbvAbo55lbwhNIyiBubseH7KwFYXNwV4%2FL90WVwmarKHqk3OmyeFPPPooWDTvM3Fj9UT5CANjIt5TFHYk74y0Kf0s%2FK8rzX2zj16Bo6FDqR6dgUSPvScZH1uLrWHRUhbTBQLa5WluBIx3qxKkq9ZZbHB9An2k9ZmZlBmj3J3mKjIaBN6Kc5b%2Byh3mQ6e67GoroHlPcBMx%2BS%2FBuA2o&X-Amz-Signature=3e7ae17006cc2ff18ea24ce2118e761ac1a1bfff5f3f1d56cded193fd0e8cc03&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
