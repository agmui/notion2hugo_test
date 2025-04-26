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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB6HU7F%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsbjq523BaROxHza2lNMydT4xVcHIvcH7JOhgY%2B5n1QgIhAMt2M%2FhlrXVslKPgx4hKrOQYdLjat4hiwbc4xnaoFBTaKv8DCD0QABoMNjM3NDIzMTgzODA1IgyQHi6sRGnkcKyQa%2FEq3APSNq8f5emYI93l%2B2677ZenDGqZyKSFo73kk6vPzN2rs16MadW7lXhPN2aJQXgIbmmMwN16%2Fhpl3Z8td6%2FwIA4hr%2BHmxxEKdBj9Iag025YVy%2BnYAdkUH92Fze9ULuTxaW9qYLojP221Qbr%2Bihbi7gcEEsyA9KjmS3VKVDmptsG%2F%2FvvLxEw23Ozcc9P%2Bx9pGDGUjEVOEEUOcS3Zw3qlf0mJEF4swcnczMCLCInYrS38YfEGOKr9YguAiv16hiAbGa3TH1LED5GfiaxzhFCfXACtM1uALCCxWibTNR%2BHhMBUg7crCiYmHfN6u%2Bze6rYORwrquyWVkc6mpQWtNmimJPf7ZiRNWpZ3uOLxIjl9S%2FDjaHioEF8dbN8RfBNBDgrJrQ5Q3OwSr4KRT9UAISqOioMnxmrnqBcXWahZhHCqO%2FYw377Her2CszAC10m%2Bft5szFpNZaFLzBPQW76Kp39631Q%2FWijwc1Xtj4ROCleHccVKtPoGeYCykfomEiR5J2O6Un1nsIOyx4WFvKpTmFFJCIyqtKJjhTjTnB3LFuF6DQ3ytN9p8ZKx6s82RkUJGIbYoioe1WAHxrsJtVl%2BO%2BVvBaBrxK6NpxnIFxlV0DOOjWTybxvYe2EhnPgcPXvJGhjDrqrHABjqkAYO88cWh5neY0MxsRtbF2TUCGaqH2IuiU3irtJJNhe0mpmj6bPUsZHRPEFmoXzxL38%2BA37RnJAUfS6l4G1e2AB%2Bjuerji7ysbYiVyq5gGn5IQgQPeJixfOB%2B%2F%2Fh158zHC7tcqk9pq5LF5EvWiSw7G85Tw0Cu1yk%2FW6REFcQ9P8r0vSeAI%2BR6d%2FI%2BlNU8K2ko73a22xxEVbQZ2BP6qSQSH5I9TfUE&X-Amz-Signature=03f5b13ac4d23b078767ff10c4d50acc86300007d476ad0c91459317eab6ce09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
