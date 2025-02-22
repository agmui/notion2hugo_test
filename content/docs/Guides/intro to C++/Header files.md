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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTGSRFT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY9YaX9wD%2FEIZ0T1ZBmNEaLh2RHpybGuaYLpOOtcrwHAiADnPcIR6M6ThP6JzzOG81eXgV3mwAPLz2ITbewqYrJ1CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQy%2FnxixiD5rDiDmJKtwDCjwlO0ms59Dzbww9SjyGQgEo6BGBxYGb6XRcyDddFwp8s4PABMbagKE9aKcBxs6M%2Flc7ekqW3B9gprAbyTFPyP1zsv8G1z3Kab1nuV1hIVTH8uWnp5dZDVT%2Burbze9S7lXsCDNLDGIMNS%2FCS1%2FCoQIaRw6Ths3N%2BDMjKRviDVoeMDFOpKp8%2Bzday1Z%2BLtNi8veBk1hj8Q%2BSQFUfb%2Fj4NLC3oAu2cDSVU4z%2FQzZ2JNZ8rr9zLls%2B42JTcLzgci%2Bd1ueePFco7IjDUzgXAIy%2BqUEvNHUZM5yuqEXrJwtWyDhUESUKJbhSdJv%2B72qnulAfXEm9zJR8%2B%2BhMoqVtvV8vr72JGfzyVSUqvofVKQpw8E4IiQAtvzX2sMQ3pYdYb%2BKUg2PLhEhqWCuKpanGwGLj%2FLFFdY54woOU8QO6vtlMchhu75A66iko2mxxmcQSLOQM9sxNGy9rwla2NojUqsOZPX9IYxppmPa%2BqufMTZfPnhiA9HgGq%2FmdfXcxFiHJ2NniNBhackc7gGaPrnFGERaGUND7muWQv11bhfQCVK3V62B8htxUBsChL3TnlnDNGJXYszrh3vHR25jJ0%2Fx%2B1I2WdLs6LBPGMnGHq31S1nC6YsW%2B8ov1QAubKMLxWZDownOrmvQY6pgE3HSSSlRPDJIzitnwzYBnYmqh0MgEoWEwtvVhEBwHllIKvw9E%2BxudVoHSNe%2FI6bTwyqdJJIV9F56zZIAJpeCZ%2Btkur9eX%2BVD47R80%2FKJ0kyOFC%2FjTtSg3qX3v%2Fmv%2FkCvT489KDuR4H0N2f4q%2F3up%2FszSGGufONV0chwmaE3IxdqXSsFjPvt50aFDCFCliX%2FZpQfXC76idqmkax7m2mDmeLvLjF5oMO&X-Amz-Signature=35cd5c41ae4eab0c33cd2815023fe584cbb2c71eb13f60e294d2e718b110bcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
