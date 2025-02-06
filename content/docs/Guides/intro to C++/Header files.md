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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RD2GBZL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCt76S3U7Jsj2c%2BRZm9X8JmuWv%2FWDweuEkQ5Dc%2BGYo6oQIhAKvik%2Blh6wC%2FNzaJ%2B%2FuRqzFEOvUjtYQr4FWj7FKH70HsKv8DCGAQABoMNjM3NDIzMTgzODA1IgxkTA3JNE72aAF90xYq3APE4HruMo4bxb8C3bwSPCvCa%2FpqG0EmfOYuFY0NbuqHFeo8DDcIs7Af%2FJms0jJsMcyZcphOB0Rmsl%2FPdvg4WIcg%2FYH9uxiaMqHW4IjcJ9eTzDSwbK4LGi08NG6XRtH7cBkDhXejYlHLmCkoJY25phszTZFmsRBjQ3Y4OARtMlI0aCYsTVKaULzoPnNf1Z3uz6eeRzvAOSUZkLm%2BxD8bjNUbbp4GQhTjof9wmveJm6icqbP9FF8nqkYwUkY7jdNgoFAKrcoK%2F0gjRSWR3sXZtNZWFZ%2BxR3d7alLj18JkIDb%2F6gXEGE4g%2F15xhA9yZavyIuWx9FmAS0JnGimApDN7KNW1qPxtamI54rN%2FyLphrLOI3v2M%2F1KmoWbjAPXqbcBHf64dC2x4KRCYJZ6xixXtnjl7Hm2AF%2Budiq8XWs8xn%2BhR8heqf24NIPHwBXeddRunJsMMqwk%2BL%2BAzBh7gXEO63uOODCRpYUXhIG5EQM6sFjrom%2FiVJusoCg%2BQjbOrNXWAUBAyS6buPBBxVeYpYO1q5xxVpYQAycIWClLQ7B8BAo1%2FMCcUWcDNG73VUN8VzWLi6a%2B5SLsbNxlPf7cSxHqDTh5BVr%2BDao7M1dmrBkLMDxhZWpgOp7qvP1g9BzBCOzCjnpO9BjqkAT4PUbuzmEcsTl3AaqdAtP5tzBRrx4%2BcwQQJRCY5MiKGVw0xs0sP4yP%2FvH8tCt5ajx4CrMChOWYQzCdiI3iwvNPSzVIFKZgnefhZBMg%2B%2BGqGxZKEVrhVWviSEaMvLExSTZkC9iLIaL0BBQXk6KrgpEXj%2Fn7lNTVZSQqNB2ySAUB9QqI2nn0MGfZ97vHAjj7B8aUpRJe16zVrvqg5pomun971z%2BLP&X-Amz-Signature=69ac4a994b763e4f18c97f9acdf43987e0560f1f589e16f774e67a76a67223b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
