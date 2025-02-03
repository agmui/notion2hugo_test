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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5ZPLWX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHxbgCet%2Bu1IgybdR2QWZtVKBWF%2Bz91Gb5nOHJQx%2FEWAIgFBys9lR21PDWXZKWfHimrEDxdg%2F5pD8SaKW%2FSOq2YDwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDG4lgmkyNbIjzBn%2FnSrcAyCiCMvhfAhu8CffNoY9WaZqpGSfmS0K9MqagAfoYd4lUCVr1WRXx3NjTgTIm8X3PMrZmIFtalUXz76y2pJTPWlWz%2FGKmRYsPyAXz8FoOu%2F3buvc7iGmUYz8mzfYXCsBSq1EzlWBD9LH8Ne8Wbzx0AlMe5G4gmPw4Px3FKRfxmI7DCbW8DzeVR%2Bw7UOlANvRZmTskq23bEuBnEqQSlfKo0g%2B8AFXLtRBoPnx5xrC95LcDGaQES2wc62Tsit6By9d2yp%2ByzQ3nL6UlEOBWlJtV43FZ2sUUC2wvcw%2BwMVT5L6rz%2BJXYkPsO0LgvtuOeWoG90yD7INXBp%2Fpf7rvAKj4CgpYjz%2BJb3vskk9h5tCqybHqRrB4t60thE1CrvdD9F2%2BRe5L8leKr6Hf0mwaWJLK%2BncFDGx%2Fc%2FvQJJa0b4wCxtpiqs876kf%2B9WhcyWa8QJLVc8EcjXO3HwNHQ6x0cNQJNLjVX2nFjf2yEii8L%2FdM0hy9K2ajf35zc85A4q3uLOarr9wEVywG2PllkD%2B6MoxIjvib3yqcK7fdUpuz2bqafCMy0ltihgKk%2BQ70TLN1FtId6yIicBeTLkknqyZ5KTCjDLKO6LKSobkjno1kL7zj31MMBf1jUvdonIJRjj%2FxMKePg70GOqUBPlo3S1VCkDYM%2BYuK9lQYEUgfRMjogfRVfUqkfG3atS0J%2B1u7B2M5RoNtU0P5HVGZWEmCw4xVf0qaOXUIY8vb3vFWf2UxgZo82fw1G3lI65HVEwOTFUKeC8%2BWcTsjbgmDD4SFEPnjcK%2FVg%2FAmI6nok0on%2BzIa50jzbdAjkabEVoTKDS1AHxug5NzyNvyFuiutb0v2iBXkAanlIudyl4WShiPodoPK&X-Amz-Signature=adbd9f4a692b492f0a4b44aa4ed7b3f88632459cf2f95d52c60feb832760aadd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
