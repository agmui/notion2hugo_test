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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TL7BT3J%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZIz24iy%2Bi93ruKwmFzMANZ2ldRAPljZSeGi0s%2BVbj6AiEAqEPTcFZf0XrBoYYZF2K5jJ3fm5ykqelLBMkmsqMHCxMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BROERF4MIBAF4ZvircAxHS0o1setQlY6o55WPJLBu6WUSvbKvXrNXGJRjvanV2dB5NqQpbFrRaQcnpLMJPzP5KKQvkd2cqIQI9zYZJw0uH8%2FF7Z8Q2kPWE6O%2FFl%2Ff5sYcyMQEqWwBRQpU7jYkjJp9Pxi3CHYIciukx1n4R3NnghHao6lVP8IibuArny%2FBdQUp0LRBAqm4Kp5PueLDs07ku1bvwBVzckcbmVn1%2Ba%2BWPpOtu4Bj1jmA6j0rt1mdfNJNeb9qArxBHW5nqWJJULTjWRTWZShJcQIqfHZ%2ByqXR2wmtLGu1VIVJTtvM4afDtfT5q70O13EeTzHlUHFQ5jjV58krh8kkvP7xDZrOX0kvVKQp8SRJ772dxISdEJjpTXOqgHco3eOnisQSXWuG7JlTBD2uIU0nJaC2cNSD7rk7gO3xF1Nwhw3TSUOf%2FPgVVGUQz4oB1RS6rqPwKDVVBzDkcA7SVqxFY7IcdpsIStSBnsrFj4fKfbrGYOstZGBuzYPuV5bo1pucHtNXPf%2Fni2Sy%2BeQ8BaNmPuEz6%2F9dJ24ZttVsgEgrk3oyOb8AKRZ5LZ0Lwsv%2F5M28SGSPOpfk2M8G1e%2BqstXVlxWvDhUYyyhN%2FvW1AS8Lh2lNtdrffwGsi8wqRaS1H4Y8a%2BpUnMKidrcQGOqUB5ncX%2FDGNiRFQRn8%2BkvzCifHqffMttdtjWdTFFfdr8X6ABpn0W74E0dT%2F1bVFo85Y%2FNyqgoxFUpM85atGlHnE%2Bpy9ze1hxFkhHrylSBVODhh2ih%2BOtNZcmuBIO4j9SymQvjXmgwITvJZkbMiPsU%2BlK4IGIb8rhESv6WOcZiODygZD%2FmWd05KNe1tzwXBFGGN1KRwy8nKFYaai0kCVHejM%2FHybqfLH&X-Amz-Signature=6ca2b24ff9af7831f0e80231a1f7ccc4957a58732ebee6847268b344d52efbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
