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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MI5EWG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIC1pjxRl%2B0MlK4JQ2G%2FVH02o9U559oAPmUAd84w9Jw2sAiEAm0eHMcSQtNLxOgtpJE0TlAp9Z%2BNLlBagQzvqUWYakSMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvUyhIr1LrgoWgiFCrcA3sKhAAvfPGheCuWEAnLKsTXckGbXPsGVGr4BmZhPoQTLAo%2FQxLQY7USoCsl%2B2W8tAyTusBVTSHn8gTd5qhTl3J%2BA7pEOlWzJsAF1HD39hPZgbnFUp7TrxV3moLB8j6BHrudS%2FRYqFnXstvJDC75DjfORCEFxDDPa%2FX98BL0l6X8w%2FKxg4kdXzJ59xTI4bnT%2Bn4vwHCEmUXjcXeOIlneW%2FesRcwQLDkREWf5us6FpEPM8LnZWZqOijLgQVooDYpCvqNegsPPy9oTq9NKVPuZDk7wzSkBnL6IqEMEFOhAqJq8sb1V7BU9XALVccsYUuH6xBEfiuUlRbt9ZEyfQWfudnRpby4c%2FHRRhuXN50ac2Kcqo8d9azvlao9qk2P3Rm8x5ha8zMyc1IwYUoaqBsxa8io%2F%2BIXICoD1WpZSeubic%2FEFvxuVE4o4omPDfhtORuqZ95A7JDe8HEvaToI0oBnpGbw9Op6S8rgXeWxh3%2FeaDLlB%2BJ06EK%2BZq876NBKwo6xhGuAJsyi0yRerL7IzUwPguo8lN%2BfFuE1GDJgHD7pUj0%2FCLHP2JHEJFp4b6JY%2Boho6NstSxcOciV6pEByP%2F%2B%2FUGhNOJsvggypnf99A61AdUuMfK03xFNDF3PkxtLK3MKaQnL0GOqUBMvFFfdtlygwVGGUiC1dGMV4EmliNtl2AXCtetdi0bC3Orb5lqA9GwlDhUIMAeyrUDspOTSfJbdsW8QY6P%2BgihyzqzXpeWxoaEiAJ6lNy4AgCY8ZiUivS4%2FxwNxWidZfktcjtVsC8JsOCdegR1XEOxbssQeUPjY0UJJc1qeSI%2BiPW88R%2FCmra4keum3kUFjTXGxja5Dv8vMpm3yPobQvNxaV5eAtV&X-Amz-Signature=81d6adf7e40f8cc5f0a20e1ddd3abff7de3c46415f0bcc158fbc60e30f18d50b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
