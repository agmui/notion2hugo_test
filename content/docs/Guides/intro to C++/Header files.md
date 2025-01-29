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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGKQGJ3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiIWVO6feTXZ5TkZE%2FNl6YSu0CVLB%2BB9EN8yzLXv03mAiEAz09kKAtn6c%2B3mOJC%2Ft%2FTXja2Uzm9MPv8ePoeZbYBA5kqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8ps4IPNuVUl23x7SrcA7yTeOfAsCLRJTQpdhq2IrODOaGFh4HurWjOvwTGS9tXMhhrxSmiLKWDSpwUO%2FqmGyShCXncN0gJhetVYGwt5J5PKWODuwr%2BnID87w8HI7PRU6QPJjwHmHWbgqgC7cRkEMLjVUYCX92DQTrJlLeeCLp61tbvfj%2FhhR6SHAXDbEl2mqR3ra8rvVab98Uqa%2Fq5%2BVN31zkfPzQvjKXhRNH3q5x0WQC5mqCJ%2BznN0s%2BbcFX6bCJHPxYRr7zOvCjRKWEoAmn6jtSD70w%2BPh2sRzTdDBHkH9%2B8rUK%2BJeAW%2B8BpS5wy65tjQX3y7rLF56%2Fnt1HwgehxOPQjKvuPafXeR4g%2BmeQQbg%2F%2BjqNUUQkCwTVKU429xaxK5Y0pwTPOFUC9tQuLw5%2Fv6V%2BPes5vWhyNQJQMhsIjiP16EGj0Wc10WeMQ%2FpumpDl2GV7P4JpmIvxk7tI3IFBnwYoQpdM7ztNEJMDeQ1ChCPJrwjBt0QIBAdVNjyelt9omF5BPxWwP2pNSki0CT%2FfsQfj%2FCHdxqTEJhYFU1uj8RFEmcvdKW8sZtN3jiVyNFDrJy7aips3KVBFtFfh%2F7FuNZnjr%2BZoiztNJj5PGuiEVxIDgYiz18E0q9GWjRfqoYsUQGjk%2BSI5YlFVtMJyx6LwGOqUBPntF%2Bx8BalAUfig91wZFaPZQrc%2FZs1hdvZe4PIvhfg2KWpNBaKRW%2BeyWe%2F%2BDvOnuiB0VIjW0qBFHiAo9fjZzdwv2o4eZX1VqV2gQY7gAyfolBwOfXqyLAy2iFJzzunRwHWv7LXZmksoVGdqlyGCrsZu0QdM6KdvZtgCKkXp0Au00XjD5bH1%2BXam2lbiDYeV1aJtEB9qmpDa7ZcDc6JkTvYS%2B%2FNhw&X-Amz-Signature=72efcf452824207c35719a34cd955effc4407a76dfe468bfae59e446b948cdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
