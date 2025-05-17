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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDVGBZEG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs6rV3fNd3aS8AfDClqek1qKI5dd2SpCCmF%2BHXiYObhQIgVgBpgJS3GdQPgu3yQH4LWcPH4CstxtFFVLqL9rRdzPUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDApQhZf4P5Fr2%2BzwHircAz80wAuhRDuruhJZWDaTeYgCSShNbVoS0QHoNi0vbps2VJcTufOL37F6Jf5G6rZbFpBLYQZG73PWvtl4K6wTCQYJvTld2kNOOPDRgpi76uWO%2FIkfr06j0ivNIYuVsgVebS4mO1VCqXVS9eMPCeOx8DqqFqDgUWtAdELZM1RxqaG5FR%2FBE6NHIGb4k%2BClzLrSamk0jq%2FjAecKuOGyhPFVTZZRMyXmlLA9vqzW9S49pV1HTbHzl1rYokMkKLXFB7wprxCdFKJ59WSrLVOXaKpVwLS08T0MsENPncE9rwDlQFb%2FFcAnTWDYkdf8jnDJXeSt9Rj7%2B1KAesu8MGOzMc72MI83Pr6hDczkI4n%2FZ5PYFovIMoPdYhy7w3mIhYpW%2FOAGhkSx9oWL%2BPTiNwW8Hrsh5fV4w0RDoPPfusVpKZekMU2JG0T07HVuWxrdJt1NeJVunytKOIUHXkmD%2FDZeq4m6foEbN6Rvugk06dZRhvaUJDRUOFb7vMEcnBu9WTNpCzXS6U2dZAtWVKuStCdwXFT8D2Z%2BFarEzKrvOKEueNkGv9IcBIUQ4wHeM18CjYGQ2FE047zopgjUVrGQdp%2B3ppT1IxzqC%2Fr8%2FbuBmZ3I3zRYV7iEeF8GMN1zGyAL5ZyHMOe1osEGOqUBijLU2l8X9adtQL9Hiph7SEvO23EMjqbBWzh6A%2BMXyXugFVxqwdFqKI%2Fubt%2BuSPvhY6UteNbTwQoW4F3Qzati1sLeFiTGmItfXPZjvdpdrFCAt80rhqox7oB0mHaPQm51WMVnxNQhnfgKU%2BFDcy4tMG8afAp8cOxNvNWE4bLthts%2FmLfeeEudfoo80RuUP252rcQoadzPPe2PBnGJzTnh3PvsR%2FGr&X-Amz-Signature=eb0709c5d5ccdcabf4ea06b9b004f81c9791fd3339ae713b960c7c6ad7b4e638&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
