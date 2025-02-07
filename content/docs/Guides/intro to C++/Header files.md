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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRN7LYSC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBA2BmvFEekzQdyoInwqzIdtNAdoDM8Za6vbDZy4ckClAiEAtnxQKi%2BCr6y%2F7yvPiBX2sFww%2B5yjrf8wgaOO%2Bab39Ksq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDIPo0BLan1Uy4sSBSrcA1hlr0uQNxQfsBVT5nPN4qYp4DXrJ4oJWdYF5cgOR1DNRU5eFPjb1xcBAuwwZuv6CZ65HkJpksIEOy650xjgzs%2BBjGptc9hTCcY37lFBbt15YlD4tRuHgwZW0h9aKlX6J2hLpfsybfjX1kBexTzh8OFKmHsj0QRfy8R7CPpfguPp%2BCEi3Sq6aXt%2BbGvdRSHlhrADArcPKbDS42KAD0Hsw%2B225joaJ%2BJPL%2BrjVnnPfZTC1S2T9iLRiqPV3xEm5t7YO2JrQNBktfhRJSb3YW22eu2gVmmsYTSgHGjOy%2B75L%2B%2BQ%2FMiGQRY3CwSaqi8ms%2FLvO%2B6cXvzA%2Bi8lO1XDoi%2F8KNVEcZXZ%2FYfZbEHNlbx%2Bc4Zva5ClLb27iIvoVzB5r6Bwije6zj6QPnP5Ngdo0YxtmAQNmbsTk0SJ0yteMd2z%2B2bzuhxLlZ%2BdLZW08j%2FRQGHUXWGXdgh8viDbWC%2B2BYAuvs7qPSxXnUmnL%2BOBTCSUxA3k3OW2BGcH%2B4YKAqXke2EmV52vLn3ky75hwk3UUl%2BhDsMKj0%2FUUG87S7NcGokQp6u381iUa6QYMmkmA0Sq9FuM38CkF4LqqZ3AhWfx2PpIjvhjAXuIGqsQwx8pU01WWa5gf3xmUr%2BLk%2BjwobaqMImblb0GOqUBU05rnCDMM1GM4hxe0FWftKNzO%2F9tTiybiSUXZdyCId1Y3uPKgyKxHhx68%2FUqM2EK%2FPEPXafAD892KWPjGwBJZ0ngItePkg1Ggrw4%2Bn6rH2SIW1LkV6tUv0TQi1omqsVE5ciEIfiFzEkW%2BmN9pqpdfz7CpZUtfpiEuhXz%2Fn%2FrmMPOfEnageok2Spsu6%2FNG1mHkGFoHS8m9AM%2FxfyYrmvoL%2FnZ4FNO&X-Amz-Signature=dd7352776b0e4bd5e36cc6fee0ef0c49b0d35481d5e1d36c62d93b997ed1c05e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
