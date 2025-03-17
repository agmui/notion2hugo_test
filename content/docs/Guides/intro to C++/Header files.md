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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOWWFWN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1G6k4Pbt3M616RTGSqg7BhLf9SU7one3seIIYS2MHHAiAMA9qIQwneGgB4ssWn%2Bh7wVUWZxEEBHqmPnbuEoCDYxyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMo2EMGj8ot1UExkJMKtwDaPxeX6v4ogZ9eyJUFRVuPRd0g6dcGpYJpXjCZca1kKGAsBDH8M7uo%2BJo%2BRejGjYX19%2BVvXy2miKnDO6GMARfE2jZqHswgm8MKuIHZ7fFHA%2FZVJLqTgiqSIZgs05bDPDpVNxARscQ52yWyfeZriD%2BGuI2%2Fv%2BtP47pcQk7BZy55xc4p8nPGOeBO5eGT3attQ4hhgVLoXdjXZJVy1Ro08UZm2cVX5IacT%2BP6hB6X79DTTJlSgbzvaRj5NwJCGfaWl1GtLYqlOMRYz2kb7oFTclSjy2LT4NGVXHwdrKSQXCJAcQuXrPzGzkXXBXvv0w50w3E%2F0m8iT1AdifJq%2BWlJj9pdoXuOzQgu5OEg4iX7OOKvRmR8TiH9LdROtvUA0wKMeKV08OEsLrHhczqfLxvR5p1HvJ%2B3BF%2F5VHdNpsePX6RYIxlpuaWh450R%2FVS0mQpO4TWD7X7QpIg%2FU31lsbcZf1hU5Xtmx05IZdjtjnv7wMR34htKB1V1WYCVKnq5%2BATHENeWDFYHE59O0Ou2voDBbeygBnNzIl%2F%2FTFBI%2B0f9r9z4S1PwxanuRsx0ip7VvKaRmRGYtCLHrje5BxTs%2BFvglaoIEsoie5ITleTTfgwdE2sZmQNeox%2FSsm68r7jaJgwx8XhvgY6pgFJ5%2FfIYMEJNvummUHwByzdzgLBTp8GJ%2F4UjYNJE%2BB7EeW7JzV1xqSutxvQQQsQA45bSXT%2BlWklgoj7lfnKLg%2F5CyFCiqadCFom68wkVHWkpNq8BxIhT%2BTd6rzp7eyHL6jKy6cNubLxMBT8vCp8IJwUlBjo3re0yJ9ymdviXpKdOdEi6HvB30LKEUdZbb5Uxz6fUBKSBP4PnBigLV1sm3qYMfEo9N1G&X-Amz-Signature=b0ee41ed7fe51228f5f05f54b17287a32960d2fff924bf1c6360c33737e37470&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
