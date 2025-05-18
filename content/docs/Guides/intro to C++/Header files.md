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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHJPVNL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGC6gwr1ImspQDRIrJ4hV2f4RN2WzH9Em8%2FKIi4td%2FlzAiBIiJBdojyfgSEwPS2fLPc3uvsDwYhDDKEWQaiBvEKuEir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0gUZgug5BsNtuER4KtwD02i5c8%2B5VYXzci0XH7pToE03wmCWFRlk5%2FQ89A2H1QsvX1QQ9Juihoq7akIYtxcFYQx%2BWoqm7bXwvYJdsQfGvAHQZyT%2B188nvPmXENn4ijWP0cJmi8xygjSyGrm7ZHLUN3aQr6gRgqbDieDIPP0VuDMr2662D2ZuBaKkzscxxisNTPsk9CiwKaWs1fe4KLmVveMcob2SsgNj84%2F3Rl4n51SatKCgw8mAIPRpzpZeTI%2FcaJ5%2Fv3TLJKqdAPHndVzqDnB0jchdwOuF2ENjeBQRd5KsI4MypBjjx3yvczq0NRCl2TI1hITweWXgcGoLJ9OOtl6qYevzO1TbKdCseMRH6CJuDLZIudVbwNl7jU6fo9%2BUoejkTLUqzcXJzPV3DzXbjg%2F6cd0jxHkxpZZwXFBRqibkIjmI9VyZXp2KTog%2BKi1vhn6T7INE2ntunoG48GeBj07ZQtHxYH%2F4O1%2B5eWNeXettUcl3acZESJz9bXIyPqhg%2BXbLx%2BnOxl1jOzJpy9i4Gv7ucTiVR55JbfqvDlFMwiEVnEseM0ZPjSclLZiQAwKE0Jo9hw%2BI3fmU4wZGwpgW1pdOH31LGZu6TdxWO97zadStMS6exalp%2BqLkP5xnpLpf%2FHigSOtbYwsZtjgw%2Bq2pwQY6pgELjlSMS2bGVuarH33JTP8UHWxvxaQ1pS6UhWL7aWOl93QYLrTBxq6Jx678F7YPR7pdzpnkauPaXlijCSRMDVvpClsywz9UJWxWb3aJB6zzQaFHP%2FGfQmh4QQ6aTuOzHA3exehWSXDdn9aohhNAu0CIKpa05vcoGqNvNBAYGb0sR6a1Q8lL6zR%2BYr0f7m2Wz6MZkam1cJZ9Jtcv0lZRG1tXQX19h9KR&X-Amz-Signature=30e4a101cb53030a905402d38b0c15bd72bc1a694aec58cbd9a05e3718514b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
