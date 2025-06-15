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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2L4NYBB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDK663Gg%2BjEZ8It6R9qNaZnqEQJW1GsUBAlbo%2Bc%2FSCykgIhAN5oM5zjjMQJj74EEkGUdTKGsZuKMVMZ5NvROiPfa5gAKv8DCD4QABoMNjM3NDIzMTgzODA1Igz4WgIAOtdpKAyok20q3ANxjPeAvqYca%2BVMSuF4Omc2eUWgkpHphPSjBNDcCx663NxTbopsnAC2gxPZNVYcVCx3uqLBSMa%2FmIk3Qxc3X7tt4pwEF1U24IS6ZQ%2FyKllDXcO%2FkUH14dzOK7tK7%2FUzUdae9xCTCcDgOURgx9yUyEVX1BdpUdJDccGhaArwClK1lbbowbj3XF9VKfGwi1hVSmEymD81ipJx%2FgcbJ6Ung56gcUtMGHySI%2FLhqzeAkIxEdwYic2bmPSKFh9nwJbO6gWQtzFscNa7RoU%2F78LVjMsDluY4AB%2FbhNxl3bv5fHsyJy5ctNAyjlnnTRInKzlMrMtaU5yI2%2FB03oZ5iymJZkaihsUHhcI9VJvkR2yrSGmf5fx%2BnQpbEYKMbQfN3L9m9SBYCGg9lIsPhLfiYevdE2YqFonbhBTbHoBkXX6%2FIM3JVFuZ5kHWP4JRhJGnGNMtDMYCSXan7%2BjgJ90EzBsBtQgNWD6xAU1DnNlLvFv8nKVyO%2FvFpfVb5FKBUTO%2F4w0yjcu7NqkwWr%2FYnEIKg47RIzZZVdJfAv4mSlQgUxeB70pWjvDWprQtO80Trf8SpFLYIV177OVLbjf4yt1Uo4%2B7zQrN8y%2Fs9sY%2FDYbNAPEN%2BZufL3YUu928iPgFhq48raDC1rbnCBjqkASr0O5Gud8GfJaQkyA0x62sEs1n8BRQWEUTtEgCr3UOU6pxSUWoSYyQCFCcdeq4%2BDXoenL1TyrqT9QeM7B%2BbqwQCyDVjtPY9vYjmlI9yQHJNyj6lsodt7wyPdnkE59TJ5juYoxY%2BVlUQr2p%2BaKiXuyIhYFJefSVQnvvznBGuHP%2B8w0mBJLOy%2BsKJO0ZMO78gu9J8ZBIvmJgo0MPkIC2fDA9lI14M&X-Amz-Signature=c51580f592cbba4acf9a6e19db1332b2c95c76feaa1969e5b504e88b557262cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
