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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3XE6H7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEVLF%2Fdg1hCrV3q6y5Y52JhJ1aT5QWl8B2%2BO0oFu7UehAiAhRlf3G69Ht7pybb%2B0ajTdl98sv48jOZlcWQM%2FNfqujiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZxPrg7jRbJFCj7SPKtwDMFkOlK7N5QbkdUN%2F8zFcDXJWJRi6w6EvuRHwqVVUlYxZmU0BCOwwgyhXLQ6J5t4kI%2B2s7qF1LN6GH%2BX7jExZJcMZMeoy%2BgrjnXF0cK8Ew0yCGxGy9Y8JbFTyKSIRgh4jjcZcC9wTPRzjQ8Xts8MavUKtK%2FGtV4A45xBkUl7YDrN8n%2B%2FbaW2ZCTNls3EfQ5cobfNPNknU0n5rU5JzrGC7HpA90hH6bQExAC%2F8qv8au9phHU%2BE5rDmnJZlYBGnEuUdwIWA7C4e6jXBf9Ki2h4807hS7fXzTKZ8tPmoau6AdBhZHabSEedBByMzKfNlv0tGXT5W%2BvtR5LV3fTmomCggT%2BwsZYm73LA7LqdwF%2B1Y43uoYIeFO98h6mQyy0byoI%2FBMl%2FL3VtC2xYgrqlrQ9NAmo6XRs%2BlYCU5KrJ0hldWuTDbk3Tlb%2FBYlO7%2FQ79EyO66lheDwft53saaOksxQGpOTLJT%2FSGo%2F9IiTsWGVhtFeO0zA2vTz6ifR0weaSK6BbV53DAS8KGsOuohiEYqERHfgzSWZIu6Ce%2BGnmhi8GXvo5amLmMiCvzNQ%2BAeirkNvWp3GrOuxX4J2UEPPve5lr4IPL1BjNHpYjiTIoJDfHcQCP1ROgWC%2F2DeLLQ7I%2B8wgc6HvgY6pgGtXMtssgSY6jnGh3mOazYUK336K4IUGvSI47n5RHpvVBS%2F%2B%2FD8oCaj7z16Y40U3hVL18jpZYi2gPjO7A8lJX6MKHNqBGsckTcq5Ag18rb2SP1wdoTnyIvYVI3Tas2u9Sn0tc%2BZvwATh41BOnQzVCddmoe0mtwtmfy1Dkf%2B1QbSj%2BvUHSn%2BEz81AkqhdhWmyv7YPD%2FtLX9QDOBgjRYma42ExDHb6i9s&X-Amz-Signature=962b1bc4dea21dbe3bf24516566ebb9c95e9857593098ff41c2b34b410e0e515&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
