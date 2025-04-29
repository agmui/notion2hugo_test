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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32TTYA4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDejpwo7ZNFn%2FGoHnC6NxlCPI%2FM3D5%2BGNCexFh8wmylWQIhAOpEwmyfZR%2FKpfmSe0WYHGkKpgzA0uWmygK0tzPHFEjFKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmqjHXk0LsEhQ3r24q3AOPg3Rtyg2sNHFCSoEt1ynKiCDt3ia%2B4qvtjwLV8tBZNVj0ORT%2BZrPqVuHNOnFAs%2FTjoWGcBgItA%2BfvY6%2BRVcNbmyVCP3VQ8GZOVY5yXB8TLrzwWVsdD8gosleXOxEa33rBGCYKFkezR4JURg580EeyG6ZVs0T5h6zXD%2FQ%2FJMdP%2FFIBpNlTCL6mqPshaEQhNGdK%2FucBtogXw41XtyV3v6KpwWyhRuRs8O9t7bR1sqHh07yBzN9XnZltzrLFCZ7rM68%2Fo5383b63ACM5Rs7Y2KqsaN86wWza98I9%2FaE89PaptGP5m5knrF4Q%2FTHYlOFLbeT%2BVW6HDRTwyilw9PDSLC5w50D1lurpm8U4rLCdAopUc9lizj5ARcrk3MAIo3FEiWDiH1cxVPXQgpKSy8TUMkk9cl9twyvGHcMe6R6Reckl3ZKuep64FdavOWGu87lQlrAquWewzG9grPhab7XttUYgGid7rmI2wAzb4IQ4bcK9HLYTK5ocGkeY6nQShvXQdiCGABxHBvkaAjAvGftc0CItkpK2Ezk%2BABel1iFJ6P4p3LgTCE9z00RjjqyvCFBrd5JtpgTw%2Bog%2FrsX3qOgEpXX41HDQOlzYFJu6q6%2BYrQ%2BJNcr8qqjrg0iJBajkDzDIocXABjqkAQzBuLU36mxoRRS%2B2vxwcwKPPEtjdkTYbAm255Y5VjEwBVjjzYSMQ9%2BfPUHryMQtWpflhEoNKq4clhpAqq3%2BBEZpjrzuqElCAQj1aKNzfW%2FA%2FFoGz%2FRwQD79yRulnXS9ZtmzeWlTVna3YIiC0sF6BP6eVIkeiGBd05IssMr%2FrpSZ74aqyTK%2Besl7zXmJNbMo4l3TEHhtG2kPqOqZQjsBO4pDpPlP&X-Amz-Signature=b525f7962e9fca9293a1b7c84fdceceabc45b472ce51342508cbc4dfd3e860bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
