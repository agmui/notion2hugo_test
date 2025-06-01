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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5IMDIG5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGGWOjYwaE3VNKw284%2FhfBuCZtxV7bWYwNo8%2BuQsgkLNAiBYUFiwCJUOc0MxYmQMRoS5FDIIvAUU%2BAKNrNv5dMN5biqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRxCcD%2FBUvctPZIItKtwDeA8qRY40lXfHosobm0%2BOtUEtKKXAtCmHwlxZqBvCkfmk5memmh33eETZE264yPB7oJiVaJEsSnKLv1O0Q277HEIAg92lLD52aeEM1T7ORZSL2SjXfdvrtWuKm6TSt2YzbN%2BBd2xtZjxw86AcfDk9XWE1nFWusL4CWTcvWQMpaoIk68WUdxATEw3x7kXciJ5tErXDdvL3EPF0SJ5gGnrWT2I9BGo8D%2FH%2BmXIx4162raJF8JdJc8wx9NQ29RDCXiad6F51Ww0gSeFVgORAWBzuFhXcOeqd%2B4kqn9FEE%2BwRk1dC0PojTM1867jCPdyJt123m4VARKl1Ug%2FRSQvMHEQGJgmWT%2FfoTMnqaXv8j92X8jyds5k6SU9MbC7ftl%2Bx%2FlDeaypRGvqUtPtc78p5ct8dkXrIaLGvk1qveSG0L3oo35YR0tiDT64eOWG2yDEZw6iosjgJk1Ylyx2iYWhX4%2FxsG7mt9NGgWZeN6MavbcI%2BJ%2BMB%2FewawOTy6nU20SpM7dQVjk%2FODqqzFSpf%2FakkKRh8J28vErvkrm%2FKk0crDHLz%2BIcC7quLavdjNOJpthnE0VaimxENyY1UNaaIYdvw4MDsvG2wv2w4aHE3FX9K49DwhbG5vjejRilVh8iWM90wgILywQY6pgFUQkk%2Fh2fSM83gTucyyBClUT578FhOp%2FmBdOa0h27Llkf0nHwks9qvrkuFxsSBY2xO2cIaJbpzm6zKcc88cqsANdDaQtExQJqthaY4rxUcAZ37pWkEgCw6RYM8NAAoPQndb174fnyp%2BrJBtfixAoyt2CNkQ3NZgeJvLqB1azlOBISI54mAbI295aScarm7JjTXDnzvDSyrDLNyJAXtozQRr75oEBQ%2B&X-Amz-Signature=e3b7e257a726edb46e98824cf982c3a36ff7c7f84ff379abacf644af63494e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
