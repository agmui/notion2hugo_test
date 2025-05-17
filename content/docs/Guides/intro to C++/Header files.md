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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYLUR4V%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BBili7oh%2FZSxf%2BkU90AnfaFJYhelYYEK5XqfvBDxqUAiAyPelk%2F7r9vW48gg42begCoa1NjwW0MdwDxdjwCMMr6yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMs8HpMdzgpBEcvhBVKtwDKK6Uz%2BHw3hV78zxLeR4ia9bnfFw8t35Ooic7gigufxqpYJZKv6fys7RmOKA8jY52UUgda24x3Li7Won20jADO5QIn0DIb%2Fqp9Bs9CvOHincFy%2BV1fheQnuH6KFDgKyZGxv74m3PvCT%2FJU%2B%2FlIE013W%2Bivgy6HfV%2FYd9s4gQR7xRSZB09SheF0IPFiwC5pGNKPUfbxjHFXPsJmiViG1HPFUG1hDlZUG%2BsrfuwljnUS5T7dpUbuKUT4wwt%2F63NkhzYnHBDGIZ1syN68l8gK5m8DdwFC2TsRI1p9%2FWvLKwFZUEG5Q5n7ZWXAI8fwcc7cRn8d%2FsOz8d1jeYQlNcNMRPnDDDYe0iFlH0MBDSzgxXtajHWNNdrEP4U4GFso1s%2FG0PWgYf1OKBgY7%2BiMY%2BXqvm4U6xO9CQaJK7cSfiQjcFdKxL1AiylD0THsLOjSxdXQkfHxquARwyvrMH6EA1jEv0fncUUPsqtQlQHjUs9gN4b0XskC9g4MIAs6VKsTAm1VcYCrMKAOyJiH82xBBPoAJTCgQV1k6S6NehAUvdXsX1GrgjioPs%2BPHeqGd%2FB6puhxy2LTdMiNpNb5xV4XHA4c84iNoMEA2Di7PZpZCt3ax6paWeHcY1ImGkHjenE894wlrmjwQY6pgG0BTVW2xc1AEYITuDoN2Ej2ytSZ23L19s8JxKQw6JjL8u8x7dVLo8cLoC1WBNGT4177aDc9V5N6WlpD2lu2ocgRY%2BlwAScQKNQgMV%2BXXfTG78hSc7TVpj2P%2F%2FLh0%2BCaXG2clKADPKYyXktz8CyVe3JxVn%2F59vnCytZ%2FiqSTjc2aWNoxnyRv2WlswAq2F1xHyJZVCIAv33%2Bo7FZRpsvvwr1XtJyHeqb&X-Amz-Signature=9255062035bf8b55d729ae827c439d70d4c47c81e5b01293adb62b1352d74054&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
