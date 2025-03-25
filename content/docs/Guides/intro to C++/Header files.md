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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLMVHZW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF0ABtbuKYZbdkq%2BdXHIBjxCKZ91nfm5d5PmIH1H1qPAiAk6D4OzBIHpmH%2B1YyQ29XzR4yeU%2B5IvgTadxS%2BLROkzCr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7PuQVnW7PByXIqlEKtwDDxbZRKH%2BYb0IAEPClpD1W%2BorvpkJbCTr5XWw38LXYi8WPOO1Oek8BMLiwK5RZ14%2FXppL9%2Bmr8RbyKDJPlu12%2FlYI3fL3oszcjteIGxZHoduVCIpNXS8aR2ZA8TjJlItVlteJOXv7aWJV9dkn%2BKFJ4KQGI2UqUyaCcmhGn0SgTRb%2BOLTScZHU96ek3pLbToupHH0AWXyPbWDXQsqs0G4Jg801YlYcVDgU2lTX7h7K111p%2FEL%2BhwFHUtiHR1JLSUwoS7svkHqXT1lShN0zm3uRfno2aIlXp6M%2BkNRqDIBLyv4vA0tsxGGub2ozYpJzZi5m3I8X%2Fpcd7ypWxYjJuN21J7pdti5voC0uOhCvhFxMciKPGSdyNuk2QKLLreT%2BSa9VfVYKVpy8PKrxYUPkDr%2BBXQwGZWs6A2A6iDwhPhJWPXnjaQodDAei5ZMl7FdWySaoVko3Oq5DC7U26dRxWaxwk%2FysskyKMJpq6bzIa%2B5sw2vK9q1RQO7KcvwCymaTRi%2BLqWwRe5SPZAXJ%2FnrNfDjePZyu2BNGwIQyCWLFTfCjPD6DFLcc5xycNAciVeLzOTljwoR6xVLCGMdQ78uyZrzU%2F5gqe14Mdcj2lrVwcIXWpAGYGy1Fp3EDKZ9tUokw5KOLvwY6pgHVGAszH3bfvuReKHD%2FpxfKZhRyaprWhAQfhldMfwb9PdKJ9BYr4LB9ddPLRcgonnUCchyHooJiUiacOY%2F4vtioEt0gLTzIMpWGs61axfF5prPdybo2Eo9AhZh6ATI4W%2BlxhJ6jcgGxcQTFSgS3heEE6qx3VUiAbW9t%2Bi6FVjyVOXqs1MwPQhqKwZGcLjQ9FsbT1WWfy1YPOUEfzKi%2B%2BSSeamfoVfxb&X-Amz-Signature=d02eaa30d8bed8d231fc26e30a7bf5b47024aa63a8dedf1aae0514e46635cdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
