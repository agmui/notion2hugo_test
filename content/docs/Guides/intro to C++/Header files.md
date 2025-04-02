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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMOZZG6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCecjDJdUBqy%2BHhZSi%2FcYYlzdRhdm9%2FT4W7qSnc8SLgKgIgDVOEx7Gv0UhQN%2F4SGdEWIc%2BHn2xeZP6e3uvd9i2cAHkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQg2LCXkXbyHA8mICrcA%2B1niEQTHtsTFZ1hgrPM2PyJAljlkxM3Y8Rw5DJLL%2BAWK3lyt5su0BotYDnClVkwG%2F0RYZNrEEWZgtTpR0k3w4%2BBPc%2BS2GSRfgTcQ3am4bAs7LpCkjl7jCH89bLl8zrehESj6YYjXypdgWEDSbrLQJhA4WzC%2FvljeDDQq%2F2P7BbuBImkHwlFNc%2Fhqje%2BmuOMNfWrBynfPgh8D12VGKqVuKGgdsgouxrkjK%2FIYx9XwuHPgzttbaNgx6bK0PkTmsWo7yEPdDzuZXIFLh1Vl%2BcNHFDXqgjAaA5D5g07up9KlDPaNV%2BTSCNHI%2BLekN0utv%2FzSacykc1h3ss26%2BwcjBBs1awa3DVbUXpvvzD95DBOTSv5qBxWl3DNSN6d3ZaYQhBcExv9wrGXJwzulDvhJ3I4V%2BVru5vZ%2B60k03FHD%2FfCC75Des64DqwsyefzFMXMXGMaE6HAb0o4MwjPyak89uwnIkRvYQvl%2FGp2OzPGw7KkHOJV6HI6ovJd3uMaP4L%2B0l0fynXofsS5eFmPPXal%2FmkM4BTtIKlj9b3%2BQst95lb3HtvMuoeL3Vdm3oSqwPzeUQN%2BlRmnceTOubyT67TM1xAJ01K4A8WN5mKcr65FN96%2BS6AROluJ%2F%2BcFVgR3%2Fto3MM7ns78GOqUBaJeonp72IWV3UmGY%2FGj2UbV%2BCGxCuWS%2FW5D9tLBgTEdv%2Bj%2Bb3FtxwnHN8naPNwpYoYvswOFp0mJH0D4ejWKzeS7c8yr6ykCTkmXDmFrq8281MKpqWo9PFMN2rRgQc97w7ed4DZOPSEcWQGzuQF5qZ6FAYEm%2FBRYqGfA6nHFwjBLOJhBWN9bZi2sQqZWk2oyt%2F%2FVZnb7LaE5UpFAYa%2B0OLt4WQ58E&X-Amz-Signature=2a351629228b945bad67637739aae9d6257aa4cde443fe9317f7f49e0d1d3273&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
