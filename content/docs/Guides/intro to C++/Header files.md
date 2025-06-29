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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XWWNDG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi4ZfTweIhxUUAlxD5G%2FATwEpwJP1ISm3Ga4dKWYWNLAiEAiLQhNllYwdedXYc99pu%2ByYrMUKkDoW1ivymgzyYh26sqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrEZ2Xb4mk5rG1%2BhSrcA4tJ6owUmKnmPFAp34bEwRI9YJ9j4xAAPsRF23X%2B1tuxj%2FcMp%2Brf6qNuCPFEWOMlZ%2BHv53wcqLTlf2j90%2BuB3jmBcF3SLLs6tzO8s6OWoNWonBofv9aVBlNpMRFXTZbCdOBdqiT0Wc8YcNHFTKwjMNACS5PhI4ecvydbCYKsRXH8783HP67x3eZ86Twq6B%2FDKIq8%2FH%2BhKNhkr2eGNlMJlnt8oRSB3%2Fpvg5WPepu%2FtaBKGiA82G3Kl0VuctJzUAughfv3VRjdEYSlBx4Wv3nnkkfJGCkfradgjPqhgbBhgHAyvG9cugjyGFIVDGs2dZJY8v4D4oG%2Fif7jM8%2FdaPFPeXHRucPyC9jFZT8MlzISikZdkZ%2FYRQVcwWNDX2sO2BFCcLJJAXxeA%2BEH2H2pmKPm8f37x6rXzGwXbie9ggRy33mzkfzwmyzjzGtwLTh175QBQjLX689UZO9IPVCFAPlVXRgkdLwIl3ONmxg5Q9aafERCLFGqGtzcmgBkMxri6l2Ax0AW1Lwn6n3ZA%2Bq3s50MAc%2FZ08lkXzPIdbRW4h09%2Bj7QkdYFkEm4YrwB2iac8g1VodpokHN6i%2ByXFZ7GC58CHamWHbfgg1%2BiviS9ue2HdusGB1gz8VFYwSPMEDu3MPPMhsMGOqUB66gjOO5OMTZh3jEJ%2FIbXfLVapTAvUKwE%2B9IBVZPGqvqrwksZn9V8h3QFBlBE2i1BxAu1yqdT8hdIUQPI2YuSXT5Yg6tXAPb0PCusq8O%2FIRkGjij%2BWdjgchkf1Oq%2B7jg2ac3fI74NX4F%2BQQgkYIDFhKHg4jzBRcYaP3ykHEke%2BHmJIvqbm7PSqAGsrIueQRMyu%2F3vVmP2ngvrCsah6SH1Zo1aege%2F&X-Amz-Signature=469fd46ea95d585b7239a19057f7366426c546d4d74afe65783cb521a8468467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
