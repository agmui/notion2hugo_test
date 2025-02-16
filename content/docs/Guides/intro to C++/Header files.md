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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV4GPOU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBtAtbk%2FhEUi1Rw6f0VVWFehqtwhqO8Fc46qwHY8sVlIAiEAhHHxwG2s4msf3IOW8bZuWOlrgA9p9lWrn4wN17AIfJUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGbqUaWnMm8JiiaxhCrcAx%2BM%2Fa4yN2BETRZ5uYa%2BiebPvNIxet2SAEP3lJQ2X9Lm8hTLo8pfuyjfgXlrk7%2F2zWzpUMRGS%2BpQwhG7v3gMqPFW%2F9utwKCTSA5jCzlI5MW9EelZXXfdT0byf5za4Cnz1zQ%2FG5wxZCXkNaHw1QHxd0%2FcnPqkcZBWh8vppbIxnk%2FP9R%2BENAmFaaRPMLSkkAIlZepxyPuAGX4LtIPw%2FZ7w%2FiqzqT39y9gDV%2FGUs2TglmfEwV2logG4bUmCSIhGzWwBUMSGr%2FTq3naYsA3KL5SAPiZspH3Fdv%2F%2Bfm3JFF8JcZ7dkdq6ZXAWGjeNVH70gP1mhyv6jvwST6vddGVmO5%2F3l7yx%2FzRNZri7tY6C77f6ZGjRCbnKDg35D9HJ3E%2ByG6FZIQ7KknquNJIwBUfetjvgy3MAp%2B2IpM1mNedIU75EVwNSGhLxGPxTv16KQjK5ane1DBpjGJVqn5lzZ3fCca8Tk%2F%2BR%2BdGjuKnPzV0lCUDwuCAtijTwtsN9XtGPA9LJqPCZpKQT6mTWnI1PkCpjb6i3R8nFkb4bfiNZWeHF%2BPOnmvbpj%2BL%2FsBsmWRDdH%2FZfwhvTVPGHKMuBtoLUfVyn0hImgdSWOm8ed1t%2BKZLXCXNmNLfI78M%2Fh9AkCYhyx6zhMIbKxL0GOqUByxO8khxoiSQ3lxTVTaw03f692Ow3RbIJH4HM28ft5DCYvaoIPnXUnR6CV7VxSFtmYcyMocO0i0G7Ewet9GTHjZqDi%2BHQx607imLUENEu%2Bt%2FZtH1%2FVl6%2FzIA4x9qi3dyxOYf%2FVMGV1sHRAB8otX8GGfOMqwlI3fIAcsgg7iuxI10w7klhUWIcIRbIvs3vYKZfpuIREHd7YFurFVkKpqPZbs4sKODx&X-Amz-Signature=23b9f14bdb302619d0ade5b4c430085433a7c03381729546c889de1ca8b9e437&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
