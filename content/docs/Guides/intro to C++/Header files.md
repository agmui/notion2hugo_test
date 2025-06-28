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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXTKRHS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERb%2BZpgPjPZWyHkLQI6uRrUDNia82RVgD1yYK9JSmTPAiEAk9wNu6N%2BLOu3aWyj7ezkn1%2BEpFSE05Cn9YV4DZOFOtEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzeFaalW1c9it6H1CrcAwfPFBh1W9Ip0%2BZnwdwrsM4z%2FFs2jDcX590vG%2BOIaWIppcP0NSWLVB1f64fvrvjYApaciE463dBIHiP2UF68kidUTBM9tM0yPyVkrNX3keJvCuaFO%2FvLiZpg%2Fur5%2Fy%2F8chfHftxWyafqqy62dnNfLxrihgyjQKn48mbu8xK7q34ZQ2SCIgCYSN68WJkHJB%2FTpGc9zWXjdPb4ilxvVEV6XU3s8GIw%2BWVd19QUK8yaCyuPh8ir2fpaSiNmLV6eBis2IAxYjNGl9hdz3jLSNO2%2BOF3HyZ90rOPtDlwzmQStCcVvKsI5FbOXk%2B6Q5v8nj0XFzn0qwYQHiokpwZhqKE%2FTABlL1m%2Fm72%2FFXO8CbZwUN1MKNUqlGF0s7X3UvetCaS3%2BQdzaZAbUPh0wWrSpmTFdm71fJb8OmtFdsby6wmDi%2BRV9z7Mwm83%2FC5RBORVADAIZa5bvWj7NfCQZcdmxqR1tTWElfVzy3bYzVk2wxh%2BjvF5aBTgq2PGYhWMZyTivrByLt%2FuUkvloWb2GtFFK4fAM%2Bj%2FzwTPkiz7IRIcVWzO6FV8c1qdkhtETRIyGmO6TazEk0kt8aGK6BAyZL%2F8eCOkdB0Q6JHfvq5H1JHy5QrVzygXo0c2J5u%2FRZpS0IIRhMMvR%2FcIGOqUBDHOk1VfEiV4qta%2Bz5DX67jQCaotNBA6iFdrQKxOi30p5gPYibulosSYB%2BEKcqOv%2B0cfrSz9Hy2i9U1%2F7LzziYiW6X0idS5BztkzXnm9Bs6JSy2q7709OQELGX3j7c4d%2BqvvrpyFYUZJGSpC9DURaUferJrAslZOxcPcPAi%2FmwVdtxtONYy1d0IJgf8ijtW4Ot0HNo0aYK%2FExmDaDzq0gzfVojfCK&X-Amz-Signature=f23eb3cf925942d03fd251ae8d50aecee24314e5c16f3325fcb85cd7c16eadbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
