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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IUXLSTZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECG8D%2Fr21E3edRF5FRQwE1TuPa1vvhoExNh5rIjdpPiAiEA8qy7PG%2BjSCjMeaefwLtpQPwtnR9Z4iu6rpHU2fOnlFYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMmEHvh2VlL%2FxjpGHircAyrzhms38yXIKgv24nMrVgiEYbaKfdy4mc7KHHQAGzIYiRT4ywkRs5MNN3hFOtGEovX9JNaFyWVyUa6Ki%2FyLfsPuAVFnBFTCAyqV5Whz5e2Ton7%2FXwUdvbt9BBsAmc3xJp9nzVK0SmuJyd97ghF7OeLJuXINa7qz8G5%2F2bUUPV7sECp8D2qvinzqWE2izhdJl2U0U9OCI%2BvyEskN%2BTAPhPfGEJxFkDzufhud7i%2BUju5ZMt7DyqDxN4tfU%2BwWzsDZ0QZ4N3UgrKF5UjvDN6K245J4dz04MUkdAAGVS4FnrxiwZdoTDvyughsDwtrk%2FhZU7JkAlSJjwR7OqmyECPI9hdSY429MNwcGWhYoINoDK30Nd%2B4%2Bzi7DeAEVnvNIOOXKD1OYJV8s8%2FTgSxcLJxcNFeEIi5YReLP9lSImovGGys4H0hfDlGLkJ9skOF%2Fzf61cDwTxNgPcCAv9pflkRH2wbdrtpa3DMh2VEH%2BfJC%2BzzEENzMi76Rgbxha3cjV%2Fm0JnIOAEGr1WlA3Tec8VPG0OLP1aBbGCWKWWGTgeK0ULR25Q8VfhNuMKn0X%2BWH%2BGM61pF5aZZ9Fz0fAr%2BIxP23paeInkryxod6AV2MHujWBie0lH8C0XO4ORhjbYE0txMIvOyb8GOqUBXKCAVrT1sDbsIIOE9A8q5FTvPwMmjx0pj5pqg%2Ffvth8f6iHANgjQa1t36%2FTLZSygWXO8jvxD9%2BnzkHjCxO73SoDx7SycMDxzAnyyFcma0k7I%2Fcregge08G6V6bAFXwPeQAiiShvTqqB%2Bl6fDzNHwC9BH1SXi%2BAFrAsGJiC5UgISsFB%2Bfe7SIuUzMHgY5aXQQ0eJPMPlhTNrp2dosEKXwIR9YE5Tp&X-Amz-Signature=26bb6124dc8ff176dca74114dfc2c5074b9618e1c2a6afc6b6e122181fdd1047&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
