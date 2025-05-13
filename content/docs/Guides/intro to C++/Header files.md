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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQN4BOPV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCzE34oLpSt%2BfHeypeXVaxcghd0UX6B2MbF6dL4U13xEgIhANJrFbsK3JEoOir2TRuh9Ls6PJci6m0HChd4ODwE1RUnKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxckMgddFKvAdeN3d4q3AOQ1fC8y1Q%2F4PKxsv5cqxUJmLoyMQbET0xDWBbciU5UeIffP%2F83LaRBmapXIuh%2FwKW0BMd0YgyLE3Uu1cYonE05ykHQKZolL28Ogfr4yRC1V6DuVGemvbwAlvT2cxwVgEKlyIzZTdW5xri5Ey%2BfjEmL1wVt6cGPFR0uXqoeWwus4Fm9vtus0dW88AFbv19Q0phsR5sA0VoK0xGPJabQUI7fuA98Sf68CfHcUKs2YyAVLlVc%2FV9J4X5JhyLwNIjP64VOynz7Zyri4eTqmDngYRUqmoryvouTuyQ5W33py6rQBGtS7DnTWawQUkRlpD6WoG5fw8YXgR3PfDa3oI9kZxBEFzrlMSKpjYZjbBUsnvH0352xG1%2BQ1DLG81oxlb%2FZn0q20rWrXURnmnx9SRY1HO%2BZm8w3cIBDCCMNkJmBQ%2Fy6nUMr67%2FWtRMt9DkC1MZUKxoBbu9TrQLxdhppViw0a7i%2B4yvVrhKPuaohlHTbnGjW7GnvlWmhWCpcHZpn06RHql0jCTOJ%2FjSKYmqGUJidKtG7Fwg%2FSDgDWj3fsm%2BRmXfzCa07NjbjRCEk7ccTEgcmP6qoqc1IO0MUwXb6%2B9aj0aDv8cqCKJXX7CigXFY7PdI2aBCuCfXdhGVOvsM5YTDN2ozBBjqkAenHEQpAnb1mCf4iO5YLRuHO4fv6jN7KH9lUW30QtnVKixOg9K%2F2iXu5J8GGvLlPB96r29Ryis5iHPkBeCVkdRob9NrvQqr63irmLJOC5vTXXf1CcbfuQFmxXwhx0Xfg7o3XTyK6Pv8vf84ZIdDwllFy8DyknzqrFOiN7JZqcmHuSzAEDcADeASY3gLObmGpdjTTp9DpQgzFhQkNfr09Uw6modTD&X-Amz-Signature=005a60cba6db46f21e9ed52ee58117e975c9f6d6908f5503b30a94b7bddb6bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
