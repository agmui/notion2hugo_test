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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUNYTL4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCSz4yqL1TvU02I%2BwtVu03kWJJhr%2FlEf%2BuN9cYHFQCDwIgGDWgqN7fIPhwJE90UZC29VvIfV4BkUThB1FGHpLC0ksqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL11Y1L1oITr75e9wCrcA0cQaCRjjCStiaDvCHW9DJ7GtprbhhsGI8AmpMXDpKHPStjWXiZyYRPR9RSFNgv7DM%2FHxjQc2VPPKPnT%2BkMMSJvuoSemowom1fZkiF%2BA%2FhPtBxEvBQiPoCO316%2Bf6cBVGlmNeHlYbldiqdzBfDpjUi898SBYMmQAczNXPlbRLaAIMz9ObU4R4Qju8EXMDR3LNVivbtOQMHZ4Ehq2t9loCEXRpmgt%2BzA1EhzJdILhh1l0i8UdoS7tEkMQ1xflV9j9jLMizifjt9xjnXHPvc57XzX1afBaIF%2F%2BOAEaS9EoTS7IptF%2FVM6Jc72STUu9VCqlQ4gMzFkIT03jrOJGPPJFmvqXtrjIcLPdhVN4F%2FM5kOfRJjuaHLxdD9CNOAKOoY%2B8nmQvDakpvM%2BQdU2L68YItJ%2BQKnnogLCtkOd9SC%2Fkn91%2FQAe7sQAmpTrB%2FSe%2BBWahIk04sXQ%2BaDfVLxgQkwtdPcXpDYq2sDBCuZlcp5W%2BB60FFsbwJYscK4Zw8nRa5zU%2BvaVWU9DUOAxYRhflHFSCpgriD96MNJJFlrqYvsHLEX2E4YDX0hg6ELpW9tw1VWn%2F7BzRtYI2hBYY%2FkUAA%2Fqdj95IWurmTWlIm4GnjFLd%2F%2FpYzir3akQiRIPCbXxYMOfL370GOqUBQiNSLstCC0d0komaAEK67qXDtzNx93S%2FgvuR3wQ%2Bw2HTKwHaRNyFUn1vhs1dnN3LdY%2FXZ8aMktD2uLA8KViezqvq%2Fczy%2FNhyZiEg%2FjR1TJ%2FE0Kz6x2qfz1ONXY9ozk1lCWq9RpZ1fpbbJcs0aZIQoKSOS2tK3GC4DFIoIWaJ27ccovy20r%2FDdPjqSdz6%2FaTsLQ5lcIU%2FYUdgXLZNhTrNOkL70n7i&X-Amz-Signature=0e79a9936e730678a514b8acf292cee99d07a0e3a96657532a02ef7e47457135&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
