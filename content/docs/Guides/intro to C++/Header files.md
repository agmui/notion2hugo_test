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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE672KTS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZGEQA%2B1r8NDf2CLPmysIoSR7%2Bo9mwH54OawfjObGsGwIgBQQfEkKDBgptzV2lfeTiULQTWgpp1uKnW72nY0eV5YUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCWxmkcPN7Z1jPRmSrcAxSZJAAY9yy9HAZiqXeQiCQMFcDAPJ6xxbteOoglAiwGJWIL2eCvWWKRq27Kg%2BctP%2BvfxU8xKt0hgC4jWAXvmQbpl9nLvNcHubHQEVV8IynD0VFvAj2%2BE3bw4zkeBrbvhL27xZ4SIsr7B72y%2FRNElryTrQwJUQ5mdYWMwBxsUuwF87OVhCvzp0DS6Rj77EHFOCVIVj8C%2BGQyXJAxn8usgv%2FkP0%2B3dLzhvVBCs5w84xiuI35igXd%2BpFDJwrtX9WUcCLpBCwKK2V3E9fTWHv2pyci1cPvk7vW5kuijSUjQwijTAuWBy7w%2FQ14Duz1gv4DC185cyHtOn5Tg%2Bl9WzWKSNbr62IdQBrWzHKimXrrrbfMzXFe8%2FjjhN%2BWLfShSD0xrmS0HmetO3zw3H%2FowNBvbanjRPDgpC0MKwMpA85j06f1aJI32QsNGkHgPow1%2Futh1Hn%2FWBTmu6u%2B3HsoqcNZWv7%2BD03y3wYETI%2FM4IgaOced%2BCE0r98m2rRsWKcV0tMvQNZIJqfhtZQRkZC%2BGyGc4LvjEbng%2BSC2qTLhN62nwoVsOViAsv3b4zT1PGu%2FI6DtkJSfJQLWxxTLdXDPat9jVF1jDLB%2F2twzWolU8U89W%2BlK%2FtaftQOFy9iv0f7OhMI%2F6kL4GOqUB%2BnSnTXEgDCJbO2zln5aSI35IleT5SOFDjmsBJpbbfjDQVwc6URRfPFWQVCDU9wz7fK2l2Y5sQq%2B3M0JXRlSPkjwaJslJDCoshuiNYfR5P%2FsRfrgoGeu8aKe5LggKnm5kQbCNExcwJbU8BVAH1iHwadxAAaTHQocdw0wCyifApGJ3ERh0mjxF63o37DZoPN8MIzwFePn3MhewVn5VaCVcjcSxyFW3&X-Amz-Signature=69c666d07de2184301bc243b40b1736b893dbc89f47ed91f8d08b6ef89501741&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
