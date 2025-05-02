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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLWTSOS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHJZtTyZhn7ydDa4ONHEdgJ661qZGYye%2FywQ1%2B7R2P%2FYAiBlhIZb18zcUfQW4SzZSPwBFL9JYMLVxEeitcMbYZ3a9SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAGrXGRDjEDNx2pDTKtwDGn0qtZjMZWteqcG%2BcvpZ%2Ba0QzKnn9hQCNlzVCDFt0HB%2B0oYuhioSHMYrLSK4ZlRzna2NY1iWtZQyKfYSbEJo7vEbml3nOAYs2gshjvNgBxqfirvdjt8XtNaYQ%2BL5Dnp7mJlCFZBYmpPkBVsn%2Bi5VL6bmKu0hhTL0mHtWuUiJDj0Q4oT1MiAJEe8lh5SOUEZ7F3m2bJrltbS5BvSmEvsrTfuOz9n9wPlTE917ptlCOcO6m4nf27zOBTmFM5N9d6QXaOt6bYgkVZv%2BH1nmXy%2BBsUhvdPNI%2BnlHIDC3llb2KGxnAIIWFYCjYAVmg3HXuwEPUtLF%2FEcs4JFOMlGsc0mt1Fu8ykQ6eNGO5sBMGX8m0ZUr0drRUiaTMt5iwLaq40CwPTeV2PwGUq%2FnGJ0bORuzhsQdKZONIOONX864sLyZploWeKnhqBbtguamD7LG2DLnQp4E7DobiEdC7BthmkG9y0bZ8BNzm9nJZi1TyyK%2F38a2llvQ%2Be9o%2BtbgWeKIv4EoJuE4mZCfIkT9UqazrlztVm%2B367czAmgiAkwYmGAH%2FemJiJj82kRxLAE4fF8kaZKw%2FLNVE0zEWeJV%2B6HB60neI7BVZIdJQAHI3xeUsWtDMX1tlTejfW%2Blxqdg0Aww3cnTwAY6pgEVSPhPE3Os%2FJoP0fJyDt3gVZ8Nk691NpM7V0d0PCUq3Eq3F1kOnRjVSHBr96%2F%2F6cRpZ9apOunqiBPvIomM8XU21llmV3rMDhg%2BzFrr%2BJUPLIpVYy1fJLBCT5%2BosTIsp%2FOrXV%2BovHhfqs7iDuPFawNNYcX%2F5caY5KG8rlx8GX00CAqhsupfZObtjynpOKrek3ObqEKPfQvuysBSjyB2ydyMMqeI%2BzU8&X-Amz-Signature=2537af051e474f847ae14b76bc2490adfdb55fb2d2221bb11aa5ef06e15814de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
