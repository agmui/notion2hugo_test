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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5E4HYD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Td5w3aaICDXijUnWEEP29iO4pnNVvYckXDDFLGtcaQIgBg85%2Bys4ALxVKF%2BRq82d9UUq1ubl0gMVSShgdOOVPmsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBUPnAkdOqUMj07RqSrcA4GDeQRWex0zEZjHHnztXPpmSxzcqmwaafp%2BW2cpGseUYxTJ7JPjCbCh3SxKnvHExSjF8KuVk64CTXfKzNBgZjojnY48QuSEA0IW9UhmnC%2BSEGHM78QoNjkCHJdh8Y6hvJHBjYiM%2FM3xOv%2Bv8C1lV20cETevnwtbueYVx%2FYx3ecLMBo2C%2Bi57B%2BodkVQm%2F19AKkqNrTw4rKEtD9oteuDeTLddsIR6jVdbJZe5QNF3kN%2FNNA%2B40i%2B2InqJR%2BDTEV4mJT3ns%2FCtwuUA2yp4KIyYxy8lah93%2BUiwnN6QgjfHgNQrtCMfuknuQvNxXRabjR6UaApwJteMKWkoGtwWa9zoQzz5akaowQIrjxKgzeiu67YLa8hYPBVRXsVNjHsmFArbJBcAIkghC3LxcO83rN3R3YN%2F5og5uWi9V1hWbQ61wY56GQ3Sy%2BvmO1hZXduLA2mcOryug2USeFYV%2BHZRYpzLUNLTYo0NVryWSfJN2Sv%2Buj03lzEqDW5kRibrSso8nri2%2F7WzWJAHMkVz9A0IJJ28NOyWph%2B%2B8Y5YiS3r6Fdk0yWiK53jU9riStuJEGsS9iYbHbYJGn0sIX9S%2BzEDrOxPJRz630Zj42GW8ELqDtg6dVTNN8%2BjJROfJTxL%2ByOMOPxqMEGOqUBZJF8O5O899JxakPF8iAxe4T2269oB3cHUkJLfWbu9cYVpaDj7fU2HbVDQWvq0nPAvLOxOKw8qgLZ%2BA4Ll0gr9YS%2FrrqfYsB5MSuuHnRhrhFKxLsJxcdxS0rRrdPrMMlDed6u27F2Y7FMs0gi1V7xtRzg1YWmM5DPKW7V14dgjQ2NCzhC1PhZ5IlM%2Bbt2vpSBY4GzSTqPEjD%2FEE4fFrL5woUn3X%2Fb&X-Amz-Signature=534a29f34a265ab2e4fbbfdb866cc5df4ea61f034759a95a6120004c2a80c5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
