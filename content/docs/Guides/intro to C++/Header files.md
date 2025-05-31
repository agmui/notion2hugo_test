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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335NKF2H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Br2uJ632lbBecohBetfcK5EfuVlcc1UMRW8J06MOKEwIhANL6ZUOe1IWlLtFd8AWATORCSy18VNGIedV3qyYlgRhtKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6P6B%2F4ashGt26BZgq3AMlV36sKC%2Bhb1Jou7nH3P9NjtJwudbakrStFyRhYuekGRyL5vCB6gnnfsxeLTRTdGO1TSvfUUyKsfMtWpUptrP6jQZZs2D%2Bz6fch%2FLJePHFLWzAGfPrlrnoiYOAlHFn9Eo3ANtEYkwzDyQ3%2BUAXpW2HTXMh4wzwJNMVxq%2FEU2%2FFv7IW8XmrhgpPCCgnJYjnqdFwygZ1lqE5X92zGXlHKYyH%2Fyspkh9z1rQuDtB4vLeJkzus%2FHjML1yNSYnON9zHA700dTtshczFoWTe7VC9dpMh38tRl3wX9WcCYT1ry%2F6U9K88y0ZzqINUUhjOl1xh7y88wkBi6KN4TAs4ydqrY4cHivpYZW1hN8l26wb%2F028tCLMwS3ECK0Q9155S6SnIFA0Jxe0u4UxHjGnRzbKTTB7g1KEWMSkPjV7sB3ZazC6UH9c5%2Fm3a8l7qLuRuLCm8NIk8pufnU47WIXixet8WS8qtirjq3OIBHm9bAVdAegaZGXL2JoYza4M%2FdjOu5pwnYBUNph9QmSeRaeTFgcXv4arxOJFMU4djlva0bty4hphScmAOY68XN6sUXBc7OKglASH3mwuTzoIpnS%2BsPe%2Bp4tiX5RdyQR1pNI8ffYz%2FD4ySL%2B9jE2T52nRVBWHJOjCi5enBBjqkAZn8H8yspvSmnegcbg3rkkblt2oyuwZbuZCP7lhXkaZkJugYqb2wznX3dumoGqPDK3Y4GGRbaCefvGQdPgtl1F6LmjVTgk2k%2FQ0ztyxKzqJ9vtQV12yP3JOoDRTIQaK26zh5KgYwDlGHoSOj8RwDIdCs3f8g%2FDIfZF6k8k1vxy6PEopYDLSizL%2FCHZiN6%2BBjOguzP9p%2FEkPC2O1CVtHs0d2R4zTJ&X-Amz-Signature=236a4c840c99dbdd60788703ea12f0be2a78a77e01a7e334063b024ed18ee22a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
