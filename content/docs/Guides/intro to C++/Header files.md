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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJSTTOG%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCowSPij%2Fi5w6n8EJHZzD3np1p7uvEcVYr40St2ZUK49gIhAMSGzAXsSVlrb6%2FwYbUExQzZ34hyvgXlEQTrAaV9xx4YKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGm3KEWtqHJ%2FNKhxQq3ANTG1L7b2NSqNSQrzF%2BcnTHZ5EW0GLrl1eq15IsY0ieiw5YehvLdQg4JLeBRkOu2228MpGIhnnWL%2Fa9%2BsbuSB4H%2BhJZ5Q7TNyLIufV4SiF%2BOCmIg5V4nuV73CvPhBZZlZD0eQzCpSnmjNj7kvgF3YmoiqNxIkwX%2FNWjHWNhMyFYIxZ0gx%2BxZHjQAUNIZZz7%2FdRYCNwEY6NBrB9JRm%2BfMb79jBn0Kc2%2FPLuyD5Zn0%2B7bBMD0F1Rx1asY3DTvkeHszkwcs%2FStgpgqmzAGwXyfqIbh3bcXT2RPP6j%2BfnfkIYh3FTbdQmaQWkKXBWkB6znd62MlMm03Ia0Mx1jLsHGGHYYIkw5YPPBU%2FEsrx2wu5ood96Otbdu2tNhmB8gTPE%2BKlbbjHV%2Bly4OmErslOWLuPrGMzOx1QIcW0clVgi2kcYrwrk7paxyrUR64NptTp62SgJ0KdE4vUWPZtiSIOX8YqbOo%2BmqGOC7%2BpwgEykRXvFUgriJXVN9I62UYeCHa2EM3fkCwN91SS0Wqfn0JNgveXhCNnP2NZiz0FDWnAsJ4xzE1%2FXDvKZ0BWvT%2Brzu77W%2FthgHTM5UVt4cybnkkpyk3fwc87D%2F689N2iRjBUWR2HA84XWX6LVan0SjtPwzv%2FDCi1ZzABjqkAcoGC7smznJc7cvtiBGBRHo7a4o6qwyDGY9modxLmGwVYFbwt0VdGUJ90Qmr3d7c8gnTP3TUNGniQis4%2F77D765ye8au6uo5eI%2FWpGiOVM9nQrXlzIB7vEfCmdBBDkGMe3VDPl9U6HHRlD5U1s3B%2BPr8m%2F6ZzvpQy%2BWfG2m7Vurt3WST2Y9CqhjRyIRykken%2Fhb3%2FW47kS4RGFN7jchjMEm9w5S%2F&X-Amz-Signature=8c9f277fbfe5ffb16fdaf71fd916c3886ca90da068059b337a1d99fef5aa6f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
