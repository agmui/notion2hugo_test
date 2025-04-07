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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7MCN46%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ypPlc9XWMWZnWjnnxlKspnpKr8dp8WXfvSLskAAo2wIhAKWxP9hi49O%2B9%2BzJf08T4HJituAeiAsPz85r6TEKAKwZKv8DCGIQABoMNjM3NDIzMTgzODA1Igzv3smP2FsHglIV5kQq3AOfSTVoFV9c3mJySp%2BVSIsECUz3xsGkZGFm66WW8Qk9WJOvEebHURQxT020VWnd%2FVont1RdTPfRSkpfzQN8YbW8lcPvHrvUE5cWbwQNyciugM4MlcoDc3WQBAfHdSOJO27nAVFrJ137310Au8EeM%2Fqn6jWdCpsLHCmgWc9XjmdoP0JpSvbuzvBy5yrzhxmD%2Bj%2FK66IqjdilUNF9VWsN8vtCUxxywGOpw45MOv5%2Fe59OoSLB%2B6JSuXrWFRywnGc%2Bbpye%2BQpK47AUgrtAWGJ0bAwUCkMDnPIB8DAcLK5G4TI4%2FMu1pPOI2wmqxcKOjp3jSzzCbUC5e1X5pQzYl9iVk0I9hACtHWwVaoaWzcDBRM33Zi0oAWxyScyFvGNdwUJ20ovcBuU%2FgMIG8D66iGtYlmoU7DAQLrDUoleQVgWGImfNZeNDbkOZf5ljl9hI7LX%2BFvdJuEYN9gljL%2F8%2Fh0JvyNJnlWNSxlO9ctYEUbRI8O%2Batzjugk9EAn%2B2%2FI6953lXhfhRIntZfOAohsqm%2FxOmVHS8%2Fg5qw4QFYfVKT0eoZNEHH9LFzM%2BKTeqGgl8Yso4k2a8Jdgox9Yg2F9ziQvvPpfhnolalGNSbKH1loMqkonUz6mr5SQ8a3H48GvW2SjCoh9C%2FBjqkAayuYfHv4wB0qS2kFV2sN4yB29ixlc4ZfEKgijTheAALkTqOKVzGTNGB4EAuh1dlBRcohnyOdjb9LBoAA0GN5Kr80mhVeGSxkwFb8k2s1Pz5ApfXqWwD3oxJtNeOzOlPvUmGv6e4Kzw091tty5%2Fr%2FPmlkte%2Fft83gC%2BdmW4im3KX9R3dXZKRXVoJi0m5X9XHaspBmr5tbMYq1%2FGQb7nCi%2B9vcSSE&X-Amz-Signature=f47699628ef250f9cc8ef3ce8428a3b05f267937128a2c864543a79e80f41be5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
