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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNUYUZW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiXUcJ8aoE%2FR08JzG5EDD5MyHep26%2Ban5DUJQT3%2ByaSQIgZozdrrimUTMxEiirtnhQ4yTeJ0xYJL74e7clTHAL9PQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNsJ%2FMFBa35l7K5WLircA6xpkIScMv%2BRnT6DM%2BbFN2Xbq79Tx7IC42TRJ2Fb3rLQnKSFOo50knicKVaqbS%2ByqM96S7N6SnrjMUz9IHe9i1%2BumxjT%2BMJbvEgxhk9cR2cupLIskse3V8AICJoC%2Fge1sUEtXfbqrOgVsD1hC9QNxUGbn2AX1ea88e1gPGfNXVORZwKIft5MkU3NqDpIwBc8gsTKtd1pOpM0p1ejYHZ0ZZvCZ0ajpzHNIsHpKB85ZIIeyTKA4vlT9OrB3RGsME9XkM2s9XFx4Li%2Bips9Lb6298MhzGP2z9ZImnUGtf7uPa%2FTNx3fONzBN9n8xkEYIY16MsxNOIkGXDru1DAnvF2ik8xtlQKMEq1q6e04bggYQIvMbWwj%2FHcZ8xuxU4zpCIbeq4pyoUkbFWdbTaXRhPa4ZUHqxU0bEaFP4pewoLlCPD0JGYHSN%2FPRofu%2BWzn6eqC3vu6H4EZ%2FjFJZ4bnSQHNc5mcUaW1PnbI6BV0DK8k7OJ2nRLMesWrg2ZzUGVIW3YZWzHo4%2BmYqkf3OepawRpFB8naaiRUa6B2w5UDksR%2BD528H6jqi5yPRX9TOKfarPnXeEXa%2B%2B8NFpGJoPtf4V526RTI9MFGw0OSUTqu3vOki2zD6CxUTFye7o3pWPiAGMPDrw8IGOqUBLeMswlaIRCWmzFVkwBkwN7v0jmCQiv5wFjxfM9azaA3Y8ubZDRHeLQRCZfy4Yk%2BeCrKZqLNQXB17iNqjKPmU7S5Y8EM0ghgFrOa9kqPQkzNs4iFkSZ8ZU%2FY1k%2Bdsnla0tJzz7R7GOJMWjT3U5Y2T9%2FQgoUwH6qhC0ZGV2ZRp6ddNa%2B%2BSSNdXVh1P2UIjNlsTuIU%2BqX8rAIuwWi7M9jacvlUqNE3P&X-Amz-Signature=8abbe85ee8d5074fadc7056638e8f2541ad480ffd77b2b64a886697330a40949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
