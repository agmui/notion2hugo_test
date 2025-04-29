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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLTAZWL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8uqELwp2tnDNPLWbOO0IElj2UwFUHEOqjfKsomrAoAiEA%2FCDDtoCKkGLLG4PNKRjSKFamuCtEIQ60jFNu%2FSYaW5AqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxqh%2BrLW8fbzVPuaCrcA0xWc7FJ9Xm4W%2BuI5B6AawzXm3F7SvN9OZ0hgn7eM70Qt4qDyZ5FYnWDWgfOp4Xz9PMmfjTLLSBe02loLfuCvg9C6T2gE6R%2BNVSha8U7zahRoveZYqtlMnv2EzKH7Ak6i%2FiWhHklaYnhvHXpVeiBh3vIcEvPV%2FFeIvwFoww154iqlFx1MhOCojI79GpBw7aTPIWPxWjsWsSF8moeMDE9DYq5WMg5ZNu%2BwvUpLAzG5RedXjKYlXRWAf7Q%2BW0Dy3lE%2BqL%2BhjU%2BuYzTGG3G29Lu8OWdxt7WuNCzPWJgVVEUOmXSCxdqOtOq%2FN%2BkM%2FXlkebdyTJFFqDITdnT9yGeAw8d5Boo0UapOfv2IEywMBX%2Fw5Mtjhz6Xq4tpobE1iNAznfpB0wOpN4J8BkXOWVm93u73CQfYuCBSSQtxfV13%2F0x1iANCUc4hjCosDsluQ3s05q3V5o4HS9vENLF%2B7YRNLfEWCh%2FnYoP5efumnoNUKwrdB6g%2BXbhimo4OAIlUNsQ7MM4O0lR%2FNGatR8asYuwdbwhGIXeUwPaKhGFeua1TQZNcKB5xfYq7TSaoro92fVGnX89%2FIvmg5tLXrj3gDFZrjJkmRUcMqA0imxqgZ0e%2Bqgz37RPH4poTjV7MhXCKwX1MJeawcAGOqUB5o8aw%2Bj1OAfWanm7IWPaS43CroZQeinrJP3bOUp58gCPZw8i8UjoX6sS1OhBoKims9Z6oQ4%2FyFSIA06505sqMOXwTaarQmFjOumuFnfuwB9LgLaMyE7qQ63I0FdoFd8hjNOcQ6FH9s98NkrsOIQSxFE76ITQ0RL%2FlxeK5wUDrqGfsmwRAuap2GPfqDgGng6tMpUzXkVJXrGpuyJLDcbVmCcSkzDv&X-Amz-Signature=00071660740289b2b2160c632d1f87912d59281d737eb4b4976f34cb69c0da0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
