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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJG4QARQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFsY7MYDe4jFrty7usi7aow9KaTp%2FCQkq6adbLT7ztTFAiAiO8mc4obCq%2B5uISVSIpSUh3w2nLy%2B1HHiCCN75nYBeCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFByQj%2BIDHy5qHJhKtwDs%2Bi5fhSeqJgMvLdJFQYNiU75pnMFDLwZufahBfZR87mrOIQpbJit8MqqhOKfcmWHLNdwkrgwXQx9h6bv0J6oxyPFhZN6KdgGEqUP3tKLWqvIoJct%2BHptlUVF8rZJHHeDOiJFqep92ZGG3Naza%2Frjks5bdCYv%2FrjKy1b85ZfLioQeO3tiBa9vyzHJGcu9ltAKcz8%2F9OBeVJ3tB9rIGGE3CqoK9i3o5PO4slFxtc4xcBijvdaYXJ8mxXEP4OfhGzIAVjby2US%2B46%2BfArB52NPCJzCnI%2FkjJCVqRRVuHFSzfGMeQRZ6Wrsm0iDMysP746ZqlMv6NiSe2UFF0zKxPfEoCdR7AA%2FE2jhsGR96RixWw6q0HYUdtIS%2F1IH%2BYjUHer5IpR3o%2Fb5zQXXDLezXdT0826MncXw12ZISX%2BHoem7osc7jtrfxi1xP13ix8TyUCwmW7jY5tPaZ%2FdF2yR92f%2BLCgCqfNq0pL65CVGFdcnuF1y%2BEwsE4ASerGYjzC3YkEc%2BdcB9W2XoHROe4XILLIngFV3OkoWFfgR2TBC2y8EG%2Bvp99%2BpxmCYlAoIjFE7xN4%2FPfx88Q1vxbRjfGVH77mfGXMKfrHuVzFlCURTA6aRM90%2FEHBf36RyzWASKecYQwnu3uwQY6pgEq%2BgbULz6JnEhh0%2BCgltZe39YDfW56Tp78Fu4yejgMnVgvfcRcJZjbPNgBEF9WT2UB3aVzi3BdCel5irOWgi2Fve%2BelSfxyuGd9jJSfP5k1ugZaNZ1gvjEn%2FmpJwTeNo5gzZvSS9dP0c0msegE0uHpmqqSquCRH4U8dRNqipW%2BEvVzMnOe9B8zYI8dIEmHqKJuNZa0KSEyaJvcj%2BBQbQZj4SJ%2BZlEN&X-Amz-Signature=1d35ecbd1429e9f32eea04cfe623e7d7fda38459eded9b9e932c08503f2054a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
