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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYN4UG7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLjwgVzL7e2UYoj0fS0kPcR0UZcI5UDVwiOixRy3%2B8LQIgHUroIO2sDykw1IABHIYVKUVaqORllcTRAR4bGhIM3cQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTA095InG8MO9yAoSrcA%2FRZTJQeAocOuZwhDnS5xzR62ILWt5bt7KUoTSfKJRbdjzkgGsHzv3BYkkQydeT5bmZRLjblxwd21HaqhtGhH%2BEOefQelC%2FzBNPzPy2aTElZwYglLpxA%2B%2FgeRAB%2BQJT97A1rufj%2ByG%2BjHxA%2Fxe45t6F1wGcpzUdpC7yRLKY42EVhWtfF9P5EBhLn3IArEArgAg84Jfn0yw943MC1HIwGDOfRcxhUC%2FynnlCGvWYTcuoT1FnNHsCy%2BVPa0mwho5DSqjDTA%2Fj4rTzBe%2FoR5wJfTG4bPlrg2VQhJVZFkkqtP1qJl%2FxPqzN1v0CPAddX0Hvl5X%2BGV%2FQ%2BUuG20AKUg%2BKkIq5kxBKGQ3flBc5rnRDovOCby7X0%2Bd%2Fk9myfsFSjozCkL8rteTnDEK6I8wSpuSg%2BEZSEMlk3qVxiKEQXo0MOc14tsDfDKVtkSWAhSN374ufXBD6IRTQ6uusSEZZUd9TGlUd%2FXW6yXaqG901M1Iy8FPvMjg9Jz15emztnH5ZzJCBhoFYOtBG1XIVZWrNiqvGdvxVJIKbL9DBvL%2F5hruDi72aleKRilS4UqHDTJpVXcZ1ys%2BqoUAw88rB%2B8TcUp%2F4%2BPgowKkwiJtY9Q3Edz4M0Tv1OuyZ6gCQrMl%2F7oXyuML7It8MGOqUB8ORnkbW0i4AOoCWtd%2FfwQ%2BXsPW60f9xcr%2FcB2SjlHRG1wDzEwp9gCDqPOHVErtAy5f824EQM8A9KbSJJXHnfoQsSGIwmbH414vk0kIlheenVPsnBP9qwSDg4e1shzjgVAzagFtOJq4yewoTsjOAHIa03xp8hVU9GdQ4njGgOSy5vQo64UVVW0luKg34vdeMq%2F9%2BAt5Xfki4k%2BM8z9C992fUBr2ZP&X-Amz-Signature=047360570e34d36ce63659c0053e277529a0241dbe8ec89063e0ba186b50b5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
