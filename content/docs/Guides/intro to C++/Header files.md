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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJM7WDS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDssRUCbLSz4fVmG1a9A179JdoddOU9yW6yJtTlOhuxqAiEAwFRH5%2FMEMcucljBpk1TD8GH19b2RXv%2BWuY%2BgGXAoAfQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKqfs344g2weJP9TCSrcA7PVAQxNuUDEbLRewmIS2T0tezu2%2B%2BsL4DvTSYtw4A7dHYTo0Ney4GhlB4MgV3fm7F0tLVAaB38JTpdN%2FOfqA9SRqn5HgiOzCaw8Ol11bfFp2FfHOvnUpt4cp0ijjcDVzLqhM8lsWQ7v%2Bsv0xsD9tmGl%2FBFEbpkZX69MDauFkYy0%2FTlH0TwerzzVOfgNw44Mydg%2BTLwDJcBu%2BDKeUu4ERmGTJ64ZqlfYDnnnZK7fxqO%2FeFAZV6yQ4KfBUOFZXcNYQNi1OmBLUd0OyMoSP%2BPNsA8PXOlaAVYrpHZLLxR3Y2pCAMunjPorfydR1YayfmN9OihMoA3QFdFADdg2utevJr5%2BLv1VjvSSCKmWitZDT4L8fDBF4NZT2jwej120jZhuAmEqjbDjWt1ULZ8VBhX1L7FEns9em03eS5Ag%2Fm7pmtq60SpKpU4dMNFOA327CqHJP8l%2BKgGciBz93b53VoVMd5%2BgNv5UjJq%2B%2F9hrSE7kgccDxeAnq%2BjfLSIs7uMndnib8de21%2FnotWJ6JsAqLIOFaGYca2J5NZz%2BkwiFPZSinsTJfyq0y2nENpQ2VTQcgOwmS8CzZyxFJRrSeUoZlFzHyMDSYE%2F9WS2bWM1UeQxxi2q9JDMPO0HHT%2Bd3J%2F1mMNmilr8GOqUBntGPde6JFCW34r83z5qpMtupJVA55DkEE4uM0RXBQzCTvwcsBfdos%2Br09nyHZvRGNJe4w4dhMQqzksTWlwzf7MjCFqznWZO9r7pkjoL9lAjfPRmw2i%2BAu%2Fsi%2Fn5t%2FW1UHK%2F3jTAfLWqTq7TgNRBSSVfWiRV%2FsPA7nZ6p9tl9Ec66LqLtGVVCa8pd%2F7ZSwpll0xWKxdrMMq3ljvU04v5KoSDgFRjd&X-Amz-Signature=a858d719e9f7e50eb5e8459c97353b5ca22c16fba4c35a5eb979939753bab669&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
