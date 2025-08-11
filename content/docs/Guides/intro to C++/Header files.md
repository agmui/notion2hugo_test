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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BDU2UAG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDV1PayDUndWFL04WPFUBwCX6UADsAPKpT4bME4jdrsAIhANQ%2F%2FRGnDm%2BV9G%2BWCTLI7RbU0s%2F%2BICWE5nDUo7NHRlvJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNw4ILJsmKPhxhhFgq3AO1t79MP3TfiI0bteYtisjewfyB%2F6Li%2F7HnZ7ieBmOjf%2BMAepP%2FAx7VDB%2BIAL22jFoKi87I2jcrIzuh71gpY21fXquzkCH8j%2FH%2BMqEOm2H59QjUcCxEd3eQnPJxYihECGc%2Fp1Rb1urjK9O9hL%2Bqj9Qa4NcA91j%2BYEBYUCJTnYZiO0Ugxl%2F3XWs%2FRBvS1dpJErGtGvu9huSJjyPQIHzb1u9%2BvhYgj%2Bu8i2fBqa8sMQ5Tqe9ud2GJQwrCFRE2mo59dkDZ4p2ExdSTlHBUjYXJM%2FJno6laudH2dTS8yCHTC79IR2Pn3ACwnMWt6FRfPzHhcrUl0nNDR5xbt0DclVNj1pnKCh1fa8qmadwuu5v7HgqG5H5w0Wkos5nXxFpv25aR3lUfL%2BFnxg0xwqWwMPUvMXSvww9%2FD87XFVTkabYcyH6Bip0E37LQ1kF5rBylur9UoRsYG88I56DsMR7Odw%2FY12izbmdIOFnqjyQVJB9m2sSGIAuYiIhf2Uo0%2F5oOR0lm6K0L4wV3TOkFtbn%2BSgH%2B0Z%2By52w1BsM0rVZ%2F05WNU4DfpaJWFv8SBBnWnVqHZY5G5DvHUlniSznjyz5cY936xwjp0i2WgJ9XPf2rHpOeGdMcPPzHHa8yGtUNmIAH%2BzDurObEBjqkAUqPl%2B1Rbdwz9Tb3PClDY0xE6SDVXo%2FVnApzPaFfHNSKFalJTK6MJX1BP2Hp8BKityQzwMmA5cOJUq2C7%2F0hIKFPdMQwOdoYe4cXqR%2FdzfLnW%2FCIRA58Jr6NcX%2B17dLegrr%2FFoI6WjMPZ88v9tERHcNGXitrAF3EYQmAXVhdyGvwT4kXdsYaZjF%2BsPyXgB1%2FaRXizEDDsXino%2BP0AZ9rsjfSVsrT&X-Amz-Signature=a7126f01c48c196743a9f555dcccbd3714f5d60910340becc9c3ed8791a2a1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
