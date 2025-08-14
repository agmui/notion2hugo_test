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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAW5ED6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDII6ZWIuQI%2FuAhKIpMuDcE2kWzh9Euy3dZ6ZX1NqBFQQIgNsTNsP8E0Q8%2BU4yE4fj8c27IQSMmxGQ37hAD%2Bl%2BhlcYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC8qqQxCT87mHAHmryrcA%2FoM%2BjQXD4CdRqn5TRXXqWT1s8P0Cx8LLF0u3frSnFpbLGkLwJT8Io6eRGukT31t1k73MNMVhRdr%2BgcSEh%2FKk7ngEkAXtBwYjkl8oIhadD3X43cH5PDUd0M4T5y7dUD%2F7bt6C%2BFpr6k08RKyF1YYASjOVhVzqlsvmbwVAU1IrpWk%2BX3bHtFjv9IvnBZv5qhlfv6YOTax%2FIZHhSXw3%2BvZp%2BerBp9a%2B0leqI5g3f9GYoG26jbdc6Wb7rnfsabwCQqwkLOzFqtqFoe9KH0DhgJioTUEhwQwKeSkGRtcXuW4unpqQHQHfxFb68%2BwU5DittyhrncL4li2jxetPEGgJ1P%2FrV2rA18wfCtyQciOOUO2mmTBMnM5Xd%2FQ7twwx8HvXfK2EywIjrSyBJeQjL3YaLs9yYIsMetoPSaT4LlTSWutA4z8K5h1NonDbKxrEk6lw5p4MiVOg2jt1XtbEEEON8gLGgIDSFa2WCH8EdVqy%2F3KoLfSQbXlqEdrAMWPtYrQAI%2B1QEU2PkOe9mTkPNvNW%2F2QMBcP%2FXguy6YPUW4bFmU3%2B23jYFb%2FXY9tWF6ujB92w9cFYsyjt7BIpvbW2n9VKgdfdxwrgkhmbmPCt2EYy%2Fxop0pzuZtzzBh5RUaVzhiJMLzg9sQGOqUBjWKuMa7i9kqWWmiWdqaM%2F0CXJv9zDsJRLv0Ea42Ip4TDMUyP4m0csueCrcI4Qn78%2BTSXwaofvpJbWGnV4Pex7voNSjRPMsaDlQj7aee64oaJw8Ahruhrxu6qpPTd4YaDNI%2FBDqKbuXdOLijzUhn6iGAhjASw4fQPfGtIqNFuBfBILe54jiXwwEDwWjrUbnf4n9y7OjDy2M8ZG%2FHpRrXFoZNBLG2V&X-Amz-Signature=2d031accff5a0daddd547077fdfad981439cd831032bcfac9fbbe8a45a19fe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
