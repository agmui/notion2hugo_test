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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUSBAR5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIcIXORPOmMm7MWCnO5KNsLQr8QKEUTp6j0s6bhyczwIgJ5fS4nEJBs624xbwj5NBFy821ESEtoa1o5VXXcB0SBAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDElb%2BvNGy2XAV27H%2FyrcA%2FF0aCrdhxH%2BZXoLHNQZTN8k%2Bsxbagiokv8H7c44qYya3IrC81AmjwzuE7vCZDzL9YnSIRXTOYHQJ1f%2FUzOaOtnaDX8M%2BFI0Gxu1KkeZlu6zXAbO%2BMXk3P%2B9cVJ4obUqvtUfKsEForw2%2FsHMC7C4BEJfAbnqgfL6xNa17azqDn0zjyU%2BuT%2B4CA%2BVD6%2Ff%2F6gvbXVAUa6od%2BRWCxzSrVzSJBME05Z%2BjJ8mxwHHtUeRXxdPXv%2FwGKFjemKyLYWBvkU3O0hTk6sj6pb6%2FQzb0T98G9PRNUCscCx3tzSPSUXs72KyOFQPrUWZl%2B9upIjs6U%2FhhM%2B2NCN4GUgnoJDZoK5DP%2BlvveIpZ6ZUARiAmwlnMhxBDYtHb4e37Vn1vtClkmcultztCNp4oyTKpg1tn%2BtD%2BPR9h%2FOOrckmKj3ZSokGo%2FLaE5HMNPRBPf3SSoFjGpm7VP8qmzeE8FGICjXELvTNYhUqF2XQydSgqU63W8JdJ7JrufDJ3iOaopKIyGfrBv6raEwU7ncuGsU97ZQdzXMfe4KTfogFrFy0lOTbElFXDN6A8scQ%2B0iaaOl3TqSJrurwMiXMm95R%2BIA9JoKxjpydn%2F42uyfIMEEp98Np1m2TLZyxG9ku6A4G29PCm77GMIPttsAGOqUB5CDF%2Fa7M1zpBoIOkfFZQoDwOSPx61XJ95%2FlUdn3aBx8XiAXcR%2FWt1R%2F1xRZ8UktR5X2%2FteEKyO0aHr%2BE8JVpG5MGHtnhAVSZSQ9mtZMtZypjcJHq2xIbaJ21fetTzzZ%2BWKuN3WNPosJn12%2FZYYdiTwv%2F0iCLZjr7jiFKAFIGBjp1TXzO05ps4k5Er7OhfIgTV4zffq5RiOrQNL9on%2Ba2yAgInBqc&X-Amz-Signature=0df5d60d8483cb2822e5a19f8b172ca8dfdc1919282e1d6b942d6c27024ce07e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
