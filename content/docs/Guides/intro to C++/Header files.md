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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELLDRE%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR8QZUX%2BK8g8p2z2%2BLKqs0NXZRDVudr8VBfyZwiH5DrQIhALqhK3yOOk4sQFiFQE3plv5NXcnyV7rku1MRDeaWgi0SKv8DCE0QABoMNjM3NDIzMTgzODA1IgzmYs89GqqYAyesTRgq3AN1LeP9d36S68rPs5Ka225tzW%2BX1kniX2MY3Gv2OM9PEiM7dliXOZO2F0W8gujUYulet7PJrq5VKAKS2SLBciYdn6mw9cL0Wb0asbvQTd%2BKPUYmtID2jMXq8yqvajd6iIIHeHCNrv7WM%2F3yCjvHJZZBy6eHHf0KmKxw%2FGjmGz34c5bwVr7PTaDZ0r4HcTdjv81UM%2F5mmZxbRktTgd38lSlQuc19O9Qg7jedoDEAadMUJErQw8JxR%2FCF%2Fuxm9%2FpYUQGLswLCXPrXo0YIOAmBqntfOWY%2FtA9tTcAHEzsMx6Dc0ujFr1wNtL8xuMt5At8bmXqb1vOfB%2BSmVu3%2FjBHotJFrd8zc%2F%2B1ddGqaUHDxEiUX1E8ri1SI1TOSaCsw0g1VJ1vNMdmZJt%2FF1jiJfOqR9a0oLKNlI6sk5HjGeES7BvvOl5Wo3rGX%2FFCzgwUlWqGu4a%2BJfAeDfT5r3bhaNzGIBYjmZq7Qh5n7AhCSLE1ZTGhqDNMChivFeH%2BidKA9NS6Med9abittP2%2Fz7xzcF%2Brb9MaUV08kVNYQ31djgYqps5m%2B497DL%2BABpo7thYM7DG1YuwKo2xd0g7G3NJlhcY2eg9uUEQP%2BWsS35FxcRaqsditKjVpjXENdlcW5dxbx4jDMguK%2BBjqkAS4SRCF38Pj2xteQSxihKzL2LMrrO%2Fsl4Bcy8dDWo5qguUbrwW1PlnMMLmaMMr8x8iBW6TCojzmtgR9lnwdArP4hdObytOmAPQqxKM15xRywhi46xwDR6Y1KdMAWxDED1koDwe4ps444bCwjZ1RNsjb6Lb0j4LJtnWIKSx%2FfmE%2Bx%2FmX%2F3TmEr4lNKaFfA6A8Orqy3xB5fRi%2BySAuAEvbdIPHyMc5&X-Amz-Signature=8429688cda3b2e793a002c000164f561cc0d03219cea671bb84664e4fc0c8e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
