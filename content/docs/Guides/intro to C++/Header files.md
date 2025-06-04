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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAHPJRIW%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIQDvpzT%2FnAcx60fwMv5aou%2Fuuo%2BvSoxxT7O2HSCUUUGu8AIfPctIKtJreMzyGoezeLFuDHKgzYXR3aCfhf1IWYGfFCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMcx7cAHPDFPmFh8dWKtwDGJrhq60%2FnNPtxOj%2FOJVZtPT96850yLAqWumpJWrJXnk6oBaZlSodQvhTDk6YKsI8ORJYKEDTRA64htAxzfX6iB34aOKI8u4kK8KiFJ98SvINwYG%2BunehCHVjtQk%2B6%2BxaKsnfUEgYV4Xt2MqQVwiXkunWLkho1lkffYQfkXvMRGPf736VEQfJqR4qEOUseWgQ%2Fz%2BIZZ3YCAiEJ6NpwCM6wy8AXKlPOGz8U%2BjU75LTPT643g4Jk4ouuUQg1NKjL5lQG9Zp%2FhV1Dr5xtMUCJtlGkNR1d0gl1j7LBJGRTvg%2BRQB9RdzpCRywqwe4s1c6TLykr36o0azelu4rhVn%2F%2BixzuT6CxOAtwO4DvQI2FI3lwIbV6Er%2BBtxStDL2PVOCAV4KQGNACAoknbvtpKxq3TnFyWs%2BF6ASOIyFa93zoyNEtMj1fom5RAicnJIBln2lsQ%2Fob0pLGodB56kzZL7ddD5vrkzousucuIoLMJZv8bomQp743WJL4tJaJ09P2Ji4dSjghcyZtStV1KKrxuTcmgoWj9lYilJqNx6Oi5vKyRE%2FkD0jcXbDZOci2ycMVxHdzMoP3gNqI02EPuThjA1mf7wfeg15sISVwkI%2FBIZ%2F%2F0h5499P6nS%2BjoHrEJ5KwAgwz96BwgY6pgGZ1Oj4li95zmYrVtVSj86L5OtQar4jdmwR8r8%2Bf40uemGrECWyj4wX0HYZ1DxU2tgEVpyt%2BykPcBtJJORfwdQPv8gXCyNG9Y98V7moFjtrqK9mLbhZryD6AtQQX0Ulbz7udZcUcaKW40sfxYmse22Oq9JBnOV42u4up%2F71IEqtXcXMmoTLJkh3uTtPqneehjhvlxQpPFLpCxim06XyTBYStPI2nXsd&X-Amz-Signature=093fcf7e78204f6a333e258e99d859c8d40e5793005d9a3ae22bad20d3b6ea25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
