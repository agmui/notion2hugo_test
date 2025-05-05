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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRKQ5LR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB3tMHRHgqrEG8bKXUGPR%2F4ew8%2FjfHYwFcRoE8nRhFKAIhALiIbUNXzkqT8o7IrU14YHzQK8fUZU475mdM2UqFARYWKv8DCDgQABoMNjM3NDIzMTgzODA1IgyocvSSVItl5GEmQzkq3APT60H5XjIGS6yRl9jYy%2FcbZom%2FLnQSKi3vIb0zp4FAHf1%2FYrSjb4l4gi6wtEK1GLVXhBfqdSyfuuBBlsdFyyzWRucaPu4CxcFPugqkxoGZOMGeSKgY3rl4yp0G3Qry9rel6VPTjEWE6DFjzFr6K8zSDQFl%2BwRDZRSu81QfZudqIsFEQpm4heShzaxVhthLwlQbY0l94NIvuPYay31aTPu1AnW4mkSG7Xby%2FeZTsqbKTS4b0VRjVw9clPwp4r91%2BYI4elLIkzWaWeW8%2B7fHM015zgM7VJ5IzwbNX%2BIeKaCQif4s2VVHoRRujMHhMh%2B%2BwDw4pCvEKbO9rfZh9j%2FiD7b8Sl%2BI2uLQE0RIkKp394GRNodlM050eIKYLajQ6TfeO7hqu9ktn8JgI%2F90gbJHxihRBuOP6ArqDJ9%2FiOc0OYavd1VjpPcBHbHUrbFjZrEIPFKg3z7QZ4tSDz2sMLenQRibJzKRi3TDZgTuRISVYdSW6VKE5SVMS8oGnUaFziRa8ex15jUWqexb4%2FnbqoBgxX8ez39Jh3nyvUacCuc80QLNGTbALQ4xJEVC2ZXC6s%2Bc%2BI3pdhBfTEXM2z8WiWzYNoJ%2FipHujwMWovDUYFikwa4MWFDU4t8L9Jb%2B%2Bfww1jCC%2F%2BTABjqkAdG0ZfR%2BNuUEnql%2Bl%2BIi4UDCmOkVAZC1GWDbfzTVjHaLAwwRnGbVfg2Y8U0%2FJo4%2BL%2F6fkaXGbZwoRvehh0Ng4pSS2ydWtyEbV%2Bo0s2sWzQUV8Az%2FXABeLZ%2Fm46H3%2ByfwhsuEvEmPtAxXRwBJ53zh5cjVyrgPbcoufjG4G5onuamTJ8JyauiOWTg6LzLwMKR5BWZ9sFki003tK6dovbaw0zRYNJ07&X-Amz-Signature=c101b2f607560535ba44ae8c878ef57600d33a007d8a0f85a48e6b486317ff73&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
