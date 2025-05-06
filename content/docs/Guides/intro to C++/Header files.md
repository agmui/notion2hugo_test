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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KVGULQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnC0c2aYb4%2FntKXwQUq03A6WLSntYVtgUUocj8I2OfUwIhAKtoSsfCVI%2Fdi3t8Mqq45aL%2FvNOuWZ6RPlHxAWiOq%2BiSKv8DCEkQABoMNjM3NDIzMTgzODA1Igze8Bo0YE00bmYxjEUq3AP7eoH8gl5E2Otpc8A3qZFfB6WKmCH49N2MCauImcdSz%2FSfFwO1teZlvtlVBDxuMtuRZribnmHXtE71zz3ErSVDXTYZWITW3mmwkEzQ5EhUvzRisRbmJnmhz%2FDKCD%2Fx8sI2frCxSDJonVSVDjaLkalRxRIYMa9%2BHpWzK0BWS%2Bm20epi3jPInpfQOzRIqjRDWjBHhhP4cLpPqmdWYpaOg9RSgXbIJ01SnwUM9KTy3di%2FucOXrXS8aUXsZaEQFsv%2BsW69y1JB6mNCdfo0cBFkgM8BOfDL0FoUtfPGYcMb7tVJJsFi854gRmIvzV7Z2OcmJPMkPkZ5ULj7PZqI9EHdEihiBDgniRVUXQK4PHCf%2BeEFEHIS6nZ5mMn8nvKLvgs%2FIzQHcqeekeON4ckWNViCPe75RyNqt2VgpuN%2BwGPkUJHUjmULjnld9YuCiS768zjIRP8UAKD%2BB8nQfwi1IOImZzbLNDVHfWlptiw3KkP0qVwh411hXQhZvY6aR1sAjUE6qEoFnuqy3T1BvCw8OxkCJS0K1LjXx7nUz6ii2%2BkxR6ZasGOy1jyxIvAWtVyr2gOW8ZD6wId7ipmWQP%2BpShQX0bZbBTaQjJkhvvlGJF%2FiYMlzh0PyIpnCHmZ0QnLGaTDU5ujABjqkAfGUM7h9VgcSIm3DsDyVXYetFwRs6RnWvdQmcgTRPSVyRI6nhEvveKSRyCqBW5UEGkLnocDhAN2A6TTjAw%2BDmbS%2BySqMeD5ATB6ZgtDZQaSkpbVjnlTFigOW8UJTSRLlh3g5ZoujzSisPnnG%2BkZBtQHTfop70Y0IrIghuWswHuqDUzqZEBMz55LtqzwyjQAcXlOemJstGyFlphCImg6w%2BQoYPRqh&X-Amz-Signature=01fbf15f00ddf5b9454b97f76995c4732bdda1fd8cb6d6406b341b9ca5a4d996&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
