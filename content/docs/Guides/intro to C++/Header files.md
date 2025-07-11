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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLG6YTU%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDsnGhyjMRBIphxv86nqNGs1kR8w%2Fjxha6Qxd3ew3PIAiBA0FIUYP%2FR2BtbHE6YSsQJaCM2Rlx7DfOqXe4sYyk7eiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeg03p6F2kPruUwOKtwD5Pbp1vfafTrodGfbd0V8spWFFF4molAm5cnblZK0KmwCYObttLzQgMcSP7oe5ZQY9Tcf%2BWXZFE8EMr%2FKReB1J%2FI%2BT3KGUudiLis8T9GvaAjnEgfLorGkv4OvSJz7VMGuRgQIaoukJs6uMueIKVjlzgYPurgpIRqOmh6INkCTCT9dmDlq1FylJllSAwX34bvU5Cr4gUkQqrpWqL4G1%2BYNA6ep%2FjXJmcpd4GEe2yZIuesIIpnNS8zTNG3X3RQLdchblZ2YP8YUpD%2Bh7f%2FfjK9QP9TJ7O%2BZGV06YhG%2FXNVDHhrFY1ZjsVbCOKSiWaH3jmEeSlECn7e7ySYkERujurS1ansRFaVJPQ28uyFfs1jQAjY57H5bEbr2JSCAvAQDhfcT8rJyev%2F3%2BjeDgVhL7%2FRrBXXGTuGjBno2%2BHPLghkwE%2BjLS7QeM%2Fvt6AHVErqXg%2F0SuYyQQj8HhvPapirfGiPR3bKXYDJuRXXfFPeUGe0YnE4USqDQBDlGscRgEl3jxDC4Np2f9DUKcQwn4AtzwDjJVAFN3VAcFiA3MdLy4hSW3w4r8oJp2cqc%2FRb%2F0N8TpxdnT2ZOYEdSTZd3c6SFDKKCU9LBWOU%2F1%2FVpCUoV3x9iXFVYDJw1ZRZ9Rwi3Zoww4tXFwwY6pgFYGHKa7BHNkj5UB99dhj7Nk3G4Z4imwoNex41jGrSNxZcNgTT1Q0OjmJQmodUL9nkfBDNylVlQy6PsUq678oQvL%2FSvaDQPyIj4OauwicAYaZwJvU7uZcq1GaHaH%2BGd6%2FUkWROVnHv33dgVAbolEHP0ALqWJT4Mn%2F135PHWMSQ15blDUvPv92yn%2BA2jTRI8zDslU6RcjccYh2hX6BIC9%2BsNjUyCx%2BSP&X-Amz-Signature=0570fd875d710369d6e2603b9ebf2fa401f641a2e1319fd7ee5a5c236512a6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
