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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GW46WDN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFWXLD%2BheLxxFS31PDdJbvWm5XTKuPGkClXs6%2FFbwrJlAiBotQp1y0yIa%2BNIutOz5numC%2FTht6IoH5jGxU0%2FGX2a2yqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNGDzY5asZXfoSttKtwDqM03fdhZmlSXAq2Q9Em8CVyEZSipNt8i9%2B7vI4Ds8x2js5xxQirWRpMf3KF6HX8%2BdRxJFlOnECy2Ql%2FWKPINpuHWALnpQaVSKayewt09HioNjah8A8ck5PL7P1lntwuKXmLkv483tbUsyWepudaUmSttr0UL2rdBNGc6QdpP98x6SIaExEC%2BDR%2FDhhcU5Ta8Od2ncRFPmntlJtmJQRcNXO36VprDaWWEsvsmYgBn7uqQPp1XeuoNyfTSiMG%2BgEKoU%2B%2BniOxS2n2zSUWo291GXGQ7xa%2FGHqq0Jhhuq90X%2BVnK%2FzH9wJ9j8604JwjkBvi%2FBtAT2GCcJmEOPsJTCsE97FvcIJTpAJtwrNZvhfXJvkqkYA2NIrV0oKjDcj0AsVQrVHfcxQvJZaKuKBPmkyKEzFzqBqlnUgJUsMkkVOz7K6YiP4GwPa1Beag8A9KfxjRlUlLzcGQRm42uFCMlPWFs6TlAQ0kpS3vjcsEJZ8hj3v407x04SYcZUTSa0EIx%2B4TowRlF%2FxhmBzkFL9AfSf15S%2FNdzPeDf9E05iH0KVSjRVq7xp5toDeTru30YhOPMBsAIarlomY6CoTpkMIzsUh4CEKtMqs4nQEMo6eeWrtJfQCURIxql2mAfJuMPvUw4qCQwQY6pgEBGwjxm3NmlfH88sYXxrsdjJUwpk1B48FioZs1fk%2BgIbaCwfGgLKJX0JSpZ0ibM%2FhfKpi9goPISoBHQ8mGXtJf4jlSzK0C6REIRyLxIgR1pdLH16hu9l9sAdtFkyxBQmWdPGJQlCP0qe483kvxMIgGBXJc%2FBfJeCPqF1iYOV9u%2BA3zDHesfXE6rWv8LxkoY6yb8%2FnjGUVLAm8llH5n0pjgQ6gmuKha&X-Amz-Signature=0af474a8c699a502b7a3d1995fc02ad9ed393f5c884357d1a21490b6c2246d34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
