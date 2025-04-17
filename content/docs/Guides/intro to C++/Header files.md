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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWEA7RB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsd5y%2BesFPhchhfL2Avdr4LTA%2Fg%2BrgJBrlsgOJa9uVbAiAUT3Luh8GGWwYePZVawjkJJl7TputPbhYol7l99W1N6ir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMASgWmGRauNLWL8tjKtwDq%2FrMwDB%2BqZorZR14WLYhbyTUY2C9OQJdZFoSoeGipF1I%2BsAfr4M9Brz%2BcvaMz3uNWjlp63uGOxRnaCFa8ughfSr%2BCEof3aYWTebu7FZsqsZ5xcBN6%2B4dFh3UhlF7JYnTl0%2FBNG6PIYox%2BHlA2h3jMviFBnE2L0mnk5Ji3mzw%2BR5%2BTdtAtGYUhgrcCP1k1aDRc%2BTm1wwNj11wuZS1Y0Q5APdtrrtsm96vDju3A%2FXUCl%2BaWbNKVWH5HB31NkEYDOVcjjXi5pFqNthD3sfZesfmXKigcezbncZkVAkRvcXo5EnfHWEnHEw%2FrIAZTVGHgwE4jHg4XBFK5zMHcC88RIDcJWPPeywMb6ud%2BabcU1hb7wG7KAVS5Pa20AnwMDrAtbmBggL6fb5y9%2BVgSu2N7SLust78Z4LVbvu8PDKEHzkzaJ%2BGiZxmCVtyTMkkUrdl%2B98X5O%2BCRppU5RGumJoFvTli8Ot9Ha9Nhtdmjq8sFg%2BKKlwoLtBYM8DiC4uEuRI0evyrQefGExDuBI3mcWKPjeFVd8m3hYIlSo3rjsS3mYhdQMzBXp6h94J3%2FLAZnmfCPhI0DsFTreSy%2FhwsHGX85WKQsFA5Flc5XwCFFw7%2BIgNWYo101qrb%2FO2Zi%2F1bZRAwrJOBwAY6pgEjr5r8%2F%2FHqMmOzyzqMTh8xX%2BCYxuBLQ2BmpDDmY6ocBsInTUe2d6I8BwDdWmFDOGjSgY7ELw5FTRrHtZPWiQwMr8ZOWTD9EW9E1KHr9%2FjlJK3g71OoduArpJzIbJF37%2BgUOPdgzu5HehmTMSf9JlXuXV3ls95jXKI1lhxv9b5YHM%2FwnWb43kShCaslx2siqPP%2BDuZA4TIdCeWZVtzvQ%2BPHO9AXRFnq&X-Amz-Signature=4457708653c876b4e92095c68be184d1fcb0acd0894d5fa6ff3e802067f35773&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
