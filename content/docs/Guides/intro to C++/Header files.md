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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7GP4QN4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK9L1DoIqskaV895AHoQohNv56UDMlRBaS%2FK0eGPGUhAiBMdAZbJJ7mUEejoPOEaH9NAZsyvBQJWJn3AmM7jDlwmir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZh5LH7DpLf7FogWZKtwD%2BYscOSrY0HuM1OMxBKzA00bLIGv3vEWJ8kqylR%2BgchfcVTaE5kabf1G2APlVIXU6u4g0Lmw%2BsXB86acZB6w8aITYN5TtEXeNTftgaH4qW2263oZik7iyRiGRRZUjA7pqzK3S%2F0Lzd5Z6SMk%2FwGzOatGVsX6%2BSUhrMqXwq824PHeg76zgRP0rgpAqtrRy4e%2FfbxwXVGbwnbcJesT0HgVoHvUM%2B8nN8CImNDmeUq00MQAHR7FDonEip2LpqBBXpDIc9jfUyZGJew79%2FwLs08pCGHLcqLKmq6wl8kcPlw6Pt8WvS3Ht1%2BHZtemGf%2BhxOQ4FtBTIr%2BCZtbKh9nHYXX6fUeDSHmkM3TpUWFykZPbbionrLWXpITEgL7HEYGgk3IoGr7HVrtcW774m86Sxd8llptL9W0lIB1qERn8ZUri7cB2C%2B12KSOslR%2FjemnC1fvBiakA69mrhMqD3vmnQl49jvgqnSk1voGc5%2By8ClWgCarPmqeCOKnoOnPYhPEWLkoBCqVt01eqEqtqE%2BjwlViv%2F6KmPlJhliMNDmDCZeL9yzTHZlD4LE2hN7MCpe8OrOu0Y4g7lN7KzMqX5u7UjWlmvm0b4jQiODgQop6iP5Jak6gVRrATMLxYQLY5W%2BQ8wsfqBwAY6pgFtP6hZ5RqYvp1VESqapG00q5K9kemxfw4fCX3Hu%2FWy7sDoKyus8HVP4Qd6dV8HVn%2FoD68n2w4p8JtT%2Bw%2FCsp5Vzt1JouKZpstZxg%2Bp%2B%2BxxxD8WOoBWhEYZcc86lbqF%2Fp5cG%2BhQybdXD3CTGERKIpZAxh2i%2BkCQp8%2FR1wV8rbAtmXaFqeOm6NM0rI3Lw%2BxsRIbOWdjLPDIfN7g21QB0TiNuD8XBkQmS&X-Amz-Signature=a822e01119d7c753feaef76b62f59533cc6b4516e034a55312cedd0a3c2fbda7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
