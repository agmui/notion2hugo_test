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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZ67ZEO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCeenH9qU%2BmN5TFQwrHrzhO8Z215EJ00xYkO4R9Tre9RQIhAOWwj%2Fe6Li1buFelVoo7H%2FiAKq4eVEBK0nw%2Bfgnans8JKv8DCC4QABoMNjM3NDIzMTgzODA1IgxcooTEdikfwqYwzEoq3AMhW9R0mk1vFM6VajIiMQQ%2FY51vmGMC4m5THMKcwMyEEorGpKSYqQgr850t6Ay7gt7DKrMsMmFrvHLM%2F81ho5slb4VAW6l7UMgjM18Xl3st8W%2BXakHPuuuWFpw1Iyy9BGyzNq44RA9KYKF4h0K%2BrQYBdVAYoMi%2FPNJcX51FQboUXReLSpWADqUm6lEZDAgKYqXvK3x157aaHgQA4433JF1vMxQsmt2wPw7dUNmcJofI%2FxqUvQisjP6OV1Bqrvz9WejLkjsTONcJvayg3jjVoRW0MXgpidpuda%2F3XpvrJS7cnfYOBq1FokOgPkKO%2BTDnbmjhIBzucfTskbdIKqfXYArcbmms0%2BbsPIGz6KSaJXdG13wOjSua4KFMSjARdUQdqPX5zUm7Sk2r2qbsOtcDvpgxO21ilnvrrimQxV%2BDdICDHR34YF0OAuRKLU2nEugbYrPd9H9JEjOk0kAiwrmiZETgYwFXCCOXv2X2ueOU1hGVOaV%2BuIaUiMXc1R3HtxAPiRDdZgI3hAerZF2Bvbw9pF0v7wOBJqGmOwT%2FFL%2FBTZhIvYeZpy9jLVx0q%2BWmH2sjIj48gLx2ZPvd6dulkNu7W9zSHPtuP43jX8I4qvbPffQzlL7LzJ9VZuF8LSh2CDCVhdTDBjqkARiT2%2FzN02LwQG9Vz6WZsKp4hhiUtN9IjmdILSdhnRlpwIZWR6tfvfk044PR0vcOnzFsqqe4hYcKLXERsitj3nsCpPItKOkpL%2Bwc26EIHtaTxDdrok%2BzYcE2R0mp8HypVgXZIAM069qNl72TKIiU0UyF6Vd7MbBUkCEfeIgaE%2FbR7KYoAN3e%2B4SUk%2BJYznNPv9651j6jRq2fM5TAicZjyH%2BTT8lH&X-Amz-Signature=cdd81e4a1ede74232855a48938ef9d351cb5b24d01291b6efae1741b2e1032b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
