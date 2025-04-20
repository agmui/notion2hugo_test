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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV6M72SK%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDYtnwWtX9eR8vv1jxHvHdwiut76oKIW97IpiSavBABNwIhAOHdMCmhx1L067xkzlXJTzNbnrEIis7TQQUSBjNc0ZE5KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwilkF5XxwxBco2Jx4q3AOOXpd8VTJK12BQbszrliZwvgT4Vpksi06TOAiyWhwqEKNHBbfhtFXD3QAqM%2F%2F8%2BVWgNaES5wUYwuKnL9cfbVxrF1uglIUEFeup%2Bo1cCN2QU9eOvlP1JVBg2u6FzeJaZYiAHWsOFjqVkebxOTJUkiD2gM2HdK5Z3jgzKhenv1I0LtDkNU5Bv0QPnkwpgrB3SwbZzdSImx3x2X8R6j2pVLEUBM7UshSWVlNpEc0Wd1sxkmzIagiCRPq7ur9gGiyCrkYQemvbh7QQ4BWEHBmpR2ozhmZxhDddkJMz%2Fk1c%2BvuxYTqYrJPy3y4UIqBe7ObEiAuLih7KT0O3nKGc5eiE6z5C3Tuu5frB%2FJsjiB%2Bp0%2FkIrFPJQdM9QVVoc9fPHVjqYLbpjG69uVgHqYBBYm561byfrt5jn5cCWRn%2FDI%2FDoe%2F0aF1F9mJcgP%2FKhFmSddAS1925cFOuen0or39KARjBRSEsRMWMaDcNSwftqF4DKPPNy6wiZVbVQ%2F4PNJhQMLMt2ToKCYbOvRyryjol%2FAj8RQFUTRo2asYK16CtDZP5FB80DNggFDBL3oozlRGb5D2nQ1P4sEYprgPM8FNNAvdUJnMm2DRu8d%2Bw76AhW0gkjLmyrlSuFW4uwGNmJHzTxTDXgZHABjqkARxf%2BuG2RSts99OjpXSM557kHYFzq4yCXSYLZUxOX4qyNaBofZVk%2BLkbZXLFzL7syKw%2FLf0T%2FTJmVmYMLmaUEZ9KU3s3UrhMICbpqScEtG%2B0hg7T7OiLZ59%2BTB24xVRgNT8Xc0sp0TS6Clil8h4wQ5N%2FXPkWrYVkyj4sfGc%2FNU567EQKjb6sASmCYf%2BU3erPapxNn3govWHo3d1ZRZ2z%2Bj3Jtfqp&X-Amz-Signature=5f126c292d0a65243aeeeaad88d55562b407362f88bf250191edf34637f096ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
