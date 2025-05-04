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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HWAY4G6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDC56VapIZOd1oXXS0tupkkuUKgjs2yvEWvjSxRM2%2FiqQIgbBvQ%2BffoGJgfMJTfHbljYAk427HK%2FH9j7EAi7j4ferkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFNvqjEIzDF8ZcaMQCrcA3vFtUgvauvMBkogJ21f8VaudX8DSu%2B%2BfdgII%2B9POo4EPLQdGZATiU%2FCbQ0NuaCC0jt%2BYUN66x2bTPtBRxt3OuoEh7treyWVB99EftlSmVJej6xUoM%2Bu2AGbAajs1ED1Z6LKYe4Czn0c6VW3jiUkOs9WYLp3aNSSws2u6BUSRz3tnCVR5bA%2F2wu51xscHiAsFQ5cwwIl5g%2F3HEamTefsPm6B59LwjPPb%2BEt9tQN4%2FsgzsXaLgV0%2BD7lQDyEwIA08vOheLA9xSGfMCwmrJdTZ92gAD2Hj6m42Ab8RmX3wme%2BbIanY%2Fp7ajTEPBOmnqthqrahAQBq4HG6UZI2MXFmMUJd9B5KbOWE9EarSM42pjYzaRvvG7QL6NIsL7n%2BY6XJQCSbghdvasis5kQ5zMs7mbpJWoU9Rvu%2BIQ14IJFsiU%2BZG6uPDzc1e8tcVBQe%2Fx4P5Lf2E4lpKtJO7kPe86G4ErTGImdHxG%2FSE1mbdME9V9y73HDYzD2PyZhZ4UAhb69B5t%2F9dlIttSWw6wzFSpy15T1I%2Flle9jXXtDGd8R2iuFPwospavP4PNEgVoKWxt66Gqd1RgzW5QGfs%2FOE7Vg5%2BH501ze08S1PcaSvjP3OtiyfMoiurZ%2Bs5SZI4fvTogMMu73sAGOqUBBjRCcCNQ4AmY5yA%2BFwhfpMn4Euy4VZrxkwCtlYxg%2BxIOVETcutYTS%2F8eNe0rM7%2BZR8uireTEE4lAkV52kqy3i5nP2%2BPiYenOsKLUu3gvcEoqeLToikz8tVEZJC3%2BoZ5JeI9naFMXlqxgX%2FGoEPps%2BRvAMNIx%2F%2BGcKebVxkaEmy86XRJQoKH2Q%2BCBdXr%2BcLC27aV8SQTGhKQgDS9IIhUkCtFxaytq&X-Amz-Signature=9ffa574817b9a5b548f09167ab329c843679f1dc1de7731814c21359a2abe8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
