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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKG5JMJR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCqWXkUudrVdhs4NFrBkpIy39Mj2SNmnhkac6ozFte%2FPAIhAKxrfiAwrRCmtHa%2BrGObk0qRCVc9Wo007iug63XGSl7aKv8DCBoQABoMNjM3NDIzMTgzODA1IgwEnkEYPmd0yMnThBAq3AMY5I3Z5oaw4Jqj%2FgNRhKjcCOySrrXCqPQkzB0EH5zV0zaIBWbfs8J17UJ0L%2FQehY8dCL%2B2jKLnwcopcr8lVeDXtzqfJ0moQ5OOXI%2FmtatWLJBz2elQQH%2BIRqCG%2By0lQsjMrj05rG1ocZDdb6LK2UDOrV2DFuTNY2Qbac9x6xIeAm7oKQO1eDW9qVkJjqfqw1Z4joDDSO3mT7rSnyTMaKazF%2F7GXPREs4vXRUlQ5B9ITq4bZ1VutUT5v%2BnJnTxscZ43i5ltNoAhl%2BNTxcDqTNAszmTmyq20eS6PR2XgEpGrXzxrWPZfUtoYZXM7MUeB4hSb1z3ceQ1CelUQ2Y7EF20G%2F39WM1WD%2FFDv3N%2BWrxA1ALEacVxkZ8SC%2BKdJJU%2Fx5J3pEF0m7v5ZzapwLNxYvvnFv33gpWbfc0d5CgB7Z2MvewzPdxI9nMwh8OhTIC8u6ohFHahPC29u%2FPWRajtCCIc8E7wdGvHxutA4MMOhHvYRoMIfvyLTdVEN9SLdlqAqE6RPmaOL7Bd4%2FxMQ6rryju57xKkgeEgbTiwRCHYQGf6ZIdy8vGaxJPxzdC3T1sLr5biKukycmJz1ztMcC68c1WirVUTQ%2Bz5duNxURdkZ0%2BfpZiobP2MaEmeMHTjmGDCTiJPBBjqkAaaunQBKGQBAX6bC0neogQ9bj0X%2BgZiQ1%2B1DUni0Dfl6NMOoIKNMw6a4D9atab%2FL02RJo5Hl82bn%2B4FySZiy%2B18sV%2BYZmPjsn7W01YatTKTfWMsQ0gIVt8yIkLvmyKTdvspGlw1RgG80kAa200BmDvyqH4stONBYwmBpYITAJ8aQ7XSm1E6%2FOXnSZgXr92Qlw0NNRYmhkOfBh71SkF2HZTgtB%2BsB&X-Amz-Signature=40e60263adb3b6376df7684f44acd0cf6f6d884c1d971a7abc69c1f86b484443&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
