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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIWHUHP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBdPgeNMkUB13puOAvKazytmZu2PUCaNu5F9XeDoVIzAiEAwFnkTC6uH3%2F8l5vdpPh%2FeHUYvbdN1vTnmIk9EZmqSpMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHzzk7AF9sOhTW0A%2ByrcA5WH1h%2B07gLDN03MCqbp5J103B9MSdkiF38mq8DIKnsvYzXbB5rm79KPRKxMxUylyDLqBBGf9C9PnboWkImrAfgyH5JvkInPXb9jmegwOWMOsMtZENnJ8gzoVNnsDXFPlx4H19QB5aoUufNdvhALJOLybmTG0anZaTe6bsHZLaxH8r2rmYP3aHIrWE4DFPUmNr2tYHLkITCEv6BP9kcIcD5jEPsUZqnPp7UjLNiqsVJ5KauyAEmuBeW4OW9XGTS8y3JJCaofhqhMRkNcgzMp5Hu5rtkxUKTIaWLeHL3eFZ57CwODdXJFhLSvGS391EUEKB8Mb4JWBBt%2FC759aMMRGi23fTJuhE2Wt%2FhPZG0iYc90%2Fx9pSZfiv7qEtSgz5FHuZwBzdWR8rSW97sSnUBYik%2BS%2Bm%2BLl82FAKRZzYR3uLLSrwxnoFS4rs0tM83e1ml3npIDnACHlvhA%2Bm7zArNyk9hay1lWd%2BOSCQaicY%2FLSpNrrZV9k9a5V2WD5WoFvHufMnSx1d2iiZkIzymBMurABa34ZITuJIUQ45Tw60xY6V7038GctwUA%2Fgd4wyW1iM8TVm3REQzCCaCsgaaJtwik7MdjSFFI7W6o6%2BQz1%2BFtfG4CuP506VarOJBhilzTaMO3Y2r4GOqUB2Faoq1Kg3w8Omsmpo8%2Bi2OuUbypBQMfbSMCt9%2FuzhC3z1C5hLKIydAzzn7ND9flAdTKbeDQyIGvA7S8QMKHAGBMfmxphMB7MofNjApZCU5WukOV7g6IsgXRmcvouGu%2Fyj743J6C%2BCS82HAL89NffO5oQjAw%2BIQnbCy53LfIa40IKm1UJgmiepsKZvJnYAgSp%2BzbRAT29d4UupbkbVCfyf0VzTXjp&X-Amz-Signature=9d51c00fa32ea099fcd339886eb4ed8c3b430bfc0a69a43ee8d114f9eb369a24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
