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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANZURQO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEvzdQPA3zQVzCl7lTHAAP9bjIon07EpQBmG31CPgBpdAiBYLTCt44FFLJ%2B13hVEL9KMN5XPXlt4P3PR4CI3R4e2PCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM513s9RW1R7WM7Fm%2FKtwDFvapJxShJGf%2BLfR6y2KYEaLU4dr3q2p8JFU7ZQEgCI%2Bm6LNUayCUC8mWFOqRbuW5gl4%2Fa8t1%2FQIPyo1cAO%2BlHgmU3CW02kul%2B6jwqJZ9EQA6fQLpnw%2BvRvuZAWJUopLaisqt5yvv%2FwGjSwkt3Gqd4xPS9hMAFOAdK7Hq8KURjLjrEta7%2FuSCXtLViR%2BzsDMQPVYUfFHOWag2XOpjBUVipahO60ZUASixv9Rai95mWGxgKXF7ErZYeqk6Bs3Hn2vbDhfNPfpxhP89m3hMXpCFSM47qgRdF8Z3YTzKZo8VUO4aEQPCSLXenWmwfOb8PzYzeJqcQpV2hrmvJmmmN0fXKgAl2Wzhzw94ym7gd7PwvFInppMgbaqihb3%2FxK6m4vHeXAH0k0da%2Fkq1OjTkbuHilvVRBZ2wCBrYCt4g1zd%2FWpTlDY%2B4%2FnoUp4A2xjSJQWahNAN3P02K4eRkUI4UhIbE121nJE9Gehzvqc64ZvAzKlu1hJXxEzWxXhLRmiMWYQWUMBq7Pss0RPNCHovNA39DRzgGR%2FislyVO8LURLUW6a3d%2FvgmBSiEQOAyDwR9DguriGEEpKKsv3WTHkPZyeYMzQZG9ZJTzw3Hz5CbIjYBp0pvrlGK08fMTrWlNwQUwid7hvwY6pgEftAq846Qbb7nVxoNKtBtMxkpnd44vtHCv5hyRG9duDxiwm0zZv%2BPliozyFXH9rIZ7limtPCB%2BTEuLoJJOxpW8urAyV2PZvQcmwCSdyb9sgDanu0sYC8CovI4mE2fw3xuM5D93tfLNrfxOQHDWQc0I6MED7ruA4hhId72QH1zHGl7D2qEC6LGNgEUj19Fw9lRXnp4YUyf1AJ2Jx1DuK2S3meCzQY9E&X-Amz-Signature=93c5a1ef501679471e85f726712a90ef9c64cb06ae602a3d4385b4a639348978&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
