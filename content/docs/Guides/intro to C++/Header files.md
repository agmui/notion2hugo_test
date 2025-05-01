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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B2GCYOY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIGQOgU7V64kWPpcAysYCxKGmig%2BLZddrG4NOSbSuZ2BHAiAUVHZzjD40m6Or8DCyvWNGYLYxKytGr%2Bli9IAJovEzQCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvM0yR9L5HCO%2F88KuKtwDps3g6DMfbtEHhscD4odn%2B1fFtmZZKyrmkoqOECHdVcN8O4EkFTNoWxP3DmM6eMlSbRtoWrtY5yjOTwhOi4RRikihV4KN5QNTPqkz3yQ19SYdcQU8lG9chm7oPaVcWDCqkXjn6pHyfYJ7ipI0Nfp6kc1RrHiS5dNOBDVaJgGJV46n3kObmpoWqYjNW%2BHTg6zHHvsh5Go4gIt58nsGK1a9i7kh5SUvQXcRBfIYtFgduIhZZGJvMuSepAg9FHpfD%2Fu6jPdhiQLIRgRslGzXCsnHHGhAZgOY0Sr%2BF0Fen%2BPCsS48rVztr9E%2FxP%2BXuKj3c1bebzoGpSVo3PhV6QV89v1wMD7C%2F%2B0zHt32XDKrlXExemzK1GfBaE0VeLT3vfu7PnDWGC85nt%2Byz5dDwsVmTgOE6s%2BoOwKsCT30sIlOsN8BK0w5W8yL4mMoATsMBA1pTT6cEtpu4gK9A%2FumLwCeTsZ18DJf0vI7Ib8k9bbajsivDdxpzazF8TvPemfGxSYdvkBCfz33RL2O%2Fo1K9%2Fz5WNszLI%2BR9VVIfuehKZWRTQ6ho7oLp%2Fi8kut68GbTGAMkRCabdlTQtTNydlUt9mVpWPP%2Flp8chuTS72qDWILhX7vt%2BSEkKQ2ASSbxpsrIQAIwg6HOwAY6pgFvA3%2BPIq9pXfAwXdRKEJa2X68D%2FkPFAi1KKWRphS05j2IE%2Bu%2FTauX7EX8e1FqWn0hg3rF2gygmETn%2FBbNOiK2akmF6CUa4cgAwfdknl0JnD87d%2FjICBwC5Jqd0JzqOq%2BiW1pQvvizj9QusErxMLfUhNd3iOZ8MnilT83yV2Zn%2B6M9wdlbc5O10ee0f4kWtFBrazh02K3x8TGHqdr34v3jzb01WH%2FZ8&X-Amz-Signature=69a8fc4040959b5c455d310d7ffb62943fc1048b4585a8e44cebcfced675aef8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
