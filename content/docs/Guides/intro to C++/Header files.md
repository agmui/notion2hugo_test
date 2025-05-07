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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YCH5ZTT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7oTlt7kzcPC7wIZ3FcOfCm8H%2FQR%2F3Aj47WC3S%2FslnNAiEA9vxjR7SnTTi2dSHzuEdHGWJZUAnolZrm6gXZY3vVUT4q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNi1xG%2FZR%2BviTUY3GircA4BnkB2GUxUluKQ5lBBUlHN3t2TFCCn9%2FjKOofUqOgnVarbjf21QxZJ2z9EgJ5El3F9OJAjOx4V53%2Fdyu9kjRdpUZJ5M3NSeybTpFL%2Bh6WsP5M%2BtDl4z%2FOzE1vojovMCerquIJ4fjpQkQDvOALNGQfDOSGW3h6%2Fws2ZYxHctVThDuJTAlRA6M8eK8pCsEh2gDcd%2FN2cRpU9NdkRR9mVvJY97dvghT9%2F8Sc0m%2BkknonIcd5j%2B9OGAaOtInrNgPcH9gHWlfVVXPUcgtZvXMxheQzw4R3ub82rouaPpICxwmm2LSU4BxF0ayEI4kUErnHARBpOKT2tdbvhOuH%2BTPMjcmoF39eaGxkUQpPebxjWEbE2%2BTU7R84XALfGLIfyQyXMtBdixWR6Gds3UIrudRXo3faaVfKBicMZNzvMjAFj36J0vpPWZ%2Fzd8V3PgTP%2F9xup6oGGLYfNEJ0%2FhuJlLUG7tVR%2FiVxj35W1Qx9oNVzkRgHYFNFtfEBjOUk5dluRLbxqgbyzjNSLtjFsnFC19U0d%2F8Drf%2FX9wrAcyyuyWt1yTxRcogyzks5HmVeCz86zPesmS3zGvy%2BKBmBf8LpJ1b7TmCxcdHGWGHY%2BaXmxVeoQ%2BulMSPbVd%2Fu4dhieBxSjYMOqR68AGOqUByn8v%2FJjgmbtHixCmPLAALlBzZ0gVrE%2Bx6FVgnD0Up4eUCvzlFsfwfU0mGXnaKncaGZAsfxhL51DRQecPX06yeepHNKJ9MkpYsmRay%2BkjRAFTpezq0S%2BUz8U1Ens0oS8qNyBNnxa1XXFv2rH7yl%2Fd9YVzJjenYonDntYHaE3hdz4cyvJ3bk4AQAj6qFAbSRuIuiBeHqrumN5Dr%2FoXxz1bKCoFStPq&X-Amz-Signature=ff9699f65e7f69ceb3d6367107ab39990e6d73b44a7e3d77578344906c8038ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
