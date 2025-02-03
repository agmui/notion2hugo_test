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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTXWUES%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGT3DvK0RDvcVHbo7fzRRIziUv22ecdpNoR575yawnZ3AiAD9HLp%2BYKqW8VOmnoNE0e9DEnyN3UU5Er2Xa6fJmFBqyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM5qMBSHpJrLR%2FDtpNKtwDXkvAm5Ojk9mRbwi3Z4mhPWRWCSjgLB0oIiA7c56OqSEkc6w6vsekPFM3m%2FL%2F40boBHJJR1xO1Vw4HxQmprPLYpa6i119Y6MwIvA7Jd1sKJo6aTc9CaGr00UseQ86dhzGIzzYcwXXUDNp8Y2kNunoMcZ3BlQslwnRTbVoyyqs2FJtYkrpGTwR2w%2BDwQKKlakypo32yXCz8IJLUhIJe4c%2Bog1gXi9Iq5HCC5mhzQKerwZ0OEB8norsnj%2F8dYYhNigSJ4%2BAcyFQijcTeY1MJBNpqRE9ek3JUdF%2BxDYEsKO%2BFWrGgU%2BJ6SSmLCZnk4OSu92g5Tz102hopMcJR6lNcIUA51kmXmZD5CPByFPag%2FfMgHH2QNxDaQ5N4yadtm03yYAydzAg%2FyKVdL6WEeTlwsgaR1WSrfds46I%2FA9posxg0%2FOtW%2BEUd6A%2FLa6qlIp0p%2FyZR1XYKignkFAn3lWMOgdKuGpuSP2dQ52vUYZuSYXywSIP9p39XgA0r7ug%2BHm6OL9FreQe0U4jWoMV%2FGUJSvP%2FcaxDpsYu%2BRSsjbZaOY0NikfUOVsQs5MKjkNQFdJ9QIzyF8zDI0oEeJixtyaW1obR0%2FeZexHp5zooB60o1ZeqBqiY%2BAKOUpVenVqT3mI4w9KGEvQY6pgGbSWkkhhS2qwiUuMtbZM8mju60hZ2Yxv5I02lvfrd6IOu%2BsWSCETlIItKD3jyg0Hx%2BGXa54yLnT6C9VLF5rFZUxvy5ikQ8kgRWaJTmo1sgVr5dzLoXKhfMu%2Fs8aK6rOtkq%2FKIIjtG0hDzXNNiu9VL1RiABo2w85VYp8Vhs3AL9H3t1Imkrlumn0E9UuzLXv60Lqc5wphVi9qsJy5cWiQbqw2g1p%2Bi6&X-Amz-Signature=5e610aec1819f32d144fd14c0e316f7c396ca0ba978312942287f52ec3e7f264&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
