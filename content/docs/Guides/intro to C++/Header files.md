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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3J36IC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCK8l6OJetztuzHoRy8t99Yb5c%2FiH2CqcIMt5ZUpx7mtgIhAIm5SsGVySjN28E5oV3El8A3MZpbrdyrUWjQCl0K%2F505KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPcKqi2dSea8bV59Mq3AOK7DkpV7Hx0inzHwSmN4stEcVpeV6kfQPBy8i3sZqZp5IYwlZT47EGo9%2F2FuUAj9Lpx7w3lnk%2F9lvDDwSKrrcm5HmnQ0gmXng1E6xTIPktxxtNTWGQ7J3FZNc7t1PBhdxJw4N1knsdsnZmhSj0DBlMXcbt%2FGPcQ1I8a0JNOuyT9EZ2FclTeHhu4g61KpvQZj%2FYDzdn5pmOLPB%2BK%2B5%2B8Oul2IEbu9wrzuojGys7uR8t5iBHfgJpVy%2Br%2FcLRQLsv9Q1I%2BS5Dd7wtAWnrgkcJcyXiu87n22i0SZLBld7kzujX1PbzPHPEKf%2FQ2ysMHg6vu8zuI3cVg%2BGWjFVDMuk%2FGP2qWt1EAdpRxOvnVtK0Ah6mnn3%2FE%2FH0jsGmAQD2zw4jhNvRhv3Gq43Lqnj9OL%2FyWJSxXYt5uMQ%2FPgIfo89uBpfpNAYDcU7k5RtYqICau6hhMdDExCkJroEtr7olcf5JO2%2Fya9MP6LzbHGAnBF%2B%2FZzTup05cbakcuEi3pWFrCQQxwFyYd341dCBl%2BOLbElwkeOvUF6DqXki1B%2FggCYVxrzK03X%2Bow4rPSAvvOwp8ugn9wznMQdsOfGEXkgFDhHOFWJ2Zz9dH2CdqEsG9uUwGbydbMc42cWiYQOuS6OcjOjCZqtC9BjqkAaCzx6okcNUDVaT%2FT%2Bv9D8aZes7HnmK5YvmbKtRNTXRXef6HUvVQ56aCySChQiowunYqDZuCEYhnSoz%2F7Vi9Dl4Td7YyvDqk14SZCseO1Wx2eWg5UiUWuNHBKbC0oPd9hUI13Vk%2FQEZ0Sfx4CKGanvCkA65NJRouigy3MAJhUVe0IDMnHETkiIcW3%2BXnnqAXERwMbOPVaqXqkPjMnkpqNov3o4DX&X-Amz-Signature=3106b9b0e5e7bc6e809068c1a3633962d490b94a4933501b0a69b708c21a3cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
