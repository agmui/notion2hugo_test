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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFHEZSX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGR2lTFJhplk2Zep8PQnDgClnoZJED2nXgnNxTJB8FpAiBGn3xU4UKxHhH3lsdWjGSKOQ%2FKwWpE158wx%2BSgUEctUir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMy4xWl1shEfyMbCZBKtwDuw%2BtPLf2oZISzmvk36jmFvJVPvtTZQCkleQh%2FVm4%2B07yW93mjd3siN09BfNYeMhpG3%2FauJq1X4%2BKlQOuylD711E4t9ZtxMOkw7aKeJigkJb4WYO84JxkDXNkt%2FwV8ZFrn4kk9la9GkAFH9UM6B96ICAqEM5XQkblTjpEj3JWRfgizclorktFlsmuKZZWEEMnSqK%2FyxLFvJO8xJxYM%2BxZRnCg%2BvTwediMdyFoKTeP3ZRwcRBb1LVtjPIXnYgJ08JmaInTvS73yn4h57e32xcJLj%2Bow9dIqtGAar6xuBZTq0hZpGhzS1I689%2B6TwwgvsZ4iZQdGYU95eatkC%2FnUFTjmxjWQS8oGnQOuXIl072y8l6gAGton7C6OIshTBZZ%2Fz57eQhV73B0CC2TzJlEQOuU4q6dvv%2Fwyi46aAurYsSYpkEQkxHdgb6En%2FIIiVSBFJUhoQq%2FJgvqf8%2BTNXBNFQT3yLNzj2JeZvzpEslPv2HQCVF3g%2FaxkN6WSQIMGyrAY4%2BghPAOEgis3ZxOSE6ZB8MXUg8dGQzwtXmMB934pHX9s4pYAkDAnZSqCE2QXgOjHtUjA1cF9KdXFn78VW4mHZ7sktNy6ABhhgOP6ZaQOiBDtROegAjxfHpZpH2WoswwssLGvwY6pgH7vkIuyI1aV89TqQpe6qc2HHZ2R68l%2Ff9oxJGw2QvVoWkPQUKZuqEqcF%2B%2Fi2Kjppw%2FvwiF%2FVJe6NJM8r057e37wZnIB%2FROecWKnOfL%2BNdQY26vYkZ%2Fw3%2B585RQSAhi1ClasicAShMAz0%2BOV1X0JMWuWJ%2FhgaYO42Myj0vS7F8JPHRqoYzldpWQRujaiK%2Bs72HfsjHXYqwW9xEh4LRzMHUA2ub2ad1%2B&X-Amz-Signature=845b524401aa87bb802b23cba79521b81968f4ab43f7e77ffc0d8cfe2646d861&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
