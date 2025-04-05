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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQPEVO6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyRA21EszjWDxgkQDD5S6ayK9oHH%2FgaConteXqUI0q4AiEAq3HJYwoqPHmobTpdhWZWYGkyyYbO6kPvjT2KIIdByrsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHSWsTg%2BtHNn5okqBircA9DJk9x6y2yDSMdd6C96gmvOZbWtpded1rT9Us6gjxeGi%2FEB2hBDBLoT9Q%2BrtfDXj%2BEZ9MumW8Gzuhk5488MgYoH6S91C%2BSLVcrqGD1NX0PkV9Qlk2E3UNXuuRlJqlhDjwc6kYJ2OtmldwIYhr6%2F6As1dsNoBdiUjREN62jnhnAzPUPXIaac3%2BVQeqXJcrgM4Lp424lo8877yqFhGAS%2BPGo%2Bu6AA9bDE%2BDtzwL6KPUL6Poi7R7sdh8GSDV%2Be3%2B%2BGXVbhBZxw6nQtV76s8jjlJc14OXmlxHwvYQcH5TMJAbxTJFrsoa7CrwIlNQg6zTv7hpGjJYg5Umhr1JoKqVq0rnXqN%2F35DETs8Dtov5lu%2F3109o9xJWg%2FMs9eiH%2BgNNvQzvX%2FVLTpynfL8IUS44aDp09Z0mMScowfwWamPijBqHOZBjdebGRFuNMpMfqdk7PGx9qrvBSqM%2BpxckOoo%2BOoNWx8L0lPr6NrDKrIKMiXSnrRGKx7s5fop9bh75%2BwufIWCb1LTumH1EUbTqIJEIyZH%2F5xndZF5n1r%2FQ2XESYPtrNIxqDRP6U8u0SJBFNg3%2FxwYobeVy%2FHPK9CysWHIFIA0%2FUq%2BO1e2O1PXFAlx3eUREFJEgMmxTd%2BdLOIN0lhMNLCxr8GOqUBaACjOOJWTt8r5rSu6td5Xim8a%2FkYiIpL5wSNK%2BPO8H4QsjNCodzBChOVfySFnwatyh%2BGo7jCf6KDTzigHunbI0IokMm4cGqOOfenlkFSW1UTcyUhvBn5%2FgPBn5dmkPQftgIurycp%2F1%2FY61EZtkwEm4t4v44NDwqVYOOfikD2aP0%2FNITTw%2BUTpTDeceAEb0HqLoMb4n6WvL8OzGDJ7PkRAmHifbU2&X-Amz-Signature=c70c715a9f156af4bc51ab76935ef67e3d76997e07acb3729f9ef5f05a701f34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
