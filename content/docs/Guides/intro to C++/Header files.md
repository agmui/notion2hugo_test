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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3DHR6U%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7dDaVgFF6pvS7rjDqoyAIL5YH7j3RdkObG1tEmruceQIhAOFzeH08X9gu4ttGTW4o5rF2o%2FrNXacXTXzGd5mhfK27KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqmljvF3mtdylXF6oq3AMEIzB0M5c18J7%2F9y31EqA1wh6uqKCh5%2FS8cKDUHDXGFZUiLJvJ3kikNcjzliBbegoeZR1WiADPH4j%2FV1nk2DVpGPIVw6HhRfHPOg6YjN0hTpOJ3p83uiJGrMeV0tTFZQktnshI7WAuh45UAlPpiaMcToYXPqoOPnccYZGudkx1lV6BXOsPiaJwmYO93j9g%2FdhLbiN%2BdDyoqcp2LKCRPVdtrhGtQf5%2BqjNAdOzMLPIT4iHMd%2FR23GdOopO%2BzFGlQ63x0ti7K%2FxLhFuoNbWwjczZs1%2BDcPTxYGvo8yco8V2SGHV1aatEsvGTNohNBC7cthiONdsXAV4MGNJ7TI53D1thEWfXww6NwT%2F4Rfyw1gMKTMzzER5qYubVGddb%2FzMlSkNz9x0N%2Fj6HgH7iW1iXAs7LkuNr9dRah782RAuyUtBSwypH9G0sVzhel8vsbwlyTobqCuqaxjkecmybSafe3I2aQjz3%2BdzbDkGBa8PWsQGUpWdkI3xlhxmBbdNcMFOM6WYYvOkb2garow1nAsisLDypWhhE%2FH4iBbZv%2FhPgNBBi2WSswjkUyk9%2BPnfOGQG6rWBIpALk9sLQc4ahKvXUMtKfRfI1ktwfHXUNx%2BIwAZe1FJ6tv95%2BOsadWFEAWjCy1PjDBjqkAfL0r8NoEJ69JMJA%2FJJJyH8pMJZddtCY%2FQm67R1IR9TQNtZcV5JYEFkzi6TciVG6LAh5mEvhaCZ5SuWSNYTa9zCDWVwtKcTykC1d5fAo2nWJHH8nS1n70pxj9Dc%2F6Hukpm8H%2FDh%2FYqAuyk3%2F%2FDY8IA9j5Jaf7RaZRnHL7RfJY5o3GEF7XexLBOvgNXErzVevEOFMm4r22%2BI2JP1k7pXOw2GdPJRD&X-Amz-Signature=f916b2167231d6584dc080cb6a324f93ad65969293a55907321c22cf45035f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
