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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7NAZIN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCUbwOc%2B3%2FRYkRs4ZRDD89lBO%2BhWHoosnbyR28724GfRwIhAJsKbXPmvfut9OcwR20QEEhAxusYK8a0Mrh5NCet0GeeKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwel25Ds0QzbPK8c08q3AOR4iL0vqLZ5%2Fy2EQztQEEJktpo9GbE84OyQYjxwGRij%2BQpokmVxWM9PmmaRWJJ7Q1Iu7FHoV8%2BmmQPUNZuSRUWksPtzM%2BeK2Hgen8lkF1EtcEu%2Bl8v8daGuK57Yb2yr0BVsuRdeAUI8ywGyoKehLHzEbhpFuiEBjLq2Lnlj1EslwFvUrexQ%2BVyikW1UsQKyMBNsyIzy3tWgPA7HPq7mIBX8XjUyekb9cmIgicsrOWq0YYSwtqdWoeNcjRMqHf1YV0Fyf102pFzd4GobhuBs27%2FZyulylPNxxnjaR6WsRgRVAjV9Cf749n6NXx4WEnZer8GOZ1uK0Wx76%2BHJU1Sl3dZbSQj%2BdjKVVLuRMOg%2BdPnwpCXDL%2FPMSGE4EgTbmjFgUjAGxxA2KNpJvcpbB9MYN%2BfV%2FJPMDb1CDs4xBM30b%2B9lqxXNTRVE%2BjD17HH0WxyZStaYd9GpfpQoGIZbPC4H4tQbRaElv9g44fhLbBQemXoY%2FValAvbYvJm9sqU9T2%2FfmQnW51nlciAXibtn3TO6NSyDhs4lh8qc4F2RHAKzAA0zA%2Fxejm5FBcsQ0d7stQaUKWHuKcMDYY74Fy58LvrpBUSYw8ahkGsuM1ny%2FdaKQFidELCAlESF2IHGWqCfzCk%2B8bABjqkAQV%2BVAXTYDHuXx1ty4kqHqr4B87hxvJWq0MSLLi2gZS%2B9VbWKeHOj243T6CHQDLWfRaHDQ9nlgKXj7DG1DM9d2pmDNgXMXCCvnRmCo%2BBcG1ph3Zfmh3P3J%2B%2BkEUoPnf1r9pi5VZzOD43pLKlhOkpyhLHDc2qTPmafP%2BKks%2BEesABqTuilbeZIe%2FedZbKMtaKZYDHU9RO3QRaS9ehTcH%2FL9NMgpK1&X-Amz-Signature=2758e89e0ea4b1ea0cd69b02215c7c4f020e7345f323bc0e97fb0a5179f1605a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
