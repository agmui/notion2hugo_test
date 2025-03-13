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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKJFRQS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBDmWMwHkLDepw30%2BU7NhhwK6XV%2FekZ84Kw620NfnDxAiEAheDGDsVGRsfmIOtA%2BFSNKBpj91ZpNg7ZGYgi4dMGr7EqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2EZCqsg%2BCYJxoi%2BCrcA6J%2FmIntoSrjPsxx2PXkF5Rsh%2FsH8uAs6K8YNjQuJKLSBQ6YrIduTMe%2BpCC4OJGIg2udLDpNzr%2FKel8J2BAXnEp896SQ%2B79MlkZsyCa3nQm5IiPS%2FGNWzEgM%2FeSofKQBjkkUQchgqU5TRsXxPWb1J5jJsNYHN73SBdAMgfZrr6TmcJW9pcTOTzY5VT9%2BkctMdVcB3%2BVIE%2FF23frJiJmwCcS62o8ltaJ1GEjHa3%2F%2Fa%2Bua2phVGitsdE1%2F1hyOC08qotDJflo9Xy4wNuqbR8AuPu3JfBzlMNdH590Map%2FaIxEJoP%2F6w3KpljWm1F%2BGjVw2P%2BE3%2B%2BJMY7rO2XGYkTpi8Y788XJfT%2BkTaCUInzc%2BrjVUwKp0UGChw2w%2BNVRUvJDxDE4zuZNmJOVAKpeQr4nbGsnpHpkQxlk%2FyahuzKlMcNb5arAkxEXzZUTroua4XAnE%2FkMC6aGiYUdB1LiCBCedVAlK84p3GvodfsTdQkzF6FtZu8Z3fDDqowUZGMlllJ8IevzzraixpekBVq%2B5vhzT4v5X7fCGkmW%2BJOWlSsYF%2B%2FFH%2Bjm9fSYdfN434s6ZDb7cdsVFniVh2Qjgyp5fbIXjDaxJN4MVBsi7HM3pIsteer0TRynSbaQr8YNlyHI5MMmvy74GOqUBfAH1D1%2BgIuo8BR8H5cgIKaMwFn7WbOkgQMPX%2BvVeQ4uQT5u39tULBxaD3mApMKA2tsGCYwdniEBBOVZ1dRDDryY8QzIZY6lwLzCffDFpuWNXz%2FhJ44i4rg%2FJdCfpnPpYz6UDcSm0H8PaAlRLESLfVi1hnkc2UTdc4ypmwhDY53caHTb3yE8XODUdMGsuSFjV6g%2BHkfbItwIGQjEq%2FbJZrGyvihop&X-Amz-Signature=43f0505eaeaf9e6ab676c05491b33da6b9e740d42caf45f3d4dbcfe0d5140e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
