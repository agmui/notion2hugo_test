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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFS3HJH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCID3NkpOWdK1FhfeLkwwTXMLngVnN4s9eSlAr989tE8mJAiEAiGySikCJOTIfzKBLJBRJtLAfAVLygjhxwdsl0vmU2VoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiVnDaG%2Bc5qjR63DircA2NkOglR%2B8OpET9wWk79HaUc5xWAz2IgB7%2Bypu5ci1iWWCCYd6qTiNSYlbZo6Bo2Gv96SSeBQK3YDx2EqQjI7bZL2y%2B2%2B1cNGPJVgxeNRjVjjz63gqzXzN2hIgieMD%2BVAZCp01P41Ial3vV8J4w1%2BfwPUtG2Kvstw0dhwkGvxXoTHgHaaUHabRTSbSJO7TvmmBkqWQDeXGhFBHKBWrO3UKC%2BKy1Ld5PVc4xajTFbm3ltXltKakY6EXUzZEefemi1jv9Z1QMKiounW6Jxpi83iNOFV00%2BnkzoZU7L46UcJHvXOW4%2B2MM%2BgbnxSZEEZHT9y3u1HL7WTC4jEJV9ScrntyNWROkAVglLWH6jHBpwUrul9u7B9pgcX4DJfzd40sAuA6WPvPhZ54%2B%2F7WFa2GGuSWAJxjxNgEF7Tusvy%2FSlON9OTrVQ%2Bq8NpknBwIRQm2jLwBPYIkNlaPivl8HIYRZF2RBilXvPdUEFYrm6GshCu8fU9JdC8lLfMcd3ZpXrWG4uOk3MS0KzKAsagpWlYv77ogLV7dPb7gpYHVVvTVKkISBnnGl5vUWOwewK8rqxk3RnP6JjdhDy2%2F9BK%2FWjCVG5KF9hc5O4i8olx1Zj%2BgdMr%2Bbq6ygS1aQQ2OhDxKQ5MObhuL8GOqUB%2FIu42dZ%2FqwIUtM6A68Ry9tNJto6vLDY5Zoluj2Z41uv4GiMnV41DlekWhH4V5kWQdaLHAmfw5Qxuv74S%2F2vEBbrGUoD%2B25RsjzrleSAAL4SncyeiXcRpdv7U5FDfR0c9k4xEn0kTcZedUWpk63Elnz%2BnKPYRX9QX73U8iyEB5WEyDfr%2Bnf2bX1%2BfKstFzOV%2B3MZtz8QOZLOkGFeNotek8g9RS3cI&X-Amz-Signature=816683a7d77fecbe34ae985303f074c3c6477aac174b0d2c2fcfb410f3710a67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
