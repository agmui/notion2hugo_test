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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7JEN54%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIGl1yioh%2F7oK1iSnD1HVrYJNi2MuB5t94kHFkpDwKy3IAiEAksQAssa7ZspZ9Isrs0zu6w%2BoB6E%2F9d%2BthXNzzb0KPzoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC9rN0XiJmlity1oOCrcA8fxXP1vu2dOupme2%2FsTTABYj0VE9aESNQUjVmKMF9ZHrjjQDijb%2Fyns4TvUcPkvM7pDS5H0q5x0P7bb%2FR5%2B%2FnftHDTKAyQ9UlRr4tt%2BhUG6ZPduVbQ2%2BCP3Z6pJAwqhHJZPEJVd73htPe04KTJedhVUKpBW%2FkGfqI%2Bdgf9wA11bOtTxOSD%2BhzZ4OzazPi6cs68eiPqZ%2BhA53hjkPKYuZ%2ByL3XY28KDlgzu48SOLM0ISr1Jvu%2B8bX8T2iF%2F1oO7rPnmdxHwC3WL581Fds2IfCa57Sdb9mK%2Fge3dWq3QZzfp8tSNU%2F5ChHct5Rhgax7q3SYwzVNQwka6WfLpKLqFTV8vhN%2Fw7G5wYMFHE9%2BzIq6nyfPa1ldQdElxaYKvOvAmNmglAFpQvpoLNuqc4Rs9jo12BWGmhb5A9R7ZIA9jwFYPwlSFVS1dl4GCm5fgEsYxaOQGHTUMGZJ6LkgvI66JfiUGESX5sk8iqqtjlXlH0IXsq8R8qzdPJlVKdfBHXQJXkXbMWaAUVG0ibCFXAqq98UyJGyLDKM7X6t6ThrZ0jD60v93Oh6pmaha2NfFJB3ZYUM0YOE7JzAXbAK9mofa%2BEOai%2FUO9TOk2fi3qguMp9qzGyFaeUdE8yPNyT2HztMM3e7sIGOqUB6KKOiwbGiao1JimJ5nklhmiDE34jgPghaH3EM8bwEJKkWmg7DglB5p34VzGOGR%2BLTJcaZ8wuqDtbymPEXE3oxRs3qATG5TuoGAB6Y8%2BDARlmKpEnYWnLUyy8G6otva0udAt9xsoBaTCrnSlgH%2FQ3DixHZVz6ZhGtre0432HotCOxmHXpTMNTO96jnL8pBZAOlFYKdH87C3rI2KuUkLc%2FpjLS9p2q&X-Amz-Signature=fc47fe9b24b804860de509aef7f171636cd85735ac35a4a09fefdc80c1d7a026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
