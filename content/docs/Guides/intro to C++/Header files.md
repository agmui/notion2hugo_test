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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YCMQTU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHpghSzyAKswXMD6lz%2Bz6hUnvcsDLbK7DlgUngcP3YkzAiAfYg65mmmdScJfMgziFHuUTiVhS%2FTFADey1V1FUL7NJiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKahSE6Jd1DW%2BNR1KtwDJPGIy9YvwQc6S%2FUQ3GJ%2B0heqpGdtlMv8dFI3DImCmT77qWHawYo6CDnCgwmUaOFpEbxSnhd%2BN5sqEumrQQGs%2FRQXTCwK8TbPYrjMOkV2VcRDNXdLXDGFgrNDFMu8KWPijMv5n99ZyN36VOMvFaNzEx8kHTA2i6mBJbI0aNIG88m64ygUN5ThGG8XyVB5TMySD4uZ53JiV6oSt9ngOxZsCgcgtss1NGGfRqIqC5AU1CCqazgfw8P1qEMDJHxKJ9dazwH1BYSXqsIDhlu%2FNThjJdpcKWvnabKPPP3ms2HkYkhBGNqpa71p7anxg0WqUw2dazceoCzp9o634RwPfmH9SVNyJ10f447QDvpY3Ji5Hh9AzOMxa%2BG%2FNpeazJUl7fv%2BWV6cd8oyIXB1AONRaX4h%2FhPUxzG7xe7%2FJqWQvgEtLiQY3jsS%2Fx15LZAsX0W5dCc6ioHzsX2b5xZV%2BngQdOu3VmzDPfeTSs%2Fknm4MKpVyxA7jiOCBNol82umxjmdKQ2XiDiHoRLYRDT51ugOJI%2FqQq7sQFltaJ1ja%2FrwZyHS0f0KAsMu2GATBM0aAoS1W51O65OoTOdJfZBWXBUyak2wpAS3Bgk4FAb%2B%2FqIu%2Bfmmi5yRcEbJMc1I77EVXZ4Qw35CcvQY6pgGDHs6h%2BBsy%2FBp7ZxuV8AskxHdetVGdmm2rMyPqITm3RwBk2pz3QtWo4Y%2FVXupKniHmbgSx49CqPzyn8l1Mrz1Y0YHPEslkUrOKRA5SKetlA%2FdECYZ3NBPCjZUPIygThq%2BS5aj%2BikRVoJ6fc8hO%2BZauU%2B41qplvcqbutpjKPhFGIx5PyKpXW%2B9YUjXcSXiSd3TOfTLJgMI3J9ldqit5e4od5zmDkF9D&X-Amz-Signature=0a911485039a085e0526b897816f08c1f194946c8f6fcee3cc58f03f60f2d1be&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
