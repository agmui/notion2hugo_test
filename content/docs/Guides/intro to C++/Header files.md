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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6S7TUR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICfblPl5LTu7SuKwTEZmcrNc6jUXfx6lwzdnz3Awi6mNAiBzdF7T%2FfquxbsgOyOjhFBAjDq9TsSrLMvMupoiU8W3Tyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMaSo4k1WYRAGbozAcKtwDPlH5HwkOhrzmZrT3axjPflJRjmg7gzgQqGnGm8duqw7q9TL%2Fyt4aVraH7JiIev3E1zDIe03Gd2opn6UmuCMNbEeVvlZGm7ARlkO%2FQ0Lk9W7X%2BEUS7Olma9fhLJ2G4L2Ybmy7HxrTddfg79k71wKkUqTLI7JYJycal2kAZPrRc5q6bWV%2BLhiF6RIYgAa2gT8eED1YsHY48%2Brk44dNN1ABq8Hs5ywDCcfWAnVEUcTkPF%2F7CMb6dKZJV0RI5gJvM3fl%2F0sGESFlsxFk0BdZp2ObZ2jQGi8UYezpfsKpEfBozZ39uANXlSBTmNwwDyCEjPEf4wDdPI8P4SKVSmGrpartrrGCMbJVoJsMTLUmIFj76imhA6G0L1x16WXkUtwxI%2BjoKohxbaCKg79ntboNZ0Zj9Ajk9%2Bclev%2BMMLLnrg1YcTOMUBIDlP2yt3ko0AeI4Otbd5KCC0ufti8hcGJISPEyYLnZfNhfdpOwnSXwSUBRf5BO92C9lp2FV57toDqTJdnkV6jT81RA4OYlFCDXkRa7ZTuFhblPtUX%2BAsLHce6XElaVy9a7qSGVV8rTRX%2BYD3r1HNZiGUk2IfsUovrJpuBYkPw%2B9RNIviaov0N7%2BdPl6gxEDzp03opv5QpkjhkwlbHnvgY6pgEftprfZPISYeAkAsWxU1apOcYeq0R%2BhJ4wKiY6wqKL2wc7nZ3kb1zcAekgs4oGmfrvSiQh97AvN7aqCRrwnIKSq43vie75bFSzczpxAhliuomnSsYLMYbp9kUtQErcfnreHo7SjRZM9hA4aKGxbfMPSUNLWa1gLFVI0yGVCIDKLOyFjYIKagCseBT%2FiFhXfMfDtkCtxVQomzTzqcG4u8Viqn7kvluR&X-Amz-Signature=463fc96ed41199646c456fcf0ba18b599d55dc4c495154269970e63c15a45225&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
