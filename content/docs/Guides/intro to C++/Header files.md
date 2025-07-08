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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHIWQFO%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC83SXvLLd1eMgg9Az9pCxyiagt6v5ko1WPdZ7tjk3C%2BAiBQemQqZi9Q%2FhFL744RhkIaPiHuW84Kj1HPZk8g%2BLUtZyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2KGy71GOtmpPPVLKtwD%2BjUQpVoRnCMHDuDdiPv1jizBIM%2BiVqaPJl8aFcJmukIMGJWESFXyFqJE9mcbA75IEOT918qJGyujM3jfmoJDYy0y6vDi2up8amFpIXDEltWMoJ%2FZtO%2FjSwuSyy3OlNixLYrZGy7%2BG8Is%2FsH0uU2pWHSHBWmnsJ5SFzq2xW6JN%2FVvj%2F2Iqi%2FL814lg2EqW9DxpS2RDzURct%2Bp3DlJFmLNm7%2FyWx2zzqV2y7u9uH%2Bydt%2FcztjhrG0Ihh7O%2FwnAJ%2F3ezTuUmD70Wkfyc%2BP3%2B1nnpLPSE%2BwWpb4Xvo2Qs9TnlCby6VBe5xP8C2QVyLxNHmiVTgQJZsVLXhQUY0qSzqtRN1V2xWV%2Bp19d89iFHn99gC2lJEduyRiPaa2Tk3bo8FnxTyOUXiR8IfX2v8ZR9DTeWtu8SrWFtDX2XSTthQKJMySbIBuCNSM3X9bU7l8TYF4En67q529geCiLsHlJLfNY8Q3dZ6YCm87bG105uftlSh%2BtzmyfNaOBpgd%2FEvSM32Gl7grtlsPA9bwBYgnXDhWtiMQ4Mq4MCadXtLE3E%2BbP61zIQnbuF%2B3Umi%2BGTnfeMn2FTHwIwf%2FBsROgH8nwT4axzvJWAT7v2cIdCz6iNkd1TbdxUmaUnw3ZYEhNU60wsq21wwY6pgF7TN1sq%2F6a6SUyZ7jsx3tKdOGYGpI%2B2bUbBd1WJAg6Q%2FMf%2FOqSkNc7XnXENaHf2XIu1xK5BwU6A5cjRsZA8iE6eQMSkMN%2BwFnc%2F7sWfqP1aWZCbpCh9xlGAdjvVah5STloYUQ7aUPiWsp8OAyG%2Fb93ul08lVEB%2F5%2FDNsX28QX5AU7FmPml8POA74IvuL%2ByrVnx12v327bHK0pi7Pix1rHtzSSR6eKl&X-Amz-Signature=1291208226d3d58497db06fe89e3923b28be891428b639ab306fb646e8d24558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
