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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVPWJKMQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICmZayzlVyDlu5rcc0URnKbXwdGdCzDW2o1xTRbUgbyIAiEAgZOOSTRtcSsYkQlrsd1LSpGxnY6ExlLV4jw%2FD2glTaoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGlMI4J73kYCt9AjircA0Hac8rmALZibYbfWlypnvGHocXtuvkQ%2B%2BkBGVz%2BU4bF6ZXk6iLph2P7zaO%2F0y5MISorzUE25cbBPLIiXSWGDgQsb62g3VEjfVJBnbH9zUsdqDvVAkAgTw1SzKT1srQxMGV5qG8AvkVmNUSIgT1HlbqGXpZU1wIrf8Nx9QTwYQUKkjJz1hCXXdgNMKQn2%2BlBpZDly3dSUMUOURHjvcYCtzZCV2x7OIdL%2FGUBXo0qPgGXIA0CoAOer6o1zxkcYscZ%2FJaVuO0d3pz3kFM759Na4f6e9feVJDwWyXOXWwemYPyKKK%2BjM80hYvmqCgQ3y%2FBB%2BWcdyv4pOrJzGrHd5kUv2zEu9sDK9Yvw1QL%2BEbB%2FrPgJCIESw0kLwUdExX5M4iGIMo2hBMXF4ZDX%2FwqjoKT2Vc%2BteRuySpcr9rDc%2Bzl%2FgVfNkxuyukK021dxYHU%2B45b%2BfjgpxAhRwBpTtUd6bEVgTnsH8g6CohQzaYEkZLmJ6VhXhcgcoTSWXjzVzkP6zfCY4fW4JdzYuCYkbdDYlTtvZut1fdQUAIpXgfbemovHiwNTWJ3EU%2FnppGmglVoZOHh5xNUQ0X8NTN9ejZqGMjGi%2BgwxlPZ7ied%2Fh7o3pO0r2V%2BV1AZnIDE529zIYlb4MNTyoMAGOqUBWLH3AtnPHuzN7M9r1AT%2FZ7oI9EebBopNtSsDndr4faGfBivE%2FfXUhxqioQ20oUfSHLYHBiJcqJeUPT64CyDNoMv%2BYHNgY7h12WcfbYbTq9yif3223aTO4NiG8dfoDmChdFdnroRoz5gYmiMOjT%2BGlnalRMkQ%2FqOtR9zWWbKjnO5LN2QJzjA%2FkRnCWqd4ryTbg4hibQVP2hIlNppFji%2Be7GdiEZnr&X-Amz-Signature=bc3ca2d619e0520a1a8cd5a95cdf778b577072372f4ffd75a89cd2282636c881&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
