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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677K5XUPY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDghJqmX9iBMu3Unj3nnly9xXSmVQMjBosDpdtdnBFQiAiEA%2FolBb1Le7rhntS3ImgbDvHaYeqL6Ap2qEGByR9ouSvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDB4eEXAE9P5OygiXvCrcA8uMxXCiY8cOHu1QDddmtVoC3SBVF3K7v2YbfKlT1RVFmdfnHs6Fj2yJXmiv2LyNLRgqwaXEqXQufcjc5qXVlXK%2BPQMlqfFUyasIRPw%2F0%2Bqnuzgn1skzz4WuiAKgIov4H5N1BD04VfTqwAFZLwICOo7wCUC1Vdo5T9v9CHjK06kGBrpVQylS5%2BDTtnZhUR4PdPdTAkBvKBk40W1QszHU%2F1KJM63BMXxHeCi6fFLF2V4u3HerlKsZuzWu0fr2yh8BC48EISYpAB0DC%2FBt6WSJM8%2F4SaNANn%2FeMIybmJ1QFjWTw8wXBv15ONu6AixQ8kKQYqHL3p1yy2J5T2AUVoAAwoTymbzyIVQAWr3sfFMg4N00%2Bziv9cH9dR6K%2BEAn1QjYmOZNIK7TJ6HimRkxy3XdOYk6vJ8Q%2BFlyZRerF1f%2BkvZRTSz5uWXkmTI%2BqH%2BYeSMw%2BMPsUiO498C6uhea54HXaq5I03BaakIzT1BndHEow%2BpjHKhUTB4DSRLH7UF3G2OYUD8c8hvWua69cf5rNSsPtgdxdUn4oiQYZkeUfr%2BTyC4NWRFbca1sE%2BtOhhbkoyaEVgSbvCcw7sSLLBm4kdH9dsiNrQnyf9lTVIm3pl4zbX%2Ff5Lx%2Bp3YR6jovJ0IfMPqio8MGOqUB9XQVexa2g4iEIVIVhpkyKtNVo5iUYNCvsK5PKFq4r4TFqTMuZeCV8yCriGrnKZ1wVmhuBEdRBJqAVIWAKC%2FJbXSyxrlcIiVgU9MdMhW0sbubVp1TBxTNLn%2Fkl4Xn4BftqMKi1OXCmR7FATmlqhweZRY4NgcqQnvuKYAdB12dv5SK0DNWfgW90%2FLEttnpt3ImcWUKy%2BMhh5kEr3lHy%2BSXIIbLbvsA&X-Amz-Signature=7dcaef256765d56feb60b605ff515de4b6fba0f87eafed58c7e90bfd98d99544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
