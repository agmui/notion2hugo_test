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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUBCTI6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM7fKkBm1r6Bo%2FGPEDZcOe0VwcGq7n8zNSL85X%2FD7vFAiBY81WexlqnOgADNzXEI6H9nJpZkljqDobGs%2BX%2FzVX7wSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37TNZJcXvXKxaiKhKtwD1t13OQWuVQCZsHWTXubKdiTwRPEb6xcmXP8N4xfrmdDe1gkKTRGjwLgsYg8yI%2B0cKY2%2F6hyNvkhBJcvkJzDGRh7fsXQdMTqwOQ3OFPKYx63%2BA4sXb%2BwsWSPGDaKQnkVC4dZoYKc7J98q20Mi3laKg3uioBB40ZZXv0mjK1m51aU2%2FKAjV9wmmwCbFz6C8WpYibUBDnw02aj7YuZ2%2F9g8%2BE7tGDDIoxHdQZrxMtFbpV%2BpTbZkcjmFyPAygNctQEg7u5aPmdTWdJOqPGhkmIXR0Rz6F7OzNJilRr5zru97JHmGzFHDLjstZlwpq%2FGFoN2z6R5fkjbkuRa9yBpGyOJjeVPB%2B4J30n5anUOREXQ5KC8vPYtEK6q8%2FBs1KtF0L3qmvYUX4fbaKtkZdhQg9HoTcSlBSbgI5R4TlglLg7EYgYZllUf%2B7PVMnarhWyeXMlqGbok3EOqYS85L9fotM%2FmqcIsXNgjC4Qgc34fpRZLxhGTa%2B4hmtxPvcgFDDO%2BXFcp9wRBBXPyG0Iy8uGYK0bh6Ukvia9k7ErnuNNnLQ%2FVkkof060v%2B0LQvAVyXfSt4Hx9B%2FqQmhloi92nnMB2j6%2FrMEbswVBHp5XismBz0YlQ4CcNK5eN%2FQ6Mm28kjvoUwzYucvgY6pgG0E7ET28MDaWlNJdRp99poPHdgEfl7NDZwn0yyVrTegNGVE91yhj78qIGiilCyN39btMEuQvvS1Wna6RjUSkoJdKyKG0fPN%2FB%2BRtiUN2gLs3mJVNT%2BG9aoH65aaKnH914an16YVAxUUf5kZ8cS%2FfTJ3uVLALoVjLIPz%2BS5Qqc2xFDHczCihNs99g181eSixkK7OWi15dOKz%2BpV5on%2Bzh3IxxCsm0OZ&X-Amz-Signature=78541e6a79fcb8894a65750e5e693f9e525444befa3261b7b1bf5421dd869c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
