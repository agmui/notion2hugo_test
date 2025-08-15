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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZRYVPA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDczj4st8KhvRnL%2B1BRQpP0%2FtEFCGvuODR8XxNIy%2FvYhAIhAO%2Flttp2aFP0z3d3bbg9SvGpzeFkpfDqaBQi4%2BKy5GX1Kv8DCGEQABoMNjM3NDIzMTgzODA1IgzybvTPzMXTonJQszQq3APAk67lhUah7wlq68m%2BjsnJzEQDnUYrfX9QhNwlemQu4LiEkaONE7H9EU0tjciM2ry4EIn9RMHCFKK52NBA7pNczWI8bsZFVCHf893yUJmqcPaRLBCr7y3hCO4DKqFgv1QOtqNDdUbnDQs87KxsDqbYZ4kivdL8ctmlloUYOVTi%2F1w7mWo8eU9zFWiKRHmz%2BHJZzrJsypjUsTL7GFi4LF1rGlUxAc2Y0agRAv9RX6PN9V1JJqAaR0XKoKlgb11nh7ob3XSXTAIXU6P295wQThPqj0STboBiD61KWqiQrUP10%2FCneGBHVvmrF1TWUyKyH3D7krVig9f3wCyiabGrqVSfLJU6Z53GehR9JcQ7Ow1%2B61B5ega3aCBQQAQVbcEsIs74P6my%2Fs3G2QbxPxOJx6vWuGpDPtcMDlYJDf8PIeLLyb8z4qDkawmgqbwA%2F5pMga%2BU1T5tobl6ZAUlT5ydeND17kSnR6SAFf55StivJxwThewulRJb4dyzMPM8ZqW%2BzR2Phh5eetVgwrzpIEyXYWcGG27ODaBKPiVgddmX37i5hRJayqHAho11pTzxhQ7NrhvDMbukI9qJBzfEJYdmtJbNXBvbeUWlTAbngZAIaSzjA6%2BFNDxpaRhrdJlwATDQtf3EBjqkAYqwvWU9OxLS8VmK9J8%2Bu9emamSK9AstfIhL%2BiTCWI6OwfCL6FXMKVSwM29mSTYFq%2F3S4d3%2FWtOB72b6IBWpAjvszIgsPMD1lXWRVSSPjZuTnawBri4vrCcbQB%2F4eTrXK4MI%2FsWLb9%2FmdA7srXCKzIlSkbcBq5YBoYGRGGHyjBLWj5QVB8fOR0jIpOz%2FyLExs77wAVCrLlBVwPY%2FR1sq6K2Gg32x&X-Amz-Signature=ff197cb58f387b1f523e4976083514cb412b716fcefac1a79b2e6a5f26e403dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
