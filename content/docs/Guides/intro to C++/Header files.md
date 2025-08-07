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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLX5GW5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFRYtAm0DDhQPSQ25iUG%2B5yBvsl%2FwhXrnxHdCvcJox4sAiBXhQtYJ9enBf6k1l9rQL9HNzqi75GaqTXExsQAQ%2FvotSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIk9ZqRLYvEwsBTweKtwDMpZkpGEqyiAtxSKDpfs4ZN2SjVSfp5CiEUt%2F1dGPMg157pezFYpCE9VES4v6dl08IQfHTuqCIT%2BcklJOIZywbpjCJXo4tRyLtgwsG%2F0HZTbVC8K8MxuI7L1n95VsKxvzoWZqX8jbhsRoHi9Un669WDlhlRIv6%2Brn7QluJs5YKCzvxxEZHp5u1RffkNK%2Ff0xTeQyzgde20%2FMyv3Q1tJLJrABQ%2Bg4BPjMPd%2B%2FryHg1SkZKGO3sP9KSlfck5gL9sP60fORvQ3%2FnxA8tglyYMyqhX8qLhU50Njt6hEAPrZ6f%2FDegF7dlEs2h2hRaMedwp5wVy%2FOzq9fE7q1AkbLrizadYesNcoPwWo07b26tOU6P%2BBaiCjVk7lMwfHZ3H7dUoSaaBaNH9v295Wz4zSI2Z5yAVaYRF7%2FTSrnpAJ7Syt0SR3Ks8Sz%2Fv71f4YFWB8u%2FmOEH7q%2FxNIO2F5md4Q0sbS1iLYxeUGvDiB6MIXIbrT3fiJnczBfyON%2Fg7HldRl5irtqzkUcJgeE9G%2Ffs8mq2wPvywwefy6q9SbrcqFtjkqtV%2FfDq8W5frSS0WB0D0rqTjn8qKeRsPd8HUI9m8jOP2Rq3I82kPs6P8yA6vMOcuJID05Gq1g%2FPhmX7V%2FhkUzYwl4jSxAY6pgEsauRgjbUu2Pd5lgg%2BV1bsvSE1eCSYR1kG395oyPr760ptKph40MVwXL%2Fgj%2BTqcQkVkYHFsj4xHjMx2KnCFJUjZG%2BDLaM%2B5TgwSnjXOlpg09tnty6CguZUfUZxhvWBMPvuzoBkMGUkpZHmi6MN9C%2BCl63sbdEiULIoNodFKTm%2BG6H%2BJJrf7pWrEQ7jUfI%2FSb6eTEIGq5C06GzqUxK9iXaShCyVDwy2&X-Amz-Signature=f17284a5fffa985950a9dcb0ff0b60fad687a0d9d0be050486a4de6cf8fbd94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
