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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHF67JR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHBTJEZWSOmOSYkYQHog7QbFv8MDSjsAHbP1w3JzZs9rAiBdqOkEuCZLqRnFrRoonBaXFEVRVajt%2BQ6rXmYOrndM2CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlK0v8o48CimGvmllKtwDCuHNBhfLtZkOMg%2FGe%2BJEFp9Ci9suNXTGtp%2FVo1awcNExrxHAMluTmDMma3xlCqV9wTAXji1Mt2wBsjCDlKLM3dvTyUK17wldOOTpVAucnW4lwL8VB9MhW%2F5qEO2ytJUMUUFvh6LsuLOQp8OhqJzkycZgV8sjT8krRlJ1NTi1tbQTMCTShlgMOICEH0ZOsg2UAKYGOEgHBmECGmgi4GHl4XXURjhDzy%2BKYGALWbCuCWW0yVvfTxiew%2BSVGB%2FvuyCbHUvt6oo3cyeB0%2BLcWoZjMDJx1QLFtojj1zS32x6vidkCN8xtpv%2B4IleZlYLk4MvVdVGoYDAjFdAVYLi1DpNUWFf5SXqEJKIOU3IBnj%2Fo7cu%2B2YxNjfAjBjpLW5FTd%2FKRqoDeTXtrFRH5os4QyNYKEItYWkC7IsY8OgBGa8V5BueCVLuOeGE7MTmtuUh%2Bz8rR4PeEKbKUn4kPpyb34SY3gAnpWMofhbcO5JOiWFkYi4vgwGwkoXr4WDV%2FNSQTZJwyORclHJkRbk61Qs4nkZQogrKgKkbX8BPoV5Jg6Lyl5ShPRviFvIpiQheL4xD7H93mlrbxxyk74fxJWDODPtGuFRS4NzTSydHBSwvNXkoGFcpeEZ4dUlgIPYrOzGwwo42dxAY6pgHRDbZmjNWYGNCJzK6Uz%2B2u8c%2BPIvrQGTmZnBZF%2FBXl7U9bRJfu9IuRefmkQPRmK27sMpcj0A3IrVr1BP6OwNKJAaGCs5mDp0xkXXJjEqrha0sHWYgFXJvxy1TVrjo5qa2Oxp3XJHmjrbSRqnfFWSx2HT7QagU4DYRAbqClKOHMZpuvQ2CqICH2yvhpDU%2Btip1DgmEZj7GA44q%2FY8zzVJyrrodvz%2FLZ&X-Amz-Signature=3b7a8da9c537c1aa25f765fdcdcecd28ff2c9e80245c8136fa006cf756bdd556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
