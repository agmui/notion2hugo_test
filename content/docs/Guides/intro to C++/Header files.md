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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BK3BZRK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC4S%2FqSLj4a4NyoTA6L7oDKXxnZ72LwukhiP3FXr3tvgAIhAI6Z8dZ9gV5DrReBmple2cUjiA6d73UxPxc0%2FGOwMMI1KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkI54kEixQdp%2FzcPMq3AOK001S7WIYwppPpbRrm2Ar3pSYGZRA14o7YG4EbxYQr2W80K8JPIWspwgIFJwHSJd72G2ZLYiKR78xWeJ0vufdGA78usrPoTumFxZzgeIjB7LnX%2BGJjts2ukvdmTCDg%2FlYVGRhIv7WvD9jmLow17waVeguhKkcnoZlmTpaLPthhu3PHgRbosT3rxEWzDE8I0hUDUhgCDK7WTukievSJn1l71Xs%2FBbcEqM8tbeP4k9mm%2BwKYdkYSr3CJcckhmzeO%2BWm6wysq5zw60jCKoLc9g8ohB0WcuezZpjxUvOB4us6r6ZO4wtNXA9Tg%2FNua5AXf1BzEm%2B91YWqQ3dmz5t1WWbzGyto8fPnt%2FFi%2FISUiWW9GCD9LygnQVJIIxjh4a%2FwI2SmyHfH7mv1ui5SuQgfx2zogamssZA4Fek5qu7wOcv4eVlyOrZWnNOUq5L6q6AqCkQdwRT7EYN0P6QQfc5aNFdFnDXEF91cFywrm17MsWLRrOR7SwCh2PoxndfJyVjwwg91hxxCM37gN%2FjpJkdshZ46Z%2BWj7Hb6H1SuyN7XJuuSGB6YMsAsZyyb6GyZfLwOeezbWU9jMZkaqaZP%2F4m5oYI04ihm6JklQ8sSeAGM%2B6SwoDUz7Fb9v2NOoNk6zTCo6Pi%2BBjqkAeO9Teq7nRNs4DHDMfYAedE7JcvhcF9%2FzkFC8U2mz4u%2FiXLZA16bbPKOpfElmdL4vyUd50Y8u70m7EDviuJuTMsbGvv%2FZixbv7eGq%2BTldlGqGxXA6SCw1mTWUxTWrRxacRFO8Q1EQorxXlHgGzAL2k38q7CYdOzxMgRyug%2FTlLC0UuoasVkicqd9IPUe5MHt%2FZO2BQE8ov8blZoEISD3VYF8%2Bypk&X-Amz-Signature=30c2165330a24415ec96a2ca041b4da45684a6eee940b3ea8a81b038477ec4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
