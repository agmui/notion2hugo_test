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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JGBK35U%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEr%2BBHG97TxeIARljl4FB16VbUcsckq5CK20WhkxUkJwIhAPxunJW%2B%2Fp8qUG7oDBFr4FcA79tYhAzpDHZjU8oSAfpiKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoxAzwv8lnrtnnCpUq3ANGiE2dqv6KctONgipYmQhvThe6OW4gLUsGX8xE%2Fny9NivKiztD4ZisHaodUIABahy432TSCNGpnXWSdn1ngb%2FTCAwqpAjQ0uYWgoYH7uRbhzPfWMdaYXL97YksWLJ%2Fi6klMMj1iEIUxd1KdYKt1Ixqt70q7YfU1Cwnv9V2L4AWEM%2FhkXzThiVrOC7Hw6hceSuRFgyhWyKsJ1G%2BOsst4fHnWkbYW7WJASC%2F29iDzuai5Xgh43A1qRKJdvaoMyPWtfRwAGvLvq1QhKa0ZsnSvBedHxQI4Ca0KNEOcZ2nx4E63f3BbspAgdHgv7qISAGdQJoTA72p2Xh%2B0txvcNrAekcxGAf%2FU%2FLWMdkaI1uk0wfPgIDLvytdRhyNFmGsH7XR3j0CjrdUQA1BLV10UTC0%2BnpXTyxjhBThCO5kfigbHSUvn2hSA7pzDvbBjsrtreBKQZ746EMZz1AYaeA4ULTooyiw0UrLYNM4pL3Lha0yaeoZi1UWPEU1hBpBdTCFsgNaUFeF7slmhrCsxe%2FUB3DKtLUNN9pw93eOGYDpKPKUHuTXBWTiVS1%2FIfTa9bSwQH8Sj8qHY9MqHvnhbhzTtg5I3eNtyG%2Bw1%2Fd8%2FepmY5s5m%2BCr3NMw%2B7yhX%2FRPEorA6jDI6ru%2FBjqkAUxWhxm2j4p0MetpQZY%2Br8VyebjRCiyvaOcl32csTS3FwHVqWfmc32MW9ITskeudLUV%2BdgSwjyBdJfRMsnjl%2BqnHtv6nkzwP93zKPPI1YlamVj8ICdn1aT0bGxmvqh0dVAzFI6t40FeZm85yMXDo%2BeEX1tu%2BlhRbZePQy47h7xyAvfGgxsxYcquGKGgx%2FTLmRrL%2FGcu%2FWChpl4YFV32W3goKLP%2Fv&X-Amz-Signature=b0ad46b9eea8557cb386f0b70bc4fa0107a174e9045b64dac047e34f748519ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
