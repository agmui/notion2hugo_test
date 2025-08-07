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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XZBRL6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCKdGyCz3itNI0og4zkcmJW3OYsjHuwnU7RNJcCpPGevgIgUrL%2BL%2FUJVqiPX9TRRu3EHQZOxpXYUM3ugLjJfYJOLSUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3VZoyueJVDrTPmdCrcA2UOBPM%2FdfpOZJmAJGLnyDqqXhdoVHBe8QQPYc4tTbRUiVDuyftoyCeFIBJSZw%2BjMvkOlha1VhNq6kIpCVpxNfqZJydpXYxfrq%2B3e4RNdjAKw0mQlbaELYp5S%2FXXi1QPYVtXZrdyaBDmw3QwuDnCBVY0qO3Bmxb8a%2F%2BrE61jseqQ%2F31BltQqBajDm03L0h2zyPm6aSF%2FxnUbwbeVsv4DEZfhPN6mnh5eT9Ea4PeN3%2FdeUBqpYD6es%2FKNxSsz7KsRjfAVepjqQv0eCP2dz81lDAsdASxeAsG9%2FnBwpqPufIWi%2B8n5WQm9kKmgmj39Zol3fMzQzAZQUaAE%2B0H95mSxBgUJy9jK9fKg98Swol3Liqn%2BIN3b8%2FXIgMajVSgZ7%2B%2Fv92EzE8cyZoB%2F5EFntW%2BO%2Bn1hthjqO%2FyVtePKIqKt4r9rK9oa%2BsjXsrGsvUCfJ2T74W9OdXm7xtlTepcOqNWvqKqwjCtOZlBX3e2Jxk1ybpavPswcqsG0b8KmrfeW5mFsCHnkGKyITWh1v0nWfa3rbMVK9RQrsDmFPVaDIUI9%2FI6f8aAvwlZI54nP7KQphRahG09gfYvhujqUO0w%2BW7ULxbfwsdMNvb9Qjm6oSgMwaGu4%2BBJAm9O5tkJbwwrjMMOR0cQGOqUBkiUQdPuwF1HH1X8PV0IGuHMuG8PE0iMYhktV4u0HQ%2BVvcmEiTrldkw%2F8V3fvUpX6evDfgpLJh3Fa4DBc2h4MjdxLHfAWp6fRHNlKW%2FRfwS4IriK8xvpcUE1BZDNDuGsdla5DfpHdnQr9Rq23zFGZtVvIT84%2B7GFQMXFiXLcF1t3QSpw%2FN4gGo2a7jCfGhmqpFNX8KAu%2FEHAEH%2F0ZKdRmpOeI3De0&X-Amz-Signature=2aeb7c0bf7aa726f3c8690b9a56a0971cc5590b3ba6c58720b813f0e6cbb6fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
