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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYHQIF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEf5ph%2BZdsaX6EbfM%2FvaKbNn%2FKYdTnr%2FxzXrNAnGNSuwAiEAxHECS3v84kjr8cnCW72Z655%2B5Ew3jBbN%2B%2FjHFI0wvqsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCU2AeWmNNItjpyHyrcA8IqzOdnCg9%2F6OrXfXbH14fB9x0cgz7LGZqpM0Z5x2hJ6u3GH2lZQO2DAcrRJ7LU3O3V80ml%2Bpstx4l1BCPiwal5XOLKWttANWMSmh79m5ZNoIS0zg%2BVjiRo%2BVS9s2pL3NpXGigQj%2FbrLWpM4LTFnNXY6knDhJEgUu5s46xXjfu9RPpzhf4%2FuqY%2FVJfNfvRiXGTeqJw6F0ovSWVYOOf%2FqDvqNgSDKT9HC2DKfUhCNK02VsQwFVdZNaXX16qyQJu1DaCKXNizfpw%2FuWmYh1%2FYkfOKUM8dyrWV1DnlsQrZT2J2cU7D%2FAUEaJolH8JOVYthN0CIYsLK8dkn%2FxwWKX49gbCTw%2BtTPtqkkHjelPzJI0ZjpcD1vj534fjHzhPU9GklxJvZB4VsVArr5h%2FAivdP5Xt5gmZPQ4ZzrCylD3dQWDez4q1nRG4TjLYlD0un1m9j5JWoWj4XPduDgIJ6VO%2F7ImmDN714%2BAY4SVYsXPo2XtVbgOIeG8S9MEPBYxHPND9HS5FGz227Ta2CdW7iX1BPMIGE%2BLpfE6E9pfQXydZ65U%2BGlRGgiVnDLeRxlrA4cOO%2BT2aLg4KTNdQ6iB8lkX8dH71PZI9hRR3QoPzbxR5qosWBcEI4cAe7VzGWSqTQMIaB470GOqUB6mhdpzvnM12UmM31Z8KgSD65BKBd9Nwj7ZkHN0JfA7IlCtBPKq%2FiAjmtmWMFNueEcPQgJkzChiwJu7WguiuF9Awq3JPWzjyEeJbkgIfIQ7oox%2ByViq%2BNeOBiQi7aTkDDcW%2FpPwKZeRbHSbiEXLVfhICzsSWc0ryX3tVuZ%2Bl5V0lvOXIkV33XIfbrPV88Z%2FQ3nxma6pGzy2kNHXTW8bcAVG9RczHX&X-Amz-Signature=fa22c30686cd1f1d869260bc234874036fe54b4bc0956f6d38cd38ffadea734d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
