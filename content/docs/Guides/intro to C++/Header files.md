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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674PW627O%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQClVooJdiaEalQp%2BPcjaVBJAFna%2FnVGsxiPvllaJpRLjwIgZatTRCKVXlv2fg3Uw3dBAmg4bThy76Avmy%2Fn%2BoG8CfQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOZjvg2kMqzNb5xDnCrcA5LwMS79HrLxeLR9sMn%2FkKBqvKPakPbAKBSnDx4D2LQt9gcl%2BLSuwN2eXLOtofmA9bEM3MeHpwSTK2ZE0PewisEN4nwV7Z7Vum06vyFgbukZ4DPrsVvtPg5kHY10NH97xh%2FoXzy4JbpyBuEkkMOMDZr4ZodjrglRIF1Vst9H7ogTQk7hNJDa0hc7A2yQ%2FElLMbWog0%2BTjftQosWimWOnkqYrIQOt0JyWgngna0uAxK%2BpiCrm7QcChELri5Re76%2BGFXGjd%2FA9OD9ItBtZLtk%2Bjc13zILZ4p8arJRyX18vj1ljHvI%2BSsjn%2Fm5r0T9%2FTpEuTRtRAG4agNoX31jtXEr5J2X5xYt3jkrsoIygiJ3dwXZJdzIn1vTAytJ2frNRN6GLPAEfbQrkMXUmaqvcNteshfKizQXAOjSPv%2FlYQmuAfIXLFhy82J80xkWGuJXQR42V40QwKBZ2MXiwOqPYJzU57D1B5PpuSlwtnR6JVKiieVM8aoMg4rE66aBhTkkIJ%2B%2B%2F%2BpgCW4KeZudI%2Btl1QTRTaXyH%2Fj8xDIOA8pmXApoNo7lGf7YrN2JUeJsL%2FTtR9%2FNUf7DUbeeHLd3oHKh8G%2BIphvLFZYQl1VPzN8DIx9yB4ATDCx0aOQJY7m1k9AAiMJjZ7L4GOqUB1Rk9ISlJVLuKPeLTqarPxIuYkViS4PZhggh%2BVSGELoF3w%2FSiHTNFzgewRHk0tZLjRmuUDDpkj98Q3LIofprkIoruffhrISddsYXT8KwbrsgSUoEZ%2BJ8ItXT8qgBffHem6Swd8NhFlRG8NP8cGMIgrVVJ%2FFHwAa2qRqtEVwcalDZUuhlylwc17u6Bn%2BjVjxHa3PYRj41ZIdEmHQm%2FevV3f1rN7MSg&X-Amz-Signature=49eef30a2e43a091b86de4ad8b2271bdbc8c87c723cf81ae60e5dc2e4a93efd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
