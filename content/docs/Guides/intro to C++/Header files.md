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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646N7MVSL%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuEfCFyxlss%2B0SKsQvsjtCWbBvvDdnVTTIQ9BeInN%2BvgIgaqwKMKTsYOCXfwicxS9K5vPBW4Af1tVBrutKO3XHB%2BMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1xAkAkMxGgLGYVDCrcAxVV2kuJOCcu9Iuvvn6%2BxeO%2BgX%2FXqxekdZGIEaQOnbvsEUnJTATY6n6%2BCMD7zgBBWUS%2Bjd%2FrEz7FiIB8M2pnVBpixoynnJluK0fjJz%2BVzTJ5rRd%2BaWC55PfvuYmHCLfyQ3wdCi1HCEWWquS1N1MFFGrBQ2VOku0cVuZNR0HPV8J5ZQcFvXcasfsfYmASc94mF6canPpIxgyI%2BRcFz1KBdO0R0UH%2B1RsttLMJO9%2BgPO55I77tLMeruoisJIAzXXWMlKc2GTbe%2FbCkIAZbDF5OeIqB5wXXJ2rZj%2F8rJUBGHbAPR6DHYkvZd2n9nF6n7LwaXn87Day7paKrIq%2BtniKYGVTKOOkFurnyUNAnFee1ysKqmKQfG3NcdKM7Oo1J3KvNpEmFWIrHh%2B3Fe9ZQY5bniQR%2FUZjWF8Ull9dPY2z7TrsWD53h9ldQf7Ty5NZ6que1n7pmWfuHt%2BZw2lNa4nZ50Jdk1Azz6jxqTZM1yf9g2koLH3LHhURAKfaEdIx5D6m42RIdNz3F5VlIVOxVz5fg5icz1oN9knhmQVi3Hq6CJkcyrQlC565jfctKK5S%2BX9XmEh34t4JZMvBZGUhvHRD2ezTyLTdvabVOJe3g2Lngk0Y0PY5pU%2FwXFPIlTmUvMJ6GntEGOqUBMkOEN4N%2FE1VROmAfk5TAV3m8XouEdJX18%2BBpAqzBER3%2F9w33Qke5y1Y9hVFJ8e5h88f8u9in5B75IBjLQLrvpjXjbmF95upzPusI0JIQXOvPhGi7fJxpcmXHwYKmPCqbX3P0ehGxwUvPt8ZTK3%2FsROrbHQ7sWgRJuTGP2WIXuiAk8yyLsSl5LY04DdjSUm8xNatSZuEw0BzIGd5CFVVjEgpHpYAZ&X-Amz-Signature=fd17f78d9e88c69509896f1a51afe54e930fc28ae3a96c5ec25886ca80bd3244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
