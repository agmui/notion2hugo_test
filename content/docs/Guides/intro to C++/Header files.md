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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6HKAFU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTdJJWRU%2FSPW4J4qqc6CLfQ39OSTLvJ1LiVfqIE6Yh2AiAMXTImqJw1Xp6E%2F9fGK%2BMFemFmZyFTplSPCiqXBN%2BuqiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAwY54eEbM0kX13vKtwDjEnC6lXC6oWOMVRC%2F9XPG382GBdWdp28mrx0HWjYXV0KK4KUPCdHSUj72T86YxZkbNdp0gGfglcTVGgaucWPaX9249BInDAOlD3pokiruL5EemXWxtlYkN2OAxGm224xfaB9IXqbtWVYLkeFyq0KkT7w71I%2FSBatS3l1lixvE0BpErEFuac9I6orANcfazG2sRiQIdBiLAPzq8XR91RvBPx8%2BG%2FwI0hbjgFoHlhax8YHEw33MOI8gwJyg%2BOJ66qU2MQpsF0Y2mRl5NB7l1AOZ4fBqGumOYUSiPzFbZVzNGKM7%2Fb7xpuq0BqNaXjJ1Q9j64We8Gf7T9nqd6atN5xYUcQYiJYckN%2FFrXYmSzUXwj4v4tL1X57QZvrC7CBf5sIIXMASkLQEHbBEektKtrtkBlKbyX6NlsU5ugWflYGMj3sohbxJpsvqFP5nxWzb6sU38s%2BhTWgtWFmlKqQdJWcyk4S4JvsLr7vHApa5HG9yHGAND5z%2F9vgqYf7UtfG5v3k8Yk6jIrPCNXSGY56Js8KoF4PTtrFKdiuHSCcQ8FLqeg18%2FenzG2Rghw0CSG3I8wh4D5eS0O8YyxTekTxJc%2BHIYNSpssfiDMgkfIFPMbTWNOkF%2BKoYvsJxHTvnX7Ywj7juwwY6pgH97VLa7QJ6TF9zIRVVqM8RTEitqrL%2BiN%2Fc6BpxRYykaNYBsdwU%2BEhKRjwc68lBn1tN2IPDQ6ouetozG2D%2Fmb6J0IwUKNYfb3Z3mFMbN0viLJ5Oj2rvhJu6MI%2B6DlJhOWFI4V%2B%2FMmqQl3rcVasnv5wplWO0gv7XxjQ1ELql5EcecnvlJL45A3eSQBeGI%2Ba%2F4FFVTGdnR6AXR7AXt7gOoS6HYkRsf%2BcW&X-Amz-Signature=c77d749d03b3660bf5c8febffba155cda090638931d95f9c7dc6505367ee3abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
