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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPX3PHW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKqHsLSupsN8BSnJfW%2Bdc87Pr9GHI1Hp1ui%2F9GmLosAAiAWmhaa3JVcX3nqle%2F%2Fd2z%2FQaQf4j2EyWGsE5GuXneFPSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7KJawRSDuNlGOu8KtwDpzW1538nBhwSiObSenl2QX5P5kCbNgGZEN94gcqnSSLWqh4XcP3QVSoviB3NZJRJ1EhPV0TLaG%2BTNJhe%2F7kYQPRebsIyXvcOc4Mvfv%2BPcr80FPKN0rt3lrZtPdBO7Q7XEszZEWl8coPxWmI5OjgqpnSwGxbSUMMS%2FuOP%2Bgy%2FerSa2i9CtTGASLDaPnsB%2F7NrFPEQG8%2FDiyPEeIlUchNTr%2Fn8a88Iy12FB34adSXOom4rpf4e1g21sPT2k5FWzBZXhNAvvcnvAe7DjK8yEIJJ67fCXLt8%2BXfe2PQ2FAuKkOGk%2BpBqRmH5UUV5y9pCaIkrMG5DEoKkML6kPDoJp71D5%2FH308xQEHlagoYU1%2F6rwLHys7QuDYafOeBrkMXWK6o%2BvpvzoIjeELjAaOSMSljkz31L1os%2B0vfaOrOSOUFRuPiDwAnFbr2W1daPYQdAUuCNnxCzMJza%2B2CI4zoLjE6gLFOr1yin0yD2dnJv3UOD4QgpAhzdiIaMiyWnFqGvuU5sG4BGps4b0p5zqbT0%2FnbEIfpuUfQbyEtj1tbS8LXgaQqXq53pib%2F5u5qFIEfzNsuPGc4SIqzjRtSLbF3piL4EPacx9aWAuzhTz5D6jrwCWltA%2B0M8QYvNmNnY8Akw77qpxAY6pgFooaOg29xpuG7oPlAef1yabORu8bWaiZM%2FxXrPipNfgUObvPMydPT1pdes%2FUMbp0dpms1mMawB2FeKsgbFcpLQpdxpysg7JVX2F99HRuJ%2Bgp7HX8B%2FCHBLKIe9Upyp%2BQTNB2lpXQWSLELi4x32YxvtR9gDVI%2BnE%2FTu5B8YELuO4tz6nN47w%2FN6AyVz1w%2Bu3imIhMIDBNVevnuTSyG03%2BKAVN30pepx&X-Amz-Signature=186bab6c5bc2ec5e8083007371d698e789def9fe2715af73a1d1b04ac3eaa2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
