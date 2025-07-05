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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AI5GWEN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLD%2FmRxQCY35c2olP1er5ulIPJWwF%2FcGPlBlCh3gzKywIgKiHZOX%2FeMk9MC6cWbxX5W3gBg%2BTFHvvExHYDoanU2qkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP8uRHhVGe2hffLd3CrcAwPQALRrptzkz2MnD6XMm5KBJKl%2Bvw4EvbgAzN1PQAUsdzVeTXErPlckktIKcWC7rBYfFCbB%2FytlGaAad1HTAm1x26vkXBMnjVf%2Fd2TEWyPdcoNmTBrHCVoTjrxpL0SvbD4cGPmIUPWYxkYueZ1Z2DgYpQjuKhr7hu3URbgLkchpGvn4m8hMGiXWMq3mE59sQxkIrcZvJtoNd8NFEfJBsoezwvlC29YZmfHREcCt378EaZ9SyW%2FrfUPN16KkDWFBTjNXb9XcITfJZ4YjxRcQ5CRvixOnEfDGgyR5h0kcGFHgl7rArX%2BVw8BNguVpy5JJZ7GnxM4XCMUc5pPp6kuPpycXVx9uEZ4xuSIsPmV0JXVyBgRL%2Fk5bgu7MbDFwt9f8E%2BB8j7xoxpQyg09OF%2B3RL4moIlwVDuubA1N5aEur5JvgXPsVfU5Mc8Si7lvCCzqhZaoOd63B3zu3wOcV40xQuRir3zaY5iYMgevcPW86L4emhYC8VcFdgxQV1%2FTYIMEpDC%2F9X1%2BPY5XHAA5vOd3KxmXhGkFgNdQLYEVUvJZn802ZPzrWt1DkSo8oCVGu9XCqvjRnqKgXo1hzw%2FQuQax4PIqywf%2FfQm8MmBsnQtbMIE0Fn34va9n3gXy6R8GuMOato8MGOqUB46jXKY59LHLW2byP3atECOiCCmTknrSnCCm6oztJuOVG9XwJWwtk%2FNFMXCbNohccn1%2FeT6gprHM8L9zyfHKTyltJpjeXojnqDYj5QwTL3xd%2FuhTTY2LFLdpQJvF2V6GAvt8tBlGXeaqcQjQb1xh4Y9TkMzR2oFZgO2%2BTzvJIEZg01GSEjErjO3%2FMkbN2YLF98oQ6e32%2Fn7U0ZWh5tjbwwXn4MFbp&X-Amz-Signature=698ead955404e42b26388547c9541d7c2b12bbebe881467cf0b5d20c3b969b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
