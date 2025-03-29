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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7DPR3DO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDJjN%2FR5nWLAOSVSvFXdyxI1kPfZ5mvPW%2FvvA6PoyzrwQIhAKUym5n1OQkK9pQhc5NqVohkqOtt8v%2B5%2Fwwdn%2B0s4Ba7Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx2i5ZL5QsbkdG3D6Mq3AOmZw9wOm3Cgaz08zLprpz12WjVfJgkV2jZ5Y7D0txirRMaHZLPzB6iJV0vT9pDq5jN3NZ4bfrNYEs6ItYj2%2Fwv62U96vBZpNWv2UjL25Fsc8Y1p3Wj8DnwWt8HQbUwxy7hj9JC6sfL23lt7PCltdZOm1K6GluyTzDQunWq9gZZhzXgJ84DUUdSbD1D7N9jr22EOI6EgQL4iJ2JRqvU7NfVQHHZokls9zmp5XXFdZhfybwtVNUA7WSFDDZwHhXn4VRl9bvJ7dTF%2Bx5zGT5ly%2BvBZ0h9GmxeoqArMQgJf76qYvVwKS7oLJWpQOuFxo66x1wxWFS1HSDLuSVCjynVMstx7RSu41PPuoprdtNS3%2FOX3hz3GB%2BNSlWFVzp5sTU8eBwO0LcxdUvOMSGzYMoeX3ftX1ZioJpld1%2Fk66locO4%2FYPZ3BUlIZ2l8haZUPf0RI18mbiHmpyq5Kugtl5OOK2M045VNFpk2%2BMSz27ssp%2BIwlRz5RHyRIQ5TUnMukO22Bb3jz8fechc5T5HFUkgMKQMwmYTsInB%2FJZz87GBCN9l39kfsI3ZBIVWgrraYHc02cECEDuqtxTuz%2FpFvPeaZCopdb9Wn5cbc%2B5WUghvk6GDRXPXuQBoa5wMJQeS0kTCdtZ%2B%2FBjqkAZvhUVWIsmfzyhw2AhlBuhmemLxQgTlazykoMjNp8vfo9uWg9ne9%2B%2F%2Bahj7YRaiqZF7zoubC%2BwUKnnGViyTVcKjuSPLNNytzTRsNhNWXYkiStFWlUm5HJDBxwPfA0zcjwOobT4v5w8XqqeEIUtZxiNO2e7rcBCDFrK2auqGi%2FP78JkJJt7K4J3DHGpR2QIEe33tEMWM8jVmYFXseAhDaxIRdWdDo&X-Amz-Signature=5e22a2a6dd9bcb292c982a7b93e072ccdb5c1df36ab5a6973364a6f265287024&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
