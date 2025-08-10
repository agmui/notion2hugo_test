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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBDXQX5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICck%2FFmGexlnjQCQ%2F91G%2Bv4L8ZmyuB3i80XmfUjGrfO2AiAFZIVaB4HOK8HVs2emNyG1HIlKMcIJyvixfmCeXL1J1yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2ByWE9WnUF7%2BWsQKtwDqv0yXQoQswAjiD3N3Ejny0xuxLbLzf7tQZbBbECihyE1AanZxF%2BbryOZIanDTihRUkWYjrrl7Yrmegw9wVQh7DfcVOmvz8d%2FSw21VZiatoVDFUxWKC9t2ZlGrxJHxvGxN7K7%2Bikf2FpZqePHmD4lJlursyD51IIVD8z825fpFzwp%2Ff0leaJfSSYatyHEAUkMEBG6jb6yl5ZcczXL2CmgRQn72hJHjEc7zAV83MHRIh%2Bjkplf8%2FUh0eLNvAafWUQgDppL%2BTz3vOdKQP1WJRTJswWAK4j5tMWCMk%2B7xnasCIZvkBqhrQCNOtXyOR6c7kH43IswHxb5EWFDAm7m6mxEpNF5k910TECGfiWIf5p7butRBs1QhEvdCw5uyjaW5CUSU7MSAvdlI5bhTJ6fXCsqDDIAXFWFq7%2Fa4cyq2UnxS540Ua2akXrpvQuf2KLWPHH4wWYZonTUd2bcIxiFCcoGbqKiTSIgE%2F1eLI8L1pOdLNE2JXY3Xsu53dnJFf%2B23ORNwBoCsgnlaW1sg52dFh1owomeDl8zoSOuPKpUf2Tb%2F0O%2BgiMHdtQAPpWlQXckmo0wlTzzQTAO5JdwOi8cYuLk8IiBNeK4%2FiU18smPBm4cQJfQcU2xKJjIXNSJHQsw7fXgxAY6pgEmmhIZ2pW4k1DTJE7M6oykM0kNEunf9LeubXxgNX4%2FpALy6tRa4Hd6ccI3GVUdBOYbdRlp72Zz00d4tEyJx1syC%2BM7%2Bnh4u3Sapwk4euAebjEGWhCmlBF9MdY6dmi2pDcLB7gbBJEJiIdONskLoS%2BRyKY4wmTWdz3R1m994uaL6uJ4JqyrGW0jl7U8w1TEczSRW2pyyO3EML%2BRPyF3ENz%2FLsUvFsTW&X-Amz-Signature=feea2278289cc18ed797752e692398b3e30b864dd206334dd6f139103f469934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
