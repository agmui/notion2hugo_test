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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63W7REL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOqrN0%2FrTjSviddibUMK8E%2B5KV9B%2F%2BnCCsjKjZkvFWHAiEAkofKwgaXgYYTTo8xCmyhyQ8u9CwaMP2ZmjAEztpSdTQqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcBg5NbEwteL75%2FjSrcA8UJz3vzCEUMeYpAOtysKbOTpkuFCREEUirk56OsYaRz1iCv%2B1KnTj%2FlGv4cNVCInAfWhP%2FChi339r0q2xFY6ktfuxwguJ7hgMdckZfjTH%2Fga7cgH4BGaSk0WnfhBLPVz7jUEjyqH7I6Hm8IuBuca%2ByM2CfdJxCfiukwWpcMUzvTp99%2FXR5cnjs91x5Wn411i84KSzy%2BiYFw3%2FuX3xOukHq03sEX88Zw3lVOA0eykTfTIySdYxqNcPGcUyNTJ0TSpCf8PTQvDUl8b%2FQMlJ0Jn9QxumXspvR4%2BKMNAff4KfNVqWik%2FifM3dlVxeLB0s%2FpT9NUqNgX%2BXuk%2FZIsTyvNPUMew0ASwPiBKcdU0M5P9qD9Tvfk6XlPiw%2FPPqh5j7BKVK%2FFfOFplF2%2BO%2BTHBkHw6mOFezluWhSbBtWXb%2Bl2Mp%2F%2BXtNZZcKKpI4qWsdATd7cwE8dk%2B28jmHmwLgnw96iIEPzHY8hCJD7Fus8oG8%2FylTWo3CYM7s80cbDHvgpVjDJ0FEtYbmBa6ptwRJHmU40QGd9O8%2B0bU1LfWKYYfHeIUW%2BWb9lOwqCut7y9UF6zaPnf67Zn1NSZtkO54pZsiDs1rabfxmKCsii5uUxwplKpMhwXXWsQ%2B8tRqqq9GPYMKaTlcMGOqUB3g8LdxZ7NMm59Wd15aHCMZxrI7CxWiZUoB4XmwfoofkXskf5SwWvGK0ge4w0uK4j5gNBBksmZHFjYPTQQQGTvMWmg2g4KIaudeYoBcQGsB2cohtDaoHiz1RFDVyznqarMYvDWNlLD6ypO6fUS9nfUCKdGlqB5ItsUdf%2Fws1hl6g%2BtYWVBTPIKjm16BhfPxsSKPavBwWVhnMJhNMC%2B%2B%2BmGjANtkFS&X-Amz-Signature=f2c096dd8faf2dee4f724c0307ad1307174218736c38615e3e0da977f4f27a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
