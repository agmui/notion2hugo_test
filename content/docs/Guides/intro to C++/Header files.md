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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURWSBTA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpvsF215Teo%2BMssiqDuH7sXRS0JsEtxHCIs22TnslNjwIhAPuOiFLLcYJqBV5%2FdVByh8Xii%2BNxHzGBo39gZjEuJEEhKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZuehVj4d1CZmmcXYq3AMfW%2FjjZAJq73i0i%2BQZLylJpecd6O0hWnmjvhvEst7mCip2YUSH8NPqu16%2FTsVGuiplNZtw8amoXzwd9P0ChSShuZT%2FFLBwv5JKx%2F2uWQKYb8QLgs%2BE5ve7h1MiFUxhMzUTuI12a1aPqYg4Y7cTtnQ8u6eSnVWdMIBDxGm4TvUbDvrEAGpibyeGhAnJRSHl7PS18W4rb05XcA3uh17G5Eklbi%2BySmZ1E1lENHiNWaq0PrBt4gBqeIMcAwOkkQaezgmecF2KofGtErbz8N%2BimX1vQycwZ8%2BDAepSfRHIbRxiTQ1MymKvbPzAa9AgWYuVWYLmTO%2FvPodyoujZG4AlbwXOZHI9Obb%2FuEzdIjVZ2ifXfcIWqeiV01xqUFdTY1gsxJ%2Fi4SzEujm8sh9lFCoJmY001HhQMVIKkCOxmZNFEghNu8pM3xcWF5gV6Mt2cYuBv3MD43wZ%2BORTAIH9CRAVMkDyYufY0krAqLrESRsJQG86EEZFLKduNJGcxaGKvLg9eB1Xn0PplLvE1EsWcF2H%2BYU%2BFYA4ymgH%2BaqCwkhmeaD%2BDRn8nPNvl459T5Ph0IUlSl%2FgZiu2P%2BlFsNbTo2y44fyiAfTlxKtSQZlSalaCov7PIYpClejF17xdeOAZxzDHoqrEBjqkAT0Bgd6mi7Jbc6dU0z2Cx9OVsW66pxxFGQSSXqqbQ%2BBIiwlg9BYMwj7Cr4%2FVKBrG%2BRH0wpwaXn9xC60v%2F6178nX6nPTKkZI8GKcE9HbPfjh6r4OJMop9emd4vR1DY9pyM8h7wo7bOPtGJAqdZ5Hntrhe7GmSXi3l0Mb04uMKjgxOoHS%2B4mfexu22pPFTyluq%2Bi8ZmGkcVZVfhraDA4cvZIIDuVnI&X-Amz-Signature=0aeb051b7fb6d4b61dde30d3998a6a5541df2f8fe59c9dfede75b22485479eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
