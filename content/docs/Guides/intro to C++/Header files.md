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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCGZG3W%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDBsALMZvUhVvEHiL78zU6%2BfE79BmPbj5i3S3NpJs83HQIhALIHBoHjBA9lUVWlkEHXq273qcgwhWSr6bqkNdIiRhCeKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4q0c3CAkeAmjrLYq3AOHlNey0SUlNHqvJ7bxzEWJfTANxbeUcpfb2hInO1m00G2WldBG67OJAkaPhOili5SXO%2F2MZ2QgVTHXYQCbTfTOGpijItfTcBaD1bGa9djLbp05soD3VbDfqn7o4Q%2B92LN6Nv86Fis%2BDsGvs64YKbHpflHVl4E6cdYF8tMKT4OYt6udg5qVNU4ySV3U9YpWCNOBAYFE7oF6chpgccsQZ0MXTOESMDsQrET0jl4JFALVk77UOBdiHtYcjy1xcWY5y9VU6nEQvchoIflOHDrEl7SoQY3DpIM6fXcoFAv%2B35x2S%2FHrrRCcaoayTNvGayB%2ByJT9mf8UzZNekqt82%2BUOojUzKLQFKKRzZeAqprdnFp2jvnFBkjiUyrMq1V0NtyGYj4JPzEyLSpqOL8Rop24zeMenhTRn6wzaYE6wlsjnuZ1PxVrypS6ulQHnXuw%2BpWCBOY2CKO2JWn0H4Y8CYsmeDC709gPSE7hYzbYmRfA2qLmVZep0bMgO5xn8UhN%2B8Ea12t5TU8bthHSLyFsg8oWfRyro49b2hxIkaotAEpF9y4CNyzMTaGf9bjbfNGROzXzb4QU0D3XlrkuT%2BYerbSENAq%2BuwnOdFwPMtouQw32ou6ccMHaJyekWWPFmI2cvHzDgorjBBjqkAfL%2BC14Y5csjgvM7G93%2FTyial3LoPVy7ZC4%2FcbH6o65AOk93PQ2DOjiY0K%2FTGQvg8ExecViIj80QVdZ39di%2BNiWQYslgGR%2BQ1hxZ192liPi9RbUca1JkK3ZEYCTmn9R9PMYdFT9WuXs2uC50%2FqbDFB3eT6TuYBgSiaq0zGsxMQLiS4RtFSaFkMVrUGE81e0V0dZfUPXhFqKHYzgvKbaDM0Bgqjo9&X-Amz-Signature=6f444bd24c28865cfa204afa438b844ca4dff14c586e3c5baca683de9c7a0d17&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
