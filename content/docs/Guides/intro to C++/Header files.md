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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDV3YRTK%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgBorqyun40FhI7tNbX%2BTtRXEx4e6XpsSr9kPtXy%2BuAAiBFj1wgzNOO6KZXVR80fgrvNn6YrzN6x%2BDFs%2BkAzVmdsSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMMKu4nDrfN9T3XLl7KtwDKy%2BRXCrSj90FlbxdneHXW0tdk5PpGJEmMHKWxLbHx06QYiOJW2eZxyntQSdTRs6RoHgipt0pami8r%2FIU9Rt%2BXgllTdvu%2FjcOOUvM8ZhOgRrQqvG9aEkt%2BXtdCrVreN2ZA%2FJ9b8AfvIRftvu88BIg3Xh4gEIdQ%2BPDh8hKSTE1ga7jd5kMyfcoqYyEEGVducJDYZuTTtAujW3D8pNBM5HabicfggtKZIOxcA1U%2BxGwqKc1%2BlWJQtaDHnlHg8R%2Fhx8Anrjbeqhb%2FdmYLqvLu1ODB8wBA7267PTQdjY8n%2BdvH1%2FDE5VmsKOO%2BOFlW4nKPjsGylF0bBIE2lxT64ymqtfpQFH5DjI1iOHac4qA85HFhFhpDqfl%2Few90ih68O5qxjYbztfhMbSkWr2h6LQ2DfLT922QzqRAedq7guXx9cv7JxmP40xOszJOcH20xeXMJSzVVTXK5N3%2F03LK7n13Pk4PXKg%2BrelkIL9EmzXUClCAbcieVMpesgudk0MYQmYVxYf5oZCfq1qBYTLG77LC%2BAuekGAOAGiIpq6ZAeGhM8cy%2FdtVvE7EUA4hmiWbQSVZrk5UgnoZJuyBd18%2F0mPH5M92aSSYAEu0QwGCIXwnbxbECklX2NW7DsZhw9qUFEEwyPrT0AY6pgE3kgTnLqNCUbxsxJQU1czz5obpLX%2BAYe8C33tnmCzCMXRrK3bGXocjR2%2BN77d74wU%2BTAH6Ynuh9Iujkx2m0%2FT0Zb7npNg48GM3toTQSlrBt4TFqxqVHlEMgV9IxL1SOvaSLWU%2BwHUEn3zgw7aed%2BFlUYY%2FyD6ON94iAd9ILgi8xO7%2BaEywrjKi%2BDNZXB7%2F%2BvEtHG6zIBhED6pJVDC9F1p5L%2BoR0S9D&X-Amz-Signature=49f89b82d4298503afbeace9b47960561b61bfda2020c152d0967c28440cb57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
