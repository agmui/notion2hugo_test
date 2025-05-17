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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLB4UTES%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5w6m%2BPumh9M5M%2FQ3aqLYZcd5I9zrnVTH4BXBaX0QK0wIgIar9ZJj5rWJ4fH%2FmNRF6qM8k6gUyjyVSxfUqLJxO%2Fdsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO6ZUhts0VCeJETY%2FSrcAwDsK%2BAOOwYJtRmrqEY4ZsTAQByIipGTnfLO2r4JLwTJx3Dqu%2BcPnnydxP96kpcwTc1YG0POMjNvMEHZ4F401mBNNMuq7RAcwzJI2bDmUfXMvyXUKXnAyoa6Nwkf1isRO%2FpGvzh6I358nh6RnT2%2FgI%2FAc%2BCyAj2kQA8WR7ODjLAtA2Cd8%2B5TWYCAmfkZqPVbzFw0d5o6nkKoXxxEKeiK%2BZDA7i%2Bk3oo2drjz0hAV1a%2FPp3rKhw6LLOQcgAYvIHfblqedEsAkkBProZ16SMSEYY%2BvBs0zfSlvff9MRkABXde%2FOwjO8A17miV%2BmwKkIP3U8xt%2BQUMM5VTpuvAvnHzF4KAr3yA5SZjUEaxNbInTvoSCRwONMsg%2ByzSV6GGNN0d9PBe34gp4mM42h4Djct85rlkycqYIQP7ocndaux%2FZq37mX53P1F6ZJZqMzAT1vii2idkmrWpWQ%2FoV53WPU%2FTIetynkvj1EXOtWovtA2b%2F1cjOFOKho4dKVeINjlYitOMrqQRbnI1jSpRlRyDrtyDaKX8BngJcWzb7%2BmJQwM%2BbnKpzmBKrwUflNO4AOCdLbR2en26XuUML0xV6YxaOxN4OFjqzIr%2B9oLmh8hMvwLQJnxu5k9QqWwRbI%2F%2FIo3SGMJGRpMEGOqUBWE5uGRhQI9CUDcgC2InjKM4Mwn5%2Bs0ZznTS2%2FO7arDfIv%2BRhdys4DIhex6Di8qfGLHoYoiFf0wrPje7LVHu1XhQhgQwlJqMZuIKwx1PKLvVnRo%2FhlKuEgWbgszmixjpHJd5Utd%2BQsjdPob8PXR7WwNmhwPTlENdkITCwiaEFmXgJl5jbhgWwACWICpaAu1Y08u1%2Fw6KAbBDVgeQFj%2BLZ00ikajLq&X-Amz-Signature=240536cb56648359b8812f527fef3a3d73626a9086592b9d6a9708a0569addbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
