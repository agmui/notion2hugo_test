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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLOX2GG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaetN%2BnYK%2BX30AhOSI3AqWpJNQ6%2FuSZvKjOA6r1bJAxwIhAKN1RStbV0VgbX2TW15eOiNTJxv1t6XsUmZFJKIp%2FVnSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJelbOfNWMjCGuwP8q3AMrOTePWU%2BvAYnYLKF9gbP%2B0VpCpThaTF2vFhpQzaKitgjp43UeKG%2BAUKneG2C2F87x0U7JtoRL4Sls4UeUOsluE2AnMOHg8oMBNA9zB6jbmjfp%2B90TOlZRjj3twXgi%2BrgtVfKLdxIhTP1cP46u6ZFqDpGJyfUJfRuGMjmUdgyzkYHS1%2Bqig9%2FRPPJlG4wvEw6qMrdRfrcj33CQZDuzcfwWh5bnfTsbuq8rjIESUqCuzFkx4lPR3E5BpzW5%2B3fzzNWyTF4og2uNCN%2FtqCddSnyfbKBg2gbe8bkXVnwC04F%2B%2BPXUX0yJRs9qiYQ%2BGsjDVGj7%2Fv%2Fn1XIRjYVqt8a8H9fQXjZsx6AX6ZiL4p69zB31n%2BjBOUAtb6dXq95d2ruRqgE2Vbnmaeg35ndEk43zte0WB%2BJrfCVYeGouzdvV45qPt5XdE%2Fd9%2BQBHCUM%2FdL0%2BAtSHNGZJqkN9YR80qjMg6Lo7pbkLjkyRLNtVM0o%2BDpp2GSdtmVtbxZ%2FKBr6nsJ7AQjjz8BZN3JDan3ax1TBQJtcR2HZ7QvL%2Bm08QVrd0woGZWm5pep4My9eVTik3e7p%2BfDQXd%2FXJQhbWwDhAjcZKs%2BF2iqGR7ZE0QxHFB4XOVWYAPBqHayiRQtOq5hmRsTC009i9BjqkAa%2FQgTn62fycUtVKk0rFAf2OSivL5pGK23Dtd9P25B%2FpkEA9e%2B0jfV1JHEEABKfX%2Bh3Wo6XFRUPwLpun9JrahsYkkvJiaeFhHEgby5kqo1DvBo8prg1sh3whItHYx46p4lfbfu5WMESsbhkA5hIm9rsAkuyFynbkDVLv0v9jQYABVsa3pmZP5qpO2cX38%2FbTErcR9%2B%2BHBT8%2F8ZJD3UJWQKK3ipZ0&X-Amz-Signature=3116f6422e80ee52aaf612f74c9aa756b4bc71e3c0efc7700f0ff09142f596a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
