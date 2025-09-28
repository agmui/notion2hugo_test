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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HLZK7ME%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCICQABT7sWRxJ6zRV89M81XTmnHchSs010LpzA4lgMrBtAiEAgyMwzQuH%2BcZrz1mgUSdgx6tQjbmWLjIP7eZTMN%2Bn3%2FUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDewsZNkLYThI9ArISrcA7wKqDepmv33yDah2vQqwZy0AZymaMKIgQttuEisoL0M8eNh2DOBOmkpOX2Gy0SsVenygSZt6JGqRLiHkbb4Jx3fcVlAThWZGWSeW2JEIiU32wSKAx6kpdEa2HhhKRCyffiaXToUpgnQB4P%2FJWkLzQisRAdiaNi4LRSLlk2hJxsIP%2F7zpHMvGM%2FuopmSt6%2BqJ6BJk%2BLRnToe5a4Ho2u4x4nA2sE9LyIVFmkTv%2F4ZPTJtc5ojtXWllKQYXmafF1p8yBMmG2Q4wJoAjM%2Fvpsu%2F1CGZ29w%2FuneG4I9KECuj%2Fsj4x6FdQda1vvt9OUkEy%2Bve76Zu%2FQyHnzW%2FKgaJhX8QzhaSjsE%2B%2Fu0Fc6OPUyH4xiY8Q8sf6G%2B8x0ZHeEH6jTVupSdiOhQ%2FrgdM1z1s5sNFZE0YZHuaIPnaYWjqrRRaCqls61a7SNbqyKMcFqoJ7EmRZ2MeD0Nz5fHRX9ZuAjiStkKADWXynWezper34mXQtMxUyiNOnzyZuPVueDVD4IKbCynH0N8%2FIr99z0aoexu5fvy6L7y%2Bd3fxKEFRtx2Sw1SeRnNuc%2FXfvrQxWSo3LEy5%2B9dv14FV9h8SYdUR1fgbdlw8KcAc0B83fACIpPg3V8TQr%2Fl36qsif9h8EgcfMLq%2B4cYGOqUBJz7cFJMAUv2VQJMQo2GNYXt6F%2FmrKzkgy6NCtlVKVsQuPYbuzd%2BLd%2F%2FCV79TTyefXex13SV8GRzjtgzkucD4niVDxKDxAsWF%2FPcmQe2KshMfjpRWdExdrKovDwvHr%2F55xX1p5FGd2%2B2d%2FLjfdkPJHtYx6KpFWSLQSIaF%2B0nNyQk2DDqDQK8nJdIW44ED7I6z66cHRH56D4%2F5tiZoNvJuD%2BNb6Via&X-Amz-Signature=16b021a4165cf1cc75fa7836f64dda572dfc01fbd047ac0641830575d2eb87cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
