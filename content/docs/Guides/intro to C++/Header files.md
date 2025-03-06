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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4HTFNC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmIFcn%2FX2RPaNDbZ5FzZuiun2RciSDBi0rOJHvuZ9nmAiBmEAt%2F1gWzvitJrZXWB6H0yk9ncbvISrTHZ3M%2BCNS9Hyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMVqV6ZCFZK3yB1XqyKtwD5Bbyuqhq2smPCBULb6JXbd2fN1CGwHOt9bfsFzqXEe3h7a2RAEsUkG7kxpAy05QbCD8oqTXvX1Ko%2Bz9q1aakv6qvNV8%2BqbioulVe4RMXW41bkG5YOa%2BCsxaMPd0EvXQtOzto4pUdWL7ac%2BLFeZFaWGSXgZnNONWbTuexhLiR1Jke3zK2aB6W2rNlG6SNRxuIEUHxuXDEnHYZ9vf7U46nObr97Ne8nYt9FiW4P23roXcEwtkt5ezS0PoIaJgw0eTfq02fkiMBM70JIo0bFJJ%2BlGW3wn5thdApe%2FZ82KRPpwoNRABkMBFEK0fYDPtMOgbLvAlIw6PkcvE0wAi0oIsQ0TGJBr6LfYT%2FPPguB10zB7I54D59b%2BNBIt0ybx7t0jgiIUYDcjUrwrjJ1jdqmnBFsXyHBDS%2Fe6RcaJxFf4HEKF%2FefAVyU%2FjX90C%2FxF6trYRea3SiRXQoQn5l%2BTOb0SMcHBB8d3%2FsvnMtybHy9u9B4k%2FxNe%2FC6ed2prM7LGFnkVYg4acNxuaf7nq99nAU5U4geYDGnEEehF75zUV8M%2F4q%2Flozcp7CkLTrFEilXzYhH4a5yNjhMVxNWgJwhqWQ27PkhL6gXTqwlIafox7K9yEZQuMFg3fTGlfB65akkKcw%2FvGlvgY6pgH1X8TYr44SJmobwm0SP%2BsT0QLizLgLptkTQsZFtQADGyGHQngMVLggfLdBkog9RjV9OIGDIztGU%2FljxIoF7yeeupmfQ4vi%2B4WuxTddn9DBMnVqpRVujp4Ku2hpTFFpdosDe9gibs8wqRtxRwfoThIm4Hkd147FAupx6M1%2FfhVbM7d4pn03dES025EF92rKnLnN4Yo9F80nVFMYogLHa89NedzUGdTz&X-Amz-Signature=8af4c7474c7d16aa3100e75d8b0f45a4dc206c5ceaecaf321db57f87a16e5317&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
