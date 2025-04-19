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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGRQP54%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCSQPxe4mzVa5MZ9%2Fn8NrVXRbBPSKs%2FL2vvaUFJkCigTAIgTK6sYLTcAgpGOxTV%2B%2Bmesnmz%2F9h2bUVk%2ByhESGMEvGIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHs4Y9KHW%2FwGJJaSCrcA4EhrHOo77Ch7SA0AUU8bZF8L2UIU223E7os9093XtYk1i%2B0BTGGBm%2FE3nXvQDFgJfiO0Zjt7YwS1lUGISVg%2FAilrr%2Bg7gfuD6EvV2kWSBY3dSeflpaivMgPgLnGX9%2F1PbscfODENAmgiYT5D1zsChdB4pWF6qqErD4lKSB9OIWq0vJl9dP9DYYICtOUu7I%2BCu7Ft%2FYFHhMKtUXUkHwb0%2B1H%2FcqzcfSD7hHwyzXGbMQZLorFHqBoTF%2BV1uEi22Pc8cEssMpUPCv6py%2FW6yg1g1pYC%2BbZEDjWtpdeoNg5tPAlj6wpazWM3eZlw1nbaclKYxzC5VgNNYX2ktt6evEcybBNFHfm1pDA%2BxjrVuvQz0%2FZO0AqiEYaHVJUexuod%2BM%2FoDj87FGOLm0dBlFpvKVKvXntcWJQidoCA7Le5nHwrXz6KQBk0Wi6Ieqkr6ffwD3VgxT6T86wESZci6zuu48j5i7iFHlEIUm4CS9QIYgYiEBuGbGvp7y9E8te0phXdKg9xfU%2BIa4%2BO8FOyPdO96D4eARhX18qmtASC%2FwF5DkBNeaw%2FOTq39ca1vIiBCVzR0sXKHGrMi%2F6R58mHNGreDBGculbrrkmBnCuFzURsmrZAh3R0myB2RWkjrZx514hMJ%2BfkMAGOqUBNvyuGWfO7G6WOv2D9odUtJCr1YsceURtcnmnvCv8AE%2BdOTjfMUVbuKMovJ9p9o8BG6X%2B3b%2FOP7itNzOfENi0OO3B6MApPwArss0tj16jgHFsVBqH2YTzb0A4%2FyoZUhqI6t7sI4EIK439qOvJUeexqml7mOPQmNInT8%2Fu0xHbXJ1LFMPzigR%2B7RVmE6gW2OTY0GcgaUTsLGQ6Z%2B%2FyrOXfsDkgpYhO&X-Amz-Signature=e0c9bd7c4a3877aac2522d38b841a3e6e0ea6cb39f916210bf6dbefde3602296&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
