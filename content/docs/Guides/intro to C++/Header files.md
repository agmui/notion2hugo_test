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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP3REWA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD76pDkFq7DqW080dC9RWc4AkJjCTjc1H2R5zLORRMIFgIgA2A%2Bgqn6kabYjABR0daIvKHy1lLPBrvpqsOjkM6cA3kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6zHslM7Rd67b8MCircAwWcVgBTW%2F1DyMPj%2BaKI9hQDZ1xM4VYdjmNC%2BnaKwu8ZydasNP3dAVKsLEwuU8bdaEGUrueVWkDkEMJ3ZDDeJpTFfUnpj208wbVTyjE2LP1HoJ%2Fj0Y97QUYmUOzxW%2BQpzNXNKD5nnHqVbAdlVP2utC6cfYeqiKxeC4vCLbMEthmg%2B6nymF%2BfCG7JT50QWy4H8BOTHgvvw%2FdeVZcAwO1WVXi2sXACLaJJ6mJe1bwZoLYZh4UC9Km6OM1xEOalh7gGG7x3saucO62keH2Ieful3TguBT1UISCVYoDaQ20n2%2FhKq2sxb%2BnxQGCwXUt8KPN%2Fnag%2Bm45ZNtT5rFtDPS%2B01aM16nizm4TpdXyiU%2BrTtY2HjwQCHf3ZQH9k94ZYzvMys31bQh5%2FQOxxb%2BzXLa9bxno5E51LFZqDRV188HR4qJ7RlVj8KsxGo%2F%2FmpNgThEZl%2Bd6ecHijFCDZRksF%2FKJL9simBewkMhV0EA49CrX1jfzOQeDSuZOdudMxJgxiv7H0psvS60Ie1xEvXKy7Y3TjF%2FKW26a0wJiRR7yB9ah1ezh5Vc7h7NYabRO6NgzVm3uYCP5QwNX9%2BO6BT%2BYn%2BiRe4I8DIOOy1jxtcqQLkzlftVf6pP0V%2BgypFOI9zwgnMI6H1sAGOqUBCP1vF%2BMC5%2BCC4YQGplX%2FXkQtYCGkrzLQp7t2Zdrlk2VezFcETWXRX47681d%2BHM7hcTca5KGH8u4Oj8wNob2hArdB3Of166cyE0im1ktvSazrCLO8PUHb4LdThffGKcrijzf91b0kElZp%2BfXM4GUy0go%2FikQu54F47WRGTpnR%2F917K8EKxK%2FSArGcuKa4JNqL%2FTVt0d2znbV00K1O%2BQ8NRh9s57WB&X-Amz-Signature=f928a0a909a4429c8d96baa86037ff76a2646f6a60e48842b1c85ea9e72fe592&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
