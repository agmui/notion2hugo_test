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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2FMK25%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD72OpJ84AFmjWA8pmi7LdF%2FSOeNg3RujyUc6Yy1eFqOAIgH7Zu8ZKhyUOIcK8LbhgwhM61FN5b%2BnaSgkzwPr4LFu0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDDm%2BblJVRJjv8tcUDircA8J5m7hzICUKoaK68jN7IzDVZrJwBpfR4PA0sIn%2F8k6zS0nRbZBPc1v8moagYGnvq2w7DRyh6Q35RmBNR5c2YfX8PBmqAI7IO3v5IQ00e2FkatDQyZhQP7aoDg7w4TDwoznbKMV0kRbRDdro%2Bdr0x8w6f7LJvw6LOGZCPjUYpxSAfYbI0XxndVmKTSqRjHOH%2BDcVtWEKH%2BZaBcFriTPByr60%2B5eDW2vGQFCyC7gIG1axl0HlD6jNsD7X%2Fn31y15amS2P%2B280b57gC%2BGWWWkkm2KUG2RzvXgQ1JOZBX3hNOXgBp6d8BnHuXKFtxnhvk1Y%2BWCFP25GDKsl7dPecaxPB0y%2BI%2Fhg7q7BTotOx4kW8cnwBfaxDYSMwf0tulMMczv3LcpEWLshhD9EFNRszNM%2BZ%2F3juxYv0KdJ7mr6RzQMzCmY74EmOTrdrmw2pOUJAVdStdBC6RUn2PSmIUHjIEBBt1hdY01vG4H5CEdSdpIriI7UQRb%2F16MoGdiyBDmA%2FejnatNsk2nrU6asBkxoiz%2FS1ZH00O9%2B6P52v0AFYIYmyXuz9qU87GEdP6gRZizZGjBUheTw3ARF35pAxOc6BqU58HUOz85nloNlPp4fWPJ5cKFlZeCPuf0dm9PLMZnZMO6XjL8GOqUBMD3eimyBwL73tWQ7IwWrlwB0KmohevKvO0XPm5M4QQ%2FbMuWymJj2rDnVL%2BKChOFkZ2vl90IbL7kMdiuY1x5lx3pwMJylhZZacoa%2FiTVENKvqbnpCjTl7DRwOC3p%2BZD3USkceMkl7rlwvkiy3K5suMOzOhGJrmaQTZ6PeIdW%2FIpp1%2FcVdnC6AMH18wAxyxLgqLZwWdbvGF%2FqKYXn%2FyNrZLWIKgm9Z&X-Amz-Signature=f3791a06b351c0aadf7e5ea461513f27f79caab8302c5a7e857d82c66790aec3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
