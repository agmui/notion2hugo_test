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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX36A4L6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPXDV1dLEnRwseqfl5Q1TffI4STQXVLNgINQrdGo8gBAiEA6z9tLcUtwHkLIPDn1NfBTJ5J4LNIG0w1W19asAyKWQYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEn1v4685LnSBKE5dCrcA46QHqtoHz1Uf4dtwAJbKX4PQgCn7OrHivpdyVKss6PKEvi8rBLUjPYR1Ji30I7bzsEwo4zdKNnfa%2BiyVtk7e%2Bnxa99fpyVxHMefUQ65vRf84pSEf8VYTb%2FAz69GY5qcYMBbhQt%2B2vRMBNDxBvKrB8s1lMMpPRAShNf9aMHDPOrwP12Y7fFR1iePhoWBivcQZcHQw0xyQp494S1LGI9Qksii6Fm%2FKuKAjHhhMRQf5wdexLrXIvXvD3j%2Bwm0V1lp4UxkL4FYbbjaUCi2RGkX38dK5OCTnXeKyO%2FypzeRQwukHBAlbe%2BLWfYR0XurmVquRVKLiEt%2BFW5tK8m9GqwbBDNO2fr7ERx%2FNfum%2BYTg6kpZrC2zgjs8Qlnp9ro8XIeSo1I950Ful%2FZk7bi142Yt1yjLC%2FgXVDyUGAEo%2B823L9Y20%2FJAwqcCVzPaIUzMdNVJoa2IXD3YjhlfaM1%2FrbGtr8tjWcNEyaGeQO86VIjS4X2pDFGO8fc26Abxtd3m1HSG%2FDq%2Felv387Tt1KaqVccEM90iQ38fsLw9ZX%2BcrbWLZhTFyCgSLZAUhEyZqkyLShHQizvOaKEfFCzsRCyBkgSPMVmT1ENryqrwa0rHehH2gxLJ9gYaYb%2F6b8Xdoyjp0MPOPpL0GOqUBPCGzDeCQaI2D5OFCrGWiowgnWM8%2FiSUpkDh5YbOWOZ8f1ssGfga4cnsa2YOHyDqOJvsStoIoj%2F6%2FiLXcOeHjUaCBESnkVvV%2FF8HbTcsMijOPtrKZ6JBhn7my9doXo5hkx%2FKmiDOvRGucVfFBxoQOP3xsT4pmB4vOR%2B9ssTE%2FbmsRDjQYQnSB%2B9iVtV5Or0FxrTQcE8TD8roLjo%2F1F7RnktLVGgjK&X-Amz-Signature=46b485b36e9a68af517a206e305b4f5970676de7cfbfa664c1bcfad8ddffb37d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
