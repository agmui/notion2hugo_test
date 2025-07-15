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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQOO2Z3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIASJ5Uh8gZgVPv7fuSnlUQ13NT9PKYYyWjPUQMRXDZbpAiEAgZzIkhvf0x1GbYPTM8Z6yWodrL82bRd7tt47SnxnORQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGggJ30ym7MYRD78gCrcA7aIFm%2BY%2F%2FTAXNsgzGSoCg2ZwSvWFmQqPum31GczXZVy3HlV2LixsPraKZEJlJUIX%2BXsW7WW%2FiTR7D%2BO4u4ff%2FTA4ZSsUw3Fayor5oKPFNd4BX0AsS2JPzHLWBkZ4AKGKFGaXlnF1MYr1vebZGpKPAfUxubdnOiyk5BarHNfgWdN8wwjLUZyRrsBz3ZNMRGTaBY0IsSN88zagepk%2Fc6A6ubOqO3WEQ6qZusQONWV3KYzeSJwfBwIFrzNQb9ShCKiuYxwBTljLVScDUAEmYzU1fem9%2BLp3JJpN04td6hHOh2GhS4HkaHP40uX2Zh6T8beNFjXqu4A7iZYcKHzq0XqSofcg1m8txmrCv7PzY5ot3JBTO2old2DJJUjDOlJeCxIHIykLujm0F8sH497%2Bpnh2r%2FaS%2B5i7PDUBACAwdKz%2B3jNYGY2dPrbGJKlXgsFEZDl5aggxim%2B3zjlIXvXq48gpN5OZNTmKGDjFoBkK%2F6E%2B9E2rGjFEG%2BK4d6wDkbyP2hnF9vhBrQArzU%2FPou8RCRtyg4BfFsA8RfNIdXKgiPZQmLK%2FfP3EwzUSV%2B3iuQgdL0n0M9KahgDhnJZZ6lORhNuLyvkfiqeeF5PvGisKyThc1bdAWfL1dyxunlTgZJ%2BMMb22sMGOqUBYznyZd0dV40NKWUZk9zwWsz61bG5R4hqOtexgsX835yVixccTIVAmvD0CVq4cc3dVZ4keibZqfIw%2FmKTDvlB0HGqFT0c2aGHwq7fClTT39%2FDhKkmpOuUi2cAT3WlnlA1rRdKlxbHeTZKO1TLsRRarAHffrl2MnWHhnF1VCZKpx2SCJ6oxA0kRT%2Fo3qMpv9BBEy5Gs9ZmQjWlEaLDXVyOYWIjBhAG&X-Amz-Signature=12ba572d69f08b12cb5ff78669ef621672f6a0df068d7d54cc6e2470a08e68e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
