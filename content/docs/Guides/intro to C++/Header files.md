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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMM7CN6X%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh%2BaI84HJHGKDF7iYBekc7REN547QXBgu4yZTuOTrlqAiBYB9Wko0lt1Dyff0v7IfPpfqEhlJrio4GlU6FYxKWd2Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMIqsmmEqlCmVD4JPJKtwDjZUviHogLpKldTO6WCpZ3W0m2u6LgwO7Bsnz3Hg0SNjgIIZuv2xUu7xHOk5PUKgw5AwKOuXa%2FlrmiVqH%2BmpYTMQ38kLWZ6ampwIBBBfWryswRi7h6Wc4j%2FHUIui0MmoNMv3VbDszAkvj2X0tmhQsVCa4anTrOKFRlZyqZgWRKKg1sJCbkJnX0Ac7CIwXktJJB%2Fd36TY513SzjeGdFBCC%2FvZuPQgcsRmiReQ1B4soOIDu4isEmkXmD3HJovvgOrIThZc2JyPO%2BfGSmMM8b%2FIP2VJo%2BAXlmyTi%2Fv1l%2F0xyxqNPB9JsGjttazAR5h4O2lkDPI0LkhG6wxGnBTaOuR1EziWXPZBsMm4JGMqQFLGJy9QbjJX2JYiNSTWB0bEqEgGawlHJA5QGVB3p3hfgnBw6jY64rFhy%2BBpPBh%2BTjDNbmeEgsRaALgRXhyNPXghst0%2FjXxkpipVUibKTF6n9b%2BeCZ07MtbYq6PqJ0OXHEKp47ltJ8ai70reD5pa1gK79%2FGJgO4R01Ebh9NYlwjHhE93q%2Fv%2Fz1Je1Bz%2FLMC6e%2FwxJqiL0%2BGa8xRHFVY%2BttKNZVnuwp0M05TJUV0m%2FH6VQpe5cAaVTZ9ZrwHqzSJWmfG9GFVePZ6gbqHHc0bqt3CAwscbCxgY6pgGhBDgUSbJ8Bsb%2FbLHS7D0SQPUgGRWxjKM5B925gMuwmraa67NSYzn%2FPFDgK8C3az4dibqOfbzi3Oazk9mG9kQQv6UqYN3%2BuB8nb%2BHeroWrm4yMBoMGw%2Fs56slYDycEONp%2BaLlgQvCcTzPKFj2N5HwKqIsHOfCPKRHFkbNZnYbylN%2BXfIxW7iyVuEe4pGJ2bKzS3rwY6k4LkM2c2EQh6st9JALxPyZi&X-Amz-Signature=f2ebeeccb5743682d23c2902dbb551c7b0cabce17ad2c1e1026eabd281bea87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
