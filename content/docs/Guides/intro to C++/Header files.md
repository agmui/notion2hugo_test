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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHYK7BU%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCUkFprLRHTThDc6Vclu%2F8MnjHjz%2FGI3okqpHbSms3qFQIgHZDE7c4CohGEt1pb8h5a2QD22UcSqt77%2F9%2BCX8HDxMcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqRr%2Ftg21ZHJQsd5ircA%2BIK2gMmX5%2FtBwAWYEa%2FCLmddvNnq9Sq%2FZaHp%2FBfkQUMgI1NN4cF%2BA1z2jHqfCavhFPDe%2BDeeWYSDlRJOVj3n4diJmaxc0ngtlZVkQYbHv4LUNGvUawRDVJ7MqKDxykKpJJUMUdDfdDVMxVxyIgyWDGsde%2BngG7Oep5zY6JtIpBfV6twOw9OrB4qY9gFkXqE2acZL03nf6gGMtKBGiSBAvEqn4xZBLkONd%2BW8wtl%2BPDqy6oBf5bXedDkhj9nlbDyg7NnIuw7VGIdshxRk1%2F%2B0N6CzBSHOzJYqwP44HujOZVn6FZSzV7VfUVn5Xj%2FqqO1pAk3f4TGuakfwTmMHzrIgAFkEgCkashCcSYa3j4cPmwWvT5K5T60s7gokxzOlYBav8tKahFCrp%2F50Upu65mmtc%2FoUuaxqV5gYM0dJLcLCRhUomZZfcaXtyliioRN4%2FWZgJMxXmYZLaQINMHf%2Be0JEDDi5a%2FuEcDzQAdLBTPpCU9SoGlvxL7rC19qTnBLz2IMtxChu%2F6vvMTDuhIqPZCcR7xfHowmtakKagqIgTaXPBAP%2FqQmUZTb%2B4k8CBw5UtA3cr%2BUplVjpmbZhnrfKuxUxlQL8JwKfW2oOqcAqitSSNOOQb5cguVhxi0IujKRMJHn3MYGOqUBWtzL9T%2B0oWiLwuyQMkO43BWev2bLcXa8C9w6lijp06IdbTlmLDsGyUbPcjviZJhjaXXbk0MAvLPgsPQsmuWD%2BapMZxzZuMIn9TWSY%2BsCMCEtB9HUu9kl0w15MovK8W4zLHgcjXbALJqAOZTkmphFkAzBE0xtgkB2pzIWC8dNq49YrvbKilrHyLF9nLn1lSEA0VArb7vouvEKC%2F2TXliTStR%2BDIpS&X-Amz-Signature=286ca2d7425bac4c84f711479640c5413c8707a2aa84cc76914948602fe1b0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
