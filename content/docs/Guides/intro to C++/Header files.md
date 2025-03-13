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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBPJKSR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4bKQPJz3AusseBPo32oKcVJH%2BWFhIsuUiWxqU4Sev8AiEAkQJlEQnPa4WZGkVn%2F9kBgREjse4hUurlu82HhJUDD0YqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSNJJlR%2BuV0WeZKSrcA6KsuBsTseAsvbLY3D1gVd%2FkXvW8scszRAN8AOICtyJsqvjKSdvTOZ%2BHJ0PL%2BmmntXg0AuWtRPHg78Y6uhC2BqVDk8B9woMd95k%2FnRtH%2BIh9pkKTKq6WjT8b5PppQTlzMHFlEwYjGhS%2FXkacj%2BZa2lvu9ffenWGSL0spybqlqk3217kJV9yx3lT2Julp0OG9JI06z8DhP93LH5WqiMejVc5QnIC4dXUs1ELu1Z3hMaEu6lGVZSEAWhUeXnOAmwdsQUlivaBxlertG9zbakubndI1l%2F%2BuHuCQx%2FsvRhJM%2Bb2F36s7GE881Jc7I0MJpJzKnJ91yClzqqTVr%2FVOcteSLYrXez484vUx3XTTnjVgpbjKzwxXbBmfRClRrKwwPJxHA62CZTGSpB%2BtsN8mQ%2FNCMinuTwQqH%2FzQ8THPqj8KbT6QxQqeelSFA%2BwwRe9%2FWA8Q%2FmAJCIcg1by3%2B6d44seZQQXJqOIZCQrD2Xq%2BYQgJbmTUDqASWF2qQN7wY%2Fkqj920y1UiqqztgPLIXW6Yz589hinu1lkT6TmO89%2BK3qc8wa3rb%2BDmz0VHPZTlUw%2B9foo9pvgKPnTI4ZefutryFllO5SYh7huiIjjEcDB8TLcEQpCRWMQ1dsyhi5J%2FBnjUMLO1zL4GOqUBijOJEyD7yOqJ%2FRDODSW6HNYrIwx6S78l21JmzFf9d%2Fl%2BPkZucrBR%2Fhr2Gcka8gPIW0QMz82ueDOxK9l3PHsT%2FYMmnSDqvvxblueQIzFIzWVjDXJnHANfuswfOq62QFx2Lb5ATuE68qUkBSxCSpi60jXATuace5Wr1Bgh8hza2BpJdoZhhj7U78WMsxeCL3gH8TYxdPmlOI%2FfRPc534LvOKTJeUAe&X-Amz-Signature=3b41086d01b25486142ba9423ac9ee35463b81ee0ed0dcc73ea8cc30326f6266&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
