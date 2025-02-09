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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSS6IKS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu4o6w%2B5%2B1tF8ap3XYqJaTzx%2B53s9jacF1fmognnYuEgIgU48qqAzpNCn9VS9kFsZqduUitJdMAOFaIwEMfceU3ikqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqIJsSCojmp425oRyrcA1bRvTYkfrijAn%2FUI8lVWk%2BOqucOX4aKkHbjadqBzxkzb1P6D7aV5oypiNRTD01wLDpb0dxBmH01gHgB%2BmsxQSF2WYqMk9FxkJvm8T1ITY3513h31DWJgF9Nrfjm%2FtQo%2FWs0rGnMsxdz1PlF7pv%2FNZskm5wSn58Jy2S93WzNP5rQotCjzUQCALzk041nHETCNcxN%2BS1%2FRRbUGJ%2B2UYrOqhK8nvsvPAyNqf%2Bj%2BcEl3YDcyiex8jPce1edWQEapRJpkAhbRt80XnY7vGXgfs4yu42RFB%2FL0PLCANpE%2FjK%2BsNE%2BmJE5hx%2B5rJh0ANtzCVy8BpYZ5KO7CUae5s5OXtodf18%2FSiXPGo7x4aYaL6IBwYlWt3CxGSUzhHiAoPuNtnaw%2FwuUaHjDjFMrMpUAUrjO7reAuRq1Kx7ChQvO3WGW74eLRADg8YLk1xy6uJCRnA%2FwfOPQG6C3RNi3UjyZS0A%2Fa9HgGADW%2FK%2BPzU1RVvGyds2m8QA7%2FFo%2BFJydggCBd9gApDINspeuQhBLW3zZT90%2BCbII7maHMGkR81cr2rtQVgsRreB93w%2FQ6kmBgePbZhKnwgGttb9XaOMZ%2FtVcU4NDgVCdwIpntiEf7xVnIZ%2B5dr0I3wTIqQ2UlMZPNbmpMPK%2BoL0GOqUBP9r86JQ7WIauGY5l5LsIuW0RWPLm2qKW63FMfFkMJRGq0HK9OfggoAoP76XyQjLhLeYHbnYEqvDYrY8Ev5pQCVvuHjJGzYowumAVwYRNb4KDh%2Buk7mmCXTDs9pl3PGgfwI%2BIAo3Svzs2xDEORlB%2FmnB2hKtV0szRAzl0y%2Fc1YjqAxkNOrxzG%2BYuOU2vmDHBcw%2BrfK2q8Q4G5FC1rQZZt2FZEt7Bn&X-Amz-Signature=a9581a643bc4bc3fc8c315d3fa5ef5ac0c7f1a4d8832fbd59bb0e4210cfaf950&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
