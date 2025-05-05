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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJMVDJPC%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCJ0GUAZ5abp634LTAKUEOP3crXjtTbWnpyi%2FeAr3to5QIgduyc3fiORKhkmdebwsNaoP%2FmvlbeJACauBdBe6Xn%2BFgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFvOjnveJMl4XoNJQSrcA2JSyYA4IQFqJuGPnYpGJSR4X96VuzJpWH118GM75EnQBbU3Njp%2FwdW8VkOeRFtWdUALKiuqyQKJrP3UvL0eHpm3EW4yaj66FGk5KVIw6wG5o8PL4NChirhymo%2BfeFIR5QRA8id8eJ2gfokoVybXY2qP6rn7edpDFV%2BU8vfLGlp%2BcZ5ltKBpWC1GgJmIVbnWfs2i4ogzJkslNLo4M2LeWwIvBdW%2F%2B%2FCHBX4r6FP9lYg6KebzOBfYQu%2BefO%2BcFr2cjSbozJIldKlJS7DnXiIUjkeD92GjVP326BNPberFEEDs4Y0UVnLiawsM2Eos1iFuiWXyfaoN5JSrrcwQWaw35nhE7SdUgDwq5MYlUSkdporgXinZlaECS17%2FJnuDhdzZ7A%2FZHfs1HEyYii1Nvj9ObShP2PIwgRRh3UmWv5L8D0Ti3dYwSNOZ%2B4sztAgIU1cyGNuoOWvYwY7HICWoV32Tu0pPUJwtHZ%2FzGkbZV5Gch5kce12QEY31HP%2FDFhszwPPQ9oi9dNp5kntqcaJlkO0oACRikrKr2E%2BcK5F9h6%2Bb3prbqerjijbjZxS7Mone9w3hxJ6gTs8Vruo%2Bwn70tgW3UgB%2BQiJMs39954FEJLatn%2FblNG0LuAUHumthRyfHMMnp4MAGOqUBGPfRFs3WRYgaQmbMkMRYUGM4wb0vZEmDLkNNkhiVdTFcuJ%2BJ1%2FYIr3oiCL6EI1DkXLxUv56pQX4zK08G7bnOSWpuvtpfQ9r0NVmtdrQm%2BzuZtaf9yTKvhDtsh0hzpQc3%2BbtfNsTrYl40S%2BTyCLOqgpBxNesBQnZEOGq6dCBVkbbp4gkJNny%2FIGsfiVgAqITsHBPCVNVW5vXfCnzAx3jwqNLvIljL&X-Amz-Signature=fa60db5f1e5fd92cbbe13b8dcfdf42de68345dac272870326cfe3c20a4ebc264&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
