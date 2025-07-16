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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27M5LCM%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFv2CAJdn0vn7dCOkCpjyRp9fZXgSH77LE4%2BVJrLIj%2F2AiAGfktDkrlu2CUGas3nJjNPJAvWrtPYyaTnKjfdVPgl2Sr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbgHfV9xAwKmggmbGKtwDhBRPnXDJm7TTcASNIwkU%2F9%2Bt0%2B0at3GQRSozO%2Fhc8r830FOJRo4JD%2FMripAkKI%2B9ku73KKlzbKogcHtn4Cy%2FZ7jrK%2BGGPFYrMJHAFVi%2BYjO3kEmZRhX5z%2F1NA8wTsxqiQna6u5Yt8noNvaSPRLg5vttu4fqbCl%2F%2FibevigqD6K2EJuSKYxcrD43q7ZUMyv%2BnVyihce1UqsAvwjgM03fCAiCtOSlIFIar3RnzQJe2KwDQ1jJh7TPrFHw2GSUuO5YnrKG%2FLgtMQsrjV08wKiz%2FLhFexmXnA5SK%2Bdar3szhTMA9hJDdwHdwZnjqyyuWkfo5XYcDA6MJle%2BanZhZ%2BJSHYBvnuX8LG2emlvcN%2FjC0m2jaiHMnmRNf3NTrQQtPZRI0unbyPAg0%2FYYfEmnKF30hRirdo6re0ZxttgqpQJ47Yp8GOINzmANwKxsLZcIm3vuIWGHsFZDiR5Cc8V946fETEJTAm1kgH9LwEHXll%2F%2BI%2FC5A%2FIsyzXLKL8U0qsbxTRblty68QveTwN6Ls4XlSkablaWbpOJGueKYyH1AYGOLGuc6stlc1zXz61h8w4LdfyUBLVb1oklE7tqixP%2F7skj8b8lP0ij1Cxe8nX0rjqvgpHVIyHnnkw8IydgYgzkw5OfdwwY6pgHfGUq0g%2FX8D4iOTzbzi5NFJYUkkL%2BMdkLIBeUZvyoteZVpCgmh7AGenEn%2FgdpKby4ke0hs1qYvGfAGU8nthzskXsI7TUA0HhFgiZ1IlqwW2IXBcef62H7qSaV3NFLgX0tuwEmlakJsYKGD9x6qnww6Y%2BpgV8judAyABXd4XqgXdL04Hyty%2BI9DtlGCtV7wBCaWqd5YJOosH1NG70By6SRif9Bl7gG7&X-Amz-Signature=7ca54fdd19062769bc338f6f4e99b3c25339ec1ce06ed52f2d30b9c298733dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
