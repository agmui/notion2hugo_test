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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCLDSRVI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8nHspf8HxyczxFIFfI7rEBFIq4nY0XiVNGlaKxvMrXgIhAJOi4s%2Fs6UNaEf095W95pgvpbB5HHwr%2BGgRhs4y9nBbyKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj0okg0eKcLfIU16Aq3ANW%2BfzKmhmupL9LpKV4FQ4E%2BKIKZNVKZsRnKHtiOYl7cvrJdgnNb5AGMLPYsTX%2FuEZc3k1oDOUdr3hjNqWjzsw1oZr%2F0XnImI21ZZ%2FQm393PWVeajUcEPdDQB%2FAyeOvXsUVDitLrtbYneGwRn3O0O6qbxC3G%2B5VIJCLcrEq9AZVdoTBGyhnKeZ3AwZwlK82GxPBnL7QN4WpIDk9jmUJCfCpje6ZHmJo2vch1Fhq5Dex0iTl0C1fzbaoCvJXXJ7zau6k7wHTOJN4rmc2og3c0MBKrm1qDOMXD6q2ENVeDzPP3XXOdYpA0SqHpSWb27eO42XCkFAmjMwBAsNKNR4MBr0zPMSu2bbonwoMbSpKqqsIg6oE9w1GYX238eD0fH0fTKOAMkeA1Js3QvLSixybptuoMBNJCKfxN6ChJlCS7Oo43n6Kmj%2FskcGknc6SGj1VIsLncMsMkJCl6Fw3gYInSQcKKtiuop1dSLTG1wdPftdzyE9Ro7O0eVVCMkgZHgevZz4sB%2B4mwr0n%2FpJEWQ7zLSIi3ty2Qy%2BNMElIDjyKrj%2B6PPyGi7zuX9y7rEoUVMVRbhrUxStzrCwPLy6S%2BlQqn4cArxcGHTLjvpOwbiaxVB6NN2RdCmWgg3dAcifPkzDkg%2BvBBjqkATYdipXXKQAm1k0aceLMp5NB8qAWB4yJmdHEW36amk2KtOT1QX4ICOrvflapLJRoZUfeZuH4d6%2BA9N0qH1%2BD2FPTuXUMnA4xI4wTw1x4QCg3h1VO%2BZQtB61NxIrL6pUXlQQfDeL8UxImKnM1DcqfdeRqZzAzRuZBehoKTob5Z7cS3K%2BqNPyiJVKHdxtu0HInx0qJ3zgQ19HR7iQoxHPs%2BGckGO9B&X-Amz-Signature=9d74c4ffa8075acf76b18b0a272c521e4e93fc6a06a258023bf795182e3d4c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
