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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252IGLUN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIaLLqjsYNp00YX6QTxdj798LFAr4eeT8%2F7x5HTvfleQIhAKRQ%2BMSkwkgaMZXDAsIiM99Fwxbwu%2FzWTnOHPNZqYau1KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcPFPG50vKoPjMarUq3APmznYW1TrE06VeJjqkOa95JSALkk4KGBfbMh4vJuOHmJIPGI7ZvcWvIpvpLkikaLPdbbvkAiSOSliHU9VgXVam5dEdyURgv6tgnNSnPcIRMI4XEFvuD4RE1F7MPkHmWdLsciUecERAMHjv1hc9z2eBiwzYuayuhrAY2bKGAylHbY%2B1BPh339%2Fn0ysxPzAVQFH1BaNsAYDo1uNGBE0lbOZXVUzFeGoMJk7B%2BbA7vfiN6OryaTQsXUEstBb%2FN6SUZ%2FsBQBoYgox0Q%2BrD8QnTwQoNbmm3xu9M23McmTSRYC9%2F6iX8FnoHTCm0HLr0cNUBmwUjURbghJoi6P5Q4Q2JEM66knY3C1vyj1b1O90RdGmn9uN2xCcQeunKQytGLBYAlXmONX6fkRzSUh0YQqzpNCRvuqrAGqy7XlHkYcsjASDa7tS5lgTIM7aHFZ9tbbiS3pljHI552AhbUJGHApqArqwI7o0kJRREzcATC5OiNpSq0oX%2BV97fI1aG%2F8xtYYBBPS6rKWvY4ZhaS%2FtxItt5Z%2B6GKxY0ptHafZmJ0qbSNntGgsWGFWU4BMkmX7ImihoX6Wk%2BMJdLEqAoGVVWPm0pOkBH80xv838FYnVCOmATNhaWBcMhdZ3oPJlchxb92TDk3%2F68BjqkASMZDjBt8TEegHlth9%2BjsMBhr%2FZAnwoDLBwX57QioTdMC1X1b0FWdivoWEIi4vm1VZdXXTf%2FdrEr8deIWKrARW3Yx73C4fRQbwryReCBlKVDDLgIPw3PYyB3pvOhEef5SChs793NFapA6TgcG4%2FgLiCbXi5%2FbrDjXUxlW7grj0n8FqOVNKkRe56KmmcD3nZaK%2BF0dhLWr7GBdWRtwSvIvlH5GgxO&X-Amz-Signature=b37d99bda7a2b1008162ba301f543cf99f5514a9316257b493deda91088262d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
