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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDBHB7K2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3Jxga1CKQNxr36NmdPwMLd9HSfL3pisSikdzsi%2B6ZlAiEAz1N6%2BeqtgH0zsuWeHNGw7O6grqo4t80xAOc6tWOFd3oqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRtkyBEOxofEamVhCrcA9KAliRYri1Mtlar4VP5C5F9Inb3p3iU%2FJg7iVv9WZCZvM1HRr16iNF7fMWf%2BsscAMYvVPf%2B0cw8mxgjwQ6wA5E7QfA2bvbZh340bLnJPr%2FMXCIzjBvifGpjLJ0X6qAmYW6QQxq0vLC6cXWkQCU9Ec0HYe9JBKTMwCzarLIR9nNDYLCxrT6BUUAQtMapQq1rylHQW08CnIZJyUoB9wNtv21y6QoPdDLNMsBDNv8RJPiVPv0RttKy8R2whr4cO%2FPtJMgnIkmfGgUmKZynADQGx6sW%2BRmLbe15QliTl0ueoohcz8plwYPyBghIDyVo7v3nLbq9MpkQRSwBQFLsi14EuOVv%2FeVhP8BHmUHJiypbYMU%2FIkMjeMlz08T89p4i5YrUunUY%2FwK96PHsrv%2BVN6DMG5Zhfz677O7oHXXhXKHlsamDNtE%2FjS1N3c30YaRCrZ2kV0w0WxqBwMInFCSzvFs7oWE%2FFni98HprYTkFVZ4Lq6XzgXY1K35ZyRdT9Keu%2BW83BIcxyrstTndkE9yk1lI3zpHGm6ROfn5mbaP%2B2pfQgCrpGMSUWkCTv8uOQEX7k6G%2BtZGP3zaOW3JQ73N7%2BYnkHd2lFLugvC%2FIDjHTyfqzHfLBsJwSbjOZCXwn8mruMLfJpMIGOqUBhg6zHI3cW3dwA2LwDFhoHSlHLkviI6ODCk%2B3jrRFy%2FOUG553pYtS%2BXQTFbl2dKXKsHTY4YwtGv0PHqMK5AsPDbhCRWiQohkl9UcA5zLxE3sjL22Sh0y6gfTR4iFjh8IIX6qer1wCbbMGgZsvPmnYImKKks9OY3IRR7GgDWVOtzt3d3Be%2FqNY01%2B0wAYNGvFggGD7eIEnDDDjTXbM%2FFnDBVE4lgm5&X-Amz-Signature=7eb22cc938bba1c386104ea975def7f38b801ec81abd100b46917a772a33c6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
