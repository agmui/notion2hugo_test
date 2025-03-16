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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IYVDTMY%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATNwU2bActyoZ4PbmLTK0Tz9n%2BHhZkWXcHT2o8chTd3AiBszM9AjoB3GnLuz%2FsDcKgTc6kSMWLYsShrOh1BGYA8sCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM835ciOSv8YkVzxD2KtwD0d78K4DHFqu2fWgxg8Q45PsiDX%2F6tioDhUAZtx4eDa2nKxbF9NXOY7VyINa04yMRC67%2BlQvbbJ0CYy3khLmFQUGqW6MdiIOJ4Pg2L4ELU3nrDMYmcrEaCEimSw%2BMSILruGM3sRLeUJxio2qMy6zqdgpuDsMs0feHMBwHqnQ5iTs39WBjD7e8OSFt716eJMdl8nd43arOblxBNyudKSLaRBs5E%2FwEoOK6MHskexwKNlpocgE6UlZMTJMLOVQnAmN9CapT%2F7JBEA6ZCFazy4krD5i6wgqJ%2BsUoB4n7vfd4XifHhZP5KcoM3tiGMfYMy6rHpgjTiyk7yZkEZ%2B23j1guYta9attX2bqCDknLDArINHXC%2F6W99Wq7BSblCNnzV8uUQTcTgJKZcQbSo03FfOpxtjS3K%2Fip8kXIX4W8%2BMnzG11Qw5Lh0kdGEQVwHZpfAMfKcjPdYojbV9fFKlW3qwn5vgI24jh7H0sKpVrfjpFxE1Op0d3mkOHt4xGeqSXJHjhjSlOixgZudzdfSm4k4ZnkmLDlSEPBzCfoUZIBz5I%2BeVfYL%2FK1zVtn6Rqq%2FZmB14Qa%2BsADiMzl3i84twvk5ABab%2B9x%2Fb7hOclN%2Bn302YClDognOvwH38Ey4KOFHwkwy5PavgY6pgFLOpRCXT2xz7fcwp9sy01QVGl7%2BxDwbK5YyWI1ukGLac5IliRb7GuSnAJ%2BouazjlHbh2QmIgr3%2BLG7Iw3y3Ht5JvDpxo97YeuD1M8dSJgTtZA%2BqY4Wc3xY1QXsAOaoQiHSWG7oN41DyPiF5tZxxVfC18d96dvEIjN7nGHBS7Ua1NKWUDSWNvUjrsQrOFAS%2Fugu9ydXbMiY62YI4l3xNIOfDVM6PcWj&X-Amz-Signature=10b3a3aa300cf5c1b879e17302652660b8735678428a92b0764b4e9816723311&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
