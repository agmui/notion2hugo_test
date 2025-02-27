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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARZAUVI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD%2BpKOM5OmGKXJ3YO4gXtRijhBbbBhndwIYa2%2BSM%2BPzDgIhANdLtUJLtoUsBH5wQNcSKvk6BKX4Z8pKnY2JzTbYS7U0Kv8DCHQQABoMNjM3NDIzMTgzODA1IgxhYD2YZObGw5GZPUIq3AMAoKDcY%2B1wSstu%2FjVkke%2FwkpURcqB6P%2BRv1rkuJ6agc8U3CMqr7SPV4l6prorsySLBhb8NSU9MzGQoV1x81EfNluvFYQN6QFaKHGd%2By1FAUZFb4yiBGKpc9TVhcLkKgIiqnYxqkl875apoR%2BHi6YaXGqcy5FqSf%2F7%2FtBQwAz72UiXeekhjGqHIDa7a%2B3TZUw%2FcUoF3gEjH%2BusGsYuPplL%2F3hxz91kFCjCE2A0wJPYxkumMXqCQfvCL5Ba%2B6bwX6az3c34HlyLm6VmFuvFpJS3nHzWmEJeIHxCxrIk%2BflwumDSUNX%2BaDu1Z%2BPWeIKnPFK8RXKIeSFr5GVIJtN%2F993UdS8X99okH8Ua5tho4TtLrTVTURoZ%2BosbiFEHQHuemuVaVYDBpRV7u4pnM%2Ft5mmf%2BcsdiVBUJd%2Bqt0Zew0FWgEZIX4%2FyncLGMdJ%2BUJzlbAmJRr6iq5%2BwZ4KpfjljwWs432mRD2Aqx4DteUV7B%2F7wrQNe%2F%2FbENLZ31GYSgXpujvpgvtbJov1sKwCQA4pB2bb%2F%2BOgDporySJEK%2FY%2FOG%2BpV6KL2bfdj9oOhPSG%2FSZ8VoCAfNU6cDKh0%2F4r%2FeXoOJL3AWDzEdTpUS9FZi9V5GLGEnsrX%2Blt8%2FXh8KHvqKpazDskIG%2BBjqkAdn35PVIaUfG%2Bifq%2BMhkRq72Q4polrvRnSaBpZYen38lWUxWs3SwrIB2GjhPKHdOhDUywLmdodotjnLu10ZIfBwa2hvGm%2FjXcICJqmTpMPysW2b1FNlU%2BkMpWGQ23%2B5GFpqJ3Y1zzhgKFBEuKgc83bHkhSmcmUEx5Zj2jY1xSzziGoDmD6HAInuao0zcjcUpWvqsYvzih5xhOop4AbK3HXT1nj37&X-Amz-Signature=0eac3250ea65409e2b551f53924ee44b631b9b580d3e0d0b0eed1a005759cd45&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
