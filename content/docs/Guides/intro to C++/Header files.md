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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGNB635S%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGovtdciD5cuabj9pITG6oUu7mDia7Sv%2Bnh61XU5fKQIgNU7BpBkxWZxIEHa8taz5R5kn42lw9HNFQeU%2FJArqQb0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMRNRUAzWykh5BsmmyrcA7SRlZmwIgRuX%2BXKC1Soiiv9DIhsqeFtp9AKlI8w8lgM1MzyzDQAu9Za2rkmBpGYD4Hn8k8YXvIt8euBoj0YR5wDUykVESgxz9xVk3ooWLRnYbayevjKPOVVQwGl2zMHvItN13h66e72bDmtiEPdqy%2BR%2FHgXi2RmN3wBa0TESOJdJhExAKCkvXIeaDDwGqLD9dnAxADYf3gHe2mJiBCwJr2TSe7l6JU09S5%2B5bEg8RRGQrnx50v%2BFEKCjSm6gJfvm%2FpkTAf2nfWn9LfUKnBF4pqNUH%2FV2GwM8u2XgSA7azDGJb8gSbXQYAhnrOQ47Gh8Ki6b1OHCtmCZ0Q2XPNOZoBvc5yEt0pY7J0nG90tINn7t7AAY%2BO91b%2BOvJaZAIyJV2DFt77oJcmtfpBtaMuEbuwwwo%2F7hcKvM8d9ULvnaTTkHcQCcn2DsN2OLmYOUkVlmWYUvbpXHEuwV9GRyirngtYDYj1rOoW6IJfD%2FHd9FTyq4Kjh8lOXFfEm7Xmpou7CvOqtbiv1aKYFM3M8l%2F%2BvljLVhiHvpqNZCkBXSSfl%2BFMwu6wrH2mwByumSRMEL6jzgici%2BazJ800gYBK1hSP2W1%2F1KNEQ5NSlqNQOerfsRxqXDXVJw%2F0F4qcE6izLQMMbj8r8GOqUBOTXPZYz5enNdfFossHiM%2Bhs7QUCo9STAhe%2Fl5p97yH9Oj%2FEna7e48q2qWnOlPQj1YqgDjIi9gMQqLQcmcg8A81LILgGUch%2BnaBWST072W6%2FLOUGV14GySDwoZRlMu7JJzZn6TC4ou7yfb0OB1Gem8n%2FtC8LhHA6%2FEFzyadDfscvv85OGtg9dZwBLRHzOzJ1ZO4M4qqRUFYztApAYocGV4iN04G3Z&X-Amz-Signature=da3a7a3dd51c49142194fb55bf3baf20b41f2b80b8bec93e19e60dca2dedc1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
