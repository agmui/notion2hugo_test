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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3BHNMLA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCICwMOhboWtGuJuQogskZNvC3lrdq%2FaOsn6gbdU6psDJmAiBpLnPtKcZB6YyhFwum8jXfk3R6BJk6by9Zf3MAhAGjLCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPnZjAbd0P0ujCQ8oKtwDiLAaDTKC0CH1SGCDO0%2B4qt4JIJNe4NdE4tsiJBOok8dKVukl%2FcLTKBa%2FbNQ%2BPAegVPdqF5LP%2Fjg%2BCfc7o1NIehHEBBdyBR90rKLmHsaJTGWrbTYYwphTX6Rweayb2sx3Aw5EzJoOVMUpilB3ioDwa3RiKqMSuv8UcG5r53w6Kut%2BkxLQGaU0oPGM%2Bdtl4%2B4ftTK14YTr%2BpA%2FwZBTct77uBB2DRYbbByMtwAfFcp6hyj8Oj4MXt%2BtE0cOoHcbkDQ0HpRGTI4FVFzBm5VZpZ3bkTpGLZ145%2B%2F6a0xrlTROQL6%2BmDP0xu2QrbO5Qmg0dUUTpSY9E2HUCI99aJMVd19omj2HTcLxsFD0P0NoY38n2N%2FWh1OQ0bt2zJurHWuKj7t21InD7K2%2F5VtQoDLZgei8eVlQs2mSl6ci7IZJt97EwlxtpGweQxUxbW2zltRVhZEezVolymdOVwwfs6eiI%2FQKYaB76XgMRJc61%2FE8mFiPYqz2pvVHtdSNADXK%2Fo43tdGutEk3ZJJeNgrvnERWP5kRzIm2PxUK%2FkOBmQVGUkMIXR%2F2zlHBXvLRJG%2B%2FcF%2BWl13XBEhOSMtriLhQZwyRSh501VtXYSIWMsXobORaji014iFq6ik9%2Bb2tPpGN1AMwtNTfvwY6pgG6abad4yZ08m3gSnnvri%2FI69Vh%2BsPVA3ynMk27YSV1y7BpDEN%2BQwNKIkCxl824p8qw1tY%2FWZXcrytTdhFJkauBG0RIaefiAOoH06xD%2FxEEKvkjO8a%2B%2BVDWkI9PBAIIedTH%2BllwI%2BjPYpV7tfo4VXDnk7yLD9l%2BXFmZQKxTkDvZstX2%2BpXChL5wg7%2BMWDFkg3IJh4K%2B4JWE5kS9FCXJ8agsYsg%2B%2BTkt&X-Amz-Signature=4c3f5ebd1bedb1520b7110af22b0785defaa3c53b5735996b1fd381ed1d2dcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
