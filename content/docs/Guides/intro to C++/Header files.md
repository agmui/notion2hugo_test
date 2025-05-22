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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COP7HTF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCtpwk44Bzev3Yr7T1ev67SeThs98EBLF3EmWL0G12LUAIhAMGHJ87uOhlkXVOr8Lp6ydCmb8YS6rKCqIq3pwjmiVZfKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc4v1nQZbiLmABXkUq3ANIb4Sad5z1pry9B1xMxPyN6ANrpCVXzqoP00EG%2BkLHXby1QAEaSe%2FEIlCm02JL937FWaxyGqp1EEcrKCG5%2BZ4AJy%2B9JzOkSSWNQaZ8t9n3E%2Bb2oRmiKreh77tHa3wAmWiMPoF9ZcvXn0oVG3w7KIvShgHn5nSolY8upbQngN7BMs1nqJfk%2BnHA4mEXujjQ6fuIeQiJ6PYopbTBAzvbfvkGLqdhl0LD7e%2FWvr5%2FVmUNNx6P4sAsbksTXjwZwhOWRW3FCObE6bLsvw36UGLK2kohdXfKHVUJdcQHg9Kw1p8nAf7ILiTxi%2BDrlcWGorNDe0yFlcAkt%2BuUKSeIOZW8qdxN2HLk6hoQhsq4i7WdFeLoA90U%2BAdBRgPoCf9nRCFs%2B7mZmh62oZ%2FHBPYDuQoBJGQn7dih%2FkfculYv1XD5ioj%2FCrcBfnS1WWK%2BPm42lyM00QDZePlb4c2RF4XhfZU87C2AEP9zYt8ldcXcCjwG%2BsOH65CM4bcHRXmL7EGaA1RPYwU1cyd%2FOyKuBS308atCRs4exOsr14p3dZle7bJX9pW%2FxdJfHYjf5q%2BL5bpW8woaulZqosd7rxonzEGfnl5pnuDufOgf%2Fp0IPFYPi6o7CuztHQME%2FpYSi%2FKEUvTUnTC0lLrBBjqkAXsI7SxtDOk9Fb%2BfyRv0tUZNTkBbWnw3Brk63n84xyf51t6xG53%2Fff%2BivTBh7Lcriy3WD7MXCk8heVpYcHWGkAbZmW%2FnHAvWGLlzw%2F4CBGIz86Pv%2FMUTpL3eQI7zcw9wxyr%2BBKchhvMvFPQuTtHR2KgOdm9f7jYAzDsKljJ2FYEBOwNrpcsI4QQQiXU92styYD273k2rkWaf%2BHMAEZePM9DoNFmF&X-Amz-Signature=c22236a0d428ad036051d55c5efbe3e22f1a3f29371d1c6104c55018043012ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
