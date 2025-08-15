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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEA62O3Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDnaLnP1sAEa5c1xhmQV3H%2B2Vb7mbWgnMEd6FjIbJRC4wIhAIQ%2FtxkeFpNU6%2F5U08kjMjsOgOD1WvrIP7ZeACMh1YEUKv8DCFMQABoMNjM3NDIzMTgzODA1IgzmO5LCrvr4HcSIy8gq3APga52XN4uZB5kIBtnVlnhjs6%2Bb4%2FD8tLsYcCeaofsz4CEiPX5gGXYIRgRr6UY6jKoNUzVlmeJaw1Odliph4ecDh%2BcL%2BXpWutXjgjODAG87tJsD1qRHWuj7KA9EpWj3iQK1KIzOl%2FQOPLREFLHegOeNik98RE2pMxsbeVRbizGIGEllpBOZajGg5wchrZwUfi8YAO6icdvg%2FyC9%2BwdoEMA5eh5pXjzPHBEPuk%2FLEdEUuADUiM%2BN%2FIoYYoyh3ZcQXaAGIN0%2FIbzqkS6FdpFbDLhsfi%2B9OJRJih751ZLlOi3gawbZzD9L52vc0k15Eg4kuC2A0A72md77L6KTDkmq2tZAHqTmMeaWxk0LZ0HgDXxIqs4c6%2B5psyZ1qMHEAyIxqDCgBvlWDMXXYyYhoKFbaye2NbsLe0lO6dMz0tsUOfCiAeBuTQQb8NHsduGt5N6uSCs1HLDJ%2BRBN8J1HXwvp8Z5DBR5arcVRJdzulWhqAP2xPmkjSfPHWz681AYIJSJAvorY%2Bca7GNHDuAod%2FdrwaEto0xGM7dg514sMwu5H9PC6o3oGXhjNrRmThi2Iyfb6Kvz3NzB%2B50ImwRZf0wQZE3pOQaXQRXSZIgQATGjxfuqGxgUQo3%2FoSfa%2BT1uF5DDfo%2FrEBjqkAVSRPL5QruCKsZ1W8%2F%2BXIIirYhZ0Q7KPuYLY3w%2Bo1yaO2XCjXJAOuz53cYPQ3w4nUOY8h9Ovg%2FOTVlyijsNW69vU7UHIc%2BvrHLzm924DUSq25rgZ8vhOFeHtEgi0tDKwGMeuSnfql3IdOVTY5PJAfI8kL2GyB0PSPSn6WM8LymtC5iC88Y003Us8QRZZw%2FgqsJf0fpzOlv66hihc4CgS7nYPf50e&X-Amz-Signature=3167c51d7764ca2fe361dd00c77b4b12974ae949a8745b91ca6248c228cc1117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
