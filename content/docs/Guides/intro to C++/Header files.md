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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXMYMU6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0Jfi%2FAafhZWv4vUMWHUGBvwchcPuHdiSkekr04Su2IAiBMtvpkC72HmHrqOkgR1F6WGBW15gUdywV4AAhopVwwcSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBs78LU5RPsdLoXusKtwDMARUAdqJZeWwTgmHFaT47z4AK4nhfEKAD0ppl%2FFoAwoSwI3PUg4JnVkYTtQIxmB2UFeZyCf2PWmkPc%2FUkwgYylF4U%2BYzaQnwq8h0wXbzSxkPNGT7MxxSOX53y4SzS1uUZSsrrY8HSwtrOaC4uxQvhCtO3M4uk9%2FkHK578eWXAeLNzdYuYLTAIZAoqyeSkqcR3we2OmGd1DiaDr7gkwa9ctygATEUux7vtssH5EvqAPlITP2IS1nTYJx%2B07fbmabaYFpOf0W2c4HaBV8R4X40DawdQsH4NhUA9N5UK52Ji4lWEuQgKxpiDLtxk0FYtMF8fEfeYP28UpJqORBsKRzbNrWGiH5ddg6j9YMKDarDVbQyUwenaqHMstCEqFGDJtO%2FQztaQ0zkH2sKkyjp0hOhcT1FxqG%2BOZFKLFmMzyTSeWvDzHWp4mKcEgsB6UW42CbDUmaljtpCQfCv5L03U%2BoZaT6U1u9DPY6gWZU6uGcBCnCMUISegY9nfTa7F2XS%2BHtH1bWhyO8ZFXponM7a%2Fjd0kUBM4V3y2jQPL%2F5lWJSm%2BcHdGswlwsBBwrPhj3BAWlCpypbLLNRNr4T1sF9NPCNgC%2FHKYq0HYkOCnftRw8qyOzJ5zvHkjaGy3IYbMhQwvsnzvAY6pgGibY5Fu5KnfYqDnrPUbQAWbEasA6lYcUquSp4hlfQxsQZshQqTP%2FIKQ%2FQYf14Ig1AgtpnRcFJDFdk1QEkDSy%2FAdghPRW8w7YxhZxQvaHpNo3zT0uidPnhU8fqCSbWONUwPwfEn%2BXnjXptHQ9RgfsQ29Fo0IUZCc9Vp5C2EQvEhhLzcMITciqxTk6mRVjbF0nAAKJpWgoE06wsJvv7yvKCsr%2FXkqEUs&X-Amz-Signature=b446a7b7131ec1194736129b50397ed53e5bbb83b8cb3f511a423842c5221ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
