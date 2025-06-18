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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKEAOAP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUn%2FDzdlwKh8xWrNN5P5%2BKGeJNLW7R%2BKYFswi5Fwp9%2BAiBA%2Fj223NubJq7FsYwRFiwTR2asHlz0bw5QQ4%2FXMa9nwyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvtDJHCScT%2BEQjEu5KtwDHBB8vDyULwXaXogELT9%2Buug%2FDD8wmi5eVoRGdaEp1UNaIiaEchq1M6Bw%2FT81CT7RPY8EniHt2GMTMrqWOaqgig260CfPLsBr0lW%2FYNL7pmv6FZvFmwdJVvOnii8iWqwHBNf8PpF2yspWKmkSE6AalSf8qxvSkhWcPNkDhbrQHZDA4Ny7KISSje256f2TZgYJmOE8%2BMQBRV%2BW0oPxBet2WlfSMnJaJv0MZ5C34AZv%2Fs%2BU1DYMbd46aBIRL2P3K0d0FfBIPHMsPNneDMcEUeFIROeFhqdOM7NJ9z2oQVJ2prcYi4Qs4biE9mo192Qo9Y6RiW1cHm%2FLeZKrx9fPd1%2Bg7Lg%2BVtnP5kQ93tpHS3FDodmOfPLA9igk1j48tR32AxZyCzBoHXD8Th083ddlCV3H6H%2FiyfpwezOB3Y7XuscGzGPz8hCCmlpci4emYEIdbUAueTybo1GqIRjYDKFj%2Fm0GnA57bcfiDl%2Bx6ukTR2P5PcBCuC0fnWbFzy1syOjCNsYY1%2BiQ0U0mNhBFhHmNSfAEFP7t7B2AqGuhAs%2B%2FZ5TtGyRaoexkSCnUvAOdD7pGPUy6Ew6%2FeyhWd2bxIlnBfSCc1nDu%2B4Wr94rG9eWqXt42HB0i6haChXIPfuwDEMYw5rbKwgY6pgF2Mw5izOzU6%2B0ITCM6HtKpR26%2FR%2B78sKMiDvfiI0prjUIOIdXXqVro0OlAF9FwnkMBz%2F6pIoJdAhryjHBDqnFqA9rGdWX8%2FRFYIw2%2BMziIVg4ah4xqCLFZ3BeilDeVk%2B2sN3TbRv576Z4sNhoRMbQ2ZPiNo0niMcygekNHK50tsU97VEW2DmRwIcDIoGPeN7U67TxOBrGPE3LlMuXkiC7IuXVqIEiA&X-Amz-Signature=b31a85377cf47ae7c03623b9d1418fc9af51e09ea3bf210c9fae68764d3eebd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
