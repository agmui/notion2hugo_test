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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPSRFFQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoyYnjs%2BKZ%2FVHwcmgAb5IGYLMaT9ubo%2FiI9MOb0ZkzIAIhALwuJuZ5exLVbiotdJc8%2FhAxljynnaJWBkMT7HyZ68%2FlKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv1yC1bQG%2BSeLO6hsq3AOjhtkokX5UAqfNmlnGSz3oNEP6%2FDHIYg2VoKlvwl2bw%2FoP2R%2FPyDaMNNcc813FISdEnNfTtaG6FEFscZf5pOzf6wXNdQeHBLR9yo%2BBV3aVLskE4Gi5aQDyataJRWYeCy4JCrhy31IWGCu3q2HpXLYQyTlWx71f0noKK94M03EM7m361rahukaea7ZulInLaWF2pvc4U5%2F99GcfZWu5S7Yv9gj%2BnczeysJ4YIDgm9YSUGqFulhVfGBKPFURNCC%2BNb6UkEjYsQNpRxIOTMdVT6wzIis7KXeKOt1C6HK40uCHC1bKeeCFSleW9s7SvAwIffvCqvWOsjoWmDdCYM5JYkWVgTw3IRaaT1eBd1Q0tlXlgf9YG2YdTMq74I5D8s%2F3YIgN8JUlGEVII25YNbC3mz5fNV7nk3SxqeDQFWhD%2Fl93bs%2B58jiCvx5Iy2q6uJFYeFZv4YknptcaFx9TK6y3eBDlH9IPyCUvWo8%2Fo%2BtGOfS5hZcOoUsjQIK8NlvoaznuytJXLeAGQZNo6%2BhAet7HIAxM5GufaIVdT8O5lgQu%2F0nzM%2BpSuZTpiCE6bWsVfD9LmnGhD7WjDumdN7GVOzG%2BXaW1eB%2F9l%2FzK53ctc46Rx%2BTiGZsXvQ5R5ZX3tMmpfTCoocjCBjqkAeTxhihmutV2TsCTQ7OEG96gTc8Gi54ArwzvquuoeuWMSIDUkyQeAp9hLFFZLDJUUh5%2F432eIY5QIG4hh4l3qGSs%2BIwSpy8Lx7XAN2odn%2F5dUP%2B81v5qeja6n1WosHCMYKqgcenRpW7OT9IrWP8ABcHx%2B2wZiat92cY%2FbINwMF6GR0GYwaZYaEXxdg3pZD7CWDZJCHyjkkiXi6rFnxCz%2BKsZVpkB&X-Amz-Signature=7635717c958e42f9a768379ca5680f26dc410b8a380f713f4b3b7110642b6002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
