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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSXAMVE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCID5j1seUTXsX8tT6dprzEVYQn6MVBmTTDoEgNFRc2FarAiEAjydb419IywROyVlyryefMEPyNwvFxGyTLuRmMOj6YeMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDInTO0i%2FSKjRlzCl7yrcA3oopE5MzU8gAgZJQ6okvzekTVyAdx%2BjNxPdlMIei73v0m7bE0BO%2BuBDlWKhu%2BXlMoqGWPcGCtlN0DeEsmYuqAg0f62onhVtEqSDhXdu9u6BdXPK%2FRw7RFuDdJanB5dTmcE8kghN06492hgeEMs0QBEhXG4Q0Ik5rA3moitAgdeU%2FGDG2IfOQ%2F71G6LMR450E0dM586aRteoqE849nlYvRP96ao8ApaKh7rVbvmETJXdKl9ODu28mnFct8ZKT8favmUUYb2inIGK7KzRibG7Thbq8Z49DqCsvylcgXo5eX%2BwMktj5ht45mLTix%2BEWyUikvYXCB%2B9s3t6ldVl9FTN2dO1kgSE6bJ2v%2BqgkYGFMqP2aq4iz5F7c87PXcqLXU0FsA1ZUTNnq%2Bz85vWCEXIInf%2BtFc3%2F0KeKSTeb8eFPf6QZ5sBNuJ2NZwchvwxLA9P28RDlOn8cKl6qM66omq9rDTdtN%2FYHEmxtcH0BQSgWgR4JFCvQmEQl0WccZnVMT%2FTRdHXFNJDfNhKFGwMgl2VqEVDen48k3AP3eESdORjtKne7c3sNePBXi1iVEvi6me2wtM22sEXt4Yy7NOzAcdiFhJSTh%2FZx6l4tP9dTbMuFF5ttEAmDSz6guBumoHZSML2l89AGOqUBffHlV41QNtcYk%2BHt5CzyEZR%2FN3UY%2BzsV1%2FHSJOjFfjE%2BbL7%2Fx2OWcK5Y7XLxpSyiisnXQSTiLJcg%2BFVNK873n3DTioheahxJa3U1Mgu5S39k%2F5pd3JfoPr8UWO7gMFruP4EN9uFJ4S6ZpTY7YN8XRrvodYnRg5u%2BBvCA4WDO3PrwnjDDNB4RUtvQelDOr2N7snDw6zWP5u7rr0PfuNj6CIUQ5Tnh&X-Amz-Signature=5250e1fb95ef0710f2d9f42adddfdc6cdafeded391c20914eca0813570ef7c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
