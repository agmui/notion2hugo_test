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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXODAQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCG2ANuD8IFnz6%2BAn5Cf9NOunqvAU0N629%2BxFiFCNaZvwIhAIE%2FAIb6UWCAlvtr3GFAChGCgXR3ONI0m5jLwC281HYcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY78AVYpcqCW8rzzkq3AMhDJ9Z9tiA0xkKxeyba5iHj9FSDBFCZBkNxmi23CYcmfEK1Tk4UlRFrK8WVGkkaP5OpHiK5XdhhjJsENDu23pougsTd3F6ErMNvOIE7xYi%2BUkZDsOTHFez7ovtQWZPvGN%2BOJxUucpoT47FVISR%2Bmkp%2FLOBGIZ7Z62fzQtPQgxqmjyCEuv4fDLXpGsSHKW9N8BmpuK3f%2F0s7u%2Fixi7y22lESKitHUHQAXItaQOzsavL93VWCC6yE49RFyCZC1mqvJgqd8v%2BV2QlanAjuEdacM3oaJ6qeWWqPK5KRSVvrKwKwrxIGwoNPtTcq6kXxyTWwhAyZmq6dxy59TH26VQ6PG1JsT2jABDjr%2BggJT7ERcwGeabwX1lNa1ZAf4SaxgTYp1viv29fVAuQIb5pFUXBrsAQp5YKjkl6h%2BHf%2BTV0o7oWuC6Lq1DzlPxNG7KvN6SRUAZlgp9dYmHw%2BbqxIha8sakePM65ide82ZfLKlVrtbyP3QBTXUu6BcKCpBUsTQmkb9ixrT87D6RywXYo2KdwrO1dj%2B9sVm7ErODaKPmzP5PQsIsR2vd7bNQNEREzI7wXT0wroNFkgl%2FwMEsXsoHsU7nIgBMf7h8NxXnu6lohNekbaViQd4aXt8RO%2FUVFKDDA6dS9BjqkAQyNeJx%2FhAFnzBlgNawaQQlJBazBFCJimTTqm7VJdV8ph6fEYY2eeEJSXTE2pRDVjqmwYVpQE5%2FjOlUT%2FGK%2BFei2mFQdTPYgHXGR7yGwDaWPBpMQh7z2Un3Jz7Qa5u7JBYokCSu%2BByT0NlmnChRmI3%2Br2lNmhTO%2BJU7wyXuV8qM2TbFGqhz9wU23scDzs6Vi1qloGc6rRC%2F5McFvt3z205XkEvpK&X-Amz-Signature=f54cffd02e75b05e0ed69fe102a8b3d53e5c166591ae35dca3871ef54db21796&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
