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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466327OMKSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIHAMSDXytZ8WOQ9CiJN1B8OhGowLaKuR6WS6X6GAIDOzAiBatINeNtU0ElCfLoLKH0iTHlEBVfo4gnMGNM1G2ApoOir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMgE%2BcDGMZExP82Ch9KtwD4A9DLlrUG%2F2WNWRDP9qH9%2Biyo3qv%2BGTTyAr2K8yswduYIfh9aRYMFbuTTxsDs7UgGc60JxcIiaU0VQmmoGR7MtjgcuwIJ%2BsQTO5SGQ2Z3D9cKN47bwjqDAQdPn9TfrJTDJqbaY%2B7XLomUPEcxWJo4yo3CgAZYCE8NYfX0ufcw%2BYU24fWLTcyPLutuTXpqiNv9vZhtKas7d4cF5mSA74dWXB%2Fo5zRLIOIgkaMNZcgdft8N3%2FiuuwtbtVN2hPIzFeGnYGg0y1PKG1JRz39XiZLFQMW7YcfYYrnJ7gPwn3aL4aGvedEY2kpJ38oPTujebsnv69pGrbPyVoUkwUyVADXwFu3l%2BCe2cveRiRgQ6%2Fdvuhdj8717414HtM13QrazUQhqJouOiSOAqFPf99jW3iVMfhIBmpEvkLgPweBp4%2BJs7%2Fqi2fJ4NTNDVHABXQ9f4UTKuZDWSqRRo2I16V4rp9e87pzChi4AQ8vMjzsOMqIj8If4MH%2FR%2BwWwZlV4%2BiqoJ3LIJW7j9I%2BP4aXhCtHCRVyyoZSN6uYDq36pzpAZdt6ebYjORD3NvlOhLjdwzE6MAm0zhACG3hiqJbYvGB81y5gOzmeK0uoMX5asJtc%2BdcI86kIEVXnps5jJg0EH7swo43BxAY6pgFT%2Bk%2FIiJ104%2F5MH6gGeFrRONWoAXNq05blo8vABHFACZT6I3qHNvDJAcVWqBpU4VIwhadLVtTTETAjkREWzTiR3DM5Gw3p0lCVgDcJSc6Bn%2F0xKb7AyCJpdV8Y2xRDAtIrvwFZbKte5vrXWLYFXEoEiDsBehplWmqXnmgZXGpV5HVitM5zHXVWz0%2FlhDxU8uoLLJIp7nSBlglXlh0gQfSxlcez4%2Fvp&X-Amz-Signature=da6f755e138de67eb3aa379cdc798ca535fe21e23419461f39e6c3c2386773ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
