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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAARI7G%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjGpM%2F0o1CAyzcVvhi%2F%2FJGn%2FGzQoBeZwgrTcO%2B%2FMv50QIhAPo49HFk7eDilvFOu%2FbWzYOxZjNmU1nL76zNJwPlUM8AKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUXTr5lEZs4xDWaOIq3ANTZbShCOWsIPkmtfaGPB8TGDs%2BCMBYMipDOweiF01%2FHVFGJV3a2Yo4cYxhpf51uWJ1%2Fa2It7IcYRxd35x9QwJJShUb4Hv6QIAkI0xcfL%2BHNXVnr727Rnn%2FL%2B%2B%2BPIMBAIrr%2BjC9prdyDHln9kWSSA5RcpS11gbhE1jq%2Ffml3kLex7i98rXQDGwo8T6BbI2SX10C5pvrV2%2BmLJpsbOLx6TaQiralFwQ0V3oQtuzJAAunNZflqEX0HwgbkY4wJEsr0hGGV%2Bh22uH5ZV%2BxjbhgwmXMqGBkqk1BYmBvhr%2FN7PrL1MZG%2Bx0lHqkbCbIJXskbPDe74RcHhGhtKbU9R16LEnfUQvrNWnULKXtk4q2xkBjP9xeDvnmgpgqGgbio%2B2NAZVL%2BUitgY4QFNZB3O7uZG9U8z6VvutvBRwXyX4mWkDSt%2Bql%2B3v51t9fdl84ZO0IxdkbOxzKfk7RPuv13Vl%2BTqHJB1VtvjP1i2VThTh9OFviT1ud%2BPnYWaweSiS5NCzqpwPhrWI9egH9jKaYvBUFp8GJ%2BtkHeOhm4ANzBbOj9%2B9hjEW6gtsdt6aSbh0BRfssBQ6cc981%2Bzxy1csa1bLpm2tutGZa78JoCIZ5Rr%2B04yWjEyRtcKV8wtWeMMlWgqDCj4v68BjqkARFq1gyGrBOT%2B1dR1xdSvwlkEJSd%2FNfZ2OWh6oQh9Rmq89CLg%2Bof%2B3scHl8qD6QjfcHdiAFi8Nh%2FjHM5gQbumMK%2FANZ7B91iPrObglVdyCFQZLgEUdm5Vn%2F2Okzo4Y%2BvfgDXb2EVwgDIb7X1uJML4pt8%2FcMwjRFPmBVj%2BruRsPPzPOkEQAnZzlehXm1eKw6MOoYklewo7%2BJ7KcqITowDp1NdWN4%2B&X-Amz-Signature=499c64069f284a3d3386dd87fcbff202492ba39c7b7e7fdf9c44f28736655f30&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
