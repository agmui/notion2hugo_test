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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CDG7GG6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5eleuMHLSh8Mg4bxOpGLEmChga4DQT1aoOaSjkzWnAgIgIxLAUHPqecovvS6iHmtth%2BPqyEDaVrXJptv4D0aKUKcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAZMY5buAL40Ws%2B2wyrcA2460tFfwU75JJzBBZdm3X%2FO6QDme7Ue3PtuIjnYT80CiuYcxxVfR8kdULRhtZ2AaZYNArXZqQyS%2B9L1ErQTYjKW8MDmUTH3Jp%2FUqvt%2BIjWqem5AnsLPMzDsUGRy%2BCJX8ze9kpvTiYii4I6pmJBLcqQ1Nv3zkYBODhQHRhvJKG99tujdXKf%2FoowWi%2BZAGjHr8o6VIlk%2BBUEOP7lq4OBgm6XF1CxJuQfuyyF9pG3A0mcGMcqsrn2SwpzJt6J%2F0OC5Z2vAo8A%2F4D3xS1CVl5DfpBtoEYhUlN32WChgeBHNejwneKp%2F35Z6C%2B78z%2FHCfEeTbIVP6MiS6epxRiAeeeBS0T%2F2BYTDSecQo5TElRbCc6QHtWP8mAanUN44DuQx1vgtrZJWpdn5YgytBbVz1IHKOVLZ73WGEMMI%2FPuQiHbU80EtDMYPCXW9BcO5ChM0cKthHwgmJn5QEdd7tpIMJmPLZP5IBrfL%2B7pKfI2wZQk4MXJrZAvtV1QxaPbgaM5FtqNGZJvQn3m851OjdoXZgoJZToNsD29Q72YRay9EFukKD38gYXHmvDmpx4BKbmOiJ5MsjgQJtGme1NjyUDV6pEUm%2BDv1jmo2L%2BmRJFtfWO%2Fo%2BW%2FSSCHYyLcKo9UhhCrUMJLW%2Br8GOqUBlSy3MEo4%2BD67upgRCzyfEzI2AI0X949ZIndS2hbFvniGT9Tq5A%2FXGMTFXdErCKugle5e4zMK7cC%2Fnnobf8rik%2BpHLdDhKov39NwPSafD4FU5I7%2BbguPpvg4pMPI44V04Lp5gqrPYfzzjChBEhkjHIGFCZ6OMBR5VEbeQUsRHcSOYNND2x%2FO984%2BO5XikIui6cBrmRHACamOS0VIgyKEmQm5q1XHP&X-Amz-Signature=8afe5850139a0b97bffc08f2ba551f754af16f3a59b141aafec7f1c02343f910&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
