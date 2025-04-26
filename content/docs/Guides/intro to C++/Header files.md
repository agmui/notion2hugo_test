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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZQEG2Z6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFhRdCII4gZlQnS1FT8bWldNq%2B%2FYsI0IVpFQntZsCibAiEAnO2xBPOen%2B0o5%2FJ7ATDUQZrA8seOQQ%2B8m6AOpiKA95Qq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDyw4phL3ygx%2FPzGKyrcA2FmJ7Rr0bFjdRxlq5R3xzhfCepgCIQ8N821tEb8rnRBY5dgAlzRYmvZ%2FsQcudoTzRZETM9tXchamtHTIR2WdcZ5CXgJor8fAhNxNTuo0kBYgyOo5X5fXy%2FZUKilDqktYFcafWKQixfw9%2Ff5V8scwwFhK2KFUwjBDl1cYU4zWOjq7eCOclGJCpwqsYblmyXbosOE6QllENYyy8aVot30wncmXpR7kEh0rXqSsulX7JOgx4QZRuH0itSkeDZIftAtpJlaZSHxq%2BzHaLQtDgRs5GEy0P2%2FJxbiSwXIZBaDDL9SQRTz%2FOUhZTj2qUk%2FUVAXfJuy1QyI2xe1F1H3bIGLA8CGZiVAS8mR3viDBQfNHVac3imom7pb6XhUR%2B70tHPcahh4fd%2B%2BGUEFNthZbFMU%2BBk8zoIink%2FKA01un215I2rrKsvANmqtD8Zq0QyLY0XNx8KjOhkgPUt6daZHsF%2FVs3Lb5BEwmM1fHK9AQd9jinQev46t0C5rwtPTtjzJrrp0kW%2Bb4E2MVZLrE3zn6C4sDpO8dnFe01ZUJS4ZxyDV2C81tKtWD1X%2BwzVHYAojIp5kxS8o%2BJCwkgGqaizK5iM8BBE1tdJvqSnbL9UxuQ6fH52DDHEyTikUWsEjgLt2MKOptMAGOqUBeJSP9XHAByCv25dbStR7iLplGjaPSONm6xoKfY%2BXy1%2BF%2BODi2o7bGetxepuMKCgmwXzbgBg3vYQ%2F8FUDEP4boQ9FbtVApSioLNCUDE%2FWd%2FbFP%2BDyScy2ZSzNomjFWz13L%2BeFz99ZPydrtz0evRVo4LKMb%2FCfNxlPr6th6Chj84tiTLPSGj1gLUznPUR5woFHhpxfsTa%2BQuGtgg3zadsVot%2FN5NXA&X-Amz-Signature=f355697a8bb2c8cd7265004f3786c45876cba835b4d49814ef9d794f24a61345&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
