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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5XWJTW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDfx8mqzO8uAsIwxil7X6r%2FsYGLWKFaf38ecCgFMfkYAiEA4F42yqKG9qykD%2B8gmbnBq7zw2FEH2Jlh2aDjSW2cUK0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIzck19g3OMAjrObircA60p%2FxkEf9Yg8hhRYQt64ssBTfhTMj6v6kuhvVs5xt%2BBtHxoMEztsIe%2BYZbRb1lZxhurMnKz%2Bq4EvBraf0xZLx1u0K9FpCW8g1R0yUOB%2F7KVvDWAN12ThThM90sAyTkdMcZPkvvl6yjL%2FHyaENrAp7zKbpSJ6YSgcYv%2Fphqt07%2Bp9FPVl1LWm9WHaiBKNgO8DmDwxyIZrIrVdtWe61aUH8RGJxSeKECgkmlPz7Wo6jjCB6abAypxiLAxl8pB9hr6kGTLnLfDFO2%2B5rAK2voXDl0eO2qtiu6692EO%2FKwNX6v43gNsWyJwx3tC9hXPkXJEWF6hmW7XW3758ugZeVwBTew0rcAksz7l5JJEWNLZDl5mpQHGtzj9P%2B%2BZmu9YZDjSdTI746lKvAHNcb%2FsqZIClBwClSsbIfhXRXom3zhKGKd3UHmAVwMJb7SPFyNBdCcRdcbmFdF3s3LFwiyS2VI3ZDN4t65hwsfLeiNJHb7zJcssI%2FjBYDljDHfWIu4mljafczrDJlGXfwZiGTp2copz%2BMByAIEIw%2BLMdzP%2FQteRPhWvAieW57knerM9m3qbWqpUy9MmJxjd4lz52Wy61J5fsIzPyQl%2B%2FVBPu%2B0Cjrtyqv0%2Fxons9hExzkqixX1aMO%2FMhsMGOqUBcklirTcrWKOHcKyi9p9ak32ZmMMctOlzVquZKpF2FXbRQCYGFqSuZ1ZgdbN5BrtMAxxE%2Fu8eUKNemH2uYlvPbI%2F%2BhogAjWDqhuY5kOxBh%2F6y5MZ1Yupez%2BwgkdEgSwYnMh%2BkBzR9CWqAbf8F5cC1gTkhzeG5N8urA1sTSdGNXpnK3rVNeysPH2pYbcB84iIWpkIHA2bqm1th8eJ3kr%2BFyIBua%2BXP&X-Amz-Signature=3a3d8ae0dbf6995e43bb7df318b73beb87df2e7269fffc72add35195fa8063a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
