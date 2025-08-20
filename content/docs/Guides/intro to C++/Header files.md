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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMOXEF%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOR1m%2FfJMn4md2%2FkrOxt2Tsc2tB%2FitJ9%2F%2Bk1zTAONQWgIgSRWQidaW0uRQXgAZXgGcF3Ssj5emhcBLyb6XpRDYRz8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUPsgu43xdXkEB2DCrcA1yHK6bwzZvpy6YTW9wWyf%2Be8WKWqk9m7yEvp5tTNB1NEFGjOpqKWigGvOtoZ1PTKiwx4iP%2B9RojqL0OrZbCAs%2F3rIxtjNn2%2BC%2BVcD8bLCFIAnk5y3KNG7VSp9MHxlCuyDKlabENj5eqSv1jmboM8rUZcmL64MHrFOlRmUUeX1QluO5z1gk2Rin7B9Ln%2B%2FISUFv2tAeLu%2FOpV%2BT%2BAhQe5Ldm%2FNkDkn5nsdnMQ6q5G5C9tiewUWkspRg6Qi6EQC3Ut3vYUV1%2BQ%2BE9NATsKfY%2BWTIGstF8D%2BDk70gwdq8bs6pec4S%2FGgy1BJiTpSKqQ4%2B4K0k%2BRn5BmlTTUK5EX9md4CNN7R3PoKW2%2F%2F9FAOwNwIHUkK0%2Fhf9OSwPWwRZNh2KW32c3ATrijgsyxOM5jgY8iE0JEi3NQxbtjvj79lK7EIEOT5DDkucaVb71C8XfQ58y8FUYllmWKO4TrQbai6vvhSZqoLiiXY3icKrxe1M87d8cK1mkagwCWPrMCWtO9TKbGVL%2FHijYM8aj3TEyqj3004GnekHL81yPLqYzY3giOVyo6N6Z%2Fzsps%2BOcxcCRHp05KWa4Fuh07r8w9S1MHhiQ9IAL8s0IQa3o7dr155kUb1ztLkeJxzKuUWjHK0rlMJD5lcUGOqUBrMVed6Ok9HW7gCxmYm8IPd0ypYcPduDRwVx%2B44OBGDPe0iriCX69LSIr7%2F9ba%2F623b31PLYX4G7fpb5r1z4xMhDWxHz8uN7NNXoIa4ar7IOeIvMcTG1UDbU9NTHOnecIFLsjTGNX%2FxUdkU3kW5g7MBNzbA8mEmvGdmiIXRDMbf80bOGn7h41pC4qw9WDEwVqfGbZ0bMh7RqCK5nc%2BmLcPxOH6LkW&X-Amz-Signature=3536a277e51e0cad22d4bcc7f4c996d47f051baee3e0b207c9edb96d5333c157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
