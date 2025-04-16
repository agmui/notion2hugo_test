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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH75QCIQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ678PFazNNxlDjyhYKoW7j2KD%2Bb9sBb5TMT53VgKISwIhANmPjtXUbPHRWgAIL073HqRUYXWKwsbiHwbQanpwW9tpKv8DCEEQABoMNjM3NDIzMTgzODA1Igyk57Uc%2Bs382byvmlYq3AMvSeExvI1rS3jtLWS8mG%2FgmjU8irRSCOt%2FHNgHvNtgFdK9bjhFHsivf6dl3D88CrmP5ipWUcNZ8yLv2kmXi9K4irDLIdzCX2ZuoJaLNUxZxiIoaY2RdPLf4QGbge1Rli1yWTBbIXuKIOUOu1Wu2r8syNy6fUJGgmLGERRVFaBe8Um4l90rDGeNeKSBC2z22O1htzggvMiFfy7ViijPv93gcLj%2FS4CeULyug0zpxKSG9L7eo%2BASE00bFhx48kFOIHoVMTGwZ6Rknj1tM22%2BBcLRKtllYFN8C6YgCCN6NuAFIUK83o9ry%2ByTG5UNfXbq4QN0vVBVJXIFFuNnLYGkYljvihGgcW9cN%2Fer%2FJG28J602Qe1qzptU4Zt%2FuQtMUK9SFQSgRa324mVidHzK%2BGgtjsDwAfCqRdgODXBvlYbQObYU%2FydevqQ4R6MvGvpT%2B%2F%2BN%2Fd9%2BnSAjxeFCc9dXpgVA9pb7LdwuQTYjrj1rQQVIOdK3lid%2FSmqC3%2FQoE8bSIRQYmewFNnnpvrCeUdwvyvzhEiCcBcJcuXAZb9K%2FUS%2F8qn6ju4YDnloks%2FIg4r1fACbN1oLsYNFdNFYAQEZyJIguOnARY7v2miUt%2Fx%2FVzxcf3XTEVtpgBO1uXIZyohR4jClwP2%2FBjqkAaV19elQqQDf6iB2BnsTqGAyiOwAX8NZMeBG8xFN5d8iWyIHMlFoEc9EOvyMZxRNR2iEbkeDS9%2Bcg0jzLrjlClEUaEOnyVZLRddcQde%2FvSJEjzjpK7PCMarMOJE8eHfgOfrGmTUcoIzQHFEl5PQNFSe8IoEZ1ginMuB62PAsWOl%2BOLOP7pBvgCubcWfyqArKY51XXZWUkz1TZm6o5T%2BBiPu7R9wZ&X-Amz-Signature=4151315646e54f1351c6ff3e01b6344a5c2a4c0668f18700e99994e106a6b397&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
