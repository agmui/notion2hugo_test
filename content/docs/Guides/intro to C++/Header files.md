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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RD3XDA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfa5oMSmIefbC9wlsDxf%2BpvhLQXPVWp4UXjvYe8IWr4AiEA%2FvVw62XDsMigFzpncUHlpg%2FIDNLe9SG%2FSNk8xHBNPBwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi5y8Qmy2IN6U%2FMsSrcA%2BuZYNne%2BxFCr4I%2F%2FgAWvgZoFtQk%2FuJZkBPST9lZFRoUgZckU6OBKqbyTRB0Rr6jd9OFYbuXdaqYMOVYBP08GRC78iqcGW19DfZwbMqGYaaLRbIaLs3UIkSxvOFTn9z2hzziFbV7vXlc%2F01j1P0O2jYXMUL8mD2nbTkCD7ZtxtzF%2BFYASLGOvB9egZ24HkOU4fPg661x8wGE%2F6uNQArZ%2BtOErP943vGxodBK85Ud%2BfbYSJuRo%2FFJZtbyza4ut3z0eXQCkdGFoYhxNaulxWNN5N%2BOLE3Iidoi8iApVbgYzYR1aSIVWD2zYfCsYTovyv3xYg5JV7Ee4KEho5pFeeG1%2BRGHbG5SXEPINNrUdsPGA8O%2BUzq2Cl9LM7KAJJ0MpvAgm5eb2wFVmF2r74oTp%2BQHykzIdAlt%2FdZwRBSFWg1gDbRatvug0uZBkyrOyJYfYnRY3IhiV5CQthEObzYw%2Fi6rZnE%2FGJel6YK0rz4OYFNkJ6a%2BE5YseVSRBVLvMkF6TNs7pn%2F4oz7pkZXCPTHFxxxclpJmB4%2F0rsrTLKT05M2%2Bv1AqpkfZNLdOr0rmgla6Sog%2FXNN0ebua6JsHqQNdmyGqBWaALIojzBIbqjw56inJlaBVIH%2F4gLubE1EzdGtpMN7StcQGOqUBU4GgqivnXFMiDnYgM%2B%2B0a3rGJCbklXWBOvKMyFlrXmSYg%2B%2BmQbUE%2BgSJYMVMG54vgz9fqXJqmKUkL7eewgC5d2RsBl02hCtwxEwNADJs0sxiJcmSaetj7QKuiczyemItyxKPP9XjNAhqYm34sOwzjaqUhv0kBV7yVJFgqhlq7ywYms8Efdj5aonmTfbrBI1iACHkmCeOxfEl3MpPGmVoWPLCf0PX&X-Amz-Signature=42f33aa44e704497b4d9e382ae74401918654217227cbbdfc9925ab250820e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
