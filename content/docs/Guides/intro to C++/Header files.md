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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWTTNTN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC9%2Fs3s21J7a3Gy6%2B5gTqub47oDCadP5LQtWHzjxTCSNAIhAIrlXTna3MwbuqkmLZKtJs9%2FgXAP8hP1b%2F%2FTYBzoz7OmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIx3i8IHrUxhe%2F0qYq3AOYYErLz7X2%2BIV6hdKAKsVoFPiHnLu8B7mf9OEwlCwR50%2BaJH3GOBOSevKtRWePGylb5E24pSCO%2FJR8DID68Oi6p%2BIlIqFTzShHhU1AU8TJzhbrZbAXepHH4N%2B3HuJ6xnWXAq8PjnkgFv3ktLGDCGSQBH6OVhTFZA3lXTSMNHUWwS1NosbzvJhsQnb8knfZtTDjntnULMocTG4NXTTEyi55ouItZgJ8pKHb%2FcOSrUd19el%2FzRwTeJgA9X9x2HeEguF3x72Ef7aQdk061U8EvzCNThEsYqHZA%2Faqv7MOUGKA2di7aZbOpEKM2CUCyf6Y0d8YDU2GhYB7lcn6NUDAAi7ims%2FcI8on2DFmx9WjwB2oVx672TOCOr7Ch7FdmJEGZ543Wj%2Fqhn8f9YDn3vr%2BQxzwhE8T392IFlIF00vshqMwPzq4B0XtttYHVTszONyOc7FyyWbgf8ckiULOm8z76G%2F1WJD51hErkzan%2Bn2trEAuRE4u9nUUVkEO2rV611cUBUAhoGph7Ckr7siiG05Vmqs%2Bfg4Dv3LUHyp7Z%2FS0VWdxan4EicDHMJVNSP0EyzOCA4aXiGggnjPouCFXOmKX2uJnqxSoZacZPIpv3eyVf3ukFtvWqYiKUp48ayb1GjDQg6PABjqkAXteuk03Ri9m4uhRXPP9K%2B8QTzUVmNtYOd6jXOGH3U6e3xvXEz%2BMWueMNauvjLArn12Is1CNuluoCeixkisY5cQi%2BLwX93r7w%2FWbyGcbtBSlYUNsw4bYU4p2L8tQtqxwTijlGu1860CSnzh4uipl22V4pEcR55aiWQReFHqR7G5kpWDippt0%2FtxIy3oSMeggWD5CTx%2BulZztTFetJVMuaq39GuSN&X-Amz-Signature=33d2b9e18e4b1d1d80c2c0f70119ba01652ea9c4086cedd3fe4e40b697f4ce24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
