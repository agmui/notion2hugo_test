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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RIWUTIO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0jARvNMlVMWAfvvh0HxFn1rzwFdVOQIAZGAx2ap7QSAiAeBJ3PWs480wmtnr6EkWqrY3vqcI8nOYM2alu1XEUZsCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1jmgzUTx8pnRXZJuKtwDOcNR6btkCbu5J4Bhy9Gso9XsoCIpFHfCDvteld9bLb7oQXLjlpNVOZb4ixNQ6EP7QigPbJmmfuLK%2FNcCmA1UMF8a0RE4JkK2GYptmJyYZNjEs0KqEcS%2B9rUjDFFhCiEcXr1Zjh85BEOhSLKPCuU03tmQ3NilI1fGpF2STCSlkQUfoV1BfHyV%2FBx9KLWUQCXUitxLvIAWof7lGJCW%2FKSxHXQ%2FsgNkxeM27ZaIG27JiMwMOQcMn2cibVElMhY1HfH02axa7ZK8LX%2FV9sk8JVO91qI5K%2FDRPQ7uo99W0%2FD9lqmOz31eMLzKmgO%2Fi7v7URd%2FiXS9LcAri3TdtT9MSQPEIY8Y%2B36c3rJyLIfxMXHLtUJe2HG6vY8MJYEqhNbKmciWcZgQUCnmcJhK93gm8VJG%2BFSkzg4ulcIvHKnk%2FfOFUbTyrkrNaB%2F5NaYl6RtqzYhKqlMHX7bLW4eRokmLMXjb5KJGEcWOmNTyREIfTtY%2FyxGAmFVLryE5YUr8nVfCXyaG%2BL6beHltUKoGGnGMvyihIYSfEQh8G41bJvkS5P3SpIvNfBcDUh87BHx4F32%2FicOjJXxqESGoNTwqotbu45pzv9uTwxFeNdJukQ%2Fu29QWbKaEq6W7qu%2F5RXO7g%2BIw2qP7wgY6pgE3LoODq0yzSvcdCLOuKKBEha8lZG1sMFwzPyyaOFUlhO%2FteDAYlgYi8ybc8e4Kkln6NFjWMkJohF7BT1vfHbxiFyLXvZDb7zeWHLpOo%2BPHRb7cvmE5N5mJycopq6HAUo1i3QYaz1RziS3MDcO%2FM5D6rbyJnlTgPLAlXBsc5GHvNkDxvYG4r1bYJnL2nUh9I06SngF6G%2Fue95BxxNZ5KP%2FgchEM3E8%2B&X-Amz-Signature=6a6774ec5983e30176a2c1aeef01ec77aec4f3982fe63f6fe1fc886594fe978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
