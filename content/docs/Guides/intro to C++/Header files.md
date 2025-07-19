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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AENUAE6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdTRH0mo6kCgoXz1%2Bt3XI0lZOJlNFjMQSj9hjzEEq80AiBMca6HwV0ivcAJ%2BlNPugLhxOFvNZ4bFpPGKlnrzIeTNCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PVZyGGTHviCJR4HKtwDezdCZrXN4SunYfGrhet7d25vRvDE4DhuVziQfKvxbW2782d3Sj1k0BVlVFLFq%2F2Yr2BCWGuSiwxwYurfXwrCQooScAfIpAA6aBmJe5fR0w%2B3bHTk2WeZ%2BQvUZ8hArPMU1kgdVfC8WhPRbyrw6f58FOL61gDqytqI%2Fdg0ZkaSQwGFdC7kzIOy%2BDqfk4EoSI3v7sj0eT0tBaBoDIBY%2BiPStotSf%2BgpIppZsE%2FPMJxJLwpBykP8AwsGSIxHfRDPFGZuU6ni3b4HHjiAz8J5oPhA6G%2FYo%2BkOF0dgT4F67VbP%2Fqd7QD8XgBoLweFPsBdZnCF%2F7STdmP1uWQtzZYHj75ok1K8ZIj72q39n42FRSWGyR6Gcm2upBJNMR95SOvs%2FFlIJXMfENOrJYEy5IUHxsfwpDYnBAC0fJT6fj9aBs9umF95qUpHDJ7VqmE8vhEI8v%2FxaGtnUD%2F2qHbjaJacH%2Fe%2BMpUKLAynSAw38wVTtjbya%2BqUbLljk%2BPS5IGtzgZveZQ5rEqsJDu9nUH%2BLWiFRdXe9kQ6I8DIKSh0PrEC%2B5CUT5bF2K7MjWe7T2uBSXQQhe2I0XTHagYGbBfyg0kR97bTlLNmUSNii6DnuD7Q9AFwG7mCXwOa0R3MurWQbX2MwkMXswwY6pgEPykK3QyRqKN8CBqcuqQoDWGM6lWDoLPWc8UX%2FZ3gd2MyxZ2ARCb4ZfQlJmrvC%2BOKnUAqzbsCjTpfN4DgCy9hucInXP5Lojn3KyjiE5%2FvpEtHNIUmLn0h01yvHqT0J9IvJtHMMRLTJZexkwQlYBKeNl8DnNhKIZ0Rg9zCpP6E0z9tXrujJizkl0gb2EVdyIkBGD7iZKw9%2FckO4ZwAt1JYfPu0BXb2w&X-Amz-Signature=b50f13c0506b8cf1748d7a0e8e2a04874340eac9c629d5f2b07fe8d6934d19cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
