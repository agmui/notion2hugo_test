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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F3LMLCK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKJ14Is6kLSuDnbmaIGzPDkxtfR7t2PTJYppfIYbN76AiEAuc1knlZPqMSHcyNWtmkSfRnYOhlOpA%2FMaHj%2FY9hqvHEqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ4G4y%2BifBEcpHRcyrcA%2B%2F%2F6BT%2FDKQAGM4GjF7aiMVO8PL%2B8JzQ5EWMpPvIbXaot4g08MD%2Fd7qC3zjOqNacNPV743ysNGizgdzzcJheJskbdfUnLEka0578JSq1W3eB7iyZYo8F%2Fy0wpQDp8NcGo4Pxxnc1mzO3xD%2BDYjBqNeIwICYlA6P80p1A9PMj%2FgCBvmusQbzb0cn2O7FMsu7AuY6qAQjVD%2B1p3ofHYo%2FLUTbQriQV5klPzYw2%2BMrkXUIzMjRbKL0w%2Fg1MNjAkjasj%2B9A%2B3Vp7ukmkSVZKFt425mjwlL9qv8r%2BpzLHl0ow3Nl%2FpCL%2FOp2C1ynb7OUKexTKF80pjzLORQJcrF0Yvh%2F2u78XU2Pq1PIQeHg4A2s4fUEsWMoDo1UC%2F7XwLFgx4%2BR6AjXoyB68kt2YmAK3ZwnVxgiux2ybqsmbRUVFJI8KJ6OtIxCPb%2Fs%2BvHgysyS%2BJQGvpxCxK6xgqD%2BeC8ahbg2EO0um7aWeSsAFQFTbeCQE3FVUbqUTij0OXySiDQMQpOP8mSPHLbxeOoM1XY%2BIV%2BfZD9NARfWFH6S3vjdStibuf6VfGyrNsA0pbOb2r1s8eRMvC2%2BWOSkY5yl5xhg5123PpmtelmVJXDFZU%2B2rtijP7LUO6YNNvXqKoxr7txTAMPuJpcQGOqUBcIVRsQYgCLYGJzB0ePOD8HCCUrU%2Fuj7OvHFg0%2B0EPQnypE6pdib%2FuREFeb3tppEOrEeLrlTgQXlD1ErlG9MW4Ss3kDNSv94PIr6bkA78vcQiy98iS12jfYqThSnxnROmpLJz9AFqnGLBWXK4JvOe40X6vVwC2wJkB8nND1BFeO8D4HQ7OkJCYWaXNk9fEauHvsnBzP7YIq6%2BY4GLNShohXXgzEA9&X-Amz-Signature=f73409edf7c623f05f67cede6aeeb606fded6f683b72eaff0a5e0a47c31269e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
