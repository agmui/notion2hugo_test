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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZM7SCYX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHpOdEzie%2FCwIVOhhvC62T%2B5Ty0zMsPoTQFvYUhQULAUAiEApUVL0j708uZsgV4zUI7TuUdr30oQC3HwDigAWg9X384q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBLHT6hqjmreI5VGLCrcA50%2FGUzXpZsTXBePlknZ8fJ80Ihoi4z16pdiSTrY60XBC%2FyiEd%2FVKdn1a31DUrb79Fvyg5EjkiP4g%2FaWSP0HfM%2FE%2FVCL%2FeiQulfQ4%2BzCnKqveQ4dx%2FeETtvJEKSUtX3O0h9zTAqcNqDw3XJTc5rxbtxEE4JUYqf0uyOJHqGE7vDdKedv%2FQaKuQ8iPlEP3QXLfKjDWKLQz1kjAScAn3EvcByl9uc8Vp0f52e4D0ZjTRSoxds5J7q11FV%2BCC2%2FxXLkhjyL6uFjVOltUhO58xYVA3ToFhnVhYI3YzpwfBPuBSD4noAP5hyRyxOmJs5whN4fAsJ46tItD3bTOgbfdXmmjVYQRRfnARwwl%2FNkdWidHYpmamH%2FwcDiJRXv4iPcZKEZZyM28QIOdkAKKFInqwLPYcuIuUSKNJXVn3cwcObB%2BIYtijqDii24NUWUtWx0LikDsA8BzPen0m8g9iQ6bxa%2Bw6vz2X5r7vP0zqj7J11t%2BCSz%2F9eiPQMwCsoFNA5L27CZVj%2Fmzl6VN%2Bsof2RBMLWMNV1mDFdeYWqJyE%2BzyBtAXRZkz0%2BflRVOCeDb5mLAJWBvjw0rNHUSZlHn8QV0ch4A8DXk3jjy2Cm035P5gElsJ1EFpO9i9xjr8NLndFnVMJmMhsIGOqUBGh3rXdTfL56echwdYyMIGWjjGXRLIGbj5ul9CRTzJyFM27jTRqodDOnaf%2BwXN2n42pQquLia7Tpr%2FWTDNm5tarRH52NhXq0ISngZ01RNsh7fybRsqIl6pXqg6ynkEcp0ofVhbEMTm3zx6QYRUOWjkPaIgc9n5kBNFPchsMW07%2BW2vgf6LS4Qv5Te4wEuTp7vchFtbieeNpMY7E1I3vK83Y66N3Kz&X-Amz-Signature=96791d7eed4d32ca3ef95d065f2179155c57af706364b14e77faadd4e670b95e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
