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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZIZFGSY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFlW%2BYC%2BxfszX8na4KwrZ1wcxsXcokLhoSRQHvFSGLe5AiAqVDSIguyeJkTJoIX3ZTMDu9N1x92XvJ5ixKLQA02w%2FyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QwcN2%2Fzp7GsnybbKtwDctlKl3MmmEb%2BvIyQxZSh7Aqi5b1qS%2FdtMKl8PD0VSmTyn949St1%2FA2Zp9dD%2BLhtu24w2IUvOeGoWdejWuDflMixB%2Fj6PE2txfcp8pSRoUPkI7IdUqebj%2Bmy1RN2iKrNemEZs1ElOSdEJNHWxYDoq%2BcIKx8nNstEf%2FMqHdlC3yNJAwOVhNKzLX3L46z8LS3XnI46R5i%2BdrUIQDTNp26G1zpJ0R7onRasAT%2Fu906kSMaL0QGy7TIRSYjCYEDUVK5dZ5X8HcrEkQC1I7xN4fMvmtSJRLlJbwZZ302ZjiBCM1FNw6txobRJ7%2BMtwcU%2BWn8DF4dsdz5sN9fpXgyUv1rFgPD%2BKfWc20Ziy%2BokIcN008ZDC9yj%2BRYAWVOs7LUuc1nt29GXg%2BlbyD3XsoZF5yzBkIFqiAk6p74PuWIH6TL%2FAH70DkPb73HonKifbG8blNcNYBs3XpSuBGvQYc8UPnZ3PvXfYHeBHoP0ZghnMvlfgH%2FTxglPQeVMcr7QO5sBm9zlgaeZOqNgu1OtVhsXdBrj%2BPz6bW4XkKVrYa6oauEH8tjE8uzqVyRMjMo4aHkIlQRx2%2F7JIdOOVePBNnzl8LkD0ghbTl%2BtqDCMNuBTzdvsVcyOpx6e%2BuZUDXeBmJn8w%2F9%2BewAY6pgEc63GKMCwcJdu2apjlyixOO1%2BwSo11rNmWik9hGv1I2veiRJqk8wyWohkmHM6M%2Fr2YTqdc%2Fs%2FnXO7hyGtGrU%2BLbBcRJ8BfIXTdnfsT7CMDl5JfeubxVbk3so8vGGix3X1I%2BUTTXgQj7QSFkZKZ%2BmMV%2F8S1rI3j%2BeDLdBsra3%2FpIn%2FE5T1Zm9y0Gc83df0d6MBHdybIDpRQHhy3At7oXVUodw%2B2L3wm&X-Amz-Signature=3f85cb6a2cbefe8407abc167b6e7000f2d82f75e5fa1e53de2cc6047992d405b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
