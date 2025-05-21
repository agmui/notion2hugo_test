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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZ4UTNH%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCMVw1zspB04hhAh5AtRlnUhuamWA890VPRbXGmfAPu2gIhAL0uaG7YKzVR3ogu%2FACp28lXibJc2dwDH3a15kxwRVXEKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc0my3iYO%2F5O9vL4Eq3AOJJkzaWKJ66rEiSEAsRQqmgsKqXk8K3yXYc8uL9TnQRHQDwoGfJ33r5xPyguHVaMdD7q0hlXNsc1zkrgUTvKw9W3fs97w%2BvTm0DcP1ZJUte8rJ0OH698Yswu6oJZQ4u%2FZeRVGeMl0nmyfoqdWpQel8mZLTts3BXKwy0x%2F%2BAuN0rjg8r%2FT%2FRgYQvK4Ff7MS9YOg2f2KNmmomm3HtSXnRYjMDXQzOvdKMmZmo2Rm7cIqN%2BCIEg8jl1q0DjdcbpGz1U3hZfUlvYGY8G3kC99Ct44wHRwhJFFHnIgbHH839r69%2BJmQdRw%2BlfKxHlOcU%2BVAigO%2F8HHlaCSZdda67T1vW%2Bgugp3Xs2XKU25R5pn5sVTlt72htKcJ4ajbAvSERk%2FaO5QH%2BKhJ6Hqej0%2F5P120rtxngZWKn5Pb4t%2BXr1EWnJkbiHzZdgaJRWrP7Sla9pDy8dxjbmhY1j6%2FSDRHDj4PwHfeEpqOqUdpB3A1CxhbVG%2BqHlNSSm3cg0UzHDKhaEJXO1b3DOOtElnflwDgUVbbyUgdUfL535sfwqqv773TAnAAOadDfwVGMgk782FMx6A%2BcgE6wHqCtOG5sX9JR2%2FTNsJ%2BMkN2EX7fRhqEPOSPzWlvvu7e%2FiAXZ71n4W%2FPbzDzw7fBBjqkAajK5qVrgXkPsEo7%2BCV0xLdwypE19vxvCu9AWebTBMCNh5fQkjhTi4B4eOZQiMxndJzV425hU24xrWq9YelntRTCFuLJa3oxgcuOxP4GO9rI2fMpmfaTimHCd3DRwUwuo6GwBUpvybZy85aidwJ2mzGRhxS33y%2BtupjmP27ob7%2BNvrkgUAxDa3mV%2BbyuoePBQ7kFfj2WjbnCpe%2FiNbWK6290Ze8m&X-Amz-Signature=5e7f84c2930da57837ff44a8a6263560b369eafaebe29b4d4f9014e4539c86ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
