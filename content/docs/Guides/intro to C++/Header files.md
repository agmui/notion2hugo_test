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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I2MDUQJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwKImsQ25w8A%2FJie5nGR9F%2BoeE1lL%2BmHCZ4KnuXphE8AiEAqH5eMB8BrEPn34ZgGoqSeg1bBmSsah7que7z7ovtVUEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFyVmoaiOSAhz12jircA%2FU5MAiAs1d6IMpwiwJ5W%2FBRf0EXzLwLZr0n1W2TEvzh1tNEh7n2kEoYp2TUQg6SVa0SzHdTlF3T0W3zBTNyaHLJnqnhG4GieYgJ4QeUDMz%2FcdoFGIhaLubGY%2BKiHrs%2FQqAm%2BvHodBrvQJX%2FVBygr%2BC0kZTHoGEa8yAegv4t5ScS7RHt7YNQ6y8CAzP9fUN76OJ2yJUWWc%2FQ1M%2FsKE5MnXV%2FNOgoba1t%2FMxl5puDWwuF7MYHCZBB8vjAif4FAEbghjs3VB1zft9DtcDDaVnHQYLVf%2B8qHZctkhDmO9SulZGb96ox%2FV5AgbjunYkYqqxc8Y6hmRZaP8iNvTsCknE%2B833nJjH%2B5qtyFDakb48Ngj%2BEb%2Fcl6ccxLxH0X1EEy%2BzYpTnLvrQGu0pQ2cF%2FAZj1NOFdVf9zmWuDgOopfT9n0HopnlYhhzXERS%2F69F5gePi%2FZMDby5%2BR1QhSOeY%2BuyvzLeWB0AcT3ByOeww4Z1gUWX%2BzZh5dUNTRPR%2FDaTkG8mGKEDhis2ZSzds7wPBAuQhifY%2FmKTJGvBDTztFV0ObgropiaK7TxDErl3yC54AVmaQk4446kGeQhM5LTa4%2B%2Fui5kuvmqC5sT9xe4Akk3O9suaCUlbAK5jw4nYiQmMlTMKWOsb0GOqUB54GsDmX6Q2h%2BVClkvgerB%2BCO99kuYOaHQMcNZV%2FAAIn%2FQHeCwMuJbPIQUruTMN9MD%2Fd5GLsj7eceiqM51NmJQGFfz5sQRlOlRLCYRPwFur%2FSATH2e7tv2dNPQAL1HmYkXnfQuJ035hveQluFqc%2FY9HZB16%2Buvfe5EOUc87XV%2Fla98%2FP0RxybaH9IU11kMQV4KTzebKbuFWYxLw8ARHGkBqMDymKw&X-Amz-Signature=1c11cbc47e0497f2b5eb5e8342e815cb897831f36747c8850b7d1f1ff967a09a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
