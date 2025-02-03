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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV5ZZF24%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGNwC7oZY6d%2FP9V09l%2B%2F4%2FvjWPUxcqHTuRKUYoLn4S8EAiEA5vClDhZstbvwKB1BnWJbfdpH8bD7mk8kGsgBSzHNa3Eq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCEon7jm6hlZmtGr%2FircA0MFB6gTOyyNOGodICN52die5s4%2BchgBxcsgUy9mXHhgX99yB%2BQXUgaVEWkRNDTyd4WtoZWhMLA2bJ7kKc6gmo0wHLrePQr5iAwGyDpZ%2B3JkJJyFWSyEKzqMZMW0H7FPXgOAiZHHpPUd9KitAm2oxCk0e3tYqSi8Ejd0NzYmpn4g8wXbmmKbAJ6lEBXJYT1HaKlQhqYJwLNVteQR3m%2BW9SmNKXSyGgE9cAPryuE3DEofp0vJLgrk99RSbP7M3jcLD7Lk0HbK4k2fFLmPKAUQgLKV%2FvQBzssyldtwjTkC71rfCLCigTaB4nLNF8zCZURYiLOlDr4GazTNJSE%2Bt63Z3K4VwwbkdiQo0S04SkpQhg7MCa8WDNyVg7Dq0oejPA393pt1f2Is1XROMl8j19hvP7VQ7La7zaDGN01YNafNs%2FgKhNT7jEmOEkxorkBgQnZZ9sufBjUIowNIHa96Imx64w4%2B2EYy0RHV1rdHzJBxT9Fe5LslFPGI7o1rXZ0YSl5Bq5S%2BCIEryafDPJUf8LEOe5if5TxL8BzgWXDiwRV390hn8JUQsT83MQ89%2FLDu%2BfCEjoCRALoiK3YJKhueI9e90FX%2BgGBC40mT75wnPXb8oMjM2%2F5vUcbpf6Zd6BULML%2FMg70GOqUBNqdPXGIg%2F7MABvMDHGfvParCNUc6R0WTtFHS89wKJ7UD8pDRMGqgCKAzc2WNjcCd2Z4TWqPPFVzlGYWuX%2B9REj5cloYX5kRuXSsxSn4ZDClaKADkQfITarfmiMJex8K8Dr0YONttULXJk0ByQeGFf5%2BrR6fDkiXpPfj%2Fz%2F%2Bn5QicJjETjjo3v%2BfbmKWiEv%2F%2BTuIY66P59oCrL%2FEfxZKKSzE%2B1eEr&X-Amz-Signature=a3e37ba4de0b3d549cfffb08469a7f349fb49fd90cbd7c9cf3942c5b70d51fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
