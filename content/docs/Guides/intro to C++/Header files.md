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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRSH3KJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEHe9Z%2BswkWfC1dyJmov5mG%2BE1Z4wWVwpjwwsAJotMfoAiEAmwZJKZ9a00Rt3KQPkCSqUYfRhE%2FDGc3ZbO8p1%2Fg2LH0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOY%2BPW2R8bKjGa7YNCrcAwCXrOAeVL0VIZ4F5gBGqjB2dAcSrKZcyVap0l7afq%2BP1bDpHrO8ogr20hmA5hqeTgvjwiwQCKIliMEEhmviXKPjJPt24vbg2uF%2FTpprGI3efVUGEeflkedaiZAdlQn6LMrYAz6lB2dqYdU7I%2Fu0Cq00nGSFBdDEq4bLrb3CELcKCwOuWa0R4KNHsA6uboly5wwJxe58Uw4Bgh4sr1MYeYybzsrb7XOTkABLJV37r5%2FA1ATLLAUhJPyDE08GNIicI9s4MVNj0fVDTJdbicxYwVApqU%2BWHLhRtimwHbXHUGKsTeNNicb97K4m03UxDzYE%2Fx4rNJdl720%2B8rAqlOLZkk38Pl%2B8NvSJetOPrXn9mGHlAdG8N52GoM1SpuPPzhixXi7Mg%2Bs5IJfdPpY9c1ujIMYBm1GXiK5Lie14DWnjP9A237BghTtfPvsz7%2Fhkx0GwNjAp1Axj9ZaLWnTBbsNQhzYf451XP160tPAlVkUJuj70gJcsIHXGU0sT%2B1W9%2Bs5D5HJOAjmtsFLDCGcHSd9lHQlPOhAtGEsqYRUv4c2A9KJcMNJ6bj9pktMkMoFb8rhBubPkqv5LCw3Rf2MJNe3VZSjBaOkLuOVQzw5xIs1wOW3KPI%2Br5XNbj%2BRQnJ89MLH%2FuMIGOqUBL5K6W1tsBnZAFzZxFoXX46szCxwUny02%2FX4v10PZNRgDswCcRXREOHuJjYY2%2B6oZVz0SaNUZzUkvt1f%2FwcTS0W3KrROEA7G6A4%2F9Ec7nkoKpzdcX46Q3X1e4QKaiARTrut%2Bgm3m7RtIeramnXXRK62JP7fRcTpzh4j6fWYiFVHJKhZc4swDocxUIrZj8w2rJ4KiQcZp3ZnXmSqcy5DjzbN%2BWNmlC&X-Amz-Signature=5b79b8bed606e1427cc10c420929007ae74105749b9a5dc13ef3eda4c7d12c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
