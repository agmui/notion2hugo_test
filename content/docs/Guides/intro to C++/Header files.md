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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYBPFLX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDWv%2FZjLhF3hx7TzdTnrKhvkrChX%2BbFtc0nAFIWsjqzdAiBGlKABncajTH4%2BXqhog%2F6GyejxOX3kDIQopoKxdYX0VSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa26A519SNSF0hRv%2FKtwDJJGKgEkW0TBg7RUpziqSut6xP0iWjRqEzQ6sUj1mcRXemlPXX7UDq3EWdnmbpEht0BkF2cmq2Zb%2FuMMOi%2BCV45RtrTuqO0qiE0uSQIiy25yOC4I3jGvK5ozGmoZ9sO59hrMhNozh8XZmGYgWX5%2FGJI%2F1PUwZBwGTBQbPnX5awo15bU6FVfIodzOJG4B2QJV%2FLZH9iVhY0M2mQaq1JyAYr9VCeLK6mqmNWMHDKc8VlUdNeuzrqmj%2BCJqJqmWCwZVTJDZ%2BHGu%2BGCbO%2FmLZVyj05XDa5i6%2Fry%2FswDEMr9ce2YqN3I5EoM%2FC3YHYdMSZonZ3zACFdVZ4m6pe2Vjk6F1leHHuiA%2B5VmLHtSf%2Bgzh5ZcVmaOg8ORdNcBmRxYgMb4Ax8i%2FjALRA6BzbhiDEzKpYq58IhMBnUa4qk6DT1Yrh3%2FM8Tst9XuTT8LWSZT6gKH5zf1jmCLi1NyhkYXV6LSfoDsf3u7zOP3XTOiNn3ztXnCAzG%2BQv42IjsW7Gyu2LPlicQGtP25Nh8%2BYFd2%2BuTWn1qle2nlq1bp76bkpfijoUyGV2KwCXCTeLae0FJSrxf61LnAsFI6qOBsLYARmVqjA9wmbkLluIojC8m3lRHxEa5ZWLFsSP5vJ4JMUb3BYwvq2BvgY6pgG%2BVY1uXN5hRqqATqv6ZiO4VYxKc%2FwWYPofR6wyOafIpOnxAOMBpO9gwR9li7CjBDCCh364C7UzTFCYzWLzEn09M%2FjV4ULx2lbwZhSfoP4v%2B56g6%2BRpHflASUrYPT8IQab4XDY3GmLi36n7FIS%2B3PGDzLGf0BNMnT6ndIprChIp7ijhBYnOFkZsgeEg55SpjqpMaqXoyKMLbsGTWryxL8lLWO6tWEJu&X-Amz-Signature=494ea2dd9ea708ed7796da591cb40f8d24ee48a147c57f33b24ac7f44daaa24d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
