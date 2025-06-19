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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FI3UTIE%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPUahG6i7%2FDm02dAuLwvFiU0qq%2FXxNkzS2ll%2B0oj9e5AiBH8c21weugxZtJvKrWL1tF9ku7iI6tga9cKhzI%2BNEDJSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKakluuSCj3ffkf07KtwD0o7CPJQFB2xmkovITwsH94Vs%2FchPzGx1L6GctxZd4WbC%2FcB9ciDCcFTOkoyp4lBNkK5otrFQciimiqfWZhca8rSXypGX1%2FXbFHhlc5DfkdAhDl0FiVJ9YdXrTNJjHXQbwiH7tHnyMX6gJGsuJE9lXhDIR76FOu8DpREFaYx9Ky0mcwjsQCw4KD0pU4YhtQqZHn%2BaGy9I0QnI8LPu5zV0fK5Tmp6Mb2BsPQzg1EJFjQo1QdMN71FNlAs4f8ljSmAKIMVhzpTOC0ZNO5DaTifzKQsV%2FIKHc%2FuI3u683eSx3E4mw3ds8giYHJq%2B9Voc81wwhbBNB4b1%2F1Cef4NyF8%2F3fs9cp7o7n7xc%2FtQWqgZHYlRuNGT36HhrDYGDfJnE9Z8kLtWGtyTsjjbz7V93zuz91Au%2Bx4kA2G56iucgvrwqAaF1uzqFEYtC7%2BOGIZxIMkFIFCqqMZ3I1OELYbRW5mu2o0DhDT8C7mP3WdNkqh%2FbhRrxynWIVbIARpUMm5jJEj5fhzLIh8DuhO1IXDKSj3T7lnFHogOOS3kUbhac8qJbBRLo56OywjXYPrUSg7p4SasUiw4YcrcaYZFHVdQ5kC6hCh1hQn6ygG3BS%2F32QTDI3kIDobI093se6jqUouowr6LSwgY6pgHUdO1GTJoXyldAcFiusyuJCr0c1JKYbN1NqgncTqam%2BUzWGmnRxDGdDF6K8K2nKWC9U0DXnKYYlzOvTvp5a%2FT05xRmw6xJbg%2FlJuby9iX9XmzYhz2uS%2BOMa%2FdvO8tWm4dRoWVKeQFlUwwiWTmoA44yC2QTCuYV%2FP3Fz4xlzHRp2tYxIrA%2B8AGFLs5wpt2DWSbN%2FGYWTtKIXEOs3MaWFtEFjqrDDHhN&X-Amz-Signature=cc98d76e9ad53f55031c4ba1a807cbab02c98875f545321b10c1f671e93710e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
