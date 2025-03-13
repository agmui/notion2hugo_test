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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPPX4YR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEigbBXFLKqvZiP2uQIXXYx0rmdkfVac5VqkzcU%2BCxuNAiBAtq3DuUeZAPf2xw1qF7z8oV0%2BRAii%2BpxZGEWMYqKaMyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNF4XjUEugeGfC4%2FVKtwDS%2B5nv3HkByf05Wba3L35qVR3lnD1k%2Fd2UHVmcghBtSu3yoenV8JqxVifwQ6%2FHv4KzdqMU6OnfejxLPOj6Exf6blOaAM%2B4dWpFLnzzuopiQEopOmwqblNd8xj97ZchX3t07As1TEldIWa%2B660RCPScE2moKmhUKCaJnx0DZ0wz1rXcLN40HWYK26EZ%2FiiPcG8mH4fgJvofWfnO%2Ba8YCgBxf8pMZ4n68Tn4ncJAYlBVELprSeu69fMeaUGEPpWUql4s%2BnVeJBk6klpI0zsWESrNZ54O0OYB3w6lZKQvRFYHjr%2FH53m7yFnPv%2B60ktNzSWEHvfDv3nMaaO7nLKErmt0FpFq6jaRB3c8n4FpE4fgTvHOYD0kteCdRUMWOYCm7HDKfla8Yb8g4j7pWostX9UKnhHHQwhbl5XKOfohggI55OsOGaZB8DX6NKmYm1cjj2GcbYLYXdiAYxEjYkaj83IJu28vfZItD50FEM5ExEdglIS3w7tmKpZuxvvQrvMud4%2F7p7%2BrqgmReMS%2FqWZWjQRyCnSMO1ThbbC9W9e83afl9k076Ft%2B29jEuFoFRWefKHy7tLH8Wzc%2BwRKw7XneXC5Q6EJvhIur%2Fk2xdugrr1GHamMleG5pAfoKViIWLJAwwfXMvgY6pgEchuuZSbPzckMZwxkKUbbqKeujL051h9gXadB%2FiP7FwToQeZHyNA53w%2FQ4iK8xWC98flPr3ym%2Fiw%2FjMZlZibK2E8NELOzggHh9VfnHnjDK9u0mQzaFbezn%2FO2d%2BEAEx%2FVPy3%2BmyhFV5RulssBuYcz%2FYediLwAxCqtCDnK1%2BSwynILMf84gixvbO7WBevRjJnWXpIPib5uKo%2Bv7PewBqgVaJ5yqxvxp&X-Amz-Signature=b28e901b043a6cf2a705439e4da84a02d6d1b3395e0a5c874a8cc6c288d09ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
