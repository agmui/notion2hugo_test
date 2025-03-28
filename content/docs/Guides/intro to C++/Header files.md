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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3MA4JR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLX6hkUxWIT9Psarm8vndoWkPn%2FLAoceR6P3SREdLCVQIhAPt35ermJeUYG7czFFbpR5I%2FOQzTENt4vG7E6QWTkgZ%2BKv8DCFIQABoMNjM3NDIzMTgzODA1IgwjU0xr7kDifaG9yIkq3AOqkBPAykujTtnbGe78ejHtzt3DpJcc8FYAR7wJvcHxN7LiirtMzXxOY8iAilzdK%2BR7x5q5Yhr%2BNGSQrZVQfvmguleqUilzztJMr2%2FP%2BEOqCXDXy286a1CEuwzoSose%2BUQBsf9evyfU49zejz%2BsjvW57yvkHGaTRtX26LZDQb1dhk2zmF%2FFKfTPfNX7pP7lDnnnvJMl%2FxAXTlgi29zbIQRv4HlUt3VIWYUSbBK0kDZJTlOz62a22yZyErfxEbjii6RFglaWMogE3hfYWAUgc8yuqkMqJ3vWuq%2BP8q6MiAUrjjKSLWWA5r4VBuM143wblxA7una2%2FlQbCLXIMO42fDCBHeH3Y4zbzhpR4yuHy43iFcyMq4N%2BpcPKhOLqXaHXEdvAfMWbDA7vGx0MVYxntVIn0uFi%2FqsB2v%2FQJuB7MvCNzv4I%2FvaNMOyg0P2BGf8dKdPNrga28Vou5PhOz2s43MO9eRsmV65GuZJt3xOFwCLPgzg1cq6s6zGqXmvnfIVOYV%2BqR2HZbFUhQgDA5hlyXCbR%2FPNN1dyBOzmS4%2BlLhX2bOGQIMxGaDQTqu4H2r%2FfNPLSybIRZqi04Gj9qjqm0siEPdI%2FY96WhpfQYXOnlV86831TrNKbxEBamzIUsCjDD9pe%2FBjqkActlmkWz5ZtHF%2BXiVi%2FfQEQeIQtuAZxBx7aEBJoCeBPu882Kd5w4SmEVsxqweuuF7VKDT7EiIjhTzziSqbuAClRyn%2F6mcvjX%2FmwnSmIv8EJtlbqQe2bApIefkw8YlYad%2BCRrR6z%2Bhcj2cmCh27SDTVvgSezSZJynpfcFea9WPqQTsuX3Z7tC1LxQLHlQuyyLSU2rIH8hGQicdpFF5X446KhJSfDb&X-Amz-Signature=2cff77540d6e1fe04db02c1a84734a0d4b8c5923da0c0e43e3328726838edf76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
