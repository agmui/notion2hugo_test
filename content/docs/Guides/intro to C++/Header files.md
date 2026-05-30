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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPKXM36%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBjqElaSH1qbUOURRSbJxvvRdCEn4sWXiHRx%2FjHZLfTtAiEAxJps9AdhhzEdIyTcKXDLxC1yS7TE9UYIuVnx%2F36DRdcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc5miajgWrbRwqSvircA6GNZ%2Bwjzw3%2F62dANaMqZMSdtYp5eh%2FCQ%2Btoi%2B8o4tlq52KmLaO6062sSJlxb5UM88aUs232ZGLWWwkte1t6EGbw78emTEXw74cK65aYjxJEdsK3lZkkCq7lC%2B5hVb56NlaIUgeBaYc%2BtYC1UX247l2FVZxLBGlCrym9%2FcFMPcljRTq4%2B8oN75bz5TMAqTZzZChW4slrHfGZqtIK3dZUKhAAY1uupZ31KRbMTIIWKi1M8Lkm%2Bh6FA%2FyAEfES3m%2FU%2FZnS5bbwiotpX5WB6W8up1Fr7sFq%2FTucJOCKrepXnO837wHODE%2FNXCdoJ%2B%2BOLndDOfSIMKCH9VwsC8PiORJg7iatHd3O7bjVYJZ%2FbNiBtDCz%2FqKwZpTFxysY3dlSd6XQHYjx6V0nIlh5UhdGLBxkQtF2PrMAm0erqVDbpRobDNMpOr%2BmiM8DIDCqctDdVss7B2zYwyLx7Z8XZJsoaEc537iyvM%2BlTiIQlVGGt3wqKc2Goj1fUziy323iUm6W3GpxVtOdmQl0riEGY7b4I3XtIdy8aQwDDGZGwhm5vbFuvJdWOU8hZBGgYATFI5cIiASjca%2BEKjp7uCJYzf1u7Q1J%2BTak1xFuH%2FS3FRPdUsckdZL2qPZaxx2%2Fyzcbex1yMPCm6dAGOqUBfsHxHJWhg3tAfAQUcaWaR1J0u8o9eTiZFoyy0sVt1a22pQTn4ZnEnxXhjsS3RLL7D7GzFqcXV2cELGZvUWNd3PGw9S4e2ASaVi2JWbQ8wIGUr9Jn421x1q87ilfBIbqioWsf8p6s3SD%2FXZmIOiTza4QzzM70ZRNRxrKzFdcW86TaHZ4JJAC5zTwPWRMVL2ze8gO7PmszqQHOUEz4tbsuH6mpMgGH&X-Amz-Signature=286956942bc11a1855f5f3f351025a9da02a5d3859074d5ec8534af05e2bdd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
