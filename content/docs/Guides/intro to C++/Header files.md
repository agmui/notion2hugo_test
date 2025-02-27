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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QH5EAJH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAsuyI7%2BymkEvMuvkF4PV2l69bIVDxa4QHoVB75O4%2FraAiEAzzWtb4Da9xT77%2B3brxsRYVorTHu8lZr%2FsNv7gNm1ce4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJg7Ok5ShcUU%2FE5IByrcA3yOlxZODhpxBDRz%2FFh8vHnyGP59u8ndlYFSjoNiamQNT2SPzXFbLpYiV4YzKTzOxChCebrrsaL%2FLuQ1cJpOwwqKviAiu9sWvZZkMMsNf2lS6PBLRmtcdcwdcjxqFyxCaexK3uTPRxYNN5fTP%2FOOwmF3Tp5199fFJs1GWcGK9hDKNmCMEGqH%2FbndL4ZYYDZBB3VcL4nx7jUKA1eFU3Rz7pd6VJ5gvXnvVnEWky3MC3A8uY621DgR3ml9k3jC4eoGnYoVja2NGvOZixGR4QsVHRYmNbRuqMUFg%2FSCffGu4WpSN827biAseFDo8nOmHCc2S24GfTKFsqmOIeYeqN%2BJFtrFZmfG5W5jZrH8cDVyIRwr9%2BqskQzVJ9NAGA8j7SSNkv9KEFKSTDW4N7HbXGYrxAqBpG778kVcvRafCaPDsuyRI7%2FCM4sg9%2FLdIfG3YeQrrpEfrmaN%2F22VjFAEBMYAuEdDShybhmRb89VzXhnXMS%2BKJpDD%2FBSYL8wLWQ6rZlQQFkFrUn1LsqSWYjUS7GRJdaJMfM5kdLDBYPqSiYbZkVGeu41vJTh13uQlbR2vS%2Bt2afVuSCHxFc03bjXGzv4ORrZBrImupLLx8oc%2FzEI9GEqlJnjfvt0oZx%2FWLZvmMNaLgL4GOqUB1FlaMBX%2FZD%2BSbSOQd1fbSIGRFJhJRwCoH6dMg9IMmXtgss55W8UQBLUB7ZAc%2FczyLS4KiL4Nq6IlqXnALr16G63x9l5FdSAHh5v8TRwSrwcSw%2F45Ka%2FMivUa2haCgeqTqn9FUA1hVkhwcP4PBAHOwegwcNkJJ35fNA40ldDBZ7od1m4hqOSUuc8IDvrMKlN2nFR5La46rMNtX5QNO3z2T2xhm3ZM&X-Amz-Signature=ca8fb626dc8a42bcb0eb04a575c4c478999f8da6866cdbfd6d38b7cc16ccf3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
