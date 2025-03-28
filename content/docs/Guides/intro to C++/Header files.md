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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRXS6RWT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEUgpVQpwuuDnP2uCOYVYjdeckBVB4fJknM1ECZxHhsAiAEw0AL8R%2BrKIw4FUEOmo0lPx%2Bp4rzD6bwEhoH%2BoFkeIir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMgSsdWN026EaEtSf9KtwDIb4JROW2wWgVtnQLMzpg1sIsdcaqpOAdY3V1P904%2Bn1WVd5Hnp%2FICzhiKn%2FFRRUjoEyhDoQXPC%2FbICeomaeucir4iU66sV%2F9msSyLWRggJzy7YSduayZmSPLE584Xs5U2GzV9Qh38rXtFACABiv19CbRNa5SLqWOhDhb0h49tfGRXBAIzzYKZBxGOG6%2FtQ0dkudCGpf6dZN6JPNgUFF%2FrwhEw0CGsGCmC841R%2FJxX0gv6ZMo91xdWgSooUS1S7xjyZ4hI1vjDQ%2FkIYEQc9c3Ik645VXM8utuOWCitqzq9DMYw%2BJlo3nAI0z64gRotWNLPBbUFuBEDG5K7LPgUAHriNu705SjMrdXxdBeZZaUPWDOFfwybsLJive79ROZN%2BIeTGwvKVTdMuJN4f2o16mleNRhpzxpoct1godc7%2FwwpLni17n6OQPYbIjPXtdg8e%2Bq4%2F0IoIfkBHGwlNwjO%2BjIFY75rYbFsJBR7gXf5OPcZ6BFiekt4YkP9ybhuwwW4ePk0sXJc%2B0m3V5158YngyFM5EJXb6w6TQruSANYrDyC4lobCD8pvkIlQDaM5Ooh0%2FLkgzq8VxU5wxADy2%2F%2Bj7r6d4rT7mIQsInBUwiHWzR%2FBcyBP401Q3V9jise0KIwmNuZvwY6pgFsRGGdmGjUvtxk0yDiLMGTrx6pNeqy5zOy6Y65bn5LjejmFcpB%2Bv7KcllUv2Fwa%2BoGqjn%2Bu9K%2FtW%2Bb9nbWO7DVtmhyO7yRxqUDX%2BGc3kiaKXseSk%2F5cKV5nY6a6lqNBU9t6yoxb4r6KYJD%2BqTDjLyzpYGrrtOFx%2BcYNIhYfOUYBH0gboVXdf3m9KaY%2BIiB93PZSvjcNaYOO%2FmEfoaww682ZjT6WxpE&X-Amz-Signature=1f38cd390f434057343b20d4b845cdf7c622b860331cdf21137d3143e1c4985f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
