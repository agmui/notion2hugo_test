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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSZCSQQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdDbTxnEUQQHP7Y30q20%2B%2BCUkjjnYSXO4dkvlQsBdqWAiEAxG81R0IFwgUt9D5i9rb6hIke7EcpPg9HYuqIb4SaKxgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQzjspnTaW%2FsG8oBircA1yVu2I0dXg9WvgPXIIOzH4ibeVzN7xhdcHA8tcigUowScUxQqjULCkkF8PybwOhUd5QawPGjAVigPG9jBJhxnXZV218e6lOgEXGmHX4ihtl%2FXrFvioCn53DmqWkPY7w8a6YQ8cdnKBmF3kmaGf3uoGGX4ocCC%2FY8HW4B4J1NhZFcsBIr8GVpff%2BE%2B3iZLD4cjnaT9ZOMOCdDWBvU6E8BBMlowKMlsc6%2FUzKWta9tMzlT3GfuPL6gGwV74PN5lKOuUZ5LxqLMrZmN981yKCDHDiON%2FtfaXvwwSvVo7YWtUuBwqvS3KMM86OCg0KIVOlGjr4p%2FEfmaE3WWpcNGpa8We%2F2leBBFtwpbNyofcklmgTfVedRj3tmjp8sFg30gX0KNATzvoVZGxQp1ctOk9%2BC7GtslSSGKZDlX02AvOCfctMyUzexbvZZ3N%2FHgnUmKsBv7iUlajQQIWAwjwht9xO58LtrzuzbJIeZvCxYLZCR4AGzCKgZGYdC5FGzELoyBTBbpRK2nY4kdnoWA9BXsyy8spWisLirK4CYEd6e1UdKV2lAOBfBFQcnTAUwZ7xx1BYuRWrD7n3iS5d0j4anWfVT%2BN79CMdVwjUm5CxUvqi0qq3ygT64ETcWHz5grZDoMN7ttcEGOqUBBsjb%2B4%2BPKyIRBbupMP%2BQ3bWswFq9zPiPMIDV0cig7qJfAK0FRUVQPkiedVB5diuolb4xVMOoYKoh9VS2kqulaYE2o4wcM4oG3a6anY3sT3fk26h%2FluQQeYd5UI5mEBRGzVu4Kpt1PGj%2F335nGc9RNHzlqMboF1wUUE2FG2KKyiD7iJCITbZA0TTltibfIetgrhwnkJh%2FDpYfb97vUzmmhFb%2B4Dqm&X-Amz-Signature=6a3867f22156fcb2245f5fcc3d3ced91be1262845c8636c2202e24f220f2d335&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
