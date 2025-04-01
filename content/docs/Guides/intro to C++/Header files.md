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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBC4XPYP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICgeX3eUsRNisw6NojfupaqdVuQBzJT4%2BfJzW6Cy5K8kAiAZefMLap%2Fo1nO1Q0VfAkHJGewK%2Bw4RBb8vr%2B0zR2uxDSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdic74M9s7XjqAtnlKtwD9MFj4WZFibhsuF4EcFRaeIseYpnQUAvpWiKZgToGGZ%2BcG%2FTJucrLOCcOn8vw6BqC00MichR78w3c52aQIiSUOBz0hYM1l6RMofaIPza6EXvjNjmeFA%2BGQxJ7pN2p1CGbdSi9ZfywPVrO1qK%2BxMNF2qBJ0Pg4VaY36Tf%2BWIILufB48dlzZlleDQYMjjx%2BRVl7saS5PHDznEx8MvM8P6r1Hv7Ty8JqBEAusuVP1CUHt2RCT1APbAroUq%2B2neZ043xqR%2B5%2F53EFb5%2Bf00pRQXyTvoQh4%2BPH9SN3hIC%2Feu2YqDHTsVOfoLsDZhSh8VnEnoVIwAhf8JbcPDHwFLanmX5j%2Bti0Nw8Fh6nsuY0qgeKCxK%2FsJk9DTlpFMe07TIhSA4fpysORmLysGUiAEefc%2BQTKf4Nvc%2BBi2juPQcPW%2BWlH1bHnjkSV0SH1aKmkNxP57ud3QtcsUf1PFXnPwue6k7hespzfHjJgarMjJAVzY%2F8jR62GVdeYkWL30SwhocebkpdYfA9cU32r9iwD59HsoTWl%2FqJmd1gufJY7pXR8kFP18imMIDZSVaMu0BAw54tq%2F4cIOM1GtCc%2FY4EoqCLK5qqBVP%2FXRYz1jz5A2wqoOSz1JelV8mJEF7fzOLy5%2Fvgw1dGvvwY6pgEmyj3fSDLRxQ5tK90b3ervtrpsg61qI8QIl8tOJUYDgjhdRfe%2FWai%2F5AQ4jKL3LrasdO0BK23Z6KBxC8IVohbM0KdfP%2B6Uq043ZhPA%2BH7X8kQKdF9H9Umc0qhTkkImpuKzzm5yhRYeRW6G83MXJpKcRL1c7Kba4rRuz2ZWnnA4DFpkUCwA%2FmFP9Re6Iu7lET60perTozYJjWNNS%2BP%2Bra%2BMNvpDt5bI&X-Amz-Signature=36f1ae8159b55dc759a5fda7ca20775c03f5d5da8aae504711212c3f7671daa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
