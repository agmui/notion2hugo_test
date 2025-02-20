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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DCKHGG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpXCgvF3pt3z%2Fq2WMio7kn44FEC0r1YZKzj5UWoGXXDwIgYKJdAl0x4VJUEbSCjzejCwJrX%2FDukl3pcV8OyA8AY9MqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJuietjLW0RcFYFGCrcA2Fhgv56XZODP%2Fn9BFVAEAW7WWYrYENySbivwjDAjXH64UVFJFcXDWoVaxivQIL8LDiebr5S3h1G%2B9YrM7fzRjgDnqn4gBLtx6hli80T1aHGTDzNay0qrzt%2F%2BRUlxCqZE%2BMzs18OaBsZWB8f0ypVwdWGYJu4OkC20blnPAi2gDbua9QmeEicyzJKi6byvWSinhQYa92qfGBY%2Bhfc1JeECONQMxXR0AwbBuzlLl9Ro4JbmY9sAKV6x8V8ITIfIbhRC8P7mLVRfIBGoZqhLyJPAm6IwvFGQJ9bCg%2By2H35Bb0D%2BwAG%2BqXqfdC3O5eL64e8EYAxbunzF7f86IZNTq4XgyNI3C9KAo8sNZeRMLQwqS0JRdCPXBpir3a0ULhatT9FceaWvDtugcUV47DZ4cEALMolT6FxL%2FJTunewVVRVJ6RqWQLbyxY26ADca3JID3rKXX9uSrkvTf%2F%2BNM%2FuxLHLrkIM5NmYzLn5BEunh%2BgZVWclnIhBWta6TmqL2bXyVGYUaMpmstWrjAyzsnUnIPl0E9%2FT8PSXmvOYg71xlyJT3DAPl%2FBVQgAFsAgvLrSWCNxYE0reQLwqcFOExfRO71HskCgJKis%2Bn1tztdX%2BzMwpSipHW0PhohC7Dq9v284eMI3E2r0GOqUBseBBSQ0NpWbLlhHVO8WVN%2FUxP2if93eP10jefb01pIsS7x34xh1bXNjgh9xDdhURSOG%2F29Hp4nDdp5JAQRIXI6Yd3Nvvu122TQ5Si5NWRu4j5A9sxlBmqmy0h3yMQ5MRG17tfD9GAy6xdJ6hXusk8uXOEelC%2FubjxgyILBeC9LBwWB8NJfQdoY8m9XeZYWjT%2F4bm%2BCVfEg9AEv5B0cWdAKyDfhRT&X-Amz-Signature=91115d7d7f592d787647d798c49a22d4d96bb398412027583924252c7e0c1d38&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
