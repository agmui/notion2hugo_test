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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTDEQNWE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDaMCh%2FD0%2F1u%2BoK6%2BgUf4%2FEhW8jTK8SlGGmSQ5YqU22LAiEAmMBcdB9RTaMpzJjEmzz0DQxC4q1ELN8hoY%2BiVU5JA44q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGD9QbbaClr3AdcITyrcA2KXFgOvu7qZ7WOuTByz8r%2FEuNKyFsepBLhHUdzqL6Az7L7%2Bs2Cb8YVYTpb6yBAisiiwn%2BJ3yKrkssHwJi3waUUQwCWlbwVtAfDvnk3rEvS2gr9FQTauHB0YjqVs5Gon8b%2F%2BX1BeOeHCkIEh33Z6QyhJcvvBvdlCpQ2MPqQrEk2b9Dffdzs5kc7ePoiQ5dm%2B91uXvxrj3%2BGdk80wdCPi499RwOqDqUv4TnO0CgBfrd7COjtvh7Mey7eqkAmswQyI%2B85yxsrsFDG7Rz73fMfEKkpiIKk0NlrqJBJHU83XizQwo59jqYTqNEv9xquT4UgILasD%2BvVI8yPHjGQPAzJehD73RXKwfG%2BQcaD5aySDccmRm%2FvgKBBsZYUrqHB%2BoSZqQQt20amWlalX5bSp4fPbUf25jtiZUn01mRCF0VXERjVr3keTyZP3e284fw73DN57lpgmP5tjk0VlFRW%2FYYzpRWD2bCdxM08srHfl80WLc27teHTz2dO652yjCrKo4HqIGP%2Bf7dDCq6q%2BN4eEJ6pWv7JckCfHU7PHSIF%2FbS5uGEZjHKzckfmaKY5qJ1KodXH4g2zDzBTlbNCdJ5K%2BiHHsYrBEzGlRmMRBFqwsDiUGN8oAb%2F1JAVPWG7uBRI0kMK2UhcIGOqUBwGxa7xgUOh3dJNmV3VeVV0nCX2SllJEDkmLDY%2BeyXsv1zYqMVeErAWA6Ff25EUSb%2BKdlY%2BGj47RbrimLpoPA8vT0px9kVzaz0qn%2FO%2BiYJDKZiarBxe35Ehku33rB7w654%2BiSwZkEbFvMrI8gKEsz6kHpLIhW7s37ZqpdiCzUAi1uaER5U93ESXzFfsGIGyK%2F0VCpln6uDJCdmEeeDKN3u9epkDYk&X-Amz-Signature=b74211b0f23ef094c9f5cda2c269195027c80d1f746b93f3dc01045a304df26f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
