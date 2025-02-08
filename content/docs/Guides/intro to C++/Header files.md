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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IP4KDF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCL9GEGkSgGNiWYO7TmZy2P5Jxz0vOpHx17xqFGE50jzwIhAI7PSZQveqFmLQOmAOUasdTZt3PIDfiAZVbaap36Gw0NKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDMrJysBI7tZDl3gsq3APW%2Bwy28xIHsvD751ESHtMzF8kNVrTyZSnEonl0Q8eqUYDYLrfLQwfzloqyFeGpYAml6DXqxppZJxVREfqN99YkQWJuxmnIAPeMTTMP0oGLuETi2vdM0Cpp6KiMM1tbc4zGkQ6NmCgnGNcl6T%2F1h%2FL%2Bv6t6vJAyNUbfY0vJqCs43d3mw6yRpV268hoT9WZR868jD76JCFQPcWwGOkYOaqTzgcB8ULeYVr1ADYW4tObk7fPXsCLMdJgZBJc30uACDa0U7TZFTQVH4p7lvSs2a3BnqQ9qRpqic8gtjyNWLNIQqStR92hlT0zif%2F8rnPc1WwjQnOI4kb11TT4g%2F47qZv60U9ulk2qQyziPQk2VL3LI%2FxcH0DH%2BEL7tMwWoRXcnN6YYMWn9C7wk5TgWh2Ql5P70KKj6zPsQugy1fuMsfOSS9IgLTWQsinp%2Bevz4CMGBxvwU0eA6ETFs4a4gAPNq%2BZ13YNKOaAHDFDorpLcB%2Fm5GoHj4xe1yAlg3gVgF8fe5jceW19oTZhJZRo9XLI%2FHe9hWj3yhkFKdpgea%2F84PVjUDqYM4IK4MACW2t%2BWbj5ZWiHZfSAGZ0lDZGYh5TgkP%2FtJfh9kxbaSpAKTWy7W6zhepXwzyaTLXCjddQ5RLhDCtmJ%2B9BjqkAeoVsYUZE5Xu8GgfPPhtgwip4qNFvnRzqx0vKoMjMgDZbS%2BQl6mUmPBmaBiLX8RZw1juezmDEBTpHMsdAtaVma31Lsfg3Gt93KXmahChqZWHxTLsmVxZ1x2fWjJoa0DJiyUDM6EuouzKWAfvNKJAeMaigo1f2jVkoL2vjlRgKuBp27NNx%2BP7SzYM7CkASF9gnVcD6f4Wd6xZXWJzSUoaY%2FdJ9fQK&X-Amz-Signature=2ccf3cbfc76fb6bb35f9ad181c0c12a87f916fecc66589cd9d7c92f52f8ea942&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
