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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVEQNZV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCw9o1gl8trk3ELuMQVhmpQPinN8DvCWy7ejSvLru%2BESAIhAKvbwu6IkTQjhYLJp6hbWkS39ToZ25PJPEmURlFxSVi4KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwowP5O3f547At3%2FO8q3AOa8d29u0q%2FfNIAsBSws8FBTcztwHSFioZqfNVuSp9fvU%2B223DiqE38OFY0wMYfvGKvmOAyTCbHaD4RtxnFaAd9fH8orapjFszTkq7qUL5wXWfa0LKTlgTSjm3zvuoJgjKC0k09%2BiFhgi8Es4uUP%2FvCdKUFpi3osr7lFfInFSvPkKY7u69778ZvSJ96q%2BcJLkQLGBEKKi%2BnC0qvlyolgxUVr2zoMMhgkX65NkajkxIU27%2BkQ0P38Atp670kZO9q4AIX7v%2FCfN%2FItovWV1Ba8Ikna6xBpDv45TK3kB6JOWM9hHrifVQpg981U0w5IfPjRDMvIvBP3p44pXyoGzTD2AenZZEPQPC8am%2FUno7uuhoPT9HHSJz49Sd8RP0uVz%2Fe9O4WDVLcoGgjp%2B2JsBUggWT61VT86rwzhUBIyInZHo1gUAwz6EHxUw96U%2Fs%2BDjPGFdir2AYArwjwybc6intIKLGDyX%2FE9VSjHgAhn%2BkBHAGiOJ473f18qi87DPNB%2FnbCxX08G0jKIKaJUOeOsnqt7Fso7N6wNsNsux%2F%2F3yrxH5tyaPyWDnU9Z4mh840JrvQf08daqOdVlCJgVZhVL9udslKci5TkEI8NPYtDYkqObhqB48jUnXHh3Zv3lp5tNDCFobC%2FBjqkAfISxNvrcN1hA%2BSl20HGuajqO%2FO%2FZM%2FVcuV9CvXtkPW9FJYXEEdMAMR0L%2F6EHz1ck7ILzTkgomMxmt%2F%2FaXZH%2FOAcvqEpOZq1hdIF2GisQmunhP6K1fqr4ATBWM5PYfSybcVViTxLeaaZxD1FptFxW5BnFJkbSI6f%2BvXMKKfHg7hDZWElGCoowN7paSto4mfM2HxmLLtBtEigEI7mW1ovqiAl4PhU&X-Amz-Signature=196f5cf27cdbcd7264f3c4d67df4ceba7c9e9daf5d892277acff4acfe9166062&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
