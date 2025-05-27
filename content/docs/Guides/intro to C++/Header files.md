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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIZK4TZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjI7p0yWo%2FGsEbi3T%2BEAf7FCkzjT4LuoG6a9oWkJsxqAIgPhEuORFmaeOG7ZMxzeLeTO8SPc%2BXwMQbfYEGl4y8ilMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJxu3QWTjBlFc8CgPSrcA31yaCkz5RMugCUoQuyILfiZnGTX0h5vrUnTSfsBrgns7iJaZksyxXgRgD4GKGLYQI6UW4TdNT%2BZbfnS35mbs4BgoF5KDUgkhVRTZ9FilrJq8SeVt%2BhVa07vrVtyvKxHj8HtnFoJ9w9f60IHVvPMJc9JQTvyYMi%2BixAr%2B2cusJ%2FVkCG63FsHv1d3nruC%2FF%2FNxrMfp7Vfwa5%2FnzEY7M5G7EsGy51VH3HrFD8sMFXaDT9a4viFdftjtYSOgvORalta6JTwNMfEOyk4UamS%2FbsaB1ODcTcPFP9krZgwAIrbuA7eJqMoqBW3YSK6JgZx4Y1YNRFVw%2FSQQgvSCWddK3bu%2BGR2sh1jiX8euuQePc8DNOqAIhmgMUlTra0nqjVqPxVFrgZxxHilk6FekatEM2HsR6QlJy608Eu2V0Ed1yInO7LrwDuDvseEF%2FlsLmHDE81W9YQTBR1EO5cN%2FffttKK71aIExr%2FWzdyFd0s74NhFhqApMJ1UzwhYd3pSZJGT8eFVLh3OJ719xGqV9q2cY6hqeMg5o1iJ06wN9UYA3ezhedg%2B5usle%2Bh498icKOcUC%2BKHZGIrEYrAJrebw3%2FEPgpB8NgeePlmL6Z0x0z9hMfwxP4sdAV2%2FugzWX9yv7xFMO2W1MEGOqUByMEj8GZfooFo8BtR2yP0BVVp1pRaR%2FkC4tlx5DVtNI2IZw1Vv%2F%2BnjtqvYO5369P%2Fxh0kfmO6GW7D%2Bf30a7FDSrhR9RUGr2Uco3CwzIlFIYgl562fmbGKHflO1Wfcw1wc1OU2mrjqlD4%2FLCl65E%2BKrtKYw5qik05iUzw3mO4S5n49CmT%2Buk4ZH%2FhRzJZYlgWk1THkSLeIpHrQd3X5daUqLtuZO5qt&X-Amz-Signature=541995dfe7a37d70c5389f75692a7045be3607400ca8166ad0a52b1f290837b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
