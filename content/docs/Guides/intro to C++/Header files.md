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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXOEOR5%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFN6jnAso%2BmTm4FbKwEltQjQkcMRKxtok4d7QqlissItAiEAnodEx6pX0gdbLR1%2FTpyA2tY5dIepmDFAG4%2BdWOdz3C8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWPX6gyYF%2BBtF4wXyrcA9jUqozEus8N4NrAMF2VEWTNGJzbLwZgx8yWRAf2yzvFCuMLc912z36ys8%2FmuK5QcJx916NE%2Ff4DzdYDHbnZVdXRTZ%2FO84mC4ZiJy5RiuCWoCpivN2efz9eKpdwLiDNyxrYpD5b2FM9Hyy4U3vyQKKid7doJH5g6ZC9%2FUJ6QaGcLkvA%2FGVucE9nmJRr7yIlvN9J6zOsKdrnhsBgP00ResCkRZk5m%2FTq3b8qrOF14vld2Apym%2BEEDow4dDFByp9ILLBgV%2F1Gbrq5K7kkc3umyP75VQ4DO5HDnHm8DJ%2F2hklW2YgBmqybUd1s%2BZ3uj4OpiM9iDokx%2FMEcWWlhDSbUIJVOoie7IPwMJ3QC0BCXu9asR%2BU%2FsM2qaB%2BN6HkdVfAPeo%2BHpeHLFatZGYJu56ml7An1Ebkb1rTiHj53F5XT8pxyDWHNcOj%2FcVbRPUnmkfXZdxVQFY40oaSN%2FfF6r7x%2BsOganmKOjKVcwFkBipu3I2PTSQ8rNahDFsUKc5%2F%2BHQNrLT84tvKYMTeq6PW13d%2BrnGe4QdlfZ6tQ2P%2BRi8t8vGGzgDAHB%2FJ728TuQoXw6lP%2BtxI6FaZnAu4N%2F2PILUbt%2FuXku%2F5QtgFWIrwO3rf6GPrzb5Ln8r2ctUwJU7RWSMOusntQGOqUBa3MSyMWU8%2FHhKO3tA8R2WzgpUtGhc1WSuGmgLpzBgWi9AYI9fcZsNEZpVUvvkwcaogsbEVHoao1Tv1SrFVL0p67bcAzIROQYQnZXyT69EtOSOmJyp9YAm6fOwX6qoGfJN%2BH0ULnOrz578HRdfxczlZSKf3Jw1nAW%2BAmHP3Y%2B4WX5lNJnP6WNPOoBb0eKKwkl0zG7PJ93%2BaWYEshCqb6XX3i2r17S&X-Amz-Signature=01c269489eeee7c2c1e6cb71963988d8937425aa45595924c3e6925a4e0ac7f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
