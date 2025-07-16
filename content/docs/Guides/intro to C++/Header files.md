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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MOGHEZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCfjhdESrff4jPPMud4iQtGtRPhTkS9zAasApPpUIzgPwIhAJQqS8m613oXnO49uUerhgcWPq%2BYQqObqKmybXGSBpuxKv8DCGQQABoMNjM3NDIzMTgzODA1IgzftIBE4yNJndiJsgcq3ANqulY1Tn9T3qGr%2FF34OPlbSy6D7xW7IGwmgk0WK9GRan3otlGluhd6BHlf7OGsl7%2Flfff5P4E2KSASSqSjucv8lHCF53DMrHNqCzGTwC%2Bcxcq9lInWyIMTwb0GJ0yzI4Hty3fdtFlNOA6NJrqUBVO7yeuVkfiBmTYfZhgD%2B5drpmPrnwd0mhkbMo08SLWAKvPIFuGGDhsSivzc9XQwwvToCK48FykXCRRuivSScCb8Of00bzeBtmpI7dlJ%2FIs4zL7kVh9xOCPNw4MXJ5jfNfw5SXPmHudkCaIwOQ8UaZdz2lwtA9BIlF0wNYoCOLVO7TnZezvaB8y1Q00N4TCHQ2t4PGivkfRhci7%2FYuE3etST4JovzMyA09qus5qVL5RLvHvWPHOK%2FZ5fb3%2BK7d8OklcLC%2FLpHVSOWJiCqYI7ubLpaAsTmYqFz6Td90wO8tQUrtfWB%2BS865wjSJ5%2FmtRPgt2nJfSkqNuEUNy5BuwtMwttXpPgW2bIG4APstASlOP8%2BPLIYhV%2BT2kEh%2B6nZPPVmFwRWil5GOi7PxJnLMkOoX1fipvvf8lx2m1HE37lycf5rEywaVv4fKG8aeN0jctiBcijXu0Jpbk4FKiLOGYr9cSzI7CeqcDv4YSHeVhD6jD34N%2FDBjqkATqTmcGOqxn1%2B8%2FeE%2BSIq45aKo1D%2FKhOVzeZKQij2lehIWdjCCEBLObG9H2fufBEP52A%2FeT%2FdXWP4evxsb4BOvHU3WvNf084NPa6o5tEOeQ2Bq9o5Rk6g3%2Be%2FEE8hZqhps2PyGlINJM8YYWm8auK6kb6fbyPl5lXsAvfeJmDU7uR1Ap8oBxXHp49mxOELHi6n6TLYMX4gGaiq1Um%2B4fWIxDMNSia&X-Amz-Signature=990fdcd0205aeb13c74c2e32f4bfa1409e7677d06a9be9f7ee3f61626da283ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
