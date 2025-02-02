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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5LC2J7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuEQonzuMEK6iC8v4vvVlAAnLA5EBJq5AZ2hYwU6JCpAIgCEnY3hvxEAAwiqnHaBaebF4s3Wd5rwcOjLOJLDZXpzQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPalSQMhCTnQKj%2FgQircA6PLAqY5suko%2BCBCsrkyJt%2BOfV0hYCOA5fkJ2MyWFaOmQ5Txlzr8SvsdY%2BdV2A4l4hPTo1sh0vwqpqWfVCfQyLT%2BPQT%2BhGR9R%2F7wr2l8Zm2I1fdP7CqbOSixLYtEDKX6Qg4BQ5QK0sRwXmwf%2B4Dkwn20NUMEbX6V3Dnzo9VhS7feXM%2BziSdHZaKB8VeA1kUN51xoyFdGA%2F1bHIBMdkhd4w6K6Wu274H4YrEZeKuZ8LJ7xeUXYMyidhDHkziE5ZrOv92SOd5nhQkAriEHM96aZ8e5kNXg0OSaAxrOMPCJhNvky%2BAkMPmk0g5DdpVeWsIdRwCsiUQTOJdDAtF36Ln3uEng8R6ApljdPYUCK2Q0xPmcbxp4hgZXSqCDvSMvIzJGpj%2BTS6woQnEnraLaxBJvD06hfdugpl9mtZk9IaFbFXnd2Qsipu%2BkbwHQNThdkdtoBFuhg8pLKG1Uzu8dg5Wfj0O6LSN2w5oqh47KfEK%2BuLeEoHCOQxuw1anFxUBo9ZT9%2F8jvLX3%2Bjs5oHY5P4pPl2KnC4qo0Sr%2BysQZIpqQbMsfjePj5MqtTg93P2xI5NC8JzbOXPmLRxsqyTBuNrniLeWiSd%2FdHAczgIxMQbBZfoPNf7ZihHvoVE6XY%2BmQqMPrD%2FbwGOqUBW066bimLTHtd6954WTv8cPHci0ZicnkgkB7zm1KzY%2BbjfnbfiKuNnbbPMIAMrmrM7zobGiMaL44%2FTFlQBQJuwwfanPMdVlxjMsz7NVRuJKpKVjQYZHNQGaf5Y8t5dOqXQRDtZzEqhWeFebjY29902nr0iU3jD4ZNtDUbqdqwETukTPGRafqquCchRl0gVmssT5ivHunTxyRPcDRQd%2BxR0YnwPdtt&X-Amz-Signature=6cfdef2d2b5af0a01c85eb07a234cdd0d70e3d06cadb56fb8989562ecf47df86&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
