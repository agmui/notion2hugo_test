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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCW7GLE%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnH9cvkjtD%2F3ZCjxkZgDjMcyZG33WCy6Rm2QyQLOKrYgIgCf6X%2FoUGbpAcJ49c%2FIwWNx7v2K8f065JvjkNitjVGQAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpfi1iyKbCjiEqUlircA673RLS6RPE8unKxfNcwsQOyv01zqz0SMLCjcMLLjTT6SXp2S6qNSmK1cl5mdbeGEbpI7Wk1AQr4Qqj8roW7yYRpjGtviBl%2F4PFxEJLJ2589lusWwdweYO%2FPT2xkKMTSdTUrsXk7WP5v%2BYhOyoaONwAVC3JJ8zBVHEI4%2BLseJ4Z3IngOzThHfSZu%2FsTIwcWqKcxO7l4RqmW8qbTBTVhX71ZSmKABUkexL6vV2DkqXFk7Asp%2B86EeXOYOoy3Om7xNXLXmcjZs2TNx8NzghNyslxxM22Az8c%2BQ0CaxEBYQncbZZcz%2F5cWdtunkGEa7KKIP4IuLq35bkYvtOFQ2LPGj9taBkkrX51n1uQNHqb5VRKEvdL5%2FC1BC%2FKecKDYXsdnni8rrtw2q4aw5dg1WqVr1WjHSQLra6O9ayW7kCe1F9Gs0Y3ylv5F2jxhvoPHRJJX0s9bXm6Q1jVgllmZK%2BMlPNaNTEZ6P0jkZ7u1ypiVEXV5bbyNV7ZIUKfaGxRVv0b1vfRp9b7jCi1L7kw3AetvyjPqbwxLcj8UC7Uhbx8f2ankIcA8day2JIn1w7gqQMLZB2XqvRqZxDYoUNbiS4y1D3KgaRGOGvr4lnuCVd13r29450S4MJ9FIfq0YCXEhMPWE370GOqUBbDIJ8PNZD1BPph4JCwGcFHX7YujKSD70WdcOvBa%2FzzPYtLoypouf49RI7VRup%2Bv0XCQZaXp6ZNokERHrYWuBJ74oVYblN89gevssi4FuVh%2BUgGo6RXCWG2y5Fth5YAa0NHKQNEOySJEK8GMuPotnIPtDAfiV3eON%2FdqQuSsUAaJ44joVfI862WE6lWhntEHGtG62Tay3gtYfK32KrR0rvmVzgAtg&X-Amz-Signature=e4d878cc8e63e455f53aca5d380178a374cbc3dd7d34e7a429819e407a9f497c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
