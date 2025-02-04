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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634F7MSHS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDlD2DaL7rFJnmqxFZDtUwqqBUBKBh7GI7IQyVAk0L%2FOQIhAObZi8jT5Y5xVoOgF4YLXKRaz9fDeyEhqCk3LHaXqX3jKv8DCCsQABoMNjM3NDIzMTgzODA1IgzRg58WeQqA1Aj%2BDasq3ANXLyGl4uCox7j8NvXyPV1VvaN82iRdelPPP1pp7wAzd9VqIp92CjgeS0YLBMVaw%2BQ6vxdnXrqn4%2B2OKzIeZr4jrgYuIxuTLXAVNHcUe6CLm2faq2mH37eShMxW5faqJ2QNNjSWRwJxm0KFlIe5Hu2OxhGyxz26pEeSJUwa1VIE40YgihcP4McAD8mZLwGHlP57PfNtmJQK5u59LlLLpR6lIFU8B3Iagk2bwY7AghjgnlxRbe2jlq8ggqZRTPgrn9XOgB9h4a2R5ch7sQMtWfO8hklneuQ0VeUemMsrthdjOoS7muHb%2FXdqSbp90e5jFFhD5h28ya0DisywknhptDXu59s8BhP93xABppH90nrdtJQn6eJXMylXn9olLuop36XkExjm1LWMW%2FVWDn9winz5F6hBHXmT9b%2FuuosYDADtdoA85lvUedfD%2BMfZhY5dw5ky%2Fly9JF52StinMs5%2F9kV0XdLqn0O24oZ%2FQcjxfnYiDSjkFgLS9td%2F%2BDWNmpwKnqJSyofR0R%2BoVEafEMvZOvMVDM2GfqHZqNOoeSDRrSNUoHoCOqUT8TkngkyL750JwgPlLLpFe8Bd2OcOE%2BkL9DJWCu9yxj3HZRcpXL4zdvpnPMZZAsdivp9Hi%2FDS1TCsy4e9BjqkAYihyBmQiNVUzCdpv2dkWtdGcs%2Bjb9JN0zLXP7YljakHeJtztrPinqvfmSN96Xv3%2B2cLkYBJjzIKMlWeNOMVCZ3MXDSwFhn3ki6RMPQfQfotqmdC3j%2B8bgUWlsvvPt1zzq0g89lMye44zFKhsLkLmcOwv5Wd6LItSyL2ABi8FA0g9F5DDV0WOO1nIOq4L2tST8MWw4B4nVMLZmZTCMV81M0aZRMx&X-Amz-Signature=ab19f816c22fbe2587c59e257ba0a40572c3ebbdbbc61a0801993a5d3f878664&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
