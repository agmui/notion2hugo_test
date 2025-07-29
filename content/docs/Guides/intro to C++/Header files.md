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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HHHXUAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD46KOMWqEhkEt66wCUy0S%2BKUKEfQx10m9%2BUTg2o9QSlAIgHH1d7c9jlIDydkc2P%2Bdy1VqM6YuVflZD2yfZe5XrgfYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1dToKhwifJG59clSrcAychjiANgwr1FplDO1sMcYP%2BWpOn6Yc8jrOobFigeOM6b7aNxsLdv%2BhrxEhyXLNLmvZAxRF%2F1mAvl6cypqxrYqyG0K%2BTXM8rcu7sfAMFv97qR71SNglVOK4Nb8W67xRAa%2B4hp2B%2BbudLXZyh8Mpa9AyB5Jmc1DVgNjx7nocRqyKUHz2N05N7SM%2FaYXvIb1wWW6s5i3Ljwg3A04hmWceB2HvmzN6ohPKXEaITF91JBkCoorHAJ6ZNfO93rnY%2FmdFmZpATKI66slmA6Jyxkn1EHQbNJ%2B1sQp6SJy0N44N8sS6nNmEt6tfMRcrFBZpS8qTmETvVa3fZ7DSKzeGdHbWQHsnoRXoj1t9F5UGUNNQbGXBEH2L8ZUvJYrZuUuQZgNKtBkqf8nXz2LvfcpED03UYuyRpgThTe4FaJ1n9KrAyrs45%2FXCaWPBM6LAcp4krSgzvypD2WqP4SjkjjE%2FCFF2ll0kv15qrNoRnYsMOhFskBsUcHRplWAhvKY6Imj3Rime%2FN9%2BIIVBhqC%2BKvTtU5KKwiWvcXAMSPw%2Ft3jkammD8YRwBjjGpoT14Bz86tNJj7CmHWf98fp2Mzuf7E%2BtR7PHlj8kQSsX9O8%2FWq9CH7lKEdwcgODrjJfB3%2FPHhm569MLXNoMQGOqUBOrIhgeTK3FVzA8FLPCwzger3iPehNX6oKogFIIgKF76DX19VHUTJ5aVO5ydLpoVwlegBsQ4mITIt5g3f2KLvF45CU0EY%2F55wM26%2BZQspj%2BDGnEz1AW%2FJ246Tf%2BGijVq%2BpfKqFBCI9tsjVliDddZxJj%2FPON6Hcpn1TJDNL1zhEX9bZCAgFFG%2Fs4HNkrOpG9uT7LEb79OeGEMULKMpSNvZ4iTWe2Sd&X-Amz-Signature=6b4e5fc9acc0db3e4961b7908c55fdf42a4af7e4d2ae56905670c517baff4d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
