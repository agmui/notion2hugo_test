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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRFZ3DF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAStjSYdAB4qC5kDDdcTVa6MpsozkeTKPXYiJBO1ZlRYAiEAwc6%2BkuwuYpEV%2FPGni1huLRu%2Bvg%2Bxif9f0Ki8bvpIdiAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM8IvXQPqyhJYh8syrcAzIrfo%2BNEvv1TRsAnMfGssVAkJw%2FDErLq9niUFnZsTQQBTwLHTz9gQPtYWT09bQlDthar5nd3qvzhqtB3aJrJCxM0E6MyvOEKumA9QJckXnGcpqbIFsFnRQXuDkD7QAXvcl%2BDFfhAl72LNbdI6lIbpiAZgQKSxZwk%2BCsjNFCE7pAU7%2BLoG6CsqZ1k4WUdHvszl2zMoQD9R0wnlscKHQWSB79D5L1Px6JWezAt9oGnufFM6r1KtvKZfvxguH%2FTLRLT8kiOmQh4VkBZ1OeJyy8tiipP5iiKK8zULsjeXgIfBMhqkjrdUrBbeyJVwmtlHK6OpSDM8uDTP5oK%2FiVpyDnSGc5MInB2dcive8JytRxXAevHn1NAHzYuNSoHim4JLq9Gdz8esu8zXmXVkxd8%2BccOCJ7Pz75neXigRdnG52ufV5552xyMEqHoByioixERhjPXBX0E3DSeMcflc0SIt%2BFfEtJuqNA%2FEuxNs7NMdJ3AMJcOnLGTk7wG3zcJ89YBmN5gKh75vigp6z2AjkrIbFd7fh8qxdd2uPGo%2BKDeZ32KHl3JuCjL4xKQ9ebGFwG8dZXtRsUL%2BRTe1YO%2BBSAJSZiYAC8ORsNxO%2Bp9Jh1OgGASsCjIsBStfurfB28c%2BT3MLbQ0r4GOqUBkBx9Acn4SeYDIJGoxnJ119Z7EISyw9ka%2Fm1MNWngM78UwNkclG4i9VLBDWr4YhTlbXOAS6A8cRCxr%2BECHMb%2BIvT1aDLjbs%2BIP5MJKBBN4f9Opg7PiPmebcbfHIa1EvpcDT1N5Ddfn6kLbSjI799d7eJAws%2Fuiso1b2F8gedrQbJZFraAlSj94LGrW13kHETLq1XEXDNSKaqghGLP7wfMZUcs3cys&X-Amz-Signature=fdb0c5113623515fef189513d8a7b5320672f2c74abf291862a372b560c65d19&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
