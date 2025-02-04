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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HREGRF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIB0YxxP8Y8nrYGE7kaW3fyemdvEe4j3rS5lOLqtBOwL5AiAqNmKarmU1BOq4wEcTzuQ%2BJDJKc2cswvPsBEJSVPsVYyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMb0Mx9DPmZ7hRYZKZKtwDUf%2FBEu9ELIhQTxY%2FjnZEEZ2Zydc5CFvlnjpcca46vwsGyn84CKdrBUm4j0sGaF9J8AEyYoYIWe2i1%2BUDNKPvz7oszGPMvoAgot%2FUIR2ufzSWv7mTSgigvJMmesnqPCQ%2Bz8xHXBC8G%2BLxhy%2F%2BNGqjnWC6geCo%2FoMgrr9fFgrhSsuedCxTCAp%2B%2BiZWduVAxgC7k4B6NbBIBoV5UXaOWfaAIlNhhMSEpldwm%2BbWSR0k2cN5PYvO400PiOPk6BUNDz6SdXkg5QZ038zi3qU24qihukFnybYVKxyZMqKWCawJfQc17PsCReiOut%2FHkBSg7Uoag4Z5uEmYE9b5vyLGjr4W4m%2Btt8eRHxzun4qpNbtIGahvmwm4QMBx6x08iG3PYAzlp4jcGLYOvUqVd%2B5ItQgh37ju8INQm9jywjx%2Fq%2BrQtoUp4y4lgfJ3H7sT3a9XL%2Bfh%2FW9RfZhH4sO%2BW8p0Mp%2FOLnKlpEnAY2WgbxoiYK%2Fdpzjk626Dkdf7M%2Bc4rc2Yi6DV6aQAibcHm%2BcTKRtGIz0l00a6GbRuiNUh77FNMNEGn0XdsvIDIhPaOepc3olo97dvWcNtogO5VZwm9lZdOoPFQhgem%2FGLBVLaj3eC9Fd%2Bvbmu7uNGPUFKiPuolG4wtZ%2BIvQY6pgEOKcCL4jVwGD%2FQW0%2BS7r0Kh5hBmN2sKzGXOQo%2FDF%2Bzt8O%2BGZl7glj%2BC6oFfJ8BVcp1VyGuZWmqSpjiqA8%2F1Fi3qVREtpU9LxfFZ%2FDjvNdm46LwDA%2FqmjrE6oyjogYb%2FKNF2edg%2FoSQJKiLvFPzizGRYMjww7Cjf%2FfYLdf39VgPogVFo5U7SPwa28idBGCgDPm7JsNRFrnht%2BRZ4vPt8eM7M90ETFQh&X-Amz-Signature=8883ea912dd7eb90c087cd7b40b47c515a4e0e4dd0ce32a7640085502c2cacf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
