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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFLMK7WB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGsK%2F4W1nj4E0tRn3RSwPK2%2BTZpGJ6JNj%2F18nLjmBgJTAiA%2FsEQ4LqujUK%2FoxP%2FVWiukVPg4SsJtmWxDF5IOq7KAiyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbshSIRv9rMHGzklbKtwDpyhawH38gkGfhSVFUHsmA%2Fb3aAkL3eNO%2BFOBc%2BAd9uWVYifwwJkILuXDpedaRUF1HJVYvUE%2BDHvIZLlevHWTmziyjwSeOektPzJZ%2F38FsIOqoFONrgPcIrxmGveuH753y3JJkF4AifWIhf9s1JvY%2FeH3vFt%2FTLqQN3y2ZJq8ooyMZ3%2BqeCRLmwzkWM%2BzZKzu7wYyqWGFoiqzQ9jwqbmqXxGwn0wxlOl8bFGzeVDeXjPjAecR%2Fgb%2F03h%2FqMH1AmwnscwgYoC1BuVItsGIkGYPzZAU73txD1RO8fQnwlJ%2FD2yBVMEvMwDNByLDncnUFOiOajsq62yibDJThyFWglXSdhLHwDa9%2BVzyQ5jFzxZScJG3pGb%2BTFK%2FMp7iDb6zbG%2BKW1ObkD42h3xvHXeDGoGwMnVsZpuUViCE7HaQNofpmTjY6qvWuDUIO53rS4TMrOomSVl0EIJCfRoUrWVETtUWiKGVz48tYY8WrE7SDSldv4aLBnJbQqwNV%2F5RGI1UkoJ0RyqGWy46KEzyoEX4C4lAdhewWXGZaBGwFOk9Qiilt%2FGdpuq0nbbDwZY7WkL1xh%2BeCpMNi%2FarBTPYWVgXkxM8brlqBuHYr%2BCz821y%2BwzdASg3hxrIY9b6j7RWAaYwkpTSvQY6pgHLK3HwKcfJIN36T2oWQZ8kQMyYkCi%2B3QkFnG18m1my434pGNsV2FFflFQy3%2B%2BuqBjt7DXPfWSC54vc8xmr0qPlYRAYvvYeTAwdwT6rTqnKpL2%2FBlmsTjogTNJJksS6iM7v8%2BXKyOO6VliSGJzrpb3DR8pUORPqVNsqRtUaAiUS1N%2FoNfb3m01drn3un6SBg4e9EpQr5Cy%2BHEV%2BPcPKKwrxvbs1nLn7&X-Amz-Signature=966d915cd6daa355302039d3e41be4692f78167dccee28b072907e2ffe99b5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
