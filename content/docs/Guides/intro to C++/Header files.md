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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YPEMYB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH11bQD06a60BdZYol5ZMJWPbIwWxSHAMidageYaM4hTAiEArwaMTWBGIrUXeuyDZBH%2FkazyNLZ2SZjY%2BgqKN2dUkZ4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOSpjFQHpIz34oGyYCrcA8AZ7G%2BL7tWrjBMeh8DH9jajjNmQ7xuUnsI8%2BXdt%2BQMcCeCfKwVdEBIDfEy4MEVMUTgNAzxeZDdw%2Fi5e4ahAYRaYmiDAKKniqO5nnEhC%2BAE2TZu4LQiPnFAKAIZI83gD%2F1FEsdLBWNkj3dnYTRyV9kd%2F9Dszc6YW8%2FNQ4CVQbJFbl22zBVkQ0Kg3MBgtI9TYkeQnNMIgHQ8KzR0JQtGWZQi98vnjJhrBqSfragoVBQBulPEjYKNZF03nZzis6cZTf%2FDhCYPWafJ%2FV9NHeAgrzJM9hV8nBhqlV9eksYn%2Fqt1ujm5093a0rWrMORVkgGxqvADbg3DNyQYhWV75%2FplHpz%2FYoZCeRXJQNdwVLwkBoGU3SyE6Iz08i2GiHqtVhKg%2BwJZ%2Bez02B1QjOfBQ9UbTPzxlcGMYFtKloGHOkd2SRynyg0RvvEaSIqgWtrHYj4VTqkEXM4qJVfgQ1VyJgzWeM9sBzJCTMe9ICRG%2BFIRbJmzzEyrdIOSfFwv0YNF%2FFdtJy%2BM7wxR7uTA7cydOcfU23rMmyiiBCC4qZ4wsHweJoagkSmhofRYdyiqEf1eE%2FAIqScWIYytKEssF5sc5CVnqLgMYchSaZ3dm2YQivix%2BAlpc5pXLoTKrDBb0vyQtMPXhkL0GOqUBHxR4VJqbfKmNvxGyuBhJVwrKhT97Jz%2FAutZi75SYltsnmBaS1zg0R8H%2F1RVPnXfGop9iHeeFT82ytQ%2BbkpxkTPiWdbqy8WoX42SQpFOK9S9t0mPeGExMz2J6tG1Mz1nHvQKy%2Bv1FIDbY5ALZsR7SCCQVGgTAnt61tcy6%2BypS0babKyZEn%2FEGkav3H0xCAGA%2Fpd8ohj04gLMTQLthI1b0uqSbvzQ6&X-Amz-Signature=24f94d7d100c15d88612e89b01b057c7c7f590670b4054a8c3479053e09d4207&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
