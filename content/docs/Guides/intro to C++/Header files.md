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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PABMXX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBFmT0beBN%2FhaxH7OAloqkyViumIUz6MSLKDiex%2BlJHtAiALzvrGB9Rx0T2NCgkkcMdGXUZ2ZP1psYuOj6GbRbma6Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMJBexzokDvtjLWOV5KtwDYAQl%2BZ2z5aqFrcQw44ekJ9OmXnAFcALVRmfDBayehhRX11bzmHRsYCTPi6caTghiQwjPUdlRr6y3Nm5j4j6FePif%2B5%2Bu2RFyKb0OCJ0uv6zAQkWlNDsEVlB8uUbBf71Q5VjleaJm1xYM0b85qKAIGmjcFmwt9PqLRqvfAGsBFE9a41D5PijhgatQeDCZRoNe8vS%2BOnY%2BD1l9I%2B8T0OX4qi5SREo8uJiKtRhQm3KuaF0Zvh26xYo%2FYuJxbXYRe0LR03Tc7drvq8oD9VO%2F2ewayDG%2BSiaCWQfHUlREFA%2FDPIbzP6g%2B4D8p9VGULp6N4ycqYirt13wuA7zymOHThS1y2rLU4wayEOcG2x%2BRwCz9O6Z47MLegcVZMRoSrTeyOCLajmqP%2FMTsFUlHp8E50fv0mlasJZywWpYaUGNmHbYgwQdxICORkLLU4MaeilV87rUzQ5TTr9cxP%2Fpfx7bfeHPVKkBE163VfNxm447VrFKs71JjJGAPnSt6w9bPYNyebc1zTsM%2FWOFpfa%2BJsvFHn2okbidlEo37gJIbarJzXXuu0W47L4Uw4wSdcyiaDSqqpoET6eQspWK%2FDJTyTjBL2UDnEr%2Bs9DepmnDTW1J2em13xtiPLHL7ISROzbsE4FYwq5mCxQY6pgH30eOnLOXgjqewv0HLuUCKd0x5Dgia7j3qeJF2Ko0zMsleMzGlNJWVeWFfOEhk9tvd3wtCcVKcawKD6qkctJLysgdNhspORbShE2VnHcYs36mw4WVn4%2ByTGngihPrCteLIZxDR25gXGAoiqO2eE%2FVWPtvFj5INiuLH8h4SoqS4eKKcuJ3DLup%2BC%2FnCT7Vle2EtAWto8TXlMWtSWzN0Q1tD7fOMEd6i&X-Amz-Signature=d56bda626705acd55708b0dfbb69d9ac5feb6aa1de73fb42a02c238d23d4c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
