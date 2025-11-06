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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7ZDWGKF%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdUu0itcozeRvHZ623NXhhftCe7%2B4UH80vm65hBTYE5AiBhiN%2FljLeWmwax0EtVzBJnl7SorNclSZ23stUP8FS0DCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFgHZFML2w4L%2BJCT%2BKtwDrWz5Gghg7n%2BFGNaOWciLBjLkZWnbagJhC3%2BQY5dpt5E6egfjAUN%2FW7yd6yVTY2hHqL97LLxkTgl%2Fpwg7D18sfXK%2BbJv3d8j9RbkbCiUpMDY%2BOuvAD29Jboq1KEqIidPVJEvHtQIm1sJuhTzNi08cNNpoZ06dNK%2ByHBNyNIvu6Zj1TPAzExRuZBGaEmv54aLEFC5O%2F%2F6UwE6fzD5ce3eqHuayT1vrcmeV%2BDtZFFUcu90tOk%2BeSjeg5S7uplBiwpP4EwNKvvE%2BndCh%2FzVgu%2FkECt95YBdgcIk5oqEQrFMiSNkb0SKTkt0pRC34f2Cyq6iwge8xlwFnKGoYhwXTpW358lZEJ27q03pz%2FbQdwWoWET%2F5IAO7VKG3rRMFfCOyqDUl147KgC53n6wINRSi5EJSir1d2tkfK3vlSQJCbXkzCKtyOYVvQSD44YfHoUt%2BmrgxPItSHp%2Bse2Tra28t9HeCE%2FA%2BmmnJGS7g9CBdmVcs4kDRkCmidRiLZ7eoIRz8V%2BgWmf3AIsonVw%2BnNPu1qg9OEHVGY%2BPPKGm4ZRqiTP4S%2FDIwd3%2F8wW5VvdM2lfvHwNg8jgn3mJZJnOF7KcqUUniaJu0CCnRPuAwPLwXR0O%2F33t%2F1mJ4fmuX88vTVKEYwsvKvyAY6pgExRSfRNu5X8Q3MO%2FX%2Fk3zLMVYDxI0UyICd4qalYyTMxj7VaA9n68fyU7%2BGNuZCnWCvEITI2jom1NMhnV%2FN9b7D9aSE6w1mlrORg1swsc%2BTnnSYesBMxQdNtu3zh1YL2rA%2FR2PEbMEEy1iVQg6hk%2B%2F2VJnrVuRhbVKSfwTW5xW2%2BJjO8tUolrZ6kH%2BE%2Bs6v%2FjxwC%2FGw9t2Pcy5QhL9eMMcgjEHOkbDr&X-Amz-Signature=5141a09dd799a4e0bb25d5f22f61472de1e75be4b8210e3a8cff924b8361eafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
