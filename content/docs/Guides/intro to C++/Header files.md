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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYIEQYU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC1px5xybIvlqr6pxx7sLe6W5r8OjRZRI%2Fq1yihdERdIgIhAPtD3Fg0vbF9ruuxHYndpH5h4VmqTDicNlstdaDlal4kKv8DCEcQABoMNjM3NDIzMTgzODA1Igwto9KiWdRVT0kZdbMq3AOdeRZblsGS6AbJUU6IBlhjMw4Yj1lIja51b1YMo7KHOjcIziEMWJ4YK6BmwEEySKLN4BEYodP9Msd2IkzQQHHgLaZ0QwdHOzMOGC3293HqdnyMI%2FxxRhqzRo7hJOmB6Yn3Sop9TuC80BEtsGtwzZHle93rYFxJte1c8z7LI7%2FSzkAtfZNvHMRZa3RqrhjbqgEEzxe6EWlFjvIKaoYjJO%2BWI9Sni8XxFiRZS5L8rthc3yQcsWEbDHTJ84dyKR%2FPfrkkiqe1mssnMAP2tCw1uLwqW1bF0Wj6Y5kwBEAiUtx8lcVpZQQUrs%2FNXanoNmZ9qOJn6BWrl6rAX9cnXv%2BaZhq%2F9FKy8rtofJ99E40u4lIrvd5OhDZfRB9IqFPMj6MedVosceCqzsEuVd1dXGKzuwDnG0Em0celmOa1YrJLDff1uq%2BPN7oPjRAv66097PMxqukhMTUfmg6eNu3oPvjaDJv9dhcROONjKnk46IFEGNDtrsRADAq65kAw4srseDhUTPVLQg69YQCySvFEVMAHQC48%2BsMP0DtaLtTKdDUHTP6b3687ncAqz4Gf60XC%2Fvsov2T7XL2n6sacW5kmAeK96stwKG6NDz3Hc9PBD6%2BNpIWf4hjjQ7I9Jbt7dLSV6zDvxcK9BjqkAUJ9GDepD%2FXEAn9rosy%2FLGyoKDlrzloUX1FpSLBx7LxYipf7MCQsqV8dxRPcn0pLg2rbVcFTZ2il6J7B2YKgM5cAaFW9WsgahgINPYreU5Z6%2FhS%2FBE3GJNvSGuI%2B596LOBq78Dy85ZSu8rQjUmEcQ%2BN%2F4ZaSncn9XnZFLuDg6bn2i19%2FZYlq%2FopqgNpYk58GOHsUYbsP607VuIjo7Y3qH5a9V9k4&X-Amz-Signature=12ae4161bef39a4fbb27ddf6d2a4b54d23c1d4d95f99cd7c53328d17e59b4d21&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
