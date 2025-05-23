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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y25GC6J%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIHQzaV7FIZrfXb%2Fbdfs0V6KouvnoNjE1plSQtaQFg%2F2TAiAwih6b9BS0CGMEik49uuiJTH9AOfu0IW4JJLgEXibhICqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRW%2F74hABreeamlrcKtwDwKZrGHGqVeS%2F9DK3Mf1EKOA6l8FjLKkdj%2BofT7tKK0Emi4CWuLVC0g8ln0Tif595%2BQIYqk93SjRkONRd1TMWJH18DLpsj2yDifPPdRwpj5hZA7Xp%2BrAH4Xjc%2BpaYAVPSY7VGLuc64VW0XxeZC2UHkxHSA%2Fj3gyjg5EdhHdKrD7eKfieRWbSzoVNWgzIYAb4l7wPZfte8pq%2FwJ9LEZUQE6hcvyqXWou8UNIRRIVNW7bMfD1DX%2B%2BMemH8ynxT%2FcIXrbAvH%2BocKKO6xaOD%2B2y3jMHb4Y5ukdYhjbus5iD4XGTmvcyab0LUYhnB1tmKU6Yi5uUrijIlY0rZnkgSqn5fW1XjA1x6IYLa6f49FYOlqacCvCCuaaGCHeHFUPGpomwOrtjmy1WoNLIJxHyh3ryojLvUFxDakjEOD1ad6UbobYZPg0k%2BDw9dL%2FL%2B3ddTVuff%2FhkAU4wvGNZN6yiaPfJabPjHMor5Z30YSpfsxh3YgzTbqrQGpdBXXQQw6zjdqyYcnRjHvgU7Y%2F1iGClgENTCW%2B4QbjqHHze4TIz2A8WloNUjv46k8PQuDPlPJGEj3ELmJ%2FdXeQ3keHBzea06K0r1KM2PfWInF%2BiXSDlH7sqbBvcQSWotTYtppim1ePPAwm6nBwQY6pgEtNd1AaIEcvI3ySfQ58pBEdRvEBzkOOydCkYYrBUNV9lHzeSnpN%2FaO9rtV5Q3JlEtI2vFyFEeryjZAFiypyoTb11Z6B9bx3F958C%2FLl6zI%2FrPggYqYbPkP24kMp8WxkeQbDluJosC7eipilfdnY%2B2NSgzIXUNaJaj9eDstpUDWYy1F1ly5SmU31rKgWIvDHTgMbteYF5R9s74NEj79tH43f%2Bn9kpGK&X-Amz-Signature=a0a5489f138364903ad044a92827d3b48a7bedec226acaba87174c7041f0fec4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
