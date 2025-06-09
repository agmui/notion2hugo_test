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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXH2AJ5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoemsJfaEJ76%2FGaSBrYGW1xe%2Fzzkt%2FXjbOJcqHbR7XCgIhAKqXpMuDMskAVtcaIJu%2FV%2FLfX4oQZCWFZiwtVCvhXQn7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFzmUlnLy7LnrVbW4q3ANc5cbvxT7ska6eTY6fwTmodryLf2mYJx9MCACERqTlX4Dm6lZ5yl%2FXQYwU%2FKKn%2FCyiTAngmqSqTZvx176M90Oez08iwK%2BvKEYT8rpkvJ5h4vDuwqEMueVG7eo7in0MNP7dv3DWyenwnVINcJGLamoc%2FWgo3G6jMVVoaO1EKXjyus0%2FPEErBgYC0AlfmfF8XNjI5%2B3ub6OhMZCvDEN6fyk50YTGVFYezTcr%2FuXmqsgcq40QA6lvIY4OJwRaa6cApKfQvUeGEbv8CIGReFYpBhWUg9vRwSv9%2F6yGhzGnqp9umeEtzRRsrTn8jQUq%2BxZ69kHmWS%2Bwfcmk5yKW5vdK3yDuLuFdzU4Gns0WMcrRvn7zo47uNYseQ0f3BZ72xOdY4%2BSSwvA022PsOUEGzg0UkulKrsevjMkzfzK%2FmIEfiehVuOpQnVY00L7zKlF70m0BoVpcy67KAAHrYPqL6C1pr%2BBkJchpUyMt8NhC0x0kY76DI49uvca9iU2o4L%2BZPHqbnIKZ2cN2HInBCNKJnIsbd1p0%2FhUltSgpOOkc9jf%2BxHTyu%2Fuhk4d7qU1HpfvAib01pBF8qUC60TP0%2F8W3GIUZhq9DCN1zTL7eJ5I477%2BOTGgZZSmRGuLFttrNbE3%2BtzDbp5rCBjqkAQz%2B1zgwMSaUbttcIrIr%2FxvARelcWFZWL%2F8ePMLP%2BWVx1rrb0uTh1yRqkPYXhvfoEQN62zxcx9AB3lJFuDDnHeRHzZYepZMuFJkVamiq1KVFHurp9uTasAVqHL2z1eRrMKCviSogNbIoG%2FMl8rUXav0h5vwsCfpd%2BF1b8WKbS%2FHHAjMnp0Sosi%2FYinUxX6LfHs8zLHH87nYnoocswFZiH4E2ZBZs&X-Amz-Signature=dfc4df438cda7ac3eb9fabacecec3894dc1f187fe3735e8f0d60e84f265cb061&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
