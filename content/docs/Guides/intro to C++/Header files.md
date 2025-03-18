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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BELTNT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNpv6f9a%2FTF3RnOv5MI504zQ7zPiTRE%2BATTtcSwt2bMAIhAP9S5wvVGoLpR9miTFcx%2BXAkQudosX5wSYTdPzEHEgxWKv8DCFcQABoMNjM3NDIzMTgzODA1IgxyC5DAKhVwWPoQqKQq3AP1YWYSg354orIhuNb2sxXhXzE%2Ba2IUshr8wFcOpz%2FNEDfDqrhUDC4LoCXq636gfP6RZ5cYuPFFMQ7wCXvLcDfh4AfABA7c80eCUJDWks%2Fe%2BzUWLBHW3aoNtaPRlQu0C4EhWFyRvAlpJwL%2FArJLP1AtBaMuWwwLrKgq5S0Xwta97mnnNggZV5xzu6tZcoGbJUdsLiqcm%2BE87M6PzXsSpGGu%2FywyGSOPbzsjfOv4YihXV%2BJgs4EXmqSe7WmLU7UrXEDry3UG2nsuN%2F74zkJxiKrGWbbK0VDiamvQGG8v82orTHB9F%2B00Tec6M%2Bt2eNS3mYLG7FrYPyC2b0eSeA9nmtHvK3%2FcGd%2Bsr0Veedwlu5siK9r4P7q8aDAXpILIRNtDegfKL4jR0Iq%2FT0MwlAzZFUXLPXerT0ftIevFsCLthbQajeTdBmiGiOutXbdEzRpuGRWjAE22WsPgYQd%2BoDJ8UyNdf%2B22%2FuZQgN8lJNLmcK55FTqVnWOBDMwyYHIR9Guq%2BUOhzQ4TeGB4OoylLunJnqYOzs%2F23EAqtmffLtvHtg6VYvRNLHGR6%2BEkNVVYRunU2wYuxDlKY97K0p5WscQSZ4xOn2ET5tvsBts3%2B51TlyfR29en5e%2BRn1%2BxufZzsTDDiOS%2BBjqkAdss4tc32JWuqDF448uQaAeHJrxhjCSdeaI8ZfmBE%2BP9pvrWDIk4eX0HNfvOG6tw%2FFIFa9xLxJQ1izgoaz8YfI%2Fg5taMpfw1n6aA62Vx5rFnh1EZWUkwyTBszlo3wWZL%2BxVBty4dg%2Fst1QOIB3LeyWbil9ZnxUzjIL%2B16XeVxxcVMCjg85wrkUkAJJp5O6cLfZNURaI%2FN3Vft6hM2fYVt0QzdzLI&X-Amz-Signature=1f4937ede4ea242cf11fd73ef9a046d43c8aa33a530f2d3762cb060d897315ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
