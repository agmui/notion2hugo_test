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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNMNAH7X%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQN1mSQKhwtrR5PviofiZKHZGrupohGPqgTm6dtVemQIhANzKYEif%2BKM6q9fQ7AiGNNToJ%2BbByK0AKwSOYz4SfS3LKv8DCCsQABoMNjM3NDIzMTgzODA1IgzTWdnvBcO5LDNFEIYq3AP2AW%2B6KiL3tccmBJyeBzhSeOwVRBmebe6lF6qxINDJfVGu5Ms3TE%2BuYBoWvxeDP5fJI2sngjAV9i97dQN%2BRrQkqodZSG%2BgBBfIBnDuRMfs8V7HnZ25e2FM7DCuzMFzUADp1F01ZFaosCaOKu9HByD0Mb1jYWfbSA1yoyVZsYPD2xpPVj1CQJaVK2dD5SgUfBmdocw1LKdtYhD%2FM89Lw5zZ5%2FoeDWUCOCHrmJ8DhNqGaYzNzB2uJZZzI9yJyf%2BS5JKORbbSPTgjyfWe8eduF%2FnkzM0gouAv9N5RC9sHy%2Fl76v6%2Fo3Jc3%2Fa6uHAM%2B7Hw7s%2BvRzwwFNoiciRKj%2FXt8Hz7z5hDHquEdl7r9HDp3rEm7rCoYfp0OkeRmXzI4hi4ebKoRCZsyQmv7mtgELUtc9izvNvhNPXGa265Wcf5xY7zlpKHOO%2FDLOm8Lx%2Bi8flhFhzIWa4OTzL6sPdE4SuItDMMp2mcAy3ld2lBVSeB3iSJnvEVLDu3cn83E1uyOhUXbNX0KiUzYzWy%2FDvlnccnlNW2i%2BQE2O1mvbvF22cTSJF0tioiNTvowXlctw4Yo%2BnnY35Q7wToJfM2jkT3fASFZq6Z%2Fnx6XVGNsnFx98sroFSDUNyKdSeHsuNqz5LCCDDcluLABjqkAYPET4vo9rIgDwblrRM2X8IMcKFLOask4rxEZD8zcGcM%2FsPaRk98b%2FTwkWpNtVLL68WnNn%2BHbMb%2Bp03I0iGdimdA573y8YHb4Yxcl%2BbnJ2f1BsQ3xBSkOjCwYZduhr1q5nYP%2BX79SqucANYgIKd%2Ba2lto%2FVuYqMpGzLyucqP9VZNkKXJCBj%2F3mmou1cKn0sUogRpdhVbRmRNQkbkvf%2FCIXUCXsaI&X-Amz-Signature=ffd9b5bbd41da2c4114da99294582d5ef7ac941c05d5034e121a766f05331ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
