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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXQ7UCAJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4glgCTxtFpZyU0M6IBQZrvUCLaKNs6cFBPFtk1JeMzQIhANKc%2BKFbQGogAip22lon%2BT9cAkz9%2Bvydo1vYrvc%2BjwH5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi3oRjCZw8A1GDYrUq3AM1GgkCvxaCtrZTfqpsuMdqVI2MVtVcjUJHGw5Pf7XE1myJBLGg7Wwd7SIau07m49To5deOXUPlI1XMJ6FCVb6LVBUe5Avlu%2FB4UPV3a6z9Zpfmm%2FjSu%2FYk3TzDAE1KZX85vc8xVe9EbsvXny3tf6qj%2Fbg7xkmTy208geRuPLCytKQ3qPZvNgOiEAmgEjCqwPks7g6CjWWkb3XJewCFpZtaAmw%2FiBIFyPZPNZDhylgHRahvPMCTMUjqV6oxpql61zZYEGzm7S%2B8AjyNcLwyrlXhsLm1IeCd6%2BMrm8J0e3pM9QRD09dvZiEe%2F7pAiZIwY33ETY%2F9ma%2BY4K1VcUvWjZxVAluSwEEbIXNjXUA5sttrNSn8n0Su3H6%2BHWUJdfiR7DdqjmhMTuu31lzpNL4ayVpxOwPgyn9w6YDosqV2%2FdsyaVwuBYIw%2FL5gWJ7wQl7q%2FAQPt%2BEdodBH4WbnZkkFqnyg8XwiHrEOQvGwtGL4jUWh7gMDprewPDnSai2hZt0OmrdvVhXl7DXqqdLEWm6JGE6eFknohQGkL3HW1FKTu77jWM%2B6ZYzPBpIGOsSmuDPyep%2Bq06mBfFc%2B90xKoxTV6Uovskw%2B1TnjmwOIwXyBpfF3aXTmYs60ssgtaIuRyTDwwNTCBjqkARDpXItC1YpGg%2FNh%2BJevb6liyVWQQxnpg%2BvRGouB2zgpQTWFRje1XCdTKUNdS6U2BXRk4MdFCJQtbwjILFmC8zLcesbGKx6ehplrrq%2FqtOb6%2F4JQbjtc2yUCpCDJeNMc%2F92tH5%2BuNtjEOg98c87qU%2BP%2BNB2vR1SoLfRsXqObEfQMvgINVGrr8pAz0%2FQMy9Av8uzYpV4n1qlImveLlxUd3EtgjiRu&X-Amz-Signature=d639047b15b9c48135b0169f47056a57c431803b5ccf1b3bfcb4931c1932128a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
