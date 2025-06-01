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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CEWM3C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH85fIoDylvf0TaaYlnetNgY7UgLw0kUJ%2B9DkkoNPFgHAiArWS%2FpXr3h7%2FB6eSZqlFdgLWeMglrnLGVkeEwB1r71uCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUOHENpv%2FWr9BLbrKtwDG0c2ims1HtGA2RQv%2FUQPOKcBHg7pUbaJkKjLxOj6EO4y5ZAJ9NLFwCsteeyPsRCy4OKr47ZOgJgaMsQfzeA1r4K9UQfnu2jTtLDTl1rMK7PLNyyzxbD6zk1IUaQ9mC%2BYy2E4i468ZgDXkBgshJGnXhyKwqR5LweOjykalDF5PjDzFu%2B6mvNpP41CYuN%2FhIoQlfDW5tymPmXXTY5X2Z8wvo6IOcgOrYPw8cbFJnjN3YEjP%2BFhkbHZU41LnxKTW05lcmy4CwpyrALDUuUpP%2B6K7u8xBkT8FdpURtDDrmo%2FXGfc7XvAXisSdsakXrCdOTmdoGcWITckD%2BfMReNQkE9okwfmg97qeqIzEMFxx9wpHFtC8epTHRyung6%2BjtJaB5PeNakMgWG5IqrF8rX51dIuWGWJ7yPvvdaWy1PfEGdZjILpLz1Cd7Bk8QAimpMjdLylhV6za%2F%2F6PfhSfNdsiDjZvSm8qiskCqMfOZGHKrkj0mrNvXZxsbFPO%2FD7x%2ByqvwSwixNtXc3hGbwTf31vOHdpmqIsZ5QIekZDmIRUKxRpVRYcyHdygJpZ5rg3fn3KnVSqbSzaBHdUh2G3At8WzaIqMF65o2q4LtEltWJr3hT2dR6D%2Bu%2FOXw5uCswUtrcw5JHuwQY6pgEOfCrbEjkBcdJcGka8McmOXwCkp9AS9GjUNtnvguA9IKbK%2F78mZbg9v8CshiE%2BuHuxgqlnROxNiQPI8MkBS%2BzgAnuLCZrz4qPPzQOJvEdV6WlXMOCXM2QB5v%2BL30VsRQrOAreyHzJn%2By3mSf%2B1Dh8gb7Fsi8iSsxDARSC4HyJCFdpMFsrY2Lp6yvRMrSYFTeSiJ2VwddADQpH0hoXrx9AevonwYZiz&X-Amz-Signature=a4f849b0af2c7390f001dc077e2e86b520fbea6a4506b48147bd3a21a5d19738&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
