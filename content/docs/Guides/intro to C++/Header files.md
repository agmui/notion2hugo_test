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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJLRNZN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFPVprarhmvyczRdTgIb5IBZ0RIrR46S9CikyinouQLAiEAw%2BoO3EDj9K5B8eFSWszfkq4AFXBdwy5kjLkwC2Ik0MYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHofAbCF7wJXxexILircA2pPMWpB%2BPuy0AxG2jnWp%2FYV1PgzRjJbTI%2BjXpQtrm%2F%2Fz5i8%2FnmaI%2FHSYiHn9Zwe5j2Dpj7yt0PpUkI1i6xA%2B0P%2BsJg6nvNXHEnsEaMEcfVHAtvtMyrn5OT3cl24ekc5IGyyr%2FCjII2bNH%2F9QQAs3Y2XzNLPjp3up18Ea8Qjx171UEqGnNEhoFbWXGjCEayKsqX6JDT%2BWvHRW4OCde9ktQUZDiHlb5aiBqhCHESnNsRE%2Bxt6yqDuNOnAvN1HPcUFu1hwc1fFoVPcPjNeHvemkWstwsMXTMcmfwZE4XdWgMjVm9zkfC9tLBs1hof6DUQFOl8V6Wbny7nPZgwHupLCdbyT4EMxG6AJysQec%2Fjo5B2Xvuag6QYAVDzuEvKXg0qH%2FxX4vIefk%2BfB%2FG%2FaDXJHjYJ8hG0RX67crby1GOHOmnJTK7OdvPZnolCeOkIrzB6vNOYgr1LFv7um8d07OooS8HO1r%2FyYvp57u5c%2BQ7phfkUWD%2By9ssJz7IOhaLFlCRVIo%2Bu5xa69fKbgyNRBbHgdpSH%2BN2%2BUbTfqnMXPs9nbozrtn8uzuOYj9hrqNmLjBBxzGpvtEf4hn75%2FH5q6G3ppUX4tzMNrjSIGSF5PxUQ47RNFb851XORsyumEkDZoMN7Hxb8GOqUB9B9cUk9au93syV9oSiNpuefPHT8buSIqacXx66ByKQ817sIb9geo%2B2jTj6S5ioZ48pncbNE0SKSfqO2DGHGV77UK1Q5nkA4OB8nn9oM0P8ZspksLwU4O%2BUPy5Pf%2FDc7O388hQGEEiS%2FEez4Ra49r%2BXpFYmQRlxenITvAiND5Iatsz9Zo4OYKrFaE1Wptz0tRq3ei%2FzeYUMSww%2FHZ%2FZfnqPOYYUMz&X-Amz-Signature=73d1b633225a4279b4a9886f67d6773e15fc9e96cbdb31de9e16a03c03e2ebe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
