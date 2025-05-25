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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWX52E7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2B0xFR70ZoJQKfDubC4kPMCJc9l9ixKgGuqvBQ7w4nGgIgFbBbzisZlkcYKMA7A6lvvauAkFEMUBYNUHqCMtEf%2B%2FEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCTsmKez4lxNqBEL4SrcA9E%2FPJbMUNwoejta50hqwXO4BMxBHHATAMmD3I5vAvnRn5F%2BDunjsmBFtyAEOftnUSF5HVq7CKcmaCNbFf0dWMSkuSLLRlPjBAl3WNo8Bm9ew6ccEJq6mOPAdtq4Mb4sUsFiKdsu0XlByn7NLOXuKX9hLEK7pmYENa55KxwT6E1K1ceLRd2UNy6EeFUOsJEWjBsdhE9jJNGEgmU3o3XY6IYQWs04Q4QZ82AtNCPU0ukKnIx9MJm1a%2FFUXjN%2BjbeVoWAY%2FSK7aBZLXDbl5%2FAKZz21fHDJy4EDnjDJvAETQVTtQs5QIXYIgWdSYGRUFl478xSk%2FKe9mW730e%2FGgN6kS9SmQYSIu77Gx583zueKyayVyJQZMgu2vFyxvfSumfZYRjLETTWd8N%2B6Df1cVJ6XsadjpC0XdtPdLYFz1goVwByrJEtyEtwj3GO1MzX02KkR%2F4C%2FJO%2BGaJWWmHgMYq4o9S0kPs%2FFNMMKOuiLJcD7n5LgZVUokaLwmsUM6Y8KnNf1CioVxJrMcr%2BgiC%2BdEwky1gXVTo8W%2BYi4mmpN%2BUMs8VW4hyTB8B3u0yDeRKh4PwZnhMa4CKP2HxucpD4yprUSEgIfrO0bdKl9bDu1F42qOeDq8NNGdENrgWbx6iiVMJKYysEGOqUBLR2GC809smZVDmGnWrbr5jNYAVYKCMkXzJcWzStz8DwuSwui5oHZknrWBdKELCFSdH0jQfSQLevsJnlYAEG5JsX24TlO75ZVNR4%2F0V1dr7iJ8I1b%2FiDJGWlRUY5FOF8GIBq3y8rfmUTTc59vTbhdE1vEOUcciToYseJkC9W1FLe4OTHZd51McxKBIBNskyXxSfaFkZ%2BPJ4rt8C0NxDB4Y2KfHD2x&X-Amz-Signature=867ebfb97c5d5c97b9f9bd319d45ffc0e40e30fb1338c670088c8324a2222aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
