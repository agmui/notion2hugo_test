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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKOQ6U%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNd8bo9Q6fjqbrqHy3HWpKZWvLYK1l01htva8Y6cE1pgIgIFZy3mUfNZLWF%2Fj6U6hUkPSUjvhaTasvgF%2BQnRO8e9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLbtbKq%2BpMaAutOjqSrcAxlvuf5PyF3NsctyU306fxu4PZmRGhFaitWaN93%2Bj6pzILGtu7QaCiS3usmEezSV30%2FzM5CCG0tCd1ATTyEXsJ7p7y3%2Bq%2FtYYupEUOVmyMuAj9pjti6JaitHNv%2BOR%2FNP3f0ejpZB7Maa8t1EFE3Oh2co%2BHk4%2BjIGwCNAGuynOIEdsxhtmGjenL3m5iHJZDhavsn5NJFHdsCE3cDhj0mJ2iPLfOUbeAti0qj36driXXtD%2BE5jDJ74t8e4H%2FfRmsGg6Zr%2BvhgZTWKOhej7zYYup%2FuxfgF%2FAn%2BywBMCdo9DqRgmWo%2F%2BybFnlVNJPo5p6f49iVxeorvjMvhbLwJtVollQhiug19fHTKhUTgbFthYkK8UgQoqQhVV7SmtrJd0GwcDscZS3%2BnT3gxGSXi9Tzak6q%2BDBVMUOyS7cBBLgYPKijsplB2U1T5Q8sMBDsaxybmYEIS4P1DkYbCc3P20BD4JmNDG2EMN7UfIivlro2DOqsgL3n5aiWxKFDpgvonUvJ8LDK%2BKacx2HbqDnvNzQ45Wu58WoNTjevtqrvkS99JBajCsY9Mxqb0jR4kVt1kjf7NqR%2B8UeKTT6bbvYCvwSaFmQYW9t7NscNpyy78ucjvIBOyD3fHPJpTCwzawg83ZMNvNztQGOqUBoHlZGNz9L9hGcrxuOOt4xs%2F%2FVvoabN%2BWplHvFRApz%2FM87%2BpiO9leXtPcVcdUZMziuaDNIsSDk7rgKkjF6peD5hrvTTtA9cCZtklIm4cubs7B%2BCjDY%2BjxUNv2T9klOlzoAz0JYiADXMJ07uAgvmeLnQPxvZIkuki%2FP9MTQEJhnRhkM5r2b%2BW8DeKZKFraoXK2OJi%2BdJeuvEGfbaBtCW1purhWKrjQ&X-Amz-Signature=e5d87a0bed8b45a4bdff2664f53b0ef4f521a5a8e28ee74913b0a143e4e046b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
