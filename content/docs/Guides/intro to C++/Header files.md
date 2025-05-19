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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3WX2GH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2NmluS9e0u2kKqS8X33aHATa%2FOzw6pXD1HdF9ZkqDrAIhAJZYIQAhQwunWUxejnxMY1eVfK9no9awvDHycj90dseWKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPouqUtnfNfO5JNOkq3APODakru46QaQumBPr0OVnTeWadcisqTHFzaxnwVGjbNJcDwesuP5RLeGq4PBS79LC3A8xULPG193ARGz0acTDIyIOlJ7paI2xQ1908XihuTuptsXptwrl3ipcdS7V9q5IlnfumRyA1N5QF2J%2BZjGY5Q10iDUHTzlMseNVvX38orUAsYu%2BlM4j6A8mKmxLdS5sVevllMPTuUMg4GcWsQDHhA5BRZMt7WQGVEl7zss0HY%2BIO8%2FzD21Zo0kIG%2BMI0CsKfUcsn%2Bwj5LmdEaFohVnR4HfJBnDbSfZaNQym8uUAQib3dOaTza%2F0QHKn7Yj%2BU5xVQnERF2yvzBoI4zd1zH2EVL2y6S%2Fd40EfBfqZwMT4npWDb1EW0CB%2F6rdsBPT21z1mh5kSftUqnRZc30fTKsfBamVhF1pl%2BwoIYpdAoQF5l9eMPnlMQh5%2FEi7JVpl%2BH513UqgqFo1TtFdYe5UMrG06RvooTGHjGYhcsPGV3cL12f7o67NzitqtKSDPtNfh%2FgkRWMjrI8GU0HreLpzuQFiWYzqUnci3cOFKG9sGoldUHJZbECgqbkU6WThx0CKuQwcoPvupqpAP%2Bum72ky1FA%2Fliye6n89EcN1dvIzIuyn6S3ypCsWwm9kupV3Bf%2BTD6uavBBjqkAaIp5XqjRKu4PNxa9VIXNBwar4vC8eKX8sffhmSVC9ry0rO2R6y%2BRVUoQPxSpwv3fts5c6LGKci5m%2Bn4l0I5Wpdbe44%2FYWa0ICYK%2Fohzh6KUdF5qcBs2ZyEoyTXJixc%2BObbg78UYmZc6IN%2FoilEpzKwHIfNADq4fuNPvMMtQpzzxeiBdDni0lq4L8%2BvTjKqX%2FCfFpr6jIEaekjxUYD%2FM9ei31aXD&X-Amz-Signature=32f36b2fad5780cb3ed56796070a5e0f6ce9cce697a05a3bc17927bc00023653&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
