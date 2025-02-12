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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZOAEYS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz1iFms8dy5OBE9u%2FBaXMz2hzVK7yOaHP9P0eIpgb%2BHgIgT2xcEIeB7FteznQV57xnHN2mIJiMm6VbZ5gnZXgs2AQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDW%2Fj2WeLpskFsSyQircAyCufw7sQjrw7kMMcto0gANrSxfdhTz5C0GcEkE4ohJd8D4BojvlSgcUntpPnDtrJEWXlitXQ5se3HYtKTUlp97mLAwwItC2hZ4W%2FH4l04GpWtB1%2FJhErt7J3YCdTb69eCtcPwd0ow5Pt3jqJR97PLllKYnTO5ybfBM5vcGGNrqA0fwtAlY76Qu%2BPUbj7xkd%2FfEDz%2BmfY8EKoS6cwH3AenpwLTxu9V0eSUxwwuZSXI5LwYvqt0LzpvMivMdge8j64K3baw3Kh0XTxzPgum1Sxi6wcvcGAYDIfbZ%2BfZzG%2BvnkrOwQ4lMAcznH77wMsU0q%2FfUOXQLfDWXd4p%2FLo4oi2E%2FvwBY3JFGEucm47SDIQRQ2F4fM8kX0IfRRTnRJUlMfGRyYoOWtns8jXDWXdTaC8oEuaZV3pFJo4GG7u8CI1RXacNmBCb2tuYjNzpDoOu%2Fk%2F9RfnpkWVKpQbSH2xFZe9NWlL%2BEfPpa6Ae%2BlGE8nB469YeUwT4k3Tx9Sub%2FL%2BtrIwNz1ZNTNizU%2Fd9NKFAitJaJA6t5V%2FHn3FlHf9CTldBJobwOn3BvFxF6BAnLcUwKcKkR7AzaebecdEVLTWhIhgiMIr0h9RQdlcWME7JIv6SEc1N%2BRepUmFAOdy2mbMOWrsr0GOqUBUIt%2BEgPz8hTERwM8fHojgAqs6GyqhwlUjGfD8S5SYMa0dM3MRYNeWSkNh941VvfJbszN4E3%2FR3wZfh383Wh41rDns40%2FEs7sVR%2Fdg15cgZ3p6Yv%2FVaKFj5O6%2BRhaWgvu2qUv8nqlNqk%2FwQxtJTTGkvpkc7C4nzlWFjyiU%2BHQ3UmxcxbXU7yvWUUseLERy3Xlf6CShkxMXnAF3vwqD4jEn5lAlAfY&X-Amz-Signature=9357fde9c1c28887faab21f137a1d1e9bb572bd575d0c07e7f38c1d26cffd9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
