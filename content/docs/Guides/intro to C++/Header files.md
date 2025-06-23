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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QVXGD4D%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFA7Crk3G2yXdP9lCm1uXoYeazzDV115TcQ3v0N4%2BDhQAiAHyKHMFxg7ZV2johAR2bvJuMbAZ7ABKhZesUGa3RCXwCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMutvUUwnu2dc7h%2BR8KtwDY1zZQnUn7jUAqUqnxprt%2B5PFjIu6JOHqC5jxUDFnQwz9K8eXtXcSFem%2FvFCSVS8g%2BsOSlPuHMEqqXwZKCPnnwHviuD51PmxwCR%2BHiICkCmL3sbSpl58Z3updWSJP%2BK6cUVEgsCiGb3bYPWr7JAf0pBerMAnb0bc4acPhAs5A6l2d2PDcQqiJtYhMJF4fFW%2FGH6lyfImtqxFenP3LVKgMCEkRJRj98REJ%2BY1NXkYn%2FS4lGCL6H%2BQYbpIGaxu9TF5RC59SsPNmX3AUzHl8xRjmH3dNiqt%2FU%2B5HSc4wVfgM9BL6CAx6ndwi9BaNHbRvNVlm%2B8C2XwU5p6Bs9LaGXPxS57xV0QK4889mvRMPBN9n7CD1K9%2FCgqMBDv0LfOS0J%2BQuTHLvlaHENGsqDpo5IXIHl9Z8DYEfi44V4vYBCfp2CQTFG221SCjt%2BR9JKLSmtqnkdMvo3ec7P4BAcss5zKadxXERCJ47HqMg7Xm5dFM%2FkJRotG6%2BN%2BXxnTuxmqTAyJ0IIpZMTDAH8epEmHbyFOBLVkEHQF6YwASLrjJR0ObIRmSBX%2FqEmnPBubUqSOAM90%2FVjrjcPW8%2FkMHzBUC2zYlu0AXKyy%2B62fx%2B1WJjJM6XObWm02qIQntmQ8wGuWAw47PnwgY6pgERUljhqnDhqZwNT9sWyb0ptRo1DAU5UFJCRGftO1kAp3Dpovw%2FgorLm70y7yON%2FMVuFB1PXLo9SfgU4Dd%2BdUZODQ6BMNDUtjPw%2BGgI3Zo5kC%2FjESPf6h7wk6R%2BU2SZwM5EDLiD0h4nlP8XAft800xpgkaGIdkBpCbBEBUWfY8Uv7EFNHZUMDYhhfmk%2FFlTOENu%2B%2FvRl7enhaDTjPRcvn%2FdtJQoRZ9x&X-Amz-Signature=ddff4e975f0acd73116f248f275a27478b257939925f0e493cace679f5ed8e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
