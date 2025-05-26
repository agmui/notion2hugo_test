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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXZVUE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLyLE2lvaZ8%2BetPM%2FhlVglE2L7%2BZsUYCCrDSyIqUJCIAiAkst5XXRMjPkDjx2hsHpg9mA07GRoW%2FOp4UWg0w1MKlyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMWx2JfvGA%2FMfD1DAoKtwDJ7SMJ5H4p53Cdjm1qy4xK85SSL3bntQVdhfhOwzI9q1gls4nmk3zc%2BL7t1gD3cl1wE4QvF6KVUPwhJYScMgbmqH4jLSXU4Bv3Qe3QvCCHPtFct8Qm2ncGo0HX2tZpnS6G5Gl6QuqNUXyU%2FvGGwmqeemNfPFKfjFxNFiIPYekL9zHuIGSh3SHhFpfhZplAsFzjE0zAAvdVuHBDHtUJ%2FuECSSbqmFnnW3WDVSwNv85AYwrwwEZVWKQNewzMJYdTfwpjsC%2B6uM%2F6cHzzUawYUHus%2BdBAVyDUr8Ov9nijeO9aKm%2B8oKD%2BVwU39QUpO8rE1SUNjS80b79UwAhc%2FVr6qK8Ghq8i6a1EMypV5zRhVfKxlOhJYSRP7h2EKt0hR3btdGGEv5Da3C8ye7lTtHMzJ7AaN1uWHfOTq5gxPV33fYfeDOFDRJQ3pD2O5o33zFZZabv67mhw3WTAZOqe9xNtpBuYMN735ndRjbH7fuOyHb5g78Zh%2B22JafG%2BOeF6Oy9PkVoMFk%2Byk%2BCTEDfHy66wRIrZnT6MxGi4%2FZ27z%2Fm%2FWx%2BmglgSgGuN3L7pGCMwtVjgTlpsfqTWeiy2vH9Lefmmz9Coahd0tNGayRi4iw3IcknH5siKBz8aAKdnf6nEPsw8qvTwQY6pgFgWsybN9zVJ1dIX9ZLY2J6xUH4lhOiVV4GV4UnbUx%2BVFaSEfaZpiPiFu%2B6gFOMpQxQWjGFukkQ45uem56d50nREG7GmrfKxBHlZZIf3j%2BcAjLHAy7pXEs3eMrU5MqGbhcG1AepTKneo5j9xpE5Z%2BbzdihysdJWMJk4ZATjToN1y%2FG6Jhz86GYFg%2BdnSjfyMvjY785%2F2zIoulZovkl%2FflplRyjPOlYm&X-Amz-Signature=2693f7e336c4eac839fc1e0a512cede872f752de897de451eb4e0f8cdb74c75c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
