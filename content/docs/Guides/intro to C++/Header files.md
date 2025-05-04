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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WJ4VUF7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDUCLz6wJp0tKxRJF%2BpuMQ9FsfPIZpcCns0XBWOPfjizgIhALBR5EPeThuRi3nLeilEvIeNpUXX%2BjalkFf8fvhS2IsMKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn7kXytzRJ87o3yEcq3AOrUE9xIf03epDgclaDeV7UH949UBHtYBQ2psm%2F9I8isPxgoJjxUmoe3ZZR5nYUI3r2xlyLC%2BT8%2BZ%2FrnJ6pu9FW7MAG2F8F5QQR8ztNuxnSuM2Jp9fWg9KWn0XBM7o9bHG5ySj%2FeFEAvD8FHKUFGnmuV4oO2Wi4d5UI4uvGPvbPsUbXQ8i2z6UmLC94qA7hxCbtOH0FQkxfm9588xD4MdJXqpYd3hgv%2BtI87UOVY5mnQEoRVDr%2BLTbZB4hR%2FmlQTJoANtJU%2FWPFKtkjUNbEAZfY4RQc%2Bnz%2FZko%2BH9MAjeMkKLq53WsdtW8tGz4kFLE3cccCzEyf0zjOZyJY35OOUdGd26qJ1rzWSwJyepgDIXq2KBvUEP2BVFQGDRouo7xFF8o3IM22htecR2FQ9hVHLc%2Bk5onE0Zdy6Eb5JBj35C0u7rlbc9AVOlgGFwMQjBnv%2B8l9f0cashdBDql4BTniEF41PZ8GW0a0mahY55u8gs14UgQKD7R4%2F1RDTY7k4r%2F8xII7Rfh1Lkw%2Bx%2BAqdxHVGKfnBvhw5P0JezFECk3d%2Fn41PvRqNIk8M8fLx8zq6b5ZK3wz8kfoHTmAi5Mv1Bv84vVJUps4O38CDFYh2amotNmZdzifUGHXjBqgb4riqDCH69vABjqkAQwYGWlydqHa%2B7crVCtXuJZPjhQc8nr9obCiZiFamku3JkJvQQlpwkE7iVr65PznQORVgr%2BP8G21X1eQu69kYtg9r0FMIDhhZCmRmHniOU6vbfx2fqIwjqV%2BzXYb7Wei8ShWTXbCt0WseRvQv5JXzZR%2FfSzSUfnobuO1Bei52YB6Ne0utknrOoFcCTS71GFhZ6PYIs8SE73rImw0tHuDGq2GB5qJ&X-Amz-Signature=75ea2e3658ee3698ecd1c9ec1e635c7fd9ee098a069178c96f9c461411a0d670&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
