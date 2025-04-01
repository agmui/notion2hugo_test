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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOOYESE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC0Ql%2BW3sj3DZuZEf%2BkyKQMdpYKUKJYHa6aY3n4D0yPOQIhANftqJ6WowmR3ppXNfXjHFocMNQzq%2B%2BgE5u1ETZhm3NEKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNTxxLLLGk%2B%2B8ZIioq3AOrfrTv%2FOEzeumhtI%2BWhZyL%2BHHaEU6Ux5%2FREE8BxxcmBA1VlVvCGDcX2%2BjVLNtqBsOmg0Eg%2B6vy32EowcOGksDt8sYrCX6gU4UYWgte4xFpyPr3QnZEWzdZwleMFsmBd4nJFVWIH3jNBUNic17gnARrdqUk0mSx3FQT1pt%2FaQgFoAd0nuFuVx%2FgdP8m80ZYAqrEisHfMgA1wG1%2B%2B%2FjuPdspoJfc8QHfoWh1cw53hEaSrEmjdJtaQCF1G1JsXSZjCOsmppJJKtDU2WUKxzn2sSn3HXFJxyuXEtvVt9wqkv%2FAte9gp4FiPfHo8El5aQMUwY01TA5R9%2Bp9vOAqV%2F526wOG9zIMeswIEoF8Eq4b2uBg%2FUufssa2kXCchiBlxIlPmH2QqCshwxpjEWmnhDOih1cmiWglJZ5zSoBBgixoK2U5pib9DEH43hkOuZUYb8DpoiMlYI5Z8rHKAz56sCvy%2FbxHZUErYTgTmvK6faH6EGoFclpqAlV9mJEgwrgw0e7%2BhS01kFgQpz%2FUwYKxbIkexkuqdlFhqFU4jeZYEE3P0MPR9YhYdanen80atX0qzcy3u%2BztwRDAPzFDzMN1R1mG2h2TftSJUAPcecJraXqUqr8NmOnZu2z0vmlURWMVajDW1rC%2FBjqkAXU%2BJGVrL25Ny0ezl9W14qtPPBYeTad64AQqT6i7bnP3uTaJ4%2Bj5dC8EdIzVq%2Bsfjn6zPplyyynDUE4NscaUlAH7LgaBEpmvLfddO%2FwVolStuQsxaeb7ODQgQig6y9uuEX941dpfh0a%2FhPppReWSttcxWmdJVtftnPJvKw%2Bidl5HRtvexEQu5U89y8f%2BNGvP3ODYE1o7tZL%2B8pAYplcTeVYUVf1R&X-Amz-Signature=aa9b43f35f4440c3b8fd506c558f6e04e518e7182a16a28c82da5998d25053e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
