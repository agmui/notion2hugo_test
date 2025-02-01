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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HAUJXH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNPKNhTutbKdYHCwe6lO%2BWeE5P%2F6IJ6shhu0z0MlfhbgIgV3r7xNAVAqCWHMH56da68l4Giw0XUyQkR5nS60mZ3kgqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGK8t8tKq2BwoJEfSrcAzuCe0BGAI22q3dq%2B3HfPyNrKspbebUw%2FmuH5Ae4Xv7EXrSZMLcKX0VGzqhDJJcRWSm%2B%2FuXrDVX9CrMoLECquENhhmi8I%2FEqOOaRnKJozXfQ6zmk8mRwRLyiwH2f3XyCxuDyPiP%2FDwaqgYoV5Nb48TK%2FlZXwSolekGgLp%2FPETUW7IwbqEisjw1%2B86epz7hmxIjRkkVfUplIbUhXwMDquIUcXys5QEX5Zv1q%2BmkJMqw2O0H2CTRAaxoPpf%2Biw3GTZe%2F7KKUjn6zSQ0XpMm4%2Be3sDpFhBRJDpPKICbaQjojfhRmP8DTkBt8Z6lRE%2BUa5i4qTQrkAesks7fsjx0dHgQgZb%2FJs1K9I6MDR6Oa1pT9D%2Fa45BOiCWTIhqLRb%2BnkN8Wh2FaqbeidDfI4wq6r%2Fwy8bQyN%2BqhD1Znn2N0ib%2FgPXWzd7itB%2BQvisbJzZ0NkTSI2fHKhAFi%2BZjR%2B2zLuY8L5OQsyluNiHpA8wLi6qq6qKe10Vd8%2BTOaOCuHZsAGV1dbNJKnCHyWkK5vK8oGCPgc7BR4i05d0qL01jUljozdsnNzHzlVXUYJiNPOot7iTOQh%2BiCCFV7rQwmDj74B%2BJCz%2FWO6RHrLXJC1nYavNGvcgihsCaSkcV46F5VDdpHyMLGn9rwGOqUBsPtR0XdP8bM6Rb4bb%2B33fT%2BYul8dljWbmKTDokDc50SqrWwssPM250U%2BR7uZZsrdR8aQU7d%2FQA8KjCERos7%2Ful05zWxfuoxu6SY%2BHPrvCx5NXYTR%2FnnhF08W9Rg6gmonhiUAiii%2BQVvXCVjISO6LsUuc%2B%2FWP8mQ445VGSSErpRz8mugV%2B%2FZ07FpLJ%2BM7mYN%2Bf1L7wrR2xif3rOdBVjFXjMtFhrWB&X-Amz-Signature=ebd7a1256b9c4cd5584af3a2f588e2a0ebef14857cb3cc11441f30c658744b95&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
