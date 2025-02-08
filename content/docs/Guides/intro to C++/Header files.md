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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ46XDQ2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGYJQgsmRHrTgXCiU%2Fe7XKu%2B9HGOqRisU2b6IBr9qNmoAiEA9C5aO1rF%2F3Rx%2BePq7RtND8mJVG%2FHFulkkvuzTC9QmJIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEh51qU5zYBBX8%2FUCrcA42Yh8Y5DWmVSE64WeYahySbcakvz860wYNZNVIxBtfsZqQJFBDTf9Fd2anUhkUwR0ibyVvfhmR9qAk7oYTdk6B5e9%2BZgDVezWHiexrHA8KfQ6LygwGRDcPq%2BVMQnxWYybYjgFQbjVTbymET29kw%2FBM24b9ptOXDv045JWT4N5tnyERpd9VOuemuPBNAl2i9MLnGIxHE86mY8%2BD%2FmdRDltfik3pUqDFAqk0WsmtCDBVeWgTz%2FdORhpKkWvOS%2F9J1g9jQRUT8lVJh978PZqYy0qRyxJ%2F2JwewPJA846xGpX6yVSAyk%2BbvQV95weNyNQ%2FaUtKp3EWJuGPmc8PtmREcd7mm%2Fg%2FKmPF9iScS8BpeooHU6qA45r9t6QForS7pd2uhctCrWwkzvjgeL%2FfDXJA0iIZ0y9EB0SYNDibX4z8Jopw3OfpzrOeThmwcGMCJbB0upA0uZ1keW%2Bv7xcKRgHbdyy3U8NP7ous6%2F0%2BBtYRGYUXj5FviZxq%2FPsGvHvuGt56sk7sWA5ugek92ZDzSEn%2FqZebXoLcg4eIHEsoTFASWvIYUbujoW9MOPwOgu1Lhq%2FFfE7fKJwlCzEAUPR22MIWPOcKP3WnAe0AEQXYGfxajbXKb1bb4F53fz1bG%2FdaQMOHemr0GOqUBmWowWcfhhoGsgrr6WoTqIcRnFMI%2FqWVrw7oEw46DFOIAig4z6Si6hDwjd8KNOku3HvyPe7j%2FNxWRbIXNUZ7SO2TnL7tdM%2BEw%2BDjp98oiePjwHeZiF65F5Jhzl0oGoR5iId%2FeJK09c7nlyYGpuf3riBLU9H6akwHu2L%2FnCib%2FfuAnBBPwyFfSzxVf9AthD1gfdFTxXj0P4oSm3SbIPg%2BJQofWmFKb&X-Amz-Signature=bbffca3d1816fe2e98208a17b534a1817badfe51eaebe58d9cae745c033247b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
