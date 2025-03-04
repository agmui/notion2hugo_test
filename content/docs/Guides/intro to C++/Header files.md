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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4VCGFD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVfWsiPuzuH%2F8xf7AS7HdpBWMeBhLzBqCaFqgzfdHJTAiBPBmSWa0BZfNt885jGKKaDHLA3zNeJris9l06lvHRxgiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDa8lzfgXshuYmP63KtwDZ9WsL%2FTsitNsasRgQtAsNW6VBkIfObP2Gr3ilbwMgNQupvgfd8qAQXhQOZhKPEW3fo%2FI9umjHLXfYMYX01RedhiWJYp8Ncte0W%2BNoPiHZUXpyykFD7TIdgPIAzn9upT5VaSFNLbqo2xnYlOxdwu6kzU3JPor13ezNeYb%2F07uqr%2FQ%2B6ReHVWbbsCdKyJKP888zx7icXBfeb%2FFbUYOjr5h6NU3d%2BrLeZGxZBxSwUnMs7nJ1MHL011Il%2FEp59iNohpIPeAZErDKowCxRizTn3IPjKeuJJbtQioyZR1OGp%2BUW0jgHFvV8dP7z4lIn9p8HfioCIlEKZ7FV8ZiRHcsiAYSdg%2FCptXiIvRclDLNn9IF5Uprjp3fsxeN3XPxi9tcXsAAiisY6KVlxCLJVBeNLdjY1DOTQUdkb9GuCA3oiTquWCRxhXh6pXlqu9JRNHAw7jRIPfURLBfVZAIQT%2FVvC9n%2F6gfYRMGOE0V9wMeQgbZD%2BZUKJskx94RrRioAM1sTNbIN%2FHrkf7Ne%2FjQ0%2BG9MBmMGx9YENIhnID6%2FoxOyUcw5h4%2FTdjqcZpwyIALfLR2MfVTlyOpH9xZHBXqv9M5Pv16pIQwlWujfNfHkzVH73%2FYjLXwwMXzCS%2Bs4QVN%2BPaMwkPiYvgY6pgFWfibyKZBSsMUfl2EXKPA3DNKVS8iPxCO56vmDsbtvr%2F9iFsZiS4FaV8GyBpaopir4Z0aE3d%2FLfXeKhQBe6Ad6mrWWxPd2y1AKaaiNizggXFUESJs14WkUdcUUN%2FU1PHC7b4cIS1Z9iVG4ljWS4gYZiXauTP5o7XN7qqwV7DjroItNNotnCe%2Bi7wzYS3tX0BgLr62bz1R9%2B2QYz5H09jZeA5MUrO3z&X-Amz-Signature=382be45dfcb3fb6544839e3908906813bb554bf2038cebffb0393e3c915f2086&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
