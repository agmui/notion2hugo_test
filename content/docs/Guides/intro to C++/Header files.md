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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFI2544%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC1jAaIVlKapwTZ8u4TuzBSk7jlWE%2F%2BcRnsQ9ezHIgdhgIhAKLRnMSRP8aAlRp%2FH1iwyt22cxFfk2vsy99qtjtKf6tdKv8DCFcQABoMNjM3NDIzMTgzODA1IgxEwKkX26lBB%2F0u3v4q3AOSkS%2FxBcOPmj8YGfG0PbuGTyFCue7w8RpVWXRGeke4LE47cdbWpWDAHjO%2FcTslG1529xfmWVgKATRuvVSbyQNFRLMkm5wELo5ZrHv0A0a5DWVSzU%2FZjnmhYU3hZcEtYTLEl9%2FRLqF8SAHKQp7kcuOTBaZhqxJZNRxsr%2F2nmj%2BlV11LI5chDP8Y1MMc4URSIs2ftX1DmLZCQWArQXNL1SuUibQO7iwufcPw7FHdzbw7KjkDfeM6HR%2Fr6TWSsM9nrjli0ZZAPp6nLpUAJZZxFZa%2FHG7YaKrW%2FSTwFl4sy0hOTmzoXgiEiQ56WCUE1ozUffG9cQU6ytdNxVjiUiVQdMwmpNnT%2FWCqwz2SIQdUuCNbo9HXY2FUr19g0Rp0OPFsTCqP6L18LAKn1BvsJk93MydKjK%2BPn5GGtDGmZPH5t5k%2FxfWx5Z81QuWSZ8jpxPXH8InY1qnnnkh5afwG2ygig66OhIdWdcqEhcfhdnE42DflD9LqXH%2FyuAXEK6LGH6WA2TGUAzudFFcaPwovOCsFGbhyC7nEbs3p8Le16lYSrCX%2F60refJc%2Fylqo69KT%2Bby7TZmjbzyxIHZ6vD7ymcGc5wTsGPmTIBY6Ce1UInLVccuE3NmEw7d6szy4sUAa6DC0va%2B%2BBjqkAXKrMi6AewpGZbf%2B1c1X%2Bk4BpECnVYlGcZFDnhJObayeAjlk7%2Bmpv1t0pIL7MxTJKCviWuhSyDSfGQ4E3SkF3sOEQvFFeeA1MOEzZXWJvf809mdhoeUNoL2ozj4zFm5pBq0%2Fjc2bLPYjj5vorL0Y%2FvuDPXhzh02lHv6j0n3DkPMQdqL6Xy3K7GGtJJrbUETGOYifRMA0Jj4Y11xqOYuiN9qiHGB5&X-Amz-Signature=88279dbd5bf288f3fa2f430bbf48ed3754d77362851227a969d2e01dd55be61b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
