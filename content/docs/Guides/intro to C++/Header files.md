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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDXSLXX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDXXxfL07VJZeT5jPshVdUtG9PCkKbVxN2Ztq7nxy7%2F1AIhANkBnvkLc9bAg%2BxwCX9zg03I1ZFfCDA3Ag%2FShE7wADYnKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYdooSH81Yv5xPMdwq3APghdrH3G8R1YmWjY6EpCO%2BPRsUPSXi6V%2B6TQYKeVjergwR%2FNdmPsoLxPdaNV468EVqUHdEI1HcRt5LoPnedI0Et%2ByvK7iylOaqOxHg3paiau%2F2ZwjE45F93O%2Fu7k%2B8yN3HuIaHzsGgwL6sB3CHy%2FmhZh0JZs%2FAySHYU8YNI3FYT7UZcL5kfIu99gYIE8b2OwIxoI1mdJ20xlitoR5lpGuSvnEdLYbdtlss0XYMmFFrsyThevdkyoDcD90UFkWgzZvV%2BKE8ivpHQQO6G0pTmWrrI8tCKWCgd5B0m%2Fe%2FjWUavC9J2ziXQZ6SZmNct1ExuJ42Ymt97FZs13ojkSVKIfGHS6S6regVpnjRSt9KK3a79wym08GFufUgp9b2sOu%2FSQmJsmfyeB1Kf6NCjwecqbtfKXx2JJfC3PMpTRV3ZOJ8Hf0IbANd%2BY2P5NukgB9zKKyqLyOm5%2BLI72I0r3y5x73yr3tkIu%2BnAV0boa784mF7HFqddhSinw%2FYWdeXLE68o8MO5M%2BT7pg%2BK8kc%2FPNTrXQ83SSrK9WRgHJ4lsVruWLa6bGlW6OKLSi6n4inv4%2F%2FgvB3%2FtovgFkp9L%2FOaAwSmUd2yNqa9VGxc7OD%2Fi53%2BfKbC0ryKoMeKRkNlb60%2BjCn%2FvHBBjqkAWZK125cWjhPtUZB2PdbkP0D%2F%2BqeA1oi%2BJ1mYdhY4oY3Jpvl2fYHiNs6JfaivkgaMMTN0EEKwg0LmZx%2BnePPYviic9IH%2FHNYrFy1VeaMg4cgZNjDI29h9nnfnCi96r3qXVEJwI8%2Bos1KJmG0m%2Bl8xEm6GXgfDWzEjWB9oYODGB0fUaqQCcbFju6VgGY5%2BtX7jWLFsq4omO9ha%2FOTAMyOXJOkzNmS&X-Amz-Signature=46a45c9e67a77ca96aaebbb9efe235577d2c4594018d98a53e21c124cfe2d1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
