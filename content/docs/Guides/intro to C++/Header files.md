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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZHPYFW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi1ZgkIFJlS%2FyNdr1u7wqQFW6RXX8ej6JVLLN7RrMpeAiAapGtxHTM41vZDy%2F8Xf51MKYcva7TgTOngjmKgfTPI4yqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06r3tTn0FdbtCobSKtwDr3rC8s%2BC3R%2BEsyF8YcMX1qplBiwiabFdKCBCA6qoitXZ1LyP15CjA1jtRvxO2xbGyU1SyN%2B7NhmlYo%2F53G0RBE8XETcJOGCaTb1Be4mqg%2BlfPWUgZcl69h0aCp2YSTsuwzRXj4oLR49xfqehBxJL8HK7ri5rP77J%2BzQOX28YurFuXNyaMoLy4r2tgGmDNCQiW8wEW3sojx%2Bw1a7Uq5ZHx6g5johrUG5dczJ78DijJjwm%2BcuvSXg%2B%2F9VSsVFInLj1Nv7lkZTcTM5LvfnSQ1wgWA4f4Wpwc1JJA%2FT5bv%2FNNROUCt%2B8Fhu4DWVXx9p9a%2Fkug1RYvCvYV9NpnJ8l4Yqj0kNiDXTVbz%2BMLhfbxUoUnDXGcgGK6gVW2dPBL7Aq1FLcpObJOoQgze%2BTPkE%2FYp49mXZah0U0yQ2gktPnzsc7irOgvASD4HgXyC0UE3tkwFOOWsg2rCeNrxNlhOxdHV6y2leJVtHgwV3cXzbMqKe8NKhJuindU%2Bo0MXVMNvCiP4NyecpBIGy%2B2UF4sQ%2FoBlJCoDMYzI1BtlBCb6dzAtLdvfx%2BGqpHwDhiQEUdU19PQ6NoESxP%2BsiYt184wzS%2BcavLZgZX6e6MLniPE%2FHo%2F14ZZXQomC6vvwDuwjVIbvwwjKHoxAY6pgGM8af9PaunyLHpIKA6c3lRgC8xxpRTam2mAutVq41ghF%2B7yvWPUFL3fx7QQjLmRssfHMgiN0IakDjKuT%2BNhn4DVL3BP4RKabs94X%2B9YQTJl8bp14V%2BfDCu8Kv8y1mvpxrrPlK1IjgIXlX%2BaassIWnMRUsqAIkPRVpowsuwmA1K9x9Hw9a2lpat6h2Zh0y3VQcp4cyuXjeDiYchzQ1DiFLo6Ir%2FHq6w&X-Amz-Signature=1ca89314d18388ece5df9af562d8d5229e29bcf484d8ca580b2b2a9f04b794f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
