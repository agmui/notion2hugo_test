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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIXEPI3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2NFbkc0i22RJO74iD%2BV0X5Jr1ppQ9TrUZF8b9b43bzwIgaW35s0Xve5PHrsbce7J6T7RVxprJ5Dcwqqd1VX10gF8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIislUS73PgppOJaNSrcA9xpnQbOuAOvgn%2Fo8mTZaCqRjELTsKazted4SKG0wOEdYlx8vLNhxC6zcnYrRRKxEzuHeE4AMrTZPQ9zKlw7BvJOajVCyqDw6VfwJN6vGxiq%2FgLpGAoSACfh2Z8m48kh1nPf%2B1I1O7dY1SG8asJWDjMOGxX9iK8PdYc3Ji%2Flgi3H4UP4o4nv9vBko%2B3dt0t8zb0laF8GcYf13xxrrSrEHAFee0VBK2FMOMweRNXhELzqSQ0raLzjlwUBKF4AEeFtOxbZyIUo%2FYa1AI%2BhhmQ0Na00SVQ08aSIJsWqluSw7WbtyyE52WkrnMmN%2BI4sDD6kX1pk939%2BCeumqWN45hYG0EZNZClS05OZRVHHCQFjbYbB2epZOhVSmgVhJK8vVSXEes3SOzRhW8PcLORVlVTUVero6o0Oj7jldWClj91U%2BIPJ2tViIvSHqEbbkUBfR6iLaw1zPSWy8h%2FI5UupoUoDdA92In0rOmq63mYsWDmtU7nswVX8rkEUjIjSx8XoLnXh4TD5xWStdOsxi%2FE5GJPJi9SUdopo4g%2F5k1erb4%2F0%2FMtWd8GrB2ys4GTAw%2FrTXbdk8mcCmcByT9%2Fw61%2BEt%2FtO0M%2BstVhOsEfPe1Nt%2FbWMfNJI%2BJxlbzh9GdNR3nTSMKTTtsAGOqUBhtC6IjMgjhWYtH0AsEKpgSCREMwZ2o5Hqer1UNXaH4k7P913Wmn3TTUOk7jWDBP8MPeaVfGoRhmd%2FyIpFRHcA5Tcg%2Bp6GcsActCOeMEjL6ytn2wer2aietp1DdDQghhkIXZ0RYFcmI3zG918B0gHxWd8%2FsifY%2BPIaLkQROc%2FG5Qj%2FAG57gAPTnCFPPr3cu0775PXMz1CEBqDZLCLxuGLGg4497p7&X-Amz-Signature=902e0eed55414f7bdee8f40fd47faf303483107052811436aeb9578fd8c944fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
