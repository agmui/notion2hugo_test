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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ5LJJB%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDRMhqgmp9tTA3MjfjAJeeh8rC7zRu%2B0Hv4X2%2FgekmhyAIhAJ9adFKv9l0FYZeoBONfGQGno6XuV%2FZ%2BYva0M5tlcLo0Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyL0%2Bn1ILjB9CRj38cq3AM%2B5%2Fpj1XfCm%2BOSyt3KrhWOIGnPby9wdSysqr3bhl%2BIxFP%2B4D48cnuw1Z1Pd2vhWbZBe4iShKnhHI4UtE1wMAjBUUxPtRsSfoxwqBJSelbEc%2Bx%2Feh59zhEHiKya6AGyFjyWwobKEm5OeNnY%2BwcOUki3c21Sn5IajTCt0%2BPe4Kdn7VzKLRZBbsUHYkVUgb7s8ipyjJyM%2F353CzMqIARVjJSecWSIEFW1pguZkjrmxYDSw1%2F8K%2F44aHM4OUpjowcHfiWxFdP845SLq2OZkhgGQY%2BQsAeDJfxcp9MX3iyjjNJSaogn9MzurOvXA3YzwKMsq9693JVQ3lbSd%2BaoTanzDRofE%2BDJwVtBy73O0k96V3RltwoMrzKDTPQYwb4HZ9I3xRwpn1lFWBsbeyKjaV7P6Qeh9wUHomSqd0RgPAc4LIy90ZeL4gtwiHNAR4ZEpv9AT6mEkJquYwiR9jw5KtmG3MdcWoIp%2BaDalgJoNu5gd%2BW85if0YA6Bhg9dZCXKQhtdUTDmXGu0%2F7Sskvo8KEQhu7WmRL8Lg0RmoIxPPpqkhwZykAC5KGhyr5000CDy8Ltme4yi%2Bc6wQQyP89Dzkib97KmRePA6n0vtEPAzpQ7Vm7MmUtQGwfldkN174P40qjDWrInUBjqkAfCa62Bc5Dy80h9L2aN6I%2F6N0wkDFFmcr60Ii7HeAxzs0T4%2B6PmKh0bGfy2hFovUufC1fcDbZhjRdG4hjuM4B0rbFmOr%2BpOoTAj5ogTz%2BYpkQjGYToihc%2FLG7gaPHSnhB%2BY4X7g2QZCHHz4kklkh7zrk9KSO%2FwDmryFBBMVYVF7lbjO2EgAGvGvIH05cFfaHI9tAPXX%2BCSal7k4kEdkX%2Fhr%2B7xXj&X-Amz-Signature=4be8ac8993341e9a2bc1a0d9953edff5623bb0e8d61ff074beb0e1b0a06fc48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
