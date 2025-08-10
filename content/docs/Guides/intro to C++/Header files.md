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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23BTWT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc%2BNKTToMJuhIjAbZT4cUn%2B%2BumSpr9WZmBYco8W7EiSAiBaAxj3BafOzwRjEYx554hAB2N19EPRq92pYgiLqsH39CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFLpRUQkPIdDj6BlYKtwDXvOuLkXMV2Rv2s%2F5uxRqkP5O5CIHfAOr3A3wdcONIf7MS6EFJVppdCjwqmOPZx71Kw3Ru5HTaGmF30R%2FxQM2Q%2FbLkW3RV8CCxEuoKPXp28EehQOInCTTgPHND5XwIUm7PNtXNQTkEpMY5T1IQPfuReCoq4vAE9bCmD54EXZoO9o%2BRrDUDhjk%2FU96c18aVGIgnHFT%2BKIzqKL5t1L0UnvXG2qPSzB8R2kCGt5BX2PGRKNRrwJqRnSMbtBEBKTBmEYLCKnwlPa5HgmEWxYknymuoY8N47cGreoF2hNwpHe%2BhgERDZCrFPCPYp8Xse5n7ze49B%2FLxYW4pLIi99X9F5tc9QWoq8n4oFgAtExIl%2FeK2QReCIRVU%2B85G%2BBroG4J7Z1DxzeFCQazrAqHUX0UnmZWL42g97u72adfs7GXgE07iqn5pBXxRyC9pwLGxDf%2FTWCYb%2B4tKiYkZxAR8gygJkv4jO%2BMNgywMi5rp2RYEBmAe7r7meL%2BVj1QJhZAW7Kn6TsFaTf3tZmOJgIH%2Bbecke1iVGb31gNYusnvrmwAF9gtKNz6wEe1Jy4XzeJNyDaIKqxSYmAuiNiGkqZpWaYwcnkFT6kogtMyZBmVZhyLCoEn8y5v1mQXE0z7Saj7N68w4tXfxAY6pgGm3dR5%2F9doQQhtWf5otoIBIt%2BxO0P3tTUd0uqxnr0D0nJxtVPGocdYY6vi3%2F31RVHMVAaptS56BPD3fflkmETQlnfxwpXCCefp5%2FbYG5LdqB9Jj9B4l3lVLgdrKlAKyD%2B3Wy4nzytz1PozpZL78lRwfTwbpjkOPcQpie5Ww8Owgv3XWHvHWrQGAwAOH%2FPlYGCEd12IgOwLZnopr8ONz06FQZACL8mO&X-Amz-Signature=95da61112111e6818ee8d4f48f6cbc6a4683bc23ac47195b5abcb1c3f1434296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
