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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UDS4NNL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDrgINL3FhMIZmh7UmnRHdTyLLlUD1OYj9tzAuc%2FJQnGwIgS5rdLa0rcXxQpJ%2BMylLm9zhGD3BIHlRbMsf8WAiHev8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2mOpQX6Gwie9DK4CrcA1dy7wAz%2BQ4PwtyDcDxjRwMFAwgyThJw%2F%2BBNIUOiVlDBDlFlj%2BZOY%2B%2Fyl6KuHuR0YHlUwSNXd9nLMCxGg0y8mKixZN7Afkl4qvNZv2zDyaNjjRQNX6K8W4GTVS6RSzg8OF2YJ3FZE6PCnpPMhL0X8ts0adb0ttnWtqNelKPbmOryWrFsucLYjBYppX0ng%2BBBbExuEqzskWqOv8l9DuUBXiLbj29XWp%2FBQI3HCncTK4gqzD6xqjAJxE0b%2Fz60LvTU2qugmOHsXx9nwQ7BxkqzLtm%2Bq3HBjBTt6BUy7oFFHwFk9kSVAfA5yKyRHQ6HfF7aXHTCN8C%2By3Z5QEng7CJAvrAl%2BTYxoVMuf1QxWtnYBJmXv%2FIO5M4tIZlt2UoF67SSSlLF3IqM3vQTug9aEuNMfiv85gc7f6jBfx57NTT%2FgPAxB2XZcFOvtJhkgg2ovna1ZDAGRDeUIF8zfofjXnNYgus2ALNkBHxMuTaPZ%2FocvilPK48wo68eJpiVHXuKuMnhSpzIjZHesMgyG2kqwfsOnaN3J1z7GEaFzyzk2LVdUdYJ9ccIptGxSWKM7ukhNX58JRFkxeo9F9LgSKWxi1VNcO0TWeW4rx7qlCxAX%2BRxk7eVR%2FqIR6PfgXkkNQNqMOfCncAGOqUBuc7Vpih%2FncR9RpZrvTJ8uhaj8wC2Udi9cMEgjFgQ%2FAHv4gKJGBsWERjacvkxLyCtt005J8HopAxXi%2B0eWkYKn7sBTmrznYBnksCTBFNdPXXRQunnzR7GFCJ3RfoNRrQ2jZHrBS%2B1YiDo6YPaRkWeK1FNEEdp1BCtMMn0SV6GOzcFpQkoOMSb3LQWlxpw1%2BNWCbu4d5mONEkQni0wyQcGAROSWZdf&X-Amz-Signature=92f8493a8477329a7d03274b972ad78fe12ed64ae49988e576767607837908b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
