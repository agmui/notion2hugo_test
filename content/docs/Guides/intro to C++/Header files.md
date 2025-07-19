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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VRHHTF5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLkySuVpvgnzrhHCFPR26%2F5xjUeuCkRgDzIRbG15MrgIgBBko6IYKtkCTFjpbW63skscIj2v2P%2FuJQmhB6FQY3UIqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1Xl1mDKY5EBCEdnSrcA9%2BKTRKwWpYqUpQfTQFn%2FKmAhOrriYHwJxbpWAbnBsxfXdW7oyyX9Cu%2BqkveQO4uSDzYti%2B9JeIjNvUW6Q89EUqxJ7iQRxNNP4aVDuSir90pZrwGL580qzQARx6WHT0in6VRLBzSrjDuk6p4MXBOJs9jW7AIU9U%2Fp5TLW8VweNSzKkkXNLAXlDZgly6UGhW7G4Jmr5emArlLwS14I%2FU4Zr4GbeZoAqKSQbvtFGZdJHA%2BXr13TzB9xOpPTo5C0Lg%2FpzBJzJursya%2BSIfOy3672lqMyHrVJyOMPY5yAOriQGUC9ZqrUd1y6QPePeJxvbQuJa88FA4JJY2DLMKXKOgh00cx8C7%2BFKUZQo7%2B6UZUYCQ%2B0EQ4OcXVe78ajksKUBXqG5ucrORKaZfKzCaOr1%2BZY3goM918ReHWYt6yw%2BWxS%2FFU1LaCO9hMeg4YO9vTGDjv3VCiMVuCfuNXpIIrrJYU%2BV%2B287FMa%2FgV0d%2BP9VQmfgWUgALAiQb3QSLpVLh1K8CvrgycljFvfNP9TEyAHZL8S1f6Y2LY%2F31tY9liX3bSa0sLc4RKVEt2GbvVdJ5AF1LyG%2BNiFc1j2vjP2FeTDN0oeRbhuD0a3SLQqzorpdelI54K4PLXOsMFVJ8katlTMO637sMGOqUBdL9OV2lJZwtU8TMaj2lFba0iKem8r%2FAwikgbu412LdZHOhljVR%2BhkVGExVO0fMSIInfufUq1n%2FaWR1UtjCbcwH2dVUD7HElB7Gu6%2F%2BMZ8tkunjR3z49AsOd2U8XJ0AmvAbZ1IPDQ7YcKiTFmSKv55b5JXmM%2FQLmMY2qlcVTGWYlIPM%2BoS4hJl3F54mBDJsQnPLj9WBj3PTJWoNrx4Un3ZeUY1Lp6&X-Amz-Signature=d05662ecf3828b37fa476376d4feaa75f5bf807e352732c5a581b089f96c5c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
