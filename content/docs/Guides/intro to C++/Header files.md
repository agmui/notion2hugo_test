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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5WSODYV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhj%2BhcV8Mmd85daDdAvTGvOaIDUpp5%2B7qM%2FhzxxMSX8QIgEsfITQiHDwro7qAFaI8QCmipI%2BsVd%2BGk9d4T4OdaJ8QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSsj5CmjQyRD72cfircAxbSax4DgstfQ01pE9bBK9BR9xDgpyNjAA1YEz5lL4%2Fk0JwC8xdGRLVROXJRApnk6XSYgVm1UHYPYHYDDamWma%2Bcz%2BZpabyomzti3C5pkHGuMv1UdHaY%2F%2BJBXw5q6yxMGr%2Fz%2BWeuaLCoV7j5fKo8claKLqfGGs%2FdoMHoIxWe2S3olWj2hrLE8zb84M2AqDkAgkW18Bb3QSzgjafE0HvkFLGFjhA7Z9ywHhji3K1BvDprSKZwJUc4ZXGc0chO0JWZbcMg9lXihXoRZKGPclIGcZx1BXvE1Jn8AhQaTIba2aTYETngvntlrkauW0%2BhIneWQmQNCp8BbXz4nmzIGasBIPwWN6uuWtnjGcJbBULKaG0gAve4nIZINqYum00fEW6J6HxzKmKa0N8whlTZCqvtcX29zY0hBi6g6b%2FLL7ITjvOuSdIUs6ceUdpWJCkGH5wyc0RDhKshRE9Jtm7Q9zumbJZ%2B%2BhAyaxOciydCtIdtc%2BtqUr%2FsWKUAFTrD6axdUgIG1qHL6FS%2BVmxJLn%2B7%2FJkU1WaEDpQecuvApB7999feX%2Bgfv5i9KWZ5AKgUldEHKE3Nq6OmTshY%2FggYTlnGSkNCucM1beBBV1WIAT8QNmNsiq1nlj%2FthXBngaWHbc98MMGL38QGOqUBrOVEWIOnohVp8384AIankwVeKKISIMnnfeddnJUR1urk%2FDHBqTy6ghcZYiss86SroLAqhDpGsJDa8lqlNCWAXWOwXkXe9JElFavKloEjL8UhadW%2FkD4KN4KogaW4IrPh5E7%2BACZdHjFR5OArwNbAEJU6HgEli4GdNTsZ9X9hS5z85tsdaYOPTm%2BzyjvKF7l36nFwHe42wUu%2BXtUwI7Eu7IvP9c%2FT&X-Amz-Signature=1325b179701f9047ba392d7048faf87682174029fb1c35d9bc41c1e8425ebc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
