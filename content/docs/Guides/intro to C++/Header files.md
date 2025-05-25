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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THU44XC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGm79BmCg8OM%2BBtp3HyrCugGT%2BZTHTi2rgljaiQ3WvvmAiA2Rfb%2B4FS0iJ2KqGvZgB8q8Od0kQU3ccwkaPO21QRzeCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMGkIa5HaVSBA3DUcEKtwD5FhrlZOgNSmOLJVujAMBscT7tYULrWNWqkTmiuPCO2MOclgvYgY%2FBTBr3D%2BbKSP7Bgrr6IxJRpgFrVjPeQ66CZAyS9T%2FKCvohXiuYC%2BrnYCRURxBrdKsTAPd5ekq4SRiRRRHpgTBWk9NCDVepQ%2BwkDS9XCKxzOT%2F6RgrzyUnDabT5hAKXnQhrpv3ByoXsS2SaPDnkJ2IKOf7vI6FzxXRp%2FlmRIv2ke9IDvZgAmjnzORw1rBpvKOn9OF4hY1CUbYVt8541BjJrs77LvRU3lZa1jkMwfL6KEerjtMBEyDPPTmt9jkd2rb%2FBzqYTJgGMKehqIpx4%2F%2B09KkDdn%2Fdxc%2FP%2FQOTMFbCWFRToXF00Hkwxlew0pyy1S7UKl03K1znyRKTJRxzas6LNN5hsAQFjzXmGVyuyHrXk%2FigZGbDC%2FIIU2D4wEJExq6Vx0Onk0y2K7Ib%2FsDraTyrgzTPO5G6dSQxI0xeyETp9WrGfmARJdgppA%2BwIwr%2B6fJyk%2BFvdfc5KI8M9%2BJ7V2ATUhggmv%2FOuDKQA66ujVGodjaqor8ClLIDqbn%2Brm%2FU%2BVa1qzgqKjaPO%2Bn%2FKu6FqV94Vc9pJ%2BBoVtmJHRi7OB0dC%2F%2F2jE0FyXh%2FTYzpc4gb2Me60OvfCJAwm%2BzJwQY6pgH5SMIc2CdNaAMpJ20LvgARY9862P5hFP5qYI%2FXBEGTwfnpFgR%2F%2FLC%2BzWao%2Fre0AfFaKNYxXxPr%2BtVupLh03fHcshgCDSeTpSuUjC0IWYQJokz5KUMTz%2Fib1QG%2B4XitjDFZl5fVtkJVqVx9%2FdL96iYWzro4fiWAYmnXSTe1P%2BCv5gpyjgpPeGpenwMwJvcq32dn9l%2F%2BeNBBjTtPYV%2FrNB4FGZm%2BwkgA&X-Amz-Signature=a7e219157b8f6768887127d6803210b8154e90e549255462ad8a06dfd783c261&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
