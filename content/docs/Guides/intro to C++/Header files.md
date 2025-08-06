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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXA2H3XI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCGkjvH9vQuf8lWIf23K1jZwt51S31CMhJ16lGJlov6eAIhAIrm7NHDpTCHLrzA3Vxw56sHe5gEwDsVhBXxhtFZryQNKv8DCH0QABoMNjM3NDIzMTgzODA1IgwYlilQMZFDSvWzHzcq3AOaWzLX%2F0pKsWeXZezhIEyBJ1lyJl%2Fv8VaaooRxmfBz9ACmiSvb8b%2BhNlJYeUa08ZCgNvuMAtpCtAdmwluDpIKl6FZ%2FFuOoQ7hX2oMlExDChlHEvYYxMzZXs3oV7AI57RO4K6fcV0lz2Hq86uCvibQ1iNseQHMkaMdm4BlpEQuzpmPosThC%2BGzycIwl9PjaMNTq1s3HfFy7bA3nwJZhPm5QfR763nzEfqkL6VAKiNC2Hix3H1BmqJ990wa7QsVGDOqAcRBnzamg4CBzXm7Fc5MKUnvJ6%2F7QMU%2Fzoif%2BGoPq5YBen%2BgREf%2FvkpnVjv%2Bn%2BaVsxSPw3qDRI8xOAMzr%2FFg%2BpFD8bm59M%2BCyGe69QsvJhBauYUUdMCxgkom1wrWyXJA9SlsLvN7Nz4ylB8BKLN33%2Fa6nw7lFpsOD3LrNPZeRaSt%2BUw9oWeMSQxmXuDHXdFXnK0gFyM1hS4T2tLTKt0QOSyDM72g70SPBJnOw4YHCozo6jcayTGYR%2FRDwbWQ7iUOldopjpnmdXxrqUOiCMPj9%2F3cIZ7ApZzTBDM9MtqwLLssLxXaU2oxRnBhGh5JSNhdlI9kI%2F%2BNM8SkoGNEVc9N586jROx73ozcY7ojIetjSFNj99fXs2e08ab%2FVFDCL687EBjqkAZbrbDxwpB%2BYmQllsFQHVqU4OgiSrNPjnWe8dSDN%2FOR3uY4HWK5tZ%2BXH4Y22n2JPChiKSX7b8kskFJtiz%2BUfuV2T02ZCORCELwod3F08M69iGupZ58ytf2ZmjxOgLOqKjeQqm31sUihHmFTO82HOTEoTVJ6qfTbZDO47bXoUXGDdES1W7LmOogeTOupHXFOjhgzWLbmnADvWo7%2Fp9fml6KlG4oG1&X-Amz-Signature=cd4f65498794375995736f656953ec483902044ec07d2aa769337764675616d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
