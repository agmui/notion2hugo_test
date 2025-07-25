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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOH5JML%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD0vsRaadykJisnhXkgXMz5LXOonf0wRGNcpcgz87Va%2FwIhAONFncM%2FktPXMEAdaEJBW9lkA97Ck7C6WtjUljmbXbweKv8DCDkQABoMNjM3NDIzMTgzODA1Igxf%2FsXyXsT7lvMEBJkq3ANM3pWAvwQvI8UQ9hC%2F%2F6Zv%2FQ93kvNtE0oxkIwraw%2BW%2BVRspnCjbI948HP5u%2FJjJbPqalvc2ZVjRkqyK3OC2f0%2BG5iw%2Bv2TFxsIbDxj2VsI3eWzLABW8vq%2FI3CgmUZK%2FbricjmGDaxXq6tMevUSEzhs9oCOHXvK6dN5SZeSVg4Tek7RwrD7X9ERLRftRpxdG5haoQZRuLKOJgVMiF9g0SU4qPIj%2FyTj6p03HH4%2F3vpVzyGwtJU7W%2FllwS6jd3BodbKapi7JOtJVtibKTa7R6tjisO6Vm4qryTIN9Lt5EKktK991fLNgHoHTkdrPtTg7e5kuuxAjYQ1iqORw4kIdcKkAR1uImG05kJvKXTJSHefaUeAMJOYich4W9JMQwsRC0Z2KmQF7LmDIruin%2B9z2WQWNlUVLC9fJo8TGNWyNfTZhvvB16UYkikdrN6JN%2FMvB0IPrB58yFLrMbTzOwIkVUs4%2FS%2Bhk5M1me351iBrrMYNYWH9SOrwLy2xw9r3EnMQg9qLuHKtZ2cs%2FiMXP5XrUmVWyirizf2%2FBNrbcTjBV4IQ3me01rydQP94H%2FfVaAjlh3g7GCrCY33Owb5uwiv1OS3T%2Fp0TN60ldQ1DjrCTob04qWHNKG7GbbYKixeTHGjCOiovEBjqkAQNrcwwoHcZqw6%2BCL4ykN8nOtCCtAslrkhJ6Xr%2F9Dmczh4T9TcaFopcW%2FTLqEI2nc10ZZWEazGFMdRkeXiyeR4ug76ivMVTn5t8xE%2FrKEFc6XaJG7jo7Vqk8d9AExxzEr0rUFb3%2B9gfbUMJxb%2Fr4Eoi1hdwiUnX4aVGSRb%2Fg9ZP0R%2BnPKU9peU8NbMUY34dxeUQEe%2B%2FbloliC22DX%2BJ4%2BBh5xGtQ&X-Amz-Signature=3359825378afa367e7234b5e6c755f8f0c4e1e14f7b784d430920ba1932e1ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
