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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W2KBIH5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCdCtuo8TGhKaB07LsEBW6Kb%2BTQy6Qf6O9YGaK1VqgOLgIhAN8OjY%2FPGQ7OU3rstUhCnEsjVR1l1mmaKEDF%2FcVvkUL5Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwMNgB24c5Y5%2FBZyYoq3AOIn6WQEzJNfrtH1rpF6qfG9qGNlfmZCV%2Bux4yqABjCktXBEWQPUHaiSLVyhAH0LRg%2Bs%2FlK0KHeZjUVbe4lCDYF%2BTx0NVv6Xl1C7RAqubsTXzwQc9teofR4qxQq%2B2qz0W4WYpjBsTF3%2FrBuk0WfPTex6NlYLQZCE34jf%2F%2F82uO%2FDDpq4EpictjYp%2FeGGUvApcjghFQgisYEWRMkO6D6LXXW9QfFLjK9HdtW7LOmf9aKpGgVltyf4CXjd3N42hg8f6RR2xTgqDBFIHR%2B65sOLqGoi%2Fz8P06mp03vrtcmIUQHU2uv11%2FMoStaaL1bD8WTRD6Qt0nqqyQ%2FMD8R1U0qQ01imIIAJejCPAJ4oqWFXMTMKZlnogq2MEy1tNEXxpThObGGdYPNDYSkvbx8YA2Q3oizObr7A1J7WLhcfolu4p1cbT6Kt6QMORXkn5hZ%2BAyZVjNEf1b5fIMS7cnK%2BUWbbFyeYlYBIHPM%2B6QPTWoS4iHb%2BpYHpr1Pp0fTzwAbt%2BkIIY1WHn9r0bRtDTrdykxk1WEv0ogbEyBbGYk88rIvWyNstAYIJ3eA4fH%2B6AGVjzzFtqLKyttM67lDCQDXuoKy5Hc6kpYQO%2Bll1%2FHOErUd5sJvudRw01RE6QOqDZAjEDDwkba%2BBjqkAW4CR%2B5ot1cVO7p%2Fi5VP6V8TC4H0YxjS%2F9Rp3BxLYTB7CySMhG86uZQR9lEOLLNAODyLwkjUt1LhBV0yt5EuUg5QhmOFR0AAWRc9h6mvwiJygkVNDtXaSp45b7SmGmyHlzUGZ%2F%2FLtBX4PlHAvy1mwOSj23uxf%2FaxsSYEPFpOZfi2epWXc4Tz6fCNkqkPGbdb78g44j%2FFccMIX4NZ9BS3H1dKpY41&X-Amz-Signature=141ca0cd6159cbcce2c88532bc8cbae3fa0a1515a6fca2afdc86acbec57cfd1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
