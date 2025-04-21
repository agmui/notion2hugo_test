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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7INILY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGhfXxZRkED9ZaHxQeTadjINcTUKnVC8J1Q5UfcuAnuCAiBjyXK%2FUfJ5H1z1FGxu2iB4rMft7pBxYjCGrFsnPExhWCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkdB%2BGlbPoNfsDGPfKtwDqcYj2XZucIicz21JqDK9SgvqF2soa6NwApgeUsHlsAJye9jwh%2BwMqno7NcCnOgV7Cnu80Knw272XoKN9RV8vVglUCyTEq%2FuAjgHeBxnzP%2FnO9Xr%2F4F3sfRd3FMWe4tKiO3GqmE5gtWhj1ZJGZ5%2FjCcLhnpJR4lUIvXn%2BECivu6%2FKALjzz9K0Yu5vn8Od1aNPg6m9lFQ3Tsq0LaUUbuklmAPTbh1NrpG3MvOK%2FgLTP8ZQu3jLDpFV2siXf8O%2FpVmk4HjggQE9OmUcS%2BpvwlyfieqwkkOYIQuktjR7JsrEo3upOLjHKgwNSUj6HHkIOvTYBfano8tJLh0pYicklBZq2tKZkLsM88a5qhQ48TOl8xIHhcgu9Lo3JXrmI6B7Ii2Zm7HQGM%2FVKvbbusF%2BXpFqBONYBChlG4Xj5CwZvHXw2gJbGEBR5UqBxGUxzuJ7XmvlQGhNsE93ru7FlDRlgqZ00JIJgMZAr8q6YC3qcpzo4gj514JrGwZ7bt0uUpO5jxXAyeM4NmER47lUeX6ysdD7UDi%2FuI3oxa01ezt66zTooNxQ8O0afuMXZbKWlF3%2FI4YVdMetyNs3cLA8yjJwbfqnfWhOOtj%2FKdyXRXLhyCB7JkRESaNchRqvh96wM2wwt4ebwAY6pgEFPWpmkmPP%2FcgIhq7P4QPNLaj8tddM%2BevAwPDyERU8d1MNnd3K9VRi0Oy4AKElI4MdqI8lPlXxgSDkMsEYCPi0k4Wq4xXZyURBYWQ0Zp2W0B0YVIFUMPeQ9C2NoSLA3i4zK3pT%2F0ijlZ7Xt9cCJFt1HSs%2BP22uqDYcTyQMreAzbthBx7dRomQjdTa4B74SbtmRzsUj2%2B4CEsgrWUzwogyRwnoYPH2d&X-Amz-Signature=49d56afd83e9d8b24f659c134eac7d751ff1bd476e6e205603970d479c6bdcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
