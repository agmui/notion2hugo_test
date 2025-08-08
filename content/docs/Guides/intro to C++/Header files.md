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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRELUGZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDPCHl7a%2FFo1Na9y0sRkI%2FG%2Fgf%2BOsWj3jomdnrxYYe0%2BgIhAIH1lJM8SZZdcvL9wcBscF2dtYJLgJqQi%2F4j0B9F5Gb5KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDECxSUhHdb8BDyqIq3ANvljITIVsjUGqClkoAW%2FWvu1TsrYaV5GCHx%2Fe74yNm51I9iO%2FT5%2FF%2BYJr5GNPJDkTkx3IrnyUST5W9LeK84cHnY6xyheWtWCE%2FEtqWcNkL4HAOt6eiHF8lJRo8qk6VQh6WrfI19Fp%2FPVdXK4h1K86xHLz15IfxpaehSRbVKKcV9AFXflpcGy9GFKWPJsAUvUgfghNoo8ACqoZU0U0ZMeZ6RXaXFoF7Uv9IR7PwPL0%2BCsf9dcP2O5Dp8BasI1O2gFHTG4vUL18WlvNK0YbR9t3KZGM7RR4Gt0ivFNp%2FSgLn%2FKYt8i4CA%2FDTEIl%2FyAiQK0t54oTIwaYsDsFZJkOvWl2DVsjvZMu%2Br3lCC88D82HpMZKElB5R6T7Wnc6v29XO1XQnkrXPvXmP5SqIICSJl%2B1ZLAx71Dj3I1oL0GaR6fmM9GmTt7jRz3dFCx4gaIECT7LBhpoo1IVYzsQQsPvuE6sh%2BOT%2BU2zw6tr2VeNzr55%2F%2F8TsCZXTJMGktq4wEGobgKC0ZonSXOoSky0KbSYC3QTfSMU5ivwubtoAsIiQCpLRitkwlFsdEh%2B0wa2fIpKPre6EdzV8E7vsi7tQVNdX%2BIP9h6YckQ9cD33z10%2Bec1UXq7VbapmL4sRWTtj6sDDMx9bEBjqkAYZKztBukYgjnoHbz5ghLQVTAWf1fS3%2FBHyfX74iAWTzGjSTZ%2FjaPPkHGl2mDtIBxU2vKfE%2BkGvwtzs4txN84yvDx43XqMswo0rBR8Z8PLcVd%2Fp2LRro4%2F%2BybH6BSiWULX%2FvpW46o9dFjLpRuUPO5kkvOpMrIMXIaZIYyYHAoA%2FvfqLz0hZwZiP3fYAx800L2fSh7u0rEpkydCSKzt8is4xWHwaW&X-Amz-Signature=e381e7b4bad08d7a4fdcb283233fa8a3afd6a9f37f63f3e4b3d05d7ec8601068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
