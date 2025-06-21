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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOH6OKC6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL1H%2F1Zw1XYHpMTvwagW4OqORYVdmCEQD0HjvhBx2D9AiEA3irfCmaIGpzI0LTZDQa8%2Bd6wOXgiDSKUYxCz2FNpAvMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaFMIrX9JlPDmqhNircAySVSS6trVj%2By7SxaJgr5bLCc8XouGgAJmS1xIKNIbb1%2BYm1tYWb1hZtshHMXdQcm1SEx29rZRCk%2F1Qhu5wxivmoUZxlvkWZxEJGyEgiE9LTzLUMbyxv2kV0j%2BiMMKGfhTMiit9fV630eet7KX6ybxhvSfn15sVouPKg8sDnEKrodcsSztYFmcCRA7NjtD6AB6Pv0AmcINnImJ5AqnLtAd%2B2155pUuGEAgtAip%2BnRiYAwQ5xg3tqH%2FbJWtqweKLUn4STa0qpfQC8oiSRUcI1%2B7xNwpvD5XforQSHJ%2FV4IUCWnl76HbQkCqxSRK4ROUsHOKpgeo0oUQhF1tVaiw17Rk23v5keOvzsC8Ye3k6eG8eeClXUVbNiF8uuPs6lr8EJ7iRgVzXRcjO33RXktJdgwSV23p63L68YQ9u%2Bsh7Ih0JsShh24wIN3GjRGYaJhLYgv1ChHmFxvdz2YbmgWTABzIbYDrjT2F9XW01jx9zRAdxf0E6zKYo9sRwU3ijzi678hQWV8u75sLdmKRCrmhGLU1JmCBlYxBGOBW3HlB8sFdx5ATFzxHhBJ%2FQVsmJayJLg4bXL53sMDCejvSBUaKldOPqdgryAflzuOCEPc8FGe4j%2FAe0Wc4gbyiVsBc7FMOuv2MIGOqUBGM%2BhBZtClKJi%2BBpqdTtq194WEEJxEExsiLy0Vn%2BoYA6rKPXwKXCywjBcnbRrra5gObcGwEFIRWlkteTrbwJUgJrzH8a0MmYWGv4etPMhSXwrbZdBwoTyVDpXfDQfB0j8okQYE4kqYZ0F1QS5a6UXKkRiAOo0vOR0hwJ4RFTPdQuHEEx1X%2BWDlK9QDILKcsrI9qHyXHV4ahFqkI8%2BfAPxKWElIsVV&X-Amz-Signature=310a466362e77342dccb47168e875fbcac243fc8f466a65dbc283f21984494d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
