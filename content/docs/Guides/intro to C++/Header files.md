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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AQBF7M%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0CrR6%2BTeO2zQMYsyJ7MdLF23QIE0oNloocSEaen75DAiEAt2RTq6rRYdisfwOffyWd6CxMZuXNNswNJIQJ1zbbeKcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFRZ9594kUFi9SOXircAwa31nQdBoDbb1yLCSSWeooSbOOUT1P4%2FkpKLqFKIGohtDZR4paizLoPZIayi%2F8Cumjsq5wb1iXn1qYy1o2Hrze6QQkTxtkLa7H8g38n0%2Bib2%2B5w7TUUy7X63yZJTUDOsk9dVuJYAX4%2BOzCkVfnhP8aL7uUIGL%2FnyectBqnItGo9yVy4o%2FunIqlwMrF72muib1hycwpuyXcmwRdoFGQF6D3pUrtbkzL4cE4Q7BxHLzksNZBQnDhzHgjoWq4OnH8UlwpRQWy%2B3MxiKm%2Bi4%2BPDPu9Ef4FcgqBUcTmmfOu35c89kIuO10KWc4eMtK7anA41wcpW6SEWtoJ0SHKEPIoUy%2FVvpQSHr1%2FyQiVL8vL8YC0Q%2B0p%2FGW28EGEqaIXXy8my%2FxsB%2Bub25tnjoTXGHSmt6TetmDQSWov240HaCKxb4LldzMvMprrm48vUUuXongsLCVZIcC8APyyqo%2BAJYjIObcVDiJ3MwswTMIoNcWzwQ7ZLEQtNyqa9M8iQVeCQnGRIQ49%2FV95LLGOy8xoh6SsaFvv8UNeVi3ztP%2FT0QFkwF2BG4rIHCJ055S6hv17i7foDj73QjHcccJ7IqO80XIVbZ4uG5f5HIfmCBtU5rUlxoOMSMNeMyZBkWFvOkZlHMJTh09QGOqUB8hjPyOitCKZYah9cPxBgt%2FDDC3d%2FjUkdjTkKdEcfbBz0c2UPmrirBM40GLaNc%2BLCib98NOz0%2BTDS7d6rheFzc%2Bn%2BovudStkUgvqm5WQxpB3MzmD0X%2BjsxxYnHzJk63y9j8vfH2HeF8Pdp761KdlS1CzdtwYTXO6WDMOFd5mQusk8Qr42PVzVIzai%2FKhTUrUtp7V95YEdj88iw4EkzpWI0%2FoO7QKk&X-Amz-Signature=70a37697c2a4200776ccae8e60cce86236055ab4194bb8596d290196d361bacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
