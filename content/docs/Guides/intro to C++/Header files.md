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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZQYOWB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpj9%2B9YU7AzrEnsYH0wpxVlPp%2BoYGaxnMgtyafJdfRvgIhANHfVYYAhgDq5hINOM5sYScsaC7erTQ%2BMkOH22iTnwngKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxfito0ngdd6Ig%2FySYq3AOIuj0TPQ0ahzwWBp8zeYLOUmTJOhtNsiiNxYtBKZAsevpYq%2BeCw9k7ikXaqYNrmrErE%2FGm0cirqBKeCQDrw3gjuLcQ41n22rf%2B2pIOtFsxk9joJ8%2FwxMGrVeu8gErwAbbq%2BbNb3zr7Z8GDdR%2BpZL7M%2BLXZsrhH3CZe0nM9QpddtCxntwnAUq7vd9PfEIrJd40%2BvIbDPy2t73ZIPDm3Ugjeh%2FMEKt7w32k6y9DhoaDoJ%2FtoCb0thOdJhvqWYCP14E7Ufsk0Dm%2Bnpsoa3lny74nmZUF7pMfBo5PNo08qpKyobshfhYQ%2FS1nllntE8w4N3OcY8V%2BasdoK6Raimv%2BwLgzumGOoJsBNVKsalVPiNkt4OesRx21f6njYevJVgLLMSdiO%2Ftw6LSoa7V4rzFZLFAMk3qhUHDePQA8dx%2FMJ3WRcD%2FI0vKnbPbUbXg7t50E2Q3HO88lS385sAtsg0wCdrB5M8nnkmkulPM3UcubNhRXEj6lKIfydxN8bFo7X%2F3D4HuuyeADK3cjybmeAsnyrkAlHkYxpjxTESzKYKZBfoQDIXxJYjI3VAfdBaXzLS3u%2ByAvEmdZUvzvSMJQRSnFQckdr2x9D9hi09dOp6EHAZ7mEwPWMC4lbO5Q0ow%2BSITDr%2BObEBjqkAQw1JvFCoc%2FKsLis5VRCg8SzDRZOES1R64vJo5zuJVH3xreB4aYaywZA9FPcxc%2F3JUMAkX7vQNeLvg8%2BnlwM4UfYZCDeFKHFfqnHEgeoe2amEPa5AMHZksyXMRaktYqPfXC9G1Jriki8rUZaOYCuEQNC%2FZ5vr%2FqJA6V5SIXbgC7hHJ0p7h3Q5yM1BPIOwir2ywh4jI0J%2B3%2FQXrTIfvRKmGJOde3p&X-Amz-Signature=60431bd8417eaeea2446342c6170bca37f5aadafa710c059e9dda30ffccc5c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
