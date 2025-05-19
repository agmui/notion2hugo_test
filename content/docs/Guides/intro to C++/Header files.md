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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTUQ2T7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lFMJuT8sAjQ4rrWjJu0dEJnGicRxrXBdX57XcxI%2FhAIgdDt1SEhy4FfdruxNtAKWJ37L1OfWUcYT6Bun3I5gqN8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BOu6jmpYnilF34oSrcA9uyWtImB8usZZn9WvAgvEHgxx34OpzDaWSh%2BPAPIi96w%2FQCWDmQ5ebG7CFVhat6vIS4ZoM4X51lF%2BRz8lf%2F70i%2F95lFWw90IBX3m51eFj2JkQ7qal3RDQ39%2FvWlbwpKlcDZRVjVQln9X7LSAm30Tt0DR5QUYSejEnX09%2BY77wwA%2BEc25fZEb1AEf%2Bvwp7y45KZqlbP5WVMXYYqNkC2vEKaiWTPyt%2F1qTLugQxAxv%2F3eiciS6L7kqipIiUM7Oh%2BOYfH%2BBGULYfzH%2F5E%2F2l%2B5YVSya6%2BVlYsKC9IekgLe%2F1hBN32G7bwG0QfmBHttc7jMEWhZAhDh%2BE5pqz75YZgBFNrJnVL0xRiAHdxYta4LBS4TsDCUMgSZZUz66Qe4FAhuayWFlY7d%2BRVj922aeDcvN%2FRiGd22B%2F6u1twmgZkV7i2%2FnRGdAQAqp4x5AzRpFiQ1MIPJ0A6Q3W%2B4KZoU3PNKMy8f6jL0ZUVk2xNq0YEM%2FDwMQEPDuW7cO0Qwod2jOZESEgGgCrIm%2BIupQFtN5bvVru7r%2BU15RqOWSmJpEqnWXtta4PZ1Eaa%2Flr6yj%2BZVRhrTvigNs4VzA99EfIz4fNmphUu26umi3K9SkPwrfF2NapyBs8HZv%2BLT5vuzWZzMMKzIrcEGOqUBLtyRALasCTRtERtkvEvXcxgKh9iJEwVkZRpCIhN58tIVuJN%2BULEiUDpWoouFtM1%2BKrcj09eIiMMzr85JzaaoiAk4%2Fl2aK1NHial473Z572xNJk0QISasC6aOViPtw6niOY3kmHBtO9PdofnJEYm%2BuM89YQQVYvI%2FgFzUH6rT5bdFdRxSCkf3yvoOkPcDVWeKiODCnwgKMBAL4awIuBsGjK4jR3Nj&X-Amz-Signature=ba8851028756db80ee676d7a0c42e4cab7cf4c92e8c0f8607487c9220ab655a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
