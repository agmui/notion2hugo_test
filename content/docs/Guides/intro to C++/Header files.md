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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTEY2HO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDsGeqXhOCSXlXTUmr1eqqdbRizElEifyzRVyTGtiRWIAIhANeuBfs9eIzt6mrCHS%2BvmjT9ug3M3olZcofUtjQxw%2FggKv8DCGgQABoMNjM3NDIzMTgzODA1Igyl5GIy%2BkeFPOHtlEYq3AMnP7h99EFVR6X0Ln1pXrRUaFthchIC2HmMyAl5CvcnKGA33lah%2BpFdftn9AgrErtH5ZbGjRfu6Z5HZ5ndzfOxDwavy7MhoSit2xkIvAzjF67adRHt0TYDhqE7TmrD0lt2e4sjI5wUCteicbSk6MBK3uwJOiXiyE6bJB39ejlaazYrtewYMSQTTpDRQnyfYsBcy%2BvZvHwq6zotOcUjhIiWW69rTBRaBkJixzWyYo%2BNeWK9pnvOZGwSKousMfnoPU9cIQhUJPXwEuoOrtAbKqvfy6pxoxSc5VANWOWDILOdltOWRB4AsmZ5NzOxV506dYeqZJqQp53sfhdhMONXrmgWV4SRLQMBTa20wlg9tMTcxbALWaIDqCJucT3jeY8yfgEXMwBhKiKm7rtyFekogdEv5PUa2AqnrJzUGWu3%2BBGC4FB9Md8pYqSvkC2RVH7e%2FZt32%2B6jQclGOcO%2FM4dHfDzGMdgauaY7qDnvtxuRdnW7c9ceBXjlSGhRHCXmHRAj7D%2FndHx5CVWtNuq9P8ZQcxgrzLxsE9ChCpmrgPUpTtbGlPCsAVZ%2Fii0n61UANgSIXjWfnz4%2BBuKD3NSM%2BDQA9u0h8eN2ilWtXbK7TWopJjcGQ%2BgUgcom5AIcKhhyWEzDs3py%2FBjqkARxPQHqRMYGHLU6JghXlq4oB219qC3AyLzzGu07LBnKsyEZY2IVJS%2BOU8kOVWqLEG81KRRfk44DX%2BGFoRMT7%2FUWFzAtRKqdnjCQ7c8DyVOCCGiMnP2QyEd%2BrNcGuMfdeLnz2oubv9PBwCQsXigO6c6desqu1HftRqc6tvy44FQWTKSvzGfSWirhMUTM33chrVnSjVVQ6CrTPMIsILly4gKeS7tY4&X-Amz-Signature=00a393f84ee97be12049c37305d01f71ea34183148a85e6f7dc7f19d676dd947&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
