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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPWRVCO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq82u6BGUn9ARzJKJX9DpqyN743t4ejGI6HhY%2B7%2B%2FsdAiEA2UGusGmp85oalzJ6XsjIAHoF6a%2F0CjqZROKs0%2BYAdjQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIgoVve0cv9S4YDqLyrcA9fuOJt6V9Pek1mCsx3BsQoOnprgGtjn509qzym%2ByF%2FnzY%2Fj1t4ly4vaBrm7Cf2IpbmixCzc%2F%2F%2Bl6gpsbAZXEGT7%2BPRcj2y5T5stzLbtNzlKkCuwwf5I30dsdUF%2F24DgsMqnEu%2FWVcGSG8nzG9YDHd44%2BzrjY58N6HU0HPMDHg7SvhKIkJ5jrNk%2B9WnelhSKYvy%2B3BzXYk4t0JtW2RZxEHTuJ5mBWfdVsxtABISZ3W8Ggp7DWlSJ8U6vLUaH4sGECjWcXeLNxSHJ9D7J%2Fh%2Fz5Zu8T1Jg436%2B%2BSaC13K7TsPv%2BettJ75iZo%2BwKK7WlzgKAE2WdgOQ2orU2vsosObjTU9MPoIaoqkjpbcP%2BIqtkgR3t7KlCXi6DRdKqQvfxolrI1Zn8mCewB4IXj3abGK1rhN9l9kdNp5C%2Fi6k7ybNdhyO8L3yt27mdh9EFn5bKgPmjg7xUJU%2Ft8XbrgSrBd%2FevUsnYzbsFUys1KW69i1FsZi8MU7ONNnzqrrqakXn1GyE%2FiO3j9FSdb0ISqa0VzPTBiQtXIuyQiXmE0dvORZwZ6nlAqMNX07l4ox6KqrGqDX8Sg5x8R9GBNTtC%2F2uzqQ%2BgdfTqB5kEf%2BVpJ1M%2FvqsjCQH0I3WtLpZOVQ6UF4PMMqrvsQGOqUBvKTc4ipmP8HF6mT8E1OtVgX%2FHQQotOvPkCH8%2FPi2vMru%2BsvaDk55stteQe3oujGAiRkq%2FN2wN8xU4GZcYh%2FBKubXFh3Q4oZ%2FYykalsm2Ob%2FnJbqm7%2FafHZj1oVv2lRVaFcPp%2FjU1ay5QCmFCQ9SANmtnvF3QIxXgU7wlW3XriM8vdoDk1OIK7j6ZW432i%2B7aOGCSY%2BbODr7kCsgVRWKtKBneL%2B9I&X-Amz-Signature=cbd600ee6f6ea6c80a6dfa5e4f56b760cc44319a8e1cccd1e6e9293cf6d3126c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
