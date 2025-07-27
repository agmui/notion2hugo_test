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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BMLNSI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGMStGAFh7gtb73ERrYyJm3arZMZ1snSk%2Fqfr4l1Pk1XAiBO%2FEiWcAmdwkN3LuVEh4C%2BhbBX6CRCDc%2Bs6SMieXMyKyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMcWu6ebtfdCtW9awGKtwDP%2Fs9ou%2FHspuSm88ir2btEzitBWHB4YW%2BdGy3vhcMnYtB%2BCWaxhYlJ2H9sAICIuDVhr106zbhA2k%2FhYjI605pNmEhjPYQIiQDFeBRX2ywSKzpho235GjCzYBvU6RzNFycpX6lVvZabLhOmeXCuuwrjn3AZl%2FihfYSo%2Fy6%2Fj7VZJTccE5nyxdtSTBQ4Ci%2FY6D3%2FxG%2FHt61PzHCV7WlLlT%2FqIwgSv4XXayc7DHGQwFlWRSPWwT%2FYzCFvCtKHDnNNxv69nvMoXhAj%2BkA5cdCe4ac8wPppa0tsrF6H7XYx26%2F5zIj6eamsJsnRDXKrRMdtCaCLTqcaNy8MATVnlLeMY4ZSxzag%2Fld6EDdMxaH1HuwMCtH58mdAkVBcuX9rADA4QBNjqhRPKlKKbjbOy9LF98PxgW4UtvhAuZ%2BnKLxbIErJTRsSyaOvihwHReCBk3VYc10oMLmmT%2FO0B3j4ufPXqhm9x7wakJSPEHPjGjK23%2BS6nK3eQP1YyFkQ3acEtEpJm%2FLXw2G9RPhG9r91qPLrP5N97YqDqE1Zc2lSCYP5YyiO9rkEY2MaeFUJ9etPNEZ3VXE%2FFGOX6%2BVRbMEwHY3aycV%2FHngwIMOJqRl3yhAHCQNGHIIoTHP8AahxIsTVawwh8OVxAY6pgFR4TWreUY6CKtf7YMK%2FfJuU%2F26bxGwNJmkw0N2RV0qCjui1X4M0pN2Drhxy3fxkySzqpm7z6xLz%2BQx9BqjC9Ga8iAOclLLKAKeqOdu2wOJXaqkKaTdE4Puh1voVC%2FM4mnPbr2digNk1wXQqEH0sfv9wPFC2L%2FGNc4WQ33KLHyLpH7a2fYguawJfuaYCvAHq%2F2bMJzOllZpFGcYVRZddPRFIT0HMzxO&X-Amz-Signature=add4e66bc3a4221a4d710abc48e52795c8cefa592e2005ee2957f818920365e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
