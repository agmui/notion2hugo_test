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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MMVG54A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC3Y5SycQjT3sDEhBJ9lgMzsyc0dgmVFSsFPEGzbnlBRQIhAP8I8OvXZutAe8%2BE61Cjd3YOaqwG3%2FUj47KMrSlPXhgQKv8DCEEQABoMNjM3NDIzMTgzODA1IgwZDutnjpsFKGaRoSIq3AOJS6BKa5jItO610DVotZhYDkAuGJGtovdnbM4KRYvvUf%2Fw2p0OqLglYYTfbfyO0UxKcocXN3%2FcwXE01KNrwYf%2BUCX2XdG3aaCz7QwY2MT5rfqUzZ%2Fh4zllGEJiHyIVoFHNwUlLy%2FwWtxRKVxMBbhAUTAWn0lDHfZLZsQsyCpMWHFMrgYOSDe1OVzgmuTA6DnCltFxf7a6boSDY9Z7iG3tl0doWW7nXIdbPd6C%2F1wGzNXZvGGpMqLBCI3SyIyOQ6vlck1u%2Bxped17CzQDfighYptNaFRt95H5818egXknXmdtGFgMPkuS69qrDr2uJ36bHGmkeL3x5lTZX5Gvd3n8BpbJFTfcW7i6xxMYTqZZnU5mVuNfaBWR7ZuOPnmDYMtCf4W9SnVlvooeIfvlZacnpFPa1%2BXcsa01rvNVOtOT9fAlb0A4FVBSHvr6%2FhUb5PZlsDqVPEzt5pHbY2NFP%2FQ%2BePur92TVBVPPRSUjz8MsBBNo4KQBgeiCeES9zdX1kMTDfySIWIHiiLl5aHHyJ%2FXjOAPlV%2BNLM79b4Gi7Uu5jHTQE1DaqkoyXa4bYtrTtKo7Jlg6oQ4LbuZwIYmHkCVwX7Hag%2Fp05lbeUbf6S59apBekIgIPI75lUiUj6klljCXtYy9BjqkAXC8MDijw2Y0ElSxXe8RASqTmo2Np6Z%2BxhCj%2BM8k99A5uo8nJCYgznAslPv5r4rCMPGPqbuZRarqndJ%2FOYSqEL%2FW%2Fj%2FXr3KGrF8lPyj587TCG8ayxRA5rU8ji4Ey5KL%2BqJfMhzO9GDaT69rhiRESjPBM5eX2OeZJj%2BvhJ8pTqeeO8uc%2FsTV3GvJ6T6W10qtC%2BUWvmEDYsBclv67Xu7%2FeFzZT5pnT&X-Amz-Signature=d4e8bb1b5ed0f88ee1423b0acf31f52aa15b397061d0666cd49be26d40dcb337&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
