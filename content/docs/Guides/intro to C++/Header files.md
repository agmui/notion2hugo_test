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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRTLN3XE%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEvKEwe70QkLXp8ik4n4zWPM3tGGZzVfYv9j2UdaBmR3AiBBkgELd5DZlYAtLBYNZrHSUUTVl6lpXIC5N1kAhbrEgyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1d8HhTk07ugfaGGWKtwDezE2%2B8bWqNiuBlYTfF1HOXmrRVl2EXYcRsnWqXsP47awYFCB1CjxSbNJL5%2FHiksI%2B37QEQdVOgKEXUvtu7TuG6e9SaCYryhMiDOUAAVzLyhcD32FwsGsZZpdSvXtDAq8sCCYtHkJDCay6oMldCFPAwsovXkm08It1ZOkdVD30WVTaJgG8LW97k%2Fhh%2BB6SGshuEu9Xf1ir3rf%2BBBJ%2FK74uaF%2FQSplbAtRULVHZr1teAi%2Fwr171Xb95Rq0KU8HjHDxXLB2mRBMwEP%2FLdjhxf7rpSKwejYoPjZ11a061uqIQyHsyatl0np9yNCXpWbeZA27KMTyCdkqmKQoZVKu6eTic%2B6uANJ1UTT1pK8YvL3q5ZezNfvUVIArB1i0RrmMN5B6pb3zDje%2Fltf67gpE%2FnGFXfIn8QULzSMe82aiJUx3U9jkriljdme06Ex2vyQ5cfeePoSRKPWeIASa9U3i03%2F34JNhMTKFRhj0cZ487dETYtcs0QMKswYtzoOz%2BDzHoJRNdkDG7f9L%2BYfn9xcCLE40UTm%2BP%2BFe9hTGURLWGhcUEVrMF7lBXoSLgc70mkICFbJamgFnusq%2FF3%2B0yrBv9aBdCrh8dzGY2VqiCEvwHOqXUKOeo01SmbjTf7aUP9QwnMmRxwY6pgFk7ubUhWfWMnPtd2ixhhJoL2YrdAKQdOlhR1vVzeywhDDl3Dso%2FLMBmfKgOu080S2UxhCF76dcrEc68W8fQsbLMb0ib9Kqn9UK2YJYxuuS2HwfiBzPixICWU%2BEmgLUJxz7YwRi%2FIftWNtxa2lznhRQ3o7Oifh9I043vRYctdlfYIWFhYpSWtVAOaaAdCKrTPVLlYp6QYpvAIsuM%2B0t7kC7G7EkCgT7&X-Amz-Signature=95e8ce79a5eee4dd9d1625f8b3a0dae0cb57d8ee4beee6d981fcda90a07dcedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
