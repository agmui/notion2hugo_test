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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6W2CP3N%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCvRmqGiWIt7CZJrnMqLXbW11kUCQSy2tmM1fXOXKLKrwIgCwXGI3xuuTfNef%2B81OZP5rhF%2BlnxMJNF05BFEt7ynSYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuhKjRyPWAIhMVYHSrcAx9knIzavrA6FUUrfaxPmCc1llLebgFChrfEm%2BtptnyzyUMGS1M663ZekiC7zgjfdIHNqdxljvhhukH6x3W7YZ26InfpV7aF3n319vY6MgEUEWuM%2FId8v5YocQxkOUymUe4ldfOZMn5V5DYdkaXSJ1a%2F3%2B2InkyXlpXYvNWndI4DENm3YwPSNAApZArM0MW%2BHZ2RrcERpu%2FPzoK59RKnEKBOp6y7lxUeZ%2F%2FlvGHmEM59%2FNVoi2sct7sk0mbDEAYj2IHhRpqyxFhHS5%2F35pRg8Izw%2BjnqZtsbic9PA6hUyE4jodIto3SHKUSEzbBStNkbE8lOnwVAm2zPZ77kPM41cR9PcXAF9seorEkYQDiT4vto41zgjPa2jabTaGBVNViuS%2FlhokJWN41MT%2F%2FIJgIcLDIAB5VhJNlv6LNE0zmd2fuoYA%2FvoqqZyVfzdf%2FKQ9ruCCxF%2Ff9zpmvXcDDJdli1mpwhlkZFC9lpi%2Bm8d1SP0IgraKV2dCX%2BvOyPBRHNR1eTALRRXMNE6yp8jNzJJk4ld8uY2nb9mkvkQSsGtLnSXNqfQaufCtLEFpqHFoE%2F%2BUncDzx5fb0uj6HwGuXPn5b%2BZmNctAxLY0wNZoMZuaYNq1DyZuXKnITa3jKtn4ixMMre18AGOqUBWhnQcZIkpsYWy3CQeejFp%2FIYJ0GsECD04Hiryz4dfbJjiG0zoNxv9b%2F%2FvalBcq7%2BYxdlC55Lg2gKMGCGldaEOdzj4QAPuOEZRNai9as2HaPCUO5XxdhVjFA%2FpkLSThXNyPLg5Ja%2FYsvN6KlDZmYfHSHlf9%2B9jNgNUNQbbfo%2FxA9hVMiarRrLEkbvS4Ln6RlYonkE91%2BZngh3InfHAuQ%2FrbBGVBkr&X-Amz-Signature=b3cef061447dc2c5aa75210c2b3b6dfcb96030ee2e0dc1268e1ae1fde5e7ddea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
