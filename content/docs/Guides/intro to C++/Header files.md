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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4EPOG6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BMCj%2BJrg3Gy8chnTIaKfKF%2Bv%2B0qWpsd0FO6fSaaCANAiEAofzQnQg6qJ1BCMiR70KDl0D9S%2Bpu2gtTNHIQzRTSn9gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtPYeF1mCpR1zHoYyrcA2y%2FcM7Khk5bPgzh3D%2FlxDbyX1LlEDKG6lxeGMT3zBa%2B7OvZTsK7MOSt9b4WIiysaM0eXsxWxtjRrePUUGnha6QxedlK3PmXmY6ZXUbEetOUFCc4QYiCp%2FHnGwfe03UjwgOj1Ro8w0xxk4p6K2deXMSsrK1NnZju7TKQEy5U0UIJeXlO2Ftyb%2BuCeAGFfUzw8%2B5m4JfGC3YtGAHSP1CrZrmvlER%2Bvt8TpiYR10gscRtNWFGC32eoh5ZUI2ZKc%2BeE1v2UJeCc%2BAgVeCY72aHOGWDux66ZvSm%2F0k%2BmjP3G3o4zUQ%2BK%2BiH4qWL5hvb4GRyF%2Bm54SjCPpkMST2WvmYsl9foDOEOnJ7nqa27S1ZnyjKyvRWcFrACLm9I9qJRg7%2FU2b9W2Cmy4qGPzA1mGIDt9%2BI668ycpZXwUNBclDu%2BP8AHr11vA8XjxZPM3Q%2BTm%2BKZ5eLNboZdI8VZYBNNrEhPuG0m0Vot3M2TQVihoFgjaKPToyfCuOlt9nAxp14ztsYEf8WM5sY44E%2B3ZM9GDxukmSSjI9PQNXkSvBAcX%2BYd1U3GaFwqfY%2F3ajunDKV3qN7memPMeHwPFake9m1NCy9X3kHtccQWf1H%2Fd%2FLJFrGe2BSVM4MmLv%2FvvJ8gd8wckMKacscQGOqUBiJBXwKc0937anNh%2B1tvWsuOvCu5EIByJNRKwphAqsB2TLSn7rto0KiTCQANl0is9dm1IqaWeZAhrD0jRMPTt8cLlbrFmghKqR%2Fj3GJtrd47Dk%2BYGxBwTi9Y6vhwUCtUUnHn%2BY09GCaYxFXs4VGs%2B0xyJD2wH96nKZYw1ma51sx0%2BQd1urRZcckg2zByb3sKrnGbSehpi1NbDR0xDVVYkz%2Bo%2Fk8Zv&X-Amz-Signature=4507149f591eb8923419ad2bb5ba8a778d2c379e5c2bc26b56adc63dd0bb7f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
