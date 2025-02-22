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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXHLX3EZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLGH132KJB1WL2SZZb5mFNWxB%2BYy8z3e5zFDd5rlmfWAiEA%2FX9O8svdulQf1iKhXB5RIz9IAqZ9OCnAhWjU3AAszKEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTEfMYmIlaGZ0mn6SrcA9QAsxGr8n9GviH%2BVyPok8ugEemK4gCyLa4uvkaloVVkBwI4TIUeXFm1gJ7aDH5ktuhde4i3ZjA1o7hYK2%2F1foeXvq3aiFhVglizO0FNIFJX0sUaGOs7evP7M7OinAzGJQmZF1zM0aTPeZo0hgH9BLZ%2Bl3i59lwJ95gFb953u8ebrZoQIyZfZnZ%2BLH%2FC4pDyjoygcWTPye0z1DW%2BQ3bIcaJ2YfyWZZiqDWMUZ5AuyLhiCz%2FHbkidsOAxkzhjjKKyCug6PAdpOfggQG9%2FrOV%2BRUJ7BL0It0iHnT4zQN8CTSKlUBPIBkqCM5VbVOK9GY2NzK7z6W4q9UL1ukeaaJ7IIL0oMTewpJmgdGa5vMG1xgT6RYrVyhY3cTj16K7RwOKpa40kuKuV6f%2FxpveumrfOR6a%2F7WtmsrHOjqLjn%2FD1P%2Foxinp641UPuN%2F38U%2FS30mR0UXIxXVYleqyPcDRNaLwmKoQcLyh%2BUg5pGFPs%2FJ4iCUN%2BN1%2F2e0Y7QAtwwjqTx4BX6y3MY2c%2BE7RpAAgdulOqYx6ETpWwpnl%2FbXoYaRFBqauNKaLASpdqvQkXzHqNpsuSprpwuo4joDqEd6O9bpapQ%2FVO0x3kXPeyrHkXhkXqTozfy1Ps%2FvsEIb7prfIMLfH5b0GOqUB6EcKaclFckCCTlVD920%2Bnf%2Bv0m1AvNXTnCx0knEgNU68wVPAUuhrqdaVDsS41swnmGg8ye32Ubp2naZCNZmD9BIydWMJ19M4hCq8BIBJ9F5SkVo%2F9oJvLzcWH6yRxB6e%2Fpsbf51FvY0Pwn%2BbceF8Uoe%2FnGVBBhTNESsyPaNw99troRpkXzBjTfI%2BUDdBIPL2DAbCX1Jey0dd95KD%2FtEg4uw98fIw&X-Amz-Signature=b7b6e297c1c92e0cdf4ca6e3ffe4d58eb7d0b6818671626fc579199b651e65e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
