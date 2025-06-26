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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTUDEQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDla3hHReblRNaqtdzd6f1A4eAJZ%2Bk43mEscC2eXF0YEwIhAJsQhs88l13bHuOYTRpmQrQvXKBzosIClyjxa6i1hHNxKv8DCF0QABoMNjM3NDIzMTgzODA1Igw4LRcRwrX%2FDTmMftIq3AOaVeRNeSdGZEfa2EYICJ%2FlNcI4gEDzhxNkhPjMZFeJosRpEqLbXDgW77KSkjGC71%2F5JeDhNy9cOPPqn7qi2q48OFAa4LlGMgU4gVewz6zNZF3qubhUAHDwQcy2hmIeo8etKdEQpfCypoWxc3IKCHemxIBz%2FvLC5CfafeoHa8hyDmXMA59RIh9Pyv6OmNRUJM%2BGP5PW3H%2BvUg4rfaq555VnxDTeFfHMIq5tis%2BudkFWIZn3ex0ulUXPr7TvJ4teedb0oz8ou30H4Zl4k4yAhbxy6k5AN4eKCfUZ0P5S%2BxGdFxlHpS%2FDTN4f0Qdt81RMW5pizDhCV6d30RbD44QYfmhK02VxQrkyiH1GiyitBmB60n1aKFJRW%2BdrTwt1%2FWMGExgQduxSsY8WgZUxLvNggS1M2vmNjne%2Bt9Pdsow2cnF%2Fff8FokHqZmntCW7nVZBAUO1VnwkSzV%2F%2BVFe3vZEMEM3wknMGeB%2FAuvmsGT8yBXUjj7CQBJ2963HQEAKlPcMT4hh6rI2n49%2BPXeOXOcRvj8Ayt3i3Pt13Xd3oSAfyecQoUVOBkrleltikliVN2focnRTkcDxkAkI3LxUmBCz726WKadQQSIBZciX9xG3WsTUEQVTyfsetuht6XO1L9zDE8vTCBjqkAY3MZeGZkApJtORjkNX%2FlwyRYdvscJcN1Gsl33CZBvGGZBut9A5fxYwcswQeUITnc8lDub3duZY1o5kg%2F%2Bej9u%2Bgs9UdpxQrTBt7Ai5%2FyS09mJgsfrFk7iJ6BK91VdpxfMqLJ9zcSqJzsFm5Yqms1HBNVVekWCXCPkPZGzd%2Br%2F5%2FV%2FJVklA%2FIQHMiUSxjkocXJeU%2F95KLxGuXaM%2BA0v9LTbro8UG&X-Amz-Signature=72895e8287233f32757ffa49e315f4a976ee41774b6c33d0cabe53944617d652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
