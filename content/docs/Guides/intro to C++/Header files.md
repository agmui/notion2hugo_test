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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZQP2N7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIA4U6Tckx9DNQqujUhygryi9rTmqez0jLKPvkTJV1smxAiEA7aEQkYvyOa%2Fr3qh8tG1ZZoupAotlvFuG2R5MAYPzJ04qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOTPYbf135I73W7jCrcA%2BheJQIvdXaTSrPEjyqa4KqMycaSb3P251jnaUE6YKrx9o1QHBh6zBY6P7Z6NUJDeAB1f7e8voF%2FUwguJmiFWSn8etAwdhce4G9Sr9bI5Xp%2B6K3icu1rZ05tarPrAwpSGR8cKcDY3oBgFJA62UJ9U0yVUSI6QbAA9nV58%2FEW8eW27voP6ZRBwlRBTtTPe%2FumAGLfoM%2FCuoJdqWyb%2FhBuABJaoPjULUwpaki7vCWk%2FUJjgorNd7%2FawM4yUMSLUDunSODfiYRJPVp0diJpLd8WQ%2FBpU0U0uYE2C2vLPt0un709NBqdsYhUTQv5bmMKr9KON4Xs2XNLsn33YqluWUdBQ68kEnP3IHY3dOsa3Uq0qgMm4JWpxKM3uBI0mYKcfCLwvwfhDd0CXTPIeIAJYHG0D08er5YOZbfkloYwVUBcXF7QWCJaWuhlQSRRIvRPvUg2jM6UtOBDjo7cK6jZp3v9qmm9BAqZJJ3o99xZttO5bW7XvEJjkYVt9UWK0OlEQ2pwGmorb5DttN%2BGhg1kO3IJTzVeFsBcuccXIdWF0XLkcKOSXdouSkAMNWKg7H9aLz9ODvUFGUtLu0ULEKTwsD%2FjMeZ9nrnxRE%2F4ovO7KLLX0M92Ee3WTbXtQg%2BS8G3%2BMMDy%2Fr4GOqUBcRWx9IPh9Hf2nxF%2FJVSgrOXG6oSz94q8nx91lYzIzRctwNGG3vpEE%2FzW1pwM8CrUxMgEaX35y4PIKOE4%2Bn%2BP5lD%2B86OYeKV7MS172gWzEGt3vT6LfrWTT07Kl6yBjpttp2lg2NBKi895GjUMUnl0w%2FxG%2FwzB2lUV9yPsfDrU9LIAcWEMfQQZGYMjduHqQzHeXwjs7dO3pO2TjsRoAOfPafcnS%2BO9&X-Amz-Signature=0ae411a9dd37625216989d7acc4f76c4b337f9d492cbd24595d8bf7ce6d6b9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
