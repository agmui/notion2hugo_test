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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZAY6T56%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbSdsMoijqSwZE0XMQhr72GwwPYYhKUCiZlMgYJQDVcAiAGTCqQjQBgq%2Fc6Iw9h8xLw8Yzfi63w2Gvn7UuiA%2BLbNSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ5gDyTcVqu4UavTuKtwDIryBJxT9QjL1y0Q5wcTSUE32sdFZsRpctR97%2FVswJR%2Fu7pdSysQ3U579hVTmqMrPeZfNBKCL1%2BDf0fEn%2BGAljHxa6yy5GzUCsYsTLHi3u9FqpM4dEEQH%2FpuzPjEHEi6Ek2Umg3dPNZR%2Bpcl%2BlwNQj50T6AVN9Oq6bV8rFAK1NqGDINERphHdgCqTrx2Rq1mrdHe3lydCNnjNUfncvMa58L1Cs%2B1q3Kvd3P%2FGSX8x4tYhJbE5jbFkmgAnB4X%2Bph5R751uHKt6Xq2WPwzVsAjfep7a5P3JZQ%2FjKFoF%2BwjrYAOfcjPkxGv6SbFw03wmeybCRC%2B2qwlrOF%2FzjZTCg3i2EYI4CdrVbyWEs%2BUahpJpdXbid20VJJHOQZMhhjrAyZCDIfgO53uNdEWayiOOrUSByttlysKRJJFbtRyNFDCoaepE7R4LU9GTIuN0O2W6dm58K7Rv01OlOrUISUG0AFYBp27D%2B%2B02AWJSKY5Ln%2BXpOXzsKAYx1dfjzLQ0z1yeogLW6Kd4UQ9MZUcL0bO6GfaEFlsxvU51j5UYJnFMTNel1Ucg3O7GOXJuvZQ4NkbrzPWYmuC9ieDgp4yXdJQa%2FBabVy6060sv3LHqfJ9TdPWkMFha%2Bi0Sn9xbhMO80KgwpaGMwAY6pgEpIj%2FAnaA1r%2BKNk%2FcqHe%2BssCeUNHcSm9I8jmLjTES7DCHdLPdhviDbtnK0AYhpcDEcC80POyZCaR6q6JH3DDetNVopqF4Lt2%2B2AepdxoHkNvWs8sdSG6E%2Fj6Q2NgmJ51lajXaYKzFjM77AnvCanAT92SSLREwDqruTc4wVZqf%2BnID1txK7SBdxHXnCPOCh%2BjL0DtQ7T26ue190R3uZDqcuxi9JJ1Hx&X-Amz-Signature=a3719fab7e5ef67a0ea9653cd76e00996cde3b152202a43a5aa6ea6db758ee42&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
