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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRW2RWH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGewwW%2BgdG4lje8NYt%2FdFiA9ET0MFFnWAi7lYnNIYMYhAiBpE4og9Qvd5%2BHohXsh1BKYrIF3A7AeePPpUKOAFrhEVCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMImzn%2FScmWtl3Zu0tKtwDneDDOLqmVnuEG1Ef083rmaEluUkCo7hECNWQRlsJwDrOZ8pn40gr%2BH6YNgHR%2FwAE88cVDBJ04V%2B5oIHfDh5g1871CG1y58fjy6o9fK%2BcbDGdm9mgpbW3fGxeb%2BUbpVmUifAAQ394r2oUFRU%2BfPd4HEUk1r9Y0qHLZswn0hT%2BIuaq06QmRF%2BRKaUi7a0FVkIciZK8VlxrjEtzDvxF6lo%2BoXXXF0ARRoP4YxbMzxqqIy1IaWKUVr7sSUp5dw1oVRJyLSvQNfJ4yrx18t4%2B071Zki6ta%2FyG2e2kJI3WwOf8S4B52fees5dTRqMEuC22LUGFbV%2BHyXE5LdADWS4lwyH8gvo13dvC9fA1X30LEv%2FKvF7UAGUZr4cimr1uuVyRM%2BqXvRiWuZVflAFt%2FPCbAsCuIZur7kTdsATIIWyXFcYQktmOS5RX7tBQR6CIras0C4aBgeluAzo8iVrBQLSlL7gcC59amr1xxcWR%2FhruS9VF0sv7IsxVs5b0srSIVwVjqGduXmZQ0Biuhj0twLj3ORrhinn9iDyLDBArPr3k56R0YFrYGe4B2ZtDEkMFh8kM3Ti5SXc7CeUbBUexCR8KkAYCYSnvFhBiCGry6TwbWs9GM1mggyl%2FthNL1nGaOr0w8oCRwgY6pgFdlxSaJEm8L1XXgF%2BdHsgBXZp4mlQzXOq%2Ffc%2Bv25C3swnIxHksXQX8GRrWlHPB1FsMA8mtgbhum3CngUCogg1LmGJAWDXvapXXXPDsxIFlu%2BXsPijzCPYTYIKws%2BJ0KL2b146ExUcqdnqX572SuQKlQTbYBVmr3nxsHiZ1vPahDYDuosXhPC7S0XUCeXU%2FToY192ftMmYCYgMjkDWA9kePalBdZtVb&X-Amz-Signature=a6a4e722cf5230b4f5e64c103672bf32c35a2a3c24eed79dc2ddca9ae50c4a26&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
