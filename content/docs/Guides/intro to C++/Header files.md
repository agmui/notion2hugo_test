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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGZ27MT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1MZYwecRnBvorh8ndn3e3n%2FBfusev3PaqCmC3leBvJAiEA%2BL3Kxs0nXJw5Jn67rY3X4d6HIOl2KFga8mK1TuGHfwEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNYFCce6Eseku5NV%2BircAzSrLQIXbcPuZaStfAKWr4VNa40PBQvt%2FqkqMR1kBvCDcCgvWuGXgAadgHb08EVBPraYhz5pa7SAITycPmc8uL7rlBQuiS6iK6BrvUkXvCTghtI2aQy1fbMEgEKMu6qY4IZ9CX88516%2B7pwRm%2FHGEHp5BDyFAy8UMzt%2FIJcQV4QQj9xX77%2FSxkGzNIlIXMTfQT3LZusCWeZCC6aaeUroCy7hdJaqjIvuQeAKWmFoLnqcQJorswTWavVHDl0%2Bq7KIlbAsPDX%2FPS9%2F9pkhHDNkyPXl%2Fw%2BGN9B%2BDrD1RwdTVad6MWBvzil8vneHMcMKdkpbRVgxz5xC0Culw83yelxaN6kjJ6wkmINPMfKccTWlovxiZ4Vxoyw5LfScIvynnI6zySenTUo%2FfX943ZKLtt%2FcOOVUU2z98d5O9s8sFvLb2%2BdpPYfKi4hvaEv6xPZl5jDFvxMw7EPVyYEwC4l7V497kGkNCUBfvYCF%2FPS5uFDxLlyu%2FL2%2BcNtWAYiuHpvxTrzE8PeaVlllb%2BJlzKm0VEt9%2BU0vh6G0yHJSIiPs9QJK0eo4DwoYzkflJ%2F3a34g%2BafNeVIgi2uj1l5FNMKT95io5iCZvmGg16xbJWVd4IfePvvuBOLcrJ9RjtIkpjthcMMaAncEGOqUBieQgALLY%2BuUvOzqgbLrhMEfM0eWW1Jv%2FM6nFi84b2i%2FjCgWfa%2FzOopw%2FtVdW91oHzERSF5brPDE9UekAiRTsVEYMDEHt9nFd5OfQIxOANy9tOeWXcpENmycGGKdixdznFZZ%2FcXro9YUZnJ2VZdQxTu5scYXxlR5sZR%2Br8TMxGUwTYbSsib0P%2BQHBDWeBfzB7JkyreAdbyhhWKYKU3XAiCtKZZc5Q&X-Amz-Signature=c2c3667643eac351caccbcfb184c67030b4e7b193ec4c395e9774ce17a2fe065&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
