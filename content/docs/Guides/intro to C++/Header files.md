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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEPWCKJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYqKirQQVP%2BZ%2Fbpjm%2FIBXG%2Bfui1TWIDY9zViNkphDSgIgAkhNVo9jXAwSM6DOnEzrdqCB23dyGPeYaAGgh8JnpWIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDBsJRDqeWd0j%2FZq86ircA5a0UbLkXSkfvffK88FjAbL7JH%2BGpzijPSIqR1ipGPDGTawRrEO2kLYtiLccL7zs%2F%2FsvmtwgL1IjKG4ejrVaCGOsPoEiQE%2FsoL9om3h7RBNyXGUC1C1up%2FxG6a31WcCEUA%2FpKirH0Uadnu4CjPShNPG%2BGWoopsPrKthI2uVzsNzn6mfXqwEC9J3XZO2W08eS0fVkSJOfhkWvY6Hlhg9ysQD1ejAduK%2Bx4WWSv6y7O%2B%2BM75ufiQ9aRvMH8jl%2BZar%2BO9HUlXDR4Ff%2B%2FuNOPvEJOA38gvQRFF8zXzYyl9jX06KHH5hBnGgJBQWupCIPgx6W2ja%2Bh6hUk5xsHkb0qipurUd0bc6JCOL3AYbLgqZ3t0z63%2FfXY9eHZVwHLwo0TTwHV5MqgqFElHIgCS7Caqd%2B0WPlKV903UD3X9uXH8gWZCjmoAkXlbhLIGq7t2ZV2pc2pElud29w08A4bBi2kwCz2JlOycKy8O%2Bjg84r3hkde2KIjvez5t6V5nXMFH0lY6kNPrzGKKoN614tL3rfHT18SuY8zTA6g19kt1q8WHO8zys3B2dRraxy45Bza0sP%2BjlcHbLutbxFLg%2BkJ5Hc8tavGLGfY1zMXikVJa0x59h1gC2%2BF3XfCkOrYB0k9%2BowMMzBt70GOqUBBbTQn6xkWbGZ%2BdZr074X0eNPBYA8E86tjh9Hrhinp9YbE5ufwWKTutmMyxCBaAyiRtGd7Y%2BohKZExCxwnNREuUSsKzzEdHuapmnu5%2Blgfius67yDVxXBRBqq5ViGkSovoCeVTS5Z7qZk%2FnW8ZoXeMxYQmpVIR3IBinGdLw14S5rBYfZq%2FQT1%2BIM%2BZHP%2BUe4%2FRmZg7BDVfu0xjAGtWlP8Ikh72HJ9&X-Amz-Signature=06c662721a5e355b8765f6a03a172835872bc78298a8b288a1adb54211915c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
