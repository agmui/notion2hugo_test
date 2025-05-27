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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2MDW5Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfMFK8pYXc%2B2BsCrQ6iOWj0%2FUq5XVnNQrFzDedwQ%2BAUAiEAwk0YvJSXOElsgh79qQFywaqUwjWnbYeYODZucjarEkwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGlamJ9AoaVwPrc3SSrcA2TaIH6jhN7lu86wz2sKNEOmLxsl9JaiL6inFJB7KWOaT6ZJKXnKuUEoyoVULDBQJ1T%2B7dlGOH%2Fsk0cFPR9jo%2B2EWyz5Nn5hIAVg2Th26mM1pnKCD6Uy4xQucwzUyA2qRc4P0gvW6H48SPB%2BKd2PfnNMZvfjSL47yD6gjKUgHrzlmc547jVTc75a4BC9%2B0kmtIBzh%2BbFHT7K8KqGqU4iB4Pr2Hd5pjIyqfUbqGV8kSoF8kayU25zocgLIHI7mhAkhEugk%2FQtsdYO0PHWet0q%2B3vuMw4njaN2KynNgZ7s2p%2FQvxvpemwCyZns9auzuB5a%2BIDCdNf8AoMzQkXPD37J4hwTgbLF5FUVLqRPwxIYo4R437kzure15LPnpb2mHl8MLDf2E7EJDkXC9IfHeUJ%2B%2FaPLTq%2Bybw5YRAulo5tSh5lZ2A9bJMAli%2BZVQdaiznYWT96Klv47ypG2LWGydg35Kf6MbGlNimKgDvIgKONaYDyvEAV928I6UdlFEN5CrSXxNlGTKrQ7QRB9i5p5jDUeHqqVIfYbb1TmUA948PcSShOaKmPFAwZpGKhFnhekQBxIABy6bvYLRZg9CjDNNff%2ByZ18DHQ%2BaxxAhfl7Rl5BrPaFnERo64X9H5SRz97fMIrU1sEGOqUBasv2oI0GubtenaZtmV2y8fZ2E7e5FI1w%2BPcIIg497YY5m26HxuTgmKD2mjR0dZJTj2Z0038HBoZdQEA7qTjqhGE2288CXd%2BpKprYlJzEawezYp2mhQCuW5zWCYyqZfMG88UFdYxHAslRYnhUg9%2BIVhxFPXHpKMslZfAIdYRRzAPE4tchng4mhLojdXnHLzzE57xQSR9Fh0Kd3%2BlzuqjZdvfWvDdT&X-Amz-Signature=2e98b29babc0c2366a717b47da88615d0279e1eb852e36bb91259c748ce9cd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
