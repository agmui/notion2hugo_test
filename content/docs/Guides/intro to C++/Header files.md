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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIAW4D6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTBE30stBQyK8GOYP7E%2F4i%2BCeMO7pkxTtHkqRGZEb6zAiBrLG3MkuUv%2ByntEXFxYPhMoLLbXzuJ8Wm9opKyO0wuACr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmcxYiHJzTXlu6Y0iKtwDTGA9Y%2FJyOntj%2FprUv6KtqmfCGoFKymAVALmqFDOiOyMgB3c%2BDp%2B1Xpwr16dLbbyiknIKhOs9PpVRiQB74VXYgjCXIgKHk90PUNtiNeI9Pcc1V4vW6QyUwfDgE8v%2BSn79Vfq0d08BRzQbppFTt9J8Jz69Ku2yIvvqbyrW56FsfDNqvH1AtwTEc3v50U6eEL5ZG0PYZK5eo9KQpw7hzQlX0mDaK84Dq%2Fxi6SbhULF035e%2BWCeTfFpbrO2VvzEASkkXB1M0%2BZ5biBACdAvXFhEEi8%2BuupCroxACpONaVcslA8cfWUBJ2YaRJ1QZHciV5OXruEh6IQ8Jz6ANindda83OL%2FPm5wOBLJb2i2t6kSvcaSIQlnbclGHB3dZkzmgi8bDwo1yR79IxRO3ZW%2BegMYIixey5FK7kKO6f8Kgl0sbsuYp%2F2%2FaRwxsIxG6Su0kP2ypejcDi0kIuE6oncd3bNtEq0aUKqnqQ5O9uW9SgwyxiyRoCzTu3En%2FBKl8YFOjhegfeV7m2GTH3x0fpCGs7W%2B4jEkYBj%2BpiO%2BeblYESwG%2FcPNXQxyJpwys91AK0lMXzlGwYl%2B8xwuawmIKX3DYt2WtrqHRVSDNHgh8QNdEedy02M%2BVS9SzBjQItWQdsJNUwq%2FqPwgY6pgHhvkljU%2BS%2ByiflXK%2BTp9p1Bx17xqY5etuNWKgKD%2FQVCcSO3CrQiTyVdH60IktESqiEDOd8U61cX6IRNDl7Jash9mvePhfJDgvDsgF3viaChKaeY1cqawLOLStrfMq77DbpxvBBv6h1Eff2a2414TpTZALRWz3amDWKxLFmEF9vD6SbRr1TldSIx%2BW0FajWZ%2Fm5c6KzufSNlkVIHmZIjqRmq%2BeeySC0&X-Amz-Signature=f37f98ff24f66feb23101fafd78a7349a942f1857880cefe91e622496d22cbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
