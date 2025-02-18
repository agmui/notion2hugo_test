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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQP7YRH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBBaXW1Nse53VLXSdWcvvOleJmx1dLUK6VcDJEKJRMzQAiEAzTF4sRwF%2B1tl0ZbcNxFR0xPodtakeygitjXCrK4fIYoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAidyvBLatILJl22NyrcA1f7rDP0VmvRxIb6nS8Ntd0Ekv6aWB3s6PYrTv1xiqbBwrelTWwY7e58oCE5uwMH%2FZMM6AyWDRBwfnuupd5JgVum0491zgwnmpsFCK22SNdwGsX566QckjqAta9pRg1RpYrp652ujHE8pKbdB1CO8T77zFenMCnFf9rXtA5NjTjlY4vbEIq2%2FVb%2B0WT3r%2BRVBHB6fTkoxjdBILX3JSVj5888G4HetAzfmhP3nxebFM5E001Z6kYfX352HnSBR4JwRnWwYbulrG6msmY4Qpcy2ynLRN66CRQX8dMptaerlgZVQzV9ihBQX9m6Xb3mYfObVU9jOHz9vAREmmux00qyv%2B1vSee7glkaBU9bYBR75H%2BNwtc0LXgiZQJIQFv1Kf7kbx9%2BnPQ7wjQ1g7DbMnltvXJK0yF56qyrIByd9CnMA7AZpsb5QTGWa0DRJf9%2B4LbGO%2FVSMcqEGv%2F9zPfb6jJW8AhJwHIW6O1XjPGcRcL%2Bb1yDYYO9j6QkRyuGOluUfHr4ZmDikUHD%2FxVvzuXxygvyzlcbD90zIFwkP76I9b1C3TbOKhbuYkDkRuJYzK3NaD8yR0X7BcFf85xvahjMc1mCB%2FiiMs8fQLXnyMDGV7MnqkDnjWnJ%2BHNyP3mvA23IMJOb070GOqUBaEl8Hbzzb1uztXA7biBhHZvbXI6qdCLfwbhh9xmnzqVIME%2Fk68z1mWgoYVjqtSc%2FTPVXCYkvRoZIwfYoDzhbSr1sYwBl9cMpdPkWD04wPqVHmW6H6puunsZnRXziFUBsFRYBF5LBMmOcRtjdyAn9R%2BsQiWea8Yo7Lpur33wAPIEkS%2B%2BhSwOP4vlGx1HjxMzsUicV8qADtZruW%2BGDMM3sT%2FCRxEDI&X-Amz-Signature=830773a59bbc19b892326894e8dc07b297bbc8707a76a525526e8ea188ee4f67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
