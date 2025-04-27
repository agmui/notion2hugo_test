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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQA7KTU2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfbgFdfZ%2Bds8oj5%2BB4DiWTUam27UrG6Ofl%2Fj9eB9W%2FlQIhAMlnjSe56grYSCrwicRl7G5HafiG81U8RsMLbm%2BBqHcrKv8DCFwQABoMNjM3NDIzMTgzODA1IgyOhXLWaf1YNqC0Hy0q3AN0cs4nAoyzQczTIcTetPcoZL1y%2F1DUGI2ddrdWTobM1yMmtFh1PoRquqYHYeyac8qpqYSDhoFEkFNn1%2B%2BIymozP4iX%2BmnNoWfF%2BlM048jRiHwXaQbCU%2Bry3q52%2BtHgQUKv1uAfUzAuAkuA1L7tNMiFQaiOeAWYA9JxTLuJzEw%2F4dhHLApUssCQGWHL4gadBXysq2VS%2B6ZPfa9mj1NnphEnGkTFzq7wL%2FKte%2F74Du47t1ENl1iq7d0gySTDhaUbb9jBLxYoZbRTqElXcGSk1%2B52Ay%2BuaqoO7SpCYsUaOZSBbxPXaZAt9TL9A4QxfEWZRpQPgcOBzd73bdu72p542RpCKZO7I0kbs%2BATS7EVVnU36e7nyDwX6bL2jK3UxOqDgstbBbuLXaVwNQ%2FhMn7RbfNiJQTdNnNxFJTBB6anZmFWIWGNDLCZA9WUlh8exCtUTJfTVgLIc5gOJim8Na3tALLpSJ%2B7jsNrntJbvdb8bi%2Bkfo8MuMMRieXFMGNgkQEUxZalKil1GxOavw21Vm8a%2B9z09o6cum5MDw7iGTfdesge3x1J8O24RUySFbdrMl%2BOFP8NahlXF9l8%2BzKNRjVJ82GVXd3Su%2F%2Fid9wPoSowRDb9xW9uZlcBR6%2FHkZd9ETCdjLjABjqkATvEXKfg8IEZJ59IUKb1e2EGNMh2t1Nw3mlPMyG9S%2BwyL3hhtQvjSeNcxvT9K1Xc4JYPaGGTB0xeR5a2eeY0rPL%2FjFxwGsSq52K%2FS30ILIenYRClxQVj0wcEN5Jlinuwukm77McP41cFOIxJZuiDpGXQ1yY8yJKQKDv7Z8CqQcFDQbmPtntqAK8VADcnSg9ZLzUOYa672peJ3XWZz7A9cSZ1wxuH&X-Amz-Signature=56eda795b3bd0b87572f5d757ab15814eac9038fed089b08dd4878cedb4f89b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
