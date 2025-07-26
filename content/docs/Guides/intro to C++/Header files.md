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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US73TESA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDfyie63CtDvyEFy2Jz0bfva2eNa0GDUvZEJJovJDpQTQIhAMnSpzJxfZ5jTQC%2BeWp%2FeCO4nVbJpuYWu7%2Frbt29bQ4LKv8DCGYQABoMNjM3NDIzMTgzODA1IgyX4ITQzWHt0UkLjpAq3AOCkzwDgLHjBR27qLg4EJnIjtkV48x8FGq8WTa3OMV98FUUCo0QVa6F8QSqCFIjF6AOwFvVOzgxPldKMcrfAgj3RbQuu0fB5YuYZ8IP6nHp2L6XOpQo%2FkhTBeTL4zhLG4IPR9CjX8aYnwn%2BRHy15%2BD%2FEr%2Bka3bhRGfV0TC7GSBuUqFJ1TLlvDsok2sI5grUG9BL3ajYBrX5bIezrn1GxNBhldNGzcnmeo%2FR4leoyiLplAiTI2kV43XPbn7NKhjKC2iFJ%2BY9sIPvRiJcP95qSxbt04NTSWKsXDlvE5sRKpalLD%2BiDHGJivQ3fQKVJq3XzF%2Bxuc4JTPCGBw9dMEP%2BNlzcjbXdQ9kMr4CbFgsFj9dbrT0cL5XYu0DpJj%2BTwqDMPEi2rKbsdJ5XilL8rwi5AZLlJavyhRDQXcmDYRuGsnYg7s3dR1kZc%2BQBFvpwzp%2B5tMK%2B0G0b37K9VHinn1TZz%2FQklr467U%2B997E3tQVsBLQ86W%2BA4LEluI2uJzFLafpMyFvCH7WNBI81A0KjW66O6ibyupqdkXVv995fckcdmDNDt%2FQCD1LQhdnQeovN6fZ3Utsv4D4kddecw6gsPKJ3yPJb0ReDWmgaKXdd394xTV9lMnFRRc1OexSgvfJc2TDs%2F5TEBjqkASpi0IK%2FXv3nDhkl916FCs0VJZYs1WfpY12C6pqdIxuJvyCd%2FQ2cDzwSU35kO96Lw6Y8ZZ3VNB0nbkPGJcZtN1Ip6oyCuR1tJu5uDaODox5kawJcSRwhuXJBPQVp%2FhbGnM4s5o%2BtmlPi%2FtWYj4zjr8yjY8BKZrte%2B98fePQDcv4Ef7aymBaj7Rifb1luMfc40k5y4tspTUJ3djxNwAzV39WAy%2FuP&X-Amz-Signature=0fa1eab81275c2804c9f211b1a5703ce74395a718ed68728215c7a6558f9ad0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
