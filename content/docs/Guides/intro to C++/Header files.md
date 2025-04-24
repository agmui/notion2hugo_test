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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YH3YV5T%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHUZVbLs0YF1Ld5%2BYEgxNF5GnWwNpFaONzD4vilTMTDgAiEAgo2w85uw9a6oFRVclmviFPb4Ni%2BCprkL7XfWRq3dqc0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDB4VSWodX4Fj90raPCrcA7KZmt3XIm4YZWyWWA6hjtAg%2BWYDySsYUvS8n%2FcH6ybILd3uqHmqzN2b3w9%2FYT%2FFAkk1We%2BZJkHcgmF2kFTaJnlRwY5b5qHjzOkO3AvfCf59teQ44U20RH55bQKIArCjS8TPMXz43nPcP%2FkBURLcjfZn3RS4GJvq%2BL%2BMGEXdaY%2BDaM%2BFueOqWGy2Yc7t%2FfI1IqAewDR0LnjO6iVNA1BxO%2FZfyut%2F6FBY9azEp5qOytbGPYYQsojDBKugwzsPYYykIBSj5UuqBxmWR8YeALOOk6CbEQa5prZG9onrcMtkaaTj3sU15h8kG7c1fR8H%2BUuw5Kk3GFpMqVdWMPRg9BaQRrh9ROYDhKKoaqgrrdyaRVoa%2Fbhl5ax%2B8qw0zVdeSItbkv3NzCWq05V%2FLyE32moCdlnELQINR%2B%2FeFgG%2BP25%2F%2FIlBE8G916TurvnC8LINsBbzfAy0mM%2BhrGOsb7H%2BVV%2BD6%2FsoYfPIUD1O6tTBjK3EYPFEMBbXN1VkfmYLYo1KooyJp6KzPD0t3LoYwexyyPZfpdZVmiInNcQk4WCazVly8sltWYVphSO7pNB35hgAhs%2BBqcr3d0x48VQM%2BhrnkEFKf3s4yvEbGPrVGMql98XD9AvHuKJhwRY8CvVHZ%2Bx6MIjop8AGOqUBUUQwzpQMf7nzyHW1xvjugQNyKIAjJ0PYsdSp8fynyMwWKAzLFL123g1GsRKnpMfyK6DscP7HN9aHXCb2OloXUT1HVWv8HZduD8Q3zZKjNerzw1wYe%2F8%2B8kI2wMVjVgBU5vdKkqNZQBZ37sTByc87EqBnuIF14oGeQKBURgrIq7InmXQ8HWsztVXJpd0icmJuoUQOmRQDaj0sbyWpFNqvA183HPYm&X-Amz-Signature=0f56c7b0a932b5ec7a7306f618f5913e6d439acdd7a5f27f28ee42c1306fdc24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
