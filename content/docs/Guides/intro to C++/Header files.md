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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3GPO6L%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyzU6QYALn1gEFoQoNJnDvqDMPf0JNcbeemu26Vi%2FqVAiAPVLKy9M9X2cetV8Ka%2FxHUm9Drt9YVjYmexKvNArGV0yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMH6gPi5239GV8Ro2wKtwDuDj%2BaI%2FXtpnBmT%2BTSKcrjTl07RBi9GaAo8yDny6gQEBurwfA2yk8Rh1EzxYn6OHhvbE5ORlXNiRmg9e5YPEfb4xsKflaRioKgJ50P1DJdY2x9y%2BbNC2WZalJ99KBkWsNX6TWvQwj2I%2F6NqaTJ2rEp2esD7DHf8GuUeZPc0tk7WZLgJo8rUnirK90B6Ytd5l4U546HIb42cTubHPw5NTT13RChPLikSZDdCJFkuCpOb3%2FnHgo3F5Jw3xqMkreYojQd7u2vB5iyPipgYa3sG0a6l5Ko%2FsPNonaaeLYiZrhUPe2CDi7ul%2Fvr1%2BgKKPp8ISMBEzNSiQY8QZZf%2BqbaZEtA1C9z%2B3NIy8FKoIXUrWtiW1BIcpclMPN3C0mQSStxvNVLEkYinbvH3asIgjbMkK4giZ1%2FkLXuH4hTLqlxlrUFP8nOUW6qGEKZCY7AaFnKttdaNOjSlDGbmUteFct%2BdAhFGDjktmFw7IhbOoectHe69Dw0FnWpXUP7S2F3MBXFYYj%2FNPGa6sS9fhoJt9KgiYW4trGUMdWb1jay6RpZTvgWe0RGTsPc7QMrmQD%2BddaweGILMUMjRFEh036fA4tNXmu4x2piaJQxgmYYthg%2F4k5X4TQqtE%2BZG%2Bw4nufefgw6bevwAY6pgF2oHS5EaZCabCSgN%2Fz2BpxSo6FHmzgBm509JNelhoWW%2BGWBv2uk5cyLlqG%2B9ETL%2F%2BnpCJfkemrTsNhU3ySDlKMrL6neEorkCml6y18GG6%2BwXGLvp4zzVm19p2lNVeO1WSpNkwgghw69ReXxe2u2D5nawv5tLxgKnhlJTw3%2B7Y7ibqOrWFu3PKLKGveBrQZFVyWwRJyhiNj216dprwiZRevQD0ZsaqE&X-Amz-Signature=6675b8995bc8db3d2bd55c9a2f44dbeeaedfe7e21fc3ff1a2ba5a44bec655e18&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
