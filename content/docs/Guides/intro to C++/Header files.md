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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4HTZN7%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB8zFQPKI3QnF8qMSYD2gxFLHbeqPrsQZ4A0g6VfpZryAiAX2lT2%2FHW%2FbNR%2Fz%2BqM2N2KrgPYCkk9QTq6drTDZZEfsiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXVZzv6QJlLsCCMDCKtwDDkmfXzuSHzEEmW%2FgPQuy1F6gZjNto12YoHUjKbUET8OifH7MGzYzhKw4CfzhyV0tn4dLh8gg0pCeDe%2FdK6%2F0IFhaTg6xFxKt2iqZxULAQhwD7jCkTdKa381mY%2B%2B5YtniWyXzMgqpHru7YJ6%2Bt8S%2BBGXVSNHPzxkrmUHdn0y10t2KutoLhM9eN9cnDQ0V280DzgjL%2FJwzWJtbcagaldqT9iU9grTqhJupFg1E7AHMrO1qsG8oJmeCTTrADJ278JhgZ0T5mr0%2B1T2TPdJD1rYq9RFV0UFqWTWSMZUq3pGTuIvc4OMrMMtwpYNr%2F1K07ABoJ7Oig4zMK2TCYYb%2Bl9jGLseyhYBx%2FkJFrB%2Bhwyqkj4g4C4tkWoZzYJb7yvxMTqdn3jJPSqF4ha5fnAvhVj0d%2FFixIZGnezJoWa2xv0zYx4AYosLK%2FYbxXaip8KpzPUXm%2FQARrh1LCgqgvxZPGNhZFpriGBky2IdOPCXPdD4yOx9WQXR6xKvj2nhFepJwUSWGpRx0zOOMaekJHMpT%2FI%2FpLv3qL2lb%2F07XqQmhNOjLHvHlF2oiw0paCJW0BGRWdc5Dgz0ZGVTmXKz6495lnOZExrtcWQsXvJT2JjyTGYMgwv1%2B7AEA3f%2Bbeg5BOcIwvt6AwQY6pgE3FJioDqqxqBV0N2ILWTDxV07MOgiUnPWNfovBhXEctOhgqlt1kM%2F7IccUxAu%2FRmxbJyuCV%2FfX79oZY27aKt4Qqewfng9hP%2B99s136S8HgfPagSNnJNioMBUk5%2FcZbEPNDf9cOJTCNb7PEfvGmlzPBJOthNX%2FT3jLdzol%2FewlNLEbRUQLP1S1n%2Bu%2FkaDwPWGLxx3x3IOuyo7940Wze3TEkFHDyPQKW&X-Amz-Signature=0c1d65c14101c50ec3ed97e28e10c9b96ff95bdb2d38cccb365f5cb24f656693&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
