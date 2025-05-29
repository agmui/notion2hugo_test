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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QIJ2MWW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBluKmel9yocdKcqcCRQAALJ4SMa6xWvHZgBzoulimbsAiEA8LdcHO7O3%2BSWpJNPaaIvmWbbFhFVFp4QZaHKsour8hQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE275iLaram9I5lQLCrcA%2FvlWXOfN%2FxtFaKewlhojXRIjO2pJe%2FswonSzfXT3VROFnoQckAP2NIBGEafl4O2pDPMkBXmwFx3g%2BlWIw0x8RtYAr3KgEwPmaP4aoVWON7tRY8gYFYHzqt5r8wu2gQC0OzCICSIg399MAZa%2BtqbyTTs1HNpr1lkXoNebOaevmHWUuWlcChLTJPkxBbhoVTVqakSxMAE3vmZeNgDV9XyY5dkL%2BH7xTtBHBuKcSQPFVqZRmryiOBvBQlwMAXkXwcFvB5A4kKIxu%2BhyCRdwExSMhmOQyP%2Bqbxwz%2FgaAI59DjmExRgqk3SINOXh7%2FT2RcgblNhEafnoqlMTR3WFZSi3MuVhh7Z2LDAmly3h9Gh7iivshl5zDDQ0M6RjAJ6wtVjPmwCHklqur7FFfxks105HVvJs%2B3WmolEWDmVoTwpg%2B9L9AvbVKEPOEZp%2Fx%2Bsg3tfRX9gSbH%2Funtv6h8Y5JaPpRVXsuPegiEShlt3QkEQzQRxDCD8e7BZK1aJMEB2ePsEUWI2svx0McFtA9GGKW2zkv55IEW8Ud7gPXPdrXY7wdZlgLbCpikLKZt%2BiaDHdwserCPxlv8Jvu93nc%2Fw%2F1MbijQb%2FUSSWNYPYsEMfGN%2FXKsk3G%2BvmrFbSGfAj8KKmMOmt4MEGOqUBsoCRqSyHsxr4vH1gPG8A7PSzWpGfPuzt97m%2FUXab%2B5RMnAvEvp7Q54PqFRfhQ2xXlqlt5pkbPTcCIEIEZAW9P7fcaDwAEZS0ChitMJAnUGWSFUy9t1B6yqXd00z%2FDCJe2PwfsD03jdL3I0FAfnlvsJk8ST1TI9i0fk1X8tqtp%2FAs9Kxt49S8IU%2FsItbY%2F%2F2WZBsPEADYkul5G6otNTqVLxK5RQX9&X-Amz-Signature=7759b9b1d7901c76078ab8115a463796d45fa5b961b61825593a8e19ae12454f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
