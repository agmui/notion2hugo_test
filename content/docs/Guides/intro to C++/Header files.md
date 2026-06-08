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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VGYGFP%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKEDriEQKPFSJ%2BpaoJnAGtBYksgmPv7Na5MlyDByd4gwIhALxJKouUD8hI2ucVHxFtWrzjuZ9PMsFWRZHB5xKS8lPqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywCJA%2FvuAeTAqCQXEq3AMCD2yGJJAun1Y0Th1BbtUD4lABuN%2B%2B%2FHWVUnTDqeF2h2yg%2Fo5lng77YzBKGoiP0Htd%2B66GVckbCY95czcFt%2FLfm3njEuM50qREUKfVHx4bpkpOZKVnFb1YGFkHvld4NPxGcmKbVlsN3fKmyUZJkD702tKmdOq%2BnIpty6JCjxdr5lhvLBNZ7qWno5agV6i3bsdCKgE5DvdTm2hQ%2FJ7gMlz337ypM41ZamITG1%2F60t8wP1GvQODG5GjskwBCVqog4MBDwf4dkRJQOYGHKb61cJii9Fb5f5VmZbEf2oOUW2ReiBZKO4vE09IQ%2ByfOLOgjkPwMF8QdrDPX%2Bm9829gFVsuGjo%2F1aXVIiyqtzvkFe4J4o9KBwqSE7IeRnXI04ZKP5Sy5K3hoIIz2RYyYY4HG4lHnxQhve2sgk4nCDKjikzRSGxxfOuK8MYb2hYhSQwGjXI3rRLHlr5f%2BdnIz%2FpraCBmuFd5bH6vovAuY%2BGArWJ1D3Jzt6V2bAeN8wmJZq1bN9aPQxG7Fwnk4w9%2BKlLkSWHDzntIkh6ZBuoxGYlcaom7%2FMKXxLqbMpTFf7bMcxWqbMq3k4c80pqFkXjYHVKlSDrPWrH6ftLxC%2BYn%2F%2BR4bcC%2BUbqWN0I69bb46KBSiOjDJwZjRBjqkATuetB3kAB2iy2e0ORx%2FveNymV%2FKCNCPYeLJnwFYyG5F25XiNnZQjKwRtI%2BAsiQMt%2BSY0T5LxIBFOsCxAhxWfgRdgzi6k1gInD8YCMq26FtJR0ssJPCSySE0SN5E7txHLJ8uwpwpldUwDfRDJdGJmVN%2B3UiBGkEHEMbYeG9ve%2BipaH4nWb1NzUNXQZM67EFNHBqHBhcoOwpGbqMuN4CG%2F2QDkEao&X-Amz-Signature=3e95a9c6764f3bf750ed090742665cf633f180452f789eb9850c2c68314636b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
