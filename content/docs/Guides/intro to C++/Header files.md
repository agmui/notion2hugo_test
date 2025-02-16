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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZMAJME%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBEX32UAaCujcily5%2FU0wUdWk4MVjH048Vr00DQbW4I8AiBzhQw0UbpZihvGDdFduKQxsb35bKYZvrbGuO65F3iJ3yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMLTFjOYKFzMLFeWw2KtwDJ8zufWuun%2BFd5diykKpr1cBKN5qwwKzbBm4HJD93QS%2Bb%2BGwHoQ4F0wyEI9VLQK8GT92QQEV8v%2FZQ4yoH8CyqvIvVQ2nD8FHetx%2FQw82usRF8fk0ZmIuhBy7swmfLEirUt0HOh552eOotoH5WVwnhBvQAi34crT8pdn%2B5JzFGRy5vGq%2FUkDcnZgEDwOLXIDSowKrOEEO7B6ygQ2UjhmRpF1XyY%2FQ43rDWYcrNx3h%2Bzuy46KVoSuBsOEztk6KTJqX9nwZnrILbvG%2Fb5rvWirXISKNLt%2BbZO6wqyqRO41spyzH%2BfnwJ9e55EQyM8GYlz1MD34Dv%2BVkxzK0aPce1vUlDkI6nYE1zQV9oPyS%2B9NgIXrkcXYMjY%2B84FJr87O7ALyVbEIzGazTOPE3rIc2pclir1g5rW131yxcPilJU%2B0jj1TbgkBLPkeG2n0ZxtJGtrchdMBQDIUuwwin%2BNjm%2FZrLfnAfXpeNI9xPe6L%2BH7BQUDWV%2BBYClbJgNitd20beWryYyTh6bJvUZTTnd%2FvjlIoX1desfeBgZqWdXKhjtTmM4m9ZnPAOoKIq0q6s4Qiuo6Zj8s7OgxKnLbG%2BvhHL3%2BENaVusli6grd6O2d8uW2sWas%2BM4NWodmATdl5nNf20wmKLHvQY6pgF9jYDFsCpFaddU7RicJY%2Bs9LWJjOqDJ3bXFxk2ALe6cP%2BmJfe7b9nnoQD1X1UGcZSYR3N0EggdZqRn2Z%2FyvBpwPI%2FnfKIZMlxAS%2F2%2FD9k0BERI2qIjvfyRHbooxQHjbPd88t4WPg5Sqd2bWO%2FJiujSqwOBtoQdgQITJJrPXvV1TS8ImA7i6qyPFcpPB2h3FqjBfaNFfMNFnlZ7N7%2F83j42qA1rkJjM&X-Amz-Signature=4e68d274dc96091a4e42eaada175f7ca77d10c6ff845af3f1d021907733993da&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
