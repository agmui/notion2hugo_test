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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TLHXUJI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBP0GRGiPOtP%2FnEE0mOvihqjdpDR1KUU6%2Baow4Gwf2SBAiEArHraUe%2Bl4dmkfgvkMh4%2BFAXnaGP%2BEz3bHUMYNapF5cUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDED9qHo5keaFmdfO2SrcA7meDvvhkwxsIHcefna2C0i9NXD2K%2F6uoiqmvF2LrlnqEWpYKGE7ked7R311RM3xqbbyIB7E%2FTND86DfCLZUURbWT4cATvb70G7ye4DpbWIpVMw2VYPPSmzLw9s79OV%2BbpLg6t5nX6DL%2BDRtPC48HeIH1S%2Bpj4xtW8V%2FKVvSiwl0S48qW7SywTOi7xpgnmTi3H59mHtsGa2Fx448kGDnbdkU9P1QhPfVW%2BkscVxoQnBl3EscXcuf8kFvG4atZAAGDMMsb9vcnSVlj3wBSoR2os0NE9JU5LpqlT6DV0LD4io5HfRhPdAWbaiEWma%2Fr6yRlHmrA6T5tgjI9GMtYvqTccdvOnGUWiA2g65G1FKlbxilIQ8L1GZGbQiPaoxR0pUuoGq%2BE7p6pmjWY2hSgTXbJQ9t8tis0e4ddv0HUByc%2FM7wEliXMWHBzW3Cy9WSJugCuqsIbi%2FP3ogD5VIRzsUr3rVxKzsxgsLb0MDFNkFd11Vq5AJkQTFsCsfMKKDkUJ%2F6KM6Aob%2BZtUXpyFHz2p3W41UnwFYPyMds%2FbbK7xcZ549cCn%2BNJDtc8qOzZSZwqLnKunyx0xIjJ2hzguBKK%2Bte8aDBmKdMKoSaM13DWZTtY5OXhn73xGgAEhz1RdcyMOLu7NEGOqUB8%2FjTtc0uu5AtEbDs1DFgU0Q3Gdy0BXIGCFNardL9KifHh5MJap6xfG2vzvuESHACRUya%2Bbb7v4QUHAfwww6hJWIlidd7pdlKZjH7HX3UIPIxVrQGVE534dI%2FC0U%2FoOW9HI0LEOOv4dskrLMOb0iTfxAbSzq37yeMExQJW1qDKCDODRpSbb3oum9rhVG14gi5d5cW1TOwbD3M97cZ%2BJ5%2FrEijYyMJ&X-Amz-Signature=51ec494902ebc7e405073c0b24a9581f8d0685cec1fcb88905f2e0dccc6468ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
