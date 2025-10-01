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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QB55EJ%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIA7H2eSD2pL58MNrLf%2BdcVDMRefdIDMVXgSN9axJuLQaAiEA2cz0snPN%2FSfK2KgVWLwWaWKJvPSEKtoD9R%2F6WDoqibAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWHXoY3D8VZJiDjbCrcA1%2FGOHoiVY4ETDvTW50AG1AI5RYY5CrAowqqDRAIkEVnCoco7OoObnIkt3YAwUQy9wAWW8OJlS8VzWCBbVNfOLov%2FANhJqqxN%2FVDlVhGgMp3F5hhyqcraiXqykAoPrBBc6J0WT5PUv%2Fc5ijZaCbMjXsaD8CZ1RowPFO1B0D0sfiSRRlQXghXycMknQZ%2F8iLAdSJC0TX1OKp4aNvsmEM%2BTssBWfFt%2BiJoGzLnhRMeTEuzICl8MVdZAU7Qgb9NpRhJiN%2BGHvQ3FfhpdlbhTXwOqTfgr%2Ffh%2FcEmQWqfsTBWwgndhd8CekJ3LRRbwcrWpreDlpV57M1a1FoIEe4By9BOU2LEfYfziGBno6Pz2RvEAjwjLwY1EqfPe685qTwkgV48qbZUlYLeAKH0cSO45%2BS2zkhnxMI8rGG8egA4b7BMfA7eOHRbb%2Bztsrm0%2BcBIakdVli%2FlXvOO7jziTw1BsVIb0fsjdhcHYvZ3Bg8VoolKBVKUnA9pIOdrvctNRnzXRLaeh6VGz3FBBgEtVGMb5EiKSUWxKSCc4daO4ReCfGCKrWzrR5lFG7Nrsdphu0avc1g3TF8lwsr7CZV4i1GDzRyYB6Qkot7pnNXrEyi%2B0Oz0wR15t2VQ3M0IxT57t294MPmF8sYGOqUBa6QLMuFtqrolkRYdpmyZ2ZXSyjc0BeVLQlfvBeP%2Bake6KYMNedCQg6N%2B6lIcdmvdLdZAMcvJYnV6004M9YFvI%2F%2Fvryiqs2N9oIKF48lNVJjI%2FrDDF5OaPbXAwHhTUCBajzNuDzxmnKoPa9H7nMEM7SyvZ3uJkxZR5Z0OCX1odupKKDk%2FMQsR5hLSbGx6dabPK7nw%2FBgWVMzFR8bVv4RpT4r07Jid&X-Amz-Signature=05e6d154ac83819d266ae16936db9b98c0c20b3d6baeb93574f302b87b6eba80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
