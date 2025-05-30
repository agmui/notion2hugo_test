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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AG45G5Q%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKZKt5FNXva5kmYmj2T0uqgfnBfQf5RBjmfdokA0unuwIgX11OvkWo5PAEeTo5D%2BYMEB1ldmAaCWDRxkV2MljZ2gEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwDxbcPMrHr9lDPqircA07vBfaH1kRr6xF4OG5YQ%2BcbQ886K8MTrSSk7%2BoWCp9%2FsQ2yYE9zLF4JXBqKyVzYjO6lZcsSUayXKUAHMClGa6cm9BWd26G%2Ba8bR90kKzyw0SwDx94%2B4cC2KJSkufwLyPzJsHcPoRfDl1WnqPo9YEBPTbYtSOU4%2BC6kyw8ZnEkSCZ9v%2BaQzxCsXHwuMpWBkSYQdIWh54vvsmMQyQ9hdwslNl1tqpbQXpKKYomMEizbqQeHPaGqdHwBAp7DxU7MX20YRY4zQ2%2BG04e81h0YDycA6PenD58CCr%2FkGoXL3Jg8%2F0TXsvDIHPVdUzv1cXQjZ8HLICHCEm8s8ZH24mzYu3Jcrk9XKL%2BMNVRaCUA7NTqsV8DCzNCSmhQ84KXd%2BEs9mt5HP29%2BLeOz6zcud1qthKqVspKFQAhIFtnvTIBZRY%2Fw%2BEVB9uw1%2Be098sxYP4DYm8UVpWNBR9o4kwKhVzRVpJEjC0oa0Cn8FnaOobcraabuAuAu8NcMFMvbebeZ%2Bop3v7%2BqBgnOX8KAzwfh8brkleJMxhm6wVceCoDb559dghjJzZdrNqCrTgX4l9Q%2FTJWTI%2FBbAU7XDwR%2FHGN3kg8GKLKWa7FjdubXED0isyiKvXpuP6DNMV3mTOBExEwV2VMNfd5MEGOqUBi%2BI6o4IMunObF3Y15JoVVbI0Dy9LTiKr4xLtLrDwwEweauZ4MGIIgZgJfO8ae8%2Br7GY%2BpnHOs7%2BUwv92xL3WLgXibwwv1ymqIlHA48x0V2dairvBPbeWxMk8ueuFKCOe%2ByDknyQOzWU7JelWjdfgrhI5vNpw5GWq47pcqIejJVloOs1uA8YJMIbdOXHZAJJF7eU72a4QKHjT3Hm34F8%2BtcBZxtSi&X-Amz-Signature=44870098ec80b3a90be256d3936743889fd7e0b8ef3eb1f447d7257ce9da87ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
