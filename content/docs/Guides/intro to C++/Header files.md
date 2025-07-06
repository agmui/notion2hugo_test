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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636F2Q7LU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID9AIzSOhP2j1M5viQ2FXnV4CcROChr7gGE9TNXRzlQeAiEApuKuANL7YSUeq9W4e7Q7dyrGl%2BSog4u7Ns%2F0QhD7qegq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP34gf9RxLktmpiAjCrcA8QJYihDaln5mh5CkANl6NKKT1%2BXJV2HXE9SBtcYP11tqrV3IHcxZrOkyYrc7wl79C6sX7y9vXEkPpXNR8JamJZyCB%2FkIvT9gX25cFaCousExMdy%2BARnr61%2BcbnRVWuXsDBJHbJz26udo%2BeOXHVj53Kh0KQjfKAORElHhtFJS7LaIsF6b1XpDAQnYOkgI53%2FusYiyHO%2B%2B16%2BiIXJjFxGePDCaBXlrcgurwrlos52ThPUCjUcnhGPwh7NjUq6f9zGQxS3Wa1fwQ6kyU9YTl%2BtXE5T2B2RdMKoBVdixI%2Fy2PkXvR4KqdIEGceJ9zz4wtrnodU%2B78Jl5O2R3sgQ7nbfNoGvzeBTlvOT%2BgnxPN6aW7GfkqdHsaKFztYTn0DuiLj6gmOUmOmYlOlhM%2FxYEsmUtBxtJk978i%2B2%2FxWCFjGsGt6E1nHPw0IDL%2F0pUoW9kmgkzPohR0SYpkvStaQX%2F%2Bv7TUhXCqVzYdMQA%2F7SdgzUBORAn0avGSLG2mbVl4cco6Liao7TcTcUoeoF1gELxxI5b6tPDM7N9liphM2j%2FTw5wK0gePAbJ9gB%2B2dP5hI%2BvnXkaLPo2KEwEJ0mIcxuhab3tY4sa99Tsj63%2B47tcYFaAFeaILmco54lRy03ZKatMPu6qMMGOqUBauMAiGvMJvTDYpKfD8cii1R0iGR%2B8FY7ooyZEQbbFOYhQrLwXUC%2BNkh1djkz0pUC%2BTPxzKNbkxslf2fFGPY%2B%2FqTh7aHmm746wbU7sxkgj1YPuybv%2F8h9tOfiNfZyQfpnPG98I%2BNKf%2FoYuDNOvNw8EqN%2FBlJIoNx0qFG7YRynWkQ1EAu94XyYTCX71ivLLKmLH0NXeAsOLD5XsbLar9QcbucJqNpy&X-Amz-Signature=9f7221c4d77361090ebb1f7741b516e76dd20fcd57e05233192baac6282cb4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
