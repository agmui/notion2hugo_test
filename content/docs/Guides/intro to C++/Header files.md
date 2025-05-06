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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRN7AI53%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4dgj4hX5pXLSmruMPdugc%2FatOFSflHvWepCr2dFoHrAiEA1VrUkVJ%2Bs4eWeobbk5%2BffV7FzzKbA8i9WJdxfbV%2F5Ssq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDI45px5Bo7GJQt%2FLRircA%2FmO%2BAK3lZz1nrDOXSBOdj%2BgovurlWNocVZMBLhsy4sL0qo6xiXJLZNrfn6sW%2FB6mjRsmdpH301GWowtMZnWeh6c3cZzUR5r7epR68qzcsGuEfPSNLpmuFu6TXGLqpgbIFHYerG%2BL4ROUENn5XMiF7pr7yGt1oBPBShGcg372xISoCTOg22vBBQEjsBlO5H5MOxiCjvTmFna%2Fk4WGeTndsN3BMxPPNgLhrzQ8Wo0iQSqioRJadxCHiR9PlfNFu2IaNKAjrZ5L4AwthlF1CTaVOtkduomDNhPnWgaEQGmg9zIwNTNL0ZI27o%2BBl%2FuTLBH5BJmY4HuBb1PfXVVmIpGY%2F0QIDUpMZzkVE0zZHzGixXV%2FulhKaAYj9KWma4f6i6FPwshUn%2Bm44LRzBkVDa4179DXRp3mWL%2BpgaFTFRQN0dJIsvg3biB9J67umFsHqVANdmEaPyNU2dCf8mvI3Q8oq2sMvksCX6zx9TIPdQi9jk8MCllZ7ebBz6g16t%2B4ZfSd%2BTR69BXIHKTdmeLV8rVrsiY3vrJLJF4vb%2BxGWBWYB9Jw1WXfwj0lw9cKh0kNfrXUAhvA7WBm5OHBD7JwS3dQnfBdvslmJgiAaucGWNbu8h%2BrwXi2%2BzJ1CANC%2BuC0MJa06cAGOqUBms4TwvRI4ZOjuHFZAtXdPAaP3p5V%2B%2Fo%2FHJ55SAuJ1wppqMqtN5iN3G99lrZBs9qgf%2FPzM%2FsZycJJDS1HIVCtzpDkqz7%2FEDp%2B1UlBZmfmfEkQ%2FOCyfppHYSKlvWA8gsGY3piESKy9G9FqpMFuTZwYSNVT4QQdOitV7C5DY84tgPeHrnPVfI17hACwxUJXcIvQr48yX6afizcZBMBbZXilqdtHStp0&X-Amz-Signature=e05ed8bccc2d9135d423632117d6ef4897b003132ae5a4b8aa5ebae2e06d1a96&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
