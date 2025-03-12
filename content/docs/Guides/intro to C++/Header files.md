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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDJS67E%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEr1vSmAvucq84u%2FUZZElf6I3J7b%2B741akU3eX5Uwq2SAiEAs8%2BeeNPP1dGRcVG%2BBstUCyu2PfaJzX7Z%2B8r1ChZqBqwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATypbfXytOEIQzW%2FCrcAzIuiOhgb9GppfwV9JWsLHzb8MKTj60sh2inVRS31zNFdge5iF3O1c4PVmxzzCZ0uJL9L1CIpf%2F5qCBQXKhya8FxXy2saPkfmWq8veOQHnhSuEJOTUI14ImKd7%2F46wvN2kLe41mqY91i07ajl5q8LXo3PBnHK2K84avcndM4HDmAO64X%2Fejp2O8O1%2Bbq4oC4OttOuFlq0VyHa66s70HErCJhQfvUst2As4dd6PSVL%2FcxVMOceitiw0kcfn8xFtsh8tA5R7oNYzZwievGrIInm0%2FfDzoC1b6p1vgrq%2F0%2BuMXQAL5yzaMJNWXcwcGqsqPYcFSEY7N7q0WLzX8f6eIJZeKGhNgHQF5KjErxg%2Bj2Z82cXbDWizfXz4Zf3v9LvSU%2F%2FDwZuvQpIxZUGMZFERAt%2BpY8K%2BJt%2BjFvtVOconMa%2FEaewX%2B%2FBfXykk1E41p3BzcNLUb7FuoHVgK7BP7xngvCmMfKxhv%2F5o%2BT%2FoKwPx78c4KaKhpffDZkXR0lfKhv%2BNCZF9Q4FVZK1hQaPEPnFQwBHWiCqHudusvrz2dAhMLSods9NRmwCEYp68jAULjTr8TnyGN2TNG0luXkSa%2FRErOqW%2FTMTvMI5bTFVHOsxZqXwt3Fbw0A9yjMwYXpW2F8MKv%2Fxb4GOqUBrrKrfqbBC18CtyR7wSxb6KHcIN%2FYS3UhVAEXRWbP3UWkC974AqrM8ZUxZO9oKxl%2F%2BKxjNbJUrJJQiklPAZ32Zf8%2FvjNQPk3R%2FqZGnf2hxmHa9iWYq2fI0ALDNdto1IPCNL0E95eZ1eKoaPos0XPf0ByEk8O%2B5wPcmyZDwqJfnVteSDrnaRmpmV%2FlWD1wqS9GTxiq5OxUnVO48b7evGxMM4%2By8BxF&X-Amz-Signature=2265c54aae6570d9565ff990939f872a0408a4b7d4964e4fac12da53a74fba10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
