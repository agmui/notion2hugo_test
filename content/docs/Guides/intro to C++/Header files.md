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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZ5SV3U%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBNBx9ZoZoWR31VOwpCZaLJIqxq33laY4B4RVMXOGVvgAiEAtv9A%2B00tJlQVxapM3wH5ZQPtrLtlWo%2FmYc1xHye0a6Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHzErHdboNTLDfQHnyrcA1F9FbkWhhreDcbbXG6xKdbQQzPutsqloOu6rNUzv3ilIP1B8oruZ0vjIocwk48qwBZhxKOI%2FTNqGaXk%2BRBvwvLEtrnXR1iGQNu9jGQOQGHKpCMm9Tnkkh4zUBxwJ5IGLhVzf0ERWu6QQZX2b6ZUdekoVphp%2Fg3DFdnQTOOHAqzZ3WT0MUde9P%2BlTtcl55tfb2YJcpw01%2FCSphzQKoMqNcLK278NM55V8RjKMFGZl4CMFbsRQPAbsgHZwRfI4q70y%2FIeZgwCas0FRKtdrsLjynyvhvH0xWzukKkLbA1LQmgRxbOGVirTtthNfYEMBICfXThETNT17qA5UHbAzEKIz8cT0JzE6icTXaKf8ok3qgU%2BnxLiIVAsH07ysxvI%2FHNds%2BNPkpcB8nSyH6Qk9pGgZrX%2FcgN6lvtXsu7JZoiwwxCLZ5gXBlq7nkRS68X9ROq%2Fd3lJFNX8m6Vs2lScn2HUI99Te1PWtsBKNS7HTk85m1NW6sWCZJ9ok728%2FRrFCQMlrFr0nDp6TvlxR9rOivu6UgKhxaDfmKCmHCWdcAIynTaPXIls7pGgtgo5Cgz%2BUFT44H7wOW9mIMFDEBnSnU9tu2Jb4M52%2F%2F9Tu7oIWlvlMllEnwLGEbghgCBMnQbwMP%2F%2F%2Br0GOqUBqsnRmhuYZ%2BAsj3v2uhERX%2BvUtTtgeGu2w8EuzjW04nWozNEZ3emDDlrr8eDVl63Jz9iGySCWBHrDkbm9FPzvtnEQBc8XJ%2BlvCKpgfX974zFEu3tCSHyR%2BQDbm27thgSGhwCW5tRqe5MIXjqaMzX129JQDVL6hR9LCmKE%2FCp%2BBfJVQU2f%2Bf%2FNnFq8d%2BRbB8Bv1IHWh%2FCsFgC6i1N2BIXGS7jZvybW&X-Amz-Signature=97c1b2e16fa1fd780a41bdbca5eaaa896e49701188a063cc55bced030441705a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
