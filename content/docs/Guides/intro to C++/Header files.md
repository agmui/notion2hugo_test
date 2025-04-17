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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XX7ARB7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsj36eR2PYrqPZAwzxHer6U2vE2xgj4p6h74g3IGkX3AiA%2BHqxIfImzW8mO0a04jQNhEd18IXNVParkTPcCE5O4Yyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMqdvNamsiVEBdnojBKtwDVe7mHoLEN3XO%2FZKwyIDLsDQpSAPPxLf%2FQqE8B%2BcrVPtTIG6t8DyuLzYcjn5bGsYQPUjvDrVNNjEmeSUennb4dCEJj%2BcQkP1o6GYOb%2Bi1i02UWr1gBMxPejMzRphyNs3dwWUNbjMhjekb1PbkNBLAHgPN4CVIiPR52k1wgTTkcznuLSy8gq4FyDL40J8mqbkJrkX%2B9yscDBValwsmrTpxsEuuHr47jfwH%2FLYDpQew31qAUknkWXmaL2R173KEmMstDAF3mq6LTVB4JL4mYXxiw4ZeOEXSvH9O2iKwEDz7xQUQqzzFaCNng9OQsJOfY62NBcBOYV3%2B8xobavq0cMy0zIhw0G7FZ%2FyGKrJXRKKc5DMVojCck8SgmivuZ724r%2B%2FygXICvVfRmwYNpptzLdaN%2Fm3CDJjse%2BlrO1hJHIJ8BPSbu5aNeN3M%2Fe33Js0PCcrITcm3Bxxsm3K6RE5Ig9n8K4V%2FPWRvInRHk9EHJajHlnwe4MG%2BWn2QcRP9XGnB01IcNQYK9dAuWj8ovCC44ibGgtT5LZPqsvIeHSPP22%2BsMyHdqRk5tPloY7CGnP1z0Skro2kXpwYToDCeGldkBeO1IrcVC3%2FJTEHXKO5xnSDwtxyCCX7l7NSeF5nXJX0wm%2FqCwAY6pgFhN%2F5UwoKCeGEz8jQIRiIH8FWlJLMdbSawOlhZB3leHunnSkhOER1Ibtvju64o%2BQHTiDvziGQPW0LmAU4ErXrmwlhqDFY21CR8%2FL6iItMGEvdrnD9%2FMnzTx%2FXI1PaKxrk9KW0CU78JjuK%2BIU2X2Xuggzf1uA7UbxJayKkbn5st5yOHNCwraGrYGbG%2FG4X5e7j87woQ4LwrWx8%2BgRl%2FIAsP1EvvXUeF&X-Amz-Signature=2a1775e51216bfbf9c1b12906adc4981c2c9caf4f50f7baa85193510e634576b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
