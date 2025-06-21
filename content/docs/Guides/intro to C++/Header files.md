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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BC6YPE5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq2vMDj33Eqh96%2F1z4s3aI8QVRGHmHzOPYx%2BOOOD8A4AIgWFvlfEqIF5QvIs8usicQW3g0QhzckYP%2BcshhgjnCtZoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEb9S5Ix9wVfwTHHYyrcA7XguV1Gru2ZoW5WtemjPsC98uWnSrXZx5sojbNrIMPNE%2BWQrBs81iZ72TzV%2BCSeczHo8mHIhWhAhfbXyArkcDTLsrz5Kkkk1sXjt9oC62SqA%2FXACl3XgimknmrgtHJfhnDBAUGiRsfJGAPTtG8euT%2BAH5CUv3fqvLTW8auC%2Fwh9eN4s3tXjp0uxh5w26Nq%2FNhbXn6jSx%2FrVdsoFf9ZhOk6SDxRz9R%2FbYDl42D17SPFRjJzZE7TTJm1z%2BHTWqFXlNRoGGCa0ybC%2FtOipKkaf3iMBvrwXEUUer%2ByJvh624eWjfnA8tkbIjmwKnNxQbioUPAJMOPg45lzAsXpY0SbRckmhTtYHsq9%2FwjpHNePze1AbOMTNavKifiXVj29NHe8LQTgxUXVh%2BgqGw8UzUOal7%2FUcfZe16X%2FWjyO%2BKQLs6LaTRWpW7qTgZngPAxPiXF8RM9DnTNgcNgUu74U39k1PQ77X3A1OjzJA8D7WCpeExvWObOOXfcAQsjDvwlpsO7lLVX0zBhYkWb4Ti0xJ1rmCZkblZR8Ua4lfcwMT9d%2Fsq%2B%2BOzonN45hvrn%2Fwyh0kCqeJKo1VUuNu4tj%2BMGAaWjVI%2BdhKIHF9KrtVbrSsNWu7Goerwr7hiRtv53GYIwKbMNSv2MIGOqUBqLe%2FG8DyI75lj6%2FCQ54jfjtFZD%2BO7GrpyZgISVD0zhIU8wsDrj8aitUpzq9cpndSbWWRjAgRJPFcs2yiddx0ApDUORyNdULsy10aajMf800Yy%2FwILEfmjolk5%2BIKsh9T2DN4sYY%2Fn26xJ7r3gXQfTwVNqPSIGP3C8T8oHTLpZKh0rXasL3BTYh%2FY5hrEqU1WL3OPP2xXNfVmifIP89KXYySJ5AnL&X-Amz-Signature=5403e8c4bb53303f971f090dd9e2d6160961686226695c24627f8e997693d5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
