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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WRD2IX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGspRUlOu9fKZjvJLmcGRJCuurMhlhemR7FfFinFP7FnAiEAkBidcjzaHiarWQrbn5yqP%2F%2Bp50303PDdelKQibJ2Fpsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBedy3nJ1HC0SHMwWyrcA4twU7RPRgoMAZCWEHquXqtizVpHbTxjIGRnXYMTVxWPD9rpJHRpamL%2B9Fbkk3WAsKQRQhHsOJY1JjpxBAFavTwnVLT52iJW8Hfte9bOjVV1h5y5VM5Vbx8vZaWr5lezgUEEIoM41QGln1bw9CZjzlFNfqt18%2Fg8jT5b%2BQMFLXpKhjUC37WCgoxokhq%2BMN6krTumDuw%2BgaMW%2B9MYmfwQRG9h%2FEsuK%2F7FNcn2fQq6v7r4mmuJFxqrw%2Fq1dUns%2FjYbVmraqOpYkqc9daLPa8Dra%2Fey5dKVO0wQxADYMOBBeVLGs4nbvEywNC3B00%2FwuvFM7QObNtuw6T0qFcMpdbkN6tsoDHCztYghNk4MhDO9AwZ%2BenlXctSRiArrDNTs01q4%2BBITaOzh2ori5HWUG%2FVxdSzDe5wfqMVd0L2ENBq5uHzCUDafoMXdvUt9Z4wMfYyXHP8tB5UibFXQ2zmbMc%2F6wCEg27k5ZIjb%2B3pCNwaKS1%2BfYHfRDpgncX3719bziQcMhS%2BpTYY6uDVd911hEb2fyyRGaO8c%2B%2ByjRvanjHp77n00cXwRVWDLqtVeulNYIKZ0UteVG4OJNIWdgh7e5Akm4Dg6L9%2B1Bqc8SDj9zxjADh8546zh1L07bGwRFH%2F4MIfG88QGOqUBBbmlO6CmrBrdDoKDTKmOGxfU8P8KXjW5vTm%2FawAlkZLkCiwIHYeRkDe2uHHtrE1M%2Fd4bXM6L20%2Bm3hMscKuxpdlH0H%2Fw5HfqRFdeY1W0ihW7MTIBvSCckNvRaFPYovRUVyFyfcmcewCqOW9ZO%2FGfKwtuTCeoBh1yIgBaijcDWK1jluOSvsfNggt%2FPssubxQHTwyqrK9M0giOWdeeE9BIcMwpvDyB&X-Amz-Signature=65f23a0f816f34fe24c0146eeb84bf7925fd26a1d17a35bbfdec4c3ee9548258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
