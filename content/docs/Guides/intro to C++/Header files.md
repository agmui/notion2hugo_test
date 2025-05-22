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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC2BHQQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCBnY%2F7kfByTRV6aZIiGeZdxvqBHWcd%2F%2Fg2KIT6qo2I0gIgKSlRE09I1yJZW525xqt2xxJp1ei%2FNBz3lVGMdUQBoI8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH33TYqDufft7g5v2ircA1UXtVUOI%2B%2Fx69kKMERWzKA5rEc3GdjkmknioVJuEo1sYiZrse6PNkZ6j3bYkLqLvODzsDFbGQs%2B%2FN0ffmZu4nBhR4M7cTsdkKfehQ%2B5LOSRTzf3RZA%2BVol905tn2FgpNzSwTImtlsbRPmbEdPkHPHZantCC2wW6v8UUsvV%2BchjSFhJYjLz6keihHRHbqgwk8H9OosVNn7i3ylyq0jDexVrh0HTq4T7P2TRh2tfsyCvRE12QvH5ZUp51r%2F4a8D1cRbcVUV7OhBNN2W4FmtRUY3JuaFyqTvtg%2F2D0eglEfnBe2XL5g1fWkg2y76nYPExNqG9b%2FP41fjZCuCiikGuMbpn5VZE5T%2BKGUaFTRZi9cVnWB9juJ2C5MAnLnLrcU6kk7wuOF01qocs%2BZ1GOCpN5RJ4h0MoJaV3FQ9tZzHTrtYISKqBtd61eVj96PR8SWBKUhObNuaIsUtE%2BhLLlJHnOi%2FBGrznqvQi0OpjRNqyxe5csHMqrPsw4HStE2iHCpWwhCidifdQLJ5LTAoGnZ74tmKnNkfXb%2F3L0De0Wtj9VP11qpaE%2Bpa7MDKqyd3ODzffekN%2BJ9CIFyB6ZIJPtaEfDscLiC6r29mAg6zIeZOtKuVx5UZM8FmvNfmteqVI7MIPeu8EGOqUBrgU%2Bzv43HvbZxl5YcgQPuLYrJ%2FW9uv%2BUqN2z%2F41XSH1BJfMEBr9jXECi%2FKctHGQnD0eWwXT0KaVLEKgaHeR3eMr3Hg1q%2B1NLSofr9xuzY323VcJsiO%2BjMyU64HnjC2t1iEQDr7C2OmXBcx1tbj12ghb6QEx%2BdrJk%2Bytk07QC7CKdLf%2BDJM6JJi2mvb4oHzHjxv%2FS0Dpg7Dxbu5cjLHB8%2FBXZm%2B8R&X-Amz-Signature=82f15352be9135e4e0fdea83b0b4b61236a300bd5449636fcb09727e2511b15a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
