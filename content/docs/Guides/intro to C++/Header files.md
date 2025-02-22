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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GY5VZ35%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArpyDRdjbRXg8QF8SBoCljTzRutvM6Ii8zlbOK486GRAiBUuPy290IvBbygCivPBdP%2FxsfP7zxWjEIEPYhNCvI1uyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8JgDjgLvdYC8D7iKtwDsrVul%2F7lg3a1QVziFk8xqe%2BECKAkyVUIDZi6dKUa8yrPcjTPTzN2XLJPZvZUlNqHvrdgRbvErw96xNm3zQEu2yn8ji1bS9T73l%2BWjjvwB%2BYEAos%2BkROAEtQlNAkTOcQSKF7gnLIg09LAK1OyBZJL1cJqUlvAp2QhGrbE6BHcwrtCkcoWpbAHTtyDjmN1FSTbnuRm6MFH7oNbsK%2F%2Bdiv9F5VlqmEnpDtuGa4OZEiCvwtNEq402OjaAlLjcZevXVuaXWpiQQ4C%2Ft7nTerRNg0s4sBelLAA%2FauLwV0eiECE%2FdtyX11efUQ3Zn9FUIoavxRZXhCa1X545W%2BdXn0t7EdzKTeguqlEKD6HLQj9dFno2w0M%2F6qUINmxDBVg3eHMlSuGuKGlHd5Yr89DUOTi2YHC27YIf5k3wmu1ryQ8kQHx2AMGemA2a9rb34hCbSq5g70PmN%2FhM9oqqs%2FjGA4sqbCQDVDQ5%2B7t%2FUh2ZjjTO%2BGKdC7AYHt72PmG609nqC%2B8ucGo5vnlzGl1v0WzMk%2FhlntKLxeKguhV7YyLA6USxSqiAsZQx7%2F68pqJ6ZIJ%2BUWdqTWMeHKduQIQu%2BgSa2RU9Ohy%2BOKL91Zob2FZzrZPHuj0aj%2FcKqtD997%2BPe40zVswlo%2FovQY6pgEfmCpc1cezNPli4Ervo8iOyUfbUVxn05hegSds53lz6zXxAiWwtrMA6x5MZrzgffEqMXDidzrMSM7HTCraxkzUPLx2sQ499DJGPXUiBnxeb6XxwEG%2BYOYHkp1QMf3iwp4sqlf84NxGM9DsG2YAn40l%2BwzpvUEN724bFDBRkqqyNIXqOIeqOzvFEBK3qQSiviOvGCO10MW47lOyy967qpu6qV9FfXph&X-Amz-Signature=5b5cf7d7bac1c8012e0a53522f94f22e89bcacc702adff393b39109f711c8133&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
