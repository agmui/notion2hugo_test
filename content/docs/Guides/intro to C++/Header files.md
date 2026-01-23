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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEYYJ3A5%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQC5x4T8Wz34J7tt%2FRQFcmVSH%2FepUV44mAXYXaxipEhduQIgP21i7ZMNnKC9N493kI6%2FUYNn4GwZ9g2rrbWo7BA0oIoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzd2nGmLQ%2B4%2BiAYVSrcA4w%2Fhl%2BYYV%2F7xxM%2FQFa5nRSVIokIEL1OHqh7oAF1EQxtaJ%2F1tdcO%2BVHS3IRwRKq%2BaHJv5qwrQs4uwqYm9oNTjevPHSoYWBDYnaDIo%2FisvKDJYJ3F8uslR3oSBVcUcai9LmaLhLi2ZbZJUukUWewgzSABA56%2FTL29GTWEZvzds9fKBkiMGn%2BRjl3SL%2F59ktx267IKaDXAVNSd6Pyk%2BjnQ5uiR%2FwxkpiRU1oVSxjBgrFgLQ1IocyJXcd%2B%2FhV5ifPgA1om%2BLWLYqn6E%2FcKORxY9v3p1Yg6R0FddbK%2BEZc8zhVsxq5BMbRaMwOt%2FcdMCbakegwUzhC3s8LhT0E5toKKpSZq%2BO3qJObF0MpVKFwSGMa4zfupBuQAbm%2Fl2Cb5KlDmItbJIOICrMpsSjgijCVW4hlyyW9%2BRHWPlgMi2p8CFSCeHG98%2BUP1qniIk2JcFm5z384EYU4jtte9j4ngg3Ejxt0RUFJRY5x1UbOvlRz037OD4O6yKTvL8bEPiK5nykXhs%2BiHYodVawEhyv8xKHPlAHbbQzUi3CYv6uHiqYKxdbJ7sRxl0cMehjnuIIrN1wxO0HDdcJqz0BVICtwvugtPV4lzwTf9ou8DZTj%2BI%2FYslCYxfS1VRYx%2FuVasNBp8ZMJ%2BKy8sGOqUBdi1duWQ1%2BJzfX%2F9HXzGZUQc87P8DsvBZ%2F9agcVIs6QFr5xn7fFHiltYPZIHmsiEwX3dQycXwli6q3Nfi6zyCPZUnhcCKv%2FX%2FMQRbPffMEJ96vpgzTOgUK%2B7Pp%2BQK85KLO2R0HJdwZxTOXjziSdrHik9vfeyGh1Bx7CNl%2FzBdKNz5OSOWSmuPCG6H70nf6OixrN6twh1UfvVKQdTnfHiyK1PSvEnS&X-Amz-Signature=334dfaa93f2efd8e7138c179817c30ee9516958442f2fc4751ee42df942f308c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
