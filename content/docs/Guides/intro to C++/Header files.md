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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXCQLVT5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHhcqVr9BvttMLsKt8%2BU0tTQDQZ9a87N072IkCFXx4fQAiEA6%2FlFr9l2NordLhWD2UTwawDnUdMhuSUvWU2QhpOSAZgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNuxt5m3O%2BbdfDxnlCrcA47leKYntvaFoEydpNmQi8O1KRpiT3kpYAw9puYQWG7OIwAqFuIePn0nVKG7ealPeNNI5x8XXR85azkz6qLQeyjd8sngOQPKCYvYBc1qzjQWqJpdhZpnfFlGW15bfNFTc2GVi9erkE9CjMgUAiG5FNV3vJtr4GPb7rxCoaG9fqFi%2FT9OudeZWH%2Fn1P122rXJ%2FOD0cc3VOa5ZU8xAupA%2BcNad6dID064bs70BguRYwoH5FF1aw%2Bef03J9WjC1JVAu5SdXJ2Gy1T%2Fns1XtvjwH46tpupwegtR%2Fe8ggkQLNAhqbaSVPCoIhHuCzk24uGeTPFrfUHmbsLkAvig3Ti2jMaPkWsUJYMescY59RqU%2FdgpfinxLAjBoUrKkXaakaKSxAEKWgeD0YPydUCCG1%2F5qfoLIGcYBjXqZmHz8w2sFNI9hp0FNlH4jx9VzFjfFUzuQtIjT3hai02uJ3d0Y1KgxMwrfLZ6%2FjbPcfVj3kWbQ3uzfg8GX1TD5DVJL2IxYCjMx1b%2BQ0pjVVDBfr3VGtMqoKujcPIJZEFjhtXAGuQeU3ww8Dg8lPMR5gxFZksn%2FL6t7Ad3mcb4pw9X%2FdGMSOhf3DhuXfe96Wk9oQ8x71N2wZXh2tBgguccfQViykDZRGMJyX4MMGOqUB52Fb4GJB9Q8aqT%2Fwb2yPJlRYV2Z9F%2B3e7YVgGjQOWaf%2FEVYjXFOKmt%2BvP80luaPjPLB45SO1zPshuqyIQKXwvZbMTpv6b4iyVgvDXPgLrxu26AjFTgMAFPQIAUSpXC8hEUGFfnOCxdjhhiHwllyw%2F37Zk2FcTDdaPduN3jKqhT69J2l2fVKebjspkVQUyIcY%2BkS0BTgKuMoEXgjIZ6YTuyLZjVqi&X-Amz-Signature=22f964309c26ed3a3ac586078fd7c7c7e54cebbd2d6769dc71edeccfacfebfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
