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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OS4SA62%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlWZV9JcCzvfimUknYPQ2iMpCtuYPslebPwZPmpjfX9AiBlAE0PBfJU57GJr%2Ff1RWsG8k0Xavlt8d%2FFZC6IYbLy1yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHrFoz6GPJrbPvdT0KtwDI0SOvYxhb13TUQWCFIallBaRXQgAPRhSVmsbAsTEBhd10cKjpDxFZhwTs%2BLGUpj5U5i3a2ud4lcidIVTO9A9uMmDI6aYCAugC0%2BwxqF7D6YCkB%2Bz7u6UgLsF08%2FXlAP3FAxtql3qG7MuVTMHRsa%2FBBCjsZgHNnDG7ptf%2BkbLSd9FP%2FN%2FDzgDl8OUOsEN9idyhZV1ep9rH%2F%2BCTGsUyo4QYdLTBsFp%2FOZ%2F7OktYwasSocsWvYq1ocmpPsLFrNyz1wlECXGcQsd8giv5YpKR6ODRds%2FDCKp5R6e9WeD4O8M0GKmgV7LqBBAsmXlPJ%2F486i1hbKoRGgQ6lajnL7Vz0VeufwhvklZH5it60W1y9YlS3G8alP%2B8m7O2HdIWy3Yx995dsaPNDS4wvk9%2B0XT9YWuY5ZHd9IzDB6o50vYrJ95bb%2Bsou%2FM5Zo0p%2F2%2BPw%2Fwuc1RwHNUayau0z3fstnizF446u%2B3wSoqrdOzg4VM%2BS%2Fcprt1rowlCAxOGEgbFZAV4cu1zARDExq8LrF1AJqR0%2B3UkVZZHgeSImZJkrSg0E90zY7JdwQo3ZKrhQFoLmgSlzm%2FJ7%2Fxl3P3BVg0ndHTQzObKn2KazrTIKTJPIBmWublOWfgTSyjT2iiBTlhXhMwyoS8vwY6pgGheB8JkwTVNiK%2B%2BgOe%2FoHnar8bd%2FiW3Mwf1HpcTJkt%2BcF05Vh2r7zeBpbEe3Q42QORehMzyraMjeU9SJIoWfj2EuQsSsB0cWH8qlMdZJtltzUbdpXztkup%2FigIWYzZ0%2F9XceFw6Xple%2Bw66o5y9Quk7jJJxnJ3nGO92S1OBnbT%2F7YcIE4EUvHQ8JBVvHBtiGhL63YIERMREjd%2F8hdwXZ9X1%2BKMTrcz&X-Amz-Signature=fb3e6ed5e5ef02c1df990c44f7a80bdc8d20d14a3f9ffc376b75eb99a3922320&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
