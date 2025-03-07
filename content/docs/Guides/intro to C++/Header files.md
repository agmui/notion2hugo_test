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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466447B5NM2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpObvJgPY9flRZSIR5XNeTogbm8CrP44YLdUdrfioSiAiAp8UVRpjDoQD1xvXm8OJnoLPO7fmzgWkKi3NuGbDAehyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMW%2FC4H23148UJFgcjKtwDjdzm095HzqHtG6l2aED0Vcxuyr%2Bfy55mgEi7ydtlezii3X2Mm0b10OsnZwv9N%2Fi3sMNtjHqz9Yku2NtWBA1AfzP%2BxnIjYiHJ1tmr4xCjRuzy6RZ99cWiADbZfKYTA1j0s6BD0vX00DAl8T9k3TKQ5RjXF%2BFKXQWPdeybXzwzKIPfZnaePmVRN%2BLD5BJ3LwBDDvO%2FdxNoDYTW5kqZofTkWI4JHYJhCV14tp2FkS9ko%2B%2BbGSlvi3BbcjBoUzuJ%2BzNdnx%2BwZaNUxmBL0FZR9HXgnalKC%2FtZyKeMtWliePdhQ9d0zzh%2Bu%2FFQFJkIDp2xGcOISsNOV4VnxtGin%2F1Ui4ZAqO2isvGZnk%2FmTl2e7vUn5EuPw%2FQW4I8CsJYgGCGuazzj5nP4rlGtGIdmlfp3g6%2BFtlwi9Bv080%2FIxxzT4%2BlnyGaC79avJ0fzBy%2FI4ilhH8EGjUENHhZOXQN6QOgDZheuZXWnVoSylTh5I9lRnicgh5xj0mvwMs1Iqg%2Fc7WjaRrSM%2Fo09B5gAXvoz%2Fj3w0W8hHvWk6JDldbpX3sGmqRzeRAgG3d%2F0f6Q14Z%2B3b%2FLspVTnHzrJo0FZEhF9YXP%2BlAefUdAqmHxNsBgu03qRDNXNY4pqosd4wU7o4zr2XDww2OapvgY6pgFXBm8fak5ZVtmQMYAN4H2bnNl%2FcoGg8NSPDOM2xgN%2BpJzNSUXE42YJOoSOsquwae3g5t1UyGIsUTNdOG807cms6mgdwEwYlVXPZoMjSlWg5wl31DyQgVjml2CWIsP%2BXijBtqeE5EtxeVrSj3eNBcK4SIQoP8oDV5AIogNz1rSeFlp4gVuS0qXIDyF2MxUNloVvSnKcltu5edykPRk32nk9i%2FbvZm6M&X-Amz-Signature=41a9c41676aa56eb29828b7a4c4708b6416e879633315cb3f46db93f115007d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
