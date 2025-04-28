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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SB3JOI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BzYCxy%2Fq%2BfuSZqsGtPYKmAmXJa%2Bz3nvDP6B1nM3vUiAiB5RAGS%2BYN5KL1kNyR6FImbABuZ4rvBAwV%2Bp%2BtMVTPoNSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZfaA8R1j1VtiG5doKtwDorO5MJSkKkN7Bj0gtGzjq3bbTWm8XYVS%2FT6u7mNpnju%2F%2FuKaq3jLhL9QgTfmBhQYFWVdGOtspOMwGB98v%2Fs8nnVnQmBUDkqOTyvbgT1G0i01EeFgbKU06ZFHaK5svuYvO4X8nkZ3YxxL043xsPSozUXRPYy9FCeCHXIgUz1ewmz5VvIvYlgVMVsabfl90v6bSVXdo2h3mKq3MzD61AXjxjraNiBpmmDaivJSv8gWNUPYiYADjJVG63UbEel9BGE1UodL3X7G7kdPjV5xgfO%2FFhAilKRU%2B4t9LyevrqkdTZqaFyx3nrRbDgs%2BTns69XfB%2FlZGedOHV5IlHRDS%2Fvj3eruWhxQv3I%2BM2tgL%2F9Dr78U7AHPIqJ%2FO2l6L1uCui27XBud42BuFsBsvynNCiW6%2FG3HN2W07NPP6q0E5goOJShFuSvh0535i1okD586ZO8yfyKz5iswGL9CE2fMiY%2Bp3NYl3yBLXi0hB40Un7l%2FkpeG8%2B4sIM70%2FDJHMR8JgSFGbpHbc5xQdnPRhURh%2BoaCrKbeRkY5HZab49fZed9IMCRmdfnrfCc16RoBuKxIS7PUSmVWuvhZNu9NrkmYpR5pe5LAj5mkvdwGBvMzDiyvvssH%2FsVlhSgXZojNDcnMwm4rAwAY6pgGXdcJkOaaR%2FRaFSKdQ%2Ft%2Fb26u%2BRHybVaOIfVtkbAT07M1aK1Kcxrly9W2Y96YSdkN%2FTPD6gwE7W2v3Fp818oQAqdJrEW4Vg0OoGZiVeDsiZOQt3gAI4g4j4X45nkft%2FlT4QnHpQZsBQI63ZnLVx0EGSidPtDj1mDbbtIju6DgavsSYmHnEkG1qgLyV5o9FnxJD224kKe%2FhG16ZUJA5d4e67Xeha8eo&X-Amz-Signature=13bda21cc9beb287fe81f8df9aa399190c082ce45df5126158f08e9805ef429d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
