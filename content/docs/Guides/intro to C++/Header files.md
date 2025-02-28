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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGSJJ2T%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCE2h4siI6enBXUDL6xEp7EQn1QHZn9G3TEaYT4if9E7AIhAIlvcF4ts4hBYJJ9rcRZ25Rzx2ZzYZnaCEwH70tSLeSpKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0H%2B9%2BvpyYV%2FkwfYcq3APTRTshrvoTzgMbw4AyzX8K3lte3uztg9w%2Bn1fCeN5S2pqeOYXr61N2%2F2nXJkiYv2K0%2BMTCisnbMkKvl3H%2B3qnGNAp3o3OjZaDrw%2Bru1mIFR5F1TShulCITmiB%2FCL24zOc8c5mnf7dWCJ6xnun0st0JfeuGwuyB1LS0yXEHFXb%2FAbnjxdl%2F2j8sorhto1Pcnch2gU07lf13hKuTuN%2FgoNk%2BaqfA7V2VZYv75JutnrPtJUiPOEl1x0uNg9xHSv2C5LADq2zG22iR5Q%2B6WW%2Bhr0dDnkS9BA8d3wvBfhNNHFiwbMvo77YmPNMawMlbo14bg80OvRgtQ%2B%2FSL8%2BRZfoCLF4jghvoTWN7EyimEQJ9h3ke9YP2SPyYCrvl%2Befe7sYlTfd7EZ70XrQz1gW2Eynr6%2FF4b2OWCzxlo9Z%2FJenqzNoiXy79pXWGLcqoOMtlMgdjoj3VeXscNDODpxKCrrnSPEt2syPpv04CN3Yby%2F7CmySHKVEuLRtqa%2Bxis%2Br4DqUV8dacGFSYgrMSVSryBB305EK3CHzkCC%2BZwTzOZTwxsWl28xwqyCA9DmWvUo7ioEDsRzEmJZTkSPRSkuyflZPxhMpP64AxKVwzwLUchRuXQmbrl0XpyGptMCsjA40OIDCy84S%2BBjqkATFltCkXcl%2F1kHg2snUIkjS3AalCfNQ%2FGzlHw%2FNXegKGosKFn%2BMiehlitEnJSORUdk%2FD8JC50AMdXYu7N9RL51tMgbbse8UraAYPFAHYqxq%2FeLXx4GxdfPs3sV2pKdrIajJ6Nl2avALom01pLjrGYJVF2WQE%2BROJz0C%2F2ysM62mjUIBEYoALzNIFK6GZ49RfaAnhmirr6%2FszR6BHzoMWIb9lfgWs&X-Amz-Signature=154a487c6c78fc96da21d726623cd1159601d3a1b7e8de13e6a2059098f6f944&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
