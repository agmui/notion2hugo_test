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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQHSDNI%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGM0LkAFn5uXsszNj3SQUQq%2FbxVKzd8coD3%2BomUvK4r0AiBxkxcdT2jbBc3GqasKZ91mR%2F3DWV7SXqcS%2Bt2DrzBphSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMG8Ji6nVM5JH8qCtFKtwDo4NA%2B05%2FhuvYn16xv4DVmUooNIRkUQi%2BQA5hukYhmrTtIEp8JKy5Y5G0BpUUkhRXiiPc%2BqVKTcFNO9Dzxx3mVxx0eBP33JwEAHaZzu0bI2oJrvR81dqll5gRMnnGsaRQtdGJTRvpOjy92kxGUhTIqO7R%2FRFh6Yyx2TVORN3%2FCgBMNAqcPs%2FWJ0ie2%2Bf%2BRkbEWNfhoXfpWcmPSgaRc6oxjKmvuBJHEWGSiAZ%2Fcyl84LDCkDo2yLrz3f3IbBf2Oynh0tk50B8Tfg8NqlmRkgzy%2BBXqAaHU7GtUEGg%2BKXFKalyqbVhPCtlL1mpCC9bXX5Cr46Oe%2FE0v8JzissPiFWQzzQ%2FVI5fwh19xbS%2BRgMoFCSrn1cxljJkAl7E%2BT0Chinmy2UOe6ZDHNXEIqgGzJlOj9At94lpOoQXmtSKRkFX22ede72CQ4ObPsuzJou4q0qXBBtdnS54JkJs4QNXoM0Oe3ljJF8u3BLiRqLad2H%2FS31JB4ZGcI6qh%2FVfeBWjyC3VutTxpEFqXeJ%2FX38R0wMucXlVypgBH9n6iI3iGuUK1VliD6cNJmOeZzOce1NxVVKrjksaT5PeWaKLD8EkKd3iLXEitayt1VF1bZPhNmCdmDQQLEi%2B6FMcBeljC9wYw7q62ygY6pgEFLSUgGEB6blzFE73qXaMyYVk41hCeYVM1yp3rvgf37iCxgpTKKNkXLRy2%2Bl%2BrpPVCFEcwYQxQ7XhSJbhZRTEdnJTsvG6SFuP6tB4%2FPvMOHmZO1ibN9R31UUtVTJmot5Dc1MDz5N%2Bwf7AB3E4bfgkz9Uem5FGZDrT3JG7Sjwsgn2nUOTcKcB0uyhOTtBNpwBlkEWzoeGbo1e9ztoHAeTM%2BGL9WI1Nf&X-Amz-Signature=3cb53c67e06ef31a5a5653b77f5250821f23b9f9b5f6d2bf2854fba399a84ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
