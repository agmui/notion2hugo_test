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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUQ3TOW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHMGo%2BO6purvqtr20xgeQNcdNXxNtN4rNwhNqBZL1P0fAiAuHE8kz51iOQ04%2F7jTXnQXQDmGk87F6qlW71fhgqtElyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMOUHeIJIVEUSxUBztKtwDMMJeMqZxjYuyKN%2BO6Dg8OKwao4jliAvotQQ%2BqEHAQuP7tiRCxaQWUDJ7Id9G23kJ948dVBe%2B9t4A3roF7OONvJwxrb%2Fyh9VRPcGiRP%2FXEOJXae2nNUgMXLBrV%2FM%2Fszi5eYmdwcBQ5lkJN9tL1bB4RFWqQPEW2z3pBcaRQbdQL9OsAExk5jyl08CGMZN1EuVrIOXp0Rvl18xauGkQfeuS1m85si6ZnnYRPUEQor7Vw2MzpuK9Xqx%2BtEgZAd43wJW7Baw2KW3a5MgE6hAQszL1gaOZ0gTaGgSF3UysScai6a8Ji0U2CEk5k4Ef3GXtJMlz3C1aIocNFfz0YdWTI0N1EvR44sz%2FXlBcntZUkVp4cSmDWPnHbqMW6QWTUETprn4xiLQB%2BuRDT4SEcYVyR97%2BCOtN6zNNWW7pM%2FwYpKsXmPYXmXkV9XbSH57OYnZV3E7WF0mgp8TfmoI3GjQjNaa0mThf%2BuhTg2sv3L12gGsFPlDLvpo4F2%2FVVpved5fQnVR9KWLsgfjrKKVNdtZeZPrmmXaaht%2BL2nwK4x%2FW7KGOqtpEGkGYaWHrbQwhCuKi8YvA%2F661NmsGWhh6vB6n2De3g4S%2FRCDbCVS2fzDrgmoEq7hEuRPXe%2BHoeNiwpmsw2oWJvQY6pgGQoWAeEtGmE4B0pUW5X3TkB8OdX0SK%2FEJBgrnDOK%2Fj7Fw57zpIaigPRtvNnihrmjn4xLacVr49ewjmJc7yb8qbtbsffGyp2y53MATXCeg77cxeSbja0Wqxru9kBFdgTRM22MlEDqHJdhCIy8VRoYAWZGOOZQgnx9VEVOJXPgKa3sZ9vP90Gt6E4j86%2BKruQyOTFVvvtBs4ZUp4zLa0QTZLgRnK4bvv&X-Amz-Signature=d8fe83f8a89eb73ef1325a2b2bded810110e78be1f08ddd563f091adcdb885d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
