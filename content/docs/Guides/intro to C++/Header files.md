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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GVUQFR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiuRosrBIjPMMr2a3WL%2BLCbycm8MRIn5INbvr5NOZOfgIhAK0x%2BdycCqs9t7qSO3YWF1ppamZO4nRwM3J%2Be%2FWbUnMaKv8DCBsQABoMNjM3NDIzMTgzODA1IgwUyOn5iERiOf3n2SYq3AM9JLxp7vbPe%2BfaeUSm2wQxTif4r0xdcnj%2FaGn9GeMn4dK4tZvjxZzcrV1jTOmAgn2mq0B8aWcj9APZoHEkg%2BRuTCoN14zkUvtxr5tSw2SUD7C%2BoAxGatQzzwGuP7wkoTXw5gCcQBx3aAp%2BmApZ%2Bu%2B%2Fe%2FiWcbeL3I1N64%2FpkFZqvzWQt8AtWIb1oVP1xE2Aezk18%2FK4ZsmJNxgbwxiyfXJEjmNmlNFrIiLvcvdtAD7QZw393dwzcQqvINqnsW6P1%2FgzQxcfa%2B%2FsvBcwvJIPALgb6YLh2LJaEe29otj83IXv7klBrJ8NdXXS2MBqi2DNUGXhcHX%2B%2F3y3c8%2B%2FtIiVRkOkXFeTMRVMfMpN0c2k8qDXj8KZ0m1AQsvokTpRP5wH6pULnrPvq13fbn8%2F9kpB56YcOZJrN25JqkUDGJlUFbntN8D3NqOKQcGFnOs%2By4RTkhIeaQMZ%2BhhQeOy8%2FpDk09k%2FmNLWkds10dcmKUGKjlC8I3xY8743Wf4Bi81w7CSG1yWxgD8oNdt6RJCFsyyGSSYwjqlFTPUV3iWDGpJaRUooQ15%2BXo%2FvNpOslkzgZQ2Wy6FbNvXnXpPYtfFtuvHqponf35rnQpn%2BEjzF2w8OStIIbsXmfj4H14gReHZozjCOucC%2FBjqkAZXR4gJ58XPtBr24sxfKL6v6xLoAMuRI9K2KAuB9TR0AX%2Blc0j9nHvniWvx6%2FCLExbtf5WIAlTc6ySqwyVjqkC2pgGDHwWvX6DOftzf1t7kDs3nwy0zo6zkahre7%2BaLe4i7Rvl27w9tsQ4lvqgRi1Pp1f3k%2FNZwmHqp%2Fhb%2B9fcdeorDjSThfWwUCQ0BBP2LP%2BRNjB%2F2XhLYJ%2FppqP7a1aIlHysl%2B&X-Amz-Signature=05ede0a1e84a8ba03408cbde02ade9d1af17ec00df53375b3efbf07e496c831a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
