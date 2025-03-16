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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPARPOCA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPWXfDRZbmAnRCMEyolSG5q%2FUQrtwbf21QHA0W1UbLIAiBhbpJRDdyXt9syP7jTUWoxfCyypmP%2BS9EP1rl5d7y9fyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMFVebuoUkX3gsV%2FuwKtwDVBoxZpgFkYVHQyJBQj0tVrmDYaSdhlSW8yJjBOfLrwin%2Bgw1rgpymdyo%2FE8afQVqbe7HHzLGZZTqe%2Fqn6%2BHRcDk4%2BtiOmA49FO0tJafeT71457xvFGTuAHl50A1fGcmlCYiAsVTJ87XzufcjlsM%2BOI8y%2BFNB%2BjbUJxo2aSlOBFwcPh%2BaDgUIXMLwwFCsCTAODcMOs7aCbounveGiXyOvI68Q8dn84A9IG5zcKtTWnQ7xzE3zekki%2F8SIJGytLhDxd5soZK7kYfqDn9n7lZRZIjM4BPwYM4%2FflsZdgsmmY3%2B1CfpwA4Dc%2B40x7Ig7ys2R6nDMdLONjD5PQE0%2BTw9owvAyXDk%2BICtJkqY810NpAKk11G2GxOHJi%2B%2B9986rKxp6R5%2BcyC5s8CriQjRnrLNH5KAfatC4ufVKsrqRTmX5DDO2yzEbtP9sLliQrdteRALxlz101iPbHcDa%2BcwTKJu5gj8%2BvbZ%2FSFBe%2FuiOkDHTgncX7HiIhImMg0ToDasy25Koax37Y4ypTDvy%2FcjmI0JoFwLPyR8s21EfZcfYpxl5Yo3MB3TysWHiYuyyX5ux2UWgZNDvUaa%2FWGUIZWr7Lgexh2BTrbUTJJ9NTE1Gj3%2BTppVqZe3%2BDLQCVjjXPEAw35PavgY6pgF19%2BCBP%2BI70oplgvvOAftOjs0i1ZjJlehi9Pd8pSYMves7X5OODEcPSzhKiIzLOlBAs0O2qYxMJdBIOen%2FAJYgKOxdiPuZYcfBz0Lz4bWBAw5sQ7o%2BdV8IyNROD5LSPFc6aQsdwWGRogM6vzCu%2BWFTPpCcbPPUuc9OyucQSGGYXjcCRhFWHi108kDjxGALq6p6Lby%2BNFl3aTKZE0pPbLIqbC9Yv81Q&X-Amz-Signature=d3cbc8ea410ef7ddabad82e7db350bcb8452603e404e56371a599b63fb2f0685&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
