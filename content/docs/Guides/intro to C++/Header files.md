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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMZBOBY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDn9lO%2F0HvnlH2NFb2FVd9YjWqHW0S8rcsTulC2bIr21AiBxBdUlrwz13RkKUC1r2AGJssXp3ksFSvFnhbrbZxyZoCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwf1GmSSJOXE%2F%2BD9lKtwDlO7hVTCHOW8QUAtUuQWLlFM0e4zIQcznixLWuPZN9qYjKn4yPN%2BPaw2XWwc8F596pbDxLZd%2BNDD5xjabQHhtkjPgrsZqzve9MtChbiKw8jCI19lKvsxj31Dfmw4KgG3ikqDAdDEUDteCjnw0BEhwr4GGu60S5UTyYquUi%2BzXYhGsNMTZ1%2B5VvtMfzhaSAfr0bcow8OiICPiARUCcweRWJ0W3Dyd4tp3RyNON023dAJhqOcbMjdbMWH4w1rkR4eJfDD%2FcfyKMSPpag0ETDbsXg3cQHHsjzwQa56g2nYtcNonvGdVNRMFil3ZSEs21vz3BwpAloxaQdiMycv2RasxnluwrgRiW9iHYbaFM7g2R7EVDkDXnS9U9zl0lO7L3YtrVrE0XtGZSxoIAqzTUNC6ponoGgfF9K%2FhBgwfY%2BPJVyQiOgH%2FUxlDXIhzEVHCZBD7D09exfg8Mt2MIQfK2%2FQPWKW6X1LpamKlkf409P%2FHZzn7VocOCQTufImvACv0RSDnTfiTLpXf9EGG8YXy96%2BUqxqSNvYy334rCVVueEPBzj0xXaHNDE1RWxTHdoM9pZcSjYoJqM8j8%2FfczlqckWhk5m8mH8hChwPJPs%2FpCqDh4pRoquxwNoItGNm4F8aEwq%2BTcxAY6pgHFZlert%2FoiruYwa2b5bk1%2BKfs94t%2BxFM5wIsbQUAJgeSE7AwMoBlQ4jtG4xHVASW74gXCdvpMOjusnp2ryG5fbvnTOq5SqA%2BReSI5hmSDg85rcHLiFrBjfJnUVkJRUL%2BYnGy7rOBXKPAcT9ofxyu%2FtmwJeYJdyfL%2Ff5yFE8QODw3TAEaBRXbPcFV8%2FtfuVScButTg70qEvqPRRyNmp6C9jUTmYJY8s&X-Amz-Signature=c8bac589a42a162af3228239bb53c5cb98f71d20d38282fe1a79fbb40bc897cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
