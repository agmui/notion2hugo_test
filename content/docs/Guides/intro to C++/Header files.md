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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KULWBI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGuHYiFRI9%2F5NUvLxdkQc7GMSiVxuHEAWgMK0GalS5NQAiEA9PGsaHDf3a%2F6Kj5yJXkI3e1xIHdQLF0AFf0bgZE9gu0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGZt3Iwb5Jy9qr2ACrcA3YmLAL0HREDtP9zck9NHzkMHtTUbSgvavsirJYboVNYQy70KfHECyU%2FgSWc2iVygsOXQTOzIsC0m8y5ZBXO82qLj6kF5NEkVInZ0AYDs4dGH5K0yAPPDfPoblXc3llcb6hCy79r04FcrV7gDc%2FHpZZDoKPU1HQcBEzGZFLCqgvbozNFJ94qGFW%2BSqrTKYvUx9iPTL%2FNOeVD38bsZsAyDbNlZwj%2FmwyJ6QFCKFff8Q2lMX0ZtdgjrWE3b2MrnkMRorq085EVnqiLt5yM%2FuLAY%2F3BfpXzOKtSN1G72aKX0g4MnzCC5xbNIhnr0G7Rc5oZelehYw5h2%2Fkvk5lWTrLWgrNJJxPQPZIK0pqmXl4HZbD5JfiosDQn6czuUUbQbaBNuhgwgJT2sT%2B4B8UPaFL%2B7Kv2DzC1%2FazKRGfMwfxMXR89AaovwP8z0JI0SNL9Ek4RI4siSmUUvEFZxBSBLo%2FTXlP0QP5ffYjbWBa7DVMWtojWCBCU3JJrSpusxsINOv%2Fg0Wge880oJ5heMIEGGyB7xhShaOJbUUhZBzklKqEjeDNfbqZN6Ld3XTqUYPYES9tJemPKUymQqoFP5P3EOzp1JjRZXzbD9u07TUKs83SOWwoMGEYwrBoukP3nGOQ9MJmWrr8GOqUBLUMO87melFYPi6Z5jICX21GJc2Pdngtw%2FA56r0u69I3X3SRjknonh5jBYR8iEwVe9mPKF7gR%2FuAy6PxrMgwyRvayzFeR%2FarF0mNS1YFflwRhFzenhil%2BDz%2FJtXNP8XpsCe58k6BGdOkeY4H29uI9bZ%2FgL9kScdwfnhh9Z6VU6lKLdAs%2FhmJ2org42MpYKHh%2F%2B3qnOZY7QLzR3EOabvnvWbn1fLWF&X-Amz-Signature=507dd6422cb2c22ff3f74cf678da0c81ee5c1314ff36b239b04931a5f7504e31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
