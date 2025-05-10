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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJI4VHS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVv%2BCMqj7gGNwLJyp1HjrHd1Jh6Av7M2DYbwesLuitBAiEA9LX73BqnKrM2Ic6jRq4u6J5%2BTRLIKXO7LO2v0ayY9TsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgHIizAfu9t3vZT%2BSrcA9DJiWoVjB%2FasO9n0G%2Blu5HVcxUCFKCov%2BojAL5nGcaUz8MGSsN5p8Pa6VoqIkhhDHjOmEGMFa5L1I4AXdSu165H6SXpHEsveH3Cv1lLnQ8lYOHiyb7U4Qs52x2C%2FMY9oopa89MqfRxtB9oBY9V2KtZXxLpWRNTP5sMgJkLmB5puf8sywUaJgv%2BUn9fuKvQPUpGK5d8P0Pb%2FuqVT61tFnWeTfeWu8m1V%2ByyAPLahERNywsRp8GVo4r7KqNj8o9fgo9eF9lSmqJ5pn6HpMIwymFD5OMuDFAFY7I9pt29skFRmy4HXPiQsTxt%2BHrbjVKCRv5cUc7QjF6XaefhtyhsXpI9k8PMz3q2IW%2BzVHygukhkCvFVHURM9qSUTTqSCivsDRZX6kwaFkbEsaOEKe82tpFEN6GyHPuqd1baK0eth4McWj8l78wwqjchXS8EGAW77Pw4rikE4kn75K1vwWNz%2Be3c6r62w8Cu%2FVQDa0irfvcU9%2B03swM8sibZMfJcb2xbw1SMtbM4ht%2Fem5kmPbGLY4jFNed35j60Kflyy1%2Bfuyfs5qHGQpR9GRwswFjqeYgQfgXjuBlMUZe%2FZZs%2BhtDhIRxogZzJgMBD%2Bkp%2FP51tqhxCiSp0y0BEGthUk56MsMJD9%2FMAGOqUBs%2BsOb7XdfAvCGbHTEB5DgQJ8fqAr7IOfm%2BQMy5Dps0UOLQjw4aokXv1nUr2ap5dBRiEJfAVI6MIpOyTN%2Br3z%2B%2FJl8B%2FMODUS%2BWbueuPSblRbkRx%2Fqkt0UcVKrxjFJAjaD1mjSMC4OSIAtK8k5rcHS%2BoFwz0baze%2FQbPfD7hMs6qYZ4tnfd3A6DD5Gm10fyQHGsBSrL3DjuaA2LzfzQyWvfyv8ffl&X-Amz-Signature=cc321160bf6e7ca56b2c6964f2ed183c88fbc26f76510a4335f6da3af9da9ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
