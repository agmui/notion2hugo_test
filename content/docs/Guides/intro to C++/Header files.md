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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PJKYI5R%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2B0DMW6YHsK2lvzXXxGFc7dQFB2kRb0ultGkjCNy1pmAiAz%2BYt2BpzHKvX07IPVviVNhdbab7wKqxESrT77UtI%2FKyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMsvvaDjgpyEiSAMiVKtwDArzWEBDX82Z9B%2BqpEuag4oXkVjlV4eiUjbSb54Xs6HkhMdsTOE%2BMuVNwtbP71cXQTkwEGaEDniFgqPJkpwBOx5Xu%2Bg80tLa8infdJ00Ads4fg2Y7tIPTVKJo2Aamulp1GbIY42Pt5j%2FGm8R2lk0L0z9lIVlpY9SLmARUf8XG7ZdohSeo4TTTXcF2%2FkFaHlWAncDhfcK%2BiQiOa7FhkONlPt8TWQR5SGYZOHN0RyN0%2FUl8RnBmvc8qqBDKBOTYI8TnYG65ZwJBMMP78oQdbujndnCaXD6vTUAQ2%2F%2F%2FZffSxfu35hfr%2BvNv6SDHrL9CX9u0umGFPWk%2BDHseRgNOGB%2Bx1FOLaDb0w3FFoCnP6M1Opv8eX5BfpKm%2BfTaZvRfxyf0ReioA6Fh46YlzQUSC%2BPtNvE8AbV%2FmcMqDSYN7tFBNf5DHtrwZDjeoafJt0lYRJIOaFzJwJ3moX154dryDSCkNw%2BZIwybsJMm70UeahFQSYfy%2FOHUsb0ZCQOUp9nACipI2VU6qJUtQGrQJ3kpyGYYOx6fr2rXaGmlpxKmSw2yx8Y4kL25R8ihbOyeC62i1y57HQ1iB0G2Di6kSlYfnbS%2B118uB81%2BtjvGxoG%2FpsTifnZZ8ci3bQb46VeZO22IwzeGivgY6pgHhXt7vfpoOMEENE3TCwtjdvwJ0R0N4flMGpD%2BUhYSoUxSsUZxDX97lxjrtec14lRUxk6RThM%2FA0aTauXE0easTBTTQXAQDlyar9E%2BpBmNnPmGYE820nDm0%2BYDyx7bcwND11w3tJ2wJxNlKWnI5ZjwpB6kVqn7dac52PO0RZ%2BsxfB6P23DjIFVPa4TETn9Rn900G7%2Blux%2FYUTu7ARxx2fDRRv7O6fJF&X-Amz-Signature=c5a43228b2f8d516bf32573e0985d2321cf10caa840a9fd498ed99d4c0b3fc63&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
