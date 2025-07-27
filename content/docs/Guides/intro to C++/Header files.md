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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL7UDPTT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCidyJXnETdnEWFq7mF6o%2FVWuyIotQv5QMcKK%2FtU1cZzAIhAISWBvKOyPx%2FchNPFhNZ%2FjuKUuU9kQPQmAgko9O7tzPZKv8DCG0QABoMNjM3NDIzMTgzODA1IgwQxIj9zTpoMAYq99sq3AO0jIYTFuMN2q%2FDY5%2FzILf4ePN8XrTw7PEnrZPiR5qtE7aVnYA%2FQTZHJ2Y1Pcs7Nw%2Fn8txWdwkxwVsAj2AiOZGoRtVQjYtVswGojuum3dAG%2FlZVYeEJO4flY1Ax0qfLIM3h69YahGLabbrlI72NowLN8uijJkHMlvqCPul43wbN1trNX9DdU0z%2BcPqukXLIo1eWIZrEmqKmfDqoklXnu2%2B6Xnd9qpEbMjK8bI61pWX7OxA%2F%2FrwV%2Fne%2BOR9ugtlUYrp01AeHjnpanDDAGIkg43oSLJpy3H%2BWVAS9pxP7Q6mgCjqm%2B4krOH8ZpOmcd6zaZq7MmuwbxmhCTYP3NTzhBvAht6yTWfCp90xPD1M8UeJ4kn2s6CZDuhbA3%2BUkWFAr0c%2BoOJ8vEPKy97z4EdrC5dfsfiz1QYUB9jh86r%2Fopwyk%2FKwfXCC9v4RPk0OeK23u5W%2F06TMcGhPr%2BvnUEZ52b0y%2FfDpWsuh2PBSEpc6TIyQy%2Fr0kbi2kMjDhPEaWmrjdoE253rcIoZa6sP1kMiUG8xzkVYfjTP7vZb%2FEr06JmHCYFsBrAyh5Xj%2BxyHH0N7kzKHEcb1KsiHYtH9koHgSE0YZNjUY5LICvxzC5wQexXiKvu6LhPBjhBPeIC0FjPDDSu5bEBjqkAbhnZSctvhvjkKFktrITyDKhRcQYy7ry7PRseC6Sr6L8Gn%2BNAdcAfZEG%2ByHK%2FrGgfOlkrcnYdbDCsaWArADkUhn2EPjnGm2jO%2BRDbuFRr5e%2FJB5RoikNNmzLHmmUqK9xQvxAMwk0Musux8ol8AoxRHVSkCELV3p90hsmhy%2Bbn8B0uWKGx1zM14Ol0KYsmfoNuANqNvAp3lT38BYoUcUybVmHbdxT&X-Amz-Signature=3ac83230439a9dff520b4f12faa2a914174c85266f545eb6b8728b41efa6b65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
