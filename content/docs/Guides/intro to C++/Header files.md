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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTTIG3Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDH95oEuWbLnrtFomQzWuWFr3CuD4B7uFzkbdn8%2F0LyNAIhAPofckiloq%2BEsaVDkSIFAefsS5YAIgBymcv7rUTFEFwxKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDDaippj4syIPVU4sq3APtGD9FsRPxzDuXwbkMHCYOYIgADc3h881puP4xOA4wkxp5avxQrYtFJGGgNGG9A%2B7m8IGol7kwW7T0mNp4fBT8DEP5HVbYFTWNPuCqNiuwvd76kwve7CVCyVWys9hg%2BCIeDK5%2BcXTDeJxzsFzvXW305lbaaEbSeSlG04lZxf4elhxHXsR4pq362MKzbgAqLEInpP7VUSI9loZ5nqgHHsKzSM6%2FIg6Fw2TonPpgpoFM5U5fwjdug2fADA3ZoWv3E9Hmr38dFzuwQqTzEQcIx5Ju6i6PeHtHPPB4vcTxU4K4mZGDw1KaOCHoQOp6atmwf4uB7g7X4J07kiBKcnIQNyJax6HuAzzZeoF0arah0TWQRajaW876Swzmw91lip%2BpBOjWBsTBntY1Xg6Eor61aRsEwhN%2BFEKhd8mSrgAQbd98GqdQA2jE0bxhTMRHoWhdfmpXLMdSHXjQ0C%2BEyUm6Pw68gS4KbjiB01zZYRyUnA0gbWO6pi9xGX3DBWQTR3yHO1RQ9ILdRQztVBY%2Fq6fgWM2b778Gkf2EsjSD3fn8A2tXAzB8NP9o0JhiAwQtjgBWaF42TgQFJUMkFG2mMF6pn67oxXXEJwfbvL93IluhTY6TgkhEX67qpS5C4mSaFTDu%2Bum%2FBjqkAaGuyH9HEjpJodxmvYaQ32EzcqJgxzt3NksmRn9RTQSKnk7sSmv63zip1TNgSKRAg%2Bi%2Blyg3OqVlSEbBR%2Fms2K18HfeseXqyHAHX2EyYsp%2FrO5qlqOC0J%2FscpGs5wrQ6RqZ63i0p4El60ukrrGmsbqnJ%2F6OZbk0soapnImjxaSW1GJ%2FLPSk0XnsAviujxEKvKpyZVrbzZ4ssTGZS5lO1S%2BLVnUeP&X-Amz-Signature=d5c36dfc04cc3ce7525ac907251bf3a34e888654d73d25d85683859b5f08dc12&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
