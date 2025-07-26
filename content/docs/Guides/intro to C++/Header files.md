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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZLHRM4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDsrsGqvxBfzz2NnRs%2FCECdJUz%2B7jxQ0%2FINtTdmvMpM5wIgFKdxqXaIw4re%2BEhi642rCVwTLgu%2FOoyKnjXAfHnIsLYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDALv%2FRXWOA0P2unbCSrcA4cbNClHkpPUW9jxHjyI6QrPAhVkiiJBkMoRr03jGJInj1KTsFWGOZ%2F6jzSe9SExJ2bcc96H9inrulHqVW34mQFmp23uwOnF%2B4SMkeJ%2BwiDN04LZJ3m%2B4CQSDKPzpwsg9bm3GH7%2BrfNfrWRYZQV4R0AqcyZFgbLKqEvWZ9Ylc%2B8nWkB52aezwPnohOH98sq6NksUbtb7jBlTX8VACA2Ddn27vwpWyxoTQtXlxHOGeXX8XAZqhb48PpCAchJgt%2FqLBjTHeJCBn%2BdpbfijqhwwxfApWHEIRsuWZcWGwKlHAz7H0PNEXVVKkpf%2BnnEiCcSx4hU6NdYQDpwlIYj7EgB3sDtJBpoHG4%2Fzo2d26XgTUByVm6a1G0qNmM4PcqkwKIO%2BZQyNGp9wRIc0dNoTsek7uBFI7T6npClDeNmm964XoPguUPqvTtSap4K%2FjdR%2FlIiL9DXLnNC097cSbghNUDi%2FgcLodm2JbQuTc8Ukh4jlxg6lJBH8oduvAcf6G9j%2BH8ohk8ORClwnE8v%2BgPWQjiin%2FUMR4OktunvYq%2FTz%2Fb4tXk9FFOK8C6BnGwszKxx7v%2F2xu6QrQaXsxpi4%2Bu0gQvrGb33YsN%2FIi3eg7Ejl3o2KvTTQxxvq5%2FVP0kFJgUKJMK3Bk8QGOqUBYTK8Uc%2BeFKl2vyw8NkSB7NrCgGlvEcP1dRUaOFIt8MI2OoA7nAm8pQRzFzCPJFDGv7bXE5LzQDRgu4g%2FMOh%2Fg3%2FL4InAohj%2B1ZkNJO5TvJyhCu7gVvnSGeemSv%2Fb7K2EuoDA3I33xGUysrt74g4xRNRNQZQFsLlm%2FU%2BjWhurosLbfNlDYNq4s1NgELugE8LoweFTTI4LodOLSPKJoLWpA9oZXpuu&X-Amz-Signature=515d9a31ff9c90d27a11f044d3c165aa5955fe7ab5e4164519a3dfe26e8f3023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
