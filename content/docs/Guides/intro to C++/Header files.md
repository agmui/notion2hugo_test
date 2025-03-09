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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWOYTD4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCDqUh7kva3vArKUqK5Y0pmT03vITowd%2B9G6NpT0KsCSAIhAI%2FE525I1JXuLjz8z7v3GRbJWuzf0bryPSlvdFC1yONtKv8DCHAQABoMNjM3NDIzMTgzODA1IgxgUo7f01Kxj76q3lYq3APMC3q1X2EzSrkVZgao6NB2yH3E5Q6gFAEMFn3RtjlawTbVn%2BlE5MtxjX55QF9E4u7oZe%2FirZQzENkMfLI40IYfgvTx2Z5zRauK47dRW17ofpy4rRfrDk8YCCftrIzrtAAYomU8qOnM0%2FcetDPEmza%2B1v%2B%2FFIocRW7wsFrFQ5OEIeCOYvPc18B5%2B%2Ftb2FoFtwQWKLf0jXUT8wxrbt3vguD%2BaSTrWczRk9BpxDuY3or67PvF6YUZfK5Z5yu8MALrgSDXRo2jLjJ4Xb0J9bxNr%2BY2UwmGskeRMJ%2BR%2FgUA6mz0GB8HxUEHh5xxVmmuM1Xu67Eb%2FOHyl0Mm2sK4fEY9UzSUfyhgYOgTfxYtjZKxPNlXMRYDB3xi%2Bp15bhW8CFq57YfzdDWfNi5NA1Yj90QGWL3rEOVmS%2BqbogezHVnfceVQbphz5mxAXOybiozRq5rEJ2yOFD%2FumzzkaKxaAa4CeNUb3fjI48c4rBoUb%2BenI8Xw9zDnCbiR1YfdDEiTj4kNZ9qRuqeokt1IC%2FLAkacsIrtdCGaradrqOFuzbA9X4nWnuq03F5d4pV7bDUpTzpnS85%2FW0a6XpBRd5yoUMfKvTNXaE7hFRnNlRFZrs%2B9FyLZ9L0aE2l1jgt5s5%2FweijCz67S%2BBjqkAVxE8AJZhQZIrodGah94RiPKdh9zglFDQZZuOpBAgRtMqziSd2gS556tOWZupOCWKXQ7tPTiVuX4jc1qtivT8TXXmKxSZb4WlMWyvG94O3ttpdiO2J2Eu8chRe37x%2B%2FnwsgQmCfU1fx2w7SHr5DuZD8662RHE5nfwWmjncdj%2F1ppHPX%2BHwfG4CXN%2Fl15ew9f4LvO7yokvZGjgRgBICMR5NI425o1&X-Amz-Signature=59a15d80f02dca46c6593a8eb689b280d3ac6eabacb13c89f5f5dfdadff3b9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
