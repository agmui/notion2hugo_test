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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAI3XOAQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUMsmZi3%2BRMk%2FONUSid0bvX0XXngcwp629cYwyfIOAQIhAOPtCU7NccjTQUwA7upeyr5J0okK2CXHrEVCOem1Jh2AKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVdtbq90h7JE2EnuMq3AMu54nn9aWWj%2F7%2BfhJzoOD2QRY3vmJ%2Ba2NnhWcLTI2FkYdv%2Fd8XVaH3qE3ma2rKg7DWLCds4H6894azaCK0H220TldaB6m7Qu3kGscwwoqjUNV3A5ETlpOt4PQNwlfRFjchw69MAwcmgzzTCCzmZHWLzW4GRK8366KgO%2BQCddPkKFcRwmkbbGTQKguCeg6LBJPCUxXByCjgQz536PDapfh%2BeEggn9e49Erin3Bje8kj%2Bv9vYK0GBdm5lFwD%2B9xvfJlDjQT2AiliNz%2FLo%2FkP2NK%2BBUUzL7CxwrLUbX9ovlMj9rHnGORlVlMEXuGeXKAd5nkhgejrLK49wVzmXN7zlIQSB%2FMYuRWm0ekRo0sg4TqObF8CyZbTmSlHy8aI8r8NyI4LCS%2FFzil8f2EagUBDD%2BN3VJcORW11u0V5yvqi%2B6No%2Fi8RVYZWU8nhbcgClvFh2w4WhNpSufq1F1Ft15%2FhxHjfebkDMjvhzeU4fwgRvccj%2F%2FcmhLk7lFEfheCwnnn3weEzsQIVIXzf5aCS3bz3Im9DkDfz7nkM%2FOKx5LT%2BJftZ52Kjf8ukQnIpDmrWqxNTuMdVJ%2BUYpe7h6g4vmI6S37rfUNgkySsH21dsfbj0SeRsYhRJp1T8v4RmjkgUMzC22MzDBjqkAVUTklYNIPx7%2F6j4Ce3bhnY0BB9VAa7phYah9b3Hwc5T0PbpJ6x5nUh61BTjjLBNrrw2Mw%2BJ90GypIL9uaLDxajNGf2jd1hjPKrueAx8u4N0b0rjyrOm3duQuCi2cVmn28%2FYJX0ALLIZdt%2B2uFJVdyeUyQPKmzS4hyElDhulbKUDAMjWzC5j5VvyKsnGkF3dHZJfnhVzKi6Q9igEPmQMayPgxdOm&X-Amz-Signature=eb393a772afc8134e33c44e92d57d1955592dc7b1e58a160e9d08989b793f29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
