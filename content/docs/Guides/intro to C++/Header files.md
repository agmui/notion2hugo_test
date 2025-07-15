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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOL4GHO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFC8cN%2BFbGz%2BLceX8RbXHsMNxeIowf0BujFNitV%2Fy5OXAiA6LUecYSzi4sF8bsVNMKerMWgtZ6snEhA1oIX9vf649ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM2p6t%2Fls86CrSMyidKtwDKcoeNqYKnRBYSWaHHxU3oN1ewUmNucAFHtPFMXwfTZqVixSPYShxq1GySDHbCPpnB3PHbN0bhV0P0bw98lBGQ0553c4NE%2BHQBPgwjcTwXoA0IWtpumZogCSCi75B%2BnV7Y3xAaFNqa33vXNlKmb6QDM%2BgtgMLKzwdjr9To4gxcO9EHNy27EHaODGcAL52eafN6R%2FrSKyi%2F6IuG4OlbndPHdQWAyWfX1YF59I4YICDj347otkbx%2B4grfLa6qDUAot7SnMQkTLCfN0yohtO9RL3cWNTej0rOvPOGKcE36HAm%2F1q05%2Ffx73pwt6CE%2Bp4245Pmg%2F%2FH44oan1b%2BYip9FK8eKxx7HvoGhFARy%2FUuEjZE1tOEkEUDHpmu7NVrc%2FTE2m2fTNi%2BPhsBTFSrcaBW5xAF7aQh46nhICYdPDhzEB9xnhkp4DbjMg1oWJ0O5yxHtYTimACKZCK8jOO4%2BNOpmtanNC%2FCwInaJqWcuhwtmveaOxdEr0Z8HJzcaGeev4ZBsHGrHN532HFriypcPkIwv5wORmlbFJ3eRhzC8ZFhsQDxQs9uxYPo77WaiuGHrCjKjBJLkbyPN3h7s6PypcHXV6jwm2m4TIUzO%2BYOthk1bPQOZE0lUpaHShfchVJN%2FQwiYbawwY6pgHJ%2BDTSAydwkwkag%2B4w7oAMEcU9uEXwSmLXwOoPUkVakaX19OpN8xNzsWgHPFHfDP28X6IFqRd1Qz3UDUYkIOY%2ByPLs2KtEbexnwmD7IEeqHAGMMJ%2Bwy1AzIOBBfd2%2Bo%2FSRST9tD3%2FgQhIl2FMu3y%2BgyiSjD%2FNZpElLjE1qHm6kXaMc8L3jUqJV5zJTniqk99gyn25Ck7aBy6fvi74IwH%2B4Xi6BTz7O&X-Amz-Signature=c82c1a1d8fd757314c63f1efe443e64c800b3d743c4c845c033e4eb0fcf3d7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
