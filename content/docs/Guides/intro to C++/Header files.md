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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV22XHUX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhNF4Hr42G6GntpsbkgBWgelKrJkYYfmcjUPeX0MDbBQIhAOLgM0VeZaSjquWyNnnZWF0jCTvp2YADojvFuRK6rqkMKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQq9E5EwNqRXA6MQ0q3APghsQFnwxNiCKvv89pV4s8iL%2FHQ23z6bw%2FyXwNaQy65%2FMGOfY3ttw8fL2xDgnmoML3ihUYIHQktlitmtEcf3h2hXtb0NszWWnewuFnh1aAPFLEzS3dx%2BIuh27i9Yz8gFEXb%2FpqVZK%2BdyrSF7xiA3pbAsf%2B8yh5mufFqxqxqVeB2QFrjtqjztMoutN5AjRiaIk0WEpgzFwSf1%2FcKlAXrE2D0C6ZqGu0kP6Tugn5u4Ex6YQ4%2Ft8mZvy2F%2B6LfNIB1RHScrpPd2VhW9iaLqg8vH2Hi%2B2sPhGv7a06miaWTeF8rJhbFG4RaNFD%2BmBtWwmiDRYiB8yqk1evCo19Jye4IP3LnQxjoq05PTjGpAvEDObL6lx%2F9P8Bq%2FoxXHQDvM3kBfzbmqfw20qHRzZxYkxktnJVOYpi7LCJjM5aOe%2FaWcvWDE8J0dfI5O3Yrol0STT5DdpvqeqY9Smb6FgthSmUHuSyxcxF9KEqHbrtWjR3yw6torT6J7%2FyaD1ukMCgXopb0bCzSxoAVnoyLcEm4Oc8dS5HcCtDxP1u0TgOo5Vdv5RoSeJFf8TCg4QFKK42Glus8xQpZoDHbrjJFm%2BbFzr1ajY0NbqIVpB9tGcHEO0CxmtbBvNjAIklTb7cTTCkCDDdnPK8BjqkAcxXqq7XRvv%2BmDFIUgW%2FS%2Fw7YyFamdrC3JMrWcnvTqD7nqzLJcf2BvHfAz51YUQqxES%2BltGp1aOG8NfHdth17r0TPMhQMV%2FRnPSfDaam0EZWy%2FJT4BvpHVrVrJsUZ%2BnpDaVSqgxpjYIV51c3ugKakxgQMNS2zrNocsJBE%2FNpPyGxj1cXnwbi3NdzEYUmIg%2FeP7ETZUIH7WW4oC%2B4C1gmpK2VRAIl&X-Amz-Signature=1f27be3d6dad91f9558d479232898adb7746027defe5e23c7ee5ef4a86d33644&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
