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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SABCUI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhq9ODWajBdsoJxmya2hqeD8k6nPGcXJY4hNMpT6kt8AiBRAYKpLQYUSJCbmDAjT4IyeRwOwPiV%2FTbI3zQKSHRxySr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMiiv1dewM1bcIwHS%2BKtwDnmSChLMCzKQ8fLqlSHJjtj8j2nqjYGkA6XzqhzfgMUO87TbNFMgqAO5ULa%2Fq2rz38gmUczVldoNWJuZmjeJr3RmvQ7I3afexgxui3aGXxQzdAtMngkZ8YEVh%2B5b43njjq5k5gZY4pvh7%2BYfaFSCqZ9o49EU87%2BzQ1baXD%2BWtxrtxwFB1UgkhxOa1%2BxZXoXiigAcxSu82%2Flo%2FWAS%2BOhUMv3AjXBDGFtSU5eDCKmcBQjrSIN%2FMy9WrLxoOHMDLdaWtw%2F2u77pW5DT42a5r%2BSHB0y5B0gl3Bm1oNOowzDePblw3yy8ZnWyPGHym6BCGsL%2FC3wpn624Z%2F2HDLq9iV9j6ETQroPAgERneCERDO69bPHvU93AUH18lNdrtHJS0ajJvc4C63lTfhItEX36hVMiVRmh7qBfb6lwcfHOS7FSbU0hVRhFibOjFFR2Ke9Ts2W7nt2TKPa6wYgKLap3RtRM9Vkljpt0rspOPZK6fxbz3QFy5GZb9GUW7TW7WMjGEgjQAjeAMUzZChnNJjh9wOth7JIx60PE7h3UNxjVgnsf9A80%2F6VOfG%2F1wU36RXREuh5%2BmWWODGxltu6flQ9C5ThHUhQegEvHtNj5l6wvNuV4Sgmpaelhv5PRZmOXgWacw6NeQvwY6pgGacmDGIh9oc6ZrzB%2BXjr48Pj6MLV2VEs5cgbnjhJMsZAwOvFbClDWUqnfupRSV7CGoNKbul%2ByFzIgRPO%2BSbnZN2cGaX%2FBbTvGtsgQjtWsMXw6w9hQ79z4xOcxemeDlV%2FyOYYfVQQeyEIO%2Fct9bl8Rjgp7FASv31w2HGd4AhBPjVWevtDAIyG1yv8eplJbxEoSuz5%2BGhxKlOxPbVYtCXcIucjFRHQlz&X-Amz-Signature=724f779157cf6cfec0ab870181df71b67379aaa9c040e7e2218436b10a30d426&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
