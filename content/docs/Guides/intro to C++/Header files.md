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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MKEXZ56%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV7ZPRlAwM9LfCPG1X9JaxHkxgdmllPjdci7LT4rwx0AiBfN%2BjyifY6vB5aJYE2q69MlVkGzoSgspaHkiemu0yITyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4O3INzFxOsUYoDOzKtwD0lO6cUj3WlCqwbX1%2FA0qfl4w%2FzjAOq9inBAfk2w3rcmM4zMq2wQS%2Fjw5F%2Bs5yIoj1SOCtgmktjIwIL8vVL2lyaK%2F28%2BBd1%2BDz1q%2B86yRlBHyNtkDjsOz6sI9xC92P808OkA%2Bbsn8w%2BFLM76PSOnLfi7Lceg28eOdpc%2B76wSZMdyQZsOobyE8mlQ8cn8uo8lk1wZHCS6WN40adwFObOJMD15enkG9uhOcHfbWhqShwBRu0amHKvQ9Pix5MIH1zKUYs2QPA%2B8s%2Fk4vNPJvF%2B1%2BePsjyMDe5flSbge1GZ3SRlPcN9MAP2Jb2KOoRLAKyZQOy4Hx5%2B7hRbdvRr9Es%2B%2BzRF375tEpf0Mc3HjtbZCdEpFMdXOWe%2FNxKvXXzSQwzUwhqYwpi42xopvYjN%2FS7kzv%2FIdDELoNhdywqbj8mTkMGZaYL6rcI40i%2BjHPaBBbKfUdgBES%2BQc0YENVtz5eLaiSYkQGD4upoTcSDbOSRVsBEgtlh%2BGFYjPJjTrsyovmbbHtkXUl3C%2BEHfTRyy3ArFEUbWTgHs77q2lg4KfaeL1S1GIi%2FnhqzumDazS1V%2BlW%2BjWF3q%2Bpj1wmvh7yYoQqZ6xeDt3h2UzTIQ5fuFp13eE2xvZDED3JKO%2FxJ2sXCnYw6Z%2BewgY6pgH6ZDvdGfwKOWNE3U3JP3AnZJKruPR0maenzEZYRmp7ljfi5KICh%2BOmB2lvlq75HbCxAf7mm606bbhFV%2B%2FurpeTHYyOu5mY%2FgBUyv0U4Hjd8W341PQbZ3Yl0uRTzhTSfDHgzSHcXtmz8Y%2Fb43vMMrd98c6cHvXD89MFubqlvEuxJYpPVJ8hRsxFwGx1KMNgy6B5m2xqUZDJWRZjngJO8f2N7bu2ht%2Fp&X-Amz-Signature=c6daea5b2ae4a2a81630b40ad7a49a113bcafb257b23d3cfd95f2bb9a5843dce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
