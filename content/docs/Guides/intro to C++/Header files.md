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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEP5JEA7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz0g6x57cy0hbx3%2BiKg2CnlC%2BuJsniIyrwRzdAfO3TyQIhAKBcGA%2BCPqionq4%2BsNhtY3o35g6kUVOpiHGZDm7tBtRIKv8DCFoQABoMNjM3NDIzMTgzODA1Igzs%2BaE7oqOee%2BLyhD8q3APRE4d9ai8c2Ksf5a%2BnI1qvO8Oxmnhldkva4JkSetfMMlTT1e9RUarN4oX0%2Fk9OFB0pe9ZpSnLDRUXk9ddcZDDcCswvkP0YqCxFu6Ic3fsUpt%2BzzKAs9rFJRFixhu7o74yOp0PG%2FO3fYtPBz7PvCGDhTIBa5YJVf%2FboFKoU8LQw7tlKqyPV7lQz5glKdCHwsn2UbY5Nem9A%2FsYgmy0uJb3wYaNDNIurNb8h9rC2d92oCQzIwx6rxArkFeKy3UPIdUcLiOLUlddw1%2Be9Sib2NzXU4Q9hTOgZ9j17XndQZR%2BncXSJFdLkUlsxVC%2FTvhR0LGClC4qAM30zqBN59DaVgcAOCiDWl0n2BIc%2FRfSgt7I72vdCwKLXkYSXAJOMvAYjlwvYuUUykOMmM6TnQgRxe%2FMZ3JCPN1ErOdNQemdIWezQl1FZmQiQf6r0xStupZ9v%2BaUDvIh3P5MEmBQKCpbcGi3K%2FcY5Np66o2GdFlpTgF%2Ft0nBgcPq7HK0tr2%2Brbb%2BPWKwt%2B8dtcbxfUxesWu9KNV6aEU6WfHtBTYflTaBRbw5zWyG55WYLn9neGXk8NyCTEEwiUWIJFGC%2FSIAcsoMPxMc%2BTqbrwi5S5IsOsnJFxcOXudu367dv3DemCuj4LTCWgdbBBjqkAXUz%2FMIfHk0OlHZIdyEu0EHJao0dsvD%2BykjYUfC%2FEDjXzwc36cLa0N3PdM%2FD36VHZYYKUwTGsi9DCqQFqilzjgdYKDkTwOueDDlZWotXoqsD4OXWGgD0ZjdcbWKCnxcztp46tKBC5srRsKlL2enib2nTiMir0t6iAs3HrYtQT9RViaAwXqiV0eZLRK0B2KhhrnwTHc5mwr2FSFYcZOejVuEgXxg9&X-Amz-Signature=5c87d92d6dde0679ff6037914fd6f258e4340fc4826dde32161d398ac74727c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
