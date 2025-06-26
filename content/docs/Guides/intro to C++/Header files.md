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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3GKIPG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDxN1qb6qA3z0RgalRUr%2Fc6wsEWQWRhGEmwjIztYcOtLgIgZeLgqU84%2FV3ZNMG8x%2Bu8y6hGIeQq%2Bop9cShGgSOFPXwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FnaAZqLyZonPEZyrcAwsDBoELxB2%2FhWr1OEigMcRZlSRHWknFocoh1Ik%2FNYnKoxka4fG1my%2Ba%2FPeLFN12JhNg0t02tiLZ6KwYdRqTyRm5Ty%2B2MwqNPzzP28y6sc2OgIWfK2qJloFbnaQ%2F%2F5iM5YshxG%2Fj5A7nx3n74tYQ81fg7WBo69uGtrtw2ctFbILodBhKQrVPKk%2Bx%2FbNBUB%2F6vd8m2SZqPI56B4e94talNw5Kf5RpozVUUs71pF3eJ6BJK%2BfJCO7%2Fllcf9knWA8kUy6rjKSWM8U1rY3GrLIRPbx0xU0aXTfzyOwt50WC9PhKPflAmBvkO021erlV8DPfbJs1nS%2FTiHEQK5sq1hMlSGXVQmO92TlZXj7wW9lhye5pYFPha5gokpoRvkkqLXDyAQk8NlNF7Jw3TpG%2BFGG6zxB1BdEZ4nP2JmGrcp5lLy7yUqbIYkvOix1ey9%2BjrP%2FG6hEbJalT02CWXskosFon47I6JEXjXNoFISP4FAbHaPQrNiL%2FdX5zUHPTF5Ayy8IPWI9l7veCZyZdF6snu%2FV1wzpCDQuRqJAGBUDQTGXXaQEoFIcZfPICYQsVYRy6FUYmHPxotv%2FBQxPgYgJS6122ZpQ0I3QRG8PTD6giQIGUSRLogWhEIklHjbIXDBLhhMMP19sIGOqUB0%2FxxkvDZtqtxBZcdUz67iMYPcdargA73KXyHC0vDl1xChdUYj3cVGCfnB5Ed9q2Z4HeVHQ%2BQp1DRPoT%2Fy7gmiX3Y4U0nrb9lTO3nS6pqp5ak%2F9HbOyVyOmglB3kfgVlvIJwoRrcRPxUO%2BsJozcUu%2F3QoRdqvYDJpCfyrf0XA8IGbSg%2BEul%2Bx4d4UWJO%2BaC4QAOTetFg7VIxs%2BdNNTqKk30BhIMZ5&X-Amz-Signature=1546b4aeb5b921cabe19dec2bcec3ebcfa6e377498e604215d0b20e96653ea64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
