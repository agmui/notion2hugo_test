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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKSX4AE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtEObk1UKy9cK12ZGJ1qqzPAyJXRybZEZIGGojyKJBoAIgJeqopHyFlnkVwZnsCGapuk4n4NntgCHpgef%2FLv3TOxYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDI%2FrnUi74FZuNvua0SrcA5wR4OpkQgIY0Q7sj8KE4x4FbXOXjTDTB5JpWTc41ZnJ8tkXGBYySj9iNm%2FKV1pn3iR6yLRetvaWCreRT5DssjBJXRI7zhnuUglSMayIJ3YQB%2BkO72o3xEmzZVavZdCdOBIDzbjYpITFMJKbfOLMJAcLkuxYqPUtxU7NS5twTqjLgeLrckWV8TstU0DiJ1vOHwHbWEHpCx8MCiJRW8azWQ4QOE655M%2FPbRU5vtLMpeGABaxaE4RCl4JDJrxnHCDw%2Bf1pnXoFelOevjkhQYLhsjHv9Q3Z48ZaoqBWfz3CGhz86nc90TF14bEGULe%2B03PM7xTkY2o0bC0r%2BLq%2BImKTSRPcW%2FpZSrIjXjGw%2BUX25Ykcw4yisbD%2FnBwFqVqqIlZj3H1R5BSoKJIpiG%2BtKEti%2BGWyOXQ9OBCfeGFlZqyOJiD%2FVnKH9eTugbsgXUmM%2Fq7GflAz1LpLSWQh62wQjxVOGg9DIZXZmCLGO6hx1O5%2FygD%2BxFLojo1l4M9bieQ2q5M7iZIlSyOHMV3UQtjxr3fzsKHFbYewjVGT8QHm%2FboxL9PSsfR%2Bcak%2F7wUJFMdW6LW9RSKsQ5W0lUySRH7QSfvtuDNl%2BQW0OyzHDFxbIEztx7dnkIXMOCidvYkUghKkMJyroMEGOqUBznr5AaPY0b6OuSe8aTFDxInB8jLbMrdXuFM9iTse6jT%2FX2lf8LlKGPooS%2FFcsvhla6HWOrZaH3Rm4lW14RWHcmPUL0oSFZQ2caUjmmugQvPwmtLQr0V9qSMTXvhJrNrj63XLLflZeRUzBc3aIkhADkRsxFyu3%2FpNSOvgakSIcZFylIK5YPfUs%2FA3LAndJGL1fgSgV3KHkp5Cmg7EEYv5jKcsrbq3&X-Amz-Signature=def86e46b691014c68023b29ad8e6813d2ef9cbcf456e5ada5f22d7f1643814b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
