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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3X3VOJ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUHv0pbmCHqCXL%2BMbqtNL2ZneD8mzUiC8btd9sfSSapAiEAziVsYAm9XRoWxi1iSQhcElHE%2B14v9%2BeB351ClqFkqSoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpmLZBIR3ox7fe7DyrcA4c7Vth9nnO9HLVd2BeDKjv%2FvY8WkfFeTohO2o5nZdewF57kledI73f47xgLgvTD9pMhDZ1H%2B30CZi%2Br%2BFXOZTUB1ijVAYHrsXRWPi7hJiHnzqT0pIEBk3F1h%2FUgRk9IhWmoxo%2Bpk3BI8oU59M5rR4PQGfxUk%2BOAuohcFfC5hQLxQc0hrhcpybk0lf%2Br8PMQzHzdaqEXxXO9d%2FNqrxWRuj5PXAHmE6zthzOw%2BtyoeB3a%2B7PwRCTtd7SgEvHDbKFuWpFi1bVKpnmbaGkQrmJZOi86NGJxFoh5wEXQeZWkIiBN%2BJO8jkptk7j68I9PCAO7XVOoZcLDCX%2FKcUm%2Bhtkzc4uhmBj%2Bh19Oc%2FZ4LBD0zvivK1qtO4epR7gkWmY5p1dsXKoExwJykOgXcBvn6WWrdgEw4r%2BfyqkHGzwzusLEi3QBKJOItCneRWyKEtWJ3dx25wt8WrgZd%2BNERQixv%2F1yZp5aVVOtnyKowcW50mX%2BVdLJ9FYyeCfc6%2FCcqPoJ1TzzeqRGNDYOj%2F4i7Awb4Pq2g2Sn4049yjLz8569FH3pN1aWQQeWod0qFaa7Jn%2F1mto64sRzXa9Ql38z0wlb1tgRQVWKm4f%2FiqPPMPVNTAWlIBB8MKSaWNVE5aoenMadMLvZlL4GOqUBkejhNDLdhIzBH9HDiKQLh8Cq0ZWeTH2t349ohnbFqnKpB%2Blp4gjre1TCkU0dJofT8Pnf962uubzNhg%2BMhl0kihhwMVMCYgFF6zyNeL3oSHpLqNpl7cOCz922zJBsEZy42nHPvZIFXNudBcbnkOq7h7lfIaIijwPeRIC15wlEiG8x%2FqkRgFYACN3O9a2%2FCjCwH6x7YKqFnaPD3gknIJw0eUS0iJpK&X-Amz-Signature=293875a86b941f9e2f23e4985c05d723d70cf27844f34c7e348dad2e83a6c3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
