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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZASLU2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIB6bXVbB%2B8YccrYp3Ct2c2OjsZvNQMxFpoJOTMpFeBXVAiBUITbIXCLj5FQtAZON4B1qr58Pk3uQfj3fd4wAYqJBAir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCCrjlVdMbFCh7P%2BfKtwD9N5%2BbhcqCJ5c%2FNY7cZuwyyZjBKony6D4cGBIKZCjkqjxxVtqDeWe9LpLEJjvIiJhnIzbx85VD%2BRpODuAAlTx5PIh4Pg1M4yZTafHCoQ5dejJb1qTKPXcyn%2BlqmPN9847NRED5AUWIduHWHAbQEquZMsFmbf8%2FNnTn17DtqoaolLuOsd52XtI2%2FSxh0qm%2FHIFV8GVKIQaSZ20paZrPdmGI%2Fmz3bp5%2FKXmo0V4rcHSbxF9ymVar4Dl%2FK5hSHYpLMYmywkaRV2lq%2FEpfD2MpSHBVUJQSJwCP%2BoTVpKiz5qUZKn9AXtCHBTaSyc6YmQGd9CFWfWvkfv%2FvLGbni%2Bp7l80fgZ26uzTKTsUNk7eWUJLPwXtSqCDSN2yu1tQ9w6WseSiOKTE%2FHSYVK%2FEys8viwgRweGJWBXtqGx8eududZtWN%2FQdFwc9UA03%2B4UXtuMAMDxW%2FaTShKM0Q8u6YeNVJEjkHaTjyOIq32uA7muj1w2jo%2F8%2FXad0a1q8mNZJbK58QvhyLkOynsvvp9lm6dEi%2Ba1Qm9%2FhKKRN0vgJ8uyIMf%2B7NZFZVK6yALCOQe6PT3gxsiVsJeHDIUFrHjuAahWwI%2FD6FStemH6Cqr64E%2BivvhQMJcw7aB%2B0Wv%2FPywIu%2B24wnIyYvQY6pgFMZqUHK6FhGx6U%2B5DzqV7E%2F0PGedMrxKze5U%2FcqYO3SFFZG51gzOBHVkWeXYDJ6CX2Fdc39KcvGrLyujiQF73LS8NCGwH%2F9NdDIk8FLuEVRi7Vxu3wW6XZ9p%2FMPo70sAOyvuGT8d5A4XFkTXHfERDC41yKh8yx5MUmzw%2BTjf7%2B6ksngCOjdcAXen0wDiJWXMl1DZJxGiEhXeU6f1aN8fFCt9T0nUiw&X-Amz-Signature=2d31802a14c530e0f862ba1100905f60a4ba09430034fc22df78dedab425d97f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
