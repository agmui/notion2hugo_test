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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXS3GJ2%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDP0PsCapJcT1FII9Ypq0UshSiJlOpJtHiawDmE7ZxAFgIgXAN%2F2P%2BncUgB7vurpKkVQjB%2BrN0y287eeqItYXg%2FmXoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDFLth85%2FuXTv%2FDgxyrcA0flFaxUlJDw%2BpzFzA68U6gA1UzlRTYVDDeyOr3dLai0ERTUzwMFmdjbt3IE6eFHAayt8T9phYjIEz9GigJvCyNKSs8uGaKI1IhWqJa5jSaEFQGTLnj4lg5QJqQzmdYwNVAbv1dG0lHYtrD5cwQYAnxqLCZQH3XGLQ7jBorfVLOhpuGs2DaTxVIMdocZmDPt455iWWS5RG7YBklUjlb8kMSnPaX8tdQD32hQH1oMfAT2nKaPEYIrOgHofLZoTpCzTX00%2F3%2BRoN9eZCqOP174RXb6chwlz8RGh82g1RSQ9iOsvJa8GTK9iviGkveCEVK9tqqs%2FR6agWoUwWuISYcT8Ng7E6FFUDoEY7zqbF6k5HuY2f3FWiRGzmz0CpNxe2U3h2IGLgrtxQFbA1AwZYcYnzC15Xy1PiEn17qag6I4g7BWpRaloX8koXyA2nPDq8IQ5gKGWZUAQ5M8J6FT2cgxsu0Nagtb4fNH1OI7NNWRykWcoxuaIWTjBLFhgE2VELTzKiC2Rs84T1DG2Y1OHtRQaSkrm1rnLctID%2FxIjPZWaxOYwoEE61ko6WQRZJq%2BekPYPgl4XxEWQ%2B4tNWZzO9lWoxub5xMbhHtIOa3XgWCjQdyWvbPOSe0mcmGtlR7OMIzoldMGOqUBodGRBxbCDODZsk1iQtaGFjVtna6HQdLOTx5s%2BBv%2BcGHmXfVSMjqGVM8k%2BEa2sExp1Lh%2BVnyEbjapq7gpx3FCPVwQSKtxhxayjcej7SwVI5ZfXyYaIcrHkTTCSsoAPAPdC0AJhMekyS4UjWhz40mZ7CRjTHZbM00QSP9DCgHE%2FcwwkTBibM3K7HNDfBa5lT%2BBiUzfy2lNbSx4suN8NIvxrhwGLn4F&X-Amz-Signature=26c2245cb7ee2fc2e5ce3a854b178367f8b21f565f0ce6a4ca4bf9bc90810940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
