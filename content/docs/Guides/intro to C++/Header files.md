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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVYIBAL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIC6N7ZxrqZXfM0Kc6%2FOT%2FTze0Olh6mSR2jOOsokCylPOAiBmcaCW0588LvAqHiKy0Ks%2BWAlQes8HeHTAKeE7F%2FzH5SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNcjD2RCzd6Z0HRwKtwDxjMZAabiYv8ZyANse6I93a8oS7rA1xBoLT%2FBxuiyTuuIYBVGipc1rDIACPIxHaaS%2FNjffc%2FXPb6bqab0ejzQCzbEmvHz81CrFu7o4Y0Jfb7pds%2BZ2WUPvVbYnI96Z8FI1c9n4evphDH4mSjWzniup9z0%2B5VjXKpbylFfWaV6edpyIdpCC5v%2FcYHz7UOrOZlMURX%2BIEFXKm1zI5HC%2Bz9vKhKh%2BGshBBmoV6u4WlJS5JVTwyOXp1vSOUjFRFpMyLRRDQsD%2BbAh2oBuR6abmSROwEDiKGbSaqtpdKnhtD7%2FZjSODZhdIhXffuG3n5f4QNJAn%2FTy8RZ4ovPZDc4Ww7lzsyie8r4I%2F81z6KQHV0EQJMHc8YgU3TtHwRDNbpQVCXHbfGmZammzyEjxyKD%2B8oebhd4OVZDT%2FLFe2xUUN0%2FNHR%2B%2F5MB%2BapSoVwkLLuCQR9%2B7758a89nBzDeGd5Rq81F%2BsR3F%2BcJiZq254MVHuP2tmMKMfK32xXq7QV3r%2B%2BbUCBEhOlAroCDPHM%2Fte4HeAjMYss%2BfZ04TDphoRmxBXrjIHDmU1v%2Fe9mZ%2FfAlFSZMLVknrcY0KfQit6tkVSoDVnN1Qu3WbIn8DOjCs2FPPNsAgPmD9VEQKrxHELWkxHFIw4fravwY6pgFDPzBBwACZihrpVJGjtSlMCI2YwNfyPSG45bSIFQpiGjud7iVO1UCDt464hk2rwv4aDe53erP5BShq2cIsv%2FBiqcGyHNDSXZqLmIX5nxb%2FJHSKm2qHRGbzW9nbHjja%2B%2BQf%2BGkvqbGn6hG%2FdeX4PvXyDtJO4OurnJF9cUFW2ZSBWEyVQoBgtcrA8LF%2B9POJVaBhIa6vUF%2FlXmMfr6YzrYNV7T0uwhWt&X-Amz-Signature=84b7de1d71452f397eae36c16b1031b91ac85e345212f9f397db07043c51258e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
