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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VSOMF5%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAEtF98NBn51d8Gl0EaSN4rnM%2BMng5SyMZMi9obkxvMmAiEAwoK%2FJXxJDM8sIvNomyay9r9b0sKtjgQyHD83ZumwFCMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdBgZkTbm8LxS2v3SrcA0rEEmFxUhxjo6iuiVEk6srEmDdyKz56miOW8itoAVHoJ%2F9S%2BJw0Ctd2JQgmiT5cbuLyYirkjYPxAxy3HtVJpRfl%2FhRglWOSxBQq2aImM4Z1QGbZi9e7txiLe1xf74m5gCCudIOE9oKmgE%2FQ3JnDowMTHZnNb8F6lcQWmDYpUO6pTqBhr11XZJw2B2ZZ9wQBpq%2Bj3eyqSM8zHjfEdUcMcppS3kYg7Xvr%2BOKvp7j1uei3B7xJQw%2BdOPCP6QnG8pJ5OIr8zj1O7p4eV60%2FB1eN3HD%2Ft%2FUK%2B5N2%2FVKte6VyL3yxIU7dC%2BrwyvEtTpN4T9noNVaXpaPz9Lb1i%2FoKhoYkGC2HTnq5OOFBu6IQ%2BuTImHowo2d%2FQ00gx4%2BS5JcTDpBzBXnZjJzI0Tro8Vr6fjAYPIx2Q4m2v8HLVbuYQfqLE%2B0uCGNAx70yARix%2BtZHiTV0k1tnnh6cPcQ3FkVQNMU1RnRA5Urm0L6txAXsNeMlnkmG8MiEB7nCadUKJRa%2FEqb8ZCwz24w3yNQroId73Zwph%2F6i5%2FCQGB6kI8Qjw75VF2umg33LV4mLxZcCo7fShZU%2FWBU80mx%2F6W%2B18a5FLLNB4qDpQV1xK07%2B5T1qARvto8HBQAbkIqEnCjr%2BNJSoMMLbrckGOqUBQtGK6r9yFgfHTnSOiL79KZKA061bH0792w4qIbrcDPJEIplBFT35QlHoE%2B%2BQlIIfSViFki3vWkiJNFFQygriaDzbMjUyutFlXlVWelkBUVcF8H8jubwisiSc7x80OfPaJeM0WVTfox5jMjpK4zfJ6i3jd1guBDNdQoimf3G5tDytYr6WuyXpKS95m2gyxlyvasnjQfydAzGld6kmDGgGUxFf4Oni&X-Amz-Signature=cb61d222c9e54c81906f2c5216c816bfdf9ff467b31ef966b69266325c5ba13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
