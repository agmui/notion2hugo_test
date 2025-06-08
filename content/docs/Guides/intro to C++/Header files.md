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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFHTTTD7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqz8xFFoScVuUVK68avjmYa9odt%2Bf6BTNId0ohTlYPgIgEUF9Qjq0juy0LYOu5aw7KKzInr9FtHUQxfhWG7PWmtIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCB645jT%2Fi%2FSkwMyircA9AfJspvx12%2FO7FDbve57hEGWCPOHOc5Ou7ClqfNl71uyivboQ89%2BXmfdJ%2FXijDiNdrtP%2BUJYQ2NUIiWGkWZarn%2FalcMzBqAsp3wjuroE6Zt2XixZcqYhC5Z3UoJbOarZ4sQkeDQnmgcaBYjCE00ynQQ0TpqrWUCnQRHn%2Bdj4oXezXffxfodmhkob0RFQt3fz8LMj5HcHZEKpAY3K0x0qnjN%2BKftg%2F1kBHV0LYx3uOB3HsMkkuBp09qNOMEgj6G7lWyNDIoI%2FijfUfyUTuqX633wRhq%2FvG1fYTK6hEIZ2YAtTF04LfBwOwXtHpcs8itRUXDfOT0Pk%2BdZpwW5Z6NrZ2RCBVgycm62oLjmMDDCdBNGg86MsMpsHjbwmNCB6u4RVMwcc47kPbyM3y3wbUx3la6ugQzuetpZwWZIyg7BxHyoHvJ1KdRueIj5VdRHR1CtPDSkPoeHzWfLtMHPDp2OG4IrHQtcIp0%2B78Vv67oKozskHTlrWNjbQepzYx4mCAy9YhLsjKfJhz7n2qEfkwRDZosyEhrp6VKYNpdaQTOKV4wP7IJjdRqD0VJCHy8ZPbBBgjycRfqP2wD%2B37xubkkGIb3rK%2FUFj4B1xiTpYRaCSHugebN8cXrDxLw2lX16MLDtlsIGOqUBRl80quyeHSm5%2BO%2FnB99QMNfNtScuA%2FSA9mVcfR9W0bkRwEGVI9NksHbjsxP%2BRK3XEtoMica%2BjM%2Flk%2BdQttoydbpFkF6UtGyuQ9IaqSZApm4%2Fxra2RKA78B%2B1hRKF5qlVRBeOy8eCX9Xh%2F3mJeXuYEpjr5azVJiuzoIe5ZHCehOCgFh25r5NG%2FXzFfX7%2BIv2IlPTHm6H7a%2FLWCPWLisE%2B%2FPUnBiBp&X-Amz-Signature=8898b3175f7aa24900d82e7bcc4d34558f635f08a7ffcbe743319f4320e46b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
