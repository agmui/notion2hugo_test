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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTHQG5V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KutJV092m0%2BFlQLW2XtKJfHzF%2BtWqXQJ%2FrBUejBLfAIhAKACn18HP0j31DoUhfyPM8lvd0o9%2BWuQUIwhdtSA53CUKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvXft%2Bsu89Kaw1Mpwq3ANtb2A17jVeQ8ELtCe5hgSte%2B8PqNsNYaAB0RqC7fWOgAvLhtEn%2FDvH5qTSNWjFLI9aHWcANH%2Fojc2N95VkXxLN4wFgQrdc98sBIg7HVPf5gU1wMO2bS%2FFDzN13WnTaWCzM78yV6%2FJm3HkxbdT2qcp3KoQuiG9R3SvMAUIqKkwT8LuXIHVd3qCpJOl7LhD0n64vN0EqWf2ag7oFmxFbyqTFBFLcfQ0DqDL1rPbgXq0RwyQKK%2Bdw2W4JmitCYpD420z3Kc%2Fmnav7A7cpqNZRFw%2F%2F7F8vc2QH1dGt3z7wHV0PeDN9gcGMOtuzw44YLVTzArW%2FgxlUXlg6fVmPqrcZp45anA%2FIk12S2ayveH6pt1t0OCMqsW5jVlPncw0BqNrgqJ65CVMtbT9S5ukKWlBMBK6xfPWx9e2hpN58oB4Bbmh1MaixvsVLKxM%2Fy33EKPBV7%2F7VlA7%2BZq2rywGG%2FRaCCv9EI3FfKrh9VpAbjTX9hu%2Fvmw5xW0pcMWopgWN43sxN3dFwLTCBHNeAqAgV34vwlT9tA3YQf73PksrTA1c0VuGMm7UCpCQHgcxekpklZneVPOaOeil%2BhU3XT0XcVjVj7ygEFXlf707LyBlfO5efkyG95%2BXzfG6t2ZX%2B17i55jCbu%2B3BBjqkAbmH44pkrpinX5w4Fkp3v50zDEYi90mLHXwKu%2BFp7vcNkRL8pJbQEOqFmNGNHyHdV0ZfleW%2BMLSxrxTov3smN84853thf6HsS4MYayV2lq35N%2BGT2ofccgyj9F2WYjLhF4Hlj2dEdVEnz3iH8jma%2FNai%2BpIEBtQUFK4d3tXWrXhaBDk%2BWizU3gXaa%2FHDR6eBClM6eWUUeMbLler91uawO916fm1c&X-Amz-Signature=09b66bf19197b73d003e9b6fe31e25e405242d12a5937137862ba9a3d6a9f457&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
