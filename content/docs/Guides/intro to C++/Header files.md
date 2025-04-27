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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ODRXRS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7ay%2F%2F7jO2AuVpPQl7MLayYpcHLfkDE0jzGVjx6NE7aAiEAxpioyaMX%2FDRB%2BBPLcJksJYnxLwt2r3zolw7DeE2sZEYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDE86m8eDeoyQC9TYVircA81WBGn4df2QYGYnxJhl5r4v%2BiW%2BxosOkDcUL4XiUNuv5cdv7rjbtysRxwOLsPNfhrRJApvOaP3nrurOwM9XS6XwggR0XfoBuwEpIbP3lRH5UMfj8JeuQ%2By1NY6zzZSMWtHbf645InDlYv%2B9CoT8wn0sJdKmuzSGOhxHZkhORfMF5l7T9BE2UULLonGK%2BhIIsxfERpHOYySc8IFNuk2B4qc0HfFY%2FXOnUXYYlqmxYnwcxUFAAwCVoGXcs87TWbJMJyh4MwkD9cUhfSEyM%2BBsc5Mr5kq3yHcMq0Uuyi2cyUFDhkq9zVoLQUhI6ONH3YWOVViPl%2BJ%2FSTxlFYIjjtoLyyY%2BStEnuUNu1bsDAtEvkJqxV27%2BQWPexflDUFjPYkMyaCLZEq4B296kyEGLbO3ggiMHM0HbI1fCKlzN88Foc%2BmyAsaFRc1GfIRqeuRg9ACOcuWujB6bvcTD4YH1K6UqbNaM3LhLOAMPCyYAcyV9LgbT4NB707S%2BI0qsTbV6kR%2BQrNbL%2BiIc9iIHPHZXGuA1PyLbV3qn2H6jsYqR6S%2BoDDiOxzlRsz4tinAc8SF0wVdQgfXaPc4xFaN0WnQbANiYkUSvFU7rxlnwhjODcanATKA7TZNQZfKf09%2F1jOZtMMy%2FtcAGOqUBcHlq4ig%2BmPJuTo%2BdXFus37gPsVan8ROAgay4flDWDA2dBYrlVNWqG4CVVWrOnualmmPEcT6CXPVW7%2BLalBZ%2B42yM3Qf1yOxq3ZZoXw9y2b3U8yfxykLomA6bB%2FbJ3M%2BUkAKApPuGMUSskqnUU5sf5mLFagI7nqdp%2BB9jOhcdEvCP68u7taaCpXKO%2FQYOUWscmsfjBUFHn1x12Y541Gk%2FkOVEqTja&X-Amz-Signature=1dd739f0d13aacb39876fe4f597cca384c691976b9899fbf3e9f87394370044f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
