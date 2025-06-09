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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7LD2TA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPK4%2FHJlZQtMqauiFO7nxjNgyOb7wpq%2BrBm33lHGgatAiEAk3dPGRfFKT2rdFm2uPWYGtQI4HmctMUMHxZ9VBDxqnIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYyRXk3AbT%2F%2FEgUxircA6fbSyXRg43rAWPFh5R5brkbuhn1dvVFrCmSOSZ2IFGfVTxHlpGehU%2BFi97pVyDvgINmKMb5RRGqcr1iHBho4IwSSa5TGw%2FJz39xYbPDHSFARGpb2x3lfS2G2Vh7O4E%2BpKg72aCRJHcGeNxwY96uMo7PebMmJuWvUZTdww5XjxvsFolB0UfJadTrt53VdjNekOrzOi7wN78nu6sSOV7hHxW5WkrWB8kRMiIid%2BDobMEp7OdLZ7f1XzMdG711MD9ns2vDNoX7UQQ%2BzVEB6KLStDkl1f6zCaU9AzcRMr5GY1jgKRzLqkSWUWgupciCrSC72Bre1bUf9HFF8ldV8ms6goLv4zsEq9aNyKs2iPen56MOg3gNqv3RQIBX4ch0nGKguvzd%2F8tjywp%2F2esA2IdYtIbYRPHg61qFe8DRNKooJ2BRnu2j4R0wkjoW7iVozYDYYc4qb1Z3cpKL0eZPdg7%2Bcz3I39P7K0FyrDy4q2JMETDN%2F87%2BNJRCzz2i7jrzL6hTi0tSrkkaDVZ8x5HXHFN0d7ZEnE07ksFjPSnRBOjAmrSYHpTekG1IOgCcGebFG%2BT8kC2%2FHRJR3AG%2FSVonZ981A6SFtFrX6lVjvZktIwII6wPclGNLgQT6BNuA3aMkMOuVnMIGOqUBz66g0c85rvf3LV41nq%2FQQmFeMm2yhkCZ5XOHEXafky8zt9aIpckZRFzjKhrjJ76AAvSU8FD5ckhPww6dMZei6YLOIkyeo5tFthSdgZCKyftdKX8WqHowoza98yRAaOuoIMuDpmBv1ONpUrSbrLidy0jU31Xi1ICkSSBXmRGnaXn09Ns%2FMWV1fXo4wOZf1ROz8zFj65fE4i4fAW5d9EBEuKwCrqdE&X-Amz-Signature=b5ae722336e6535e837d693bd80f8bcc9f2c9d11bd6ada5c8dd2b84971fa46ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
