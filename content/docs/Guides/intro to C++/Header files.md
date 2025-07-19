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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGCPPAS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLrR0qGU6U3RVL%2Fy5LmlgGH8PeMbaTlwRDyZ4m6RE2QAiEA%2BYqv3md%2BZ6MtdbebE3%2F5anktYXL6zXl666BW0ir5tGkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPQNTnrMPbaAN0I%2BCrcA%2BnbWh4LkrgHwcsDrY5%2FshPo3%2Fu6%2B7bhL5EtQH2OQKZt8DWFpf%2FEEQGfdV9TUIIge8Fbo5pdyEUOfgb1pUZ3E6kqbA4hyiOyeYgGNH9si%2B5YbgIN9UGZEXGEkzi%2BQZxa8SOf%2BDvELNKUBBYuiUtOo5my3pPxR2C8GyIAplSoQtkKve5sUq7lVlLp82gO3a5uJ9OJy4DYf7W6KIgqxwB0A2HVbAbRhVW%2FLRVLMNmfUIoG%2BIqh7dFoI9uY8ovNRJhFLFcJnIgaar2YGjuZURv3St6osVpb4kZlwvt8BCCZT3KCa%2BjKiE9ScrJJJ1es16%2Bq9DEfq5BgfH5qkXigH1pCr96F4Gc1x614f5MZw%2BDoLQ%2BGnkCIQTfcmI7DIEVUY5Goz0azSuXH6Ryg0lIEHnpqWF9thHKSeSMAgjJ50Pcylts8DH%2BJeFEMqjulHcWcSxnbMVMn97ANYkFQzUE4Jm9Yxv2ZW2lzlxv0b8fqhnsYc2A1TjcbZbE3TD2NDTj%2FRFhdxcCtmT6%2B1ValEGn7H85QLA0eDji6%2Br%2Fe%2BstvZoi3YyXAuP2VnXnXrqizxd9UoEF9FfJP3MxTXQN6xwJVyUetzg%2BBnU53xZumBsK7KK2D%2FK8Q4ZPJNme3VrQbygvGMKr178MGOqUBxnH44ufmgXxFf3LAgnOfb%2FqQKSKDlBguZtUtF1O7lxgzkgFkL7xyPGMQfv48xEi%2FG4KTFPZtcweNykpadQay4T4U1mmn5XS%2BGn7Qo5SsN2xRgszKEioI49jDvfah4fhJ0r63iFfnL9m6HikXoMiRqGSXraziZQQktyIJsZ0rIN3M%2FDA2w1fElcPayXHFVqTJXSQzoqeNnqsf5v3h4JWsW7Z%2FCt4I&X-Amz-Signature=6a9f817f430f6c883ec3ff38ceff2e3cce82dd95b679675e12510dd0d342174a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
