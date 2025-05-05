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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E3AML52%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVYllBP8Gk5Q9I%2Fncnw07G2cukEAm%2BTWHd2UL%2FPUqUgIhAN1Xc50ZIrgq4%2BIs1HkSLSB5%2BKvyhCxN6FRkkBHaQLOtKv8DCDcQABoMNjM3NDIzMTgzODA1IgzKE6ROXWGoPX%2FWm10q3APOe1UP2jyBALBn03pfQPzWNNOoPLCv%2Bwt9WG40lHDLFXbozY0L%2B2liymQ5qOM0LcPc1WAnMV9%2F1G33uuvZnlM1oRHES8ivaRtyZoontpHmkGv7LCZ5%2BikkED2FMywjU4w4u1c5%2FAjGImz5iAd7Xk0MtyJUYlZc4iUq93SVK51xxYzEdZuYjJIonA130xfLsYuOdqGOMSRKZ3i7r%2B8j3H8JT8T%2FFXKRD9PdH0hOW7Of02xoQInQEySkQgRPF7655uXQLqhUpbFmXuS7kpgYY4d1dANpqxIKFWMOw1u5HRElKJ2ipBjVgah6%2F6ptucX5jmo65Be8Cl9WqOG7lcYwCES2CNNY8bsVQhwLdXbC9NgoX6eSjANXMjKC2JlXP8x6JuCCdMnAIGG5h6mxoU6ArtRAOFY8b3gMWEbz4Fg5fY4O4lF9YCvXr0x%2BbyHZUJHQcqvzKqh2FzpV%2B4cQynWkQKtiAI4dKzPWcirlygVVhfq6EwpxOckP92vD0kYgP4CXI%2BSV%2FSUZvCd8s8D%2FiFkZcDWk6wdj%2BqMtCih1TC3GnPVJoILx1hfUsiHJ3Inaz8khwJRAzNilQJas6nAcmNjSAIpL%2B4kbYPHJaqgZ%2FlKz%2Bf61hVH7nE%2BjzNW6%2FZ4bcTC75eTABjqkAVUD4lFQD8UOjR8kUtpzFK%2FOBX9sXgPcQYleDPlvflm0ya2NVUuytvr%2F90oxnuw4ZG3ChuTrL2ln%2BeOHE4U4CpMkPWRczReR14cIpumA7zL524tu5JUH6yhzNi2NehBAwv132lSpxZ9lQVAu3Tn3iWZRhvH0kHW1bjyZdAYI0CmCZ%2BWwKdBZR9XI8TJHpqXvoowepVv8r9aIcd8Fsawvyw8Sa0qZ&X-Amz-Signature=64fcb94b3d79bbacd8a2b3b9ceb3720e55641251f746e43421bfe71a5d479781&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
