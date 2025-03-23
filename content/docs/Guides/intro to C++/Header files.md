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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VCIL67T%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSDK0464PxgqQqTESrvZtbffpoUL%2BGBoFfgHHtj%2BdpwIhANwmnlhpxEXxLBENrAPxgwLDsOQPwiIeVZqqqnPpF787KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaTAe09OWpmRNSjUq3AOLa9P4i7Ax0nuJ1GZBgRe15wQ%2FYSG6pkWORMhxQhGjCDNSB0%2BHWFWlZCnMyKjS5HyaMMyMs0OEp0MUe6eCS4jT%2BlkoBdaNYCwWqmjFB82KYs77OsiWStDpUDQUK6QnzzMZcn0pHNCZmpqGy2BG9IuGmKKacATE8AmfT%2Fh8nf48i9C7%2FEuLF0GSe1XzYkW3Q9agqVD9Yj3OQ47SUHupivCJOEyzRogynLAD6bQIzC%2Fpvm3D9fBA7sLLc60r51MCLW7afG%2Bpp2FbJN2nmiIIW%2F8JIw82VpgpH2ISSOmQ%2FdtxAhb8JVReOdtXGu8YNgcqL2I00BCInh5apwJJl8ZcVshIs3z447EVy%2FRzOWzlrCb7SXD%2F2b4UN1%2BlZ0uQ%2BeYevRiYW%2FLZdhHYmFr27oHJpqLxYyOZB0%2FgwpFE36dVagwx0UvlWFep2jBiZx3ZNSwr9DWVgqmiaVcbG2QOgrDEz7depNiAH%2Fw24ZOrV5zNUyHeUsFPOMmgE5p5mZBwEE2d3DUnTRTvuu3V%2B6T5%2F7EfRp6vtvWrhSDDP%2FghVrlbMMGF%2FQgG8lKwYKaLNoc6EiZgH9k2vDiMMeT%2BTK%2FmK3qlgXyMSTyVRCdK95WjWEtDwdfgNDDeT9KjZOCiTBz6%2FTCTy4G%2FBjqkAU16t0Vt%2BR5DNFIQM9y%2FiYcn6hvT3ecgOJSJIBjcrdm6OPe2RUhTkuBaQ5JN7UPSm9uCuY21D%2BhtD6JRxsQeGjdEuqpbCAPFsJM8%2B0tPm61mdDvuUwzvKwK8m3SDDsgs0nXn1E2mfqeYqyUZ7fB5%2BG3uqKomJQafsE2ID9M%2BFcrTKLDg4PVl1dzWS3uDBULBZ2IpbQTY6W3x%2FM%2FhqU2FL%2BMra9%2B5&X-Amz-Signature=d27561b7efe554c1afd8da9e0efa6590bebfc860ea86297f7f133513c3cc1b11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
