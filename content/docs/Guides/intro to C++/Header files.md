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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MBJVJWN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdTQHslZRCEPPwmxMmckr1rI408Oo1RPQKcqpslDjvHAiEAirjAIL0yAyzse4aEcyoK0fcTTjIKsEqsg%2BcCHmIcjKEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWuLtieQrp5z8R4hyrcA1xuaQCQjZg98MON6jmRIN%2BWhU4ChIjnXiNB6yeG2%2BQEOChfufRKaxa30pvyKWuRa7g2w3rN0zG%2FNO0xyKv%2BCx8K0mPKBDZfUpc%2BEB9yLmBvaVO5KRpXcSyGIIkPaonKOjQNsG3eWcWa1XTO1R9xkpkVazYlLq6Fl74GnTkkBEqbViYTzYc%2FXtsxkx2epa2I6aCVRBJkg5VRePOoCcxf6ZWDZtROPrz42qBwdvehvAu9kMgKKDSDcSyx5tcpBU7v8Og8NQRnO9KsVcKMZlcWuR9fAAoLkBoyEq01Lg1upjLKIQxKR4s%2F5g4mjYeWljPZeEJrStw0h7AWj2ddHs6LgS8iHuJKNjcD84AdiU6WJIRIxASH2RdIVHRg0jVt6RJYBKY5tPJM8e3FVycAN1cUcCflcyaeoa3hXCX52OOKVmRMF3%2BP9XidWPfz3grjq%2FcKHRUClrWT0e6vgVs%2Bha8Ir4Zek5nRCSNnpgWayUP5KGu3bWIxE0%2B%2BMoO8YvtZHJBnS9%2B1GuKatoyv8qcMh4kRzv0bhOsPuaW3FL4kZBxRnJ6VqsAzDrK6ZZAf%2BO7XDgQw6POQoB4grSpQlu2U%2Bzj9JPQVtWfJ2de%2FCoaTwk8PCLr41%2FgU3MZcvT98ZneDMOC7yb4GOqUBUp%2FXjmy2hqTvmwxj3MRthsRu8q%2BBe9Dl3cQd7H%2BbOwCKA%2FxbQD4Ikb%2B6iP6BLzYqrmAOJdlhxH42YDdXSHMMVwl3t6CCA9NBQuaAOuUPl9NagY0f09oE3hL2clgFwyQgBDzQsKazlMePsw5toln1UrEn8izrbHRLJ5B8NpBCguq40HzZkcrksCG%2F1Pp2rQlMjFBgkvahZZJAgrdVlPlU4y%2B7bv8C&X-Amz-Signature=0f5626f0cc39722e5a377b2bba58dc00c2a3c0bf64f6b87fb435e019e74ae438&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
