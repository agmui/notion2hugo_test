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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY4OSRS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC1cR9FBWZ5zP65nC9uQqGhWvhvN0y9162%2F9VkRMG9zngIgAVKoTvseG1T1kU%2FlgByAcYbAoxY%2FnpjJASXmBwAoouMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCRmxzfbH%2F7F5xLn%2FircA%2Br3qOmXBFSlI%2BK7f8H7XZSUtdtGauHj52uEzdCBPJntayOsN1XaOnAi0L3v2KUmddeU18Hna23w6m4F7d4nLdjWFUH075XK1t0h%2FBt5xEwpZOcMwaAbMfsUkUZkvV2YzBYKtaA7m%2B%2BNM0b0YnYqMt7rjDDUyR2xdJTufnTQ3SiOPZfk7hVgr0C%2BMBB%2BlPdpZxe7SY%2FdobH2q6HIvaKAOlhwKGmqS00iISDsAomM%2F%2F6N0q2zTE8FP2sFMV%2B%2Fl%2FV5rHk4O4F3A%2B8rQ6E%2FEQYKgV5iu7p717oHmR20%2Fw0lAH%2B6JQL42ADutHhotxs5UgtWjdZh%2BSiQC3EQQMHvB7uD2s0kmXGN9zcLdWijn207u0ImLZm9fKvHsMNP5UvDsio7SEpBtgI7QOk0P2Tnohv7m3oZPm2MWvrjWTWz0x7KrjCfZVeBV7Xig%2B%2FHRwyXBmY5He2fGhGIIKgtgg6efETp%2Fj4FkxOGwwH%2BGGGyJ6qic8prMUM%2FJl1uOcpmkvlXcy4nh1kCerYrcpfsQPoZLPKjfLpOde2r04SxWn8zOHpg9zabKQtDM0EDpL14FGmtmx2VqsrmHynuZhJ6Q37vLwdptPWD9I3d1%2BQFHyL%2BDMvs8eqzyKTZqFHpkW5Gfz6vMOzmz8MGOqUB1ExmheWBEH2txB9uAps45XPUZYQj0ReYhwW9vbpWs3m9duH9FFyjQbytoNowNhWkrWhzq9tQYaBiRzrYzzuPRdG5jlK%2BmUkw1hHxejYeTNsyUzJ58Xifa7OuEA6CP8lDGq8d1t6JjyjtMaUsB8Q7ZKfq0i0tDTtrQO6weCiT8ikwQi9iKDrnHaOUz3TCqAk7Q7amv4xKkTh5FH%2BJ07IRDM0nJSkS&X-Amz-Signature=fb147305b150fbd9a07978afee01c488ca519336d5b5936b39a3f3ab037f7f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
