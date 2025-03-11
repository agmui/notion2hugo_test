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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KM2VBFV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHJBFZxPIjKx%2BaS5YBpSPFr9hnH%2FMi82iEIvOlUkdWECAiBfeQG2WHqdhkn6o1y3qnTDVxkb4O3B1c5Fh1HN0buvHSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjvh5H4PYo6v79xXKtwD0q6gNOGv9SVUKkXaf8HsqHVJHLLDyC%2FV%2FumawfYpGQZEijUybHbb1LW%2BMfANbsUeqSZs8lo75V1RhKeW7OJaQs%2B6jaiM%2FkkWMOcBU7Szb4ZMJTblamq2GsqM%2F6X6eC%2BOhxrvnYYlSB%2BNk9Vtl7UqdpBTw7fsRN07mwQitDgXS4i0UZI7woMJvo3MF4T2wae9fbZeWQUAmigewGn7aEkvIN%2FVnWu0LHOjwDdJe9lBmN16srWms7HV70%2FUFyH7nZ5eU4qGivURHyqiSNzWQCH4nhH%2BZvwLaCuBbsC2WedQOyoA%2FUQlajqABLjr46NKVgav0aC%2FkCUTpw6a%2FMHIPg%2B2%2BJUc4gXfqQNHwliLrfY0Ec3CTZjpCkljfw6XlDHFByS14TB4RPZFhVR2OSf0RxwIHskjKdWJ3AKxFKOwIy4PFDPwkWRPd%2F0nEEdT0lGvB%2BEmjfGRB1CF8q2DWHqfPN1G9JNNnfBNGiyG3GwwZtfZ2UsTyNYVcoNYnFxXNIeIf%2BKCGSipUL5mU6qn4w%2Fqlmb0AMT9gNquk7EoiUpdAgN0dNB8IMP64kIZx6VVZpQyePJzM30jjdq6r5At%2F5zAVsiMxxTGGB8FZX8EO0RkYmuTu0ZxVYrzc32YEitkrREwrOvAvgY6pgG0XNfViri%2FLAxQdLocmyrbvhW%2B2QWtN2lVQpxjKBOVL8sHQFCvOVuqj6Beo8ZXiPpvNyxOPIDJPQOgm5gVdKVR1Ur%2BoY5AWMCpEmFIMoDNbuPNpM%2F%2B5FxXeTYSRlSWI6nl112q7VzkVgBHxWijCOUWijV6LUKIZeqa67t23R47%2FYkfI735of30OeVb89O03rk0Snv0bmvrHFi9DL%2BqpnAqQU9%2B%2B3d5&X-Amz-Signature=62fe89f11f4b638144a20432108c86ec20ad9780cd38ba6f82f0ad0d4002eda6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
