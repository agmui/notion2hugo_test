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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKIS3BJN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGNQm7WvKIqwgy3iFdTAB9pdG8P3NYhLcjTkv30LztYGAiEAx5Biw59UqP%2BwR96bTFPC4ovGnBgSwQMfy3yuH7CWbcUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMqpo3ivKS4%2FV8Fg1ircA6JxE%2BO3JvO9HG5JHVu%2BexLPgSGc0i2aHnEB0te0rIwDfNW6qRfPtOmspDfVSC3z%2BIFx%2FQ%2FKPJoZM9ZuQRwitxl32BVK%2Fk0r8EF4yVvqfrg765H%2BA%2BxaQFoWlpJKN4AoePdEMdu2lv1dGC1KsLUqCov6b%2FAix3VPz%2FFVvmvBCCcVFau3SltkoH5s7VECzgfaKJIgFQcXre%2B7mCCI56fXYBrlpCt6Wgps214XrpapLrHj5RRry%2Bqz0YFejbP6tFpvcGEtDLP5a%2FXVRr20Sch6%2Fa%2FptbkTDDkScQyTV9jVhDOwAxFLqfjMxEpOtMhm3VVEQYF6LZke0kRWULvKB%2B58%2FUVT1elPbkZSlLpa%2Fv9816WKau1kdvAYwJHbqMK1jtgrYoLMqLm1K69a8N4NmT4DR754Q9XfMsIT0L6dCbUwRMhWWW9WcJV1tPAZlVZ5sZFbRASJSO30B%2BjrVE7JcYJRnaGHNHFWUiF7pIfCQ2opdWrm3m9Os8xBZNLzBVcWVVq9q2tt3JpOPV87dunmEupSaQFGZlyY5PDu8gLfMqzlzD0RuUBmvi%2BBYhJDbEEiYAnaAhmWnA6DTSDOy%2FyC0MEr%2BkX6JnKLOYq7mfdTzc%2FGVvY3ZYfpo%2FEbDtAIxpjUMLq9s8IGOqUBl%2Bn8cZUyrC%2Fj8%2BMCCcyH6ooe8mG3foau%2BiLpCGB%2FnKogGJE0GmIfIjlFIBmSPZbd5WKWP6y6B0VSQAev9Dv7%2Fn7GPhG9%2F8pLgmrWLEoxGBLpmumNQShESh%2BuZ0jYEkXm%2F4SNCEeYnyro4tutGgub8Ph%2FQ0PNwtxvuQQnGi%2FS5VylfavmtcfHwiBIcMvPoOdEzGRYaPMWK2IJQeAdIWNgw%2BGh5z8P&X-Amz-Signature=e965bb8b5a919d0213c455c710ebeeb5b6ee1e05d3e8fc045265233955230135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
