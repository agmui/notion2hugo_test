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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHAAYHU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ3FEbuuArk%2BJ1w8qWcCYGWyJs6lWMczyRIhAFpt2dfwIgFvkSOgp1xhhNFTpN0t2BTqMyhUSdP1yapYvYBLjsVA8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDP%2BlGI3B1w%2FJsmQ0xircAwNFjgefjWckyDuuDE2zTyHinmrfQQX3gkfLzV3n7SND1RMkMrZ8G1SaDtOG4iHT7hIUerMq1bGQBaAFvRjfDA00hQ0X3PPpQlPjHNIyAce5%2Bsz6Wt1X7kEI4W50%2FXMzKzIs72rED8JVGsv0iDgV235YWZqcpV7A2bbbndwRZ8fZIqQ4tsAt6x1NZc1C8PvyNkbJOLaD%2BNvn8eaeHD0Vg4Rv3rG4o0q4TLDW7xOYXImI%2FzgjUjlNiTTRJYOtYqWdWQd1ri92rYoc%2FtOxrKQdzyYsLDqK8p%2FH4lMmUbZUv4dxKg5DtW%2BMDVFkUGy%2B0aBHKF100o5EDpnGUz57dJ0WIdSo4gKR3u8caw8ydOs4Fyf%2Brab4dsEKkC8BR5Vchg938MzMsLKFBCaDuLHTuuilc2ZJTBRPcbbOFfRjZqbHXk63aifBh2TH6kI%2Bw7xtLHdilopC9ETdK555wIfmnO967z%2FepA9znpBCp%2BzT%2F%2BBp6tjJXSmzTWgINmaksOVedhY64KpI%2FpG%2BXWHBeHXs8TVFQCJjtXJGcKoeELyt7piKXFF276i97L5jEP4uPMV%2FcJy%2BO4HvTF%2FjXx5suFlPwGOyn69G%2BB2QSXmEBXXm%2FAYfWn8B%2BC6vmROtXltPZLe0MJPJvr8GOqUBkaLZnMWkw3GefxWviDIxPvSQKp3WSzyasuQbPELCvdCl9yzliOvxWBesCAK9exNtE0T4COaPsC1V2%2BngNI1UoavcZAQR%2BnBgBncuSQtamgYROZnSSjD1lljphN9aqDjEVDlZTBFe0E2enO2cGHKT5dUXWbgQvIR7NpkhHkb6ANkaHWjkOwMUp10HcKnP8%2BOWHUB792sfc0uVkO8NpLNh0LuBLxgg&X-Amz-Signature=ada280a2cafd565d93b38c5cc6df9184e815938ef46928d06b5058beae1a168f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
