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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQZN5LL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQMQlyaNLrPZjqGKEHxn2%2Bkt%2F%2FO03Vy9TYYXXPhHTz5gIgZ90A5YjLa3oMzBZ%2FblJGxOe3VxHhABtvngRSorDDG8Mq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLUNepxeRTkq378zcircAwltPMUVObfG9Siy%2BHsiHWFzAM4OH7y0HpgR6WrMV%2FNwbOI%2BzlOzhQy%2F8shDHYwAr1CcbX3hZPP1gJ482uI74Ny3P9GLpxTaSWstTg30m0fbiAHjUWWJYqfndv8ZWjO0Sdy1KkD5DDEZbzfyl%2B4VwCa%2Fy%2BntWvR8aVB5kKrVsJrdUZ5utz4dvI34PCOgsCzw4NvrtpZ%2FgGBkalMye4SyXXv9nbcp9ACxjMoRT%2B2%2FRb5132czYWhmFzfNVPlJVjgq6v18WyrQ8e1SuzUgZH8VqTa0175Y%2BxyY4k7qcu45TB4MVWj8z%2BDxDI%2F3H8Qnt37HTvJSiqqmvneUUQFwLWXiHlX7yC6BEKmwfhp22Tjjzk15iBI5ffgXi%2F8XH7yT6qcnXoFSqdDYcvtVzsfXPxMaQWRqsbZyMAR82LNHjpqoncuYRJJwvyMjH%2FLWBu3xGwym7dAsu03GB78K2%2B3f038DhYGOZHGs5oWA%2BXF%2BK1Vt39zsCvnKOREqyr5HU8Wc3T%2BvZ6ZgkRowUxspEI120yqKZMwbe6Kb27AO00JsWt0vKrLCka7yFUtw4N6r%2BNkbRCDfXgdkhYDo5hDPUaj5ExA9xvBYY9U5LkcmuX%2Fag7D6a4FAnfGdysfvyTHFeLEBMN6opsEGOqUBCu8%2BSaEh4Ok84zxt%2Fv0SrpHbFcQxTS1kWQGm2%2BDqwkcNWIfRsSpgXAtPG7mGN2198HOezDXcJ2hPLcNrRoATNfsejWzN9CsGJp40OlsyQNAZ53cB85dspZs0v5zT%2FUEksvzxvQytbCfb%2Fd4r7wWJuMOQ%2FuC%2FAkt4I7ba2cr4AvFUiu%2BwBcQbBq0HitqS7mvIUnERyMKZqI9W8kwehsJ1UgXEpuNq&X-Amz-Signature=356b9baab6a3b55f178815a2ac0e4ac6d4dd865fe5b438a7082ddb40a210e21c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
