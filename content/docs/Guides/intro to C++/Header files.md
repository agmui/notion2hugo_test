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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WK7RZMR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T131718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbPiIQAMZGty6LN6CHpxZt3qzWHSm1iYwcVE8UMl%2FfXAiEAkEiDpf0ARdzQMEg%2FYiZSf9ZecCG%2BZDT1NNguZV8B7uUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjJR%2BfshbguHFSjDCrcA%2FEW%2FawpxUb5dXEbb%2F7lImUcfGQXq6EgSBODO6ei4BTrxAMqkfynIN5V0VNH2mToNAnOMeX2mqKFw1czwuCUJ7qPYFb1a3RniyckaLfwalLDedhYMVsYPiIOyNqoTtK4VdpoROXAUONATto53D7%2BBgeWqkV7ofVYzyZi8tpRROR9%2Fz%2Bs%2FlXN5%2BG3oKsIpYpHJHgd6sGoeAvrlE3T4jPiQcoyijaAGYKBRnmYWingkHqnNn7E5haYU06%2FQO83TQCK3Bg%2FlYFXV3acykpz6kEt1zKfJKvAx6Yro1qZntdS9IcLp0PcISgE7Wpvnefsi%2BLSuOTtGMx0h0oCxW1Bi%2Bt04JzXC8sLeR3immZRYZUJoYGjIaIdMS9qPvubAd6hwwk6Ca9UlVCUn1YX3XbSTnTEO5HmwfPunpE88h7bI4WIQZRZoN4qjYsIdkX2wCymsOsjS%2F6847WSrt7H7xY3yEhaB4tOIaXJ8zIRB4Tdkppjko3%2BA6JrltY%2BzXr2gE4tKfLmJ6hvE7Gfhm0PNWGjbWzJl%2B4cuSCG6%2Bfu%2FUAKLJ%2FLHhQJbTX6I6fONzUmkGBkcRANsErJPP6Ksa8RpeVnIhxvPfg9Vw2gevbgbQUkJ0YM9JW0MB0mkxKQFDVLqQECMKe7lr4GOqUBn0QPJRB9M3J38xv2SGOSl9Jzz7huVXxRUwVSXKL%2BKIMJ4mhx5OZ0tRyRX%2FM8qjbiyPmuxSsj%2B29jhsyxc%2BAhKxQeaCBX18JqqUdGXAUFOiwZLwLwnKrnuwj9Y5cMCYIqsegiiIs%2BT0XCq9NjPmnF%2F99Q8%2B66gqzc9ZGNn%2BHSjGEuCOCYytswNlhuWRklApHo9NhEthidT88Rxq9BrOPC%2BNhYJtHD&X-Amz-Signature=0437cb8f3fc5215113ee8c3504b9b59c936905c2806a9159846922df2fb6fd88&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
