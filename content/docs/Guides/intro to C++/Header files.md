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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3665XME%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDefe45hBDJfRJECgBX8OuwFTTFpr6uWSOuxGjS%2Bybz2gIgZf5xAqEFG3knTsWxSFFyljBJyyHdwSj3cSNfSxc204Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDM7sYEjxRQvrR01UGircA%2BNnHwOCIs9vhnfwnYzdyuJqbgkLtPG4Iubg4iT3bitcLzYMGScvI%2BG80JEFo%2FQ8D%2B6haK1jnXNQ1Aqu6ozjuRsyQGl5IvoZyJWYoOliBTnPbF9jFunwecMil5Ua66GXJ9OWoqge5YgORjW7iHDgtPMGgDZPiwMmXESHPZ0Ya0EL%2BBjF7SgqaU1drNDWK3ZW65e5r0TvVFADV7GTjYqquqqCfx3ZBNnX49aiUf2MXC5%2FWShTLjggaCZ8WaMDQGE1DNvyBZ88pMwXxpvsDC5LA4RFIMa0A8Lnv0hiEkVZFCi8Dz5DbGckzC6UEkseo%2BU0rSuVZNrxJOaoD6p5qMCFtzfhXxd4AoJab%2BFEAgMM0GodLODK1e1a8dh6Xl6xRrn%2FCos%2FdtgQwktouAriWwx1c34cy81Uk3H6CLogEWn3egeIZr5zNs6DFpU%2BpDxjuHWz2d6%2BhfhN5%2BDlev7kDfq6XiXaKo5moDf6EKFWWmrYdTqZcH9wxEBDIX50CDjc0fxBkuXv%2BwIDlnkXPD%2BTDbsd5CtwilEpKGbGa%2Fzn1Sgjhdxu7E8UCCijGKHQxx3PxFcD1mN9KlcAQiMTpule8snrTqoZmg06BR90qz9Lyl3aW42LSoDfRYb0K8gePC2yMOjuxMIGOqUBLMT2p29A%2FsPgQDWDbrgWRadbDKOPxhj64qgx0V06lEFJbXBjGjWoeLjKwB%2FsmHXnFShXSJDW9Cl9aBRXQRbcH0dgUkqdQQsbq62%2BO0Bn3KX0%2FS0lqzwRvigiXRei520l57uqFy6Y8KKjbNU89VTT7mkTLBLbGsO7UiYLSOm3usfRk6TKdTF%2Brzue7e2Xkcwnv5UQiI1dEzj5mG3N1Y%2Bh7AnVy%2FgQ&X-Amz-Signature=83430122ed74d63f4a56db61911cf13a9b4def0e13a19bd884ce2bb3267dd151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
