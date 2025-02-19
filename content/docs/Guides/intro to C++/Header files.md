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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347E6HUW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEbHAQXfJhm1jkkCtx8STbgck8wWpep6TtkqmqQjr07%2FAiBvCx8Z4PcraOTqjxhn5qCgQ863ritoDiByX1Hd2yl5vCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJc2Ohh1gOe%2BlAo9KtwDaZUY3V8rhXgARtamREHR8ZPjDip9SkCsUPJrWU2QyRGzudmNGsx%2BImRGgXmTblODBRwHPfOfEJ14aC%2FiYkfDYIszmZlXGDoiNV0hY9uliSksb4RyCvZZSayQ3rbz1W8nWGBTc%2BN8M6XTq6jZgcHIQRXyyrJmwlvQdUYXOy5F9uHIXBdP2D7dRtONT2VATjznpYgHnYl1ydP8B1UHJdMmFL%2FBNUvxcbY1fD8CyNNfFdyJgqx15tiv%2BlECracx1vCPHtbHccnqFet1F3G9uCk%2FzEz1MsfKv0a3iMylk2fzZdYAdlnXETgWO5otS6xNwDLy7rWn7ghpEpusyQ4PeGXvXb7tz0tyUUn2v6U%2FoRjQGA0DAdzJtJHfIwybOak4djJebwrfHqElTD2Qic45%2B0hzCGpUE2JRjKRkpY2s8GLK7T5chAN8RoIxX7wB%2BeLA5fnolr%2Fdf6VCWl1hSWxEY924j5NtY%2BrJfL0PY91NgDQTTy0WbK6LTY3fvE8k2OgEBrVU%2B%2B2AcXxji6J3wuI3QfnRPKWJWqwsgAn4okfgDBF87heSMUbs%2Fj5iGkLNKHKFvhfZ5GGBWgmRmd%2FUEBgiC5f8YHH4lchvLLcjbM%2FYpCVWoHdfEzRIYf8Qx56W4c8w5%2FrWvQY6pgEEOMCtHAH4E6FOLj55YjUrKWQwzEEHmGwgtcI858M14VYwbGqA62ir9VpOTrTU0olPa5aECK2Z0%2FTRfZTdUmDZoWPbqFRd%2FjNkVGq%2FjkfIhqITckr1nuvSZDhbpXlB6mZ5vAqML16YcY2fgRZzmkOPe%2B1rMLofaEROY6EFQ2iZifDHUo1TefkYt9zrAv482zI609b9KpSdYuH%2BsWPn5jr7uU%2FNtkiW&X-Amz-Signature=a6fef4a80c09e3757d94eda616742e679d12d1979eab188324e721cb4fe1e5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
