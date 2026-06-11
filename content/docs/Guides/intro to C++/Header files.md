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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4CZRYYM%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCKDr%2FGe25GVPzblUw%2Bw3mVg38o9ID8hmTrL1%2Fm6%2FQ41QIhAOGO2tMUgXpaKwg938SN%2FSozC9eiuN00ioes0McilQ%2FtKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5oVEZzSM8SIVRHpoq3AMvIwIOWgIhw%2BkebsMFV0z5VMpBIqy0B6g1QcQnf0iOiXimYsoxG%2FOWLBFEew0Q0Sh4o%2FSaJVe%2FqbeNFrbP8ACmrvCRn2VqMKrM0%2BzDuVC9Q4DGG6T5W0EpurAmGHArzFoWBjBD0YeqM7GMtzJcGJw976YsegDpq1AtHoJZPvcDOnTRDY4QeJoDlDJDX46ZslXsrYs0wHoX6p9zB7P4TGy2%2FDc8cjn4ASHZYz%2BCJndZZ0mA2g6hwN2JZv2Fi3l7J1hVJPpg90VUqKEv%2FrKLcPyvu2flO2jMmMD1WcOL5M2KztEnfPRW8Ufv6Hlq%2BXQht0j2FaPg6N1FzmWHqKzO3DtdM8q53%2Bxdy9Tv13S93dOWDhW5O8YzuqbRe62RW9JQGlAPoGoWGTx7QVWoXL3BDtb%2Bu%2BJHLJwhYea%2FLGS13J0fzZDDJqa0JgS4xloVizxERZDVpncKcsnBJPi6eWnzzGw5hn6raTv65HB8hkCvGzj7e8Kg4bEKOIUuUfZEUeuDnjyb6%2FF82NcKGXduexm6P4tOVNGIfOvD%2BzZz%2FhR5xEF91HwLyCYDFY69CA3RXXKXbAIRGREzpJwthP95cS118TfU86ORXPe5rb%2BylJZvt8%2BGPnUVH8E4osDjzAQPHjDnpqjRBjqkAfL78UB2r0y3jzBRFHJJELAnH2cpoLAn%2Fp0aP68FqmLoIMyaVgREV2F1WQVcGFPfezMwgkMMS2p3c1TmY%2BAhCXqAV4XsqyWaGvb9fu6fnJht5YM7kj3ScTh6cQtSKBng02s3m4myUYsUj4oJ8ChsyYkfhwoSrQ6udU7nIVF%2BlMAUZ215iuJ9bWvIU1YLj7oYQDzhIIlbJTM5IDtYs5D6swqv08e3&X-Amz-Signature=98b437db62f3f4c85d9bc718ce9c46e00ec8ed5de2f4fe347d59980608a864b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
