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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZGUGEX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeh1iuNXs7FX%2FY6qyxdwUWVA13ZtaS121H5RMjCFd42wIhALds29jEVSa0lHXdXTKzV4GCUwq3SZSTtTtSY8byqok2Kv8DCF4QABoMNjM3NDIzMTgzODA1IgzZx4vV7Mj3JzlL6b0q3AMMHkV%2FTr4bZ%2FsljcvORP%2F9GGrPC0yCjSY4CfuMTejOUGpsoh9XNs9%2BQ5250iIqGBRmVQ0aNNXhvKvK7a%2FXXn4Xffy3p5sKXPXLRd86zUuNs5PwXsICfFpMKz9NdGW8RAWMeag5I2aGNUG9FsYqAqu2eiZ9ZA8KrXVnK1%2BqB5umzYFiIktTrglJLXbDrVmDIVLaL2mFaGpoAH8raX3X7utsyNUAed4P%2FFY4zXh17wwL5%2BUDaZVnxX%2B7kp5fkxgAz3RzFmU%2B7Ni%2FmHUq31Qi%2FoQqPHR7VB2CDGe8EeBngOx6UTRG8PzRcjb64ntN%2FfJinH%2BfpXoNSzErIkMAEyCqxuddlugGfm97jSh%2BvGc0jvlZzeOADrnEc4WSl7qGcmH9zJ2HHsrf1OeD8DzKTsUQseGV%2FGdnf197n9C%2FDEo2Xeharo%2FS873SLvUu8mSLoDatGiRWuYcw8UkjxOqNkeft5PSQk7SvEogXgfcf8pvbD1LbnstP6zL0YkgeiXDruGSO%2BDVXW%2B7%2FTt8EjHDMxJGQilKf%2BmanlXfoYYCj%2F11rCC%2B3Q0xq6UimhRm1EXP%2BPD%2FmojTB8sT9l10vVUewYY928CAv6GZ%2FjDyOSRO24P9Jgp637zD9Dd2PvRDiAlPQgDCr%2FIPABjqkAYImV4UnYnV2p2%2FNol%2BGLAznMMJIyE1Sz9UBhXD8lf7%2FSAuhSOryc97PKgziKWZu5D1Y%2FwbnkNPj6KQQBU1GSS7fQNkFvJxzx3ocS4P7DWuCV0pOSSrEHbE80tame66vpSZ0udaepNIqexymJ7kmX7FNlKt0M59vwcybZGOQj7V8l1UM64Igfz6hlm3kBU%2F9GxEoET%2BQnCqF55siTUgpkhgvxCga&X-Amz-Signature=f356f4b03e3c49f9cf0339c55679aafc9630d71b034caeee190f9cdc2b4e1c00&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
