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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL26ZRHR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDSyDt5sxP4q%2FltkQ9FV1tX9ofqM6QzohGxYNo2cQqkqwIgLIc4o8iDJbeq8MPKzNm%2BjlnfSkDFGyTY9STrUPgXH9kq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGTZfuCkR9oYmzeayyrcA9XN%2Bu30qD8MngoPwDTbZpGP4fefmH49XAgiq6te2DiCmDO4RsZNDXjjTrWC8UrxX5uIx6JOh4dYB1YdRlKL6QabXVhP1aOb5RZGK2c1CNxwcPWIFdoINwath17Rz6Vl1HDOHcwulyo9s1RU46UmBzr773LE8ZgfftMzIfHuDN8%2BJ3Fc%2BQfYcwxBUl%2FHey%2BZlP7V%2BKn%2Fqucfi8sxf76Zqrge84ti6QEkjOoguvslo1SuzdU%2BxgyaylzU1w%2BL%2FT84znLmJLWoUlqua0JHM06sYoHhZa2OB154OvwqJgY4JrRj998BDcDTWp9eMa%2F3JjHimDB39vZM%2BNCFuj36nVhib7s6c9YNExVoqG6ClopLVpb%2BMR7jFiwaFRl8L5aqZPZb0AtX607tujJb4XfdqEzfJSdbRDCob93nnm4OWlTBbBfvIHY5ZZHhybSCQWwbYMqYRcTUd7Gt2nKrpVwU%2B1NS3wCvBBRk3RzISmc8g473Q697KbLmt9xzFUM6asm1vnLu3CqxSxlI%2BC0rCIZu4J2qQiEpGlf%2BMjbm7rD4FQlMhIik1YXFGnKa7w3NSUur8dvROx%2BXavWUevoB17gmSHJ2RFHsHG%2BkBoRFSiCmMJpX955Si5grJBQBKqPSdQVuMI22vr0GOqUBAtdMOXCUi3TOc%2FyhQaBLOGw4iJJmvcfNOkrLfTOG0f8geBj9oeYXC%2Ff3ar%2BqVnRNUPsMaZ7DnHuSVo23C0NtCzroV63ORZRo3l8V4YB6A98MYlRAr9sFN%2BwONPQfYTlrXc%2BNj1sKY5p1%2BPrfb1CFaILZXzdqWujYQAjEuzQqvQYZhzGSWSOKFY5y54sPTeZK8tgxFUOIztpSmq0eDNvHZtuUAySR&X-Amz-Signature=f790573bc104b9a9976b76f9dc47d8f19d575fac4c36fd97f98ca9068633fae0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
