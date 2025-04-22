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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPSSOFG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCs0HSjR8Sd1czxqtqqU4Gm6M%2BFrEEg3f4j%2FOXBkszgtgIgGwOZdpaUxDGwmNqbPajPduJLVE6wuBvDu6lF%2FhRvRyoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjX9IDLOQIavDA1GyrcA8Cnk1rOX0sF%2B8SKLusBTz74ZtHka4wpTm8sigEMcR%2F8PWCWc6Yf8IGMljc3FDdSWbrpCIqid5r0gtUG6noUtpA1sz%2FDaPKxVf9wPzQOnX9Hk1zG%2BuurPSLKACblP%2FUzJgZWxCzsbTLi%2BTblYjBiYE4HF8%2FfgudAF5phDorvb7JZlmO9eKiRwUwb5Ve08ygYP1Ui5HpnHznmDeeNVzdPq3N%2FJop%2FzfS56yKOd1EGZE5bosFasBMvYDYqVu1eTOSRYmdOoYXvi7iGsuHHysjZ37rQUlWr3FBGRz%2BvW5sCIs2JKSTnNFLORlkh3V2xtSzl7T6tDlGtnFdtZ9yaPhXV16jA5ejSeck2xr5%2BG0Sp58smoDIfiza5dhdg7UXGTp5Y7Xy%2F7aTJDaWaOVfUhROY3aJt9GJuDBJgYnY2xhZ2NPmfKXllWEj997a%2FJK6Q%2BxZ%2Bf%2BgYU5XD%2BuM%2FmCyRdkjIQkqiJ1%2FyJDrAgPRdMRc%2BcOByoj0ySp5iImDZAdPipkiX6f%2BUmbtwrTY54160bMFBUzCNOZ8FJMuom0ilWZa4y6iqpHOMWeifZgYWpdb6fVW8%2FwxvWdJDGf9%2FTQM9sclQS0gIQoLcySxgk9BfsosQFNJGkd145CXArz%2BcQFdyMKykoMAGOqUB3uZtviqkjjdybSbU1EJSNPpdRk4VgAOGQDsqzgOW0go4A1xTlR6sI8YX8eBhViY1exjnn%2Bz8RZ8BaK4d8Bwh6JNVuTgYNx9UjmpLHjfTlzkaP5NA%2BZ6L%2F88sOLuBn7s8KXYhO4vESCxQF2CzFbP%2B8m4fKlcw7J48FbC84UNnvVhKp0%2Bu%2BYcj0oKgfi5egxB2pRq2OpFKjAoJpkMxSSkncVQ0VS0%2F&X-Amz-Signature=90fe02b4f78bb0bca52cd3acf11c7dd98173669d985e2fe99ed8dc7af58ec374&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
