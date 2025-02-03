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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OONP5FO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl1zo6y7Az%2FFDEZkLdkA9neuvzvxKlNACpa2soyVNUgQIhALA7W7FKWQCg%2B7aNaW4YyM3jO%2BlBNtGZOIAFyKbLzbfzKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5l4ndpYPv11WrbR8q3ANCj9b0GPcWXBuQyf2jARzwtqzZnPu%2FccZopaooDLdhcfThvrrJ7p%2FePbfTev3J5g%2BOzV1YCU6xO7xiCxJeBCGiazTelDHVfTE4xEE8Jqnjr9IkWSraqTn1RHzFU37PeotfZll6ZaHNV55txTZncswcXUH%2F07%2FrQ13QTVpLfquoyF5%2FTEiXPt02VPk%2BLwRKwd5jFOJU6PZUDCIcnKJ2UhPdF8Y5ZgGPWcDXWYeQzLNeI8YakNGKP8MmsvfVtW%2BptVsKwlv9068r7ckbbtG3%2FB3sJ5iG36NHJSIgdRYqGLzXN7NPqj0DzklgI1HPQZjQBhHRUY%2FcpwViimZFGq6ZJPmjzxOL55nzTdz64VE1diYaOwhEm8oPSO11jY43dhXgYgsmimtDOk%2BW%2FR680voiNBY2fHEqnSn4H2c%2FLXIfsG6sPMgwc%2FpCmgzWB9lAGAu%2Fv22QtzucouVMPyQw7YAYPpwHopAdQM6faAX8eZJcok4xYcQDYjDAGv9uyNBM9EgqQi9rI4WsKwnBiZcQ6tismok14l8wx8xMsAfxbhSkI1mWOW81orb8uCUFjx5Id%2FUPbNqKqUSeXkScykFWnT%2B%2BejBEcVqmIQ9S0PoFo0ziZL%2BhLeusrZLhhq1W63s9uDDdwIC9BjqkAQxEnP3JVCkZzccTA8PzJP3HCIP%2B6MojG8WHQfRA6u2jxSqacy2rRcY12CY3%2FatIkHeNUehbLaBX5Y8A7GnEEcYm31LGoXQ6FoUtC3mpb2g87%2FYybiE20OH%2FM5Z0rhBQ4dlxEG9IZSB4KVBdhBfzpIKxMrS5BOC4Rc4%2BboVnU9Vw9LTFj4l6v4wKzzYtRYM5cCQZa%2FwhO%2BD5sVEQgCShNpkOaBFB&X-Amz-Signature=ef2a5e0c19a4aa84a61021cb1b981d6ba42f061cc5efc7f62aa66b77fb2e0223&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
