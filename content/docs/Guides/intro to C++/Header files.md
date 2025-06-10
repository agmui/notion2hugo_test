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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FQLLWZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl99Ou%2B6fZlWZvOYRFvwsgmz02NbMuSsTTADjXPx3d2AiEA0ZnrVZh5QlTp5d%2BRXee1AY6BYZ%2Fb5bawVnLzBXCKI%2BwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUo36r7r96h16JtkCrcAw6Ezb2VJq9cgI7caNHnIZXDdJVDr5L7%2B2zevsOV%2BYTrGoqgODmsPN%2FEjG7Uzoidp8Nvc5OmQy5EmKwZ6ox51XazAUvEAPZRUZiut3jBdDzYxTzOHIqPqMDWD43ZI7ziVOskS0IbVzw463sa1KI6hmZCEtESE4X5pvBGEjfFIjvYksnvramA5Rm4eN1XZM04ygSJSKCrRxwMwj06Dk8oZ%2BYfo7egALcsvzLGdHAEyoXSL1iRAltnfXJfmhQyLE7wlelWxA3mL%2BUMNwCTEx35DBzfZ99S81PJ5uzDh0ufgbh1n%2BPJWUNJyBar5%2B403St4bnCeLDCdhI4Bj4jxDLQ4DClsjutM%2BFt86vVaCKY1wSE4wAh%2BtAWInjur1IltNtz%2B2GUK7dYI9t676%2FO%2F955t0Ql0LEuiNid7LTsRmDkyzFmmGWDbyWt0dxKr%2B2X9r7N3rVx6ZXHr6oh%2FCtT1WG8iBG12AZl%2BeUwUQgn73pKUg%2F1q2424HSzjraav4ND%2BpzrRGfUiB5kqroF4Ei8DoS6EckY7ndafaEujigw3YJaBad6Ej2%2FQag5xa%2FyeQbqgAPiPwvHC5gWa26nET85qs7xhMbwZfSrCYM%2BuAaRdIsyhbI4KHIxOzBVnX1EDghz%2FMKGzn8IGOqUB16U3U9uSEDIIo7%2BUKY6xFx3YxM2flJr1LzabRoSkYuuJG8dfuGaloYa50mSe2XQm%2BHVpYHjnuxODIUyKjG0wLVYoT%2BGt2KghM5dwTkjwwCQJf2j7jONf43vsFxOp3DKyVRFAp%2BBWK6RO5LppsAdU6RIEVn%2B5JNvxBcAxJSTTn8MtBMEl20tfb%2FUoh2LJZejoMdnKCc3ehswce8xbAwSDUzOgHsKl&X-Amz-Signature=6e1bda5a0e1103d29c75f09e1f2bc7f733db810506b3b33ac8550c34d4765b11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
