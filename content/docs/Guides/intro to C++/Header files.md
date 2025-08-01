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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3PIA5S%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXfg3CuAaTZj7abhA97tAYAYYlQoTiRvZjwhEyC33pmwIhAJQf73MJHiyaVdeoYm91QCcz9le%2BWRC5exLosFugRqA2KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrPffxt2y0aZIgP7Iq3ANUVo8LO%2FIwMFFSvKdeIvTFtUhtR7T1ewUrmGcnNnkoSUdzjWBOfXAJuzM87LmFCKvEzetVG3Bllg8ztSEdyBzpU%2BZR7Z%2F0ATdp21teT%2FUWRUogtL7TuCQs8V3HbrZgPHuvbiFnEddJQpnEV760T6lBeXRBrfBqVrEcICLipeN6IsLO9yHGuEZpfUMCumCGgv4Ig%2FAyJ1mhx0AjwAp6W9%2BZ1X%2FVHeFKTnWN4k%2FHV2HrSH5TCagzJKPAaQ6Bo2O76CQT6FpgPJVcUSUEAu9bZ2QEb%2BbY8mo0h5tf4EceXdUmE2wxZh8%2FzanTDIYoZDS2JDNI3Mx934IP%2FG5038v4VTGlEqIweMEgtxuKdV27J9%2FkxNHJq1ysrF8R%2F%2FYw1iGMpbwaYbob877r8dlLtBBaPxbfY1FQaLL4olEPNANQKZc0DdHMoDDMS17bknBwBtlmFxOL0n%2FsZuExzcF3rlJVrr5e9j7RABjx0F%2BO90GP%2F6WkHYtPGHjtwsEBuQpR6ZxhnRf%2BgGPQPEgP8%2FIKY4i5kfrcl%2B9QtP45NEWDu0X4unG2jzlSPeXw%2F8rZIlkTBlfiaeQ9Rab%2FItK9Dg4q8CN9CK3w9poqZMsP5RQlzrg%2BUi005kVB5INJ9SuoulzdCTDU7bTEBjqkAQmirym6mcx6NABeDc4LpPoF28sDrvMMzSNKdMBWfkLVHfzGpMTr7t5T2vBHRXdi6uNidhuLYBjfMSGVUKCES6nTvTIT73cL3Oc613ZoRAfFS%2F%2BPHk5dHRJNCMEoha2qcwLix6%2FCWNJ1Zzis6n5jkBJxGfSbGtAx01qW9B89Exo%2BxrXNUuxs%2B7zKeUR9Qj5idJY0QcRPl4UoToIP%2FD5WYYkjjCdu&X-Amz-Signature=21a82641458dc320daf34158aa5b5698daf2892e9f88b45157156d9c794a4d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
