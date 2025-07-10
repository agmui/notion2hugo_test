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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5AFYNFK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7TqFnxBUQEscRjvjvl4HHn5uo7sEa8jZIZ78lGt4N2wIhAJktw8HdXPnxRTmY0GMUcHzHdr28v%2FgifIU7ZGpfYcL0KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsrYdrCV0Nk9u3NuEq3AMQsH7DTjHXcmbh2%2B3nyZgxeCpNoCCmNLLeyQrTX0MrVv33O6Ale2BzN%2FTlVIGN2q9ky04chdlISxbxgUNHEM%2BEmMLBwFDd5xmMDSKFrK%2FDT0u6WwPUw1TQZrlXFCWvKY8VtafJT72l7rQivHlMKIXMtfcqkxddVZ2%2BxFjY6Dq5OsfFaJ0dSOUMISYFA3KSZH0%2BH%2BUizmDhiBIc6b1fBZRMlJUEwU9fcI5Dp8LcyWliNUGh97KouRJsOR%2FPilDxgHqObvV7q9LsGwMQhxYRkqWUa9eYr9OHM%2FJweUWP9vFcnRPbVHKd5IRNhJkOUpTQbRQ4gz4AdwJWUQ2Y6WALmud0nMmAxcPu8DbgO6A1PXv%2BMJDkbWzm2PWPjDFe67KS8PDmd7cHwWvL%2FSR3xFqyY8MpOZPwg2RSzQBqq2QPQ02rJB4q0RLRcbLGt5gvZ29OszqqlN37SLyH7Cc9if%2FSiOLSITxFrWLUZOAhAFgHUY1Y9ll2RN0lA3SwTtb5uo0ii4JwV1%2BTxByqr159uqA6h98CEvYB1liOcJclquJbRyh7iyAjR4bIzzGRP7p%2BoUy92%2FYoMbw7toqRMjNlQvdfz5wNPQpRmQgGJmXCSmncWR1oL3SZQ5Q6QohzqTeHDzDpzcDDBjqkAVICixaZ8aBM%2Fs3bVC%2BDajJ90ULn0Mf8hxpT9ewvsdirvEb5%2F6%2FzSEg29Jw12qWAAk1VRDBy%2BRPWALAyrunZM46XG7rVOdzWE6ykxQKrBKJaVsrS2F5SathPO8wgLedd%2FF7dSgmyjMas1JkB6ietXvedJ%2FvwBJpedZSRS5RZUPvPiZmA25IGKkyjTJqeqGE9rzE2Wx0z3uRb6KET8wVbYZUSRm6K&X-Amz-Signature=d1b9bcb99e8263f4bd81d930ac2033cb259b782ca4230602af2b4c16b894253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
