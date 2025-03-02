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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GWZTXP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAHTfKwUd7E6pP7Dllvomd9Fy%2FB%2BlkAo0uLSSzh0WcF6AiBLTxv3NsgmFkU%2B%2BUo%2Fl9QOw6SjfLegrtrcTIKANkzEECqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHc19TRAkOlQ64ylwKtwD3BhLeLRLGNhGwYYCzCsHu6ta8CQ3x1LxL5n2wr6g1De0%2B1RpTIwrCmHuor4wrtQtpqUnHYCW86n1Es1YqFw9JKW%2BZ6pH%2BafIw8BEqlUl3JVPuUkusx68LySG8o4YoApibawILNjrI5rh4G%2F55HEo7VniERd%2BFTpP3ILifiizC3qYL2gNjAwqzJxBMpXMETY5JonQ5Uz1lKXXTf9WROTgsc1AcdQWjcZOEOToVa2ephAk7yxZ4mkEuTKs3LTwezGuA2J829uLKvpvQ7K6YY7CzG0fTndcyWmPMB3JF9QCZwaMIBfA9R%2BetnQWswEJUCIplRNX19tMRn1JSQZEKVgj9y3iKswmlnsq3uqcOnjFMXweScWSTPnjWwQtcAM965CuRLyV0fgfr0250q%2F0OtEh%2FAnjVQ819LSY2AQW29Eua9m8WJiO0clDLDmlmp1DX6eEoIzxcWnRX0qYnw3m1OqvYIAd1ckUwehegbyTwGGeh8zr%2BJ%2Fug%2FVUlIJ%2BE22zwM943S9sJjyG2Oba%2F33LxIaMwMXSedO6B7nscNOgqtMr4er1e5X2i8kByiqkKD6ffg1ZrHBF0eZgubR97IzKsS8azI893SJzozKoLRGZd4vfvqj39rrzWZ%2B0SuOcY%2FAw1bePvgY6pgGdT39LIE39Fs%2BL6MQwdmeFqLm6Q1BjmQNntmVGapufC5vAqh1E4xqm8PKMrpMbu6fn1McUzKpWExFasf0Ma7iUMQO9g0p8VUclmmy2KkHOQYFpTeYwRHsk0yBQ0CpLqs0zIY9RpdBEnSMXuzCU367R7tUsPmhkfHZkvBTW%2FQqu5d5vJSm2CPo6rajXYWHQd4fomaZMHMbIAgDEctAdNVrJm7WuDBpF&X-Amz-Signature=10bad11bc0bb90950de5a521f94cf7e8fa8b236553b3688640b842a649a1bc81&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
