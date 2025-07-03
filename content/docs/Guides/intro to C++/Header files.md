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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNVYIK2E%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCLAmSVaUfa8WQRUDXAAh0xjog1yKrKsw7yoXYQ35KqVQIhAJvqnK6faNvJezDJREfIuyqpP22Vw71Lc6kAyylHn2HhKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYr81RxfRhDwwqD8q3AMAmsCX1l9pRK0X7rU0t44Nt%2FRm%2Bq790MO%2FUWUf1BvbI6drQ18JrEwDImJcWLseKfhKa%2B1gPkep%2Ba1ZQORTyvNbnSwprYEFeaQYeC2VozyoNavCvozVp8a5143VSiXHMilu9eZ2xpX1mEn31gOY17wSLAbRL3Xx5nMiflINb9MPfRMwFHCScZhigvlQGzz83nk%2Bz32falezCv8ec1E6QAAQ4j92CzdtCkRsfS886j9%2FfnEZRwzV8akyUeEjx3JQ7je2V61%2BfYceIBoQSQmb21jVsHLMGHJPleb4JuveXXDTqWZ7T4RLafyYPChrmJ6HTMYNX38qqxlP25PlEZzsetvgbVieVVGmH0Gn%2FUasxejc4wW1uI153AJVtZ%2FGIabIiuCdA0%2BzkkNj3bV8gZELIicq%2ByKAriIRR7gVB2%2FNFFzTD4hVxXWDOpFvkHD4urokXq6Y1MfeNzlP1N%2FDdRt%2BsvySukk0JW307B%2F1ZfeLVIlUFV9jCXlZNQGBS4gbqF846xM%2BtUMpY6pfRsWdVu7J6qmhZIe0SAMBAOZpjQRkGv0Y91BYaLfjuMyQZfcDEeeXCJMnUFTtw%2BcTvY1VPWdvYPzB0U1O6Jo5qc3sCyPm%2F4a%2BF58XrfJ5Uk9h7RksyzDHh5jDBjqkAQcWF%2B9hA%2BhI0cbr3Erg5BU0KpaiQjh6my%2BJ78xMM4pA7wsliaJ8wWhPbKAkdezX7sjR4xnRgS7%2F4ssWAVgUhCujF5yoifwJuSFj5fJFuC6Tlj2w6BNoXVw0cvtg6n0tNAbl7wmDRV64ezwOas7sFWyVXZhpLJngn7XAUGLSew0%2BC%2F%2BtNCpKPWhVIezv33AX6mWhotYw6GeXUuy8CU4LFW6Rubs0&X-Amz-Signature=da8d71de2358571e20cfa2efaae3c63693ff0342ab88b31815eff460fc2f6cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
