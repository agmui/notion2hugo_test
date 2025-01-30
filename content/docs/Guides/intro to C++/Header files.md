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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUPZEZKA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2WvXBE4UrJy7gxJZ1C33M2lGhXkjNAg4wQHinhhMXJAiBjsbwSIEbZvG2e%2FP38WjXY1gO3hz5LSC5RARf03MmXNSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDVGs%2BwuMho6XkaMKtwDWvfaFDcLuQ5UnkLnvzstgPLiXLyVZZu2%2FoXd0ahDNubDG%2FDyC6RaSCIiTks3F97OdT%2F8jZ2gyrciN4vnQrDZaUTrQzR8AZIAnh5lmp%2BKC79Lq1s9PxmL7yKWB7Wl5l9D0PPd5Bi0nqb7jjO%2FmXllFiBeLi2vBZWAI5ONyzxCggRxJJmOKbluZTmr%2FXlKC43Zkr3zMKlbqcWyFl7hBJ8ls%2FugRHBO6Hl6HV%2Fz3vwvzqzG6fPFE051fP81Enbo0%2FNm3pRwOESEiWkT3kZqusoDSfW1HDWRzfYJ38aPTKPXj%2BYLMImP4XYH9PMPj5ZXGOFSytPXB%2F2t0TwhDZ6vExYqK%2Bq85aupoqRSJwze2mmuzvL5lKlp3Hkyz%2FVIyNntREEIneSxpmOCDk8SBJ8%2BFsFF0UCeM75aKQXi2lhRgvU9ng%2B0WpqIYyAk%2FLJdY%2FjqpxntGUMNRcOv2wPrimLrJx6dHDKGQH9IwRzx3MZ7XYdFLyEzu7sqPTQ4m3SxtGdhQcx6szRjuRYkCHPVgwDKc6dwnl44pu0vdn7BzKbGvMLxbV38jReDizoygkmNoa0uiGXv81zYnVGDTsrNjellVZkDFLl%2Bu195B85xCy1Io%2F6r9nw04wKXPad67LfJe2Yw4%2FvtvAY6pgHEfn79msdvOgaCB7%2BsipnjinQiB2oC2myO8XlgpaJNgDTh1L4nsBBEKrlUMPVsqtEZ7182wzbLADoDk1HttszBTlhzF%2BY9OGqfKYoJykWO7hpiZYsyL0cLw7HB3h83WB6tKrKI3YWtSrs4rxmD9HMOzyltMq4PxJhj5d5UERoxMYpBjEmsonbuq7zZpe%2BPVsQZo5vxbpeF2sfugpq5%2F7z%2Fa719nmIm&X-Amz-Signature=1e4c59471ff2ce763936affa7d1de5a4344a77fe99b9caba8cda5d9d53742a05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
