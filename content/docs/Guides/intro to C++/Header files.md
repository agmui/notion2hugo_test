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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSS4AANL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGchkb7yevwUOLUSrXT1zVbBmS8CdhY0kmUbPdKZ8k9AiBXc5UHgDdGWywhNSjrfWg9ULa6cayit0oBfHxK%2BEZgNCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvQdW%2FNriFwll7FmKtwDU3R%2BziV%2B6tKddT45x850K3AMlMGMEEnjA%2Bj4Z3zSdfGYdBquWnJ%2F4g8bIwvrMW0NgxFnBncyDtjlchA5itXnrUqRNrhKax3MkVuC0fMgzwpcU%2FXLmrjKHLMGj8IZbLcRAfQK0m4yaCetHp9xN60%2BKgAvysCwvB55eDJ1yP87EvGVaaJV9VSbmR2JAeXQNtHBASDdsQwoBlLwZGucLLdRsz020JQz0FzagVxFi23adxW5SWONALQlIdW6HYKIgvwoBvzt7tfHqOCxthyPLn06CjQeuZajPYkJKmC8Si4Ha6IOz6wOWB80MO%2FPSbPHXseU2W0s7AOa4KweJm3nRyAgjV8yG5luoiJbc4TWewhmYYb9q%2FQWvPGf17j%2B8an1rwe3Y9Us3VYmRCIdnYHWI2FoUk%2B8Rdt90ZUM8PJJn1EORmnNDISm6FjnbLHFrZ0Ep2ERwiEgzBDty%2Fa0De%2BiAHHDTGQ2yBC5ftoBbddJiBm7Z1kxK%2FX0tpbGjKD6cNLM%2FQDzS7EiFOAGM%2FIE66o6RWCDLhc8FvCtQg2DBOXlfQcQJ43javNidTT5v6xY15nmJ0QUYJTDvhR3Xi0PHf5TiEc4oI3pptD8TrUPhTjZyM1SfrHhbjI6VylpTexzesAwhaaTvgY6pgEmGp0EKogGVtvdOXTrTETHD%2FBq6wk4boUimCDUIpGo7DQnRffZjYHCWw80GUwZZ2zVNimh9TAQXp2hmS%2FwWKYVt1k1rAfngL9hDkGtIpHBakjGzO2ZDSfe83mLSBElHRQzE%2Bu7bO47ft2uXUUKKk%2FAqh8pIK2IW6ZhQNk%2FUL6fBwdxZaZg47nF7lLcrjgcbadXVOGVdlZY2ZUuHNEiAAZqT5KNCBsc&X-Amz-Signature=a659bff4c68f0cd6542678753c88eb65f61ebf6cff7f2893beb1186e7d84cbe4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
