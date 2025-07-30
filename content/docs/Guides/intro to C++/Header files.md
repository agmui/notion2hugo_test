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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6OMYQM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb4vsKJbx8FDv2x5pTclqFpUDJOG9iLH9Pk68X2prQnQIhALOfRGAxu7QuZmPwQvVsfr70dMA9Cd0n9ppG5n3BWLPDKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHWchzYoWqvpfOe5Mq3AOhfHa9IPnOoBPE32sgQEZKmeufUd6DVJE7ahqdULziXvNoImpY2YSPHUahxZZgPEc22O1WkIxptQdBQPEuaGYZEKR1jt5HJBcx6BVkwAk%2BsxaVyvuR%2BOud17LG4Vbe%2B6quzelBJsIilWUJSWfKJcRHvyiHPuke8N25rE1Jbq7sZiik4y%2FsCcAS%2F%2Bh9Kivg%2BtOwTfzfcEZqx7%2B6V07rYpIBeKMfi5cBhtU1QgoBkF8IafJpRBx7lLWakpRexZ%2Bp1%2Bhb%2FH4KNjqIzSXX6QdL4QwGUZNXD3l2R1Rw86BBDy0zxm0Ab3EbJVHPbQw5zgNirCVzl30DDgriuWhbO%2BOrFSGOTyuNqMzILl3hkbJPXAitysFffwUhk%2FxHtomRN4vdUj00Fr%2BsOYTU8kufs%2FqtZSBzGW1c%2FaA6kIE0b6uA0SDsvz%2BxHMA6IKSaeTx4nmIxXhB1gE8LKldj5E%2FNliE18DoDLvB2S6qJpp6hpNSGNbl1SORWUHHeK594P%2B6yKN7ZO8JGun4Mc13slycBi4Ot80Q4%2BXaZ2Fnwr1cjWw40b4wv5ok8xOh%2FRkBybMmfHptgBWDL2FbTuLj2OOS9dpYRkM2%2FBHMbO7NbrgjzMklWoyFPyjfrLrZNWXlgwYxMkDD4jKfEBjqkAf1V6kJhuSEkUNHlZQmq51iqsj%2BiKwU%2FokaDK2xeIZB%2BBuw4wUaIQYkOqugdAaD2%2BIworh%2BtyO2apr5zt%2FPo%2FGBCHqvv9r%2Fdit2aAWjEwlVXGTrORE1iyIAxETXEPayMydEOOMVlX%2F4sKKR0NJZHqkfKny8TOIFFMCMJZpie32n5fQPXCCXxmtWEs3AdXNbEYVv7Eu%2FbdjQjNJrwPWgZBIcN1G0f&X-Amz-Signature=d42166fc3784ebd066643831836b881f6fa0c2893f2217a5978f7bd015a8ba7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
