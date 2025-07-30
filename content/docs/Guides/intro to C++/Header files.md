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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMC5SHS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxkHMCI2h2nf2A9dA8yjBrxWi4HAD1tRiMfYyyzXSIFAiAtMt3WVe9m2Q9vLdMeG7%2FdlsW43ixCKC2MRKoZXCIE5iqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBk8C%2BD2M3yhuF7%2FKtwDwI%2Fo7J%2BXgS%2BYEXAGU9RZQ8C26iViM6C0GqggMvly00fSJi2KwZIk7X8MAHqjflX%2Bd2fv6I0cu06D9VW4KDNZWvgpqa1d4%2FjkbvOYz9TS9OPp%2F%2BcXFQRPRAUziDn17IrU7uE7dDih1Pg77%2FT4FVD3FNeM%2BhPx2I7YxvbSmh4iLlm6B6pQblhhL%2Ft7NFa30ecVPH8zqxFSivkksJeSvDaGfrsf1XOvXCvKhWHNcB%2FnYK8m464Fd95EvgOQCwx13XlThrDBT0s7kHTkKZMeF5YHv0VOFm437QC77CLApU0Qdn4Rdtn4hHTb%2BayFtzWG2g6YV6dZf4tWfJyu%2BIi8gIX1Ttt%2FoB%2BBSe5xzsv7UJCFEb6sw9QVPsZHb57cGzAKuFQNBPLjcc2JlCb6jYv6c9Qu7pEuJhqzDvJ2I2ZX03%2FNXMURzDIZPu54JA3%2Bfk4D1%2BQxxTmQgPFqkNItHsqjNs2WmYNFTQJBDDM%2F132XVNlxJCPiAc4a4EbakUol%2FN%2FThWxA0Jr43hH%2BlyBloGg9VlU1uZUyuWpg6ZgTwlN6XezCdiNXlN3Pyl179M%2BDBIf0FSB7TmkxXmI%2FjrGhpgt6Gt04plmWbqs0kOqe79L475lN9M2DVih%2BiowY8n%2BQcZEw6%2BipxAY6pgF8%2F2BE6EE54dCNP4oRZfB%2FLFynFjihdMu5kPu%2FojpmNyp1LCfWOkviSQeBv2oweRiBl7xUlMBFREo2HpZovRLwj6hxAxchXyct3l3D8S9tG1e3G%2Bh5%2Be55lV80um9C3JIi9CL7jGFNJbZwp%2BQioy1B9sYmuzC5MXOcphDchNxt1IbMU%2FWJS1Ew5vetES1E5wGOVRiwkxJrMwmu5nityt8HS%2B9q2wOd&X-Amz-Signature=5db4f97693f2170c073cd440499bd73e6c173c1075689972b4cf7b0dc9b90c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
