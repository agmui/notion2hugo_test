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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624OSNDUN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGkL3ktlkZZVE1eMwi%2FS3b5YrmPMQI0Ov2YBTpoVDerAiBU2XEmtmoNhYxDvdRZKJKngvNLO4Hm1kJyiBDu6RSx9SqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnf5WUwigwgeym9%2BsKtwDNcWsgQdMQpuPekrvKQMVpJ8oJ%2FqqU%2BVljOlqpn3cyNT1NmH3WZ0Y4MogPUagZ3vc9g18ZBpvRdFnnYoWln2AgI9Ek6j5rq%2BJN0WUjqezPqks09eA6FaX9%2B9S6%2BqtM%2BdoRnynnSpk8pWW9s2l9p6V8qzSaKBlkHbVDKmDRNMX9Z%2F2ngvaSoHpc7wMRLAzbuQD88dT%2BvH4BOZVaFNrX3mZC17xZ%2Ffhr3J1mNbQJ8d%2F5normCRlH9nECR9GiuJlJWNmKIv4lFJ8JT5t1mkxnh9PKlMW9lV3lmVJbRtrA3rUEyCaaQz4369H8WzOL97XxWIIz4fI3E0dD8xuIgx3hMFRG1sM%2Fd84YeXASn%2BAqcA57ofazAAqYCLEnQBsiurvmYnDSGR1O5rtAXeuOnozkNVfmlt9adxPUDFgQ3T59%2BcUevnkAyXSUcCnpqNA3cmBjmG5gIfbGO0DR62dEFvctr%2F6tjPcugm0TENdwp8zt0y32RoMF1VY5MVqRVVraIfjvHH0rKRL6pdT%2Fcf2CSvCto2JlZSCRbMt%2BprJPYFi9f5Vab8hVgFFYRzJKwKS1s39O6nVoQKVmGhvMgVtFEbjbODMSz6kjP4ZiewaRpoRe60Q%2FACPnYQBFP0Yx1tnH%2Bww06KqxAY6pgEc50NFSJDhtJbOnyD9s5LiVGtMS9Bl3nhGLPI1Qx2gObDAW3kpwAU9lb8x2BOeBryIT5MuEvNIhnzX9%2F9EHb3RZImYbBKglnbqtaFlj4oQxYk%2FV%2FwGcSvY0s%2FmdXAypIi55VIYp5bqQvIg%2F8YOKlyh7HF3EMxgi8it0FGBmgIzZbfNaL235fD3pM5alKI8Q4GF5BhfMrZe1UhhTTpERUzivhhqHbmc&X-Amz-Signature=4aad26da4a7d6d2f284db5f03882effcdcd6ba113f726ba6654710201d04a64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
