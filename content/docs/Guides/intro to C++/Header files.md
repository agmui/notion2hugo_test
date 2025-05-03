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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY3N5ITL%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDBCC5NL%2Bf4IxkgHu4p%2BEu1A8YP5o2pVa6ccTmB0E1vTwIhAPaG3R3O4Ta1EyquGZScFM4PcxXq1dCNoMD%2BzV8Q%2FzUdKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT%2BfrhV%2BxkwQVMVNoq3AMa50b8ozyqHSM7t65TpS382kq0L5B%2FRVgjWXsvwouMmmbO8QSl3N1hA9Te5Cz9FzyBlIct6oYWYysTK5NS0HzvE8yAITUcUjzTPgtmN13adyeZSVk2P1yDQ4S2AXBCoca4e2eWNJLJKUgXLG4q0HaqStsEH7R3VnXVZDoRArxVT26ydxSXcZ%2BvT7kzaJ24GjUXiPqu4TOxPUdiWrtSvEG0cUCk6XqzfQy9pY6GNqLc6NEVs%2FaSIfN2eAiILK0Ef8J3HE3y80xAoxIA6xYn7fuCAluhwHXkn0kihfbDTn2SLe%2FXdEB%2FkhawKwdS6oZuMdfNmxaMaS%2FKMah8OSUmnrjtvWmAW9Ruqq85FQK4lmxnSOUPNSDHqWQLGvAmQY%2BkyGydPkb49NjwSnZ81spWH%2F5ZxqY%2BWffbDFkzpCfxTQ1%2BwUPU3lEFYDG7s5FSAzSQJ%2Fo3qJGgLXBMIbiBYW8ZM7YXK92NzhpUcbz9o9%2F8fva4Jo4BmoeLW8a%2FTZbUe4vX%2B0ejni7jKTPoNwMeSI00xUu3Fz23Rv2ZBIQMZnPL06PS4XGrwK4C3YMkUCWHWyZILb2C3zH1a7B%2B8gBfpEkDRIKM1V8kQ2aaYZfmmAeItjWNtVqZOrTmAWK0rFUDLDC02tnABjqkAdYhVZ3FoX%2F4MnRrOleE6CjAXl9EqjCe%2BIrAXam1GdJSpDij%2FZjwdF6XjSmSjqCzD42%2BqxSkVV5aDm17vk56jGE2JVkfMwgUbscJz7%2FQMQ8r4jO8kQ9RWAyQu7teKjDyM8hbEQoTPtk7We4Rl1oz0wOe89V%2BiIkalYG%2FaSizLNXKNKXZXS%2BMptrnG1gTdL%2BvEEgHXojmMRrmfWo9pusEQ4DM43I6&X-Amz-Signature=fc5c9fdd05458f494ad3431730e08cc602e884a2e1f80cc135fb36381c1acbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
