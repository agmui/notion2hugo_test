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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TU2XZ7E%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDVYFcXwa%2B3Ltnj%2B5%2BNZojbegHxR3N2Ng6C5O2DLY1gkQIhANDoffHsRPducpGIGewe8VXBo393AJ91BG0v46Ik61gvKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEhZVke8ygOdqs58kq3AMUdEO6U5%2FJ9EfqJ9t4nrcOTkFJcO1yjVuTOUIvXixR7k9oW9ga2Slj71osOyUlFZzKapqjXMg5Ukzvp2zbkJTg90qwT%2BwSmwyyg%2BiYSCVUD4WSQUIEVs%2BgI7x6jkILM3k2ZJDwgvBtHNzHCXwHPJTfeSPS4aYo4TaqowR7PPO%2FAN26ixieJZcGWm%2Fi%2FRzgDI6FiClr305%2BvOFfskfgufvEda5M2gvoYKi2xuFwVbjhApJhh9uw0wyN3vVyat%2FzuKMyzkyE4Ni71c1ime5bumlIZUlQXj6cSQYbCY3j%2BJMCTb9axK%2BHKteKtcopbHp7xUEhtDIQfoq%2Fj1BhNQHMRACZiKkqsNgTSsXxInv7V9%2Be6s4XYOFXCGMX5FAfr2201nfvy1wAhjRDglcJgADXQ1T7dy%2BBFzOV1d6MHCNR6zNczN4NNBrlmwKoCto4msTzAisrQCz3KEwd9%2BqiW4%2FgBc68132z9RK1GW86lhH2dgCN5LSf7Tz8AQVCdbc07jSyUlHE6xeHnyeCdGm1T%2FwgTVzqEmdaiSu9o8%2FxYmH4jRBToisRbct3cs9A9c1a8tzgw%2FAC0XYuuVAgQM4Fky9LxnL%2F3LI6ZWtdb2Ken70RsWfx4yvSQ7dl2YRncYYuCzCGsYa%2BBjqkASp8tyGrKE8%2B77Ch8sChRevEGNLYGPeIlE9l%2F5iQcenBKgTxAXh5dXzeBo031%2FPtCwvJnLkH2MPLLse2k%2FvUxjq1vBhHORzsKBehE53ES5fgZcVjMROyFTwONXEsRxkrXpxn6B8AOIQ0iAkfQRoks2EVk4clLChH%2F7TKaFZEmedVKvbKQel5KMH0tQM%2BNNZRzdPcG2tlVneSpth7vyHzvNQANu1K&X-Amz-Signature=e23c7ebfe38a4c67edc0b1230df7f7779920e9519d9508bcdfe934e6a59f7bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
