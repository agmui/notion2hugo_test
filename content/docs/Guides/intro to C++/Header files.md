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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR5IWPY4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2l0Y6GklVonq62rRzurGQ6%2Fs9hZ9rfS%2F8shMOOjWNmwIgUK5v3cnTaAgfKkiWiTr1fwCzQawwO%2FZMHzxqAsEH6YAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFMKR5AEloRt4ox7yrcA7P5G9aK5bHkpjeOZUd%2FqyK0GHcWMlMve9t1SqZjjO6%2F3bEZgFz3GBVKLgtzPzmGcKL7h0gZ4hOQb3S0XZAUiFEJWLQOD8QJJFS0qf6T0oVoVnTnWjCNwO4l%2BsPodxlmyE%2FMIwhymlvmxLbIT2E4VBJZKKW2ZVUMe%2B8dp3BsWw0IZypMJNetaqnvV3E7OEoXcyye2axogMxBJLAg57HsY1EdOLx%2BNp4%2BHM3sI5KguqnqhNsQLa0Peskfe1HbDtQruUSfx0LYMewC1yxcF4xgKjGWmDXdtRYJHI8m7CdLBjz5sVgNx60dRllaTLng%2BL7%2B%2BVzJyh%2B2ENixIXnF8bQQMeqzP9QhPzFPXmhPu7yqy%2FD0q6j4f7rCbxRRnbm%2BWdomnZlOGmLT9ixBLkGC8fzIWoq5fglcribk8oqYtdiTS76WruRY2rDwOTkVH405drlpz9y3w0j3u%2BARVjEpnxV3V8DB%2B92qm8eSIX49bA8c3pbZSuBKVuSlsLxDXls2UKXhO3l%2BFg4qosWGWgjzOahQzaOG5301BN2lO%2F2itbRZ9Vw5hj1G1i5%2FXnruf2lEG%2FIXl34ByJin164A5BB42X78o8aaQIDhSVHBzXDjFnKdNcSvKB0pwB2QPWO75OZ7MO70sMQGOqUB%2F23AvXNr6VBxIljF%2FaWkzMWXHoFO6MvBBUH0FliO7EpxYQUe%2FK%2FhivN6Uzx6u9%2FDpJhnE%2BJpe4%2FDpAefihJdYyERYfKC%2FxIft7WLXubqUkIJ%2FKzjRuVTrWiefpC5yFQDq7amDNUeh4LuQ3yRBCuwl%2FSQmzNHoWSoj7MxLmc5N08sGwpW95%2BYEV5sjfRFS%2BvVMCYl3Nye3ctTYqsmDIjoYQGSzshp&X-Amz-Signature=6c20fcd32a37b42d861fd8085be4e9661391222f9b2abf2dd1ac3dccd43cb4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
