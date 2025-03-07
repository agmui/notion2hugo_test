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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DA4MOQO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlv8HJM7A%2FoK%2FbbWOA0ij4o1F48dvl41ygUEc1tDlHxAiAgJaOcutzRcc9dRWiq6cvWkxzfIip06Hv6wy0OLVYOgSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMmep9dnHljL9D%2FBW6KtwDko%2B5OlADdddlPTP0obs8baoiltxGcDini1s6qQruizwsU2Yb7c9y8uB%2Bizd%2BKohReShAFHspb%2BYv2LxsiggdWKgF0t8bPj%2BDSFFPzv3644WYQs7cYXD6Xf8kHYkbRVvOrNHa1eXkXViCpp%2BQsIN5yU5wyuko5NxdXPVvmdUf51irucuJ%2BcQJb5gpHt86ZXcKEp%2FxD7JTA%2Fwpj9msghCq%2FVVujky54IOCMztc35hLVm%2B8qR7fbYvPIlHvMms2OBgFKSM62udQElu8bYwwMskx8WhZEVRrtDcLoDrw%2BcyVCDayW8NjvoisFuOKSjrE42dJoCCTrC7PM6Ct8247iFWkq%2F9GKBkpEkNrF5Xen6J7sCSUwV0TGnfRTldj1w%2BlEjltchWf7xR1YavYxqV2Iepar%2BYmLC8ZHiw3Glh%2FurKjd895TtFO0ysR1%2BDVqApLOe%2F%2F271PdfRUTlCjn%2BnrRYXrFIXMoV2k18HjYJqg3fVCSshdtsq0w%2FytvUTiapoMFxiAT9L%2FaZWK2pn0ajebA3wO2VoIgoH1JYakELvcFuIKSRKVRa2Jxtpjf9aydnk0jrDNzVTrQgP%2F1UxIzfH4poDhLGBxm%2FmIbWSGPpvPb5fYgxmxxnHrglOddhXvEc8w9siovgY6pgE4%2By1PI2WNAPm%2FVx0LLbf2I3bxbnOM634Rmh79UI3EyvOSFgtEKOY%2Bgs43NU5eKw0AiWa3nLoUGtLyjc1tHIax%2F3YnfSzN5RLU7R0AR13WGxaDwfU8HKtZto40H%2Bn6kCYqH3AmdR3IwRRAVTYzYEo2zLGTGWxuykoPgRz5LaAw3Bjw6aF5nOXEaQU8eu%2FsIq%2BbdXYEjFaYZm0%2BP4B%2F5EL%2Bbrk61z3O&X-Amz-Signature=92c7caf2ad5a270ce44fb543a85a1ea62b4e43a5f938eaa6ca8177ca97487e09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
