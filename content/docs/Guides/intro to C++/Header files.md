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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEUR7YP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLkBkfueIBn6mj6JeQo6ZAC7NAyUXPiSPM1xIY5lVZOAiA9CQwPAyz9liyHH747wSr2hKcNZD7LsPNz4pQ0lcOGmCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y9WEoLHfbIVKM7CKtwDze%2F1s%2BBDPWmPdZAkHJ57VeS5Vwqug2vXHPuHvvlvdPHbxBtZyDselo7eSPms3xlUj1FPqb13abD7RoLcD5D8kTzO769dBlhe%2FO0V8BCGGvwLgxNXaPoe2icUKHrbSxOQO4Wt3FhV93%2BCA4lackc%2BbBbOjS3JRrimeT%2BKvr7yDHU32WXt88eVW5%2FbRZJtKs%2BDPFYTO2QTHUHZXA%2BA8S9JWwcEnZvjULvRcPnGHCo3BfTCxdsmKifIunKjrYxEyb4XC6r5wMfybFNS%2FVD1usiHsTDVq%2FWHcTp0iK8sYR6zAvkkxNAPluKXENjLBZ6bDugbpSv3OLBXtzDb4lrJqDuMrh384pWBP4vFUlhmVRDekCY1M8RjqIIncXLy77XYfO1GwStNuy%2BZ7XLOIkl4KCqoVv%2BdxGlrGHIvJo%2FX0Mb1x0ZmBW3xav1XLleM0zc%2Fq%2FMtBdaSd4%2FRfomklskNE3oIT%2Fbfr0KD8ybKT24ouWeWk4hHYHiIXvlFSOW3BTrkWcbFTPi5gtZJoWrMK8r%2BMtRZY408R0gXsx%2Fd1Cr2QzotIPN1LMu%2FX3HCVTQBJZeFsDI76nOg5iaLk9BnG3fykre4E3bwjccp4cI6f%2F4n%2Bzf1eUEy5psHTTlPHKqXzJAw7K3LwwY6pgG20CNxuLweWssRodc1vnRy9SaYXAwPKdsf8UrYLKuMJF6%2BG3CR2x83WN4x7%2Fmt3lvjTfwSUOMybFe8hijxdDt5k%2BKsjm%2BXg%2FqHZo5lluEypmSwZ%2BZuPYxP9wKmsPRd4cZ2Kj1BU0ftjnr5yRn57YQFTmReL80zSpiQBHi5qxbbWA5JAPQEJeGqgGC8gGUj86PL0LdHL6oe25qYBd74uZ9y6ZTHsnOx&X-Amz-Signature=8688c96781d2839b3673cb701e43beacf71291f84ec61ccd9a5f9da65eb00fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
