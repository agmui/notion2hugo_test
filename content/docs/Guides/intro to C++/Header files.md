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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTIOIMYT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDnD%2Bw7lQXHb6RpvdJUzVDJyeDFwU%2B5%2Bb3b%2FGoibV8JUAIgZaFW%2FLibGPsJaG5sQLZhjueboFVAKM851Dbtu%2Bgcn5IqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7nyOQsSGeXq%2BhduyrcA9KUIWTvUvFsaYzWzsrWgqydAvNi6s9latByYqtyTJ%2B4FArRJDnGJCmV5N%2BaQo%2BVAzsmoNUYYOP6TGs%2Bg9CbZvQnucl43zhY1FnEbPHt9HAg9FKWOv9KMhCkWuDuRlZrl2DdJZTeEN9lo9qN6dAGE%2B7lPYpACT7OJE57o36QwoPe7XRIS6MKcHYs07QcI%2F9v53o3lbih%2F66C6mponANT7FmdOqvmqHBT7ibhpOifOpSBdqLNMZdaC7XV%2BbVIap%2Fj9CAmIQoUUcsgJg1bbkQZ0CWLOmoTePqfqADYvg8prOtzqV2SbegMHGnt0WOoI8HyvrEMGJcOZCNbXI1yjeddNqpFflmAiLv5v9HxyUb6pxXLNdrS2Uzw%2BVbKgavg6KIBrYzHnoWJBZhHWrl5gs89rsvgPAEpcax6gnDRgSXh8DjZ0hHO23cPsy6AOEjJ93o%2B68PSON3qw8v6EUNkwctL8DM5K5zOJckEH%2FLTlLPHPfAvyqLfSqw53c%2B4uxyko8X5v03hTlm7cxMf5DjM4KqZJe9sErPjmBJvmH0YhGpbFMHiLzL3J8pxbUwvDlq5Me1WHUrvlv2WCK2nUv873ZamhV9RY%2F4fSf87a6cayKCiwxuA6g8zgIYWD%2FVGcQY%2BMM%2FK478GOqUBsJx2F6HWl4Y0ib33xwvon8lZvw%2B%2B1AEx6X9gFCYCsXLWqkh63gsURppftCgGyuIOJvXaQPfEK1gYYHZmbTTPlCpd4xttwwyZ5r7JmTQsotCqNZdoGWtEE977YtIbjW4JhdOUIw%2FJMM0dtzJmVrbmO9Lz0yCn3Cc7P72HLdj87vz4VF%2Bo%2B7WBNP%2BBz5bP3WbQngKU%2FnTKMEKV01BtK7CIm6qrkw9D&X-Amz-Signature=07f30530a7f521207583e9cf2c7b74de825f03de7348b7c22ce56ba2ea24d1df&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
