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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTRK5GJP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICnBEMKQqMtdyfJpwvE%2BGGaLKYgrYgEApMgFx57tfFnjAiAEvYD6L5YJ%2BN6fjsB%2FVjxNx%2BPLM1StHNin88jbC51XEyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMTA0sX0BbnaHiuT3jKtwDm2OYVIQXmIv%2FKa9Ii0x5zyxAH7a8I07y7NAUusW%2BwarEiM1XM8Y2KYqSha2e7rfKec9aj7ZF4ATcj61Kq4myBnu%2FUsay3adP3JV8yJC10X74MnTBnfHtpprbGqtcyD8Sq1D5t%2BVy2Br9zRPpz6sEPxR1YbnFREBTUOQwmBwOXDjg6F3OWHruyXI4JhlLijINWPGuSijVhsizCts1B7Utk9eNyTcJBgHACp09DLMgKxU5aZbm%2FNd3n1PFH3%2B%2FPAPnRwTlqoVx9mdauub5jSr6b%2BTsK8lRWYprhFjs0GduHDBh4Yp2zYrFxNdeIwxo18BOxRtrFZWM%2FB%2BQEiKJMphI08Iu0g%2ByPnItWKv9bmYOu1JmP8HFoHPY1w6%2BJOiO%2BY6QZc88tyluo9TLoFho5NMvTReWYS8CrJbgJErR9V6BSdRPFFUTi%2FiX4T7hV%2FfMuSowAmp5jd8tSTMrnUebyXd6y7jZPn%2FHbw65OJifH1xWehTQi4YqMxiByF9TS55cLgRByymSjRIi2d0TtQy%2BHCIQyZul3DH8KsYl%2FskrA4fEFNUt2q5HUzKwjnNn9YcFlyjvKQxlQGUdFRrs4MurAkXuesDehpEHWrT%2B%2FnqfpizLkxwKbGQK9X1%2FL3pp3mYw8KLqwgY6pgGLineqR0jYFBvom70eiRWJ%2FSqmMG8srMkrt77YUPGeudDJskyeLc7Kr5ywO0rIfrR2SMAmqTA2Dcd1yoLJ8ZOf5EW1E0nGCVUVnQYFjtVbnSQLj6rosa5IRpM6zD0Ur%2BJMt7O2T18bcuzNUTLhMNuwHOGA11LPJc5wlycpY62iYSdyKUAZYdaT%2BOnkZB2nfquY7omoJoSPbCZQZ%2BOYMPmARG02PjD5&X-Amz-Signature=d014dc302e9e909cbca4acc1e773d6f4a1154421c8fdf81e5ba21b6e239cef51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
