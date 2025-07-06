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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJ7ONVK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDyuKLpre0vK54P92BVWxRxsAjfSm8yC%2BPkjZkTrLx5IAiEA9dJiJuZFtSS5FYZWrYFcbO7W4shmqGTZzFCoxdoKo8cq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJ0LSwFtVNTn99C0AyrcA2nfODiqBAoC3glJYdG4B233UZei%2Flppmeu%2BJssthkP%2BFfNLqeUhIdK19%2Fgpx03ZOj3nJ38L8RltIYslICtyJsf4guriEyKIzLQ6xZIdPttIvFx8hkVbS5ZvIE9inMpJpXOQ6iVTTdRknyCRzH7JkxCUQi5zBpPApdQbpMGZrMhlSev4zZU%2Bj2EiD3f%2BUjZ%2B6ma5KHzw0othDlFxqVKM20rrcyABN%2FYwZND4sVxeuXfQ0CKAkd5V7LF5b4E8ELlhEmiclqTFMZeb2KE5Jd3B%2BTmu0klpV6tCPUzL%2FknpgcuGxTCVhf2H1FYfcNV9Pvz33k2djo%2BcHJUO8Jwf93le9MlqthleGWrqgSyf%2BKK4zmewfpQ4WDLZ8dS5CMdH6Qw3sjtUUKbbC%2B9v0wWC8Kpu%2FqQQrrQhQ9ds8jOJqjUGbrxhmpFhzSwTT57qP6rGLjLgR6vTHGBkZb0TSUbJkD5%2FgkXl7UbvlGwZH3ypJ43pkuYLPsbdbWcWKz9%2FB%2FVGNA9LgEFkqgiYqxRKwRoecrjf1xbexXKYK0%2F%2BiX%2FDAp%2F15J0zphk8HUCXO62c3GtflQOWiHutZ2vmvD8VUMGut7vzcLbbq%2FU75wUnbqP2LjkuAa8dlugdFGwfcOYjdMDnMIe0qMMGOqUBiBjHUPPc6TBgP6LkAOP%2FRmaL2TI1Nhq2HvXtU7spcAahCAMXfu%2BctuwSpvT4JGLnvVBV2ariKzAoVGYA4WdkRi3EbkJvzSXTcRnul4tWaBKlxzYf7K30b1Lp6G0B5pTHRIFjr2LXQKHVS601qRz2xHZZKe%2FpWlQDP6GxGNgHvPjp3laYQzcd%2FgXXeRPEiLgQxLthVlw5XN6Gv8NdPlH5G2%2FJFt55&X-Amz-Signature=8419e12469af96fd04c0b34231692f7692fd903dcc30181d52a473dbf396ccd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
