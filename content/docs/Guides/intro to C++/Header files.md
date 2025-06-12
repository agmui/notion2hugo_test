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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZWIZVHA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDyQheIXWLUXg%2Fz9Drjneg%2FbxE%2FtkVWLQunMfMt2z%2Fc3wIgFUbWUHQ3lSf2wkkhF2bvy2YXcGFbdPdsjEMtV29%2FgYEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk7Mbz2ElVqH2ZlnSrcAxx1FTW8X493xBu4kR6X62wdFGxY8qBTo77LAZp840qQlk%2B147cM0RSmfPM0b0DtxD7dBIqNKg5OJrcU8HmefoAVFDh518XgEqp6wyWRs7t6CvOSgWhxODIvJPPfejZvjMZTLOfcuIhcskYBkplSXSKCzL4DolrCl5mqPF%2B4DJJXRXhgNI4UO%2Fe%2FN3r%2FMeSmxYztwu7X0JPlLHQic88cTYjwqk%2FCTeyBhODcIelVhv5iupbmd5GkNvxgMWgsRR0%2FmPvrg5kaJhGr4An2a2YYBaBD7juC%2Bxlvoh%2BrEoY11gmGu3KfEEqDJ0z5Y8A4eghBYwTf6e6QEyTJ5mPzDBTZYk5qgMMvwiEKCZ5ijSvh6S%2BGXnSiomwAj9JrA7X0ncIDf0c01XXKNA7e8gQTloldu%2FsXi9oGPKKErd1eS4N%2BrvHvqOYsHNLP719PrX3sG4lK7NTjx7afXRadQVVku%2B%2B6Kdx5QSItjXi%2FF2u3UI1PgNOYxjO5zDVWi2MxJ4bAadkDk8RzmM5baxX5U0mgyPyEBgE6u5vGxMJ5bzufdcozCDTZkatvbewS3pv4wBclIPx7j7Zpau54Q9ue%2FZZ7LVHPXiZw%2FvjylGyA7HVt2n9vVcV%2B6Y3JuX5pns6qR4rdMI2RrMIGOqUBJRO8CrIKdE61zDQ6w0H%2F9QUc9td%2FGeB7yuU1cbVevXKhUqnQI8tqwZDxn5n8rIhlXAhfvBecP05i9DqISMemtRx8XlvB18quLuVsHth%2FqKgVN2VPl%2FyuJ%2FEyauL%2BN0l8U5dAqevtBSunbZxGn4GtXROz0YcFIB6w%2BiZi26YpIfLUZNzCFNOP4XlsWE%2FY3Jlfps7PjliaP7dwtYBD0Y%2F%2BDrBNiBPy&X-Amz-Signature=9d26722406d36082a918eb522c648e1d36722227038a39b8f1f895363ba5d04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
