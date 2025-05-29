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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZOTQTL%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARn37etkwMVkcA13Q5Sq%2FoSnkbruhCa0UVShQYgltbYAiBF%2BKcyjAghpPA3OiUWoVI05cbFsg06VgMI7eqixGNn6CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb5H2l8Opvoy%2FXVE9KtwD5e%2F231JPOVs%2FedlCgKbNaAkbQ0D8jRvA%2B24ubdpkW01hUT1r3N%2BYD6IVLVl1m2Flufsk94tUFvIoh2aQrrXBfJ4VCYt8kObfK16FOvRjeamuWlrrUnUoQgY8mwy2kAJBSosiL6g4Urb4D1bw46uPbyknk5g5%2B0MfpD9mcD%2BTV3lwm5T%2BhlBcT6TB03ZL8%2FwKG9b2VyxPRaHmFmf481TKaumBa7bx0Mbd3KV7rMo7d0asmFs4L26bxmTPn1eFE2lY5MDaboZxbE669p26FZx4zyw0CY1Mbye1vLJ7fXLiGhhvLJZtakfGFWkphMcByaDU4IBPlthlAEh%2BbHsFEYtHnmGE1t8Glzydt86JO7rkvpuy709%2FPvVbHFz931nsz4e8q06F0S4ZPJquU6GfiU9yTRqUBhy4Tlj4B2RRUs8eVi6dMP0sJLj0dEpruBsC66ObwF%2F%2BxeEIe5XhTOT6rxLj0mmnVlnOI%2BVlrvyX3HDbIp%2B3DmnOZ7JDBxeim9D8QlfnUYCN24MRe1HaZX8ZN7oO13OQdk6WQCl%2BQlq9Bz4e90wY66rYZQ67eDncoYER4Q7JSJgY5F2UtOnW9niI1yII4a2gTKOYb1SGR186Tg55xL783XQG4JmSTRnjY30wj7PewQY6pgEc5ysvOUXZB5aUCeNpRlLRMPjPBAlFEGyxsNZiCjSvygfwz4nZxo85D6iBNdW95N0nWaETcc1t8lTDZAZMhqS9i4f3YC1p9HNqhjdsGABWZEnNLDPx5%2BJLoRm9tANmFrmqxFsXhP4fG7EOOGRikRsNzc6j4BEC6PGwoaN88sgy3efWVcdkS1G%2Fo24NZjn9%2B6Fu%2BLqinuA8xoBXGu6dC43fdfny6KA9&X-Amz-Signature=9f2f06f09d92e8c31919f9275446ee26ed2bbdfa9eddf811d68ba8ccfe21147e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
