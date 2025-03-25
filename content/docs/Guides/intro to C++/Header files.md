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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKO5PKA%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO6tCmQyX4Pvzyx3SFJ0qN1%2FglsAfKMmTOpU6hyhf7SAiEAwJ%2BjpEAI53V6LloEWlrkQRMcQGtCFJoEGAQIIgCuywUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4bBXgxZvyqvpyPkSrcA1dMSCvYxoVpfwxBir21G3N36HeqVhfLBIoOT5OrPZ5Dnp3nIrh1SzstH3EjBvCY3NFaIppmho5f3BXZNZlkS43S5nU0FGvTBuFC7EdEDmHyiXbLvw5QCXF3zNntdljHYMeTsbMqfZNFhkXwXqaj40eTcQQzv36DHWLzvTk63GYHoiPM7CPpCYMNThCQvhaXKU36Rdgg%2BkwcsUDJVgOt4pMFnCBgfMbjcq9Zb%2BzgG9AC31JiZYAwgKYrsVcLqAHTPTQskNhBhMfn3l6QcHZove%2FQhvLfGAvEEq3ZpxbShST9HiLti46VxXlpvpcjvc7kkKWfIFtgMTA4YEOLMw77hQJRrzhb6E1JA9xw4xXqVWWijNpbleddzTLXMS9ZS159LJJuWsX6uEIvXQHDgPwdVTZAgVGZ0l7tHqefd%2Ff0OuOYDJc%2Bx7vL6T8iRoLVy%2BG6jaO7s6o66S4zPhtbQTv5hEUABxwje5LdW1ktW%2BzRuu4g5Oh9kf0I3bU15KpLde1jyX%2BZsck9aAz2aHyHuMbNn88x4hyrc51Hjt%2BCO391g3UgZyLxLaqOWY6BNjtn3WnQny3mBrlasgQrUBuGDtU4Sv6bnloiOOCp%2BAfsH2iylJDu4K%2B6yj8zrdG59jl2MK2WiL8GOqUBbKVKcB68%2FBAtH1jk1lnmmyWHMV%2BrRaSA3z0f75wGf0AjHs5GS6XWzDNVE3LtNJ%2FXjj%2FefnX3ClOXxUkvj0Ilqrv1e5GBsOVih9g8iKsyOZmnP5Dig7I2wsaj7zrqjAIOkmfHO%2BOqCrHxk7jQaH2O%2BjcdZgd4yQhWHxLjAAD%2BkJVbjuvmprq%2BddN9QRpqOX9MD7ZOZ1rQZ9lZ9yOGeemFoKDhHQTG&X-Amz-Signature=5d514579bb9c9d8181829f23c257723c2f00b71e73dcc204c68bb9fb07094de3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
