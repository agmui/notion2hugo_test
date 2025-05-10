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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQAHZS5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbpCsPVhIeCDZjCbs3hyZc4c%2B4TJxBjXOXAeLo2tGMiAiEAyJQ9Q7ML9IWGuDNIZRUjDuQFRTTWEbpD1GUU1NeFiyYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FXzYu%2Fyqnk2el9uircA5GG6HfhDOediqGuwiFXeB7lrYImmj9Zz%2FuLBcS1R6CtAcJBXmgZJqKG3A9oh56WaeI%2FEjJMKt67Y8Q6pi9sZe6F3dcrWgcykWflTTwS4II9VUMz6XOU4x7VhC%2B4V19sVqlSbL8%2BekdlcEx0ImXvBTpsLmZPyjLfnv2tu0lPVlgRtHD1yCtz%2B4jiQZEPDdqaAw5V8%2Bz6HJFIb50Y9qgqHgryNXLEu1xLX9DHnHoQ3aLTuc4UCyJLXPkLFdV8ou1KmyB8X24IDbT9Jur%2Bgj4vMSPINB3Eoeg2kC3rEjKDAHtm2GDeOs5SCu5CYjzBkKR6xXl4FynklGAYuD9okbXHPUa7oSJa1uE%2BSKMWswwuIoggB74gvcNriSHnfhcuMtaASeWLBhugGEoGqARVCTBUN0bLbW37dGzsE678PA4i%2Bxc%2BM%2B2wGWyV3tpEJmbHq0KJxPrUB2Kc6XZJlXpCN%2B2svWgfcFq7MoC68ftAi3ttieLGPKGhElwrhLY%2BYM2mybywHbJ%2B05qmHaQnPEsw%2Bwc8ulUrvpwjvSzHv3jzwHfXbCmhzckob%2BfbUUStro31La3cXtqJ6gvl%2B6CHOSfUvghsEH5ET7y4BxBB5%2FSeoUVg%2FxEFaiJaXB912kB1iloOMJO2%2BsAGOqUBPCdwY7DwKOqt%2BAgTMWYKYvE7s7cggRzWwhFnIhUHQXxA16FTuyVQ0woYanlAQ5xIaFGneGfdkXeMInwMyQ59yoBhGDKFoJX592Uh0A1%2BR2uKaXv3qTSBE8VcsxZop1fCt%2B2VV9C6QLdpPazeoBOmzep3GVioccN9L8OPY0QBItbjV5c7gNid5XAH07g9syeoE7Mmjmfd7%2FoXyG0IfIuEnIsf1YFb&X-Amz-Signature=8876dcbcb58d6ae3d2f9c31441f53c5a1f76b4331172d8ecb3578c39df629d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
