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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CLC45XJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCP1THKa7WKn6gs0R490zbUrFKD2sPOcdcQsWJHQpCsTgIhAICDDiEE01HVycuGD83zgajbWxbxXSMMtLg1gVW4pXz7KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwewGz0pkTfBg2kYiUq3ANggJDrDKLE%2FPhpl3m0oP6Rf17Fl%2By1olpTUbD1kTBGbRGT3xFiM0RLMaqtGKrm3VufxdLBPz%2FUMiFMQx%2FpjKbuUj6pxRCULucotsQno%2FI%2BwOAii%2FLXL5OC2L2%2FgiqCOzv3Ex6xs57ZSxIEflPPaLOKr0%2F444bbRBB1kMQpShAJe5YvSFJY3gsb8GpPVXNNbySSOQxCsI%2BpNssxi0nrQfReXR9WmGnIvJQZDkZ7HDa7YTvrXxh72vmEOpZ3mQrctEyH93y5xy93EiR4flzCR9aHBE2sPgB3PGA83EtcM%2BcfsFGs%2FoBvHvDxBdiPfQaMdSxvYbQfUjwCbOY8mcCoL7KhgX5k8fg13ITvlfBrAFqSxfJTrUICCD9EZ0F7%2BTr%2BJoFe1ooOMsB1UcsOe8pk%2Beb%2BsGe0k009ZvM7ToSZ9udIZpX8l53XqtWXAJsH3UOW0NLFEZRbzBKsVhc%2B6Xon7OVsV4cSxCalSAgyCIBZOfSUHiokGNbjuTQ5EAX%2ByunnED5RG0VwTEMgOoGzG6F05pJl8zHGtgsQ%2BfMYT4yE8nCyj5G4v46ubYK98WJbdPT%2FkzZbNKak4YWxw06k0Thng5fj04TCzG9AVsTWoHkmbrn9EfgbS29oaPMNlPwoPDDP3dy%2FBjqkAeCkaXtLr31PpEPZWRweaGhlnwY4SZ6SxmmR1K%2FePP2KrenUC5DlrxnI%2BrcQ0f2w1owLHzOfpux6bKaTxlO1FBndlMYrwdgwvIzndL331C0GTZz5G5XWely%2B%2BV2jMFwCs6mVcIkRlTb9LcaK%2B1bqHWE36s2aApoXkGkxMZnMeHehPfePfBENroGtcLsDwxp9fQKnQa6p1s2frJyU%2BSjV0ewK3%2F6U&X-Amz-Signature=edcbc14d337b4c68ef24845d4a9fe26f6f68f305a5baa7d8bedea0c15952ebe7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
