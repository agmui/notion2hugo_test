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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNY6MMP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDyqxVH5YkvSnTPIhBaj9TyZcPu%2BM7QXZi3%2BLWnlu5wyAiAnxMW1XwKDUigQS3K6pa5Ynq%2Bi4eU23KnNIxRPk2Z0VSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkw09Wawu4hS38%2BjKtwDc1Y97XDBm6Dgz9JrdHSHi9Hlssa8XyjVbmtXsv35tkKndUdnnCls0g3Xo7NZfph45r5qTqxHcWfMkEqWzBcVbsbGFMNWFZEjuat%2BwHltA37VXepHQfsfRqyblYtHijYcNMDw2aGBC2Ju94sTrWZHiI5CGWC3p5qvd14L7BQInGgr4VXnFFFXB945HyD2p2S429o0tUC7KbjB5MZblssSyZPcwS2Toczi2XyPVlCv3tcBEI8unmn8MqCawQRNIaAAgoNxRqB0qwGSqAyuPK7eEASlbxmbjtbi8onLY%2FXX5hLN2ZysN1%2Bh4sXN%2FDP%2BIhzvcIueWuSV2IncvO0e9zh%2BIhXYuQ%2BS3EAHsoeloZ%2FHYuJI2hRk4rgmGR6JibyGPQ5RDdcxlQZxms5%2Fgx5AmSiUaZDEsCyN4o%2Fa1daeDNeu0uwO5cu9VTWP%2BJitVYS6fcxIuBvm7irIDxFvfEDsWXZuyLaMNqFuQhOWqv1dhKrsyhbu7IToryf4v6OcI%2BcgAJJN9rhQxb%2FbpEDY%2Bjvt26l8lMMSkHN0G4xVwBRQ5ktuinAWGr7lW19wfWgSZYWbzgWs6gIJxhOifgjCwFkBWO%2B1B%2BeoZRYVs4waRzG0RU1fskXrDe%2Faj4cCKsUsdB0w34aowgY6pgFFZhJdxSXmb%2BUxTAyzZwORip7aGoNTGNnduTjFX1ijvvVmgml%2FTwV5xFf2qp7o%2BK4TSjcqopPAYZ2tmPPWDitiFw5LXuFhCGe%2F5KRx13UYcBbp%2Fpq3WyPX0jrXGzP%2BrCSfqHdWO19eqiu0LM336WqztIe%2BYZbCulMc9a2EnO4ce2sTm6wYFHEGRfOZjltneGqXi%2B1eLR44QCn2kUCBPbE%2Bir9%2B58zr&X-Amz-Signature=2024d2bedc3f8e1c7668f6ec52525986d3c95e8cf54896dcc3cf455bf398f06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
