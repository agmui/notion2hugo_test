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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLS2ZZA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgaTOwapocdKrabIrQP10UDHg6ac8OaYivAi%2Fvq5uL%2BAiEA1T6fITiZPYhr25LFwbUCwnnGG2aayQOMIx%2FCwRmyXwEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE5tVsh%2Fu%2BecIWEI5SrcA2g2HARhNSvu29WN7lbgANEnBY2WrrOOL1To2%2FZs%2FkTs0%2FtERWB7gowHWDIwfLAWaM7K093hlmMx3HX2BYyAU0%2FmgyD6roPHfBqhiNKdJszzA%2FBGp1chgpFvsYr3d%2FW6G6IP7VymlNOfaMvBRyrof6gchzbfax0Ubs04idKIrTNvZx2Tdrbc%2Btv0KH5E95JpsNm%2F%2BJF6G3Bz3b6pC%2BbecV3Jjh%2FhTnJ1UF%2Bkcd7enN3%2FnhwfA1Qk60XYK6WaoPyVI6AfqZDRFEQdHuTZuaS%2FkdMV8uvWaV1nRyTnbSSaIst06HrqGKOACo%2BwvggSnzRyXN95mMNzo9nXc5g4hJluz9rYiqztGvakaMzip%2BROE%2FK46b9N%2B671LHQB5dSxs%2BNoBUhQddtNvNHTufszE7iPIsMycMQvEzVv8eKV0cwyeYXIi9Y77xVptvgR0VDg1twC28eSe9X5MfRd2j4tYtjf5R4ZKoxyzp5okkG%2F1laaYHOGSqBP%2FUk5FdoLJ%2F1l0LyG8ikxLbldk76W0bobbf7N3HKKHUOilD2boha21895nGlSo1Sj%2F2IcEpvLTUK4GOmlfi%2Bi5bZtYXjCMxQsio4eouoIDs41Hc4%2B15AZpvGeZQ7lTqdfgE1w4Z6aKc2IMLvms8AGOqUB%2FDrzJOg81%2BYlDwoU%2FazjexUkKV%2BVioI6NQDiX5wLj9jvfJ2SjxQdVLgZ%2B1ieOqj1KCKHvS6%2BCwIKNXk1o9I0lyFTQ84KLZMrASZvYOlmIw8o0ZxZloQ6q7z5tDghBgnRBzlmROhHSxdozE9znBE5eC4lhHlZgVYvOii9MtUOuw5HW3xoKrFYFRJVfRhSpK%2F99nL%2Ftmwz5wjDjvrnwKz%2BzvGjjC%2B3&X-Amz-Signature=4a39dc92050adb79f03a2e441a85f0a9e8096d57b55af9e35612fe84d3f4d270&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
