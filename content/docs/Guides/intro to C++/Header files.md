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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47HK3FR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIE4lTOGFyLf7Wl5RxQoBaoqFSPFrpYFKyQk5tUjLbGxuAiA1TLHXsX9GnqCvQcjU2zy6Lzox9NZhVOSg%2BvP07XlSrCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8R4L8tg6vWBH5eOKtwDcQuZu8cdl%2F0WPOavhVW4%2FOGQbqlm0I5u6iH%2Boopp1mx1E%2BfHejPA6qAz6JDA%2BftCFpqlY6utKAdQFjoZuftAEDFyokHxMi%2BoCKqjtycXEplwh4Uw%2Fc5ZL%2B1xyg7%2BHy0A0FKZiXXjzedyeBiChMDEiey%2BEcQeXxos1B3dxDyEki4Ny4jx7JqJkI1%2FFmmlp5ermgQxamRVjPXZKVqxKUajls%2B%2B3LvBxsw3fqou3%2BPM68QkCv6Tm0DK8KC3lXIOhrYifICrrfyoZuLISCSQt4O5IxvAGTCU%2F6vaAyNRdLooFxH6gUPswHTCdXh6EWvbgbnoQiAU3L%2B36mysICvcF4lnib%2FwhAZHARe64Wf7tb294G988DZ8dQqQBAlO1GzzWuwbHEDmeTXnEgmYE%2FGjPZVYzA18N2l3qJ6h8cLIaZiOmd5NnrsbeARFZdBOb6xen2n7HHhYYw%2Bsnm54AAF%2BfoXASuLLUav7jxYFrZSkv1vFJm6o%2FGGUK0X%2BGAGiyu69XZKtPS%2B8OrnaLOqm5Jt9hx%2BZJY1amtpvXm1q%2B5h3PB69%2BJdb7hrqbkq6Sq3G4V9e5a1XyL96DOTClKuLJSwMcS4o%2Bp3bSWS2Ns9t6J5K7YdFIp7AIgJjScywX8Qdy%2BUwm%2FvWvQY6pgEKAgm%2FNr39o%2FPpar3DK7dKqjLDSukHxgo0koVw6B1krn2Of9XFerrNthlY11zOrdSjmfg9qJIWbR9xMHYy6TDtoQ1WmOOu6yxfteK%2BXjlfiOpNeGed7twdinF4avu47bjFCaMCXvSXvnzKWwok6eCrrKKxk%2B3oQlW8chIoLlvGANRm51emXf1KDnseEgJj2hIxwjuf5GGgtmEpFR7uQAhPysqcoX1R&X-Amz-Signature=9d20aa34d838bfda751596c8258b76a0560b15307c6e873dacbcd5bbed077211&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
