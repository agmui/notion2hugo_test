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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWJI6CY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg998BpJ3KEP9Elg%2F5uLTcLlqIVmhB%2B9ktM9qa%2B6KDDAiEAk2lHcSRyR4GYL%2BlBV1QmL2PwctkivRGYL9ppFwM6tGgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDPI7bQUF5%2BpENIgUBSrcA7JBlFik%2FRSOlJGydSAjjc04Lj3J%2FtzsRRUVD%2FMeSX0E5FU3leKuh0e52dpkrBdGDxRFlasCFwuA8eLvNNM73wGZLWXkVWPIdE%2FxA3YbaFIPQIZXv5rizL4XUeNfYrZv0XWMdwGnN02cAzqOfyq8aAfutS5pdVug%2B5uS4eKZxzPmJ1iTL6%2F6W77pH5lZWYzb2PONEjCMiBeNaHTptKbTDaZmhkysLGDsT34h9jWm%2BcX1JbxH9XYuKWsiVezHyL8NYTo2jOyXoheP49AzCT9qEDrS1HRE%2F%2FXu85o4jBe963rnGDhh9W4qJ2ZvkLem%2FFAAdC30PQgiqkp%2FRFal3l6Ofkdh%2BcBy%2FvcSTuwfWdYD39aqGCzgbNhJIN7eSwWhXxYKkOIqmnGEbDoYj54prtrLhexy41%2BnSYpXq6oxm6uniFZmi9%2BlL4VQsYUnX%2F2vc8BCn6xaSiVneAmnO34kh3vaq9rCqBz%2BqI6vwLleSaXC1p3UJtDk4TYJub3mq8wI90xVNkvOpH5NJg2BytiwDrVhHVeLb9JAQPNqSiWzr4z8ZfqihHDHWpvQkNft1dq3pFkBndAxEOGUHB1fFFlUT7zvKdISOynzIUv3eMvH3CSqgm3c9ynn0y1%2Fi4KOlx3gMKi8sMAGOqUBNbMjTZlLsA%2FLxssgm0OyB4R3kgT%2Bs5jur0uOVEE1cDH%2BZjagxVuJI%2BvRFVYSCIExswaBl4OgsGa8WQqV6TyAJ3qnehghXjTKu2ldXDWSH0hpQJvypQHX9qiiUorHQ3V9phj2wlnuyLbpRjhX34I%2FcH6hzPjr522nnYYLQ2QxD2Ndr3syVdLmWsjzfEljz5qByTMw9MkeYyG27HMxtSWEd1EEGsBF&X-Amz-Signature=7062c28e7438f1c3c5a37b01f7fa6a32ce7336c22f6e91b6dbc72821902c97c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
