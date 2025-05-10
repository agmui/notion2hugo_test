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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KSUIWK%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1rrbCtNHdqPdgrUsxfAabVlDRRwQPUbx%2FH5qq24wL2AiBGdhCeJT4LTFk%2FqzfIyyZck0SDYBSXUudGGot6ynv9qCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYthnzMJvI6woddYHKtwDjVt9p45dX41H2x6NCYVeBIekU%2BeX0VgG27477EtycQkwpdkj%2B5R1Vh%2BFFwYKRBMrGmgdIstXGjH0WorSKJHeWntWpn%2Bdx8gcbpMQszEDJQjhn%2BwuxxjM8KnzZzfb1oOvSX%2FnB%2BmOw5TCmgyTlSVyjiwIWlFSaXw5dwqopFgU2qmzt%2F6VY9dl7jIaRIyaoEoqJyeh2kZCUbI7WbX%2BiKuM3GexlppDT9BmU3AFdSfU2as08vj2s%2BUQatSuuj4FM1EeKO9GdjUwIqBmf5Ix1VL%2B0nfz4FsC%2FkX0XUM6mnV8UyxUJEZTnBJybyF%2BmAeTlSe0HtsB6n2kWYeBTH%2BAk7IbQ6PlVrFmXVFM6CyRLhBjw5Xk%2Fx%2Bzc%2FkcBQTT554EZzWgEVTXhTc%2B6DdUWvHKcZN8VrcHUMdYak1y9eQ82inzP%2BcaLp6PZtHfsCx9FHXIojihfR2IQfZGDQfsr81dgSvrGNsmm%2FnhWRIHrZv7Iqulfv5%2Bb%2FQhXDe485V56iy%2F8McRB8eMDapET%2FuwSj5NTmk4XplRUQU%2BjXFp%2BYb2x45CLzN1BFSsj4hvLNOKdHWDgk1XziPa0Iyr3Zfp6iaWIoQzNqcoDE2RNQ9uXbXaRmpZ%2BmAJ6Wff8FJdIoAxeWowhrr8wAY6pgFmvmoD5J2iVS9n3aVE91wJnpl7wGhtLqaAAKT1JMj1Hb2%2BVKn09il%2F%2Fo2weS9DZASV%2B5h9jVH2XG%2FHK92lhd%2Fekq3cVJfkjKRrdRz76aXunDfNLQN0QKX%2FCuYkUg%2FMTb2KDsFYr4T%2Fjo0khpLhl4B0p4oayXvJayadDCPFFIyFbUUx9edDZ4NA2V1cTQFqqA75gvL0VTPnGsVYRvaCCJBmoPC%2B8YqV&X-Amz-Signature=0abd4c437bba8f9460a65467f36abc3dbb1f703494e5f11ae78a6af5439ae76b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
