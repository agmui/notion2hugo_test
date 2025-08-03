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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP7FJK5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4rNVlo5O94TPeu62sJSEWNLRB8WGznp9Adl7ubqfwHAiBSH6oey3at%2B1Z7KHpMOdmLjGL9WRufkXjN9RY1FgZ43yr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMBwSJ1MCXU210qe9rKtwDiG3KMlplj1MtReTXC7y0pj0csctt21MvV26KD1duannnIuO6evGkbdD5d73SieTwK7Ufsjh2fT%2F3%2BusDM9pYeFsl0VqbOk4lM3IT6nlgkzkXA5KeKz7sb2v7c5HavZYut3HQP%2FhVohzMg%2BzQZotqGF8fYAbcJ68jDYazD%2Bl3S3CWgKNznDVLf0TIL%2B%2Fl94U5KvOXn9%2FC5aB1xl5I71Hfb7sWDjTSwtbXJslKAOsEtzxKQIymW3WQkDlx6%2BAzC3NzcEWBC0HBhNAZrnjlogR5zyUhPom26Bc3%2BNNudOWHoahmUJj1GPnIJ%2FgGiH1p6RnfQ6Bdls%2BCX8vkkjmrBHQQR%2FmD3uSXrAPexa835UnEkxf7IiRzpO%2BfXv0Jw6rFB7%2BIpzzkYP1UNB0B79gOlAMZVrlcXZwqt%2Fg7s1MaYvFZktrvrlMxgFJIpkoJyUEv7D5KSRE8pmWIo%2BAahGZx0Y9GsIoksl8GCrta7iRVg%2FXq2c14VKCkia2LZgdQ2F2QbzKx%2BH98HpOjRn6oa9htQmISahJOtLnRoyKB2s4Nhm8hQWBQhngSgDdFNAoSy%2BvfdNsZKSyE6qLy%2BFH%2FfVZjtBv8O%2FDUMPXf42gYJMDuDkGj0lJZQvb9gCmJ09q6FwAwwIC6xAY6pgEhTl9qra9QOEVnVVnJ4DQJMtDw1qNUcjjnG74TjwEismJqmxrWBYcVr3g1v7mHqqu9%2BSw1X3bQpFcK3RtTDm%2FhdBIRLZ2fIe2UhfssOQsivFvvHLxjpE7lyN7D79D5dOVKJms3iX97DPzFPeUaHO2E9v1Th6uI08gBVS6%2Fq43EBDwPfkRON3PO2Dy2EAiB9bEgXAkXNbvma6mXhwqfxntQ5YMohrcK&X-Amz-Signature=0f7271f6528b4d42e389493fbb7af88373edf9b6b346047074f7464b650e7a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
