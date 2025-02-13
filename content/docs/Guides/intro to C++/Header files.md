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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLBPHQS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFckDfeDal2pShzSjEYmW2g6XQy9i1smetH3qCkvGLcuAiBIbecy%2FVpjY19bE77LjVbBDbk8ZCmW3Dli9jF7W5Qeayr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMrmnYQAsWJ1CGmRoIKtwDvAPHGXM%2BphkQ4qNbBSp%2B9BFV%2F9ceLo9HtOqVk%2FZ1vqaUNS45RbOLkrOARnv%2BPsP%2B0zN%2FjAbgUtPbivCs3MwcA46mjVnhkBf3Iyv7b6vAPi7wX4znA0TDXgviWjGGQf6c20YF3wracfF5oSStUdIWwM8p7xTjTObut%2Bpl8SrI4SOtGgZ4cLmWaWEvd8xYPmUpCtrFRYc025%2B%2Bbws02hIWbyBo8XAeD0tiqMh6SHN1RKO2nxF3nyHju0%2BKZKhFmnqy2fjwheqk7xrNySk95LgwWBIXRNTR1fYtGkHuNdU4x5dEK%2BgRy1gYMOChviJd58dGEiOF6Ze%2BpZed7f1Pnx9puryQOPlFRZSCZxnMyejI9GvHjuAjxzvB6zhEiipWdGvtXSp34QfJ6CrfA0fbeYKLJS6iCoMr5cWcEG9BjnAulRSbWgkdxBKPfJTqUQCe0jUV1OF2BdzmQJUgywRgM%2BZ8VKRXWbQrM7wxI4Dg1aPXZktsyiYvDbwschLJqXDINtThtzlNj1uiqJ5JNzjbwMBY459Z0Yc0u1iqnPmvZ42avqa5oTotPYzFc%2FUdGRn0FhypcZIJ5Jsk6J1ODxE965r5EaBkbyYbjiWoSItwBOJMBFM%2F%2BZzNqFW1%2B2c51okwoN%2B4vQY6pgHpqbh64BiGJKz0%2FatnALLvuyMsOWgcibFM70pFkSSjLx83oQOBMMffFHpvpB8wA44mkrSfBmQ4W0ntTwzRSfeqO6PgxkfjXb7NjWA5z%2Fsw5IYLp0WwZsYS2XZmBDPugxTZ23BlVfj7oPxdaz3YbskMfTAry6ag8pehD42v3Ky7OALWda0C2s4hmiZ%2FBtRIRoGh32SowwpWzjG8jNpKjWEy93MDGj%2Fd&X-Amz-Signature=be37f77221ccc2996a0c9480153f70d09a16831a90eee3f0a75e760c202ceb81&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
