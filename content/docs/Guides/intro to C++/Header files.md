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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FIDDJ6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD13wJ%2FWVwv5hHs8%2BXkv1pzcMRcTg%2F%2Brc3%2F%2Fuvvp8jBRQIhAOdHHSzeHprk8nTYveDJxrgmVcaDhG9p4MtAixqUSjkCKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHVIqsaLvvumNbaWwq3APUd%2BSrGb%2FSSQrdX4T2Bl69VTCtg81F8JMrM5yLFYRvva2rsKCXkxuaD759nukCThnstUg9A0appdYL3ubVVsPpYrSjsMuiBsAb3h0ikGdLk0t5u9qjem1xVqBiubPOwldub8FROpHZBxM3E%2Bt7YTv6ZtdH2H3hTTPlMDxgS2PeDETe9OdqKAS6vdGgyOl%2BN7FDvYbO56uJnV4gtgHhseMWKoE3r7gAHP5D1jV29y9FRCNtmmAccNetXd8Mt%2BwjmRwyDx%2BN%2FMgDuZ6iQmIm3OWMvS2H7MvYD6oO%2F%2BJ2OkqWBsNcDY7RGKwr2hFxWgnwWj%2FZLExqdZZDWROaS5x%2Ff7GHaFhGavKS2Bjv9v4P2texMTD9qu%2Fp7aar4rLFkZZ3e6k8sYJhbnvASORMDVQXlFwRsw0HOPDcW0o5DX6Gv%2BGKbRnu%2BewH5m2LTOlh%2FoYO3qnRpJZXbEEpuIG0lMjekqN%2FPlGMtr7cXAGUWkGTuVcPfGw8V%2FrnJaJD%2FK5ZQ2zE3%2F6r0RMkIFPOBQhoauDQZFLGBYndp6heJQRDeKj4YlTq3%2BN%2B3rQaJoO%2BK%2BmyN4V52Q781qDAwO93K7f5KSgdW6OmCStPCgemGDfUxYt1YCy%2Bjj6ksS4MgkcwPyJLRzDAuva%2BBjqkAeCWDs%2BNUwBziUgVcbv4FkSVe5WUEuV2ukTbs5QNvxl1wlJSKMv%2BXnKT80JlfLxrdtlysBZbqIxvxMk58gBiJ0w2NtJoZuakNNqL0l2s9K5YIJMDOvvEi6cJ9uCa5ySeem9DgsaSImJVrWlK8hctAEbuRuXbAF6%2F5HV4G8knbsaKa0MaY%2Fr6WZuGSiX0k3SDdCBmk19e4az3sNXF1lkQLcwo5N%2BU&X-Amz-Signature=4ff34467560e24c2bad41eabb5ee9a685470da36e58ff51aa20bf26c6c780e99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
