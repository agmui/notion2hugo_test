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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7ZIOTS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOlltVbtVnZ4UuNxIWympLLxCCcczTlLVvjDtRCCodrAiEAkTGU%2BxrX%2BPkH5LYm%2BaxeWxyoPpK3P6aHtr3EIzHg2K4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHEPiX%2B%2BWcId8QvUgCrcAxowMCWIz4zBFe1KSkFfoWAGA08C8kzXPKrpqpzLeQT0YGkbkLkU1VHVEFlP7OfqhVhQ1NHGcm%2BqfTMLPCmA%2FbPwBNTqNSGa75a7Bfs4Sjc%2Bt4Pa8n3ltluF6edxeAEhCn7%2BOQYzRtk3oUXupmkddIeX5eqn8LNoCMLdM%2BbhR5EXSPCFinenqpTUgKUc%2FJEIjIHDsUcSCGSbvW0G9QlYZaN9ou5Hp79SXiPCHBUgYmNjeIzT8FJXW2hZNxF0rlSWx1kwUsXVfXxkUdqM1haC18qnDsDJu%2Bdy6qtSZteZVqzTYNPo1TCBQ7wGGDFbJEoDZYQHh8KJxFbrUGkKZYv%2B03bEM2oA80zon4SIINqbEs148ejtCRNJylHFDk%2FcKQd8YgSSp0O3Lq921aM1f5y6LzQU27BRwSD%2F4xbsPLvWDVfm6WNRnWhIlb1tjFsr42vT35BF5dcH8sqC5SokEy0Zy5pWl5KzYduRFw5NMtCuNBdl7xyw2tgFZr4U9SqNa7ISw6dtSiAw8yVmzfcvnDUZR7%2FiZrBPM7PGgpbp4ZR7Cf535jkggxglyVj%2BCD5rCbPXB%2FwnB64cmgA1H3aJihdPwXgiZ8wiYIsppYzIrbMLYeTo4HaGggTrAq3ZpgIqMJ%2F12sEGOqUBWX%2FVVu%2B2Vf6wmG55l4YhCyW6KccbSTdTXrX0LtsF8FlfshPL4VBuBI8FB4Ak7vSDyqLyRDoPWUrNv0DRue1WEStaHv4vVxcrROAPbQR9QSFPmX%2B0Oz01dBDWfL8Xna3mAuJdhZUJ1oCCGb9%2Fp7Aib8q9b7vd5cAiLf2U0pxR%2FRiPoT8BkiiYg61enAU7btXjPCuz88rbpKh4oNvNsu%2BcT1dbfkPj&X-Amz-Signature=33b1c5a80be4b1ec330f1f21eaa7717d90b581d792ee0dd9d9d3b22b6477a7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
