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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQOEB4P%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDums4kjpeDbZ9wVEwY6s8tvZJWNnO4DaLFK%2BZmrMV5fwIgDELV3sddPRJ4YrJbSrZ09%2BIodmy8WERy3Ya4VrtT7sYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDmJ58bgWYbHIihKSrcA%2Bdk4cvGSaAbBGPfCoqGIMGqSchD6sqjDLfKXmIRYCqxXVXx8PrH3dX9XKAx21NCBCPySQVQWmTrLUp4UdYnuJO0NbK8vkUoVIzM6n5v7FG95W%2FNbTQIgOnUuKvNqYJR%2B8XxaAarzMltFKKxnBxcv79KwQX2yFmAXTbOM1YJ0i%2BiUGgDYMJdL2JNrmS%2BbiDRQUCtzb5F%2FBtdZLtHWz4je2w4AMcYsrVVyc2oy0So4zeqsgwEGabQOPVli5uHQagRoFgYukdAyhiR4b397GkfvKGy0HM2wpDkyOyH1T19bFDDOA2nO6N8NeeiisVO6ZsI4TPCYmyqmRUBxdwpZUqBKR7eH%2BkiFk%2BYBaatGYegLB7%2BR9bHHJl4K9jNI5hz1%2FgGS5ZDZLwGrkdazKxaimNNJTygP5wCeif0%2FMQhh6zk0bLDV6HBqN12g33hcdHuo6qNeJrAzmAeuuvxvW%2FFloYv7sK0Fyh%2B%2B%2Bsi%2FkW41veyDXq4PcDbPiEhQ9e8ooHT3lxnArglVkQ1Ww0OgExSUTNLI%2FKHtMKVX70hhsAbKHkiLBdNJNiNfgXdLzvpMtEBevdcQGcxRIe%2FSpFYPJo2%2BOuDWCwS5qCuIy6vaLmCuYerQiJnMr0oGya%2F%2F76clj%2FqMJnzlMIGOqUBShyUKvvkcDGP4kefAdhGCzv79be99FsbnWhho4oMy5o0wumqtJNB9It7X3dWaCfsGWssKTIBr%2BzKNrDxwjissmC0%2BSB8d8AsJmj8qSPXVue%2BGwT9q0S%2FUs%2FQON2aUO0Lq6yI9IHCsLgKSjBwEyQN7lHPUrIOj0eNiE%2BIt01ROAscejn6jnoz4xUILXGglPWW4Wz6wFhRhY9yIWchfr09qj%2BEpxUY&X-Amz-Signature=54e5d3bf49c84d00db2c3b0c8c071612e5f6a97d389f881233d3c1cdd301601a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
