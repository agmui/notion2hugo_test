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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFFHR3H%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIF0g7GAEP8DkM1AaJN5Z8ilxWlGZWEQPoGnbCJ0l1NFPAiBDZnNpnVi6uGDLDTbte9TQGUNat7JhJ0uiFZQ%2BMUbEPyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm0311v%2Fot94GO%2BgPKtwDdtdL4zM%2BQv7kVI%2F%2BSZcKYuFQ7Z59k9%2B5RK0qlY9I8iynU5TpjybO0eJj3jBDIcfT5pElkEwnhtoG%2FuKO%2BmUsVk9xpwG7f6zXGcRkztjqL1slVAKudQMCrUq9h41f2ExQj7RitaX2Fbc4KEVD4W54lCWsuvAkgQtvKcB8pqwjnItF57HizuyrJkoFFcsb92yQ7YEpqTnby%2BcGO8X9h8quqoPsct8QfBBWCNsL9jxmNW3rV9YG3Vs3FEIbKKQKLJJn1FJ2TIjEyQMPWESkFDv%2FeTHBum1BgFvYQV9iRYd%2BCM3XKTjl%2Fzef6J8Zx4AWzKNLefAFvfnjaLbvzsJs5MfsveLXoFMY6MPBwkPtdPOdNdNJZDrRs3fXDzsyagU0al%2FuanacWxolZxQOEeLf8vZjpUY3Y3vhJ0CfmVOkaLMerPcw0UoKxSs7bNjkzIVqVFN2JnDXo5Zlh4hjTfFKxbq7cqOWCDgZ2IptS1ofaxtqQOlP%2FdP7qqo6OC49YqWT7r2YM3frDgWWsNjR8vLpJ5mIJenbo4zJJE2tzcg9ri0psM0XQ5A7xgm9EiVpkjBqIfzDlWxwmJIujrUBGS0qr7ie%2FetEmkFCwKqwsN5%2F%2FCrV0AWjJbFAdTs0Ydnkod0wx6bwvgY6pgF3ABybuu7N3tk3bP8%2BP3wq26pvCRqwdZiJbnNx41qUDWBLIG6EQ7qB3Sk%2FpfF4WorfwbsJrdkdqW4SL50Qux0AmOqgc%2Fizu57k4pPmWadrIJ7nQufpXb9sG4NABRCFie%2BKDdGgXgNz8klgWgqpl31%2FKQ9KBpBxItryDDOajeIf1J%2B8h7K9hrM5R9AcK7suWj3GHFgurforXr0%2BKSCQA%2FtZLkZxlkgo&X-Amz-Signature=3d2faa437e0b89d567ed45f483b44757022b4e1a0e28f4ec87a1caf7eb7b7e74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
