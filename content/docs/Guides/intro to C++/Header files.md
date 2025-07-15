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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRUVXGV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCIT6E9IIddZubakrNXk44GrO3jZ10g75fIJ0ljiffAmwIhAMlHxhnYgt8ADcHURuOyV%2BWEF2ofs7DTVrudywkALd3kKv8DCE8QABoMNjM3NDIzMTgzODA1IgwYCb88xJiYHB75Xe8q3ANi1jgkjeYQTUq%2F2lepCmQrZ98O%2Fi8bBf8xiXJGBxAAkFeH%2B0mgrd1OWpCHpvm6ppK%2F8wFnrJItrwAarblUta1K%2FTFmKWzC4KoJDCzOvoCXynAjjPZk3MBnzpZGBM5XkkbpnRiQXArHRA%2BEQDqjBraA8JKPgmkG5%2Bh0QPPnOvVEAUNZvRgxoQKJdzH3jlWUDV5WbmhZs8v1pcx8vuQWNNzolj%2BEUmEqyZ795iACHM3PyrtXNwkMOxG%2F8JtydiL5Npk8wcQNH2Zrb01G9Y0qMVr3%2FWGw7R34Ww9GuaPcvc2hoPZY5WfGtfg2dxwDhhcefmAl963UfZklfXxBwT1XqmeeclnrXoW6n1IePOSX3z%2FqcTrB9hS0Zoz9kgxOWNAZRKGnuJBhKnYVyZZ6GQiKfxVK0f5oBAlFhdFVjwT625Q1%2FvXK9YQoq9Gb%2BDxcK%2BljGaqGTrINp8yeJK%2FZ175it%2FONQYMiZkm4TJoD0uHoSeTg4FF87gB7%2FVk8CSHetsP4HWyIWu8RaSxPrqZXtRX3bJqBjv1bW1X%2Fz3uIjvx1Q9%2FQ7TKt7lDXFQUS6edFgGcuH46%2FWahHYmM%2F0l%2B5lMRO8y1pNWVSGyoG94yl3n%2BktRcMlZWsDhAclobVjlZIQTDhpNvDBjqkAYlxlYuJyi5vQzFLGVj%2FRDeee9awXVh1j4PDdNlEgmM%2BX3DMbcKhnr8a50JUB8%2BxosP03R0vC%2BY6sZw0RZ53VRV9FN2Ogpa5bnRcga1BOJAIPgT%2BLZUGr22R6pCTnPHzLEDIwJTtWprIBiNZltrrKt%2FitgOS9sUHZaenfNsVDs4URVvbM5OYLA7x668LjdRWqvtU3urf2eold991sB2%2BEdzCrbhL&X-Amz-Signature=3b36844ac52bcac7cd4778ba0ee6d6da6d93db888f2fa7df79e9ca5a9a7bdffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
