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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMUENWK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsK24uW90KEk3dIFK%2FpMTQiPR0gskoB65NVGdoNqhpUAiAbp3%2FIwCQQXZBZS8rFk8xEuhPiT0YfLz2uXX%2F%2Bof9jvSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BbsUbvATeiy2NdAAKtwDdPUv6p77vM9grQnqIOUX4nq4Bg5GKTCrRf8nWEyBnVXJsMBLxSCQHXIZDbfeIctOx0DSde4A6mlJJhMwb%2F7zhQfsnWLrqmUw%2Bej64DsW7XDbxEvvGkOOXTFudYgQlB%2FyB1J1NWsn2KZQc9RIJwtUw2tkin5y%2FKhamh6X0Ehe6MImHqJ6YGMXrP7anOorarqEJESUpcmnsdHzMHnsisFRfE2ZawK2beDCaxhtwLGJlWLGlyL4oKdfL%2Bq1G%2Fz52F6a%2BhdgFODWQMQLKnEE9vhYAUEd2H3OoFga7ZA8ZD0whQ2%2BXVeF6FFDXsokZO%2Fm1wxV8jHKm4cwrMKqHzBsl0xz4iPoeYkQKE40FjVYPRywJ45s5Av5ENFqUmc%2FOC7ABNSWa4T%2FlKW72RSnHPKYhE2SDA7DeMHWKgEN2tMKKKprfKGl6Cp%2FSBAAOX5cAS1ngn7LsB4Ji8H6syZmHNl73rU%2FH7Xe5r9ck3K06SoztSEarrjvqbYVIcE58hteycFZ8SWik0s7vBZiHeaPMjCT8j7zAK9SCw68SPrMnCHU1OGkTfdaGqJq%2F9o3iEpilwvgmLtRsRTlyrspgsOymX25wB2HpsjDqjIDtnfFSsWt3XvoKTO%2FZbc%2FcbH0NznhbDswtbKWwgY6pgE7I%2B2JA17vOFE5SZuVSN1NZduqfTF%2F8TeIYVVg7cH0ebVFjkbzm5xT%2BA921gEP%2BiI7pta0xytBQBeZnj5NjwWtZbetoqnJ4hg0QeW1S7NLaSex2psNJCpk8qllGEr3Np7VMVWeAokItlBSBGtSi1gLCykOkD%2BQOHdMWGjXhpAGodVJLfZlCfg6NwVbI5QxRnhIUTKB6b1cxAYey4XQ9IKwn%2FEn9a6M&X-Amz-Signature=01fb428e92c444dd144e2bd8a0bcf6ee243ba64f3109527ef514d2fba43f13de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
