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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKU76SB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICCb0%2FnTmznUNUkKhqcZwEuvDoRLS3YYUmHmjUiZAyxYAiAxUZUwQ9NrwMr3%2FflHeFETsH7bebXJrTtb81aai3r6RSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMqq8X0HHW170jxeHtKtwDgqvWlFvf5u%2BT0571ILZIB0AaMGJT08uQSN4BGUtivJOV%2F20niM4dbE%2FMvjUsD7LdFrJ3Pam8jgvdkxcZJa7Y2qynjK9HHMT1aGUHBi3zR%2BGXzCg5vSojQzQB%2FD2MuUNT7F7ORf1t1XHzEidPhAu22qSyXAuAn9gtX65k0hnGmBl17lzeJThg7BTjkeV2f9IND9Y%2F3yvQFNsdA%2BplqbgVWc09b2hq3YC3D%2BQgqHiwxiSJD1t647pkS564KGiiQxm5xbJneutDQdXpA1aBV0eWFNKl4JVNKqBmE7VoT66NgtJPiBwuGPDEwNcC0nUu7M48viaUKohErzTHrg9WT79de7VzZNlOAibFXwnwG9Pv49fA7Hb7IGimjwj%2FE5c27Ac%2FbNbxgMLe5aUGkAu6mY8XnLdvhwrVELuP57lFlQtOaxS%2FASO6hlYkBxvyKMQyuiuZO8knkZCIP3eSc1%2Fbh9NsNrcWq1xUncuPSs04Sr8bwSaRBWWjamm2ruPh1ZOCc4Zk2tmoprTfeBkptDfdSxHgGKA1PYs%2BMcePkxLx%2FCsUCGAvj1EPB99ORWODZnjD73XIsAgkjENHMVLGGVnxe%2B0CfOIJttYcJhW9bcfd5tXyaQVM88XQO6GStaPyWRYwr4j8vQY6pgE0I2IyJ7Uqqqhpw2WImOWll2bQe%2Bn%2BKLmJ3GwHQQFPbqjJgOnltPfK97Pwwo95utS%2FoXQzg229aiQaAar87sFd0W5drD6Ji11FgPcUPm%2BT8OmbzXUETAnaJ5b9fRiRkLSRFjK68eBBYQgEtEswpucMB6cPinoIvMQTY5jby2qMe9bXqbo8G7F9NGMe0FkoprDHrimkDuRSysu6UMqhj1xXjA2NAmjp&X-Amz-Signature=684d495d411235fde418217844db98a676c4db77ce4ca163b1c61ecd0ff426e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
