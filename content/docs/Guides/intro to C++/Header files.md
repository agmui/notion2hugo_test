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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MWJ2CM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwzzro8Ag2QZF2YKxsY6aQkcXWrqboVrjb%2FLjuDRqu%2FAiAMHXMvjMjN1eRGjOvmPlJLLBNR5GGCWWjU0cCnlu0vSCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BPW9eNePoS7EioWyKtwDRsjKjyJDBAfiqvQEtcpjWejryvon3Gs9sjSGEcdBUblBoR1fL4vuM%2BnejgCEiqBSXfBCLKOJXEk799R8mDo6PM9rcqr1rN%2FvgxwzZ%2BydNV1jpifq8x54rnYhEodxNiswJ3Jx6xCi1axsDktfjup%2FE9GsOg3gQaJpjibclPdw1tPiDKgwZeIYoosI9cRJ3hVZjbEfsre6fqG1h4OuZuBiN%2B6eGnVCzWHC6xuq1SI0Ehh7VEfaK%2Fa3y3X8PWZcvZjt%2FCIaNl1QhZbosH3vq1XELMhZU1Ol5hTcOHMKVGNTHrozt2yw7RuqjpOo230dTPBL4hytIzf6ODiGyJPyuyBtotjmzDkJoutySymPwB1%2Bjnn%2FlaloN9GV4i8bYbr9ZEFpz0YSt2NyMTypCd%2Fr9yzA9PITzLQAuZxDVH7R7UsCc%2Bb0UGIyxP8jenZoxSiGUqa5bH2N5wz5tHQtVHDsCa%2BXbWudt02%2FHZRt0YjRbk1kBHZwbkaQtJiLGqrwtZl2ITqh1dgCPP7D2CsX7R%2BzrgidFLc0IMh3Cxi3e8Mlmqo%2FiP3uVmMUnxYmlVApQADZJMajgdiblId34%2F7%2F%2FiXpshymEqj168Hv7CHgDaZ7iYYl%2F3SGWDkTbo%2B6koVfObww47zivQY6pgGeDQ2EmbUYsAQaezvZvkLu6exroqvBoDlP7Ot1E0JEfqG2mf8WgY7yJJmHcM7OByiKWAIOjKGjhA6t%2FuUo%2FEAAq5VrXGHBNBoRWC2k%2BHDyoOtiJi2WEtcSXO1fepMZ1tKHAp2GV1HBNZEGE8H%2BVFo0MhBJ3BG07wLUN%2BuSry4573ec%2Fz69XSUCdsLm77DetwxVyCDkCv3sax%2BPK82KW3eLFkFIkKi9&X-Amz-Signature=77cef82405538b334313b4b085702b697f44bd7e6d54cd8fb63e649019951b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
