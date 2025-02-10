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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOVYD6M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQH2Jkfm%2BwrgZB5VVW57MbTDE9QuJVrwuz3%2FkpduHW%2BgIgTrNT%2FkkQd7B9W%2F8nR3tzwaYHh1o1UeOQIkd0wzyP%2BaYqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC13U5nJXyAaTPXyxyrcAwQxBqWWDl0jH2tlf1I6f9Vbhi4qwTGlENYlUJdgqazbsSsvJWzTPhM25vKsP9pNhvbqYIyNuf7WyVEGK1vXahWGz6YNdAkBhDT8k8s%2BwmO%2Fe%2B3Ed6Q8WgbU0jLCSHZqLoieSTGRA84HNrNKdbvy4MfFs4q00d7N8WmTjFWmVc6TKnsE0uhk22SgBZ1VWiL6J2L%2Bu53zv93XF5kk8CCGXj4FEisjF7Il9R1RWcvj2mnKzF9E6i9wAbWiR2WrGNYd1lf2do3e7oGaF6jgre7c1jkfO4drlVDa7YrQjQxGgEqTncH6ME8XUj9O9LBbf3zqwV4V0vvwvoafPBGImdMUEbzrOwDfcrrWJUHCiBm753ufqdN463f9BkzjbwpEoN683pO%2B%2FGIC7lN7jiZMZuKWF0xCB2V0snxLAfZ1SLYmxYbiesV3UJnj7Yq8UwGHH3pDe%2BqijX24E86tuRa%2BpnJJgoDPvtrwELI8qilRD9haYWpM2sNOWhLAbbrrxGBpllyl9TN4ozVCr4DgHUjSiMXXwaVjYJ1r6w%2BZuuuCUV8Yj0m7V9fXZC%2BtYPPIfdc6ZVKItF1p7nQC4JH4q0Xg4Bv5wz2esSOZ7gob05T15BEZW2xHs4LYA%2BRzHY9Jd2nxMNvgpL0GOqUBS7KQZgjMI%2BUSi4RWLWNTp5yr3Dr1yWDbXQFgBOwml1iEJL%2FVOe8eDRQkx9YPInj6XX5sXAZq7lc8Y7snofgvHGT7lBoa9uDxd%2FuB5uk7tWuMi5bdZLJf%2Ft9NOBzm%2FVW71Z4P2ZpVunUUo0FSInwxMkqW5N10s2FX5MPiqpbIvShBRiEIu8uXoP6tDyLiUFLunF%2BREDDQfYIF0bhX%2FrkNB6lsjX6h&X-Amz-Signature=d21a2de481eed55b8e95284274438baf0557f470fa53bd0cb8b16ad45a8f12b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
