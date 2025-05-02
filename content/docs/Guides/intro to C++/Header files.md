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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI23Z5PE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIA%2FWR6pzB68dd0eyff4VgR189TaKbT2%2BuIQ8pummefDYAiEAzzaXFzLQwvWFZJo6PPCHifHAt%2F7V9RGOM7Qu8fkHBMkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKleMptZEICrB9XL7ircA%2BbPtt6uwxV7ge%2FTJ4%2F18QTHJV4YPjC%2FPKU2w5M5GX3JLVHv9q%2FTpLlNsuduIk0wdQHetdTXpoV3WJGuwqT2cdJd%2BrBuo4kI16nqWtgEiCMoJi%2Fnt4run%2FpyHXcyCN%2FsqsAsWY4Ut2bDWadlpYdfKbEEhQapJJCHKCXZ1yKoZK8Ya6qbH4eE%2Fgvx1nw6t2sMtkC1gutX%2Fu6ocarRcspo9tpiBJz4t3hIAGon54dOg6iD64HzylF0aJnaowbJOWobbDOazEXTh5nreRIiKbSuJug0e%2BkmftarZVtx%2BYkoVNKMYLhsNEe8mL0HjJHqNiReX60J9eeBrLNQU6taQOOfgsnJ2u8A6LwHoit7Ado3IIrUeb0d1rw%2B9MJAun99A2nv4A%2F%2FAQBgCOw5VnJVEIYYvWqnIC1jmJEaJTaytRZz9vHN6K8GFiS6gf78UrDqoxQKgIcgGl%2F9F1%2FRE34eN38QPS%2F3WYh2xEwmUqX4rsc1mt944x9xwjQSJ%2FZ%2FYumsj4145UbhXPu63e9BbT8MWJ88KCV2wLyPLB2vdMSumFOSrjnH65NbC%2FVuMQr5kuqtoK4hkRsHzba56nPq8vpMmbog2owMCkaGQC2wHsie1RChOSMHm5ZvZ28PCOjLIeBMMKL00cAGOqUBXmRW7qNggJHp62mZ0L6l5isxi%2FcCYHhpMkfR%2FmoIHMcnU3UCHyPo6RX4ivRtZDyfpB6z03Bb0DRPk9TWIm2JRNybg88OhXKbshopnv0uwl0zrBkHV036NxfBPzow%2FeFaU%2FuZp%2BdhjTxc2AXuhoHzaoVGi9MQYQbT5Rtf5eoBMWCQKu8rewhkARqpMna7kLD9Wcauf5%2F14uUHcHfANEM14raANgtQ&X-Amz-Signature=76e20563345f940a4af0af23b38458ee389cc93e70b8e99ec13c34cb1584a22c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
