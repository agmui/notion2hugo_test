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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGXLBBJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHWpcYDWMAy%2FMS4B342QL4tduMSteWofK%2F9WCrN9hChCAiAl7%2BIcYuTEAczXBhv58aMjxbnwr5b8Ib8q7czCw%2BaWUCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMExzIFRmMN2twWQ5CKtwD3UxIwcsfmkTwcmSiKqplUzxD00NXt23kQ%2FCC6PItcG9EqOLpyeW0hW5El5R0CVkVMRGmiCXoEgMw1pQ8DyT2o3wseHnpaKv%2BridMLP%2B4cFDVmxexyamaUnBlrsAVrClm6ZrgyUhk9Er4fv4CTsfiQRAn%2BAaXgMYCoO1lXYemF8J%2BWIeTGyhbqejtK92w7otKHFkGuQNnPXxgWmDossixZzxjw3hAiNlXZAtxKEp65H6%2B3JV%2Fxx00wkb8Tr0vrgWpYkX0tS4oIJYcz7r5v%2BrKf7tUyMBE%2Bh%2BrIebV7FX1BjRh1d3f0IRys5uI39WwwZFVcVvN4MSe1hpshrUPJpnCfEytIVVv5FWQ53OpzXmWa%2FD%2F9Cr%2Fd71CU8GMZMGwKnvIzuhXcraN8uge2zBdhv6C8WML7fEFdxubkzZ829aYNU%2FBi4DPWNdV%2FbUocgB6EBlWnDCgR1pwTE%2Fd39jKvq2zoUNio3BSDB%2FR5SRp%2BfXcTBaB2aRYCDtVbtyYt5vOR17MbdJD%2FCbWXkP0o1OClFsEkUMjjtNJRcHx4bkDUjgAKV2eWKXQZ2GEB5%2BrUTbMV%2B2lFyM08pjChyH95Nj3BQa8mneNqV1f6MHYOFUO%2FbAc0n7WV02o4SOsKoHWKvIw79fzvgY6pgFDwJP%2FncdTX1nILigravIr4S6qbIPiHGOEu41%2B1DbaJkE2n6SkgOdF%2FXXdJ7RXJiUyQIClTvMyDAzQnVdBSa6Lb5MOZHXXpd%2FBmx5nYjM8%2F8HWge%2BtstdNiTnObs4mlkKri2mY3ojumvOXyKhY7KeGrhN5WHfWPuVyZv7apbTDw9rXsGYRxIGKL68wuZDpbeXrW5KizE%2FFPmad7vW8CXQ3tCTSWlsL&X-Amz-Signature=6c9e1d74b00e9ee9fdf85108ed940311397906e18a68aede181cda19acbb8242&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
