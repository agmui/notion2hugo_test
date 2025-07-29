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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TWCLIC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC5%2BhK2%2FSWCTOpmRGZJJ75SugQ26qAQa%2B9OuR6eVQXt2QIgQIo4IKq8r5fTApKN6M16TKaRFEq2TtjbdSIkUfYa3HMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTmopUVmje6hPvyiyrcAyFqE4ljpyQBBLF%2FM7KUj7rh6og7kKNgWrhJA1PHQok9JP4Kxe%2FeX%2FXd7bvjcX4bPgmNoiq8dCYjsbnDka3kodBZPc1HWQ790kq6LmKtj93qJuJgmOR1g7SWAaIxMNzPYz5S2Wo%2F9d2KYPUSl8145GXCXAOHLeZo1fl6o1kM1lkiVB%2FMS4Y1ododkbxcFPX1UIqlXned%2FRmnjl4bthPyJTgwA3D9Dzd%2Fwm16enAiPbRwsxNvGOdjzPk78oifr7kxRStHtIauh0KZga2KGnQw0K09k1a%2B3ptgJeFkUfkvdrInFp1ZZSRSYlUxGbbYrMlrP5W2EAQ9YcQp%2BVWaAnSWvYLlrJi23l6otz298IGu%2Bop4NiLEXjYs%2FkRMKvONmwcw4g6xxqqnV4NU4IYI7mgQmjefjgrN7eO7c79dNLdKFKdVCM4PTVuEe%2FvYj74idgN5kmM3tkdtkGNgZ12t1SI1ZCBB5WFOqRzgJpAdMqkeEYja4svyL4ArrCHrnapLg%2F90hQW5X7cvajK4%2F1jaLJpejwNayg3g8Pgvi%2BzUQ8VF%2BUpHN%2F9DdYZ2HgmqeXrYBpweLzeuV7o84aFTYyXJLZXbJqenk9%2ByfPzBrbTqfxjQLGP%2FobEAmReqITZF1%2B8TMOS0ocQGOqUBpFQL8ChLqPKDtV72ASoNPDICPuOcDjYsOyCLvUOlfqCmt98IQs4akeuXWr7tjUN9dnrbqqTdC%2BCrvFQZ2zxmC4Ti1A7X%2BMcDNY6a2LHiAPQMSQvoB6oiVes9w5PHvwudh5CihmqgXUp3DR0Kv5EnFF3ZjTUkxEGUBY6HB0bMbkjNzv1nGESpPHP8COfOMA2EfVgm5Zvb43kWhwajnER02w8nUdgN&X-Amz-Signature=8ab2332952ed8bcc33b056b9f5fc2a08af729e2c5442fc4afe68e5e4a5d03df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
