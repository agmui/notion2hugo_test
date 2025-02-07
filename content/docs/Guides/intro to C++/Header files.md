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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HIKFLYF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHTUngDadFVVbWJDNdsEwMx664J1Mp%2FEFPnQX9F9WGx6AiEA3zdf%2BRj38yx7N4Vw2nnva61u%2BlwHg5swaJoGHgOPTQIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJyEPKef33x4E7tOlircA5Ido%2BGjxqmPQ%2FaU4rqYXdtXl1UVPCp9KDmzFWv27GBAeYi6ssaUJko2h5AgVd99Gu8UNAO9ZTXJDCcviTosBSxKAo%2Bcr1z3eACeyUruT26NqxYSsiqK3M9ymlnR0Kerl%2Fa6KPDrG9VD1qgFjS6wT%2BpMD5IQa%2BwDGubb6U%2Fjq2%2BoBLegVOtAlkyKroITUHWdCjnnCYrY1WmMOk%2BV%2Fci6bkCkoYUpvGgOohMaWeWXawgjQRKDhiz4Bjt%2FVz7IxWDOMDWHsXef%2BteJDHCYRztpPCc%2Fs7zwPS1F9g9I6W%2BPBxy0g%2B%2BFp4XQ%2BNnds%2FVDcxFCsZkrONLHWxjd3pGxHuSYwZ%2Fwi2j7nK35vTQpUtxiqFMMaMYwIypZxQqyoDz0ha5p32Jyh16udNQQh%2FXUD7efgB9qN7WHcwyZCmZZczXJHQrwKHHRTs%2F5uVyXmSlHTl%2Br0vi9FHXIp%2BpcWCBy9E4mhVoiSEBBL%2BdkzRA9IfUs%2FQrJlpm2ueKoEh5LCfVZHw84h40WjOTGVjMr2jFg8L44RBiC1dzeihfCaqwGxHXC8XDAo4Ephb%2FxtnscTaGpa%2FC8blDLUBokYFJmJ2R4juGaui7YOTv8XNGMrm0EG6AITO5Zrb43bAEXi9w8a%2Fe9ML3GmL0GOqUBsO107MJ%2BFJMUYGdAOwkXTOr9n43vmTiujcmZVKuPwyUvhnobU%2F0XfqDCHsfrZRCXtrVxTh8POppDssBS3FhW1PbSe6lgc6tuHdROsLlfvx9xdpIBRh9YzHMfbxNJ3yvG2LF7rEXvKj%2FkjChokA0Cr8WRcECaKAdI75wK6ofL3W4HgW%2BlcQYGY3LEpydccdJbOOsF0FH8EQbEU61BljEKK6KN05f0&X-Amz-Signature=2e692b012561f658f0bbd923df1d4d466c2b02e966bfb77b54fd1640d232cbf2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
