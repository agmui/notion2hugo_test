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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTPL367G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbmX0A1%2BGFUhGYWka3yt%2BiAws1uGdfUrs8qH9IKv78zAiEA9OpEtVPWH2UHk5n6HrFxM156rGBlAw7%2FP373%2B%2BtedM0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK7iw2OUPHkAnqQYfircA%2FJRSfcoBIBMDnfSHWD%2F%2FpwdzEg5r1XhZZCjFMF3sL56P3O1Tq7zvstX1mOZiEyXb4tRf%2FBfRqoS3%2B2CfPc0RtPWi9cWgo%2FLpYHhIQNDvhlvB5CT%2FsP%2F4cZd36mY6yueDhzWNtiaHCasXUj3ZpMhaqsAQFmBGAMfIy85bobcdtjUFD5K8UENd7vKAZedDX5D17faHk2Z%2FEg6%2FiPIEnjgGFIYL%2BZlj74ijdMlPTFulExZeCfjR3Y3fE0ZNsqRx%2BU83DdAzWdmUHvPL3TTh1sYRuDmGtIwQ4rOt70iyEL%2B4USX1%2FDjqvW0txJivfCUMlFcg6Mys%2BCVwCpq6rteeu3bjar5Gy%2BrTJOfhwAxE%2Bo%2FWcpg9LSvR2L75uyqk%2Bem%2BrSM4AUvq%2B045Lucpd3L78r%2FWUHsHCdTiBAWVOSdsn8HnTxS2LPmjC7gMJKkguybPQNnR%2FG4JFuXwU0Rm3j%2FpE3SEhYDLuhvvZYW%2FvlkyFUdOijr0YT3D%2BGYKP6%2BgD28pKDlf8VWVRnZqn10Zej4qO3gTjlbsHWJQgdplpcweRH2DB2KhWVcRHwjvru8bOt6IwbE8LVgwLt%2BR1Vl5B9Vu5kUOILoOkQi5c6Q%2BqEaz%2BsHgsWvAkX3c9RpNwSDa4MoMMXG8cQGOqUBwYJrj4rQKG4GmHnDeuLIuetC%2Bj7Hi0cEUHBuRiaTvOsetR1XfIDsZS21o1BhiCb9G6Gz47qzuL6YKJNnHs3km8z186rJE8gOy%2FZjr3LaOyzV0oxfzxo0opxKmpmVIlltYsoo9%2FLnCiAARrfUt%2BPHSeDvZRY79PUSKnVgJPc22zxJfai0Jot%2BG1fwxfxVgXzrsVehzOyx1HvJWbOHjylWVyOV3bFa&X-Amz-Signature=ac109e83978c303f45ce839ac1972f5fca035111051b04fb6371bf2c1d18e40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
