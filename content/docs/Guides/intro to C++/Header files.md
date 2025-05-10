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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVAOGQRN%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6mND5Gyw3yeucGvl330MDAuY8m9hYpqnpGdg0SWtnFAiEAzlRKON1JqhXQxTj8GQsZAJZgffnoCKTk%2BE0XUQRr0hMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGpBUSoGABOLywr8SrcAwAhLHWazOCT4o%2B3t1pSnoE1wdyoKsHw1GDHdfvLGDutGybkIYKJ5OJ0e00bVgwEASE2DgWmjhDSIyP2uOLe15f4DhKWy5GGi%2Bn468Nf%2F6xV1ZMYhx%2BbMtutmlnBX5%2Br9euKzbvJeHJGe3jZn1Smvx9plc8RJ%2BiPWkBbp0S35zbNiYob0srEVsg8LGdQPTYm7X8oVwI%2BaifONR6K4ElyHZuNtmqb%2ByShJ0Y6%2F9QHoceW94%2FuHGNm8h9XO5f0HY8FOSVz%2BoqLYX6Z9j%2FJy%2B22UEKXoxFqj6iDQZawO5RvadujrBv5wqaytg9%2FD5HzcM5Fb7XY9%2FJ7hmO0njYIglksvQ8X49XSgvizIiZyyLH81VuHz9jx7%2FMWDfhL5ERt5w6SvUDFkEk1SNw6s5kl8NatlSk%2BDXFCIrdXD5fQVa%2FEF9mgLZ2uSUE54HddwcKwZdILZSwmrPyMkIL7cHlvzJW9ah0QxjAk0bEjawatqV77hmb1wp%2BxoNfZeqPhBw06BBCpILqf9CmX5PEQa4iTfrdIotA7Wmg3ayeYM82WgXagamGKvC0AELyVNRsyIJNU5%2BX3lBjgFqI01kYYxhIZ07CgWdHP72IY22TdQj5LKxf%2B7bicoyNBOwSDElTkBRBdMNDr%2BsAGOqUBw55WcYF1y54AiGagu7qJT0Lqx5M57KewgRTYQET4F3bCUdJ42duFSPlgcP5yNWV2r15fgZJgcUarj89%2Fh3qfLj9FKz5vgDRTX3SaK7xhHkbz6HO4uu9jSXcONyeJHtOL%2By8JJiVRmDlrkl2LX1pBfApXGkyv%2BztlzSeNMtFwjnuSQ6RgKpvpJYt8fEF33SsBQ0kcOkeD1scabSjdqjqtizBskWKO&X-Amz-Signature=1506966b581e22c28139244735dcfea85174872ddb27b5230054a55296648f34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
