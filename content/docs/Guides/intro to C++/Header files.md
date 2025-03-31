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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVD6YL3Q%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJ%2BCK%2BwRC0b03KuCDoEutfwQQeOYCylfDUT39qpAcHpAIgUVzH35Ukk1MXmms%2FHpzoN4WAPL%2BrxwVOP1Pa%2FfIUwikqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1IpPh%2FOgfURCgPJCrcA3pmnt6wQDnG85csTqvg%2BJEeKXO9pJBixQIMUaSw4oOa7VjSfuq8a4fUAuRMHs1eY5Z3chdql6USnvH0FmOM7daRalnp%2Bj4eUTsUSaOsW%2B3TlKy%2FgBctHJo8LQ5hWmCcVoS%2Bdt3DR8Iq6GukQ07Hxi0tByRk5Uak7dqCq8lpO2%2B1t4%2F5rz0rxZ3wzE7o%2BaEqHXU94MHUAf7ENCCLffrjUs37dPUxJbEr6TNKDGu%2FJNQM%2Fkol22eMFJpUQipslc0Kpwdv9BVYTTBauLtXc6%2FXYmpztBI3HUTqfHlWZ7FzS3DHT5iVyXt75EJ4jhctRkb07Yp%2BJ4o%2F1%2BJL4%2BFWChedLPT3r4AIn9ZJr3PxLrC3rpEbQc0rxDKfyqig9jZLj1Wo%2Bah%2B7wOPlnUB%2BV4wK79Q%2BArnzKhQelK1TzKNlJqtn8l8X47Fg3QYabVAaTQ2hrwyAVB3DwNcl4RZ1NTlp7ip7HRWvLEJ743peqf4UBlVhUyRptoPbL9sygTO0ucbqGN%2F4ekmN8foFtQsk4vDgbJkY0cgemZBGQsKSPGoeJIsGuhZIh8z%2FvJzoKzCMzc0F5JdUN6%2FHBHEGQ1pbACtbQfNaizpzRydo9eCMre%2Fl%2FhqmIeKvRUB6506TrLrzuMSMPu4q78GOqUBFvS4aNyRTv%2FZwGtGV%2BSt%2FF4TtHUvyvtaNh45cdzFkLTmNUy2sGYuPC4%2FXkCkR0iSYSkToPQAHse%2Fv%2BxbB3ewYfdIq07XEHsVJo2fbsIrkB%2F6UPGXnX39AeRWv%2F7yK%2FKNUFwCdxk5RtVfCsqByJftEk1%2FCVDk0EaBJmfDdQHfy0OiVZLt2f7N4R7KkKsezUeSsOIh6PCHc0Q5WQ%2Fp%2F8Z%2FNysURc6o&X-Amz-Signature=74542edc2427c44f8ccb568ecdce176b9c134f874c5e06c697b5d6820184d478&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
