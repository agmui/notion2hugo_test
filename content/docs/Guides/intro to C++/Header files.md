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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXCQT3N%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEv5bgsFhl6SywlNT%2F4o8SY8NsNJRnHNQiQ%2FXvj2gAPwIgP1br2s0QizrxK49iXSTrLBQgK6ZNm6SrjWnfZUSxCZ8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0uwwnqawQDhQkNqyrcA3bg6uebogsJ0koPaO5mV83l5eWPsbEu%2BY1gF1zzQPFSGK9euDhLmbOgG9HUytyD%2FO9TyiCo5B6mh3aHCUsnL5PgqEJ6h8KtAqzFu26yd2lOHlE33K4pwgoCQX43Scjz8VWYX7ii3jPmJHePsF3R%2BYoAzzwWp8JSoWOHmT0anRaDv25GV4GzZzAQkRbL%2BQNkUZ1Wt4MDbw%2BOBBZ7LdvMUhpScKKvWll0coCQJUlRIpneXFNF96DDK4Rc1tGm7fto6KcINaOwdIigISvXN3RFvxOJUuIEv9FrrrDm1kNAJuil01CrXGy3f3ILo4WLW2h%2Bbgg%2B6ntBuihVb3PsMLcC%2F3iS6bcxbryQzPJzHJUepTc3vngfQWiWVNdq4rPV47IoZRLlPWspspuw0LoCWrSv9RsTh4iBbKtfJ%2BjZESfQ4hwTdDmWAUGlAKGbsEb71r2OijxGY5l3psSqRPbqxueQc0Ba5fiMNvnk3B%2FWZxwgUwku0Oc%2BtqjU1yFGQiyeuUJxUYWnIYtF5%2F%2BnPQPWTbLoH3ru%2FwIvPNj9lAUaAI0poMt9MgDS%2FesWM9Fjjn1dpwALfy3cpNEI7utcM0kTlepU2CgNMUFA9j6pJ86qzKBv2E8TtwEunFkOGltdonrTMIaNysIGOqUBQxj9gSYhNBaJNUWXequZ6FabvCsjdjU7yFKSPYNGL8uqTrtTcb9YO2L%2F7%2BbCnDschc6pmZo%2FjWyWkdDz5IIGJsfxi%2FM78RL8x7TdMOTFX%2FfJ7D8WBeRvlYlfyc%2FgZuJCyjpdHW8Dv5XlZqne%2FzRQ5Gbf%2FmxSxPt89yLTY%2BtuNfuk822n7RY8U5pwzVrqWyi9jUB4Nk4lofSCPpkBtOMhmNuZ4iWn&X-Amz-Signature=ba819664608cd521a65791f085159bc652d82000807ff668a227239a2379cfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
