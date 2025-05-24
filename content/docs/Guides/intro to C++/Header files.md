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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFVGH6Y%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T003954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDSESySdvp6FZuEn3bvY3iGcah1O%2F56IAJ1QbTdFy%2FpeQIhAJ%2B8ZdPr70V0HBEfmz0UdB3eoBfba3iRWzk3XWR36FvgKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsXDgeSSjiWWMbkR4q3ANWBjh7QQiXQKpv6OjXap9W03WoB%2FkiUWkNS2srO2w2tptv%2BUXKnHIltbLhTopjR%2Bo%2BSGnSDdXoTxnft2qhbs0tJKCQ3PAQfnfbIsR%2BvX3rLLp72rXNsIYhIRaC%2FHavoe9o3oSHDlqQtxvCqc6ZNmprPUmg%2Fz7Po9r1yiBnG1NMyxiQ3X4bb3lxocS0akenPGqvmNWH13AhSebMV7i3jM3Lk3TqjioQSzO4Hh6Foy3IL7WGk9lIRmTh0whenYu5g7puYT5ZjmGsdjP2t5okEPUeT48FNdj8RHAeQORdcoQA3MiDWviV88iRvYjNqClJmF%2B3XhdOQQX2fiDJyFffD0kL9SUCkuW3ekQFoHQ%2BDk%2FhzQAFdh3U%2FyLkZ5XVdsl6YkutSblc38BiHqzsFw2G8Ax%2BJRMzPu8vRCbxsCLoQjHxaimSkA6dYAn17vb6UqxNFkazBRHJ%2FyX%2BlpKIOAeThc3QJtmzxfD3c%2FNZTTLiGwC%2FRoQLItDEY9gMCAGhWWzT8Fm%2BLpWmTKXtKppiFttvjZ38UPHnZ%2FdS9ULhNh4ZFilSyqerjOEVaI12iE70nyJ6TiTJ5fueobyQ9Hq91qlq8Ol9B5NEuPHdyELhUPeYKUZCveZZqC%2Fms9FZ6PLDHjCWkMTBBjqkATTDjTSsDerIRDagdqSAHGws0TG5YTom%2BH2YCMzSZET8pypHId5EqJOZvPi9dd4PzstP9JYDmq7SWS0FyxbbhCfmxTB8cx2Usq1aalG6zr%2BNFY7VbWPs88g%2BKtd72q63Vq1AifNbbD5F%2FEMtB1Z4v38%2FMoHRGyG6fDADVXOmZhZqCPh3Kb36se0H%2FkWLa2E1RtAcTMs82DgUQanyDiTfIXnisdzX&X-Amz-Signature=14bd1cd7cfeeb6f6a857cbd3ad6ff645c7756375785e10901e8479e88dcf9f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
