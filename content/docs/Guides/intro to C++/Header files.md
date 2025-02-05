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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWP5EUM7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAuIwoXxTbLS1cV0EQuQKK5PSnt9xGpwGjrpRgSNHBi1AiEAvbxi4e7gLe7fyrifaaWPvP7weByE4y14QKFjqSEVMo0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDI52yYdzV%2BLOMxVAlCrcAwgaTbHyXPkaaV63GDXR1Bpy%2F2XfhbXwxjq86LA2vqdQg0Oyq%2F5MZAjMSCmDnmupAUdDsqkO3jxZrHIk47WXJAv6JqqDflc3de1%2Fd4vbNvf4YuBNol8xEaYzql28Aa7Rax%2FPPvK7Jmuksieff4j73qhDqBYUVFxirH8nKin%2BJxKlph9%2BaRAQsK8qJTM%2F%2F8NwtcximicNr8EXGDXukjEmgx5OrW4h2uUCBOFpXuFJnjsSsvXNSZimzvB5N9cAmJQh%2FX9LBkFnlMtqE%2FUoR%2F1WDjqOwmK5fx8LIXXAQ5wvkmjmYJeGKTK5MF54W0gzDrc5Q9RxjYg3q4xd6rSI3wOvXcuO85zTVUHFOTlyKL91m4zozCYRb4XJ8avjeCitA%2FGKi05qwFGkP7XTifNgeEayr8pRcIy2aYYzEY%2Bo%2F%2Fn5bGEitsUa6ymvosggWvQYqEox%2BnV3K9f2fIsPUQnlCz7ojZDMs4NToNk54etX0LglTyG9LJ2%2BtlP3iqioSIRS4y1dXpgZREgF5a4zoiFPzk0fFGTQ8HQvUwdFI%2FVLH4ewZ7F7lteRXfVuhVrmVVGwnSIQec4%2BeKik%2B7m75YY%2B9M7rKdwEtrHtTfCf9Q3UStqjfLxnU4Le0FM6bJ5jzqkWMPrQjL0GOqUBOJaav%2FdtHpmT6t%2FNnAlPcwiXSLM%2BAMPm1B0LOmufIkVNSTP5kTYEkhf5uKoD7%2BGWtB5wFoarNesL27rVERQIqedOiKZ5ez7u%2B8g8tnUdNpbW2CfRhqKWJA38f7vqKiGBdhTG4ch3%2Fkb6Lj67unNJICsslxfH7tHruvy5RaGfFdzk9u39gRdMV7RVaOVT%2BCoqoMBHmhSYo8maKAg%2FgoMcvazFE1tn&X-Amz-Signature=074704027c18ec7f8c059d51d0e1eaae5ed8a4267a139b0940187e2184da328f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
