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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JA24YJV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSGPq16%2B6kd2j%2FvbO7TQJew2f8rxGNoSuCgmbimAsb7AiBaMXpP5wG4bJYqxRivEsWHmw%2Bs%2BBgPd0%2BOfZbVP7u8ZyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHv58WFXQLyoozUf6KtwDNH7qsOu9h2ZjtcJr8DaimiSL4wIaMgaSkhQWyoj2FLf0hDHQI%2Bs8P%2BiMq4aL5iBZyU2oS0x0nov3el3USkygJIpZY5agrD0w%2FkFNjE78TFz5n8jx6Tg8nRUYvZkRcXiPSryW5iD0DhHm7vvge5FVm1tdZIdm8RK4fkLkXXtIcGCxeHWn3pPwmlHlf87CehQiK%2FSbR1L7kvG47KeqRYrzbr%2Fw48E%2BP9KmpHJh%2BkT5QZNa4QlYpwR5CTPWlAhaZi8aiIHSF14qNU5tese%2BTlvhkN0kuXr016FCXLcFnSoQUAMZcK1cFObjiZsIHnLn0mq3fTthEF2jee0x12YTn%2FkI1L7FtmWcpLgX5tR3ISm5AlYcsOPIp%2BUiyiMzdlJ3hMkaFtLksIrfDhv8tGcbUmiEsOwDL5%2BYGrIMTvjVz3Wi3%2F2QdDrQI3alfLraGhj%2BDtMSa3YaTo%2B1OkQVM2EPFp9BpTimrcI9Y4kjAC77%2BjmKB8f5s7Q0ddawjAX1ru1%2F6ixrtcOvTGK3PElGRe2lslPj%2B%2B9WgRZBy6BQctSQtEpueETodsXkMBVZvpPYKtjoYYhZO%2B2ox6XziVhYTmQP0rfETlRweawGsyBeq6nW04pvycLvV9nntTz1fXcnPeIw7aX3vAY6pgFJgZPYDulK5%2FbjK5%2Bwu4mKeggklU564C3myaGi0RkRClUmyUdmB26Mg5pVAgompTKXAfrKofwMQr8dvSbK0jugnZHPa6PmMP26iLORTIelW7AUQDb0Esmt5F0jvKbBb0ha%2BzNViZwyAUg%2BwgwXQ3LBZHaszqm1sYVbJU8qNbdqgQ%2FKUq%2FXhYrZ%2BxqddanFgbioOBf7NceGd6bVQA6f76JDGIGzTFv1&X-Amz-Signature=dd1f03a518abbb710be8e6f217b94699c6866d3c92b9febcea587e83d6e8a35e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
