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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPECWMH%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAn7q5gbse6sYb%2FAS0EgUIhqcbbCELsMPoRf1yCAL%2FTKAiAY3m%2FKs4EOArYG7n0cjZBk9AgDhOf1Pk%2FJbKNX8%2B3Tbir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMVnCu0ow8MsHkaNWTKtwDzOY5zPRzVGXye0rlrm63N3%2FHMKytuQ1CaZtJs3TwxcqJ6a2e01Pqe9KWuDZI6w%2BtOlR34M6Dk8XBDaQtCGCF5h8%2BqBRkegqiRKYwqURXSJTS5B41KSelT4O%2BO2MEO%2FWS9yFOwR2heipX5yUYcswtg77RTwvgG8uMAcf2zKEVP73U3JAQKOkbjpP4arD9cGVIPclIlwio9fIgI5qGsnb48vqOjaIVyTAFa5JGQnWT6iZa5OWd2tMrKD8DqtTjGGSPN2XGNMupNleEDy0h7VwZPBPO%2BV75Ad2Ou0TsHi0b5A7vs%2Fr2x57NVOlyUJ7RtrKuncUTwjVMnD7b93ciGemReTpcuMKMmNE4ODxoSbIvYgzQbaIzIymmXc8FEZPwleA64ipMz2AnJuyv22zhXEP4%2BHqT6QFa0HOIQBinqfvjpbQA%2FvVTqUx2CJChhP9No3bnrhzfBSwHAuOJlMJ4mj%2FKjsbFRacyZs3HE5wx5wFkvPVBvqLlsZkACJFu0euJHrVhPpo%2B2sHz2PXqSsAmbxn6J4fcyJ4OSEE4rCCqZLu%2Be1QVACBtwCrQaSXtH9X9cwjZ1xq2la6bNlIZ%2FB4BvJDNXoWOyk247dXDDMdtM%2BhYFOr7s7hY0UtmErLuWsYwgvnSwQY6pgEApPXrm9RQMnmajJfnRzrUpR%2Fcd0p6Vpp%2FqruBbq2FFo8%2Fy%2BOiD5ILXOxQhUCP%2F%2FX2W0Zn751Ib3M23%2FYeDmwcQlrJHUcreo5Xm7Bm5nDBAYeTgJWfFL54%2BCAgne%2BnebKXVRVMF%2FEmJLmgTC7%2FGllMCZY4wskRdDWTgpHWweSaNvbcYm17xRNAko8lmSyFcymVAN4M5VzZ5Dw%2F2QnrJgazfG3Zd0pJ&X-Amz-Signature=db61e39b30495a44d5db70be4fe475cfa4c684fc029013a31d6ce9bb0b5ec9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
