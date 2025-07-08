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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADZ5U3H%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIADjzoNoCVsA2OGRRgQCyLVrtTEa%2BqAZW5riJSD3uLjBAiEA4zae0XTxEi7uHsXcUYoPjtXZUd%2F%2B7%2FmXl3gAsxN4e%2F8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvrHY68dE8DF3r45yrcA%2BdlNVZcdyzZF30KO%2F0Oxyv2Rgj%2BNWQtVW%2FN32RAzjfAih38sZTzO4GgpMmXB1NnLqI3BwOx2oFXELat7W%2FmZ0rq7E1x5Lr8FrKPpe%2FxIXRVirhair4fIBLS4BOsDFhj4ta3YnVDX3qX4zeMYkGwwB8gnTSUI87FWMl5ZxnhmFDl2YcNvTJEuTVCXI2WdFD%2Fu8coR%2F7gvStkvuJDBBHruaKUlj8vLycZhg0usLLFrAX5EuuykUvATHPItoihSqk2ns%2BMLPCflV4TneDHijn3bE5C%2FzYrvJyiadC09Nl8ji5pVvRj4uYB%2Bkb7ut1sRxBFBszRo%2BJSw5RUdRuTtZUJRVZ12iK9cyxgVZq%2Bpzf7Cm9QGdLISM4zqlKxm2hYhVOY7HUXet4Z7wFJAkf0tWtsaark7zgE7QqjzqX99bsD8DdarbhJvk11%2FM5o72whmTSWJIzTXHeQ02PqZ9evw3gc5cDqA4NoQlf6XGRd3CY0H5NUX45X5R88xv7bKceZr%2FToJXD45E1uXDHEXQ0Zo8Y%2BZmFKgXgPDj54VUrMI2N%2FmAE6XnkUTJw%2FNVJzPwHdb%2FJaILA%2FhvbP8L47AZMFa1m%2FE3dAIsdNPhlOc%2BLad4KTdnNdpp1lbOym7LQ8RSDNMOzKscMGOqUBaaAujn3IvzjuzuFDzUJ%2FycAQuHoxuv4Z%2FSRl2kwuAJTIcS5M9G7HODhliEuEY6JtDrwV5KkeDeTWRL9OlpIA22L2mreZQJIlsJ5jKeJLSVJ4U9GqqBP2om645zY2aUXjNfFcZ6JlPZScAVA9SYrHIWiZxfp5A%2BEK2lG2ODWanhLZZjgKKrC1Bj5k%2BIofJeD%2BqWqbInRtxtSzlSLC%2FVU4heRlDCxu&X-Amz-Signature=0793c924dc362d4968e98d8c816af88d7ccea3a49b016cbdaf501d7726b996e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
