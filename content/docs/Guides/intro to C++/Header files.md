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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWV6RF7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZT8UklAZmg3DeNhfT1hKUQiWe8D9%2BxDXua4%2BOVOad3AiEAv5mt28RRiIzLbdcHV8%2BQAMxnYCr49iii5ex0JWFaFuUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEV%2BIRBXaDj%2Bt%2FfHfyrcA%2FEpUEoYDYdtCeIl%2FAvEZV2fdCI%2FxrFXhlT5E1aGNvV606MA4CJO7%2BuTBvL9oiV2hPwWdgmEBp7wvmtpr%2B%2BmzH5j1g%2FVoyBjqAtS%2Fys%2BI%2FbUMDvWw1s%2Bk%2FHDPicbQ1fJt8YM8TqancQEmG74ZANb%2FRAQkcVAXbmQC33IPczTN%2B9Ql6SgS%2BoyXVlWrwgS4ehrXwvID0CwQdAAG69zl7ftULY2XYUKLqu%2BXrD6mjqwrDi%2FN48o5c1DJEwgQyx7oqDQ7y11X%2Bz%2B0z97t7DlfvpAJuooQi14IEUpOBIz0bzSBccD8oBdgfcIaxPyeH9K04MGR64EhqFFPho09h9ptQzoMHuLw6%2FxDKZ3JucjbGvvq0WWPdz5dv5i8cB1mNB%2BcpOOHLXOWb%2B1EfBgcNHY7u5Z9XbsyzNXzFzCPA2IeMqyouvD2uu3J1GuxQpA0a8j08ADE9%2F2L2niP83UA8Q2%2FLmYfUAqRo%2BnAKKIBmELTGcx0sLfEQVDcpZseH691rBQcJSgl134HB7y4KgrMRX1xAuRIJleNs4jHTNtpQAdbd%2B%2FIU%2BRw0WH9E12GZ1OIsr931b328jMi26CtkI1hD07GiJuRal8LxBwNB4mjbQK%2FkVbvHdXW8w3CTp%2FoCPzzJZmMP6L8b0GOqUBgf4rcpu1KOTpbMgJHQa9k8AE7OzRpIGyiaS1BYzsntUOIt%2BAETqmR64zmdGCwEcYa8P2%2Ba%2FTqcrQbE6XAupyed9quJnLlyxNYiVRUcYk54yguTRomQtDSUnRINswoKoEmARoBs%2BnJyp7dYRihMBJzty3XOlHDX%2BUXgh8hTv8NEdpWzX7pfIcRDFPtMbOu2PhI%2FUvgSC5vf7oK1tz%2B99gRZCpDVLs&X-Amz-Signature=df4b542b4eb9917c9327ef3d623c0b4d463381af7a8f879f935d0b68199563e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
