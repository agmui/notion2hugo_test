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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYY4XMTH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHfWtP31mgcssRBfV1vo%2B%2FuMSv%2BWavvy%2BSMJkn1rNkL6AiEAoTQBJCq6XrKTNKkSlfkM9gGZs4E8uPNUOwnjZJwe75sqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIs4wtuSCFrZaHOPSrcAyQSB2L5x5Iolx%2BGrXQ1eyA445tWYWee1x5UAkWYYf7NFhHjx1SUA6eO%2Fkt8BQcX4GMq4AEziSUpvOnKXv2xDjBYDsHrFwJY%2Fk2%2FUYhhLf6qYiFNnDaEFVHmeLhevGZrYPBFX2TD%2BArO8lJ%2BUZfOBmP5QqiHpBtGRjSc%2FVFV%2BwO%2BNo039ZEphOeq7TgSWGmXnjknFgJ8DvKYj23a%2Bk7EzBoqHUr1SrgGOES1pRwBYmA%2BVObPVn9%2B605BeniqH4JG7rolzfUB2PKl7lOB9vzaOtUMoUv3vLC5o8DcgbdyG4E8i565Ey%2Bm1Orqp4pF9JlgHUFU4sWHjfKNkvjmwu5vJyatwE2XDorF%2Bu9yk6feI3DN3TN4cBexDl7SG%2FbEhHk7BVgyA16JpKXvnL3pq0O6cEAgWi0%2F10iVHBy1WoIQSBa3scdiPrQs9PjxtUrJ0IY9eInuK77%2BxITFxIA5fPePG9fiqEjEeUV1MBaTc%2FNnW8HbiGoJn963mdjmKiv8EWRCepeuiNJ4RtB2HFv84r0DpBFFK3WGAykP1rGJsPMnxTg1Fbl8Tq120yb2P2R8X88fM%2Fs%2Fr8vCB3t1qZWNyXQAIbkX0ltFU9ysrCPC%2Bg46i6uHavufvmeEZnVEmna1MMGpsb8GOqUBcE5kZcPRXFkVZhYpKh3Fi9l081UwZ%2FQfifc5Mqw5L1Ga4b3U56TB2B59OdPMEqafNt2dtPJUMk9ROQ%2FKKDbcC%2FpYQKk899xnSbP%2Bon8gg%2FCv0wJ7xq2UG9apSvC4BqZ4BaSNr9DuJoR8QTsBIhDiEdaFppY6DlL35fK5ec66Uie9WeY2RJkL8r7XxWpuDnlp3MAs%2Fm%2BUy1FkH%2FLdRMrQF07Rgh12&X-Amz-Signature=6e3652998699e71b64321b181f7cc61046e28f0c87ff5c1ad1fddf9195e387c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
