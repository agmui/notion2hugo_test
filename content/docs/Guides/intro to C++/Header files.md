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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFO3XUP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIEc0umEHpSsyqvC1EW6XfVHkgX6hQaG9ZOpHsUC5B84VAiEAiWwCdJQckC9WX9fYgjslsb3590Bi1%2BaUcKQDW8U%2FXUoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLFCQHKllGb%2FeEO4RyrcA4osTO5n00AVxQw7s3h9OeMEgidBAwshkKdLrONfi3i9BzZJSu221q721XY416TfdnllwrEgyrYVRnF6qd3Tsw54TjhTCRmWasLazcknImTjVg1OjwDdV10ZPMH8j%2FxhN0uh3VhS5kxhdMcdtCb%2FdXD%2Fh%2BCz2WwYYTY29KhLmdLDX8XMMTHB2wbLsTfC7KzieY0RFW5TGp1Jr9y1w6xsVKof3vHSyV9ssbjteT4EukyUkzQ55etb4C2Sv30%2FV%2FgNGp2quwtrm2wpXKUszeexx%2BVSfnVb30PkWr5a8lxjAy8cR6Jab%2BykmGCTqiFuB9BMOQSANWzoVBGVs8U94TbOt8irpfa92mkp2JlaDjVJnDkBah0ejGVEe%2FzLBH%2BNzcztJiC1MRHZSmAvs4jKLQTVoiW%2FL%2BxYgxdVpcYq5BGS4V5Eq4DUO5DUQXJsYL3Pxfg0IdwRRAhmttRqwNwG7xD%2BirjfoTBN%2Bcig%2BzPpRu%2BKheisj0ajp0x7xEcMsXSsjeXQ515uu3dnfVYicYD9YmQgJ9S2RKUmYMyFeXbwZGO6gkjDf6CFBIAA2T1OVi%2Fh059aHHKsyOWBdgtGlMCMh5EVwgvwPqzX7k9wPQVKqRieUyq3eEkThm9JLsAFE%2FznMOOvt74GOqUBK6OBqQy%2F%2B%2FHZQDIBMQ4A8nGff4t6o%2BzrwGvDWHvSEXaz%2BbzRk9AmuYZec%2FbAUPulXekyB%2FeDAXgr%2BZ19IlzBDYAM4OMqEchNeqAKMukSIYDTCkDxejIhTyZwCrboNhY7pcAr5ixS9DOe3rwBkLoRFrz7ApuYyYugEMNIjZEV4rCHhQE0dggi%2F7ANkioFu92dYDqyhEIU%2FyevlkV3TE1NwwkkEh2m&X-Amz-Signature=194f5db804dd0d74ce250cc64c7bd7106947e33d17032d9d5d3099100c030ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
