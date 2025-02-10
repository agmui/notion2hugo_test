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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BRVFCU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVWh395qqFHZUh3LkSfpbIsGkaIjXssBuKrQZribkPFAiEA1ccNC%2BXrZmWMajbgL3yFRSyFIvFhpfh7r1AITAfpv9gqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2F4CI5NoqADzOq1qSrcA1HJtO2w%2BqVlR%2BkU2jgNr8MZkbUiyBKrtDm9Cobg8%2FGwIKoLuhLkiYX39v7SXJESX8MPZKDgcdAtZP0aASMBHQjQ2LKlr1TjgFVdEaPnP9EQ1WDPO%2FAVc1HJYMjL8ZO6aUWX2x2xO5o4ijuneUYznGR6klDaUeUVkNVRwkZuMWiKSAM7Ow%2BykJV2ZShSpnJb4lkOz87AygY5fB5NsZR7vP7Bn4n346okWZY0SVgz7bIY6Hwj3GeYHkpeLdUtryM6EzKG3L3DxSDppkWYCibwX%2FYC5IIwpnfYYMRpz1Ew5IuJLzF8jSAXzb2r6Iqd5bXqwEohjluL%2BsOY42VvIq5WIE%2FfmisZ%2BtFbyN8Ai1xTjJZucwwhsYB4wmGqWdDjP42ouGAhQAT%2BAfcmWJdhRiszWNMEPkC2gs9MMDXoVqtXCCzLEqv5p7ITZo7Pk6uoeYpgqnk9FOnHuK9Js2q%2F7S1rDWVLKPNvYxuLsT8evwsZYl7E%2F2fo%2FjLobGN5N472AwDXO1iFqP63OhOawIR%2FdWRxWUXwa5gIrND%2BwbfsF0NEjfb3B0eYMsXy28bAjCesFapLAHMOuGqlSTd%2FuJn%2F%2FnHhzXHvvY%2FkSWQZlvrYqzSBIDXFj9Jk%2Fh%2B6na2NKyTPMM2tp70GOqUBjP%2FG2f0j36Hpt%2Bdr2YRdM4XT16a06VP%2FPk5o7O4bXCEVbqlw7ldHnqEjeo13aUd7BxYdgkeliDEqV3dyyD4qzYdZoToaEJokiK6Tw9d2nqaos8SS2i5nhmhALVOb%2B0zImSurkNGkG8DS8nN%2Fmv1lyHcNVuUrVJK2%2F6YkoYYCh7d49TIZl412mcr7zju0ZjjI1S3PnpF5dkYuoygjHuT9Jhx3B5Qa&X-Amz-Signature=0f76f05df3d8fd3a5fc60664431a7514ddaec06a6788f4807500a5eaba94333d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
