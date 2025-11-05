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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6V3TYH%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdpguIL40DQNDc56WubfVnIvlN7C3fm5SUZOxcxqiVAAiBpbLQhM7z0EHg0nLCgtnFvhzV4wBb%2BPenA9m0TYwPT0ir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMs%2FrpRWp8Gmn2QossKtwD8gBRGU2Ptb4U0MMbrhu%2FQYRQQfar5IktFVyKPyeEzwEOv2Itq2EHRCmLMJqHg%2F%2Fwti3arLUOJtdGGfN%2BnCql0kUZm%2BOfJzoRBxGiEztZkeb2EI8RTPSWmzGyJysDq5x9f%2FMlh%2FOIKgccSERstkrWSC0OfppCsYtZBnR18OrH61khLXhb7p%2BSYdGroYBETvl08zP8qpMuHVUFP%2BnmX97wEY%2FFvPC4Dz1owSUXPCgYl%2FdL5RXdKRsYeBmB3u442Qt0wzPAFTAAotmiRQ4mLLPKzz42Qm03f7RwvK2u6An2LEs2o8YUBRZyDX2Sf%2F8xfKw3YoxLnzi0ATTLuWYQLocCRFXsGkPjR6N54at2SQgmtp9LhU1SV9TA%2F%2Bhn%2Fp5W9Qx%2B834552yhLIII7bCnSTI41zlf5EHqVcDV47LzFcXNlRm36MXRhteE4nDElTlxnMtvx4W2FEy0xfWGrHzKBBhwVV5f8E6a8w%2FDOW6WGEjVYfiyizQRhBgDeLV1EtUtisjiKN5ZHeMsCvD1WkE0j9Fg6Gi78BVQQbNxLPvDXdQX1cHNrywcqC2cSGNhzhBDtPNEOn9cPluhnISbeZZYV8g1lzlxIGKLYhyw%2BbzSeVPoYdw7GmiaF2Av37kMEFswz92pyAY6pgFQB0rn1FJA%2BQ79C23LdS0KtQs7j%2BgYIOvKLTkiOstIz1aEunUl4jdvGXiy2zozeFBHe5LD7puxmx4fYk0RIxVLJcjZZ3KxtQto8YhQBGh1bqEsyM9y2DOkFHEwNikXh7EDbj7ZsOmInI22R3pH2k3tUDkdWvG6LJhyMl1k62%2BoqMXXQrKx2qBxl5J3Vo86QPr6xQG%2FAL2KS1fBfH93weiyQLJFnVkt&X-Amz-Signature=dc5534b8811e5641f00dccfa03411157213f1cddd61bb8aad879e8869cca5a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
