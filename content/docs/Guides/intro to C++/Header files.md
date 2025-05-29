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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZCOENS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZXlwZ10IJALpippDad5kr9tRrF8PRZaW7HA01Vc7rpwIgZb4X8PwVx0e0cGyYMu%2BgK7lFYAg7vMJcivpYHd3j5P4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVWUjk2Cv%2BQg3YjYircAxf4rid%2F43C9DulK8nLlUcDkOx%2Fdc%2BO%2FbQ4WXRIBnsQvYIIUhBy7GEMIFFHcLI9XqwYQRAfKM%2FZGx200QaKMbO2Bu7TuBDljwd0zda2MIY69mD8XwldRBun4v7fegH6jGWh8tOq%2FV%2B7RGAiYamJLpdkpjQ0bImcLQbEq7gjp4qTeZRdgRui1d%2FxsrASowxhFjJeAYRL6u4DkPWwRTtjpfMMs%2F2vGIitkBn%2FaJoOsVbAMrSK%2BZbtHwNlN8I8IJBP5ZXUA17isExtNDp3fDCTQm5RcNPT4TSEwDx1ow3uz7Hi4swp50Sv6j5VaqlnLIPjAIcozhXH37le30wIzayCs5Pzjbj5cBajKHfX%2BozMfljHv6w5uGFamfpXy1CbVPLvn79l5MpBYLXx2Vb2ry9LjOjZSzeg%2FuLdljmFzFNGKbAzci1CUhDMUNMLgETkF8Kia2uuwg5V7xCmsizCIkUMupfDeJ%2BxpBOEe1LcgqrqLtvAG0wa5Tg%2F8DoTFyxlBXLnneAfB5I0gHJG%2BA8Odqkt2AK14qgl7yAZuLPUcNEpBz3TBTDJAfWJ%2FXc%2BUL%2B9GQ6xP0hFjnK2GoupmduXdCefU2NkzWQFL4dBml5NnLyKLkfTR9eSpwpSZl%2FMqYosqMLmy48EGOqUBiW6UPfCf5cz8duSns5CzHjHf5ZmP6HzjMXeVsjtbS9kXS4wiGtGJqV53y7zWD%2FIVV4VRkh4tDxhlUOMhrOdYN1AW05C4OLivn9CcQf02DuKX3O0%2BaHGOjfn5iKk8c3aP%2BMwrrU2SGbx8sGMcSMie1Lu%2BECfMdFEgFy5y8VcTr9aAO89ODIYL5fF%2Bpc8O8zhTCYcq3vPa79q9Kfcd9KIZ8D6GqDoN&X-Amz-Signature=b48c15750df1cf29f285167fc0bb9b1153050bd97f5cbe2cc8da173bf8b8fda9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
