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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCC7HJ3T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOcdYMIx1rCWUNTGihgPZhx6%2BFB6bM3ecayGMPbWowUAiB%2BWAKYfH5iata5hu2NTKl3AiYwNcgHOmEcRZGguiFtqSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWKJlR3rqku%2FSDWBgKtwDmwcB2GPEoGv6lddaBa76ujhj0LPxbKhC17Gx8pOn4%2FkE8Ne3vT2re32U4QR40WHa7KjOfS7Dox9Y2%2BKwCIc7kZJIpQjBvzVrSlBukLUuvsECzta7hiEQpYKPeQb5P3rXMv%2BiY%2FpAREO%2F9NOBtj4P5TT7%2BBtskNhMCSc%2Fvsk5RHURNxFORMTdnRHM8anxx9lUb3NWUU7mkwNcTIy95uMWKO0ahYmXo7yp8wCHE6T9H9QUl2HWnbvRBJ2QPXiqkzeTeAhjK4lL82NiLUb%2BfDzcQ3g%2FNC9eFBGpyiaZKsE8zT3DbP9bhKGvzJjpVLcWALXYGXUBJYH%2FDuXMk7CP9fG6QzcZkUVhFiJzpqFfdzcYTHPsMd3%2Be6n5p%2Fip6WGfhAIWnAZwL3F%2F13YdeeuKAOnR32loLcQFtyYuebookbV6NOkho4kjwpvw%2BWekmubtDgLjqvvwqP6iWMQu4SplQ6lijFbAHOn8uqOVbfwQFYVzM11WxRHlZcR7wgk7npXJhCDZFfSRoFYp7elD9kPosmrI0q137BerDkVeeRIY0%2F4AOiO2h0rTj7d3HSiZYM5L02Efwd1mUXxlGcpf%2FqPkgTCU0p%2F%2BhU9fhA8k13WLuOkbsqBhgYZzQNcVgQpMTz4w0K3zvAY6pgEBOw75on%2BvwaMFzmQco3inMENyOn4ORInRNU7RimzOW%2Fpq8hn0nDSVFsBzQf%2B7z39l5Y05kIt2HNEivA%2BO5fnCDD9YOB6DJSLXxrKfIzzR60lo2upKbzEGxqizm7LaBEB%2BlhER3tjLsCDixsSfJ4ZUKHUpDy1emtV5dUMBCUETwtZa%2FyJErh91elO4kSrFuFNZYoV%2BmJw%2B2XEDDNJMRX75eOupsdM%2B&X-Amz-Signature=aa0c10745c6d92e019758b319e67079d51d31b43cc99cdeef03da5bdf3a74d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
