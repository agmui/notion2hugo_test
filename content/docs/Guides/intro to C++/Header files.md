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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3RGBHP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTxaM%2FbzlS808fgHoGuGc0tJAB12iG6aJbK2xeofjmQIhAIR644%2FremiIxFf2655jA%2BwkYZaC6Ztc46aga9LhzAcNKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyT7BZNJaNB2vP3WNoq3ANgXD9hcrqSruczjJlkqoZ7gZ8uQONdX5GllAtJlGEzLyW4sSzNHRzomU7%2BE0CWMwxi2rk6UttkDIHGsbHeE7hyUMJj3oACRCX%2BlH3X%2BQ4I2LV0hz6L%2BdV6fXSzvpmgl2UrTsasAIkkKpCA1jwdyBVCS6GSaupHlZmAKy0YpimzkSaXgcQU0HZ1N4n37YECij2KZ9XMWrAAZDFIlh7Ci5%2FA1Q06aEhzuzokPBIW2Elhyw7Cene3qjl4mfIjmBU738lfAG20IeT0gdJ0g%2BA4Yh3e39bKoERhI50CyGjxf5%2B%2FRtPxhIAO%2FZ3LlpmeDvG5SG8VYeB0luhgtfswI%2BW4hSS9FTVvLLpwHLJXlbFAbPNzyb9Yci4QqlBqDhuZ7AxQ3m9jBJgEaNj9p%2Bka8Mcusa1jHShf1fh4pZsJ1yYw2AbscC2mxBYnQRRP9Eg2sTb%2FCOdoq3n0N%2BRp953iobGKBWEcWm4Na4HzLLjuyrX6vEwlpkWE%2FsAyYvyh3wCO7EPYbLcB428Ozx4ZxsNGkveFi5ewpWMPKr0P93wEecoKVJwDTIL2GskyAh%2BfLxwLzN7j2ySGIRtVaD876elBsML41lZHjQ7UNiJfmy6VlGR0jD%2FdHR1Ozbk0PRRDBYypEzDKvai9BjqkAc1S08OVr68Ci3eHlLgc5r%2B0or9g9Vzi0IqJB%2B%2B8BsVqKorq4eq%2FA%2BTenY31gglsd7L51DR0LRJQK8E9eXvnvE7PQ3FsLqBwIn4DHPIhPOjH%2FbGsIsXfFtD0oHn%2BeTbTdEBIC%2BY8BIUmDiGmiDpbWvFUDEyrpngXjw7WUoaT3b8ttUk1vK9ptWsgbHkqDHsmIKxcRns7yd1M5rBzqftsKCUF5i2G&X-Amz-Signature=93a220305219e7b7bca9ba5820a1c9736d51dbe3e8b9b505ee9adc96ad719525&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
