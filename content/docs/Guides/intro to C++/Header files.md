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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42LYIGQ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCYDt%2BWZXKvum927BtU4vdmpr3uCu4eFVWO8Th7AFzlRwIhALWPfHeAkp9XFTNb2lQW1PN%2FrNp47wmh%2Bo4K6j2QpY8HKv8DCDsQABoMNjM3NDIzMTgzODA1Igyzu9yFotp%2F%2FTv8zt0q3AN9Ej22dOQC3JEsGKoR5zbw0pbcDGJSVSyj7SD%2BK1BvMSjfhXK52xJOTL7f19TVln40RWtlYARsOs%2FhdIq5a74%2BKGvctFD5M9fEUTAPLSlhCor20UiJolZ5FUfcYyM8eLM8D0FRD3C9NPblWmI3KAdYRFP8I%2F6QZ3SrJybWUy3%2BGzNIkfbU48wEbJOFZFGEhwwaZKrVhXjMtbGXw4zfu%2FQZcpXdMCLpRJT2gBXJdEzqdAHxxdWhKY25qMtP31KkRHRfSes7CNV2Vbfc0oVNurpJNVAM9RbR07uhuyiHzRZ8%2BB67FNnrpbew9kKI7ntt%2FanPh30hNu79rPBMfuGOH7zLP%2BojjHGLNnOmACwmv4LLt2JYVVNdIiHJ0qMG5zzLAbwysYCwHFQNKdG1SuuO582CzRjE3D6ZsKDDNKC%2BArx2C8CxSmUQT3hhbIayiX0JjhcQXjMl%2Bg0qtm2sZA%2Bj%2FGeZFdW6CFaIA%2FRc15cvrZzE4PFpvNu1KqYuFhKKqPR87hnJpAHYjskYr0QNH5TclDCURJbskFGkviEvDfxPWh61%2F1HYkKhHX8VAUqepeuSUKWinSavaniSMIYJwKOsHwmoc5LZUvmh05rUvGkRmfBoZNSaYxqZQitcvLPyE9jCe6JrIBjqkAbyHkYGymquQRUCKm2CjTMhZSQBsa%2BLPxMQJPMfJeqfE%2Fkn%2FuPrdI6X4bOdkKXBftb0xOfETg61oICQFISKqhIk15OLg3B9tDKBEoYcIrOa0YDaBzmdQrWO9dP%2BaqL5Em0CnXbXuPhrQlUdh832E4ucToRNoeneqqCqWuqF1vKPdKSVIjQihJG%2B7djXuVu80q1GJDKSaFdTuVZvXaH0K62zuS7u4&X-Amz-Signature=7dc597d1f55e9b6205e1b3c56328d3916276c040c06b0844b3a8ce97000e9fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
