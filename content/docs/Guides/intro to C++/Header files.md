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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHMI3IF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPjf9YBU%2FRW36xYdhaHFsGQ%2Fz4tgcZz%2FYwFJ%2Fmg4fBZAiEAzmFQzlkbvEACogppdbjpQKjXGBDBdyWTjAFN6fvvKkEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAnur9KFgcZ%2BhgHr7yrcAzeg5Kygq7knUBP0Z%2F04LX%2BgLq3twSZeBrRksMd8iPE6KcoaCJ3GEsrLic%2BJvmTKe9i8%2F5tx6ddRvNWAOt%2FuTv%2FzuuuQ1FBBr9mrH3Q7IDN%2BvSq3nqrKwlxhLvQAqhx7SHOy40p92x5A1Kbeuh5tTye37XNbqCd%2BLrPKUr1JV9Rkt4mQsnUp4%2BIihUPofQhfjavtYMltc8Qw%2FgFxghsfsXJQpHG1kCQKGNUVZTLkRE4NAbLRvTTD6NZA%2Bf5gwVZl9kfPtGnrkj4esHWlBZJIwcFdjVSr2k08BHXc%2F0LIRx7N%2FEKlkNb8ez4Q9Q4f%2F7PzPvJcwi2PwzWGo0BPzTSgZLaFJTYpLugxU71kHRPf9tPm5c4UhQfP%2B7Ri5k4oYRoiTk3LMq%2FUaxV9GCa48vBOAa9C%2BEEdCjL8TktFE3x6%2BicMDeqEds2vLHLxexFS8Sthv699NbxXdNV93LUuqxn6vKGmaEB4iT5EeCqMaqWDjFhsWR1%2BWV0OxtwwSHRkjQF6UIcT8a4owEwiAriSzHHGsMhL7KfcNAv4RPcEEz%2BKGX58lKQ0i1ISRkDj1se9o%2FV8aXNUS2GtrL9eh8wrQESMfrELoSEzH6%2BItAmRAcBaVQVK7bE3eI93KGgAsCvcMKT98r0GOqUB1E3yxafROXsV%2B0QGFIs3U4r998JhP%2BWZ7yUJNE1ZGEDeA3F8x%2FqPCplNJnSxjvitVThDSwiY2rNn%2BMqJukSB%2Fr6EkN7yHpAmiuswDKSzTqS3QVxOFflXzYPVlOLLf18JFDhR3JBcZR%2FZ7nso%2Bs24BYFN7FRo1nwoyPMgpdvVwsPzFnguInNmfRulpGNdSRs6MJEqkPbegjudX4zHKPL8Uia%2B6He2&X-Amz-Signature=76f84e5eff1591ac853770c2314c7d98242ee8900d19c3b59c6c013fd7cd5c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
