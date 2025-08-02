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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP63EGVP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLDTbmR3uYpqg%2BTjRwbmhyPza9L9tPjhxtWH6PAwoO%2FwIgHh%2BPWigYHtdTQWS%2BwdIqiGUoQ1kqPKhrDu3cc7r0PO8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMBMcjaIaTIhajqD9ircA0vTYcCflaCJVBh8L1wEtLDfL8mR8pVAyD9cA9tBxyeLllllrtmuWhDJu6ESIYtYhYPUW0xpzF5yThxhBIruh3VDJ495GkI39qP9d0i6zMhaiNqV7Vy9x1Pb6tVBxNDA%2Fg5X60Mg%2Fv0zloie37jLZiM4o5lmSzlUaG7hOHjAoCUgM3NvTVnCZemxwN1%2B4TILY5nvJqwyF1Mrfj5KUhNAif3bv%2BPYfhLCQV0mxnpoYWE0i%2BGFYMl0vA0Mq5uMXrbsahW%2Fpd3iyuSgWE%2BTJ2jQ8OZXnhJthLWKenPe%2FlmV3RmuIVPxQPbuUYBn4UQf9%2Fptpv5Pg%2F78OpamiNTW52IA4x7uuZBd8SNvNJHhOU56VbZDweyZ6JeU4znVPuQbblJIxcEjLU7PSviToEC8iriH2CII5eyIrtPKkqNVhmAKff5jEc30LeuIciARKvvZ6o0Y5YlyfEIOG8f6aw5RIiyfmJ6q6cJBJtBsR%2F6YLiOQdjUYPFzhnFetqJAIORohDy0JeaV6t0mi13RrfQlqQdGxVjGF31vyDj8flel6peQK0YdcI4B50G3A%2BpQArlX%2FWyMWL9WpD5pfmElmqk%2FpUpImzbCw6NZdXnZt0pzmnuHhJlxWtpXebgnVxm5wLqbqMJzwtsQGOqUBPl35PNaXxm3xI7MFVTDxrKDIoMHEqSJZ1zTpdNIKZK8rLX7eJVHvJ1kp4YgjJW2ZE3lEcwdRlYfjMm9wXTC%2BDZIAfo3UMSXgCcdggpl1RS4EmXfdMMq2Lu9tMX49WSspufkieGyMl3MyLPp1xKsSpBk3cFMfdcyL90396mm42qmJb2zjTupFa4LKwLNbYq3XMyl7wTYVTPUnn1xcK7bdCPf%2BN%2FSw&X-Amz-Signature=c9b7ea0081011d0d0018699a7bdf4bf0a287f5934c8924120ad77d4bfd23119c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
