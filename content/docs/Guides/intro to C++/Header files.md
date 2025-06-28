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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MDRL3A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLxzkBL%2FOtk7xTQ2luCESF6BNt2ysMzi45bMo1NCngxAIhAK54zzrVWN4YYZjiojq4HImTjFKxmDMyC0uT0xum0MLyKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyk8XNhQGsPFa0R4uoq3AMOBGI9RRHg0fElQ%2FzwRCgBXhXrsqH8ctfp%2FA87k%2B9s%2Fg3RE2By47SIX1TaOHluZ2nJsonGwgEe4WPL1u8WABvvqD0HUJGMdiNVbbO9bDirKOnZmL5f5MEkbqAlHRz9lhmkkn9VVxtCw8w4RZ3f%2FpIiHGFFb6SxsRk9ehdOE4hxTm4YYIXnsTOCHFA6Uq5hByjUgEatI6zva5l2aMb8XoGMQo9NimFphxj274aU50cldwR%2Brm6zSzWkdo8Z9tWVjrdz3%2FV6bUdFP9%2ByQ2BwD0rdaPpRIuOOaxirRHlwPkY8Mj5qdPjiECaD9NIDX2T%2BCm4TK%2BS0EhulEQerAyowpzZXXH6Lg7cubze3QlEQYyrY4rhdIHdKc4qm2toi4D9jC7bciGtsfar0s72qKysumWTjAXicpnGt7Q0YM%2BRY5maFJKmWJe1A6J3owQFxb%2FixAMvEk69oynRN%2FEasoRFKdl0xiEiLS2EAngB9fwayN0HOh0pyNMw4ePKVmjHH3hSNQ2Jj50CFU3VK9iFRdjSfD%2FoxxEfB7mO3YMWKwaanJPLVP4enZMdOVk%2FWdKw4wOF4eoKfgMZ98aYmLihsYTUXToCd%2F37bY2fgNS5ZlvotzRM5B8Kh4kveejIoQRMLbjDg9IDDBjqkAWeTJW8MdwmZqkBJoacugHyBoAZeMBeNvYweYBrhoEqytOyaMOZLKaKvG0LrzTXHJfB7pJ8V1B3CRl9hf3XCeGwtY38hKe0HsPN9rxeGXIYqnCTeZOJtA7ToTJ9hB0VOttC6NZ2Bs0%2B3pdpOvmzoZRc84OMF%2F3%2F9NofURuyvxMzNnJNaaOuoFkyoo1eHmio3ryXW9okpcT8sKLNVaqPRsB9HVHyy&X-Amz-Signature=cee8525da7923a9a473ac29a79737efb4ede9b8ee184b3f5f43f63d668df49be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
