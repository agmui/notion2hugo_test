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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSTSYZ7%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZDLYPVCE5N5dZt4wTQ2c9jT3AXyCZejhX52RBSvjtEwIgJLmbgsdG9RdwqnALZSjM2Sa25FoOaXx%2Fk%2FIjNDBorbkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCKpSL8nd93Ra1QgyrcA81XDiH2ZNKSP0yZGyhWtzfrTzuyVDfR8MLbmo%2BF8pCkPxmZ%2Bm%2FnUdkiDfeeM0knD7rn1mPU9hcUoHnWOVHD%2FD6zQfuL2iCf5fXAmKm%2FNAuSexwmtjiMEvKYE1598cUeiEmZTg5dWDnF%2FgA0XMZnhlqzRhXgtvg63STmTsG9XL5iCq3ftvvmYtBOAlVQ9KWo1MQ%2B4nWGNv%2Fvpqh52YXVO4uaiPJfqXpi991POi31rEv7ku98KBAjnd1a5kEqZVMi9w%2Fnlxku6i77iD1X0qNG7zshfhhunUinuIIuosudhgjkfPrIzmakR01gxLbLAR8TQvbg%2BWXa9C69RWHD4aAjsk1M%2FMkjV3pA6iQFNNUVvEO4g8FOA3aRZhRfJMGgZj6RmpCCBSeCt3sAR8H4pZUKGa0rJdXzi9g8PDrl%2B%2FQdByfRjhBEC7WFdpG2aog8JYcwF3NNYvH8dAOTJvnZhovMfHCZ38H74B95ynXXjUJb86qO9d7WROUkd05vMpxlaIcAIargzg3vMpq%2B6tPrIqGm7y1m4cArNenywMGcxbSX3aBRgVQWzObB3hemW5bW2BDX4f85m9Gw9HtDhUZUqpKulFMyE0nx2pq5RjgV40cTg6EYn353ZMlI2JKSYJhlMNePtcEGOqUByVEBgjsfewHJ3oEUjZjnsAqeaPnIY57QRGWt3sbWcQIRW9Y3O%2BKqniMSh%2FMwp7XkW3VVj60WZzwpoVEEYIaNjp7Iqj8McblSDsw0b2edNmmYlpLVBWvPJb3fm73dIEsag5I9a5tN6yk%2B3Nr6RqxNuMtHse5gFQf9lU2rGD38MkvgF2jGcPOoikb3YGngmyDBWdMqT0k2h11KtbkDeP6zUVTzeFkV&X-Amz-Signature=b900a773d3da50a4aaea3ea46a87b54ebfb027bb10e81e20390b86cf75a14433&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
