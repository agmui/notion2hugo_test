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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTX3BRPR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFg92m%2BHtnXb6dSSoD76w1xOgt%2FTH%2FjrnIkFvW6CdKgTAiAwoiCMUN3y8MGcC1dB9YXf%2BQcs0tgqrahM5mixoe8npyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMPe4b%2FQUdaFaasSLGKtwDqv6z6iK%2FQcNmyh5Q3b11JpF2ZZk2wcM5qNHdLHiseBlRPXlHIeqFUG4Nm5k6dr4RBvL%2B%2FgqfCJhB3v2cbn2OSYs6KQQmuVY6gOXSwsgkpaahHqtSqXHUYQro13cmsYNE4%2BwYUgRpC7Fm60NdinCEBx%2BESCgkuxQShzwTt9ig4WKleYkHjlnwjORSX2Ti%2FrzV7RfQNvQ2re9wp9gw2TcNhHwKFdsMs9eIeU93wKGcnkwMa9bSa0mTXeYzbcC0FX60EdjwF92koaMNB7zkOJwlJRJTigJqf%2FbdY0%2FO4wapp7v6AoICD6Oy6JZ%2Flbq6ysl88GMc%2FH9QnxycKeU5RVUTGi%2B1XPNiUtId94gQ8FcdVzW6dZKqGMhiXknl8jpuaIUvoRwHawHg0RPS9tPzm%2FY3io5vQo1%2Bu6ghqRuMjU9iU4ZBLkNGZBnUneZVdb57sTE5vxVwChRnRNkIzx3mO8wVbSnb8tJbDq40O9vJgqVML69GTPn%2FGt9sQujx%2B1jT8mXV%2FBlxOBchdL6a3wbB0WylhqoBm7iwaKGW5Zt7awkQys7LeEdEvaZKhC00oDU9c9jSwOohiYLAEetSUnAgSojd1QIPrBU11ZIrwsLV12JAM0cWJ9hL2xMnA3WYToQw2If8vQY6pgElvUkBKiQwyYwb0wt5scmiYa5c%2BB9HorAwBfP9fdIUxA3GZs6PBuQWkYNySDMyWLNnuBfLQjY9YD3TECDFHid4vwJG9F4cMaLKjJGOP0LQKeRkjl7Sjm%2FB4yXptVHW%2Fftyd2WUyjFQU%2Bba%2F%2F5zTfHqmRGnCCZG%2FlLvygYBZnRF41i6JQF7YOIBKFsCg1aQE7Aav5jljgvnA9yU5Y20UmPAAmDj1cSi&X-Amz-Signature=aa4f060e98a891fde9a1b3736536b69e135d743a15930b3a31e8727482ae8d09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
