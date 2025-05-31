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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUOPYE2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDklsDlqc1MfcTy8fQFZs48%2FsC2IrnC6qVIbQo%2BsvDjJgIhAMMf2qFFR395WYq1kjZz2TtMxwQshZKJC3xeSe1Dn%2B7gKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDQKzHEvj0Xbm45boq3ANKK4bJvFj3b%2Fsv1cbqZ1L7sU2SMDOHtmmsl%2FwQkOU67MrbaJuwy29iSpbXSEezi5mkEEWmHskCAhJxXA6Q%2FJMhOlwa5%2FRQaFAkXn%2Bx8TlDpzZ6i8ikU69%2Bbv8RzUqYpMZ5%2FY6GQrIW0BNDFEELfrhdqfSdWBOymzmZmAmaj2G5%2F78j8GOTtPqMhFzYcxQNt9D2qlH5JtotEB5z1zDBAVxVIwbQloLVDI9zNsYjoAVUZpyKDOtNn5O0NoupO6JPGqrQZJoVcijeUQO%2BYskGpsGvp%2B6uT04SQjgAjWyGk51okjvBz8XEWU0EX3f6QHlHhBA1w5Z0w3Hc8cZkguqFlfzbgxT2Lk%2BF5FZCDlvW7lw5IWH%2BVL2HUsiu8oQXlm0EsFslkthqdjXmRPwu2RZUXflsVq%2FTRXMPIuxiUtO06NIBRe8HrZCqiFv%2Bj8SBNu5GjW95hb38WvUCR0fA3zrdNM9RT1IEbqFWCEq0oqDY7CTmyVYQ%2BWQ%2FayD1kgzySYIFgjHAPmCgBUZCYxWFYbg4dVdoCttFLG5V5GGwsp7kxnsCTQzJGv8ouiC5aG0ZUSOXphPh90lHMVh%2BV0niVupEtzYyLHNW7prj8GMuJysPBzFhFOu2OCr31PQiysl3ADDv4evBBjqkAZv9ngMKc%2BLJ5TWWg6c5KlGQFcPajLntEPVDPLit4QVoHO6%2Bvjb6y88elydR4x1ntiIhx5rAPvR7kfzU7WWe6DZvapJ1c3boPYn%2F%2Beq49KZNA1YWJdHqQV%2ByUCbDQS3sl4MplzpU0AQAOLt4A90thmheQ0awnC6FM%2BowZwQ7LUjyhWsr53pJiZS07Mb1U8V1Kem1Fjk%2FTRxQkC8DAMLzJ5zn%2F57L&X-Amz-Signature=3a3352160ee54b3e531645941c330a96a1def9796c93e11d301714ba74b0a4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
