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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MF4PTY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGd7meUcuHKMGa%2FR%2BXhkABGm1is109i9nCRyVBPG6ZbwIgXvewF7ZfvJzt2OLVKSZTywEuj3rQ%2BOWddxEFtH%2B6m6wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDICALdUicjwCORflgSrcAxjRZk5Dx%2Bus7QH8ayWo8NSebll%2FE9FxJ1offPRh0eCwfCtlIllFx3o12cYyTyIY2aRgoX7Bf%2Bcq60IhCu3EyPfmD1k2b3btZ8L%2Fcr3ArYUys%2BamHDH8Lr3xlpXKru12lCJeVuY%2B6nyHNOXmpE%2FHGyObuFoukpXNZ7XiUmgbsZdzTsoY5pjCr4%2F7%2Fka%2BCZWdEXABzTMhfr6%2BCHFvwGxd%2B4eQqcbZb84JpauHsOhHjD5oF4MAqlQ4Gd42MdH%2Fz7ZH%2B0q5K6cvi8tqrsaLrH4f4sjuKKkruWNLPWvKaRe4BU1hIbIjf%2B0C1Ck0HLpPKggID2qjerJtWlErAvfpGNxywQ%2BKUDhl8VNqMuCDHzMT4TFQzzxb%2BwxtzHBtxxzeC685py2mdPARqp1gnr5iTrNHtXhzit3JkOntcyXpMm65%2FyLqXyfgMf8ATu7V3w6GJwJ8EH8tv%2F897xnoTarTUS4a6L8Pp1J8XkEUxU7%2FU3lzh8uE57u1ss2ryq7CvOCwEeweekI0GfZD1Swd%2FmvLwbZj%2BwiMLQc9LaC25epR7uzHVDuJbDqOkuIou4qn7avsVIfp7YDnriUb3g0UyreiaVsbxowGtj0DIrlL%2F6S36EY5LhDHBFx8Zn7KAX2rAvAPMOCX2sEGOqUBuOaFiqDZXcrdZXsweYwpGnPi5e6wPVz9Ob99owqPkM%2BL5vRbeJLhZY4SW%2Fs9xb1ZKP66tB%2F%2B4erZ6HpzCnOQVlnyuBPubTAXOONBXq2Mu29uqH9m11o8I86dy8IuMZxvwKaJ1QHqKX9TWeGiN9J8zgVx73RZEmTi5Z6IjS%2BV0zw5rl8pWeWtOwV9DgP7kO7pR1N62RLl%2BX%2F16cTGxSWz3YSyT9Aj&X-Amz-Signature=a6077d13b6ead4468671922f9e38f772bb081da7f602668871bf5bc357f77821&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
