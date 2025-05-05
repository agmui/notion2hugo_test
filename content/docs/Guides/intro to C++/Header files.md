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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A37NZ2A%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGB%2B3UVhxxzfqfASy2wFy0nXIEDY7SlQPTE52VlGy8vWAiEAjHxyf06S7672Iez6Y7wzlXzxHlp4jwOp0tJIXU6rLisq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGTVIKaT36MUq8ehqyrcA7mCum%2BJlaCg4kZnzH6dU%2BTjXfK0WqtKcZh25ABHdnjv0J%2FHTiplfVMjVdUrAsJI5fwsqsYOM9l%2FtIRPsxMJRfCmh5K0pity0gIUbAk2WzjeSDnT6PmKYhuR%2FiISq6Xo8uE8ZE2zwhW5uZiP8M%2FKNdCQzXW40PJdYVrf4ppx%2FVejPzwiOwatGpaEazk%2BRmhsmkr2zg0fk1CaWgWxhWFXpsgTHT7XUPkoZ%2BEHo%2Fjcbb%2Fot0%2FXr7OWwahY45kRDc2pNYbRQ6e5DWV85nn%2B4fhAz0Cziz9lWI%2FMMSBB%2B1At14eLdOqVZvKNzcVr9zU8MVYX8eYzfO%2BXgSUHRUVOMr9fSFtFXn0c2uoAKPEKmxTaWIOwD2s%2FTRMpHpardvbp7aoa5fRqYLkwlcXWxuUd57%2FVnkP3tQDBl9wPeQK%2BrVbHtL76QpJ9olDpMZulffqSckt%2FMvPONDkbUvbXvBI0rwYUXeSUUd5Uj1cAvtz%2Bz2Ud2TsfBHMP5sd4%2FnqyYRXmDbZh%2BEBD9ILGMP%2Bc7ZG%2B4X8HAX78z7u%2BGhEu8E7G15ms5D6xGJrRXSd8Dq4Re8TtLv4lJ9jp2XfRsYS2fUBs%2B69xX8QpqahixsxewF01gFSbpSwqX%2Fh8MdyXoIetSXd%2BMMSa4cAGOqUBMhCp9pZq5vGs0XhbhJ1G9uqJ2RbMPzHF4N0yjoNb8UpQd64Z09zHnP8UhIvYbOMWf2f%2BbUSVG43mt6XbWyAn1PcXNEZ%2Bzs6H%2FSNeGBkGNMtyEzFmvp82L9BPj2zRJz1Pw2wkE1sEJrsx0PUpVHNBMYgC9ImVadvpdzIBg1rKazrOOy56tjVkRmcRcnYR8%2BQCBNpsO4wqrFPyH4xivxi66%2Bav8tc6&X-Amz-Signature=34a0a270f8b64db06f777925d8940cc55eac154638f79efa537d86ab880f2fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
