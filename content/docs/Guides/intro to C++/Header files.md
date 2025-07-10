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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C72VGYJ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8I%2BH0ZwbEkd8IlEFUF9yHHtf6ojwm%2F0MS%2BZhc7bTv3AiAPMcp1I2Ri%2Bw48sOEUVZJch07t6Em8q04rI4OExHVEECqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH8DRtxR1voWwnderKtwDpVA8YVt18Sjh%2F7LWw0DWXBF8r4ZHZQcsNM50hMSHexv6JUxc6eQbBdGN4sylKHRwm5X0eq8nx9Lhg%2BTD9H54UcEKHu1nQwfvw0s4EFOvXWFGi3mKcdT2gzktnxnkq8%2FEgNdEfOKQo47mPlhDSps%2B2ngtEfRSICHBARcj1uPikTk%2Brd1Hj8qsXJbXjsYRV0Q9qXOViaxIaM6oXvRL1xqwYj%2FzpPPxhWaMRsey90YvjjBUn2ZR01tgYu1aP1Eh2Q67piCN%2BS2TnrjKtx9Nfcex8tw4K0nN0OUfBdHvG6sy12NB2O%2BNfYDcbZ4V3s60EKHyrBhzpYEAPYU94CH%2F6v8FEmH%2BMUzv7EzT2kJYRr7GojPCiVEOr00Sgqo6ilQeBJBifAavv7Y%2BKYmXIyTo9RY0Xt19GKLwmZZil4CxJ3fFt7Brw613Vg1jwWrb4JuQCijUIyd7dL9J81IuRZGZDgasxVcTtw9nYXxoZdr0uDScbOq%2FoPalHA5k8HcT9CQtgnfITsi4LIOuF4h%2BuhsSS3%2B%2B0Mr4ifG2%2BpJAHlOuIWxGxoqdAGLK0gRzjW%2BpXCswREKUZnMngESStBY0RPcJ8Jhxp%2F9P9bif3oW1IKQOV%2F9%2Ft%2Fg83RS8hSETOl9ab%2BUwi6u%2BwwY6pgF6snlahKXnyTNMWDaLLuF8ABP4RaJwi8NIniI%2FQPwiovNby3l1NUAMMSoGrirHLHO19aZf2uLlfT8eQXZZ88s9SMU%2BO0zUdUgCwdcuKBG4nx9J7NasJp29JVdFto5haaItByaM6G8JwJxfNOe2wnEOXYJjSzCwr7FzU2FMV9VS6j9NsOFal8ocrF2LA%2BpdyKWJOjwo93SdBOnBP121GVHuIR35HCvq&X-Amz-Signature=801029444df4e3bc0f86575b50c3c8eca277ada963d197c193a2e469ce8c074f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
