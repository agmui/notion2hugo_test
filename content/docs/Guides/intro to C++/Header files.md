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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AFG2JOV%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFvJ73NFxtFk1JkKx7Vx28St2Nw5NP8R1dcfC%2BEnCHQIgHl%2BJvwb4wzuWYW%2Fr21Ph3DFOSOjByK9qWHJ%2BlcQDZWEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJwOlQU0fftnkK516ircA0yWBn3SQuZhNXbv8O4hM3v5BOyiyH%2FairwkvkX2pxGH81qCaKlz9DABgVD0mLDhEp0jXM3vV2zvt48FpreYn14uXpQV7AyY6jqkpH20cRHZhOo5lmJm99Jct1FmIzUQlLV7ED8AKiLZXxD%2Bb6ukP0%2FBHFX19vb3aYf1yn5UBhEmhzcrG2282y1ZYvEkSpA7EZN9GGmrgXK3qpKh8qzaj5DuaLN%2FtILPCtVtJgrF2Z%2BWP2RyfFQywHi7%2Bn9Oj2wFFy7HeLihcKQZvBwBVi8mbv%2BVmIsh%2FL9H%2FiEqXrFfsklc4J2xa3xUMky0tdmrE6w5nejrTkAjPjIz0s4E5txWAJaawf%2BKlFBhe13v2OnocxWnqQLnF408SJBZQZtDijQjZv1p%2BAmZdpTyjmIJqeW9hZABd2ZCrZe9cn1Plf9W17rMW8NKXy8tMwsWs5MYJclDWLpRWA50t3e2OwC96P%2FSjTdhYJLGUvOLqOtsFANwPALR0vSV6Y0ro3gkNKrtyRyaZCMgPJ8sbszvQvuElCwSHO3HZKy37s0uSxhlf%2FHvIkD6g9nEOuHovfk0a2OxfUBlrwgfWyiOdizj4ma8OzO4Cki%2FF%2FYCn%2Bcg5L4EzqX7llsYKuLF6PnYtMmzkho2MOux7MAGOqUBREHTLXg4yBcqPmKxKbV3b83XyKVCviD6XboGTYP3AXTHMf898P4cV0XOn7Z7KV4nJDPtO3b4mQR2dISaLxPnydSYH1MX3kkS8KjnQ8uPHGpQLPpOsgwSorqUjFibkFZFDC8Om4Q8diNu4HA4oql3kzurmzTqN8xjfZ936D44SEtroklyr1eaWZJclUEH%2BM5n5AVq2O%2FpQoxGNka07O7lELlAklT4&X-Amz-Signature=ba3815c2a75888b0ec61e2ef3ca04c133bc0e4de70ed2edd63d6943f1d172580&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
