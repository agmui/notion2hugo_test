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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASS25IE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDzn71A%2FnMxhpILBzAZulKXKFhluTNh%2BU%2F5vuvK13c%2BHQIgZTAxw6bU7N9XwGWfLKf8QP8zF%2BtMZzY8rWT%2FsGnDO70q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJLt4xNf4vJmpIyxJCrcAzi0cqYRLgcO5KKEI5DGtSI1eonvl2nim3lxV8tv%2FfxQduKVqBcIHcT1SwfY0u8zsnE%2FCJuRrHC66W5Yv4a7VepJ7%2BI%2Bro0DBJTK6fJciOXxk4fh2aaqMMd4Gm1CWm1m4hBRCgjet7XCSravoB%2FMJgBBWJOGleG32RrLx%2Bhp963%2BPuWG1gxYDOZ%2BUb%2F%2BRWkPbJjKS3gaZpPMlnBXC%2BvkQBb5k%2B5J%2B%2FK2lumQ8gthYn%2Fqvur10JaliOkWFkiXNCphAGrtzeKuUcOmtXz3TBKqmW%2BWAM2MEU2zWQaL6dDphO0ODTq4IUiKnaRiLQVrJKf2tynu7QAh8kcmroH1A8xgrf1kVOp5UlfjDCJ9YhC0h%2BfnNgE3eFhoi%2B0bLxM%2FROPdxmMjpn9pXi0KlCwXNDLv8UkemWT4uDL1CdWyxYb2uYZfvfzITWJ%2FtdJJQ1ONAC7U7wKgbqWxtQoBOfYKaTBmgZkegMOE9yshRiVeeKKUKBcGCpFypULVNtXdI6j3qy3xHxOnx%2B%2BAYLYVQMENWoNxD%2B0Is11KA7zLTOXo%2Fq%2BW9VzYaEx6Zm%2BnaVdvA6af3smv1Ed%2BELEBBFHUcOOI6xbLgDElETyyihYSGPU4oj1GCCyV6x%2BW%2FvRFU3eNhx1XMILqpcMGOqUBwAiSBDHiv49opna%2Fn7Y7kNOV4xnoizz9hm0Q7T9hsZ71BFZfDNB84vQ2QoS5qQ2qq2mQoXC41MXkqL65HWwaqZf4WoznZSaC3xM07xyNSA%2FOIK59AqQ6HraVXuHWyKVIyynPexeTsG9BCg7r%2FhBbAJzJIKWLFqtUZZKGkn0UMzyYHysciALQYQwEWMjAqgQOEDBASg%2BBshUZVAQkM4Tl5zJ4%2BQNX&X-Amz-Signature=03958ac34c22027e51dbecb94cff76073232a85ac64f6eba74c8ee8f68b8986c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
