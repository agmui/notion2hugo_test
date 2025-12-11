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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STP36Q4I%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCK9S4lq8XqVpF4vIX1npY4mQofRxibC9g2Zzs%2BALQVpwIgdJ1feon5N3jBHbeN5eoZyzLsAHuC42zlnidSW6kknEAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyLgiYYhXXiIMQ0YCrcA3NxldbkN%2Fo%2BW%2BNa3vQ2j8JYBtL3iz%2F%2BOaXJVQEQp0i2oa90QgxVK6%2Bcmr2kDyAjsw7IpCr37ylwwKo%2FO%2BDPLKq6u0iLIOVs%2BqdF1TDLeJyulUBiVzUZ7Sz1Lwa47G8mQRb1DLy3Z22LIcW%2BOk%2FhVjYP7ayIVaMch%2BEJIyavQj7v8AtVZrRwWQ4uVj6yojpU%2FdLKuN7t8BJ%2BUdPRJSpElotmn%2FOHQaJkrDyQrha6lO81Jld49U8fkhobF0tLsrBMMp3dISFod3hFAGMdev9%2FaE4B5mPD2Lill1Jkq%2FJ0t1vDAZle6s57Qb3Q8G0AqnFjC0R0fzRwjwGaUUaSU0GMa4%2B7tVoTBY4CEMwjlh0vl4VvujTa7wOB5n68IIlm%2FRuul%2FvmCzQ4p7GboEuK0szk3hzUT2mPDG60sxGM%2FqGRmRJmQ9UGCV8njWUSM4gxr9CbmjyB5u478wJd%2BDK7zBBsZMsr2nezrNrltNDgyjCHH4LtBiN%2FdcaMfw90eBDi4QK0UjJXvbFQ3kidrgkyzegKOKHFcBUW8AeByU8yYHZlCsjPbfrwTFc8lg8vsrMIuI3VYCsz47kVUO%2B5EdB0Sfnk8I2ZWkmntnK61JaMbBGF4mwweOTd%2B2rBzE25%2FPUCMPW16MkGOqUByhoTLcfoAADcMIzBViQbO5e9D4FrHAemJqTWlbUaZ9Sfkq5KGcRP0KJEZ%2FDxxxYSpgAo4w5trV69%2BGueRnMfqlzpom1u6J5ciDFjQee0%2BHaOiWF6U%2FFB4qTVPr2U7iRhl2Ea8gEB2YDdXWpYKtw18jRTt4hR5sIyogl%2FKwKBD5W%2B41DZKpTzbUXINojA4QYkiWzVOFFqtvrKTJpNLW6OkBDm7Q%2Ba&X-Amz-Signature=de53d2dcb8bd77fedb3616cd1626655e9e25728b0bf0f3161edcca7854a57fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
