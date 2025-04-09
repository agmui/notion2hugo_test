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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TPG2MVI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGMKyl1Qz0Q8fmOUtc6yvKGNakNC2garxnQ9jVG9f%2B3yAiEA4U5aTcKOtP86EoZSOWitBkEIzSGJMbSUQ5BIUkC1c54qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFgNljMlOwvpDBNdCrcA14eMSeppqOkEQJ2ue7%2BttUIUe6%2FbPbYoE7KhTZh7G2DLIBEoT7Vbp6pjfP8AIyyKrDYEI5KNzhpQFrjPuX94LzdYqob%2FL7tjLinSijvB5YvCHbMb39S7a7CRhAaktLmpNhWXBCmwzq7XJV2F2MJwbvs9Dysy2O4CTBsZDOwjnGtL9dPucNdZfFmElV%2B678goTZUSQyNvJ9saJdummuvHnhsX6AN20YeY6WlpKd6uosEHcyPe8zJBRx3Leqa5QAqNpRsuBT5IV7oLOL%2FuRXqpSf1G2uGTlYubTmo1YzcWM4%2F8818UN1dHbwy%2F8GLBtIxrBzVN4w32SA%2FyiJ3rYrpII0Mgg61HvW9gMaNGJeW8lgxm1EfWgLFKnna2D4rscZceM399Ug%2FrFC8%2Bd5KyXDd%2FZTjLUkI3Q2g148C6oSNNFyu1PHohrjXttbEMLtLZakp8ydVGFOoMaY6iPtnnDVWi28X5KyamHM3pRR1k17BaeZ4nspR6dfskfmwhRlcGLhGuQj6f%2FzpKEzRz9rUlkrWaqdiOSqylpa6204u1ySRUlu79DC0X7n8SYPMCHrVK1SYnwSF27lpXv9d1OKQ3mbHNEDMIV%2FLUDIei0%2BV%2F1QHvFdHgo86dvKfW%2BTgek7NMP%2Fx178GOqUBbWsCq6akIcgmvwGowJu3gJUk8OFx74pj2WB%2F1oNklOCrUZyoCDZZJzev%2Faf%2BY24GMmGse5qa879D4E6QRydHG4C5jJbnDYH9AuCgDxDvOIIFvSeiKKqN87JZ42kLjfzFMMQ%2F7ePRPBjQ7wzIWdhC9GZsnK5D7H6O%2BGefxgXVRbb43KwdpyXXkL7VySdmnBOHQw3N9O2vjJZ0C%2FyRm%2Fsir6hf23Y5&X-Amz-Signature=e6096dc9a57acf4bdbf1f361e4082762505ea66eac5a22f6a72c8343d356480d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
