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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXAASPCQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5ZKHqfrHneBW%2Fh2gHfuwO6zbYzT2sI0kBFTXW00c1SAiEA7kFGZU0sSlrUxT5GsuEVFkxgsjDaC4VaOv6%2BFq8fGVoq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOeVV3N5rNXOqxX1bircA9JLjXqChj%2B2n2%2F5oVZBVDsJHUAlpb4sgVlC%2Bv4lnNCJDehzu5qmNIeWvPBhzlvehECtqStmeP%2Bk3O%2BGfWad%2FVa5MKHODkOgPa1HfWZbylL%2B%2B%2BnNNRopkNQPo60vRZjyZJTQLtvbp66OjiJhmZGoONgOJBSXNk0IbecgDP6FP4GtafjuuNXu1ftCEPMyl0vbSBBG%2F34ckGlyZhYFbvE3xPyzPAatgMC8ZFPkKip7s1mrC4vcJKNmqnurk9cx58%2Fh7SsMtqxUHJU0zKKdLQCkPBgDIBFKj4NE9gjtguRxZJYVwoFtfYSqGAP2JRE26BAGny42iNckCxWXj%2Bf8qaoNE%2FEtBZ8RmTud%2BMbZr7SgIjvwvRIpXn2c7B0fFWKL4LGfz3YH0l8TAf%2FhidjbAldLpodNIbClu8KrF7Wy0rPzjrgmTSwclbOTEEeiVfqJ7GWwv45aWoAITqJVfXMPism82EXEBiLO3HsbsDCCBWdwKe4fSsPa060aVpoj%2BgFoeonxgkwAFNCPvZPAomWKItccIRT8TqSXI63lrsK6kQ1LpCaTzmWx2PgIk3Gmw68iExW7jR0trHjtFnhiOdbPcdVaeH125bojd7i%2F9ptcoWBSds5zPTWWGtTeL78v%2Bsx7MJ%2Bc78AGOqUBjZ0kXDefSoAibjciwpZH8qXFOPn%2FeKFRth3F9zhIe0MkkBGjv6a4HCRsxvXiV13jnDIALGI1uT4LbInkaeSQa%2FvRCQwTqYry12UKZO5MgxeXEwZbkG1l3bTY%2FkvSzTCAR0NJ4f1FM0zdVc2s5C5Fb7TcJWB6nYO5skmhbP%2BwwpbmtBU53A7SqlbJcp1Y9H%2FoSDbCyqpHFIlxGXz6Lw5hxj0eaM9%2F&X-Amz-Signature=3b4248590d182eabc3216b7ca6befd875a1b542f33309f1193460460df37fe74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
