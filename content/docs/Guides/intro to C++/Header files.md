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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO3ZLZ5R%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC22zoAAoS1hZWh3hcZ6sP9wIdpT%2B3lbbMTGFzlr%2Byd%2FQIhAKEPQ%2B2ZUoeJLxuMW61R%2BwkyGkUE60JAyjaF%2FbA%2BXs8MKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdjYws%2BHwel99TuYcq3AP5avEEc%2FioROE4%2Bb7VpJmpNZMUahZU%2F2pog8rQ0%2FeroVbfql2ixAIQY063cJoq9s37qHOO9GY%2B7cpZ%2BW3lQ9AndDxOv4zQjossPABjnwxP0vdtqgfhhgta57cQ6GKOKs7eKBVUqSpJbZC8PLW9tsIbl5kNrTY34bcU2lvECbzzGEWy5y6tYC%2FefCBGMls22Jcs%2BqabhHp%2BArv7wX%2FZFxlwtKuC4OcxZDpBldR%2FS03jiBVBAF8mRUmc%2BGYpTt1FEHsb9kXiUKfi6zRdz8L%2FVoq%2Fgyrky1cKxp4RXg%2Bq%2F5%2Frk%2B%2BcAWUNiF1ev1oR2okeOSN%2BDrP9RjNbM0mvUzZQBhRJj0GIu%2Fwp4UF9YunLCJT6qGfBtpYx2O%2BQ7p4e89d5rIPqU7A36wKd%2FEQdYNYlWPxgxgIMtoK%2BBuMEXoHwIzAN71OqjgLrkbiTRd3KuK6SrkWPERuw%2FNOL2YWNx%2B6NN6WF%2FGgbWzG3BP2BLS0mLFybWNMpSRDETNqN6lEHNgGvdKGl3mDBQiZMmoB1fBS8VyFZyHko8bQeIdwTAi%2FEZBD%2BYa4B1iJl%2FwxbhSeo5m6hflkSAyTqBUrLM%2B3FB%2BXM4uQ9SvwRUrcIUOjPcg7lshA0YbvdIPHCcTMHYhynhTC2nqrBBjqkAerHQ4LYxW6euMGVZ6WTGPTEbXsbWQ%2BIniM7Z2pdZM7c10IlNKA%2BZhfo1lfOlcgCmS4jvk6HVwZfuEvx2lbPggI1CTqWcI3ylDTFaZL8OLCu77Py9oUIm5ixDuxpgWanYweelRwsSAxEiuHPrJRYkSExfN05VYFtcSNwA2HSWCwlmE%2FpVXs8BALzYHnEG4Ss1S9wPsbqAZW5RN%2Fh614Rgz%2B9wX0V&X-Amz-Signature=28c17000d093600d841ab9253a14030f806f9c07b17af39cb6d6f89ee686571f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
