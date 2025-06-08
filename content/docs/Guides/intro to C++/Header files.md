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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBTF4DR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBDSkTNsyMmkit14MKPX0monMUhxvAZiJXuku7cfs15AiASynXmlM02LfRArRVUlI7%2BXtXYIts0rRtjpolH55DmPyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHHJdqnyG93fWmpKKtwD9lSJaFzZ%2FEYxJX1LCxFzDbgjzfwgFh1M3Dz1SpnlxTYWDGFjFBWawkXrOrULuwOUXRrHFxpFYniYeYPaAdQihf5ra8%2FNT3UzqQ55WI7sTC3x7uiWg3iF7C%2FYVaSkOZwueSirj8xkY4j3tEhhFMnIDmDyawZk9fcH%2Fwe%2BNKPSZW%2FduzEXnU8M8X1nmpNzGYS4gGQ8WkuJfPQvdjt%2FlvY1L41yY3Px7RdkyPfGVjwpTTJzYNs%2BOGfrlQaFRfwmntLYCJBCE9Te7qF%2FgfI7g3mVaxEeMrPUdl0PtPAKosWmObQvqOn07EKi9sFgd0CR3IOE%2BhLAX9H7vdtSwgCWE4rKEGXfmUj1CXoZXNUvPcEp6fgSXQ%2FG%2BQt7db%2B9fL1p0rTjjyojuK1VtuwxHnq5FrLkWOLKB0YqloddcwJZad4eEl%2F0%2FLKvaWcMVL%2F2J3kVUvkFdr%2Br%2F5qm7KZMmoUT7arrEXWRr%2FyutoT9utNedL%2B29pyvxEvVPBRas1oZhZ%2F4N3XGBGRCzI6LCX0epfZMMvzBWkpAgvin2zPxLJ1lFeBrzd%2FLTTUoSE0l3r6Y4VE1LjpsnZu%2Fwttjfllxnnl%2Bh4MyzuWGSXHJU2auNN1tO7ckhh2V9kC0DA3iq%2FzmRcIwqrGUwgY6pgGTsvNcFVIAhBcsvkHudpAVcssLK%2BRPtOnnSJYnglfhhlmOQcGBrbM15LkV3gGQEkyXHudnSyXIoXcjMn1RGrABJ%2BSh3811Tj8iT7Xfni5yJ6cEYv1I5CCB59baleERNYTLzrjkBgO8u%2FBgtjR9FgJcPxp0KZXBZXdwdxZ2ZPT%2Fu%2BhwAZyk9hmPWXlihrPGSqJyD2h374YTPnjN%2BiRTWraN%2BUMDqrdE&X-Amz-Signature=50b19c3920fd560155f763fa9aeb6dd7486155fb53247fb5030640d80fa4e381&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
