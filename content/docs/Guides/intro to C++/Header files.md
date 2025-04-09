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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXHMPYW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDml2Uxyrs7e34AutFlmRe1%2F9vaNyhJP43gjBvAZoHlJQIhAJzW1MjtL0s6mi6efAf07%2BQwUpsIjGVT%2BuoITLOnASaXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz49wencNTNjCVNcqkq3ANXcAaW1Oqby4MxoqtA4IX2TH7kmLfb3f%2B0KHo1yGLrNzuOwVJTVWyvCsY2xLTsWcXUa7Z%2F5BADsYYH%2F%2FtTsY7vcUqK3D%2BjeKMiFspDtnrA1EqR%2Fe1ld%2FTdkgmr0gK0i4nDryhuUGyHWH3mhh4PBkF%2FqzxGjgXaLQxhEvC6dPlu41FTfOCzPMGjze1gwFXTg5jaahZeUM9swflZFbP6sDgq3pHoefvSLzHaBj11ZNPo1r7uESLQWBGREF5cZAsuwQHmpF7mftzwMQIEIXrRMWB7NI9CQE%2FnqmyxN%2Fzd9nIGQD7AA8GvEvd8rViH14STEybCRjzV7zOj0bpCXr71Y60aQ0V0DDOXNSmAYLxNYcfXPZT%2By%2BZvRchmKbSRudWT0rroiX9Kv1bFsVLlTKG8BVj8O1UFdp%2FvXgjspIOhpJ%2Ffk9RABPhKCjIrA6OXX2PinYhQMnVS6HArTzzVDi%2FAyb4W2Gn48sPa6ceMxLjgJmdt87dc9VMWfFGlmaV4HKwzCYapNr%2BW%2BkUOGqRVXqTnahBolN%2F2tBGm4e9awRrHH%2Bz2jtBVMRMCy5t3VHYeAiTSj1jFgZCRWwHpieWGwYhVxI4oi7ZpOEZedjtREPa%2BQnquL0%2BpZzO%2B7WK5IRRvSzDQ1te%2FBjqkAVfAF6eSZ79w3xIATWc0edJM8TKbXoMIbwTZI%2BioIIIVQ5NU4PokF2qbxLIkF3HpAOovTsiz8H7zF5F6UwBE0tgIhQv5264Ua1GHuq8oVkg5%2BKEnkJpTPIVWuw3F6aGv62qAdvjy2OVwITgX2Cz3KhHn8EZWRj5s1L8Am5T1bSoXcAnKw6jWirqgaKW8fN74mJ6MRXyQh8s5Sd9hMnYiXP7vh5Iz&X-Amz-Signature=eb3f650d0f87e2885e086a4bf2e9fb12f0882928e7aa3d1bc1e9c30cd9b35ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
