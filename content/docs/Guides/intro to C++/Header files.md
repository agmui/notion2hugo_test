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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRFUBRD%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAswmjkaqUbu3C89kNQTHAawugBIPf3TUfgvDWGosjfAiEA3yM4b8TmQ7%2BTTPFPEY%2FnpG0hyI1nJ6EGW8kFsdiIbmEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZbAvDDoJcXzQdlZCrcA0fQpG%2FJZcM0bQFDdaz9EUXcgQCDbPcCGtSUG5sHrgTHYR9jJVIy5w5D5gFin28Gdo0K5AUen0NV7hRjFY8KJFSs7SHcaVJJMlds0RG%2B78AIwoNUQVtoBV8bRq2Mdrjt9olgIB93tbEN6b9svwkVcalDVPlJewmUAV%2BPf7Ij5c37KUR7dtpZBTmXEhk5zNsUoIPBBBtBn0o%2F7fr%2BWZxs7%2BKrHm62gcntnEjljLsGFqKwIQxlPhek%2BDtZWFhoLyzhRbGrTV0V8vfabIGzdFen%2FUMPhYMuH5QiGYYSfOTo0hEEzbn6qponk0Y6xubGsHl5pe4nvmISn6S3vLz%2FibxY6219hH9aOBQOkz2zCK2H3ByLW2EkBA5pqCSpIzHbynRptwJ%2BVYPvIldSYvmzDcnfJiiAUlnmNpbaDtHNX%2BUcOfc%2FDl004gldoJcFgiLF%2F6O4hwg6IR4ERSDSS3vHFlWobnsHkkBzCcY175Jf0Q8ReF4fc6kxMr%2By0GnXeJVhsSUNsst70TmUstcm7KdQOFOmdKt8yBGgDw2io3h3PLQbG9DfTbhf3SisQCE1Py7WQNnVkM6geQ1vftjzCYEt91fQq0DPnnVzLeQRyjljGvPFZGYqUMxBAl0KHFYs38cBMM647sMGOqUBO1mkExjlS9nuA%2FtlYNXBK3g8Pb7a5CMrcybYgSgvgc0BQsSI2Z3iMegsZpB3DtDj%2BrZ0cWZ9tqFBanX5kQlHzzW6r80Vsvc3HtOxZzBMsJJg%2Fwb7hifDA%2B7tPz5pzgKGUzUqmotool8D5YHPECXkoDBmkb5VRsr5nNQXJur7mqvy8HXpNN5KfE3A1U97Ddua6m863p7iwTB0v4ZYDH4VjG5DHwvL&X-Amz-Signature=604f870f6ac8922885841d0f489190c97aacb5ba4bcaa2af54a41fcfcec239c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
