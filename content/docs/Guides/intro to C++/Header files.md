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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHTY5OC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsj7TmkVy1jJWDF2K51wOTVKX1c00%2F%2Fje%2BrluBnc1kIAiEAp4cfV3ZRt0UpBg7ZN0dvdaJrMNQnFDCzJP0EPfcxRf4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDhlhO85amkQh6SV5CrcA%2FMBWXdUSntDWAaXUoEf%2BEJ2d6t%2BJSJ2opdZZIm7eV4smIEUw1lVun5GCXRCtUINDo5%2BuVuXWUWlbsD8O6PcTElGnZNSNptS7VY2Wjukr6xk7IWNmmvl4etvyqXX2AZPZI3IqK3kbUCOgqx8kPmCGXK%2FFu8x4GHvs8P2aeQTaiqUzOCYzR71OXEN9uAvLJ29ciOkaBh01eTBk7aAXkbdsPmb5XVDbPkGs3ARxBeITk%2BaJcQmquqETW4IBHbpseRfahdIXukXw4OyV9aXyydC5grcSH0TzhWtNBu4j65JmQduyK4cLeCeF87gq%2FGmcrzEOaOvJjRHRmphrRJ3Bo2DKuMSE3iVK2Kvb%2BCeE25VS0tgN9RZSF3zr7d4IBNXd8DHPEDiEdtVIzRtz0KdJdamyqX7l%2FsL4GFbKkJZ8jo8X%2BN1MsrNTNyVh0ZWZPiJ8mtAGeff%2FNYWWFVN5kstOgcuOzpBNNfji2H3lGtfgzO0GEKWD3vSwH1EHXCpFuxvZ%2Fnm%2FzgjtSVbFA7dw%2BeUdhTC2zIDemwl0pE%2FDi9UZSr5xWWodO%2F78UFxSVd0cCcaRrmAmBxSkU6jaAkdWm%2BdJSZgtuPyDnH2WdMn9UtEx8slhlGmz37mLByBZtuIY9loMJCrvsQGOqUBhPYf9%2F0kzG9XcS4kPcSKxdlwmN7rstWo9yPdgM1HL78GYimCPLNiMFiqmVJkxzhRGmX3Pdp7MPhmGJ70LvV%2F7KfG2vGdaDJ1xApNXW81mYTtfXT9NcK6%2FQAzBQA8B1bt8%2B0j%2BjKLG9YE33h%2F%2Bkj7WuBKUsvlU9uNeIVGOcxzyHxw15Sme%2F7coIJSJTID7KbtYnqo9Q%2FFzZQIacySseG7ezy7KdYF&X-Amz-Signature=9cdb5bfe3585714b6fa7b18035eb8c01f69d6f3d5cbb97c4af75870ac92d0031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
