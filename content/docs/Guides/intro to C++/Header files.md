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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466473USOW7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7jvBWcJ5vWrtv1dJjQKksc6eSwr8%2F0YCoNTemXZ5pVAIhAPoJV7wzw%2Bu5hz6e2%2FhNQeFtRq6a6MnAwG%2BuHG9Gobx7KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTikJ%2Fa2lHUm%2B5a%2FIq3APeFPdyObtwVU8f5XZc4V5i4DTErGpQ3Ni%2BE46PUkdvu6kLL%2B7fXWa91ueyRdMV2JQ4tjDUQPROoyNytAtcvFUTp5kB2iJLRW11YddiJ%2FZ%2FdlRFl0Fe7WdHPoP2RyYwUoY4EQbOeOKF10gmVNfC68fqnjeVcZaVncuZapOIj2Jf87eOQAppisrx0j5PMAO%2F7K49P%2BEAqt%2Bk5CW0S9BT8JxIRd%2FHHFgIQ136sLD05ysor1cqYz3GjkRD9T2ebvRifBF6wPLolbvPpn0IhhDC8nY3aGaoGNlUPVb0xyLR3pALMtIammNyjm0NVpu5E%2FMRttTX%2FuE%2BWE5cmYLrRvAQ62zbaDh1BLXxBPhc1m9ExyWQZDM%2ByPrJR7smAWWjlyEBv5RLqAGb%2FVY5sCx7trQx9d8MUhwUeyQLK%2BWNimLQkS9%2FJXKR%2BgejzsmxJokma6sX%2FH7hIUC6uPDZZbqOp67k5H88TXqwN7VCLQhL%2FBpOqoou87ynGoF1FvKvDIjCv8GHfPOHlEnMfYP57fWx1m3KYoy2Fu%2FUCI64lcp%2Fe91S5RD56awWnKMNS1X0dFmmYSBP0FHOYlJizksphWKpfEtpiY043%2F0374stTeEKMnFTcAzC4UpnWM2E0BuAPLVluDC138LABjqkAQ26L7CriQdFhcKULkjtAgW1yjPS5AV4DwRKt5I%2FZzxl988r%2BwsRufLUQzF%2FLRWH%2FuloM%2FK6puRy2keKX1Z1E9CKUR763sn4R%2B6zsPaN6NMUeoNBXpoAhduJfOZeuipXCKkDaktguLz41ggKj8sxp2akfYWjbE0BMz%2FYrTcGlEZOEPaBiGNoBYsJrIMEIR8Gkd938pRaLjdeWmw%2FUUQSZ4e7yn0m&X-Amz-Signature=eedd24bc719c02909d8a7f2672786197139032b044175c1333607dc25b378cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
