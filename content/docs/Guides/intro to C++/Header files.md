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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z2W2T5F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiycXdBG5MhnSaceDPvwliNcjNTWn6fc2WxzGGFjfXjAiEAlXUzIK6YyVyVkUO4zYJOS%2BiUqwxjClQ9T7qSkDTRV5Aq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDP6vDFliOWv7wRqQZyrcA8cFmWoV0FQ108RqZoaAQHX8c%2B43C7bsfu%2B2ziSwp7Jw1KSUTsIdpB%2BFOTkLwcdE1Qetr%2BYKibAg2ecP0d92%2Bw1tnrjEpXNSpRgkiHj%2FbiD1u7jnL6CVD6nyLIXoUbCl6nIXQN8SlhhfrPA9G5J4IsJlXMtk7qWkJlLf42ddJPse0jLMGpNOyiEC9mYSDLcNS2Epq1keFIRyaQ0ElwdvZsF%2BJ1PJ%2FZi%2FnKdjOVjgqi5khEwckMb%2BR5enrX99%2BBJPZm2wYrC2X5C1j%2BtbfIJBitBti53RYWgrDMw8nfPUIdIYxIquQevvzRADWQC8%2F10kXSCXh7E800%2BuXn8PUGK2TVB3w8K0FaSAhm4V85wtRCtWzFcR2S54p6rr6J32thS9kpPLVP72nXLE8jj%2BKuuKk0NuCct9oDUHg7qRXnq8YyLIij5AMxRyFPM8WUpVIy8A1Ct%2FA3xHy3tf9TM14Bu5t%2FzmUxhJxOgZljp2mhyWzMuDeC%2FjbBYpa4vzgBv4fXQcjXSFQ4qi6D8yN5WzHrO7nms%2BN5N54W%2Bn0Wwmi1SBCElPlDEt2vawq8vYhTpsemGMiwUdhUdPgIkH4rQjWIewBy6GVgGVnxmGValV9d4zo5tOn95vo89iUZpg50vWMNmE98QGOqUBifsKyWUFGVhagtlk6Es69%2BllAdlz%2BElAIDRZOFE%2FPciZQJvz%2FYE33bjCIVqIgOSkYNyMS4eul33ZxC4%2FUYtZIwN820lvo0LEg5Y06B72G7t%2BCpH9qG%2B%2FjQGxQiU1o5f%2F6SqxaA1n7WpaaboXHhye7hij%2FqAMKK29AHzQSN6dcYy0y5Xh4wf2F9rJ691%2B15auG26cVDDbgNiYqdBzhQtqAM%2FWZ7%2FW&X-Amz-Signature=b9b7f2c0269481281c7eb18630e42577c1b087b0b405334d76662b50f2c980eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
