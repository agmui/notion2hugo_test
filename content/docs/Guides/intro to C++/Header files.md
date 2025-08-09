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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UK3YOPS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCuzJuOBLVnGglRVi0uRRhmsvOwPgzYXbvVRGtWGTaQ5wIhANZ4nR5flGdtt8kqRI6W7QQMCmcKbxO7315itMK9%2FvD8KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0z%2Fmt8MXVMhXELngq3AOOjhpX8X0XqJru2yurU1op26SgHcpa93a9hWynb638dukBbBFeb20BmYrakVsCSSBJeRXgI92Xzyh%2FRKKSHSIlRtH%2FSZfUdyO2cvch31xX6m3gZYNwHx0e5TF5MQbgFBWc67LXpq66isBty9O30aEvnhf70wLv39me3C0AYXAZ%2FNVlSMFlELVKk1AgFZTaZ8u5kdmJWWDm3S4V5BrkVFLMiD4jtfOnr8XoxH4ciNd6EFYfYXI88wlng12i3hcFjtGncR25FsPvxVyGUbIscwBagixk6pslKW4Oy228LtzZCXUvsXVecybr%2BX4VlXkwFh%2FB3LjocXUw%2F5LK1jCEvpr9sxkvVGGqf1Q9f2WwqS9lP8gaumizl%2FBJRhMMXenCs0qm9wzf3658FAzI1m%2BZss%2F6Y%2BGW%2B%2BCGLAmDkhQEvS3XS9r1%2BvBqa7NVc5xjUX6veAAX5DkKbbd1Zwvgjju1qTLHiG8iIxnn0Jy39Fjt%2Bw9chWszHFxJQRmTXK94bEdQG8n6Y0Do2mKPKJeQNKWL0chXxIkk%2BY82QX88aGvNTLo6T70zbYg7fjMHQGDu%2BYaChZ3LR2foEJRjmdDe3P12gIFf34CPt%2F0k9J4IsEXeqRVlrTFhjGNiWKtP0dX10DC3q9rEBjqkAWi2aJO1zhamZocE4xG%2Bv%2FK1x2NQQQU5F%2Flo6NtqOJ0bIHi6hCkv5Xvx9GdZOSUq%2FcuTuThWjcObnRg4HNsJTEImMSS8EnvRdqkNkY9AvDQYovAQ3sW7HvAqb5%2B%2BbaqwjclN4eJqyBkMIk%2BSaWlzsO9oLMWabjvjrP7MSdbn%2Br9kknUch073m56vrOqqRUXl3gk6VfAmD0cO27KHj7aT4pTCIG2m&X-Amz-Signature=a1958e495e71c6ccc0742661b2a0d231ad06cc08936a02601442e3bc3b5a916d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
