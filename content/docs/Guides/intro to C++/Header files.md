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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AJG3442%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBkFKGogMShIZkR%2BTqvzxOc3xVN5c%2BupIXjivz2alhYkAiA8OP%2Ben%2Bb6HRzwhACvdG92kN7wps7xNhVc6WIkg3483yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5oXG32im5abjzoYcKtwDa%2FiowoGWhB6A5NEIt5aXDoaPKhJpC90c0U%2BBctVs6FDyUzs92wl2e8Vb0gQD2oN6gAykckYKMzJeKgZiUA7wFrBz%2BDrHh%2BX%2Fn%2BJzlMfJpoJwBriNJ5CRsIcEhbG80O2tOp1k3pJNbl1y5BJ4CLE616gfn4VvUbGZhgypx944%2BWpJn9cG33W2nkk7WuIiskMRsn5cnq01NqtF88vuNe5Svh7G0fRqzegAtVIsjMNMRDoMYt7qO3ML9W%2BtKVkKkV2yfffPWYNdRcxeq6ONwN4j4HTgawGZXVWFsaYlrHS9UnP5DOSV3AEERzPsSmYGnkPecDYwR80hSoodHo7Jj8jUjw%2BCMqWfRtgqfmwmIoXP%2BqlOUSqKCTEvkjPrWOhcGtQ93sb%2FhZDpKEaN5%2BiDRSZxixrJ%2Bi8b75NnoImCDZMkeGwxcxb8cCKDCObvxfVtPhx100spM2O5f627Cvo8A3QXiL%2F1b8O%2FmzR9t9h6xbrTCjYznvcJlSwmThCyMdddPvc159Lmuc1lJJMRvzBdzxi5kMG5duK8QbW1PRjJsOqzqUcFhsPxOaPYYcMiIz59xAY%2Fvd53D3z2dRBouTJAYPsOUxJ9w%2B8oLumn5PIhlW3Y3XxCY8TbfGZEcWMKW5owieamwAY6pgGlEofqaw8NREzKO1jH6mwCpOBWe8RtLUJ3JFHbXsXnoUm%2BH346dseBRb4Ag3veH8fgR3H6C3mWYVR%2Bl0%2F6sL9i9mZLB9yMJaBe%2FHWZJ5rlruaG%2FtQk5JO9SOGLhN8y4cWWS5EZ01jMOt5Sh3L3CoWFWqYujoT2gdh485pMhxZl3C%2FVdlHpTRJlnqaB3H3wetWx1LoQpER%2F0%2B8lhWDvW6q8rkE%2FgX17&X-Amz-Signature=369909d28e442f05aad121b5d54257e618ab58aaafbae9d652b9054f1bffb39c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
