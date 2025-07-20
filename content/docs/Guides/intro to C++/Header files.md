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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD327AL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG04EIxT1vAOVsejfHLlstyffVmzaDpGuKqRvt4c5o%2F%2BAiBHKlXHe41n657%2Fgzwp0cAy8Aooh64d%2F8P3PzgtUBWcCCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsxt8VeW2ND2cpL4fKtwDceNGtQU%2FUUd1wyD3QmPO3fWyx0aEFrBGJDF9t9v7rrML84FcCCf60gdNWj20VVBRkAiVu2d8UxsmPqFj5TNxpz6UNypQuA0LRY2o32Nh8tdaqB%2F%2F6eWAg4gitIVrpDXkPgr29RkfkNIOpplvKty7wdicaWRmqZx0zan5y9IIbtmHHliW%2FjfKPIcXVfBe4vfyBnvcVNBThH7AwGsyv9e5lZnOFvgCABIkUkRWvUWq7amFuEKP1U6jk1%2F9VLg%2FC1yZGKLNX8zJJMWCbJHsft6XSp9aAOriMzx8t34ExIxJp%2BKj5fP%2BJaYrGQnsD5noJKqQ3IRkwOzsUpGERfb2exyABpNN%2BmyTdBvdUdAtdTgsXkXTL8QcPa6a6es8abMSp%2FA1l2VGT9QdwUmgCDQi%2BzruXnEYsJeF%2BtEED2BdbfrF1nNQkumqkpRz%2BEvYVeudReUUXumNXp%2BauiT9jH1kH7EstO9AJgJldXYZJWr8%2F6%2B82jnLlBGaCT%2B%2BPf1j%2F9Ft2EQIAoiUU%2B70plhpa1bl8WR4Iim5BSQcbUxdqs7oB%2BhkfYSDrCP%2BYrKSDKO%2BlZ3pdlIx53oTSBgB0%2BRgxdVJDKL84CDW8et1fo6xg41kJp9R2fiVvXsufG5EOVHlh0Mw7%2FXvwwY6pgEtTIQkwFoTArwO76qgKOaAMrRNtdmUwN4nkLId6MsibK1VPdHuadaxAMAIrAIulJtpz%2Ftm3YDFH%2FYT%2B3X%2Bpq3IpNY%2ByxFKgZ6bs0M85%2BDK4dC0%2FLLlvxgUzVVejURcaMQ4%2FbhQ%2BDj8mW22Fn%2B1X%2FeUTa8AOr%2Bwa30PrpIEejUwpC4GPRT4HRYqh2%2BoLmo8X%2FvlH3NQ%2FeolRTjExBLNZZpghNXgDj66&X-Amz-Signature=03aebd60c258a45e16c848d74b1a01084d8f336d90de640903a2d134a975bdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
