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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2OAYLD%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaPvA1SJgfYSd4VqIUaHX2svBMxQ8y4WmKaEUShqriKAiASm5Erl9dkkMcBIHjqw9XSgGjaIFTkhyuNVMNj1htm9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRqtpDFbqWPjL2iMPKtwDE5VmJfFosmHPN2uHu2aOSGUrWG1IWSmr1KGm%2F66Kyu7Plo0opTUhS%2F31HY1tweJRSfiY01%2BxXHGJ4XUMoVM%2BqBix7YBd03WKKwMVozRoroaBVsWQX8DdBFw0tWznOubYNGYmPC1%2BoKAAcl0ver0NoJF25E%2Bk3ZNorwOuYTGOjAH6%2FYQei3ny%2F6QyzxkhnKSnjPoDqSu0lKcPwiYVm1zDTePM4ueLbqYNz99oZrjo%2B%2FpNkFeXPOf2m2LT4sbeLVeBzhU%2FmjRW3Y%2F8XiVVMY5QA4ffbuHmAvJu9mdwnzLUSt6JVzTiWKoviITmGtxn2RiRyf%2F9nI%2FQ%2BMtO2HBWgD3v2uvAsyewM2jLJa2WadSBipRDNVutbgsnV2EjYYPUvYHqGrspKOsRmbKkbYtl5%2F3wFnlKLXMDYLPErzf4iChO3hDTCRAETy0pQNEXe7Qw2Qjj7tjpYcw%2FtQUmys%2FeNYyThWOajxlEcoeXiRfWpUVC8eonhKdW6GQtkbb0PsOeTp9nzpHCm9UxTzGT2O2AaheVzO5v%2FVAXyqYrOSRROwhjY4RpwwrlKQrOK9z48NHjRr05Abtnguf8By6jZysU4lFOcQjUmghLLUAArfyvbZ7ENgkQaSa0iag%2FjQNgjMIwu6fXxgY6pgGNVl%2F1KWEnuqekdhgqOjBncFZDW6WgjhuNze4h1uylRgRaUodoFNM4RpQgymKE2HrVKc%2FWeKg1ulC1x1Da28O3tbKmCRKKrDcD%2B3kq83OF5m9dnJ3Z8yHx669Mj2DjQdhMO4UIGBasMUS6K4EJPiU7xk25Sl%2BqGgV19VXyjDv73r0pH8iXVrGX%2FoLwZgCfWW4YS%2BaH1hKSTbwbd4coOJvaawD7zOur&X-Amz-Signature=8c9e314e7dc7470f133533f848887159e44642c8826814c4f656ec9b2c201cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
