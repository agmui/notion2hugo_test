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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYA7GZ3B%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7sTnW4OD%2FUSGdoE46y5C5wkzXXc5fcvoNY6D3XBgvJAIhANsfxrJu2Os0Dp9uFsHRznIuIudgrC0INt1hBcoG9qK%2BKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUveMBJnmUDGNhALAq3APKX5cWqZUCIBFIldhOrkLwaKs465DoKLYpL3RY55b1SmKZaJ3kzHuE4EuY9lI%2FV7DYD%2FPwNCn5NlDrsiMGDL4FeyYSZ27cIy%2BFgF5a8PO8eohWZMwq1U1UNeR36waj6XSw%2BASX%2BvJeTNHfvRn%2BfBLw%2F3JiEi7ZeZoiHdZKK1q%2F0FC7TT%2FUyaH%2Bx2zCyfCAIBTOtQkljrZOTPzkqXYVmVRnx8s3QvhziUWzgAepD9yKeGWr8db17DAW4W6Qt3Vc%2F5yEtb50z%2BUnt8L4jjHO4enrxaVsIqmJTm3IluPtLLuh96xM%2Ff2J2dmzHkOVpwWHNVV1RJDVe722%2FStf0PUOG2TF%2B7eDqvx5RmkuIyMv0bQK3yoRI3f9gaj7Q7OelbuSuZ5P7oWHcGs9ZxzhyF9iQXybezVikpZF4nb53odj%2FOyUh5Ij7jT12XJsuTXlqlxdu55411YuZHT9jKnbrl2HaQ3Jp8KGtlTktnV5FdaNh%2Budk70cWgJe44VO4X0z246cOsxZMbLlK%2BlpPvL28FQSle5hTmkC193BvIuzVI4yHfac2PjA0vMiaAagtIgbRycty0TPRWyUmc%2FOOPpG%2Bt%2FFStqTPmmc%2BDEWeLJSc4uHvj%2FdHz1XyZ7QR9h3caJIkjDJnZLDBjqkAWmjJVnUDMby3B7T67q1pgteyaBwiqpu8vxfIZG5RUO2AlUgvwH17D51FoVaaR8PAokSc3NfvUdAgnfednw2UD2M0DRk%2BjtUsqMr6Uph7%2FafruRHCrPSy8suGuyjKzIpAO%2BnyT5cDzKoHbQZGrk48z1CyJvB8DK0zYPS2nmST79hZ3fPQGuei729l3YiqdL0MoNMhOGo9KdT0NbD2BBqUqhHBCvm&X-Amz-Signature=0fb1a597757979297550c95f7494859ced8fecd9cdd4a828e1e9fe7a402dbfa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
