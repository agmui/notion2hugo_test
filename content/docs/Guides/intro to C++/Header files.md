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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMTNHMR%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAVz9nTVDR4dm942O1L79u%2Bplgo8JnW%2FEoqLU78ZLFBiAiEAhAUMEI3a5FoioUtL%2BdI9ZUIr8hw367SLVKIN8HmDhOoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJBkXfKD%2BnEzIcegircAyxvW%2FXgHwLwPUM74JTYK0YzvmWILRWkZemafIuVrXSJdJzM%2F2O0ilyMpT3pCeSg3TxnK2REtkucjc3bMNRgWpGThYElAnSuI9qbD0U9SMUsW1UHnHq7MNyIyaq3fvXCa1cZelqo03f1VcESEIX75ou56egWOrzytTC%2BfhUXTzSxMG8kTEf%2FfpBVrW4IK2hylqCR77yVLdLJU1wfOVKXKrSEbXz0kIHzsw%2FN9T5MckUZ3BAR0FbqD%2FynnTKeHCI0gxIJcRXNpSDDgL1hCwSnvHWHTg4ztgyF%2F%2B1XE692Dmf44tD540P6egcCFM8Bd%2ByqLu5lZaybqBpr%2FCNieIxVHyDee6IA1eZ1SjDhHIngPm7SKiXn%2FWVR7pQgjXNwxFY8DApdmO4iNTMPtHYp723srVjjtq11TwvPZbx0Q4JgnH6sIEHzxpEei4svfcATMuHxVo60YGxOswZcPfUCyfh5Ws9633tutVYexfNFXuV1GIETS%2B0UUnWQ1ut2qrJ5WaqhOCxaEwLgwZAB5YD9tATNZ4qx0E1Ynzfo7U%2Fgy%2BTSUBcqQc1KAWxOHVjoTN%2BEi3mCAIU35zDhucpqgFRO4zsJDEsLPsFJ4evrECJ7AVejeFbn32QycYKvcQ7ByXOTMIr018AGOqUBCHy88smqUwjCWkPvLxPSD8wMUFZ7Azm3XWgtnKcQUmUdhVLtVlMg%2FUl%2F%2BhjRLI1A5bzQPmPfdVDmBJ8if%2Bnbyj4v8rg8%2FIIUsNk6oOvZ%2F9PHgKYmCwpbLEVqCRoxJGqjX5jHW12YH6OQVb3mgQFLwwPbs7PAg1lx6EJRlcPVUvOTQO8ivlFlSR%2FnnIUbCPTW%2BR4NaKNZC9WLzjASebRLdzr52eD8&X-Amz-Signature=f92caae32781feb3c11f813e5d42960d381b264d93f4529faaa88f735579df27&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
