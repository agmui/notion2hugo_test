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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQMWM6A%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCICoUroW9CYHmG9E%2FTayIJU%2BvbkwvvTgp4ZWEcCMrgMxqAiB5VHmv0e1GRb1HAwaOMECpW5VR%2B4HergXO4mgrUaWU1iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrd8%2BEtugGLzOrQdKtwDv4SdpstkhwVdk8SMSwbOjKbZFxsVR%2BAQ55TS%2BXYIzKL5MPSZ2lhhsrzzGfllABlK%2FVQlPM410YFjySyGUITlfjhBYsyut18E%2FLSsRN%2BOADY2lY%2BaPXVULu2%2F04ZhSAHa43Tz7tBkUJ%2B7WikXgHuaMd9tVYfmON5JbhTl%2FCg7rUlKysDpKzlsWCwtEMC65GQdZnOdN7jpm6uxgfjTjttmba4EH2aBIGOkqXEFpBjw8InsliAe2Sh5loR%2Fyhfnz3rfgNIr%2BIlvSk1kjdb79ef%2BLwCN41uiYNcUqvMxxBJUOlFN%2FIl%2B6xIH7mByaw5G7EsPLb%2FB3W9amjpRZ7G5Z0nGhj%2B5CFiZNrhmKEcIJPkCsyjj86aCOt6j43oGB24k%2F63%2BGpodA0RmNTGHt2E2utPZqbf3ziGtP%2BsFHDCX2cZ6p%2BvI4W4lN%2FZ02zO4cie%2FtUowTBXXp1bXXEGa5pExcYf8vhrzJt0g%2FmJ4E%2Bxnxrjjckpx7B%2Bk11kkJbOEJzlo8%2B%2BZjHlvDVeY5Ur6OHKYthaUJkMaNueh077FJiHxtgWTYywQNcX1c5FGgJUR2m5Tk%2FzAG8irN1pQihIHZ5mkef7msgnUHoZb37nrPreTC5bE9B5YfiP%2BdoX6ZN5FyP4wmaHLwAY6pgGdf4T4%2FGGu4RbE0a0qpffNeize2WzZ4luP2a9LIgym6%2F7FK9%2FyH5i2nKxS%2BP7JsGCyGUYSFKDT03ZAzhw4uHJEK56X0FSC4khTTlN0atrTfQlRcBCLMVUD3wdxBb%2FaX3niJdzjaqa2IWxJhJxbbqcq9vSOuY46zHiMzySzuSixRMxoZ0FDB%2FvDob9Bq2EwEdCjOPeDJ9%2FB9CZWaaeCVMxlc6K3mFhv&X-Amz-Signature=402d1ac0270e898efb53eaa56f0f6aef9014b52bea433d690655b97209721667&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
