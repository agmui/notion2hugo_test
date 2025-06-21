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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULVTR24%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg1poKZdLVFRIjJg9UHT23U7G6zE5PZPXgLEpER8LM5AiA4oVc0uWZUfGECE9%2BLJlJGDag%2By6gtE9gKwNxOsO6R%2FSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWvSfPyv0snjR%2FfEnKtwDVw%2Fj%2F1Sj5YZ9Xhmvhv3pDM%2FpNxNIBNtlIEPenByqfF1VP%2FI8Ht2l17wOh8NkVSuNMhoICh796noIxKKbXI%2FNMQCKyuWzFpMJyqKnrUTyGiIENjML06k4vdtg81IYobU0a%2BUlEf15cFstGFaIYh17pzZQGNIdQvUdVl4SkPv0DCZfGpslOgkYS%2FEQ3rj%2BXOBP75NBi5K9Cq6TJXAVq2Qvwd4pyomlB7z%2B7nRQBoWfxPBmQICW%2FahD%2FA7y9apAfVJbUAzzOs64Q%2BahpIm7OOtU1u7bepNzxZR1jFT%2F9RmSuatgi0A%2Fkr6bNzuVvegB87kSzcLAPQEs5on0cm1hSzmgZkKCMhM4t6wVriQnh1rb%2FvfW88iIlHLQ5h0%2B84Lx5MWILhwrOf2GSz%2BfG1KebmF03h7OLhDxH0wDi4%2FovYHeJf2DmZICFvN2b0MMxspPWAI6SYnKN4U3PYxnwJtWLUVoH%2BruQkIZR3ls46eQ44HBWOc930Xr1%2B0r1JG9A4v8XL5uPMFFEdVNAu2DmuLocJqPQnj1zrxtEPxv%2BhS9RkZNu9dzHFk3q%2FmHoCqijOqaD%2F8%2FlwxmKk9NoJakGtJGOevmpeB2weyjbFuG5KCK0ozf9%2FlCNxd2dI5CLzTBo%2FEwoY%2FbwgY6pgGdhm%2FwzfCZi52Rl3uMoh9PHJGfohfkzb%2FfjmkQSQZUHQvxWj87NAIpyjkwfvpzvqacCZslUvj6bSSkeeB0uhmhvC2%2BOZgGKGdUH1f3oGt6pg9YNFlaVUJ9cHGA0jqM7SENZF75nynrES4WLyPPSXv3co%2BAoj1%2F30X3mGCoQFUnlnrOXL8LP95GGL7I4wayzMr%2FEcZnMBQKzRRVzoCJfWu33g5%2FHKvw&X-Amz-Signature=8ce25901f86a064b4dbbb1f49c98146d43a71c949d07eb93f044fb490edc73c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
