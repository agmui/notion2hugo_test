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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIQOTVJ%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHDnw1GRd19fv0Azt5Nf4YHFqoHoKTIwUazP%2B0cCkY9BAiBqby3YoY7wA%2BPCkcl5YrAVs3%2BfXfm1IrlbjKmI%2FAyemyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9CCWIiDT2yu9TU0KtwDZvY3FWjrhP4cWgHSZf5nTSmoTsqqgM%2FUtCvAA4sEG2rQz0JMBeZUWruH6MQ2%2FPIQUG5XTvDcpXvtXmmkTUfIwXDankgTUJ3rXcAuhfx0OXMHJnQhfA3Yqwpkt06y%2F5FCnmGcc5NAwWhZM9Zc3pZ776oTXd8hABMf0pNoIa1PXxjN1PaL0dAe%2FH5OiLEeRH0kAsZBQVpYWNHb6iZqaC8sIArVIFqoOroT5HJewe8SY3IvwRaMVjw7SwOfXh1IAcj%2FHNQM5eevKwFgpxDqiCX%2BTKcRxS40Gxz9s37X8E3Hc9BLg9usU3M5G78%2BCOuete7H7dlR17eZpbm1Tq3fUOPXWeMNlUw0LGTAT7S5RajpWsAvFbi7ISBDsgky65Lgzt%2BzIVhLpOn3pLwmTw4ReR4EaP8rl7pZfTuwiUjkSzafkSJBGgoiN1xtEg5KQHkhA1W%2F49512sn0UtFP8v1U%2Fo2B9E3aX7hfnPZQJ7i2wd9JdBiYJzuaHJc7NMZA%2FqhkJyQidNvHiXVtkVWzMO58pg3PvU%2BlhABAyl7oWnlhDHiIy%2BdKdJPaaVNhaUihReyBA2lbJv0jMz58yAFUj3gr3Iak%2FzuqTMVoByf2hmSX0jCuUAo9TwOwJNoJQVs7Usow3uyWzgY6pgHbuNmGd%2FuP9J882uw9PJ2xILUiTdIdwMI7Dcfoi1Fi9VkGJyqZo8uYhcj9c60jSoh1poI6qOx%2BOyyo1CuIJxDdmdd3%2F43Ul1OxeCETKPJFY4i1YP1apz3fIGtNmKB4m%2BHoV%2BnItRHu1KZS4MTS7wYYMIZiOEXpX7dMXNX30eaxVj2%2FvgiH2AA92UKohXETysHVdQY6NIdAD%2F13O0b2kXrOBh6wcQBl&X-Amz-Signature=c95cc38bce1c5168a93826955ce80a74dcf273715df950a7ae03a81aa53fa235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
