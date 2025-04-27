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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSKWQIU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV8XDhkU%2FWkeLk1sd%2BkctrGSIACraF0kpu87wdLNfc9AiAyupPnMZfgM0tkC%2F0P%2Bn7qWoNQSDG82mOv6eEIyYOzASr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMkKaDcoY0AZ%2BNH8KOKtwDZ34mtHyrjwUfGJvuFJmy9okxn67aoLngFsmUTAhJAJiqCLddQejhow6d2wxG5crfeDM8Vv9laMiLD53ikJLU1mRIcRBezmkTACEp6tWXY2E%2FYRRJCKOI0ssQVUti0%2BjIMt2L3NWLu5aN%2BbRWDQv8dPG%2FmzXyEul6DUt1ASEsd4nA4nkbcqUZbDs0YFsVX9PcIRy0yu1fUnwVyd7d5hHxvMOTmSK7yhfpSE0w4qoFk0lZFxQNtp7fZAbpERQeSI4by5Hu0Z%2FrGRseIyapu56w9gAMUN1O%2BUgndq2iLLtp3Kyq0iql9WHZ8A%2BXGiLBfGeeSgnqFxV%2FNHy3iVtWZjxh4SG8AHH9xF6T%2Bs8j6APIyg1bgME3mVtFYCpyEKrn29tiCsvzYA4yuK72R7%2BWax%2BN8lfifSLZinwyEfQ1HsUAcs9sBvUPGU48eZ38wUnqk8qkciK4%2BT9h%2BJpdCvvJsvC7dhSkYq%2BBgh6ZMVHoyTLmBlIAy9R0IN4pNZl6FnP5EfbQAG78pxNIox7hxM4QsTzJVLlR4%2B9HZEa%2BQvA2sDxIreuuKrVF4LWSF5uINMdr%2BiO5Jm%2BpPa75kwe71GqpW9xE54FwR1R5YRGP266f7sBInsFhRp5wb7kxbcY3o5Aw6oq6wAY6pgE9wGt0BiMVae9ya8wQ53O1lNbA%2FbyT%2BA4kErZgXoy%2Fislm7bB3zqirm%2BNvaIRYI7G9FLGm%2FS6xAXmV5FwNn5awgU%2BQaY4IZhIFZsnGfsPOL6oikJrfIIR7vlw0P%2B82WDGfzd%2B8a6IzX8Q8Loaas%2F%2BCEj35rZ5Ull8SyDh2jDGYtidbpggHi%2FAEwrDut6ddjGtY9jUj%2Fw21g9J%2FP8eRY4ugrYvrh21G&X-Amz-Signature=910a955918394f6f3adaa30e4a3a9eea5679d3719e626b3f0b6f2ebf11159a19&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
