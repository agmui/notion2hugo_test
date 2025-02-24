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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASSWMSA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO36PWcVxXmyjD9j3J%2BmW%2BJ6Brb%2FAHfjhOwt9ylAhQwAiBfaQqOzYdhcmug1DgWC5nJ%2BpKvroR9QWdThEe5VyM7oCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMjzfOJicrGMmW8NbEKtwDZTN8MVams9zh53H8cnjpE%2BE9iuACXw08yS1bXPjTjtOfdJFviBlmI1HPhmCzyZTMiHFtXpHf%2BZr3X%2BCGlMC4SYHe9BNYI1Dia2F4Wj%2B3qM9ZKBNXgxmfU58b3OUbfio0tPSpI7Y%2FGAqmmSZQ3UybGuF0NtK6tFMhNXGQjG11RDRxZ6RduxqgBbur9jB%2BTY8%2FiNfQlpa5LTgxM4x2htXXwvQHNnVKCTozzlRvmfXFeJxJSM5ZF4opskkw7YMcWKev33HvuEUIw%2BradqPCr1aa4OWMbxThoep%2Bzv4xQOf0ypC1haOZujWShEUtI9vdj9mX%2F%2FHkSF6WpZkjSpr23LAgFxr%2F6DXNwTYKneRJxOdbzWoO480sZYB2Je7gEzipTrx%2BZfKGHx15mS8j%2FqjdRFX1ZdzTH6Kq53PlgUSDpJ29hp7wC%2FDoNZFHLFfyobE6NJs2Wp%2FTllWtYcO6mATygupENrW38VinbLrZjeAZyGu0CthO7P0QrnuQz7fV51Wi8wWLDKPJ3JQ0OcigQiUB6eNmLlzPqg3vlweltftiYyFgscLjfB9R%2Fs7Ub5Ip4y3oSk9ATmndlylTrCIkYAb4Ui3AhzsxLzmaLWPWM8xHoBX%2F6HuScyRvFbgezMjbTh0wqv3yvQY6pgEJIv61T7KzniPFhZtROwPzV3bMmpMs%2B1hByHwpZh5acPpIxs7C1%2B5FO2YeYKLFHzxKXJLWxTK3zquYTP95Una%2BCA4w16gmBnCNcjEVNeL6%2Fu%2BDAx9Sa4cTHsL4VvP9lbWRyR74%2BWHyKTdpHIjtExK%2FkI1o%2Fa%2BE5OYB3Uo%2B04wxwWo8ZomdSK0esh%2BGDT1dHt9HH8iVBLrGyWvfl4I%2F4XpNE6ZauJxB&X-Amz-Signature=7e1a61696b223e4a1dab77291315521fed38854b1a8250ca362d5beb739cba53&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
