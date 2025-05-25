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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCHMUMB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEBKmfSLbPQnwO3W0t5nCZBmC2xgsNwLLwGJFIadAx7JAiAN8xDLrb0wmxqEgIZGa%2BycRRuYlCHnyvFDHWKhj2D66Cr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZjabx3U%2BsvfJS55VKtwD5Mlw44otw2FK%2B0%2B1l8SV0pGVVcDj9AhdBhacKNdcjv4GTJThritxKdTpn885LMfohTbU3uCk9uxe%2Bw9HFjnxvdAWwLSMkTHu7hdA8u49eqY2Y64CIDRh2trOtnZR7KN84o%2BovEd7EaQslGUQ0Qk157A6zMEZKeJXersJdT2%2BtzfeNYp4SO9OE19WVklx7LCVjmzP%2Fh7L%2FBaA6G7%2FNMEBWFwJR%2BrRJYsrmcScK1cMeA%2FoYFCrU4nsaFY4xMSR5WzBuTeN4Oi36r8cXJadFOBfLqtcOQlws1tEgaW71dt5yHUPvIca3DVTOY%2Be8B%2BdIpbTiM8HQGAhEvW038xBLk4X3Z%2BjoBeNXtnAmPnDf5Fgl1Fs7dEjWhlaNxyphqIlsQqp0nlq2OilbD7oFtPsv84%2BOuT9%2Fp2SCZDY9sg8BWx2nmWjUBljnRbY3rhjm1ZSyrarlRmO4muNVWdyAwrV99dcaOAWEkJdg%2BglHs9a7T3m6Nlg671VFHdRNToG35l%2BYxnCmPEenW8RlYQWD4g1TX8z2YweAuGEGNmSCNBwyvGwp34PopT%2BwZWpjRSD0mr9puMl71KOlULGFstp81id6RYhVNJwAZxtbL3%2FGG4YmfqXqCHRdGwePayLrFhT3mowytvLwQY6pgF3s8n0818p466xi%2FeRPBAvcgR4XEQOkTXxd%2Fqt5F8CyRnnpLzvilIgT0S6RVfATaQMrIwFXRSddPlMS46MCT2pd5jYoKZb5gNF7XwQU70ZLwJUFDUvwhY1yFUusjGUEacP%2FjUGLEBz0GlT3q5BCEJA%2BGpaO7Ml4wtt%2B1C2%2BLoX9xoABu45UxsjVz4Dv95XRxI5cJg9Hoqsxt1WiWzk3gDDQRouZo1z&X-Amz-Signature=cbaff290d48c1dc0dcb4ac250bad567be15965258a847ffd2f9b6d62fb183525&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
