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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVPSTC7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDe7AeY7EuaRhJl31PDmS8qZp%2B8Wc%2BVxXzSyBE7Z4%2FyBQIhALpUAhL%2FOArGtjkw1zdMpkUq018fq9zXh8hQzBS%2FtB6lKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvAsEoVovL6NWG%2By8q3AN3O1ucubo%2FpYjRwj%2ByJwoiid2TNFRQX4CxTcejpMAiD7XlY%2BA99a93WaINBJ%2FI026Y%2FgwI%2FN0%2FwWkfkjzpdrR%2BpXr1l6k1Cj9ac6dk2mSJFA182hMIzA01JjzTTq%2BjbF0gzqCwJ0LkW5miEIG6MyIFVgDEE8a5OyvQuydut%2BoqxFQmuFluVDRQATZJNb7VgCql5EAGfXiVGuf0iq2TJ%2FSPcn0Gx%2Bso%2FhTBOQ7sJ5%2BHoNCc%2FBl%2Fb2rB0s%2BS1qnci6pkLZ2wt9%2FanPoM3MCYDwReEXtlrcDXE7B8NYL3RKERiGvAVHQSTJHOQNrdgd5y11E6UsAOSzvMmDQX4vxKJwqR08x50ZnWVYWkIuS2P9ju0OMxDTw0wGzEGhW2hl%2FidiXBGxqp3wI%2B2jca8ny2zEuo6njDkx9XE3BjuxcabGaQO6C3LmCwWsirYfBTreCK4bqmaqPZnZLADuymAgLSwn19xZMSiqjuzj4iTITOVhU50a6ruJHxSPjKyXdPvAvsUEYl%2BEg4v1OgaT0rH1xCPnsHDa5RJgQ0j7GEdPJ4S9FM7PSqTfkAOfx7%2FMmurs3jBCSlnm34ZRFolMV7SscbrdXHWJdfruTpw1%2BvORcXDFhbc4%2BlwsC2LE7KwiLeDDC3oI%2FABjqkAUjNuU32C6%2BBy9N4LrgNeAKWPDSDVjTACDpIIxrGLGnZk6AqoAORyMJNnPVvyEOnDBijozlfFJoCrA1D2msoAFs1s7UT%2BxIOuKpP9acYBSTqMaOPOc9GXWXuKtlj8M29VRhiiyKK9Yb2LaAJo%2BLbnib2y5BBwOT%2FdoJMR%2BMuk8ohQP34Z9LYmZCkWYo9dgQ%2B5m%2F6a%2FuBfgC1M1D6uaEaiF7Z6Mg9&X-Amz-Signature=4099e5b41d6f492eb3ec0a3d2d582b1b430fc5f6c8b2af1dd9644f192e7b6723&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
