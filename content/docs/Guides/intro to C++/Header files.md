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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLCXSUQ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGNrEDUvJa9rw3bbhkjLBoknTZAD6MY9UihwLaoz53ATAiEA5TRJM7pQJx0rF%2B7A5rRHWWwTsHmQvrtnmLqSMqH5rqAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrMLslzW3S354jMjircAxAhQIHdQ5J46GDgnXzTKRTBKza5RalqjtUPvVVnsq4%2FrRgB8EjJlmTI%2FFu4IRYM1xOupHBDW9Zo37TA%2BvHsx7LeWH9g1mKBO%2Bo0yx7mqQ37y%2BUWXzg0mForf6OS0lQO6CiXyLtMr1az5YCfdd5cTudDbjGOIs8wNRdd1D1hDPAjBifaomyHWcbrrTNV514dmGxhbdiFZ8yxXRS1EFn13NI5ZHEM8FxFSh9DnZbsB%2BsUIIFE2WBSeMJWFV%2B4pRUBNgqVHe0eg%2BiGWL6cRrBXvmrM0Ej4CWaD%2BBhkfipANLptysogmOBR79Y4yYN6PWichiM0GkO04qu4ePL6ySnx1IV8uyXmATIEvF%2FeFFkRJPS8BR1P9BusGVvx9pu5Vv1%2F%2FlOPOFahmEKrY6wtL3u0mva0zD%2B7eE%2FKjIObExTrcxDjfIeRoIrhDsaZMz7yLwPcymlRMdvtgoLGRcEYvt8hoaqVqbid%2BUKiYB%2FEsrlmf8p7shY7HSdZ4ggc1NSB9MgIkcqFP1cHbw%2BoyALTQlUDLC6HRqQK0xQvpi%2FMWKnMFxG%2FRTDHfC2lcoa0Y%2FIVdmN1boxrOBhQHFwgO5gKyBB9dZbF97u2ZjZliEk6Cw3u1TFhuZ9KNGL%2BrAT1kFvBMOu178EGOqUBlB9005S9GsQaYr30EqRza3LiU%2BjCf5cMLQroj%2BntKnhBWzAGR3K4nQcbr11FepEl6zqz9%2FfLKqPzpQNvBpXLWUf9jMjbrSkyTwYb60krrfpelHRCWNKuIelAt4JNDk4veMNrS%2FAz9io7m1MPJECFyzFtzR46d84tD6cjx8LeO1xrAs31sOV45uJJ9psPlOMTfBRO0fgAVWALE0E9ankjfU6277WH&X-Amz-Signature=132c5e09eeb519fab20083ac21736a9fcc594e639c640e285ff011234251d6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
