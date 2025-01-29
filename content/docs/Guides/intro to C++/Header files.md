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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBQK6U6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdcKB2fmPY5joJsUL6un4ikv8ncdKv23qAUYYypqtOdAiBOu2CBhW3YfOBgcEb9GDgh3kRswySJWdHPDuo9q%2BQwviqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrvfIwAkTUo1567FKtwD0PcMuImizDSGbRxGdpPxly0uJTHLa6bWaceX7gULqAQXg8scVPm7oHsW6jeZ8vp1OIadvtNDwLhK2hHtjtdQWIB60747h1fW%2BwCWL%2BCdIcA9kI2JuNEChdGHOTX437dVR3Ibhv7hFJIV4o1GX9ILJ1pAZIM31MBODiEaIn%2BzopJwwmTegAciBxujnlcoKn9K00hiufrRHcta9MMApp4l9fr3Qdeg%2FxcvOHpuj4FTB4arrugNGOScSSUo0gWTuqWWQ5LDIPcB7AdrDPeCyM4aO%2F66WjV%2FCFsTrcIbIDVr1nk%2BHs8g9dwUwyH%2FZP4jkgVpBl59Ok4lMO%2BKVZ%2FxxgS1h3oBqGVARlC8VLiJBkm0okRqB0xFPLirlpRjoZdKCJ%2FkujBuMvPLpF43492zP2Obt6zi8uk7YGTA%2FQef4F9jKYW5J44aY4s97a4iZVldnP05bRF0H2XCuE3qMzWo6%2F2arUW9%2BW432DrS4k9OjZQX9eT%2FnvPNnoS%2BoVzkJKWcHsSdb4KdNH0beGJhCcpl0kXAg6b%2F4GQnuV9nyfo5hKYSozNlos0k%2BO1HIBJjTste1hpWNA%2BlRfuxVrW5dQKhfKoEHYCpMg2I2eIP0QSK6x3vZKJwIok4ZRuRCAvIhxIw6IXpvAY6pgF6F8CnkZ3d0OJTLDeKZPli8Be37g1pl9x3vQzd6V4gF8DSsBXQIJ%2FEfZ8%2F0NoSM27xRlOJMhyYUVngBnJNjQGyNsy608UX5pacjdCHRyK3gcooMsSEvhlhc97aiKRDa6iGVpIP%2BNvhzn3gyPHJByQyNSCmdz3Vp98Q%2FAAD6h%2FPjLrn2u7ZTY5IN6Y%2BlVrz4fnMSanXQz9aTo4rHeAxuwIOqgGfa9pK&X-Amz-Signature=272ac56f939183e1d39aaf29a8a2dd31d985c1cbadb75c781ad004b979d125b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
