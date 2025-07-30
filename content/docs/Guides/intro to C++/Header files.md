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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSJFTML%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD288Ura9KDRspwGNluXlKkotzP9IlMnOJXuWsV2TLC6QIgZmVL%2Bs%2BQ%2BRiFBbkfCwOfRhkHP%2BB2GJzO1Ok%2B9EsI6tgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAgj3oi2lW%2FCZ79DyrcA4nTCxsc5vr3fxjpi%2F%2BW8VcbCpBmzQjA6zbg7fWrhSecTACGlqnW2xR0asSVYdqafv%2BoNiSfa%2BBDxfX4wPXhoyyLZOkD0QtHAGhPDW2cjsf9Qhds3EmuruKA9ZU9J5qeSQ5Gz5NvMuDsbnkp7zw%2Fbf1TXlGmwD0BX0dIPtqmN7sYDAhCLaBT76HVnNSHquc2dQ0UHlLDK7k0pPcnSqAfUUkZivBAwCLr1FzYkqPPYVE2oRTa4gGjt9BTxGL2NYnGltGrjobssREk453wGrAAHRgGsNBF7xugwmCiEgQr4V19OOT%2BuIPXh%2Fjig1dA1BTlsBZpjH9RMFTe1P4WpG2Z%2FrC%2BR%2F%2FHOkXDqvOF27LesrbWGcM8UjQACUzqX5VCyFPUh3GBgFSHjE4lDNiwo3xXq2tX8EX3P2K7gw4ob%2FrOUcWm9Djn1yrZlmYOFUMafD68ZhVl4uPIQ%2FZhCe9cssrWHsWByJMayyipXY2MRq2P2SANCEbDxYTOF79CaJVlyZ5mfKeMAhpQB6qwyVcDB%2FL0iVSvuveeY3KqMvbRgkh6kAOz%2BICa2LlIrrFkXjtusGISG%2FsM0GNlraVbbQAiMQuFEW%2B4Fy0PbFjkePIUJbATmM6O8hfp417g73I0VKAEML7apsQGOqUBjEZlnv9z8cKhRy89Rm8aKRaebD8tP7AAKNwk4xxBhM2XxFCofTxm5sMLR3ZV72Tz%2Bqq%2Bcp8DYfRP7h%2FzZr2TBjDKDEzjETqCWwfEeRGldf8jBe9DBh3jqPecZwMFXyd%2FnCGq%2Bczm09tBVhC%2F%2FgrUPv9HfQtn1230uwgn4%2Bc7AdG7ZhegyFwDXBKlVm%2BkN0vpbuaKh3h%2BtqMlCvSOdFSUBsVc6JTa&X-Amz-Signature=b9aa69a5879a02dd9097d6c1d69848174e846567f5bbbe3816301fdc6a3b0ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
