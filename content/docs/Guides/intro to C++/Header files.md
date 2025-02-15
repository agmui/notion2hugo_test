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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UDT6K6Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCCLQZu%2FRW4a3NFwuck0ZgVjsGpGpjzXdqSOD3jLC%2F3LwIgJzLuqrk1KKbRyQdl1yOtBKx2fUHDGe4r6rI1vznN2x0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHvIUKxh3pPb%2BWtXLyrcA9yP7tdpGGRIqjw10IQJL57PFtSj2KKMa6ozIwvK4lUXRtoM6ong8T9OcsQX%2Bi3nhyojNFBzUYE99RXvxPHQn60uN7fhiHilbsg4LkIuWlaoY4sXc4J7yRdhpYdue8%2BT6qPe5svSrk6AygrmGbIQQgLCzx7vBn2Sswvo8gUnkpHl%2BC2OvXN3hD%2F1QFaIWQ%2BGgQ1R81tf0%2BCbiVtE6Kh%2BF8pbYGpXq%2FakH6S%2BLtlRCTO7L6M%2FiVCaNWrZPK1%2BMIFwogEl5dVZmxYyeXW9RpaTTsc1a4M1QwBuZLK7evFcTOCrpfXaJfC1O4rUbJPFBdQ1tPEmA5%2B%2FCJw9AfSaY9WeO%2BbuhAtDtepNhC1Q9NokD3ELtBH489X0zQkNZ8n%2Fotf%2FE3vOEZUIZU5lt%2Bfj8XG5MAOjQfjgyvjzvJk%2Fwcw91nqi3kDc6CKjCWmJfO8%2BTAuF9TPpZO7mWBrzt%2FtomRCdzWI0KhQEtjH0jHqelKLQttL6cMJEudFb0FI9DfnQgadUKdIYR4sgkdR4PeL6YSdxLB9vTygHUESDqZLU7Xk9t4D0xW%2BdxGRb7PxAjok81FvlAv7ycuJlBPml912qjsLvPq44zoJeKhPDfohR83AZtKAdyBWnCV86kEONa7HIMPG0v70GOqUBMf5jCwZqimaGJ%2B%2BYffpE2Jc6lcqBMkXSEo7BLxkFxTKqjgNQ1GvCuuS3N3fX5ojyDEPyupUAtQppra5yXl%2FWVcHy9A8QvhNhm6Hmji8wF4jAyb5hLBCN3Di8VZ%2BKJlE8x9kCYFJcdjypEtLASWOnL7hLhzpJ3PSHyhXGAiblDWE7V%2Ft3TbLse56QvxCBWtw99QE4FiRELP%2F7iBsg2bNDS4bQRywQ&X-Amz-Signature=2cc579e6f0c613eba72e28ac2de98d60fbae9b7d74ac3179de3c41f5d30ab414&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
