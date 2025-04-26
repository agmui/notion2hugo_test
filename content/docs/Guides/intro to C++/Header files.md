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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJNNFX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD9XFTajO4xz1JzFd%2Bs8QUtreh%2F5LM1luz1act7dq8dAiB3x%2F9BJ4YxwpEcx8Q0Fn2VEZglmkWx6eedX%2FEoxViMzir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMENswRjEiWyugQTy9KtwDoLaleWC9LIQJDqUrZcdY2DvDlL71W7dLP2ZLcbbAVV2LwrjkGJz%2FDwqBpkF6YZrgbWD46mBWTg3scrfhrIj7Y4t7RgaDSp6mx9ovuKMlUvkH4pLVKrD7VdNbxrKauHh67iHNs8ilkfpR60ZFQwpAr7hPUUzFBRxr037k8DOuTQMo4Fkvr%2FMLx9beE4Fl%2FAq2sbEUwFDRXywCu87JLMsTYlWjGwGqUZOhXRs9EMtHfBz%2FkeXqs1LolZkfD6n1blIXcmvU8uKZiDZCIA2vnY%2FwuUjuKK9GgmgpZ4Sg2b0FJ5I4Z4CwIGTfrRtJrqz2MmNcXAfs1%2BXxnu8gGj3poG3CEcu8DEKoU9FLDGWUS9el4hKkydQ%2F0T%2BkkFNivaIugf49wbtvmGO9qUScpTBsPnP0HTDrrIV7qPTaYS1n6%2BQ8AefFql5ujrgpcaj9SQjK7ybGPd4mWZvsZGC4qdJvtRSsOte5NmanUMwCJ8OeFPZw1u%2F7XJiwNatSuRXE1PlOUg0iQnI13lO0iR0hNABtuV6KYodWDEB0ktFYKtqC%2BxCpsgMSWDlvx%2FdXv7dEbzk1Vlk%2Fj5IgDBpqYOJGtCvGiBeodMAwe1Vc%2Fcqwyqnd%2B2O2Bwiu7yNioTdScgIbT48w57uywAY6pgEa0Kyz1o9gvBzk6GTN1yrWbJzfv6djikaychbiZXZHRFyBDyexSyxIbRD8%2Ft7Dfoe5EJZwp0mGbWpMPuHcCkvzNPU7ECs5UPqo9VGw7yzCa%2BQ3DdCdAApsE9oQiOTcquhWVm5UycAF1aiGCjXayNsXORk%2FtFSdm1xB1HT8qVXkaC1QSJdvB%2Fj8Q0vO7Ge%2FesNL%2F2nq%2FjtfF9wea8lA6vARuRJZ6SVi&X-Amz-Signature=dc10e28e98159ff464e12e059274a5997715430540daf23ff749d7c2fa89e5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
