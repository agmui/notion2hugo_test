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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTAJAUBZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGxLJvm9v1eZKdheOpwDO6iO4KuAZ61kRf2pYngf033AiEAhIWby6jVGqNRL3nr9QjvtIqPrYR4lGSgOKAT1YU77DQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB%2FhrdRvOoYR20MDSrcA6oBlLXkTe8nCjI7uJBWHtZ8XyTu9n0AunhBOmdMFeC7ad%2FBc%2BML2XylYjFteiMObp6fo4Xwa7bC1mJCphW%2BN3PO0ufBLYQxSQrJgozFY25D2o637Z4WyayoMLAIHSfJuWdX2I7DsuC2deBd4zWfS0%2Bpm5JQ2FoEzZyEBf%2F6yh6cWoJGHcE4vzpiFNP%2B8TTEqnMisHeN88UhX2sCO9Hs2uji%2F7%2F0RgNCiGsaqYrrAoKCsJomoIG%2B5EFQvs%2FcWazjIHt5bmUfKG2%2F6lc92GQiNI5Y3NN301KHYktZQI2jyn6MBzU3ORQpg29%2BbJR%2B7wA8mX5N%2BJlqbBbm492jxlPdPXsCG5Gzh35ZtgwDCM09DOXR2jXgxUZtZ%2BKaFbr856x29UxXYtDe%2BYqW5FjOSaTA29og2xHGmVkdFawSVfstoh8nr8VZ1P02Ve6KSIptBhio%2BUEdFGfmdJhY19ByiUi7qAiQWP%2BVQ4IgBEpbcuJpn4wlwE4aTuqMhG1LXQcBBmda2IXxAyjvcgADzEX%2B0E1f6CeHfvdc4I2t0%2B0w5kvbS9JH0siaxMH4NVqhxZUDmrUMsfsZyzFUaKkeED4bRtDyYmpuf2F9rjp%2Fvor%2BuQpixZrdoJsFKLiq%2FCZ1SKEGMP%2FQ88MGOqUBWJn%2BZgZOCu%2B57JV5bBSMzX7jnrD3Z%2FNhCDW8JjAzbIQiRySEqC9%2B05U428QFN5LRdF6Y0sdBWCEMknQB%2BDARDJpBEqEOHoFIyf1p8GYkjWLvaWnQbBl7HX7hZ8OSN8rgNJEL7278GfOH2IAJz8zuUOmKRoSK1d8rOXfE2rWSS4kCP3H2htI1XEcnEECSoCTL%2Fj0j%2Bem%2Bu4dDTuDjox1184XvLCdK&X-Amz-Signature=41bf547b1edcfb2e270528184847ae1be6814a6b94c0d1c5927892075a018d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
