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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULYF657%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY8JpzaPkuYEceNq3dVyhhaYtJy0nbQfl4oluJMA1THgIgJiKlroGc4TyO0o7zSZbSaU0mOjVJYubUR465RvqPGMYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPekCGe7AQNPKwrAEyrcA0bPTna7VyURzNJUfko%2FUqH4dwDwrmZOY1a%2BnY9Ytqa3eOMhoiRXWKRl6XNEzJ29AzzD05IqZDWXY5J8CIFt0Oe25hb8Hs0rqGpkQ6BcYVw4I83YUUU8udC%2FY5LKSfXO9JXWnZtIyGA1TD4kUa7nnLS8H5fdLl3Yibg%2FGxBZ%2FQEZ0o3hASF%2FUe6rAjOCIVKmwFsfMUhSItT6JABop%2FKMI86GpynAtqbx6884OKjL%2F0YN1PNGtJXmj9hHTYEsSJ2HVCzHsbKJDPdhF6mqkFP%2BXLydudB0GIriDLu453Lm%2F%2F%2F%2FJxhMEdqP4Z9z%2F7ytahuGFCPzaCFjrYMr7l5ieNQ8t0eBLYIetLe8agE3woiOXa8RFWzl5RhnbH4uG0aueYQS%2BbhXFsvHmNlkl9%2BmidlEOC3r5AtfWusy24MpXLHB6asSQOPWM%2BVwfWNCJLn2bt4A28Alg%2FIBBfLl0GBK%2FEvmYsXKRW%2FmRupLuenyWqxNcABlgIu0ga25vGB%2FiO4Hrq%2FlKL5cmd1lIMkfAWTtbFh5O9wRD%2BIjS0J5VfXjxIUO6bPB3rf%2Brv29WO8VWZpNIcf6CDnkJ6D5KFWoy0MkxPwzb%2BV5GO7FASsuYnQn%2B3iZw8WZq4Sh%2FZQEPU6f3K7uMIHRvMMGOqUBWk2PR9jca%2B%2BUiQjsWV8gUPhomfzhh91Rv2dVXmsn8qum5N0jbZcTAIKQsud%2FdVu2oNeB1SCMZ4lNWdE1wky0AuZVJHLlPmeOIYC6ZCq%2BiLlb7W%2BwdHsT%2BRQ75mbqWrXg4M99xyfZ%2BBt3ua3zYg7JLRIM5ypsnwgHfcUrNiemqHFTVrORm7%2F0AuioOYEbT6wQdTcPDH2Y%2FKG4xc%2FmITqoxMOqpHCg&X-Amz-Signature=8e49541ee0e20e071f7eda2d7040149d13598f809bb9f85b372e646ee3b18a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
