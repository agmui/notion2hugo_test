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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES4Z4GE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDRuSRPk5XbzUgtDcsBa5gbuwm0QzEyteG3oN88cBIvZAiAU2OvTcjqeDMBnzyjk0Lk916kpBdwCVTkatxINmS1THyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCva4WN9BCgz7wQ72KtwDDoyCPlfSoGH1V1vlBeiugrC7Bbft%2BxYwOAlhdb9aOCFAgqyX4J6y9E6YALKONOl7Hm0XNOA5DCBhKJvqME%2FqgP2Sbn3iVp1JggwADVdLBwuB5WR9ZXkmda29EsJ7Ao%2BzlXEzk2QOSIQdL12kaMwIEiGCQvaIcqI7MBbvUGoJbb%2BA9Z1heurPvvpy8vg3mAJmVSrQSXc4g38OARfGaKVv99eKEd%2B2KoEklGYUBKruMFKgsrP6M7oVm3eGZVlMgMliiMkVxiqJE6JAocVvXFD26WT%2BOu1%2BjhNSbKc8mTKFI0MellI0WLMfJs312JEbn9Di1KuWo9UuVI93FFlpK%2BX6vapBrBNC0NqSY3m8BdksewoGexaunryX4k1cJ2jRLazPmH9e%2FN%2FZzJmNrSFDgRHTzcvJbzwB1eijgKJxYcjzOY98SkQhV4upgK%2FpixP5I8nNRCWhO5BvxXlLpGxqMDkCf6Z7T7hsGxvcrSncJhZ%2BmpKy6lPyG%2FvXpuuc3hm5rRZlfZmbUg725%2B3qee4x5lwUV7L%2FNNWiL%2F3w3wm%2FmSoabPwRWplg87ne1KE7IfL%2BaKFiUSvYhINrb9dOgHH7k%2F0F3FIaMDKu4LNh8tD%2BDl1Y4f5UsUtMcnt8NkWW2mAw79rDvgY6pgEDQjxAVm9DR1EcOEhvp1pFkZmJP7u2u2LF1jCDhVccXEG6jo4U4s06fNBwufbH8%2Bnn39g%2FmFlKzo1NiCjHCEHGY0%2FxXqCo0s8JwzaMEuXByu%2FqJGSdVAsiP1OaPXZee5ISJ%2F97xt5wMwb6Ipj%2F8U1MZhKhDec6BYcGdW1tZ9fAuaq5tiEpT0h%2FygmILvbFI1fAnUdSgskGYQDZHkrddt%2Fr7HI82nEG&X-Amz-Signature=1cf1e1130f7c740a97f6f85cfe61e82d7612e94cd113a7da62a2233e47bbb809&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
