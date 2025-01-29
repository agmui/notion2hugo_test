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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWNHQEJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOc%2BPeLMuU%2BEvMO%2FdAmprBE3vu9EMYCCQX%2FU40EGNM%2BgIhAMclcTBSKr%2BhZQ2yehhTFcT1eK3EwTPr5XconY9d6OrmKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPDbIX2e1arPbRvZ4q3AOeeEnHeaqZrmW8vEZxgBIPDdHCwQUc0AcOdYry17uKpohFPUKngQ8FK4coYbVffzmjbVDIQCdq%2F%2F4hUEdzNt5JXW57Od7d6a0S73U7WHZvPty5TIX3SkJAo4mzrj2VsSfBZA4NP1RQvkulmZZqbuqYfkDWs2WWxo%2BJuXl6V5kaFVXZUZ0JP%2FZd6O%2FJuqGu5RmZDAkZcgE5crjbiFz%2BCT2BfkLyqXmk5HXYvh3zUFhQkioF%2FIWRN%2BXeLEwM0QyCi94qYtdh%2FZ20tUyMMhT7rTLPbNOy8Y0W48zTQrUyv%2B%2BatNCASz6ZDWBFOWly5cD5AMbiOMJqjRV81DXMLW2Q61C9WpbelMmR%2Fslzztj1CT%2FuXXERRds6LoVuTCgR%2FhYaHJoYBtWEKYg5Bb%2F2ytj4d%2BexqvI%2FBAdJmbfq56d2D0Ubb4ivF8lH7D3KlU%2B6ua%2BQfr%2FVNl4TO6z%2BgwakvNRTzkzQJTmFVzUIhHBG2%2Fsl3XXSlnJ52OwE7F1UmRY3%2Fmr6rGRjmvG4a8YnB2GsuODKclvP6KYb4ltA5ZaHSJitD0hV8UFbvAKLfuB7NKGvHjy7jaWDpRab2QccNootvL%2BB23%2BQE%2BC4VVnriU5GZDgnOsI7ebUwJkH9L6RJEZV38jCOgei8BjqkAZaNht%2BCNeDMcKBg9xEmOFPh8r3TFsERhiqOF3YDDbzhi%2Fy0oieDL23umHqDhtbYwqOw%2BK9OqM%2BwsVr150wZafJmKDWr3glDv%2F9LEz4kkactXozLCs0eXenJvbzeZ5xVg6tU1HwAzr1Fmt4od6VF7eCe2qw5XP9WwtJAYthIWmwhPMEK%2F2%2FhOXUkSU5DQt9mzBzQrl6IdWLtpFcima4AEvcJrc02&X-Amz-Signature=b5d3240054692c22c644e5b8bc634a492b73e393df97aad60b8d43f6d50dcda7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
