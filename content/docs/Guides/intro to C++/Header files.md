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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S7A37YF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEkgaFXEPppDMpQEk1Txb8STxw2Rr32rYn4rWPISW%2FVZAiEA21YMiQ9rUWZ8rZitTwtpgLS0WNcA8GrjM531Hcwhb00qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bs18I4E9taV87WkSrcAyFdKJSLVFLiobVl%2F5EvigDZCestH7tXv0dLD3iNKoa7qlwM5ccv9Ov7g8R3tqRq1W3WQQc26l%2B%2BCTMTS9xnCMmr1Dvnxboq1bAu0D6yzZzEGa5g%2FLSMSk2XRPuPBRanPhieiVgge37v4DABX%2F2OCtV7WSKeiNfEdKRdk9CQCRtL9vQ3IhH6UJldvkfK3eWDVodM0bOmcu5FLiFsMuwLqwwWoiiOxgPl%2BQLuN8tb1Z3nRxia%2FDsO2u5bUrBECS1wAPOGFIpC9gIW%2BzAeMW3WoJPjZh0EVz62TXL9xT%2B1Na6%2FQy8dpPUqsJI7yy6G3zoX99HGEpuuFwkHTjQ3EtgK8ACQ%2F%2Byt7UkmYlvnpzj4KmHrMvxEPOsZYwESOJ5eHY%2FKidGeyWzID%2BEz5%2BLxrGJhh%2B%2BxIhm51E46JR8E6yHQuqS%2FVPem454NCDQbUu4IJ4zWg6ejuP%2F9krzAkyC9NJmfgsOg4%2B3o6JWgbVph%2BxBRMLLJ%2BSQLAWUrq3SrRYKpsd6v4b3iM4MlSmWHHWX4Rd4MPaXM4lJTcxx56InjToOz3rmAxhM6NzcD2bnGqXjey6ReH96xKR0wj05NQM4QoFPSAHqmi78y7xgWvEA2ywjUDky456%2B0F5jBMwWViclsMIfIosAGOqUBkPlkRx%2FqVF31RX9J%2BD9%2FblKJDGotWflluEzljK2tFbOamIwGlgzs0nrmBFvGOUy3yguJRd5ozqwSHuB%2B4sBJEUnI1CJ6MzSEf9b2SNt0FBRUCupRvzDyNlVNx1piX5f6GgAsVBdgytPbSfEsGcbBX4%2Fc9kaqZfzsVfw4dz7alzJohm9yiiSA48OHAGdRzOd2e5FAd7SWxyvCdCSGHz9jSPQlDDCE&X-Amz-Signature=ab1b9030138959cdfae95e0a61a580f5831b654165898893714e6b70e774b969&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
