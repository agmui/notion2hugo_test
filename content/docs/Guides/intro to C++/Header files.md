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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BPQGM5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCyfXcBLv3BpmVsmtgHM0llIg0UqWEvsaQ7tCDoAVoS3wIgL45nLCUBtY6bGylxZOqi8E8uYvsifcqpfJ4eDYl%2BKkUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOYtllxWiAFH1DIV1yrcA9SI%2BIlKaMDV3OafMlnR5ggBMTMUm0EcnEHCjqrZegNRDLuc1LCqhucUyaT1kbUi8Vg7DXWOq2xpQ2ej3xlHIyWtps%2FxF6jInosE2CNm%2Fc1O5VCkFwMEJKm1W84D9QArdoA56vB1f%2BQFZ%2BVbM9l7RJ4ThAWdFVgO12fqanLzNcCUxluOKSqCIcAOlBoqljVP5l4n8ZbRjGL3njXb97jBTV6k4o0pvdUzWGRpqNgnVGicahBpYFT9CWA0umaOZkXe1SKGiHONdXM6iv5o9ArLGCYkv3u%2BaHsuU4fAMLUq8KBF6U8q6GWFJbIe57HffNJ63RxU5Q7ZK3N7k%2FgbZF2FO6JEq3YE9eJjwht92G5VSxSZ5zhLXNj%2B5Bl4qfxURozql0TekjgsiIIqaktzmWVgw%2Fj%2FN%2BxrYnp0z0RrcvcBDMKDbzuv2eohQ2GsKeBORhIFr%2BNH7aNSpngfoF%2B5QWoICyDk35QsNpgogUa5pnWkxXxC19SL%2BukRQNkuRnMkabKJavVLGApMbaIpOoMzTiVPRDwAXb5RIaDxshgv93ymacI8zlByAdHSZPCKXgnWCxKA9lATABN14snnxKlHKmdcwdbYDmGoeDCSmwE8RemApXPWGQd5VPLTvaKlmhinMIiT3sMGOqUBOsGOsNJJW%2FOzGelwHiDTyIaMttL4FyfNKEE9nDa2PKV9TffPqYCuwIvnG0KKYClEkL6FhpEjBrxYo3LcCmqNNDLU1S1FosyRT5JeApJl6IW5jWsjvwCJ%2B9WgGwZnBuhx7QHFAVRZGvVI1bBtFwmNVcYCgN1PU44x%2BOpnCP5Fb%2FdLg8yao8mxm%2BUisUs0dv31kEoqGCjJuAOACqdKYEBxhm%2Box188&X-Amz-Signature=ade3b643c00812f2de2d846bb5fc2aae1bfc6a0a2f70d98723356f9f98d4967f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
