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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQEF5KVQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuZ7hGlbU4Mu3hTGsmdEq02KCqUaFyidVyoowJvUSgxAiEAq%2BfF%2Bmml88%2FRFzYjyXVWMeDhW7NcbxFz3nXnUL9cBCIqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ60AIYN1WBnbBv%2FHCrcA%2BYmHuk6Qt9J5WcNWPgDvfzybVoQcdHnPYI0PqdqRAFNWmXUmrTIvA17ARZ12plMixqARTYrEkivAQgC1r2CsiNTz8NRRWdJB52TQuWlCcAAd9jO9UByUqvGIXbvWS5pzYxpOug8sWF01otYzwcQtwKdXVdEknWsJDADvQG5XF%2BKfwUI%2FVAg58MvRSqoc9omD7kwbKoXI7h1RUUg45EBMT0bqLcE3l%2Fys7v9IDHeGY7KENL8bu1wRNvsmD9LZ0mlS91t1ZCVJV6SAeSQ1paCas7KIg%2F9ap2dWuhpMSSPPmyV22jc0U54wphqxF%2Fj4bJcAEohlB%2BKBKYpWaytHAS3Iqz6yGAdT9kuznvRsq7DxZqEGlNwkXyR0jkq6nzVYuRyLBmniiWEG1Kg2AVXYaWINIsoyT7J1yg8Yof8Mgk2qRooi8OvzftuN8%2Fc%2FggLWbWPG55sEpsZbb67j%2BD2AaKrokHdp8vX2d7UaJ5UsZgxkuYqB%2FdNKJRmhFGRbdEbzrxcbcGVjQ9v%2F1flANrMkc4xrIO8%2BGchFy8Djw5Gvlo5VTFOlaRR5an3Qba4coeU6fCbg5ZUZ%2BUX7kzeuhB%2Bka8HSkHP8XkHPH7BHPLt6T%2FphyMwk3RDobUxuetovwSuMJ3y1MIGOqUBR2iSNnGjlE%2BcRhKgYipEtpoLXY3ZAQ0XBn7S2XvNq%2FL02xZa9sC2s2M%2BZgJ0XPnFI2AkKGrrBfFC8n0BqM3FV32crUosI8N6TGJLy6SrUVkademLvau%2FIpxAWZPQrKO18FNEyUhVyyTki1%2FnVcze4%2BMYdHQTSMOLwanOehdNzr05SampaY9vNnmoFYNpoeQBU0x6IxMqHhhyAuwc4AKo3k0x7Jcu&X-Amz-Signature=e2237f1f62caece38141198695940a373f454689c66fd80e1791cb5024c6cfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
