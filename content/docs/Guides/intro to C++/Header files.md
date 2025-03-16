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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVWATGU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4BdMpOK%2F5wKer14weSoDeG8xo2VKsdyl%2BUZQnI1YsoAiEApXUFWHC0ezbQtwgpr54uPrXTIP1Gq1uN3OndDQ56WxQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDEieDmFREud%2FSYDG8ircA3ayFrfg5kssVQk%2ByKe9vVrcTjO%2FG%2BbHaqqgz6AJpgij3UghdfjIT5ghguCZKjyiwGZgoeAen8kMuVlU0AIfaplH7OAXAgmXF1DO5AEki0ZHqtW3%2FNsTrg%2BbWI1UdaqOt9FVYp0WxqQR9Xh3z%2FcsPJGBn1mFXso2Sy%2Fr%2FpMNmdc34%2FbePhjnfphxZUwGlgL6TJ8KHF2zSdrETXL8Gk3S7MxXbIJAeUCUWCB5zk1CirVa%2FTSxi6vVZu0i3oqWC%2B4KUMNdx1hFu5yLHaM0tRyJKK%2FK4iipQljz2Q5TltuzTqK0SA4KH66P%2B3IAFIOh7TN9rm71nUwDYIYyVAWnnFPiFSDxV7dwn0fGcsFZxobTXocwvdZfX2YFqVmUFbVblgR15YULW0DuA1HIPqLQqbmI2eUn68%2FL9TkhkIXUnA95xFPN%2BAu3FvknwhWBTDZKZjhXbV5A4cHUU2Pu2VNxmyYesTxeYhCS6b3Pao2QkrpJb9Dss0DPcpgUWxx%2F2FosmWN%2FvbEADdSL6M2Rf0HSTdTXCOat4Ssbwiqhb2rNLzGoHTvdC854DhhficJcSo%2Bxl1uJ5b1AfWuTpi4FaIWNFdND9oQhrPB6IygX%2FMecVtWPlRpalxhRFZHrVhbwfWXuMIbc3L4GOqUB2mpRD0d7U7urWUciICRu9Y28bPwQsiPPoIfwxDy6NvIRDhJqNLBS%2BRYYXuh8OZXhfrCPi6s%2F8sjcgJmAxizgFCKqmi7a1z2%2FUH7vVBGesx%2FFHVipSsYBg46NtMEDD3TKorP3P3q11uiHwYaEUgAB%2FsEMBQ7%2Ftr52dvZb4SrjWLE%2BM8VBCogYNttdgcfM8qhGm5g8vZf0BPLs7jibw1nlCDmsdz50&X-Amz-Signature=3414bd9a4910a56421cdca006b9fbff29b0888983872f1c6b5fe837ae7173e20&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
