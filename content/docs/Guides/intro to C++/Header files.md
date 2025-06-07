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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RNXIM%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETLt7SE%2F4%2FXq1yblG6zQfqWW5D9kmwQPcCi0IBjAGyrAiA%2FMjp1UIzBJ%2FXjHz4ME0qNRT9T8VepLDC4een40fhT6ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMinyfu0Am%2B14w1v9UKtwDWh8s4TCR1lCiGasJuPkkK9O9d9LuDVgKG72ZVubMGgKwejDVePNc7jbIrwU77sT3rWcx8OLDiqYMzj1dDdQD%2BKd3TMVVGt9y%2BKOyw5TlpALJt6iqayKBTCZdMwUouzSQwqsDBbM8XlyGC6dKrSZfVADqgQUitWdZ37EZQI%2F0bZZygjM1Z51XQJgmWnfTPgZSxIszBtoktM0PqlpD1vtBByK0JztFCb%2BphJ39kOrQa8LdW2R5hElI9JkBNnyYq5ud4YloSy6dyCNZ0Mev6e6WHhskL9RdiNc3qBfhM07mD3nxTL9TH6DhOfyLTfwhJVScjzPqQHTQPPRiAXaNfmNC2xoWZQvPzirHCWDM%2B9yEAZmObOZ0c6M0LIsKYDAEDd6Wcd4SVuXBJumOECdORj3szLPZNMlUQMrRoay%2BXgIR2aAl3NoDGoQOqY3k4z8ZS2l6IeIYiLwKzJszQS%2FGGMmUDHmHmu3todp4FhSyEJbMPYyydkLJkEB6Va1%2F6tsf20%2Byoktj%2BTM0zNTqAooJW8W5LnBMPXhnxi%2FYyfm49kUsBZkHcVtPT51Rt8Wn6INXYO6XvHSNoGyViMXG8t%2BXNPTQwWDKejzCYCKw4xfRKHpVkQL670Y%2BfGobT8R6DU0wlYGRwgY6pgEEku1vMiVAI%2FkUAoFKp7MLy6WXNkIlUwg7RD%2Bvz39p%2BOoWVAdWHRK%2BfTzSesrPQ39Isro4xU8cN0hhkg7guUlZz1wTp50R6%2BPKtYv1w1Swhw6SO4effBvsKJ7zgo5oQAVuRqySGJ%2BXN8Vj9S2%2FzUuEWST7YAw7IkWTILIOyQDsXmKTnMorNVuirUCITHOXzftrNUE7AemxA%2BMeAU9GUaCSccKFSOax&X-Amz-Signature=9f18284901ca6bd91595f456be9cf4efa58e3c5c1ebe48dbbbfcdee09564e322&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
