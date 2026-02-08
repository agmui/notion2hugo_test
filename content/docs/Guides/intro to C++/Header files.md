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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4UZSI6%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9oYQW6NG8wf8z9lZCBeAfO%2F5H2%2BxO3E%2BuQkQcqToCZQIgeX42SZj9nBEOIHPb6VfQkf0TYTzEnSUXuWEt26rc5W4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDErVamNvUp7zj33K2CrcAyekH8o%2Bc0Ixg%2FIm6K7A%2Fivywa7vpiRvcAWiMYts7%2FyXWvdX6IaA1OnGNXJKUrvTv4tvDqaBjiGjIJvqU%2BO%2Blx12JEPZ%2F%2FkiSiI6mKfanZk5T2FbVWnYslgqM372GZKFYJkG%2FVWDcu3%2FX0g6c12B9nxmqiFBIU4iTUsUJcv1KER7wZyC14zWQ9vmPeSgX6LvgF1nY6l8oW3bn361dHtyEw1QP4EznITFN5JU6ZrNch6AGp7GBFxKnABDsmh%2BVFdfG5i4PiFHsQrN%2F6aazHxlIs4T8NR0a%2BNA4pDG%2FPThGMgtwGMZAGAuar39WVs%2BlTYD0U37tNgtZS%2BvyGR2JoC6rODRGwx3zGam33rvaYQQtAD2FAGNohdahiJAw0PZnzlJdIRLpLf2vfMyA5QhZghV8gQq86PTEwGkNMHTsQNWYDM4epJPonGQBZKcW%2B84kOsNknTjBcbXa%2FHrdxTxrxI2J74C7EAG6KUHWUhenAXbbUJ4GHLuhmWO%2B9N0FIXbdt0MuY6OtTkg84VbzRGgjEeDcB2KPkZMqgzNsLuSUjIacgZoYZk9SXTc0BU%2F8xwwfFYPE2k7WL2qTh%2B6prFrUiMOLFU%2FPVU7%2BdT%2BmzzkEqh2HpRxH1vhmrWSErjRwd3FMJXqn8wGOqUBclcujRzlidJLFfYJE79598XcOir9KbWetWYBuNBA7rWQRAsSIviJ%2BQPLupJTUr5N3CUUfI4jBSbSPCAcoYsZrFEu7W7B9DlQAwfS9QAODCA412EuResaW71vHFXRU%2FnWt2qWI%2Fa51n5w6fNcx%2BsD23%2FNqu%2FH2%2B%2B1QdVYfhopUwv54VDl0xniPkSg5Wt2YXnevQWheB9FwrsYeUE84c%2FIPviI7Lcq&X-Amz-Signature=b6ffd44212319d8a9d0b79ea5a423ab72fe3946ad5819ba3ca6dad22f4bfffd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
