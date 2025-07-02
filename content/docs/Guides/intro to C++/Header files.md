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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOIPLKV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF9MAk4Hq0gmAGOZJV0rD7mYZvnb4o1XKvrXLeHs0sQAiEA9lNNOAcBPO7ilRzq6yfye%2BDSr1zDCWLPCoK84ZtghTMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwMKq9eTAVvMfJZ3ircA307RjdVAwIxpIGAy%2FVGFYMtnymGGjQGg3KD9sYE9Fd2h7oLBbjBuR9NteI%2FAjR23qOy0n3OXHcui4%2Fy1mYcdaNpF%2Bj%2Bgp73gsnPAGTlLoSVJKWMeRbJNNB5DEZvJ0ZaHepAQlgHMQhpGkK3NCW9NtXdtysImmGD1VGjck4f5nXBERihLGMnYyF2g9ksnMNZluhaxC5JquJdNLQd8JeTxwv%2FKtfyF6lk5LQ1%2BXhhfCHKVoq4rgCD1LP0G3SUSB%2BjVRqloH7fjqskIk857nTIiVnmmjhp8%2B4lqW%2FR8xmqftWTg9g%2BxK9JQ3S48SBXiU9AGnUsCi4hDH7reHXimNUvy85JkDlK9AqH6JVDY8TSkEgi8vH8J2ZpIwkMU5gOSd6GT0ugClQb7VYBkGpFRW5UYJ3ZCAuU4KkdBj5IE0Dl8ALCEYaIXMmvhZxYREz2xjm5J1xbLYe4L8s2GAUFbb16QGrs2ELXGhas7YLVy2Agv0uhNmyxS2JqXok%2FnHFJPynTzQGo3Xt7hKd2CxKig9EuQxpspq8LuhyCcxERrZv0t3Tmg5VOHa0lrHXt2nwB%2BkH6Sd4y2fonZ7Cz02sar%2BwL5xpGwHgftYVTQJm5r86QZxK64A5t%2FsDZktbwtKLLMI3nlMMGOqUBnjkEMJ66UnVYCJ8IsweDEZH0A1kK%2FPQDQW5%2B8WhDCO2HtFBlYgcPtMzS92iw%2BmJB1UuE0%2BHXl%2FUk%2FmjMkFRgrusUIKXS7SOQluBMc9wBH68z8Udz%2FjqeRxgKOTRfDfzJHu5fqvs15d3nqjLvy%2FM11vxqHyUYNFP4qkwG4qkygqvXfw8P0%2FYf7bZG3lfXZBC7FN21uTySBBMut4J9joAinNPtgu1v&X-Amz-Signature=2a262f1b997f4d1eca8174f754e60d606d7e5d58b765e10851d97607b5c25137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
