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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LV3HGB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7ybtsNH8392S33QdyLkqPuSpvqbfJFar4MpQiL47dlAIgIv%2Fl0VNL739dmANIOTBYzMGBnibiNjqszFHN4RVRAkEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHD5RcuOvvTcLvw1SCrcAygTeNo0z9k%2FoMIgaVY1FBieer1F38aXWNvk3C0VUp%2BVj69awTVcL6264tuhEtDnzOwtIEJJ7BKizc5l8lNsY3T3vqBzT%2FgOMAdzubYKOGCOljhfeebTtS%2BaoOU3FttM7nK28voDgLD%2F1TH%2Brv5q2FiRGOewTTazxpW%2Fav56d88Lui%2BE2M%2BoFUL4LvyR7UZBHiKe96E%2F7Pt8XkVQ1t1WqeX0oElca9Z6WZfQXLh6Sfctoucu7F4VjUh8IZD68HlTFwqsiBkCb0mtWYTCmApRWpUj5EhPY2lNMcqcZF2E7BgHm6Fhzv4y%2FMPwqM4%2BLn1iXYhIRNRTfT5xP5zBHqcg%2BiTxsPAWhXL1pPocXKeLuqN80XhCX3UPYv%2BWbojl5424xVgAiXuyU7aUNOMK0D55krN35Pfv9vwFKDi6C%2Bk5NLMwIOASsoo6KAf9aLOvE1KqKWgCny17zGAVDcDLeYqkWgx%2F9Gd%2BXo0WGWe%2BUNsPnhXDczmXfs01LZRxY1gnz4EbcvZmW5tF%2F0blEHIvat9pBJVuw6ejpjZkivEkIvMaCkDUerUbzV03qydX4cZk0FYq8goYyHxZlTC06i5DscsDqwzdM3sUyZ8akhMlT%2F4ctWDU8ft7Y5bFs82FIA7tMObe274GOqUBkVtANUbYSVQG4cmLXXmFB70D3Dxs8kznqwAdIKPv7oCw9Aw2vj9OhY0InOuW7oAEtUEHQ8Zo6MxvimDpNnzg6%2Fmt3CBwx6f4KR%2BNtsqsNdy2EvMXwWXc6xP3i1IuYCKCvTlE31q7DjWhFKDQOpz9Zx3BbU1lbXJ3jHoLrpYgBEW2x6MVq8O3jvqJ35l%2FeZajONs1Xebm1uvL4yymO5%2FQ%2B7go95KQ&X-Amz-Signature=21b56c56e45e0b8b44a99bc5bae8a7d5e6de9e123979442e3f52dc665b852ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
