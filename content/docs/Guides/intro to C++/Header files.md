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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONLLQLV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIA2fBXyatXO7F4XU4jcScpnusH1gLlGvWwQAbbVlqxj6AiEA6oDDE423YaqqVzCDEHWNLXmB2zRS36ke1J607etmp%2FYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLZ%2BZm%2FcWRtM98NoWCrcA7%2BkknXGc14x9CT9%2BS7H7XC33%2BxcOGScjJUyLRDv%2F%2B5GndAo827JJl9OqBCzFYXSwS419ebjonPnd7aoUKASjFrWVlw8rYHquSFoz70vlrgd0X3I6qS8PZ5K%2Fb96W2nR8Hdjo2jHbVjmwmYc0k3o39GZF8ePB7U6QVCKDbfb4tgVdGvjjArKca2ebuoD8CGsB1pS7tBUVW4u7Bs29oOn9Ah0HA0P7YGPFaxbygN%2BkVfTSiibJXb0ZMQ9bCAD8OKnL2zcNVlKPKquFoRowkrCZmS4CJjgGptuRoRJ3j7%2F%2BCytk2psbfyyJeP4ydiO19wS33olzbaXwFvSItZD929VFgkOTGCsllt8Qj7wX3mvBEf54lj3HkCUW1V2pvDWmAraqFbuNfu9duCGYPiZf2RUaSE6KdiodAiBzoESw0%2BmkgRLEA2aNL233%2FbvgyhBt8l%2FyrTv7Cv3FdNKlVcuykN3PxsOLLVyRgpzbZMeVmniuDgN7IV7YxpegkmiTpbGQWaYcbYgjTr%2FqLa%2BNE1b8O3WzZ2K%2BXqBQsXs%2F6H4ZW%2BHAP5KmnsBCdDhhahrWrPxz5GymPgxMBeFo%2Bf0lopN99J0CA6yqzJ9nht6gI8RjO1Az8TpcMKwjond%2FRn5WjDaMNPinr8GOqUBMTQdawraK3Zq4ApzkDP6dMMChwUlAIcw6S7A%2BCtdj8whgZLf%2FLtZ6HyfGPPG3uy%2F%2F6tCdLSJN9xhbomBq23fucD1PFk3jdxW6RUcP6QJxpaqcaZxmrfFtSX0C2HaDRzGiecF6OvmKUvPffpR88Mqd60JTezryKpPdD3ItvyLWmVr%2FXnzVkgJEr7aiqy6qQe8GI5hnj8eSUFvkaZbkZ5liCVAYkvh&X-Amz-Signature=0749314b67d9fa7ac88a56a395c6f1d3fbc9668beca09bc151576564b61d5bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
