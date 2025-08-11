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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEHL7NV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8Vo10N2LcmJnx5%2F7bY6yvWcl6H50hBijpqlXTPlLK8AiEAuvwEtVhD3H2hvWp7W9F8IIXCMENJQ8iMCSHq5ZlmzhUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcEh9izj2iIfIH2ICrcA9d5%2FkfPUH3nW3ppUmWvg683rzvjkDI6sehQwZItYsMXFENZ03roQeLLyHP5TZTECD%2F1CgcBe37wVa1bzVS3K%2FWVjYGEb5BkyiOysFyOC%2B2%2F2mLDJ20Ab0CudWLpb9ry2lDtUDeoBolSOgd7cPCD0X56vmuUo3lSRFbS4dIWmLDZGiTmg3IZldBZ5%2FfqANAGuKsewUnC3v9Gjw5QHxAeIhbGflYhOJ0c8ljfTDD0LlTih%2F94mBYhMdcNQlzIfO6ecrzPIVO%2FBvgl3wi0zWiXcB4SxcciDrcaIeZaXl4LQF3ElToH1WmRx5ZzFRjpDAM3%2FO%2FcEgKgVEBoUhneIA0NKNh5dyhDWwyC9mmd1C3ba1En8lUpiAzWpH0rGb5J5qPhTyv4h0b4tfqobOx8LSaMv%2Fu9c3Nix6o1LtW1KJUZRRJ7h%2BAGNSJYqug2HyhswZi%2B2j3rUD%2BeoIreMPpouS7s8DdDooKohZjZSHfw9wDIC%2FPkBUPmppNzgITaX0%2F%2BVmoDvZurzPjZZFU6U97ZbvZhzwJtG053FF6ebeoMaJw7xTjFVyvie6OQHiwA%2FMdsjDPMlN0M9DsZP%2Fxvbu483FdhhOJTpBhzyQr17j38SLZ7p0W2W7pvYWeH8VVbwtrYMIf45cQGOqUBAudFFZGg6sq8seyJtbWHep6sw0Ca0jBpWU0fJkyzyPGLuybl3DAqoHgncSPd71KZ44poMFJBaJxzxMVweCLDoMB266RqYc0yl3lEkkTprCRxWpW%2FqNCRLMg4DCDdrF6hbONgviSdic9uHTyKlt1Z8Abz3Nt%2Be4b6fd2jLPaosZMYSZ4Pgw5YPeUE5c%2FYERoanILjh072MNE5w5T7qnrZHJb602iT&X-Amz-Signature=c65551d2a8fa9d6e3156716b9de1475477e719b94bfb860c0181dee2a57110a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
