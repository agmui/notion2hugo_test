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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ULKR5G%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGNWxLhJ0jgmCMZu0%2FvJNCPclaqVfMYrnNCAdleE6zYeAiBDmLYVTvkvtWA6JgxYe2hoiYeo%2FE0BirMUa9MHowhxCyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkv7ECC%2BnoU3ozO1lKtwDLgU5E2AlLBW47S%2Fs5a2OB9WbgRsOV1LejmXRqHK3VDgyHSzOeDpUrJ%2BfGzevyU9rsvCbrrjZzjeakoxDFXHjGvZRxX6ChGhAozEZl5Qcqk7fGljkrnlWg6ZHuXf5nJgVD7iH5D5ml4OQfelu8psPcJ0hdxWD2YHcMznu9qi7ynkIinlr0nU4Ty%2FLZ1m%2B6IWruGRXq9vOerfbplyhnIAA0jqbUArJ2HAyuMm3zwIQfMnQ4m8vpuQ5BHvx4qBAEzKst7xB7aBix%2BxiUT7%2Fa%2B8%2BGbWFgFrwBv1cr9DVM607NchTb8AXAkqA%2Bxr8XAxFKZ7xnju%2B8WtxJwNpF6PZvMaS5RMLFh7TtqmNVoxf9gx9Pz3G63YhPy5GYrEOL7CL1ga2Cj9yUYfwgDOKvlzAbMjlSS9a%2FxeFCCjtAixrP7oi6A2C1xYVHM5csFVY2Vt%2BBjLvO42yflDE8iT5d8PCvoKzVI%2BaKnY44NFNyb2hy8XRajcN3SsgxdEmoEYTg5I2s07DmcU%2B65L%2Bm9mab%2FsJhDqqJSCoocoQy6C%2BfVlzCb9YULIxaFJZzVgl%2B5ierjaJn5oDWvIIYtOlPcJdFbCOhk8ATiGU%2BThIJPDQHBAmPaFwITPqi6nS2JvmU4MinHsw3ojnwwY6pgHhg5BkoEiRRG3HwpnCEiU%2F0Ga3OVdQwpjnWwrSIkG%2Fik%2FKH%2BkY7XagtuVPuGrsSUW6xqL9OEtBlpp5W0y9XaHjZfFIcIU9i1qabGh9JqxkZ7WqdqeX0%2B41CZgayvmkd5j2dbVGbdgPhtOxfOQAISd3ESEBs58Gv5PAZ9yiti5BiW0NBSedjyVObegD2yEbRQMsK2Tzs0GQtf7VYXxjpt4WIX5DtH56&X-Amz-Signature=df3d7337c0baec940c1194e83c0b85f63696cc6763bee6d1eb2f256c60c70b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
