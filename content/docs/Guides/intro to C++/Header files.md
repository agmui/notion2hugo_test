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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6XGWHT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1acPlGUFMXGYD4WGaGJx%2FM6pEMoC%2BYIDR25oY2EmLdAiB1EOArSozGb6jjvq%2BnayNa9A6mFOsgcRecUeKvyccqXyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMISbNoyIsJqYrv9OSKtwDtPdRovc4CJC9AbCHwhDncwLfhdkW9YtV%2BatNKZ1oIsoxRI%2FXf75u1%2F0MFlvq8qC25abzjBcw9tOj0H9pcw1%2FLk%2FAYGQqEKmgGZ962gV94U5nna3WQETy5E1H8JAGzwo6Yf3DAXWOqJuFeSgBFwHvXmeF3i%2FPCXmjjKmXYxdwv9kYu8oWTuhgDUyOotYqX7neq%2FQLUoOyHL190s5NV3l5fXWDVq9PkQZYjkn6SmDC5CjvgJJ3RFEzwiBogQ7Ryrcg7NfiB0%2Bf5hSwug8zU%2FulO02ZrWXQr0AeTweYRo4GZQG4Z7PYqaJKZhzPEdAQtSL1c20xjvMS0qSX60rnE9UMnGz8FQy5ZnDeVzgwnfcct7m0NsgorPFV%2F%2B2JgSzCYozeA%2BtlrFtf3et9VW1%2B0i9nCxflUgMdOWhERby0MrfGWo1mjFhzTMN7eRjGANdXqjzfTFZui8C4vLpgIy3pt0zN2P8UPPu3%2BK%2BrOa2wte5hUngiLt85nriDayPBv3b0apySivkRtw0Ve%2BbulYhw54nj7AtPLGC%2BNBsEsAKlnAb%2BApKqM6SmjHHaVjys0aLKJSKfl%2FLDlCdpSC2bcGL7tjooM9PO5Q%2B70wyde%2FJ2QcWpFraMLrhdislmnTZhgI0wn474wwY6pgEiS8emPJiwAFUR2xGSAuUqJM341hroe1AZveNjJvY62HtcPzJ1NTJFqvgNm43KPY07eXhXksBm0D9dhCwvwiH9xH0e0Gf0QdlVhibmACQarwkYdJYq1%2Bb3uJHtHGjfS9lqeDCtUBCDR5b9nmkOQJduy6Q62hPrvg7gDfa2YjD7TAKAOKRxT1QAtVbWsnKQ61qTlvp72Ur14TmiuTdFwn6K%2FvWF7IRQ&X-Amz-Signature=d4f5477ce2948c6d7cf8e70c7897c7db78ecaeed8690d285eb1d15ffc24e4e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
