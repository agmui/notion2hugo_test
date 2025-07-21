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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLPIFMZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDucSVBOOD%2BolM%2BeG%2FjFuM9yozAl4wHwaoyP1rT1UBA8QIhAOifR%2BKy6vwSODmU84x%2FocInjZ6dLNPYYq%2BPiHZqN8gxKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBBUyFMuZ5a48muzkq3AOPpLJeUZtqFqd0%2FllauYKRrC5F8%2BdDGtQtmOgFLPHpVdl9o3dyjXnpyOltD92TpcHiHVdmafqxEPwaGG3KEKd7UWMTzxvcRdoepvD%2FbHJPD5s8xHGnHx9lUJ97y5ge8uYZlrWFvgMFHTY90MwX6mqIR1JmCMg7zDUIxMNpzS1GO71tgnNqRUemFjVA2qs0lSZyExRLA4AHuqCizmNOSBMd18qW%2FYzhynBPeXESFgKEOSGcFVFWqJYB3beu4nCD2oJz4jhpOSbvZFW8%2BafLdpegt5joKzQ4NRXltsZNZtWvLY5xHi6sIaOph3np5LAO3JOMaBQhF%2FF3MN3%2F7rIYF%2FLNKf66OKskKt7NvjHYgifDIR1kcngiX68u%2BnjCPB%2BS%2FYd4siZ8ieh%2BCvFspeQUgvfyrP71tcrqbOAfksrex5WFNSpFqQsVs5DxbXigiDROexTicywv5dL2MKizPzZFLc5FQInTVSPARROxwnXdMjf1HF2BIn5vPsciR8Jr%2FHEaRkeOsiBL8Np4rxZ2IsDGDmiA5n8KaXbKN%2Bq%2FVpJ68RsRZoy%2F%2Bc%2BW%2FdgICvwlYnJp2YwG%2FUMCK6rT0mt%2BvLhaywTcpRjpArx%2BtlJnHpz%2F8C79jSuKrHElOzWjeeEldzC3k%2FfDBjqkAYVT2Wh1iFLqfgCRiZbajbT7J7VWaEOMz5ha7hyz7QeHHurylPLsg3dmmJR3pTFcqfe1xaLQoRruA9JJUIiTD3EdaW4QL1WWslgO%2BxukI2WXZ0OCM3RXRGFsTuI2bdvCsVW6jMznzeuWDj7zAkAJRucLl42AXuOu4ZHMMPwIXcjmONEBxCcTabhcZtaUrZkI5pLzOSdAIYLEjJ7WUbHEIUyQm%2Foz&X-Amz-Signature=e23318ac8c7f437d0719f84b394c2641535a012fba6f3a6b0dc372b85efbcaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
