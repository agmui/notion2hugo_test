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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4MZFVX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq4B4Iqq%2Bn3pxshpqmKYbp29ADXMd%2B9nIIToKpkQs%2BAAiAK6x6Tt74Knqrs89n77uFFa7HYJZmIEF3kXR5hHi829SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHzGeRvU2my8BWdQKtwDGtcR4dj%2FxTQr250OL%2B0RfUK2e%2BChXU8SpIa3KB5S2Y0eHy6ri3txrLFSojovZlcMfVoUY6E2fOypJySNrt7%2BTqZFaWGiCr7X1jPhG4veDxE9yaknMXqijMX6Vt427ZqapNYVbnmtDxOLMxia9x590XffhHVUhwqphDngJMOeUlIps%2B5y6hIgwjJeEX5nxExU97lqhyG%2FdAjl8UYKtI3wSCofyIU2ibmQoChawG0O6YPbp5LeQVC9iMvXCvdv53zShBAQB8POh%2FwGvqcSGNa1YjkUVmocF5INoWrCVb%2FnmCNrJ6ZCjuKiQRQJdvk2yC%2FsD3kjSWrWj5V9wlRywEnz2LxdJLhl98J%2BZIxvI3gVgIbi4a3V0lbDCde7vDpCV%2FE0FQP06kyILz8Z8yzTT1HNm3zb%2BHIFGOgKwlZ0BgGbchmab%2Bzvh1HjRy5sYnHwlHf0k2%2B5FFATJh6hW3Y0eSqYJLtq8x2BY%2BYjgLEjFftaVq54R5zv0vXp2Kj1fdswrmKqvaGiuCpHG344I7jKES7kP00%2F%2BErcWZ6nVd0heQhFCmxxDM%2FJ9V22br8F2TUKRY%2F8pYS6nkuWHCQWBLKXWiZYigz9Pt5ixarL0yv6hpXTJpEkNtz%2BINu3VhnWMUkw4P6FvwY6pgEgM%2BOl95%2Fs%2BIZ3rZqi5aVuVpUFvbsLieaP1bpvZVxL4Hg9Hcm7FCow%2F1Bua4TGUxF2Z4a88L1Y96eNELsAyXRmrYAytymUhohcO1HXf98uOWcOSqmKIuw5XvMy65jCMbmuE78uaW%2FxkvMcxa%2BKGi7GAhQALpu8y6Tnp3quwR6rMvEQ%2BEyYQn9tjI4sk0i5AfH2oOpiAuqLoxdNO5cI7iHBsc2pkidB&X-Amz-Signature=ee068f525af8b23fcaa20ef633cc097009072aa87ecb6fbfaf7d4a46c59e541e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
