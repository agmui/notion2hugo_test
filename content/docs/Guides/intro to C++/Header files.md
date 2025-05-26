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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJ2RO37%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCZ5ZaMFD3XUeJUx7NcfiwkrkUJuLz4bU%2F3zD65FjQrmQIhAJb%2Fzn8NryWq%2BEYSJCAgY3UTlLMw2D%2ForpwpshvBcxH4Kv8DCEUQABoMNjM3NDIzMTgzODA1Igyedp0kDY1iUC6dUj8q3AM%2BpiAFd%2BGibxV55WmZsy5002iS6gIGUrHPHoj%2F4qNVQoJ%2BV9Ih9urSXDXY%2BDPV68JjVAhOTP9niTPxROOVo7GR0kZStfb6Hvkrv%2Fhid93s09iDTwnO5gjfb6aYJYiWCIsYd6DZz6c6AIueWlqDEwdDjf9lBWoOnQglykrU7BPYXPhXOjLH1QIoHvhT9pAth7%2BEkmWbDuEHs9c2ZwZOHTRJj0ATfHiuZDkTTPNi%2BPqbuOr0u1Mj9fvabz34xHyIVVQSR0K5RQSmnswqF7kNMyFf4Uny6HF9gkizrZvkLvsWfvEB%2Fk5e3RCH0bDdmUo4cJjlZK08uaSht9Oasuqq7nYwmT7DsWAgA8cJ1p7HGi9InEm3%2FpFqyrfYw0QvEAehAPYZe2FzFiLgRB311Z42A9b22aeCx%2BZzj4KqdsrbSanKq2z%2FJnhspu%2BliztmxhYideIXXuErMWLl9baYypui%2B1wPBodKXAdhZVLV6gV1e11eYDsPcHlYp8kc9hGoSpjsdPH90sr6%2BgyiC2at9Bdoi21SSNYk5kDQ4uzWrdvP%2B6v3ugqMzOE1lg1qg5bz0%2FXYfour1P9nfPHD13ruyzw3XS5dI3uYXOSZmkpOIL5aZ0ZbSsfnJfF4qhAsVUamdjDpqtHBBjqkAVs71H5rMqCmVi0tp8QvXWCpMkONHYNmirmVzDmAl%2BpAWLQNvPgP7ElmyFht87cjvU4i1jZp%2F1NYjPVDv1qg51ItCj66JK9HJbHvvR8Tj2rykC4%2BKmWK6B7b%2FWD%2BBYUAFHTQRGudvX4zFASbQ2yKg0u15sCTfmG3Dp0b%2Fr9844bB37OjX7GNDx%2FmMY7aCHPZ5E5oG9%2FB2K22NwE%2F8HvxBU5YQWoo&X-Amz-Signature=41a0ba27986e7b4f2cf4910992495b1d4944885819b09136a54db8a0a38507e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
