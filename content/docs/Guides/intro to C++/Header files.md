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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AZTOV57%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5SuYIlUZaFmxQuSqN0lL%2FrIuYALTOe6xowy9rFMv5VAiEA9hmLM7w94ioLdIe%2FrHClrKmORwLEwfeA7Zc0RTAiqSkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAqJ7c542WlaaJAjmyrcAwpY8w%2Fu1Zesc6uoVt5icSi5U6%2BZQ0fD%2FroqAVArNmyrES2gJbDMpAtqo7spQv8gmz4tREzTTsMsEdJR26HAkHNehdmPOLKYgJUlIuCZN0G%2F16CkBEVRNV%2FQs9iAbz14v65gp%2B%2BgR9QEdSs3JWg6YGloBjHU9XsSkErHOY0frNikow%2Bg0sxg78xvBz9cljaSl3bw73u8%2Fmq2Zm%2B5J8UOOsO1aHWyWR4emSE9%2FrRWAkA7wcitmrf1nu%2FhWd2%2BYaQDSpHhNqmcKQIM30013aA%2F%2BEoUZ%2FEl%2BwxpRDWIiuhx%2BTntKUyu1U5GTa1y5wU7DqOZoOhwEEIBAHxmLdFFf%2FVGM8ZLCyIQCh4duoKvtiKyL0WIf1wrw07UCDQVGsIoIGxA7ezH7Pcb57CvVb029FRDiGkrynfmtF7z9niCFn4m5j0a1kgSR%2BwW3irGs5u0V%2BWc8VxF9JXKmpQF7OYRZoO2%2Fy6%2FBVJI9cSfcq7k9e2A7oEljcPfYuNDEVzBpdhebRYRbL6PkOnNQW5aPRDLQlNm7Ozjqk8zh7Klm4%2BJf8ti10ztGGBDZNuBHSBn5cdd5npdWNCo9axFQb7Kqjm%2FAPGq8KX1156cO4vVN1rsobYZls8g57tj6O7bBUrr%2Fdv6MLSE0b8GOqUB5mNXssG1S9u0RcsdEagoeLSVr5kFJ3x%2BozdAO6nDMR%2BxWhQkXr6jnMAPy67bVz5ZF%2FHSlkbYCC8stLMqAALt%2BRSoIv3G6clgfu9Y25ecVdpv6We%2Bz6tw9qFexfHfjzV8JOXJremLxI7KBx0cZtIwFzqw8XC%2FzoAT0sXesxbwrcqrIwWX3yaXb0%2FL0DllC8yJu8AOmnNdUVR74njBr7Spr7L7FpN2&X-Amz-Signature=a7b31775d3dff4ace78baf90eaa75d074034f8c60b24b80d3786b041f963556e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
