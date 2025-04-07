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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M7WW36M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwZV19seiUbzR6k%2Bycw0lMHgkDoYtd1MR%2FBSlN12ZsfAiBUCD5o0UTO7sFYnXy58izhNds9zMD3OQPNXoX3KBJw7ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMWeX0Gm4xRoohSVsVKtwD%2BOqKrQiGnFXpxHu0MlZMVCipfl4tEmqjBmGG9pygqpQJFJ4SnG0Veqn%2Fw7DUrLJjtsZCKFRnGX3pNauwBMwCVWbCRHz6F3Hc2yEbkTOpcC%2F0%2FhOftP6GOUWPA2Dwe5PAk5P0eoyCS6A3qQ1u2WUCvXH8ZRhaMejpxZ%2FJRKTkBbREUpnlM4xokW%2Bu6JIgNJOyfWQ28sKDctFfTA2aJeijk8AFQCNMXgHBIiC9uBV%2BmIGL6fFsJEpYOa%2BxmBwifgGadgM8XfgKpx4Mb9PLA3GVnfdgUBxE84YptgM1z70k7DBNTsxK%2F%2BznMXH%2BlBWdJgFbxiBEs%2Bn1rDHnYMUwrn4vw%2BIWOacMPexftQAiPXwuByRvm%2FzkJ8KcjxIc8v2%2BZGKMetXoUyFPBqeDu0VsIuGA%2Fu%2FWh0agRlyZSHWZWLPJaoaBx2qAbdMNc1QkGzTY5JBR6GQxx19PM0jIFQRIiUaMNWeJ19nyMGeGjGCHHveJ0pNx5OAofP4UbWNZej5%2ByzFxYztJuqr3wSSk3%2BekVnOAHB9A%2BOX5Cwpa0LXM4BmeaqnyEfB%2B6YYFrK0fD8DxOrhpaj9OYMZvKQWVBwlvEZlwvhU%2Bl2JRrwAEbUok4EwKwP%2B0wQ7Zy6%2F4KoGA45Ew1brOvwY6pgHNNGK58bKfa7Uk04q3aHT2JiRnv8O2otG9LfiL%2BPMygrDXSTon9aARoEevGkigSfufD0r%2FfSIvzqtY6v0Ge98ee039OTp5bqOMLjeu3n2704M902wE98hq%2Bh6Id6ZIDG4aJs17zk0Bl572mX%2Bm3uVNVEEtGbCd4H6A9JRX%2BAp3peh5B%2FAewmd9KPMusOwzakJNVUbL4atnWHEXC5NNwwai9vapBwdF&X-Amz-Signature=4de7d463428aa94aca1d95a942acacfed1e58efd0cbb6e774f2fc19102212b11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
