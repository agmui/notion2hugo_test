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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6R5BY4T%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCw1c4ab00%2Bfr1Psj2ozuFrRRKgaIChyBWlwHdzvIljwwIgOK6TaTrrZIRgJQybl5C3v5mrS4Ga9eiTwMtLvZcbYagq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHjpT2LRI79G5N7ZkyrcA94%2Bchxk5DxS%2B71i43D%2BLYBjPUPgCKRbAtBpZ4zXrYuzXBhkDrXibGTdsZbRLRbjgrYSRfUmyJRfW6ZqbH7MMH1lcuW6PqgHxTeDXTI64krPWv7W570bM4vdb1cHQx6rCNiBc4%2B%2B%2BqPtVJPA9YjfS6OOs9Bq2NXKEveIF3RGeVWBuZ6HEX14%2F4OhIEd%2F%2FzTaEYtnPTXpAHATTqaMnKkXd%2Bq1dzFFDsTCYU2ZGq1qIHDFrUdGRJY9Y64YgBXvUVkx99SqDepPFNsQx7EMnt39PetyqIa3H4%2B9fikqnfYe1%2BpEAB4npyg0Jz4iEyq8UdQZ2dskcUiSnqSQVmmvgLf20vav5vfqq51ymEFVNwPfMjwswsBowwowPF2YIwI9aHbcSiku2%2BFNnQVtsriPABEACzXDDjrOXM9RCPdr9OjvayZeJ9eXr3fkSFxJBUpKGeh4Mwiw%2BC6ERWIu7DF%2FaJFiG4Mu%2FQMYrRc%2BFagadORLUGpOjYMH4VbhR%2B6mLjGB%2FDx%2FEbtN8ECWuQ4b7CHpLjCvpP5jA95TblrgrR0yxouJIzlBdhOSddEPSk9GUBvjwg3%2B0BS%2FutyzwDpKWxFd8uUJ%2B7SEi%2FBsW%2BvNr8fNKd%2BVEtLTHMWOa6Mov0ypDzJWMMihlMEGOqUBx2DWnCOSysVAnEzMTXy5coXaAMTJbfw1Y19zbOoSUyrwxmyWken3QmTbgbteDkpujWhVCiD6yGaSt5vj2Kgt23Sga7HcAkHrtxGhseGl%2FpU19HeOs1TyGmZK9yWdCmFVIq5S0ElCpoIlwTuCAQo9SosFgGQiFawbb4d5nRwAkd4kke8IlWdHjlazZRULyjLUUAY5KJFGLRpv8TmThoVLb%2BQDKq0z&X-Amz-Signature=34e17963c99089562fc2cb4906a81ff08f2b78c82bbfd8dc22a1ad37dc69f22b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
