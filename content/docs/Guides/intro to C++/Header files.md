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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO4KGS5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxTeNQIP%2BKttsmMqzpaW%2BCetRWVsLf6%2BlviuxuA%2F75gIgNWjoqCMX1WBl3R3HHn6ootIPfjMkA9wxGfJGUIiCsisq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGrq%2Fw%2FnrdEQlCbNzCrcA9ORM06LDvUaS5QfV0SO%2FP7r310eMyh269gCNwupEUs%2FyoBjueX%2BeyjcezpedYYB8Aa%2Fq%2FFjC6eDaXtEG3pWX3iRIP7h55EaccAtr415xKGwAnAcejzMBLQIs8zFNb7n4MAXF%2FHTbQoPjFD5Gy7bXkQT2OKC1lyIVrvCwL24vUz6pI04O%2FvEj%2F9ukquNODbeZHgMqN5xy76YICW18z39MlCdWpE%2BbychRY5sZAdLa0ZAtgGc0aLbfvtpszjcLInjGsvn%2FBxrOPce0rUfc5vPHEAaYz9Mhz16mio2ajT8jKDgODyFkG1MPTvXdYyGYOG671cnXgKuB4uY5vBYbaXetSr0SGxY3TjAZR5k1Lau%2FfOtfy%2BuThDpGX6Cewj7t1XGTklcz1WvFQ6L9Zr%2BdBXoPMQo9337omL3KvAZEc8yINUQdC3OhiKTXpL2kSX8w4JLlLZ5utRSWVMgUDIv%2B05kWX707hG1hy%2BCuFEtjOifYPhRvbaQ5xWUSwS3EaMU24cvhPNyULdz48D7XypcWWyHkRxsUQjXDAMJEbw4fMfOS9dbWIq%2FmD%2FvYSXK3TguEUjaCP%2FOqpy16gKZgvGwpDo3e%2Fwhhw%2FMR8rmggYNn8%2BGrlNmCniAbrcaOlrN5OBhMIPv1b4GOqUBh06GvFAdJwNxPFHCBY1VKCeG1l5HqdtecL91RPGUpf%2FMumlLontr4DsK%2FMndjdw3u405M4LVeaMPtEEcrwOw7pg97TdHKlMlK2jEacgiTh55lI1%2BjzaoPihaSoEU7CvZssMOQMOSPS%2BmwIqrowbX3hQzmYy1BAH%2Frhk%2BgMJ7ASmZ8WBqjVjXv8HBB1YqlEZIw7%2Bx50w7hHb%2BHKhh1h2U8SToCZNq&X-Amz-Signature=f8852fbf8b404e351902f7449f6067f4354e4d9484cd8e53ecec94baf2c817cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
