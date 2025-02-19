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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6PPS4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXoHLOCqjo8970jVhbvyVM5%2BtsYFtUzhhSMdswcrPvOAIgbGEVNQ5ov6JfxZLnR%2FMWvqhobbvKh0596ZZIQWAPDU4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIXmaqkBQ0acmrMlircA4H%2B8oJ2WMFswOjdZhy7CA%2BZUOFBv6BZCqxiuEsaucfztSM38gS%2BII5DKk8AYznZVQGBjhu9uwfAs7kfWDTJLGS8StRudxvI6OP6zBj%2F%2FCYPTzr9Lf0uuWX%2FPgEolLVdYSn8nibdLm%2B9WwxvOooOonqzMXOGEm4UQP6QD3DJxRlsE%2FayeWObnKkHHuTMjXdTnElDDoOTIzwOHQ%2B6%2BHCGqLG2xU%2BQcM%2Bc%2FL1JljQNx%2BTZKnuGKwRheDnR8SHWTgaCt9Au3dIgPdBEpznlNRTnUhf9YhQ2KjBDiRUCQqYJs0G3DH9GQletbW6gnpPRK5dKy%2Fm1gS9%2BKcxhP7BhyEgNhzXfP0C55Oflz2JWFYUhuXS%2BhoQanwudITc5N8%2B%2Bxlgt4cG%2BIIDKrheq6AvTAXbUWUcAc2NMp81qGIJpw93iLm8l6wqZBW5nYaXr9Pe%2F5HxV8bdaYCOntOdSDyC%2BNy5eSYnOHpAaDQ3LLMhZrgA7V4HA%2BYmb7wMjDBu8NWoF2N1TnOUoacnGrmNi6WXTKI3%2FJnnvIdKGsRMGWo2A77%2B3evQONuhLdJ4c%2BDDX3XXZtvWghzEMFyfBDfEAYrK2oK3yjkX2LyJoKE3UL2vSb7uCYCMfOyk4fv6tGxcLraC%2BMNn8170GOqUBIC5Zbxxt%2FYCUozEDJsie40eT3Dj7PNvQOUZmd9XqqQjPcvEgLK%2FTKSPqNParu8kbi4SYS86F%2BWdkY2vieiqzsDRPfHA9fEYWAcyCJjrP8qvxCOZR9TuPapmJpBhoEY9IdNYg7NAfToKq5o1e9aaxx4zyaF40VGpKDVRcKTlcK3v2sBvut59SKrNbMwcIpY1uZ4nvDa%2FiNZ%2BxD%2BavlLPxkl%2BejST4&X-Amz-Signature=c690c665a4a5d24465b72e951eeb438861fdcd16686906b5e9c48759c113d699&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
