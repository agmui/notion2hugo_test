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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSCBNTT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4PZgP1CeUQpRakkne3aYs2eCPTpcoLN%2B5%2BQ0cWkQTTAiAqgKOq28Q6OJ%2FXLcL8gAcZRllQ0czI%2Bq0DC9KkNqw6DyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSM%2FBAsp1wwrt42HiKtwDNRnLXlBU7IJ5b7ufUeC%2FCUR4GCz7CHKNfO1BiWiY1FlyNSyNH9xeTOQgUhFT8tLVm6SPiQ64bpWAHHo%2BEJk3DwUcUYXJ%2BbbFznvDP1P799cmwu7YHloy4W%2Bwgf9r0PTkhqWPba61ZEmDxWBoqfQCiryhqMcal3XTLhnz6FzXye03xMkS6GoF3a7OAEz2HyPV%2B5dgmr3L6trcadEMC9Z%2FF3d27fkH4zDMWu8x9%2FVyEzlQHjFnk%2BoZaiqXRXjC%2FNyAxbGevHqA236OkCAc%2FKioAQfuZNjgMd8u17tLMZKuZDHNMmNw0bOK5HNIv%2FmYDZAtL%2B2PJCgaIiLF%2Bau4FQ5ubX%2Bc21KeuB7y%2FB39A%2F56p7win3lM39LlWQ4TahIdY2FvsSQr%2FaBqTrZ6nxsmOICltCsObc2IBffBJAVCGRsPgUXVpZd1OwSXOOljkIImUPa5JfjhMKXRbhcBM%2BkjvajtBrvrp6f3WedmAAQcXJlWtP1Az7jBJtgHs1ToH%2F%2FNs30xwxKBvSC7BBrFOrgaRF2%2F3wYgVeiTqSvfjFBwEEyT3noZmuyJayyG7YPR8erbLkXBOALbhEpjnSTwOrKksRRh9uINYmPQ7IN%2BzjlHmFIQWBc3%2FWP2HAp2fdklVlEwksflvQY6pgEtVxjQTpuLlpxOqqu760bi8K3gQZ%2B%2FbUJaCS7m1WLfFKV9fRxZx7tadKOAXXt2nLJ4DKEa36pnkuSjhDfOhWMCxD6rwPMBQjUe0IdYM0uK2Ucy8og29SsOgm4YdFkIMqyRGtP4i%2BjXSAhg68DqeOVJRSDzAYDjjl%2F32l0AUxveM7I%2F5SKQonyNT9hHBGitYD1UOjJxpNnMkAC%2B3kV8rhTWuZOup7AF&X-Amz-Signature=4e11ad4c2a067388a47797b6d2f805ac5b8e13a9cee8ff20f1f77ada77a7558d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
