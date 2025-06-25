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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4HNWOR%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDeeS92GJEhygrVssCktlX90uwkeN1CuXWqkimJFkVVVQIhAM75RDiiU0KGpesF1OdJHMlnzDs7IvhgFWZYevI8PBtHKv8DCD8QABoMNjM3NDIzMTgzODA1Igyium0TyxA5%2B5YShGQq3APIx156e9CwGhwQ0BQWTA3L0oaVDWckF%2BIfN9fyuk57qtXNrk8E7NyiAthidPp%2FdCoBDexfhLHgZipRPvCjOv%2F0cigaDe14q2Ff0VyXW%2B2VhYY6pRELy3PKurftvo5YbT7xWWNMI9GqpbMhUjSp7MeumgsvssoGnUHAWb5XkBMarV%2FpNALXtLS9PwVJWF%2FHdva78TcT27pJJgm4VInGlxrl0elC2Wq%2FMuf0nLpjQw5ucBQgpiQnP3L7HR6j9QRUPCZV6H4GUZl8sQ6A%2Bq2zyEyD95XIbf%2BKdxYhNPxdC0Kql0YHiWoRTYlWxtkJWOBkHzBRKESBq1Dbc0CtgwTSmQIM5oYYhzR4G1Yuo%2FGqgoloI%2BDZB7Ro%2BOLy1yYeGKyuNO9o4rRaXWYAyu60mMO%2F7jiUbSW3j1Lcho01tqFrQyNbe1i%2FZtYMIYhp%2FOaxvX26ru6uLBfQOAq4%2FfMBOzkOvR15yXW5nCnQizGDgiXehn7MRUreW8EfZzW863z%2BzAPUUSihPykxB5WAwmPIwsaW%2FVstjGtl6V5JZTmXsMTLd67yIXGgiBHuEe9NxsMKUxHz%2BpDEnA66FnFk%2BdLjMos1B8IC9OYE%2BYZcgvdFWAN55k5jZ75Slo0FfKgu%2FZ%2BUtzDgpe7CBjqkASNxtYToJ7zDmdFFKmgo0LjcH1Vu2gSXL%2FogHhZEa0yFxi33o9tJGz4r17G5Qw6ElzuhDyxkww14XSEe83U92prTj7kkj3XyzfMqRDAOFJ5FxakktmYzKj2Z6QJSVrwLupBV96PfSx2KPNyZHF92BNcdy8ksMwH3WooudObyUy29Hmh4T9nilMZcheVmssCkwW%2BASf8klHlxlrkIPklsg4yHvZcg&X-Amz-Signature=b31b283a435dd65a038273192de69f457668e52401aa37eb112d3129517b964e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
