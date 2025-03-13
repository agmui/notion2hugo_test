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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JETBLED%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6g0ApmsF5fK6Cxu6bslOxZtb%2BeLT8UmUToFqrkwy9TgIgKwi8eBvxIHQEgZvXxj7aMou4AJsv%2BCKNta1XQ0g0UtUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVSYv2uxTlAIYbVkCrcA2x9ho5wB52FNGoKzfO2GK4sQUlH3FC60YhcLugWI73U2pZAy4Rtvt3T%2BMi0421BYRHeGTBjZiK%2BgU4FhQwKBeGe2Kmvd30sY%2BdaQB6eu0oARXpM0DMoUFhEz0EnzSUnPH1axXXhcs7eG9InLo8A2sEPb%2BRU%2F5%2BL3IPQ4Vk9eRTnCuoBPOxzuZ5oxf9aI0QUNGdlhLXtQYfmGix7aIzf6VLYxGR0Lebrtaf6A2krSH20Rmza5FffqTPHDnW3mTjBkTLO2iFnknVRyT237xnV17CgIxxAJkaaCXnd5SKDyMJQElYN6%2F0oIMju%2BTFB8p9HUtrPQslO5UIqD8C%2FKoHfi7m3Ejxn67TDXKzlRZlYGszCMt7GFYoYlLwmtPbnCsXRm%2FJ2sB1In5MKWJHAwW0QYAaRcNfcV97DuLLVsGzgebBDupMs8bBh5XrAXIrcz%2F3CjvOmQwxzEBZGxhgqiFlWu17Bs47YYyZkVpRlpokmikRsgbQd0q2iJMsTEB3yn%2FON7iTOq0XCJNUp7dZDWcdKQcsOmt3nR5Twv9STq8CfK7JB4AEIx3bnGj3RiaVxITwOQlw8SHay7apV3sRDdIdp0uM3szTGLcDiJBv%2B%2Buu5k06KgIiZ7hv7p3oputJTMPm7y74GOqUBkqlu0KCxyU0TXYWf%2B8iAQz2fIIJ8STSMURMBoLUvptmfKyvYb2QuE5NdjcAqRqOMbPxsaMHHqLwgfmLw3hqSGJLPHaws8D0TygtjiE8PMXsk%2BIG6I1rWCdbh8RFPYPo68xvl0HHa142c4arRQekmAN3JxzLwY7PezWFimxSFlNNXWMrr%2BskXn%2FGWFN7A%2Bvd%2FH996yEwWprPjz2rOok44VUwGcNRb&X-Amz-Signature=40497a47f6ab3e7c8beca5a553e5de07f76d5e9c1c6db3c4bdf8ffdbd99d96f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
