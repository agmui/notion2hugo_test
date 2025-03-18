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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ5YC5PO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDFuuB3JuqZu9PprtAfIvMKc4BXJlh0qGezlfRjL%2B8WBAIge9W%2BIwhPdaWAQybPC7V12sUKtqb8RJQbVlJopN%2B%2F66Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJUICR4KORtJT%2FoecSrcA%2BdpSbjQsDuaDot2ZHTDd0pXU%2Bt%2Fly7By2dUMwZzuW8YWQpnuA85JRF%2FmfYhqzXM%2F5J%2FoUdezM%2Bea1cb6c9gHuwHqBuwH231%2FySN95u7yVlfOloREL6xMHrWESrRjGw5sci5ZPaMIsXqK8MT4uznaKP%2F50xzOgfCC%2FrelWNJrK7ppIJJkzIQToSA0DPbNUF7cvCEuC4xSCenzZ9YykEJtK9rzoeV%2FZqBvWZge%2B9cqZt2PbYXqsFjpVOf4tBfuOEqDncs0BdK1xAVasqhHRj0VpFioe9q%2BMINb%2F%2FQuvNYLOMHWGGIKkKdAL4YXQH6DVJkEp7AWpcxFOMzqALELdnFqYGYhtwdCVu1f9GM5vNesfcpCa0SWwakxnek7VkxZ5b4PM5otxibnkS%2FYTlXWYiODnJQO89HHjs8UG6LFEsc3OeAHtlwaOH%2Bx8uH7QwOTxtOhjCvxJKlzxkysFjKSTmmBUZKKY%2FAByaJYmcm460Y02RKzBo5Dk0sV4d8C0k6JQTURWNns9%2FFpipdpEr0g7TifDJ1%2BQq4sSHpNjAscWVQi4%2BqR4sgxZl5CXCY7MYMxFz3ufZ2HPuQRCEy%2FuaUekYDgz7SQBjcEOGJ0urxBOyMTw1ROUGld2ZR0uqNtPw0MN205r4GOqUBAWzXsMVwdy5wiKhBHN4NdAumGDjyBjGgOV1%2BPxuQGu8i7x5XXZCdCLBfeNc51vBIdzHegQNAq9Y0r7nOEaGMW4dC7jvQCVTp1XQYrIeWQILnLhwOtfbuEXer0jBZHE%2BU8rc3TISHSIbsXG8aS%2BuopUsC1cUJmOEDruTv4EZcMLEVk6Qm7USPU12teD%2F4jKWyAkblcMHF1Kc%2FMZto0jCdzvNX%2Bk7K&X-Amz-Signature=4952ab31713503315ffe935175d3e6aa90b9b53609738342666367b306c254fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
