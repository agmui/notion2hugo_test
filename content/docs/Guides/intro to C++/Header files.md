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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRMUB3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDeVgOabMz2qpYE0v5BmcvbysFGRyk0AYd47d%2B9J77XtAIhALi8cBCdhdDAWGGY2BSt%2Bqx%2BRUP8I%2BgS5zc8JcEJXe3HKv8DCEYQABoMNjM3NDIzMTgzODA1IgyvJY0BPhc7MK1pBdUq3AMgNOeXwFpfreJVgm%2B4p887dikXsWdFdO9cgMku4uqwegv99crn0R%2BcCi%2Bhg%2BJki3zdGjQlOfoNW8EwsazeGxi3EEYXvthRdYhifAKhrxm%2F7lmvGqL%2FjTI9jBEPCWJ3E5SyUWGxwlHJTBucsLHf%2B1YRnUgdnFvMDULumpk00%2FDZ0EcsdbErLFYSN10OesNmHllz4FSUeOulfAYGziE1v1ro%2Fd1knTg3g%2BgbDp8VYDAAHctxhT3Raex83OvTFkq1vkEQ%2BXwiJZc4qSiNwhpMKu%2FpSAG2hHZyYLdZv3Odwsqniv%2BT8TxNXCNdJtMtxKwDaCHfZMjAB4nl%2BI3EvhDVUTuO5vx5J0bp7Q6YwAGfGQhcISWXXvO77P0zOw0F1%2F63J70CQJlyo7IJ3KUEju%2B3XbpRxXYwQFs1qRVk81ec8%2FvyAdDPG7W0rRMP%2BXDukGIle5%2FLbZ9JU3Ff4VZOabjVQSkijuhPUtyv5dap3hmEULxxlnHb5BbiHGClwoiLHQcTOpVmE8t2jIpe4jaytGvigmWQrwr%2FZbyiG08KV9UHOxG6fNRGhFx%2B73w80ycRLD8yCfEb9viYydXov8y1%2BV46fpHzYjAbtG30vb8HOMkGpraOIl6ta6xqQqskuot2wDC0yqTDBjqkAZ9f0sa3JXn17SiikY3VzW8%2BnsMU5NSkTPJKl5cGMXw056MCfcPKu9UueUDd7Tpcps9tNzVzER0h6RfY6aZO5zKbtZmhuZklozxw8o8LJx1GhObJ9gd3MuNWES1%2F%2FG9EpdwmmxNa16eAyjhJTTUDv919vUNflOlK2HVDDmqVj4Fgf7g%2FipAt1ed8eyaa1IeL7fc9N%2BARpPdW1GCWaUMYk6Yodat2&X-Amz-Signature=1c30b360d5ca1a3091d0a9b097851c842f5a2b73fe286dd480744ed4c133038b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
