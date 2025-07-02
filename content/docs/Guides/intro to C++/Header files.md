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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2XEXXT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqlRJV7YVWuqOvWAvIgfQmQzFVJy2X0uzY95a0jbk5oAiEA5BgVsl3CUrGqdniPpKUfBff8RE6WmDfPAhB6qW4x4ygqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRzUnRE4B0Dr4vTGSrcA2CVoDwychcxQ%2FF4p3%2BZMwkCciYMDekG3fPpX%2F3hatb935Zv3xoD1e6Nfm1Dadoae7thYeJdhDmr8lH8rvlDledph0FaxfLZ0DYUJesauWrqfuWsKJ8%2BPDmMNEJtsc6GiIO2vl8Mh3Fv5J%2BAaAR4i7f0ZAN5qFc2QB6%2BRcI1ch4uuuypfgDs5O%2F2hTQrEQkUIM7n%2Fe6Orky81gWYY90RGJmQXa3P1GBGk2awpkji79RmYwnjIhgyRzApZrnlbMgFuZIp6GTjcR%2BHlzA9lkY7hC3ozdO%2BA7btgivYTzm6Bi%2Bov7B2VJoY2tgDSnr7661mWExfw4slJv%2FNmwnNebSpxKyTdNUeKGeWZJzOW%2FR9NQ30pYlhPTsebYWwKcF1XKcPzHMGhNjbWKpGUGYKHXUn2ddBrTMMtpokA99jfMO%2BrPdZWthpAhS1uYk20u4yX7o656ISijLu09wM%2Bm4gC7sn3vE9rl65BbII9zAA4L5vCbkUVzg9CwHY2BRdtxnG3LDmKC8c2zLWhCwiS%2B5cqwHroVPjXXNwRACsiT0t8epZMYbg7PMQ%2FPiUtgxC%2FP1wsWDgHKbX%2B52YG4wROL9siq4e%2BfRrAl1X1sOjfX7L6Dso%2BE6y4%2BQDjYgOpvkdxjNnMLGTlsMGOqUB3coCLanpKZ%2F4LkfS%2BLyE6y%2BOuzgR3f1iHd4b8cek%2F3OFPLMDn4%2F1%2FGMeJIDJpWQtbopbFH%2Fchq0pjzUvsk%2BqR7P5cvLJ4BARBwz%2Bz1r46NkIT5bgtxYS6ITandza78I%2BaFQbpCmQhdi4slBLqpBjZf6d7hNgmwz0OEewXnSqvnWI6mKjgh42UUmJFfGdON0msqmmWs9t%2FabYpdXF1h9FrELJYuTI&X-Amz-Signature=73245f1e05c3fa385df44343d416b36edcfd77ae0d863b77182c94fd9e439fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
