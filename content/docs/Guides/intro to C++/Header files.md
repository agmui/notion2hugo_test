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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCQKUVZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFqxRoilbh7H6Wjl%2FSh5N5wBS2yubfLYxnQVCgufgZU9AiB%2FlCH1d%2FnGRyGnJP1MIveudUXwMRMO9POp5r3JT9gDcSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMya7Yjun2IfWjCUuyKtwDlqXFqbEYJtEJLTu8m7DQTl%2BT8ds1rgAVLNO07sTtrOa66aXs1bMzmGzEA%2BxLp39J9tffVPRvNIU3g2wSo8%2B1m4G1d3cQ3R5MAKookVf5IqRKg9te6wOCqHeUcFHz3pfY7%2FVmCS56lpyShVXTxhuBDLqGYVR%2FNqCDHj72YTRUAKCyWqptW1oyXSJvO4FARJAxwveOISsnZhK14jce0Um6FZk98jPcMoYFIa9w0mylUf9JO6aUGVdzRzvYGqpD7a4ixmpfp%2B%2BgppBahG3M4%2BUMpDixV9Ps5sNy6MmZGxX%2FE0ngoT%2Fs%2FsIesOsVexUUv0ZLcU%2B7NYqO7gs0Vwn1ekn9fabSZyZeA7wAXK3oHa%2FtTbKgre88F2Fwb8ksYn2mnv8QVmmHuSh7g9arnPS9RRWpZsPjV42FPgA6Xjvw2XSkfTzAePeLWrcG2ZH%2FrWbmQ0pm%2B7IgE4sXNP2FIJj%2BrLHm%2BkQ7OjOXc%2BMZ%2B4Pvg4ECepHFUA0FTPl76ptVnLc0bXWh8idTBTAMWc04wP7m3rZIkK0M2Erl%2BO9yBoTeBEvkbiqMe78bKWYzndsrAa5zx%2B0Cj4OQjrZB4B1Bbb6yMU9gwLFcZAZCgdl7zWit90HQPoelXJOCnOGYYoc8mNAwrcWrwwY6pgF%2BRn3Fg%2B1dl2Jbv0uDC%2BoklDQCMKaxOsW%2BdHzdtKSXO0wglqqOEX2BftzKp4T%2Fu%2Bb2Pcx36YiJEOGfbWV7Ctlp1KRiKvOfAkZX3KIdt6qJ%2BzTchCtn7lvA%2BLTNDANDTocJYnlkUyW4HPEplHiuUBBRxyDGtlImAnWCi8ncWAg4iBzecqLgmWIhj8%2Bwh%2BEvsfhFNOApL4BgOepmPCIwT0AOyrafZBY%2F&X-Amz-Signature=e90e8a6dd2bce6326241b29aece77ebe3bd6c71f304730be8badd0254bacaefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
