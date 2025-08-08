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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEOFLHZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCbonva9WrD5aEcKIHi6Ib2LhDftMCa8EvQGitznp4L8wIhAPc6uC7GkoGnHXMSLSf9KyDrJVoWGL1WAfepS%2F19FuoKKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw03ZalgTwqV%2Bd%2BDnMq3ANLLTNxxOUS16yZI7pInsH33j8ilhpIH5rv9CtLK5RBO1DqLjjT9HexS7Wpoq80YEqTi1Q7xLWw0IszvZXRlY0lbOK3M1xyNhihR7tiQalP19RmN7vRzPbl9wXO0yXPzU%2BCD8YYFqIa%2F05yKx9dv4mZk8VdSdXOplOOwAXHBYN%2BSlx3EPxeKxdgHloy6ZoxmgSmqG44ENEVIQRIIizKYt3hEOO9g%2BvKY2hEgtyWDoqiomzGiOLbunbyJG3d14Juy9wjAafjKi8UOJKIRop6Q54G8NBlTysgXt7L2YYfNlsLKIiXxCVahpl09LnJrAp%2BuErbDvXAnvDMvr9z%2BJAygSxRZ0tpR2hmif%2B2fT5MEp7lN2A%2BUJNVg8KsDn9W3PAfAgipg6LZyIwtMZUYDwPHlKyGMWEZ8VvTCN9IOzJitjhOR7sGQbRU6qcja6FaPvI%2BvU%2BvAk%2BZnsOtYvBCgtl01hM6e4xd4%2B4SBgnzQTGCklh%2Bn1kGVVxRUTnZNEogeqmO3m%2BWgtJvbE0Z3qpssB96TM8cNwmSlUMIu18UhI1K3YxgSrMnCQc0oZNM0PVAKjGSn%2FOjxm2zsGB4xuACsoGX%2B%2BqUQ7f4taJJS6b7fx7ITOvDqxKeljOUFk0wQ1o6rjDo%2BtXEBjqkAXW16enOAoPHYJKhdWhZStuBm5i8QVRLNtkXTtexyEz1brtvNMRqrQcl1cbBHnmks6q8XzvbRkJXHsriZFdA0SVAFj%2F0pOJq0ZKYy3aDcHAuOFrZ0zurd4hej7ASIK3s6xemEq8yClS2FkMXKwr1pcIDUqgHtsGPvLELvjBh3JBXm2PKSjhna52uMNozOS4GwAZFSjNAr%2BL3uwr8tTDUaj91gvqG&X-Amz-Signature=4a5dbdcb0850f673c58221fd78186f122a13be698440a2f2fc41c7daa8656c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
