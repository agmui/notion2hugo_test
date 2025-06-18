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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPMIVYG5%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI0h7sT%2F1XuCsqMlAVUdL03Rh2QIrmc0kZZmn%2FOsg%2BLAiEAywmXqi0RPL2n3ph8bOBWzL%2FaEE6QfflsObtEHFofLSAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmLQISeIvnkKAZ8aSrcA5r3u8%2FkV0pACUStnnJViVmnlH%2BukX%2Brlj3HWmy09jVWIJX8QyKVobEE2n4huVQGW7z1woibm2usVeH89oD%2BY4sLBMvlGvSUjES%2FhzhJAal6vxPLRw3ClY8gTik2MfvLGXfOIH6olbfG6PRWrbDkxBD1w1hsdaqZqSdL0STj2lmoGUWmnbqIfLCP8s3X8G8qIHghQRHXnO%2B9eunqnNFbGTbax34OVa2FQP1rlEVADhnsqQ7FCeFh6GRhxTeFceu3iiPbVNXr82uDlwgaFQL5XpsrBn5m1wst6XfMm1V8nb9Sc66uAWPHw%2FnK44WTlVo9%2F9pQ14ltXUOw5pwmB6xUjb35Bh%2FocheM3VKy9UkGQN1eW4rQvXgXV%2B38o80R7uWy4Y%2FApz0JXmI3QyGjsKb%2B8CqCpftSaBN1WhIBI8R3tBIcKdAGb2d549Rd8Gqr%2BXgjZ9XCQ%2BBkKPBQA7uqvNM3QFK7i%2Bgqq7gC7NAaUzmxQnncq8LCFCcYJtXz9FgQi9rzFbB5pBArV4GoCQTZJUKa8ueC9TvZKvkhjSYgLfTO%2BKlwcKkKtoXYcfErynIZKPTiyageJKxtyo13knlvbssMvHzJLZUGdKNx3avsABxhsXS0r7T7C5KoXlI8e39%2BMO2FzMIGOqUBJYR8Ty6CSTY5AWyOogM%2FYacwN5Bbz5AwXzZu9Gj5uafQ8Wn4Wifdx8TcJxAqUAcWXai2P1v5qwJnzqV3%2BPA61tTgAiasaN7sdaQR6h1W7baMA9ARgs97oCdvN%2BPnJfHQrjxIKE0ExRgUgFUP0LuZlJhfjEyutzGaZsB1wOqNFWAzEFtWJViXiW4f8SNjWUX0HXQccDcNwcxhj6%2BfEX%2BzW2qCYbxO&X-Amz-Signature=efa84e504e9e87248ad7025551bc3520bf8e83bdd8216acc8791b4401dcb3bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
