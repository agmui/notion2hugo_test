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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVFDJYNC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk3NF72EvtPnsBAiWMvC7VRoCeBuwf%2F7mPamuQzaR0GAIgUqT5RvixzW4Z4MkBneHjChJ0ckKvPrnRipp0K8imNo8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCBh9yCTFZ2bybAiKircA7iOotXoaGq4ctCulOj6Rx%2FwBocsp%2BNfoZcb0Iacg0WOW%2FH%2FLiqrMXZNwY5NNiro3%2F4ODce00K%2BNjU0hjo0Znp8IwykiEQc1ph8U8FhLR5wI1vSNVLIir3WMsPgKK4948mw80Ob%2BgKQPGaMxC9GZ%2FWXStu4HkibAzYXhZIqEJwgHSX0j7FdwSvlSFLQPkf6ePr46OyB52QdkGUz5%2FbssuOjUSD%2BRGLoyMoCZu4OJ%2B%2BRxJlrWj2DpCZykbLjMilLxGcuYVgMM9dLqoZebR%2BXuj8iXNBQzICPpTW%2FHNEF%2Bb5OSsZy9d7VqI%2F57iweeuVj69Kge4rOlD4RXh0Yd22V1YWd8VUTNAIAiUd5V7rRm78Pi9Ss7k54JoAVSLbyLbMVeXnuhmvPdJhEvOPIi%2FVt3t0EvGou9q9ALQosK8MN%2BQ5RIeLqNWg3mwHyRHZUL8CWXnIvDrWlpB4bDI8Tk%2F9r8I4Cb16p33w6w%2B0kL8Ewm9lWWJsJzPtGJIfH%2BKoeB0a1SSy4ZfSgYepEpAuGew%2BYcp8EGDiSV65qBN0oDgOP%2FECs7urNBzm2Q9KxvtqiSmZbUQBdduxGgr94YXRUgiDqXh9EfhGVkNOIAmx7%2BqYli84qXhALXF2VxR1Q2vGEHMIKdr8AGOqUBEOAJ7JZpqU2g7KJ3sW1tDtezr3wVRzMl%2Br8Wb%2FIbHYP5WNv6JqJRfKFWtQnbJf5XK6BpOmWnsCWOoyOxnRkp13%2Bd1zghn5oT6fIwG4IlX%2F2jV%2Fg%2BA1msl19Agk7Yzk9aHHAJOoLgC%2BIaGDClIEKZPX9vTZPbzyuJgmvylCf%2BXFvvDlnQwB2XEBdZLR8wwTSx%2BN%2F8lhRMuLoqC4QulBN3fh6IRYxs&X-Amz-Signature=619c873af0324b8c8711f91d81bf596073aabbbf574953fbcc4e1514ae1695aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
