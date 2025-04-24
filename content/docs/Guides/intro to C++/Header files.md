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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AJJDRO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNL%2Ba2w8AzsYr0NppWC%2FchirJGxsJT8wMsDitXsqiAhAiEAsZs6JqC56BjqDMg4yjFDKuMrUgePMzdI0QoKX7p29Qkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDnHUftPql%2F5mszPsSrcA4tK4Z47C1eUYOWfYCdcHueiWT7ApJpIxlLvYztBRJipijJxz7J3Cr7%2FS3YaH9dOPaS6vbfJQ6NWio9tJUBnTn%2FT2aRAFwSekjbxwmQZDHPOi2E%2FEyurd6XLpXL9VSV4ewuSJAuUeb87H6UDPo%2B2r5sVrcH3pOMT5Kv18CGXBAiRyoSFcaUsO6rJHIOrHCPMpYwl2fk0EF3qbK%2Fe6Yz5efVVcyX3HYthQBKbMXDHdLUBgh6knHkah9UOsVU2ZSOaRZ9VgQCF0hN6befUo%2Ff9E7tjLM2tm4e1PLHsi11BCQ5jVCB7HN4%2FutUqx2hxvN1aVxKSsuoiCDKOACnZoUj7S6yS08dZ2CjTMjlMl4mQL2uHTx%2F5tpBhIK%2FzRyWPsgR%2FOgVSkl3P7YH60KWSBEtflQJzkVvPiitiJ6tq71mmEug3y7QuD4QducNpvWewY1%2F5K4FtRwgX2xVt9kcbTvY89g4uyPFzCXBYXCryCX9VWHygxcZkZ1a9aFQgMZGVbLnP8YoSUiQIZcvJxnlHn1cWhic2aztuIG3GJxbsEIKkT5m3Zw6wAuqHvX7uljwv2PpMPpKfvaceYbAbxJ8ZP52MmvvA%2FwciCivvceX%2BZ5a5zh0xer%2BbgmFXKC1Ibnr%2FMJ%2FxqcAGOqUBY2rzXfnkA3svXBZmOKEOXoeesMq02EOpCL1iub%2FTRJ%2FywD9t7y8I%2FROCGNc1mNH8O1q7eAcTgN9yYTOIkD9oLqJNVxuDO%2BwWrJPR0ZFXmHybzy0ctxVW7%2B57bI89VcwIhbKEW7%2Bbg7HER0%2BTxJkcrbq1MVd9Dg8uXXP8Su3hEGgWmkcd4TTXIpl%2BAcPMqRVkjHrs1nnKgnFT68xS74W1BAuheno9&X-Amz-Signature=044438eb36b5f4dd58317dd7bfbdbf86957f440ae20ed1494d8e404a11d3870e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
