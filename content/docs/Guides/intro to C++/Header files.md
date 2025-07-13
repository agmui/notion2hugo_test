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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNCQSWC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T005033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqq7lRHqWHlxh2%2Bv9jp9yL3fzlhKu0vlmb0bT3%2BJhdBAIhAPiEs65jJRj%2FlVgJXDMaXEtPAifnPyG%2F9onXYP5peVX%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvh5jYLrpfO6yGnTMq3ANrebuUJhIBTM2C3v48FyAVqTK3JSGaw%2Blk0F7OhEMYKAHSmmOhCfSP02jRtGGrjpR%2BXaxuJrXqJk0WNEpZz%2BAawhR%2BeWilbHpsl1qT2eXk4gFMFRltGWsnqFtfjd1xYBX92pwUBqFiZoixmEwZY4dPRBUbKDdvDgtmP4rb7Icvw%2Fg1mDhnGu6vrn%2FEFEnaE5XzeiDbH9kPtappJ7YPeMjuDOt%2FTRM8qoahSLpv7WC1tdWdRbhjqvnOq796MhEjA9ohOlY5gIHcCUDxuq4lzp%2Biy078hDbPu482iDi14W4jROywt9tFPHh%2F7%2B36RihrBaGTuHMMLAxgvybn07lgIe1nn3cUdx8KsPpnCOFZfheUlG50B4RDgu%2F7UeOAHskS489fai3wWBtAGwuE8S94yy6E78kWl2%2BlVyrUPYtYW6WCY55AeVP%2Bc5QKZJLXzcSFwZB4TQh6Jm%2FIezjS7f3mVp1RCITgFsnePRxSLT0HTHIMaJl39DCLlRoNKSdekLMJ2ec%2BkWaDSo2qVJT0Qvmol2VM2DdIhPQuXNMYHOZ7Lh5y9rSLfj2J4ykbtQHdRstEgA5FkzdgEpsRqI5noOwDT2gBDBzvQZziY255gveznNrPBRrawtt5IQmJH4zs%2FjDMgczDBjqkAUEbTA2xAYqKJCFWzsK392nnB7jLuj5UPxte2cuZHf3MjY7hLh4NEB2%2BlfDJizoFMqwan0t03hSh0B8pqfQDDKVagI1OFjQ2GQsVHVonu1KpIS6K7KBgdKlyNElcYxOleKqdZf%2Brr5eDusRyr7%2BH9eUXSjEEQl0muF70J%2F0iMPzMe1l3ZLi2cXhBRZkKZ94%2BbXrK9SOJMPTv08qbRXS%2Fqj85D4cu&X-Amz-Signature=367605398d8d5ac0e76c41e9a7d1a980be04eaf2098c8b249a73cca35aa28df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
