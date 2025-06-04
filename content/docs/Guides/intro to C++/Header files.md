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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZJHTC6%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQClqeKrZs7gBBDMtksGSVpqVQvhixGQTxIKrs0lsDtMAQIgF%2BSZ7KLhNTmZEwzBuilAx6rn%2FU6Ae5fz3puxsq7xfG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAevBR34vzo%2BAKX%2B7CrcA1sJQso0pwuhgwTxtnu%2FXIXTlBzuLHNvMXjEBepayjxzURREUNNen%2FtWXSk4loRfypoFLBGMa62vWoDN%2FDhBQc8gSERePreM1kYK22PbGkxsrc%2FwI%2B1kYTPL3KGmA2EN6%2FrSAMET7RVXzSX%2BOP%2BDnBIc4cW4Z1e%2BmkLtrTFk0y8G0do%2F1ct1NbP1nBD6gX0odJiyNed41P6GvU4q8pZ85MCzFDoENhqgPFC3pF5SRGrmv7E4hBJnmhFNTqu5UraqgXadLfhupXVOuMy%2B1DipJF0tIXvT2SIelRfYFdi9MPiX4iZBBCzkikwCx%2Bb0rue0wZ%2BA1YzPcEghbsyoDlSXk%2FHFcH9fHcgFrAhs54uYK7rLYJ5sKlGLpgxagkfUTIfm0VepYNiV320IanOrFd%2BFMxip7Fs%2BzyuvvlAFSslmYzSdsEqkAyzvo4kluzSiiVXudt1Ul9lLxn7DIb5yMVjt%2BwYHFTy%2B1ozQ1JPEudJYWLMUnuygzUiEl%2FZwOz8i%2FEbcb8DhYyo6gtvLNejiW3njXnBCHMTEQ0tm8IvollbDGRqVawftVod9FrpEW8z%2FN5vMffNKoWQy5B7gg7d0uri%2BAcpgHDvTJ%2F35StlHSPEB0bd0tjtQX31szNylPowDMIyugsIGOqUBeEITLVZZ2DJcrAKdB4bR%2B7kOj%2Fppvf5XLPzCkWvU2W%2FmfVo9mPvCwFTlo7JzWIzCpqTKUddr3oKhNEudZrTJzGfQdDttGVY9%2Fn5C2dyEFE26ZozE44%2FDT6scprVgWmxCgz4PUOLowAoMlNcPJlalLfGkvDrNo8CBLVsp8jvnBcU52YFL8s9DwvdZDWtY0J9eiT4qPtmrsae1zd2icf0nU6gcWNTW&X-Amz-Signature=24e09b86d3962b9ae7e1af4b407f8b2a810d5ea08db9a95377c28835dd8ea7de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
