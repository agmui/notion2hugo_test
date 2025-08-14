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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQPDWV2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8h1%2B1n20OaAl2P33txyC3Buwv7lPk3Ay9KfxyZDT2mgIgWfyPApchtslLOKNLG%2FgOsCByGaD85usTEiera%2Bq4OTEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJH2MEA9IgaNPNi%2FHyrcAw%2FzU%2FbqR4nrt2%2FDD2F3u5NHZAN%2BjsQ8xALwkVPJ5HAfOYo0BHnpvo03cJWtNwe9F05%2FYXblOaiBtiX7wr1n5QUqElT8C3Gn3FI%2B%2Bz5nvBT4IGeKOOjJZnFFT3LVJB%2Fi1gEpcqMzWwJGaYMUEu%2FnCEZ1c1hS7pm0olblrhuBdmxObv%2BMm7HDKx8z%2FoolB1yFQUnM0eDOZ2Jlxi0Ij8clxgIlrzuk%2FDwnVFrkzj9yoqEwTELIs3UB2m1EZAkhUXglvj4wKY61oVgvsoXEIXf%2FMn21aSPKr90t8xHt8yzJ8eUlM1g4rsewxuyqHnxylKsdXoxbFm9O6r8R%2FtrWRTxg2qfksOhWmqCraQHsesRBzz3Wbwtd%2FLyPDGocpC2R3%2FDchHHlgWZ7s6mgbM2s9%2F3qyg74n0rqYdCLl96sECl1%2FZeOZ6Dj2A3gxRnNcNS%2Bgi%2BA9%2FjcIHhA6xw8HBWGoQW%2BJc0ki0SRqK%2FcMqb%2F7m%2F3jJu7nTicN%2FHmxqgAybYMY%2FzDwI8Cy8GKqzsvCiFnHWS%2BpA%2BRxk98riVN018w6Z6ryYNZyK9zHl4Kf0cp5uKqsjJUd%2F0ZUNLTh3c8zpvzFvVMJH%2FJb5WbQ18Rvj9stQ4AziCojzHryLgUmqTB%2FFwiMOCE98QGOqUBiNUmKoflY%2FZbb%2FQ0wgTbV47QQIydPiS5TyHWu6RUnJ6uyAKFGQS1Ff%2FP6FEY3XMTqm8WPV1kMglMQDhQ7mkfNUEmXhaGWm6hJ61tchezzlqwdNwzFOTZiGN3Vk4g6OqmtxldQttvKeuAUzTlmj4IpFTcxtLtM7e4JhYah797oS9DRjJmh1Y91MzCuzkosUi4VEgndoLkE3oBe2LOgV6IHqXWRhUB&X-Amz-Signature=fbc97f53218d4d995c3315c43ea310b86ff30d4e9ab33c18c51abbf34f4918f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
