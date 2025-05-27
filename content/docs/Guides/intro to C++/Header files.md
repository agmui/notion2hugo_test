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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HAKKHYK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj2aKrCu1UFIFfAwbWRkA2Wb4Rg7AAzR3%2BPeFCxi6F0gIhAI7sPxnlpzBtHvohCH%2BuIFnsErSUTIXn99wm8HcbfXMqKv8DCFoQABoMNjM3NDIzMTgzODA1IgxeQOojzG6%2B4htDe8cq3AMx%2F8Sh9qhz%2Bmeo1mlFd1qxJZ0nTmmfaYF1BloGEIpHQBJW7GgaC6BBWWeRmdWT1JGARcwG9easw3Ci%2B%2FHMPaylP2nEzKf46brTc9fCNiMg7E77fd1x%2BSsy0LdFabuZ1XnznNDe5oqQXl2DcF9r9tSf3AqUvNu0DjZ66tsX6JX2wiiZ%2BXnCvmAG4fA1x9hq3m0TsqjYSoek%2FQsIp1xIbXiJUTZBV5VxE3J3q2KlDXY9glgw7z1hX%2BcrosyZHX3kZzitJT9TAARrsor2Vum%2FWpi%2Bsisgf4vagLPfEL%2FSJpgIaDN8Ts3Daja1F%2FFJjGabJJNhR8YiOiq3bt7O6YzOePEw9dxdRjSU99CVSWCJR6m5R5izsxptY8dfGCHA%2BCQpqLI8lLGxL0NXczQ7S6zIyEytdzBrqlbebz3u7ucn%2FLRZMYjagwj6ebH0gZar0CAxt2Hd1g6edmMm73Ri1NECtROrVG4G91RRDRzw3TR3kfr6i93OBd%2FHf7EAdgoZChG4Au8aLxKZPJBVIAm3RzGxpVBEz17sSWkdNYVVegfg5CRp9Uq%2BFFAwacBZRKTmfxJLjcynToYGAWcI0G3rbcKRySnVDVF7mUTGV3KHRsG0NrGvHM61zUod%2FIZDt718ZjCWgdbBBjqkASJNAy2ZNI97%2F7eB6Ondw8tdOcsX7JBHmqHcAHNLVRDpeuqc5ooY7hro%2FWUo2uDM6z7vfHey%2ByOGB0WYF6JQMQzW1DIRp%2FcC0UzrlAP6w1oTWOhpW%2B6EVMQ2U3qZ9llUKHVDUu%2FLzcNVuDr22BvbAGA%2Bgvsn3fcDhHl4qSpbA5OH67yjBGbOVGG%2FkFeuBOS9OL6D%2FLbrdRHKlv%2FdkN1hrdifGiwM&X-Amz-Signature=f22f3f5cf92b3dad28db5f5a7251138d7ef1dd0d2a1adb25287c1e8821bb78d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
