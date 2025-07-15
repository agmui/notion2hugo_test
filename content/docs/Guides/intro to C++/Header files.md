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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5GB4L5P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC6LYmVgAp1p2z8Ilf95wZBPWz%2BOqaJMfoHO3sdVHn7UQIhAO2kaKkScrvzZWg2xfB6HzoaspnXI08LaL5N7lHAgE2fKv8DCEoQABoMNjM3NDIzMTgzODA1Igwhd4zt2xH2p4RUZiAq3APL1wUalbnLrjCRWBNsdl6xZ3gjFvx%2B5OZ9xz8SkZ24zdcapIB3eDPVhfBEVHj%2FrHVN4%2FWKbkfbwJ%2Ba89AZoydH%2FKoc8buBFDjyojgcHKghkroK6aXTvfR6P4BN%2F58AFGlja3IDBvLg8Rmidc7xP2M4mUTSBikCukDBDnEDsEjfZlHhOJNnlJ%2FeYfk3L5VajCackbZjKSCodInFaOOWLhgjoWqthXUPGIGwTs9cVrCZ8%2F0U6x%2BLg0SOt8HgsyYqfHyrphsdvlfq3SQYOY%2FVtbLwhO4bJytvxxd8uxsTKtEZWadWbWx2KYgIiw0Wb5fltCvv8Ffkp6obefVr7UmowHWn40Yv%2F5rTqfYxJaJRECWOsWEGCJPmhFI22Sr5k3hyzNXoNqIuCfukzYhRF%2B5NAbauxF%2FqqhEMEfc31pPOmxvjLL1jr1xnGQ0Zz4Fl8pz%2B1YNki%2BPL5HZ4HU89%2B2vDubfovHKkdf8FIdutHbBQEXNs1GKy5CUCA2laZ9gMn%2B5EVMg%2FJ0qir3Flv7k4BPYkmi6a54Ovl9giSO0o4iFdqfFecuvLj7M4pk6fVPt3S%2BfAMPmOWHosAAu1q0EZyKJFlusyWcjQLzBp2NwM5mtn4M1mR0yDS5o31gQLfFjiCDCHhtrDBjqkAU%2FG3yRInIkCvza9oKCIfmjkxSDLuApjnM9s%2BAKXX%2FIHfVZdCLP3N5XFZfi6zqOaUraRHce29bKf%2BfpmFuKIwVdIfr%2Fs17PuWnaQD087A%2FpnMQT3%2FG4zxNQZmefg6BJFX5SXUDYWA1MvudD1GkjdxoL7WU28VfFVRaAsSDGQoGISXSzQzaBd4DwujKizCNg40PplKuq7Z8tcqzOit6oUiTYMMxSf&X-Amz-Signature=a84f28aabe306dfddf8960a3d9a92113d81bc68d63690b1d24e48c24796448e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
