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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKKDA6D%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEih6Jb81IAHWNzTGtInE0pF3KCKrGJBi2hpZs8Ux3KxAiEA1IHwYCfToA%2BIb5XpN6s6gFqT90WgO8%2BxZaCjHIMGOJ4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3a9iMLXYdTxHzdByrcAzBOpCvgUKD147uRySR0Qocc5fUHCZbSerVWjLZFvHL1Ihx1k3Cc%2ButV0LrXR4ALmYgnzWUourcsbmUZkxyYZbhPjaZX48JGy%2BTNfr5PFsxoB%2B0ZtVrsSl4W0iMlUPQ%2FnM43C2vaepUFzKooxfeXyIvABbGRSu7EzJxQ3D7RzHygRYyg%2BmuDgmL%2BhUyBC6bNtHLMzinzMTptUupcHSrD47i6WwwxgrB%2Fcah5FZ5N7W1Yn1KV6ekyzBooROPKZJ7U1tysmQQ70olCQKM86dIa2QS2bOypcAHDZmFreszPiNnUnshkjaDTnXT1Lifhpr646DRvBc9tdLyAz8kQ9s2QjNDK%2BQieBT0hkeJy01dXoyBtqaaQeNNsVi1pF3xKnybJeJloBGpnB4Dt2BeBbIeAyZjrtjDKxQ6BF7ABjKyNDw6xdyzvK2NHn%2BsyV8k4M1%2FSHZajFmxINnlOC6A63JmPHYUniR%2BAqDrYwwRW4Rm%2FHcQxVn4a3v%2FtwRfQ3d9LMevOo0cMxfcJRZLH43csdvdmAbm5xW4QVNwrTCwFxNb%2F2iltyJcibTwbzdDERgLQ3vx0rOqdD5v3YreH8BPKryPhvLev3%2FwSM351FNPPkM9LCL14JMVf6Q8rvbyfiVDfMKH3zMIGOqUBofyqAKPowbBp%2F4ZupcqfSy8jPRhQ25sYuaPOBRWPjRoqRfQC5ueOUzdU5pukfkdwqHFq1M1%2B6sOOOPehtfZu30A5sfVsBCiwgcV96X7cbqjnOeDFXHaz4DR0irb400aPw%2FLs5nPrH4ADKoqIK2zSUzjXBx5cH7hBz5j1bme2loF2u%2B7mw3jQZiJZKU39dQZmxzn2dXDfyvYcE9jeGeLm%2BYbpCrbz&X-Amz-Signature=289b2b11e3a258a248e2681c3ce2c59ab034bd82f11ba86dcf8791e2accc3ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
