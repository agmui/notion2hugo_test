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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMS6ZZF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtSXBPOIjv3RTC%2B8NhsJoyZLyDQwIDsq27VjSu1Md%2BSgIhAJy1oA2PejnQEvTcXcAu4r9hTMXoVhNmOwQr5cmUuT1%2BKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu9EHAz%2BKPjGK6SOQq3APmaQjg0yiTw8T%2BBk5HzRRq1AMwxaFqgytFGBtro19Jp5pJnjHqaMLLtrFEbMiNauO7vRmbhmuQPauxGWKlyRgLrm0THB1rkn2BTHSQzRYqa%2FWExNG%2BQqoIo2FAptn3QNWfYs4yEPV461alIMDhqS6L9S3xnTUtS4qTqSpp1LqlU6rdsOU%2B6%2F%2Bwgm4FPuk2LmMy0CtA5NE1Erf7PSa4u%2BFw%2F%2Fz%2Ber3MDkLQB0iBb9qkZP8FUR6pJmM5NbT4x7Vx805T%2BnTfnhb0JoIZzipOvHh2A5LkgVVgFkEyMhbY78YkHVQCuEGtWC8Dkdm%2FsvEr2r6N%2FQ%2BKA1FMn9c%2Bn3%2BkQnRWbd%2F%2BLZhsf1HQX7IOc9iflDh%2F0b8KbglwfkyYtJRoGyNw1YW88TakCJjqVPazdPO7uFR4C6b4qsNut9fq85IsEL4eUQ6lfPO%2B%2FzPQuJA4w7pdy86oy%2F6vkYixYDlv9xKEmJbk26HDGID5W1Nr6Xx9KIcGf2eF1is9jtQdsAFS%2BFyvntgLDgeLIecoKcSTOc9zGfMA2xr%2B6AlsyJ92bhm%2FGyzAM75P5%2F5DGG59Da77VDbIc98iZ1%2F4jkVjmI4L5c7uXbN84T4VVcTwXNDyEA%2BtyuWfr%2FcUcMC363miHDCsyK69BjqkAZjXMMHeuAabSY1%2FwBonu2GTlaH1F91ZPAwWZmzR3QvlYXzf3rMv1QFqN99rHJaxv9NXe7mdFq2CpN4DQKJDdjlZMx%2FzoQqI7JcyDh4kVmgvGSkMjUy%2BmDrdv87Jz1DbRNQv7QX4MMGDiRq0jjVdZT8nOlyuqMVIp1BvjYTGdLro0CiNy%2BeVOXT07ro9R5lXgGz4iK1q3t7yEdMTQpig%2BF7pcxLh&X-Amz-Signature=82dbd8d8c76d880d08d56c47b918ddbd166e1e07b46c76dd80e9ce5559e1ece6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
