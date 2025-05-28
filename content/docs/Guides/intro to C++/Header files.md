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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGWJX7Z%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7sI56aNMJVuqKP5aDtB4aEvQIDsW%2BKdczG99iD0e%2BAIhAPzvp3aYEFwrExDhPpLzHryBJ2RkkBBhkrzmkzFib%2BdzKv8DCH4QABoMNjM3NDIzMTgzODA1Igzt4tnbmr%2BnPhnZMvAq3APi92kM1Q5SSwny3A%2Bl8gMRnVgrHo0dqKdA1lE5Uh10VCF8M0jT%2FoOYIA94FCTIeW0dEpZoXHV4C5PoD%2FhDDJamtOAoXoDaa1zJQyPdCYewmQ386uhKT6V5dzbr9SQwvWh34xOZXxs92TWO8vnfK09oruqNVnLByzLMd%2FlVPYzOuxUwNA%2BdJyMMwkaXq1%2BrEPthT%2BBD8%2BLHr93rxqDWp58QlbiXlrRx02olCt2J7nPK%2FK1fdAgBr4d%2FXqpHk0d695f12Z45QxMdEU%2BnRiW%2Bx8vi4tSPYl9bOBRNwEpE2df%2FBxA%2BvySO%2BpDGVQdZp4ULU0nqP7DdvxJlC70IOuGVs3z269zzx46oXfCW4g28Ums5WlER%2FHBJ927Vsdyj9OOw9zraLJnCRJoA6XgEH8NRew9CZsSKPIg6bijsH8kP2tJTcle%2Fjm8ar8jAgqyh%2FeS2fuSjquireBdprf7w5W2XaXJgfab4PqjucZOpnMKbPeMkrU968zmLLQ%2B39Xr6D8BFN%2BxerHfdB58bbpgh5mecV7%2FOCs6A75v7jN0glZwGcZDFc7b8RVuLIKuePA5KyrAk%2Fi45y5e5dKZwwyXofwxPfwCaDQKyIQcW50d21jLRzkx4sp%2Bhn%2FW54WG%2Fa3AtETD05d3BBjqkARIqTPw4kvSiTINHdc3rqpSKCLVyUmbHIt8cQ5xcpWCXqgRHIa3ml7ha5LrRSrCJIqRZ3M50wBNEEDBfjXXQUK2y%2FxgmoN6%2BWz8DS29U%2BSxGGwNrItGe9RTkWtulNR6jF2jBwOyO%2B0nFEgglgXOaMaupprreLtzA%2FluL%2FQEyfnVFOZuWhPH5WrNwfqxreIqd%2FuHOu%2F0BUjlAx6%2B7nlgQmFmh2F0L&X-Amz-Signature=c3c7210c307612de219cace8c896834f6920f38357b9462c89676241f9b034c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
