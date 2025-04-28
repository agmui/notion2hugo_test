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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWNGBIQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmOIB5z1UlS1MepGR5Bq6E6pqxuZ3ZYUX2jTtX0zyzUgIgIrDnWx8sNE%2FG22hrr%2BXXYeWb6btfKQXVoqEI60gYxDQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAGBX%2B18dLStKe6c%2FircA2PmQUtbQMTuk0NHbV2Q7LtgZSL1lcC6bEpZfJOci3kSw5P0nEinUFcCBz11550DxznvfW9V1qotjhHgdnFiT89ubDyGcuSmgbQ5jwEs%2Fc1nzOD%2FMPDVrnBHtp3xEcmfBzS5GwNYM0NStiDU0HoRbXeg%2FZUoYoaOcu5JC6Ya6rvkj0qkyfJMf9as3Rp9qdk5FKnah4OMF0wzMlgn%2F1lyf4ph%2B3CdP0EHJO%2FjRLBiEvqWs8mdBmUwGdM%2BIkrZSYXSrcinZl5oGsqi62uMkmb4m30RLBS7nPXMZpqp%2BboyknYGuiX9dS9f8QBaznhpNoNs0BzMULaUiefhl8qA%2BAk0bXWxUDzLIRM3nVg24x6dMZ%2F9c8mFONrjjiZFj1fXwImS16wVumYutoJ3IFj%2BjNtfdxfX06oIMN6AZBAz2cfBKy7fusht1CgwHL00XR8C8THiiQ0r11Wn9D%2Fu4X3kUsk7t3E0CfgRDQUZOEJRsmRUIMK2JRu0oCAsCWaxWFjGvDGbEt7PlFDEWgTVh7PL2zPq6fM66SSNiuL2MZZ5cV1bDerwgudl4SGYt%2FjoEF3xjrI18j5cxyxNhu0sF8fBeSC2eFnONp1AcflXj%2BBNzWFP%2FBqz128M%2B4ITgGq0KJkFMLTWvsAGOqUB0s%2FmCzeDf%2FnQv0E%2FeCZ9sOuk5ArVPN8oBMFSZEsQS5BZCALlY36bMnUdI7BpWwb1CkPXsVlZgGGf6kuNHjO5s8oGby1ViKROxSPNLF%2FIqW00Ol3OF%2BhjwKhS4YOF3uctWQmqZK0yM6enXoIsbtnffDuP6M0QBMzMRFKYFTPxPYM4wrR%2FaQJn5e82l%2FjsylrRYWhzvyFF%2FmvrWnjR7vNUmECwe%2FRy&X-Amz-Signature=3b74abd037a5d977b50473a494a0d66b4f19a27c86e1d12a8f29bd9125e61d43&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
