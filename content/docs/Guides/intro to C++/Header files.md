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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLT5O2D4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGiWKIRyt4TFcuZVCBbwENuQkabOSQL2GLcozTFKIINAiEAg%2BC0vMbQ1Gmmi%2FYEhtLwi4iNq4HrWEFN7ZKVxw3jQsUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FWPr8NyBsTgGr6uSrcA%2Bs%2FBmhVb9GnMjPB7yLyWUb%2BScEXdNhBylx9d8%2FlUZSN%2B3S3sGvYZ3dGsYaccoygIOBUr63A1Qs17aW5CfWaPlPqTH4F%2BIk%2FQam5i%2Bgdt%2Flym0PVVagQXK%2BHYeQfyeFfVlIseptnHckyX7qFTwlYAXFfzJPgddnMiXC8JmquTZPVe2N5wvOLmzmhc9pU3trlxNQWC4c68Y9KhBlGRVtNAiF6QBLiDpLj4ektqbX1UUufAJsR%2B4VPQ9a0gtsCDR8ZCVKZv1jAYkGWc852rFhqqNVvWdk4ROua6cn5z5dUmFG7eIKk4I8jV3S5fetDVrgYgXTCuJNfWHzD1EizKMxMLV%2Bignmtdq10cNqI%2BLSqdOWSOd4qLJFpmQiEGlu3xrtwmXKU%2BPfnNpfWAjENicMuXuMNhlacwX4YyGvW64rBztF7SoB9nV7xmPnf8VZOviGVwNk9WEO3IvIw5c%2Fei0XQrYn6K6rmhGbcU1nr4vHS1WIlP396aNmRLJ8x5ReT3wT5m5PaAnwIER50HonluwXJPC7kINdfAdQM0iiqNr5LgKLpYqutHJy9YwCrTsPQdq%2Bc0XHe74utPdkNzdQ8FeJE%2BFwA7%2BY%2F0CWF8N3TOcZLOX6MrQIJe5PDNhDCNHGDMKHNhsMGOqUBlXOHCLJmVep5NbzMR7sGx4uugB4poNBMV5A2Pgq9R7cRKxsOm7aUaq4v8tSyGRMRD6UKHW6RetrJdedSno484DG0GdALL5LNYd%2FacNNZASOZ0z8gFOT2KohBtDmBMWqpnJNdU0dtpquA8yMtb1%2Bxc48C3a53PTDpLNrwc9CCrjvKXjEvq4Q8IxikTzOGej%2B2TBusLIqGiHEf%2FvQ%2B1IeQNP9Xzbkp&X-Amz-Signature=0d9707a37c5d04ae3a9035816b7901bd6db398bbcd322e2d3d4ae9cb8b7e6708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
