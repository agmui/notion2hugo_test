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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULKN2JGI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACZ3e%2BrnNDqXtlDpct7dpsQebho6DS57h%2FzRsZN7kpfAiAgxVcC69DZ8UtxtAuk8jrFXZOVRVuWX4zsXhgQyz%2BX1Sr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMOCs6WJ4uguMddD5bKtwDIf7ZQISXQLpRQgaN7zhRTbhGoR7QuMt%2Fah35tHiOxK6tYkx%2BMaEz9%2BQNef4n4mNScvQ7HH%2BFrhvvI8kwu7cLhi4DaEzNS0h9wE%2BZ7uEA50f84hdG%2F%2BncZ7u8ds4elBe1b%2Fc%2BIDKOgniMKQPtOMrusTLCmm3mGtVcpfIGrbfeepPS8bXebyZ4Y168ueY9bEFKDOPsDClRXDX5h1TAtW%2BACm2QU6PmIaciyydvbEmVMpF30uAUGJVtvRm%2FY3HrKWA0HGgw%2BilughyCRwGelqclRtrbT058WcpKq%2F0%2BPnN6QFQkNWRnFyxDA3zqQn5IptQY%2BrdVOqNo6swI3lxsPutcGbJxgAab5FJVsPYXLTfj1RkyS2tM5vKigblQ%2FGqz4CvwbsIDVahNCBHENcJ%2BXxDGyQ%2Bbz9yonvW3bGiPoIGEJWHTnlfdalXa%2F97xJOvjpkbiM0Z7HZg4b5UHKogbo%2BThTVdznY6pZrYhwH62Rr2OX7xDVDvZhACwd%2Bqx41J2k96BIAuzcPhWqiZQyxjwnW2g4ty33YPplAIgMEf3O4SlYUWoL%2FOHCTyWWWJBnWx8dmqrf5a1oSLy2fSSxAEevUQgmPNu0sN1%2BDSNRM%2BuGuIZlJEhMqTosG31W8VIb04wsoT6vwY6pgEX7CC8aBiArzXMk9ct%2B058uugbuqRHss1R3FVn3WkR6OZrPTesEAzbi0wenZ0GoVnTvZHAp2DMaVQ0pbJosOllYuRpPRfpgGLOUWjBx3BAfTxVrEoXDLSbgpwK9UQ2CHv7P6RtZi3z4SURj7sDQll9OPs7y%2BodCKD05XXxYYejdyhMrP0BC1fktdky1R75fojtgCorSkFEGJvdYNI607uT%2FwoOytYw&X-Amz-Signature=733f97cc53b0d28cea5f6450b38fa18224163ed93f8490eb14e6648a585cea0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
