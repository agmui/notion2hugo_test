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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PFJZ4W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC5hHLSXlx%2FX7pDhm8LXl22ASAcX%2FKPMLumKpM%2BQ3V6DAIhAKMsKmlVk69789wcMqpv7IklgsKAJBx%2FzOL0jMJ7bmEWKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiQGALUnSpGqvVRXwq3AMD29LJwQdPKw%2F6pGI5gH%2FKq2jkLsxs9%2Bjexct%2BgucZT9UoQIzFf%2FaQHWTtHj0%2B%2FRyCCfJJuXvyWyde0i3%2B%2FZEcWzPcTvP18tZ2T8%2FVr56H0gTJwunINckQuzDLuMVYit9tD8coEuE9%2FwywJJywXw5xqOzvSy5QB16GUnbb%2FQTsHnBVJhLZiAYd3bCPaVsEabs%2Ba%2BeVQoVZGtpq1JvTe3VXLA3oFZJ%2F3Q3nhIicWtUWhJi17ceD3VJEhSsAAFk%2FRdytqA2EfLF%2BerETYVIuIHEznPGK6fXrtS9agwy8FDlNRb%2BLmwpBrT3JVoKRDxwW13SjzweW30AbA0UD9puINrh%2BNunhcWH9jhXkTmzl3wAKm7dzc5Vvs0rjlHl1gBmcelS0B3ZcIqYhSjCkHiATSPA9xpd4DG42olnSt1slKa6Gk%2FGA5ZnWEIEnxc8%2FHkuny81li9JuEGygepxNfMfjp40CnX3VjxHtl8zpFkc6rJxYgonwPWUeQBk7MmfybNgW19PoVNFbsOb%2F%2BtXy6Rl8hhRzTA7uapJn9PqXdt7tRGGV3CexBAtYJFR6CcPqj9R2dwFtGSeriKSuyNxuf%2BJg7GLnSogAfrKGAutrdG1AUfa4He4b%2BPZo6criJj%2FqwzDGv8bABjqkAX1ksdfnWmwk8Q2qnEVf6D39cGuKj4J6zqI8E2gPGwMbZrzwzG77ARsADSNVBonvpfxlY7RP0LG2%2BL36JevEI2EOcbXAqKZexBCMj4jeLTYUXFQG7rvY4B0b1mza8f71wPfHWd%2B6MxU%2FqRPqSywBbtDADX7kYncIKthscX%2FeX4NiG%2FvhjiuutKxB5bw9iHnRLmoCcebUybQhmC%2BzXySqShBLKsD3&X-Amz-Signature=36c799d4ba669f0863391aa4e039a0cec9d65e11b0b7190b65223c06cbebfe80&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
