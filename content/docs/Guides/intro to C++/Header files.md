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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJE5R3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIG6rkp5w40kissRgmwfHW3RH36aXVSd0eOEjDgs%2FgMdZAiA3jhSbHJZI4m5NYfpkR517q7TSxTafWTSqMTXIgWYHvir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMy5f1Y9yp%2Brh3oG9PKtwD8EL2KmE%2Boq9ks0qx%2FZK2vbWWL5lW5JbeAg8zES%2FOqCPe8TrUjcmQz6QFr6IEdwGVpo7yOAmcQqyk50yHMx2y9hInwnRdznXKZKsMZN86eDIiT2FE5F9l5wM8H9cIvPOr%2FIidye1vsAYx6xOienmDQuc6A35E80oC%2FkMFtwNWVCWPSzizUSwcZKzo21PSQ5ZpdjIvQJ8E3mO5REoNM4TylY7RfEk93vvFHxF9o0yKbDcmXnBFR4Yx1LnRd%2FJEebrB%2BktpEE%2Bd7S97NCbgBXqURaBPUkNswAM2Mgsm%2BCDO6IOYIVDrza3OvWE2xSR8VxowGsUxKI5RTu7rCVI62Tu18IWrCpvloU%2F%2FjmN4N9ZLdKhahYTtMuCZxdLntjWl1d4cAmkVSdNoyeKuWXXw8UsUOsHrRP%2BYVd7%2F6CNwnzK3VGecoXntCE6IrcX0XsJkMKVuWmc0DBFaIJvZiR9F3dCptox5wvjqICPYtzr6O2lUr2oNii3ZEq95Tr5CJ2J0Br7vHdOv1s%2B9%2BTU%2Bl7j3GT3D48FAzQzsYL5Iy4DkdRLgjWJP43XjTBTdGXsWxEnEeBu92qtmE%2FzjiREmP33xucqsmqCTKhBUEs64Y6wwYn9Nai4aOwx9qHElGpzBMvowlLPGxAY6pgG3VHE%2FujgJ8T2rTU%2Fuq6Bqo57KKdhlvUi0ORwV%2F36VvT%2F%2Bd%2BrkixSF%2Bv3k8ngmtJ%2FSBmNoJLUUzmbYVxC8WmjbzuOtbZpoOqFh0Y%2FWeNbf0NAdS3kZcVSimRaqef1a7mu1XBTHnhaBdMtoKN8F64sQyyvl7fKhMYtLmkLcRuQ6J6ZZPBdyXCAER1P2wp1zBMa22clAsmfU3XKkRO7iK1PIGBZmdk14&X-Amz-Signature=c9b886500df23ad73d8c34f0529d86b2ad18edbb6f72ff1321b672c55ed50add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
