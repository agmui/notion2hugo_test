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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2Q72AQ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGiBzRMwMnoBxEQbfqB4XDLhDbTu66NDxDz2x0IMNcDHAiAj8NtHlS8MSUVb38z6PNmZoMxxbQLqFeseM%2FEZyFeP8Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6UFbQXaAoyb2lSaKKtwDnIoWCR%2BbSMavITIFRbL4K7xyIsILTaM36xiQUIdAVy37QCz58C7Y1sk9vGj35I%2FreBgEJLAxWBiOYLMBJBIIydpFH3IS%2Fu81STs%2FOwPhzCcb%2Bu0hYfPjrgCTibdkQP7h9sHuIFRIVXa7Tj6c6WYRir3l5PvPpq2UaFWX8vI2zyYOoc8AazqybFmnITaAkF1NpiaaH1ZM7QOeKbZNeronzKM147as%2FslXHDVyMuxXvXFsuKr4IRuXtiz812CWg55X0SFOmnNkvi4QWNGmTx3Kr0Z2e7YOQoerCZyQtKqles%2FxDi85x608%2F3iwC%2FIfE8ynFDYQsxfEZkxEeMQJH%2BObwCgBj7rpZd5Y%2B76hMM1YG4T9Q%2Bj%2B56JDRGaWXSKbUw8U1HwcSFEf7QAxU5kLkRk7UBlA31yipP9aTUHMFVmdW1Ie6B35BGyik262ryal%2BQI6MXExtoYmntXvLp%2FAB%2BEm%2F83WCdOiBibw1e6U%2FlLLzVeTJJ05aRCJIaJTdv0pAemW%2FKo4ty8T0dX5wlYUjKFSMtawBvIQjI1%2FSU5XNu6H%2Fr6X3mHzXXcDAlFnU3zI2elqx04rDcdrZV7sOOz2fivphPkw6jeS%2FMSlKRzL6GrSYYj5gQmpIWIUwhX%2BXsQwyJ31wgY6pgFsLztH3RVIwulVf4ewVSIhJhc7lf0qLVjwDxjmgKwKU2%2FhcPJhGVv0wOa7pX6ZBdsKv1tndYW3krYh%2BCbo2ygM1qwELLv1ATMYwGCQ6eieB%2BLuZwFWoWHmNLksP5KfkMdtvhYs%2Bo9%2F5zzf9ccBAeXb%2BV%2F8lC3WbF5i7z4IwulM5swk23SL138KX%2BNkoi0Cso1MtQmobHvKtsAE559fsg9saKirLcyq&X-Amz-Signature=aee7aebc8bfa845e77281e64b2592c77aa729783611356aceb2ebe70e1c1ed06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
