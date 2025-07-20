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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSS4PCYC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1y57fk3NoVoyxk1PlBeSHm1ODNqDRbxUPlRibMYkjFAIgYcPObUVktK%2BvlY9v7Y4tHqrmLEO4VCV47l0fVCbhy6MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHrQAYX7LCjqnanZyrcA1c1SJiPF7h6x1AsBgAU6YhBK%2FwLUd7RxZshpLQKzDobXRYTN5XmhHfOpn%2BX3Rvp%2F5V6vXirGsairCnR8ikWhoxhJKVyj6Rxhx1zagg9XtNLRlbOWAHocqtgyQ72f7JFutYrABVq%2BYQnXRWze%2B1PYI0W2%2FqiwrLIETEdYyn0oWYDhtW5I8S8h%2BDmE5pm4ul1GF2yDHp6q7nbK9AXVnR1pdCW9Joz7zQT7YvUiddgtFh8KsYypQ%2F0iipSmI5a7pzaQc4wr5jH3C69pMFPq2z4JO2jI%2FJXDhAw79Hf%2BnTY8nlxeITtD0pmKQPE80K7vdRWDrpqMXbI6FpuDw4fLh9g47HF5KISjluC5mGlT3QU2sg5fs2go%2FYp%2BM%2FI8CWuwfaKOqlTChmwUsygvK0L7N8npnveDeucYUJ9q5KWhBvvioIogS1AriS7wJop1OdJtWtxg6T6phemxdZRmo7aSfANOnpSx1xdqT%2FESn5NaBGVC8FJfMy4g%2BPKvRPqNhEIh6YL7%2BUxiQv0Gm%2FI0%2FL5H6jABMRimbg1VngtMv7FIvmjZKclGRbq%2BEAwej5S2jTbXx77wbNnykNAqhzzUpU0SEAigINUAlJRsjs0lFffTI96kvlor7UFf7EmlyZlj0B4MLDC8sMGOqUBuLFoiD%2Fx1aoO%2B5hBeZmIj2kzPF2hiaFl8zlGN8%2BtEbR5sOh9X1YJM3%2FkMFL2Jwnt5up3jR4bMbXxinfYQE5lAYE2lHHcNgP09STkfom3dl2LX77XNfE5KpHfN0qXYl3r57BkNZHnXs1JrkEzHiIS3HP8hr98Rtf%2BxF783FYUYuNRT6%2Bn%2F%2BnxuXJxjrC1yxWCgw%2FR29rE7cU0q1j5c2pIAYSc5U19&X-Amz-Signature=06723607a47056bcd8531ccde91a8df9fefa0175684203f784e9024a7f92612a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
