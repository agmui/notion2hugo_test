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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4NJIHH%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBmpZRE%2ByN4upxlGoHE7QN7lObfFwN0GQLfXMG5OGM%2FdAiAf56czmBwESfEx0KYasSKf1iGTprNjHLIn7gnyzs%2FbSiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzAcyTwNqtp%2BPSYTfKtwDqnYm8f3swFy8pfS3de2PQbXxhxI49n5MkPR2JDqLvKnmjqbO8orGIU7Hdg3bJyFpbWWSqvbj%2FIobWWiUTtjRr57lU1mSp1nxWPA%2BSb6Cs%2BD32fdRWG0Lf4DQMdY%2BAHs6m%2Frb6VzicM7vADzBXkARBGzjSraS7MAXF8FgHnoeiis1CFjaGHC0g6M%2BxRFtjaFKZc1Te3sGfQwcpbEdlM%2FPwecoCK6hRb1wOvXOGw4eUm%2BGl%2BUbBllQtQJxWIdtaadQx6Y%2F48qWFHfI5pY3h4DHK6zHe4M79YYyyXgoyrzvwbD6Nn5yoDg8VQO1JCZzeYOXzTGYBLiCy6X8hdR6tNCJLR0azqw%2BFPhwWLBJoZQI%2Bt%2FBGLtYrmNXRwQ%2Bh6fWyYX5gRSUPJET67JT8E9%2FQSmWej%2FN9M9rOVp2w5S5CwY38Gw3tolCvoCJbBaYi8kOo4UMLdxwwakPjFEGhGw1nn3SjCmMfTVoz4bww%2B49KMhfs%2F98ltKuoXcBjvRIVf8V%2F%2FR%2FZQoq8ntOjkX3tSyRMK7AN8tAgwSrqv0jHa737FtFYfEGaPrtyv8hXPX9ZQiNo%2Fv4508w57lg1cK%2BN92CSwiJjaE2cnwIItn13Y9KPuzSbfczrV4IPrW0w2wuMqAwrNftyQY6pgHSUpOmzDnWe7pSBGrvmDaJAnUBSnrJVpgOfLBVYh73uKnn%2BymZVSb5QaQqvw3%2BBoWvivQuK1royg4DEysuitj6PFSwJrztxNufZscaocSjsDMwWoaheKokDkrqCZcl9LPG8QPVmczVAM%2BCOKtFtTy1bY6zqI9AXk1yVMnG2LZ0YmkP5K4UNBLv4D08di4F8k5Yv02UxkVSfhNF0VMYr9LpjVrb%2BgG6&X-Amz-Signature=52f440b8bce1c38af10137f0b2f969c6612d643a14b3a7e2de724d37bc112c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
