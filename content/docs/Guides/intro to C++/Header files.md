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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNIAVCPQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICA3kKzQLI56CslqqPg1PrAtTK%2FB0mmJ6d3slFsUGrxoAiADvsXUJC2QBpHvugxhquG9KhQKOY37HPhiC9BQcrfW0Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMszCj2DaKw5bpSJBYKtwD1lf025eUgubNTHvZsoHJ4enRoyir5qvce7AZ2h5rb2%2FJ4x%2BFv9rMKF3Fd6jJovUeDEuun0eBQfYTzhWAOBUF5brjqehYexVaP%2FpCiG9%2Bqj%2Fpbnr3SFiaz5kC9AVPXR5xYuw%2FsM6qr3Bd5gnbPf9cyaPNQOJmMleo1f9IdpsK5lSByT8YijpZBWkUkpGcPGOht55kYRGEdq%2FUhaOBoTt2%2FcBmHCmvxMDlbrzlRXcfNNAuhfFwp0j0tWLFLCmxzXZcXjqoIrJd%2F%2FSIgS80CPWyyI5b%2Fe2JMSZzPxeOm%2FBQgE7kpiCuZQyynDvsx30kk9vmuTf0WhtCeXIpZFD9bbT0aJI8LSHwKa4M7v8S4fn8u6NiyU3N3FeoPIaG9NQjKPesXGbbR%2FoTfH34FjSCsnO5AibiTZL0staJEQd2EYw83Y%2BdjUAcsBh9fawaZLvJo8Bj4IMNn79hs5HEWavqZM%2Bar6qcrdztUX2JQO0P8WC%2FYddE0L8m6R3v8Me7rRgxUSw7SN1Lfd6%2FxNM2ItmOkKZabzs%2B3BhgkfM1unO0J8SBY7kZwH92zvAelHDWBtm%2FAuh4Lv1fsNkT8eNANFDnTwcCPL1gItsy1zxBpZC1QcfufJW9iDqhOvctYYsaA0owo637wQY6pgGvQqhjpeq3j%2FBZC%2F%2BvATG%2F2cfT%2Beu0QlHCCDmonKFaBllrQMxJtiZ6QgfGcQZnDNRyubQrUN6TXVWSQO162Ryq7vgYHEk1gTa%2FrKZWETM8Q%2Fm8bh8G%2FNJW6IOiRfCpovJ5xLnqOTjKeA3FOsMu4uxR50LKRq1X%2FbYiK%2BXPznBm57YXIzk8EMdz4SB6wGf4LJ48THFAwOYV4lkTMTAUf19HpW14YSS5&X-Amz-Signature=78972bcf1f8e35cadf79a8edf3e44a932a0d8567d1b5cf54e2cd22b7d0c1f508&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
