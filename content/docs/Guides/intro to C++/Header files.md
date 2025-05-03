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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEMHYGQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDv24BAvu%2B6aqaMy0fdyt8ylA%2FvGsz4gAA0hOOuC3%2BNWwIgEsGpEWAsRYQyImre3AbdRh4QjqCYu45SQsvoLiMVLjsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjOVK2Rxga78ZPcfSrcAw9kvBoUzBvFZk%2BNaz%2BqDfINed%2Bexwe8E8uIE8ZwcqDdxePcKh7L07z6ghDy1alvmm3YvhDzhVS8MEkHb3R9lYUL1cZYY%2BRWEvqT4la5wOEGlYKioRk%2BGLN8hoxs8JFWG16Kr3eRuq5uSgj0SfAlPaNgnZ76wrHClbOvBtyN0kFLvtf%2FE6MxqDt5XvzunUHQp2QDn57pRK6wC%2FsA659SuiiuDJ30CNn1x671AQpbjvEe4JXh9LFYgU8SPpGAbIwV0YzeIKV%2BrsdwNvVui%2F9WpKx7bJAawFglQwG%2BTma6KJaZthBe2TXioPtKvQGSHw7lqBXnq97YhvqbHfZZ6Sebpk53U%2FNaCED0a8YdoXt1WI4WPytpdtGjIq3RqyS7XdOwKujdaneoyp52pkjl4Od%2F89r1rOogRgctHV%2FjQJEQWTWlkh65Z0SaqIZiRWXSz16L9%2BuH7n4De6BGeQx0pB%2FgZpViA6nXkH4VvGAYSmKgvQD3VLTMTdFe8lAIKmrE4wdwtf4MTw57gIcu8CNV5%2FFHUTx36%2BWUelnBmobZrC7GhlsCW6p5LxTzMkjAoupXamfkEcm847sjCEC0sxnx2tJDWZBHN3XNgZwgwRyfzObt3sgj8NwpSyi9JGs4WyMQMMDB2cAGOqUBSctMHLjGgpk%2BTaZ1pR5k9bfVU6gy%2BJ7ror3UFMFLOVgL8%2B%2BLeQASIUGvLQHJS2hF3mCqorFO0lcNO%2FSsBYB%2B8t%2B1vsONrplDLEjJsOSsXp31ZPv%2Bxc7Omxtc8zK6osgFvUYrgBCsR4%2B%2Bg2fZw8GopntnvMB%2Fnu8lXnmR88dL%2FC7yzxB3g7Z%2B3ZnT0IlG%2B%2BS%2F59v2jFwTisvKoVciQTKy3kujY25L&X-Amz-Signature=086d53e3637f30ecc2126a0c5fe27a68aa209356197f835856963f05e086df8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
