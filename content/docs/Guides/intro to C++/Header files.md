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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXXPME2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCzTamj56wozkJL%2B9Pca0YGQjL4vOUr0xhUkYRewinGJQIgUeaLnve3U7OEMd25HzPIjKsrwnDfLsX%2BOmtTPKOA80Aq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDKLhZ%2F88Kc7WtAquircAw3e8anA11Ctuh49RQehptxlXRsIMZA1ZDpTHX8c1xzyO%2FHQR%2B24b0%2BAjNBxRK2yFC94m13NJNyV2wZs8NPuLNlYayw3NrSxk9iauhTtVDTLFWWOzKOTQwuFdxVtnbBMOCxdwmcy25r2%2FKBtURFaDePEMmxpC3LAGpfyr58D7NwQ2Y7sE3M1RVYAy3YnlRpNGtw7uFA%2BjVJ5qU92lFZejRRfYlWXKHhD37ZRQlHkZjfjNT24oCG7%2FT4GjiPCaedgTBvKRDVlRScgoDtGPcG0czzd4Y9czaKZzpXKGBzkEfZrsX4kMKpmBcfQftImOFJQr0MkExIPLZ5xtIYTiKOvNfgNlhDvVvPBui%2B7r0VFBAek9JQYx2jTzwt4eac8ebAfQSX0KtdCla6N5j8%2BFVykNhRhCWopCK1UZT99frC%2B3zicciS4AcecRCZrdOmrHLQuV0fNaGdTR1bOJSJgfqBkrEoowNy%2FvZC7j3okxgRMgeCbgBf%2FzT9LaEX2nP8kPZ0fdqsQJ7kyaZNzzhcxYuSWZrBvFaamj2SA5Hvv%2FLshx1dt3JtusoipVeCiJwLGx67j9781OK%2B2S28Ksq3tKVUTCrjXSuf5dAx8CKyergQXGyMQe5qcYwrdx0Q1SClPMJ%2By08MGOqUBnaXw%2BMx9c6QiAC15hkz4vc3eSORTcvyVbX4Txjoj01MtDkxkDpi8u1znRCJb5jBum0ot1eILuWJp5SftQKZ9x5s0UlxOWGGdyVy%2FhgOu0colfsrc8Uc3W8y8IjfCfONfBPkbbsyjbxi0I0yjSoQgzk37tZ5gDKqvKi4e6vwmf2A%2BkahG3v1sky5dPtVa%2BKz24CPrfdXpr9Wfb6wvkuzToFdxQUKj&X-Amz-Signature=e7d272424817ad497ebfc721eda43a9d4dd477c779fd4d81b7a084d65f7d8047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
