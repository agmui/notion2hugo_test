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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQL6MX7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXkjYUaejSQrY1Oak%2B4qTAtjrSj%2F%2BZ84bO6lnNquRBBAiEA0%2FTOHD1omPgYocaEGG77hQmZByg1k5zLhLkoEKqjGxYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCmUPiLbkDwVrvZs6yrcAxawOQ%2BUT4ASAxu0hlADEFw9iHEBQIkV7i5jRZl0Pxpia2OcAKgsUYdovrM3VV%2BqrPqaijsg%2FSLdUU080hVadv%2Bf8Hf%2FSK%2FnEuB%2Bid2pawwpresEzKN%2BpQCGfIJs4v%2B2LTN8FarCOfCwGFrmVbNcTFdFV%2FI8b2R51IOWWIqWZdKMxeIeFkW%2FPSOSVONacPLV12mjnadJyCg2Ci3m7cgJnRWVzgXpR9Q0eaNvWDpOdW6ftvYJSd77rKQMLXgtkf8zqioVxVVPIzmHiXGesufrx1cSDjs6I9dg19thtUNWN29CVERMw6Sao74UE4f3MT3UiDJJvrrRWDbrv%2BGAKgNPlJip8noSgo33GszORwwK4whw37OGjD7yqsPgPb3hH5Ffeze3Vbjf3hc7xuLhxGtv30dlNLvRdSZBfZjWC96PuFxbHma2x7YY%2FcbufJvX5hiImqu1zuw%2FsiwqqgJQIt%2BmzsQINJFO6A30N02Y%2FCHBrvmbBD07iXuCS5sNrUh5jaPxv2oSV6du0TPHSOftflN1u%2F80BXSmhcqnHU4KfnDRRzEVxf6vj8yNIIlDNkw%2BiOL6y0wVbw9IoCqg4NlkWoN8zXCr%2F6lUkfRfBsb%2BHh6wZE5ktYkZsWE5%2FIITZE6QMJqHmb8GOqUB1qwyRS5gOdPZWpsEnpcq%2B9faHT2MZc9BpHq4t9f3veVfEKRSnnPUUpfQCgJwsFHqW572EF1M0y1Fpi8klxZBQbfirLuQL681wF53kDjp4x2YlkEetxmb9qjKKvrZj3dSp32UFeZM40wYIy5wv%2BDQwul1MTuY6nhjjiZ1WRgydhGZYa0l3uqf3EbAJO4DIcOJe2W3QHfpPMCArF9TdM9hhpxXMHsC&X-Amz-Signature=2f3a8c6f4a60df3ef6e12fa9b88b15800d69f5b002f20e228caf83ab88219d15&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
