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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WJ2SK6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCd%2FC%2B1ddtW9R06Ldb167jcPfza3fdtdDur5Kv8lYKfigIhALZLRs48JwgZ9epwPVQVHIzqjCMlxl0eSZR6gGc17996KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU8oE8YEqwiPVM2AAq3ANm72M4wxpb2D414naUXExMPVko5EcSURvSzPQHgXkMJPCcpQM8tX2ivF0deSzsGXXMuFTj2lx7f7ONuvsXvkSPqoZhu6eB8pOT1VP%2FuR1bl7tkjbea1qUmQAM%2FoeNf6Qx0IoYlH0l4ABu6PTky2WHVWjTG12%2BQGi9yMqjcnv3bZJVez5IOz6pBdaEwW%2FklwADgEv0PZRsGHMbygyXC9%2BeLNS26VUzy4%2BHxpNaQX0iouRfHDjmaLSd9QVWvyzuYUqkd3TPQXUX3Rtdf376U%2FD7JvTzhhVgC6YOB7UODoWopbAtdkXjQb9OPp0m6OToP%2F5tMGpYZu0jzUIDvncHe2Fp%2BxNUnVk1Wx6%2FrqB1Dd8k%2BFCdsdMryZK4IRjOAeX4bPtm8XCouYpMy582LiNBNicVjjU0yR77ktBgmv%2BK%2BHrwvTIB9b8n3uC6zdGgq5LwtdOhQBXKN0CjkcJfTV9qt1%2Fg3oGhOzpTtUvTK3LyI30OeF%2FXJngvp3J4iyS0to4NOIaTfvHtT%2BpXtslR8%2FG0izHo5AcPfGLyMt8Deq%2Bt5NcjlkzvBP46JDG8Yp1tgf4MlAxDJBJxbmQKBNWUk1XWJGvnPOB3%2BfTgifmmKe5DAc%2Fe0xSHnKBNOBVvwjcLDETDmzP%2B%2BBjqkAZQuvxAYHEqLgVUYy9uFaSnuN5AEOZSQ12vrzGWq%2BNgA25%2FvONONn%2BS2ApzvCV20bgofqkMj7i6m2chTGIXbXlzzC7IAozQJqH3DNsg%2Bj596w88IvbCgh4L1vVoie8QvSFsuRHSG3WNUkBgjATFN7KdSgtxD2KqiHrJW2hNbimDrTws0hnJLHY8sHylynuijKGkK9oCc5LsV93avLBOf033I2lGY&X-Amz-Signature=7e8d99e492de251f8ef2a9a8a55dfe817a6871db851d47605d3a568c42560805&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
