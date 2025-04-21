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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFL4DTKO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICI6sxVAihP6087OxRZmZZTTn8PqBVJP3JyE8xVnO2WqAiEA6tg%2BQbGd2SsTbwJ0ZAPP4WXwqPjDfRzKF5KutuiKcDsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw5iFYhTnFgxz%2F%2BpircA%2FMknCtzaa%2BvFLOLn4c2un%2BqEHIIp4WXwreS70vUsNyQ8ljTYounQsvB3XpgFX8%2BAFNyXuhcc%2BCbQpFDc3UrvYLvyq5W21czRvKthGV%2B3h%2F6aSUx8AXcuho%2FZkw1UkdBg9UnHiERkbA%2FgFxxGRq1TAq%2Bd0PdBYoJuoj%2FgPcIYuVUF7%2FCwFdEObSW4o298rclipM1M1v6Rc0jRf1%2FgxlO4mJP29tIUDMHUKqJnUqeaxna6iSzuwkolclUkMwQ%2BXscqPHQPMUG%2FnyXZhCZxpBkNJPrn9I%2F1dgGqenbI8UeQjkAvPX69EIqTOfBEuBSZLGbYWWi60ld2inNUvUjkKzBYp3nxwNcdMoQ9Jjfl4T67CrBPG32jrSYI6v4YFXZwLlC0UDNYL59NkZnL00Ko1csJLEqV%2ByfhED9ggqyCJ5NaEsd5n2qMA2Vhxx5%2F0eoVqFAwwxk0gYD8LBWVVlaTe6UiHob79o%2F4GB%2FdkNyGjHhps67zyTDPGbDAcgBFF7tPzFvOq5zS9nDEpnktXiqxCNVbywQeSvIRfGI4HlFg54BLCMh8AWKiUvGcopAdusLlh4xabXyqdXVX%2F%2FoA3rdHxdtJN6Sg25Qu68Wpfg%2Fly%2B6ZYiJSiikycGZ5wPsQjK5MO%2BhmMAGOqUBTAUmZeWN886IZUv4ZG8yO11WlmxuA6TOz1QB6UBLkbB%2BD8nAguGxQVvS9rveLOLcn44oPdijDzXNQo5DmYbD9%2FQR5UB2WMBKdaZSrY%2FA2AhyT%2BJuFhWUmh5l7AQ%2FgJFBtHY6ZzGTjFSnSaizH%2BzXbqG3YbsfwlhW5pwlbZsUxdU%2FPB64fgTHPnKu%2FYq%2BRgwQNkkjQkXx0fQlWRBrXPqds7mE3cdN&X-Amz-Signature=66506e9833d76865ec4ed729d8549da0125915352f579cc96336c39260fe86ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
