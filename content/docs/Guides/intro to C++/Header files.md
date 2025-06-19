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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQCLBEV6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMz2mE2JZRFnAESQWlAHNDnx5MukbtMhb%2BhYohAFpH6AiAe2pDPIAPxH45kXWpKj7QxeHBs1RdCt77Rs%2FM5kjCC0yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjjw7Nn4VvcfLld40KtwD%2BzPNNF0BMpL0sgpOM1d%2BjEuQFexWgO73ywN02TMJCfeioPajYxWSFecc6o2AxPFrZJH9Q6Ar4jIehX1kmiscF4uwGKbN%2Fjkd1XaE49qYryOxrWIJFZdgjgf7o5Bxm32yjD8NUY4kcr%2FKInLEzjH9QAupvaKYTKSm9SELEHmWNESwsTaCSPN7xBnul11ju9fxXFSCjiYfVol2hCjC6ZFO0dOI7cwv5c3j9onr2sYQwZPuYTlahHF3m7lxSW%2FeGwL5W8lwj1%2Bd0QyVAf0ZuTu0ZuPwohYCE7SWFdr5m2oqrRqAhLngAMXjSFMBWL01YbWYoQAXBjjjLDnwdE2t9T4hOik%2FtsVCYa2pU2KYUlBZFsxIYr%2BgoMnpyABsw967%2F4%2B7A77NqHtSm7Hz7kC28fZAMFY4tx8jFyU5rvxmFAIcTDqIf9byZ4owC9K0g5%2BRqaJx4m6aAV0XBf95vjdsSOC8BVBe2CgBggY4s7JBal2C5NpkbIdJjJeZxN2CO6WynvI%2B0H2fNfPggWlWIM3LaRYaXJplIJV4POsE1WeOeNwgRhI3rieg%2FpfG%2F2swd04i%2BnM%2FJfPWOAuGlzAIbJ0NZ0N6C4x3%2BkHZyo%2B0lk5b5YBTE28PQs3rk1lPwLpJQ6Mw57POwgY6pgF%2Br2gcoo8jGM8PNM6%2BnYVqVLrHN2mFaahQbT41cRGZxd1HPehmcwFkd%2FjL3GsqdHurH4kfbkmTr4VmyxgUAc%2ByUSr6AQKZ4x%2BKMiE7un3VzsNFkz%2B4dn%2FoUtRlTdyU4fZQ1LDfeal2Q7PUQunwSgHIW9i7JUqLBGnUbiK%2BKF7AEMXKmT8cfr9rCh9mAvYNxpJCKnNl5Q3kgdFkxJyq4cV2vRYYr87q&X-Amz-Signature=e962c78511d39c6180c4d0a4ea252dcf4d6a2f1eb1552c61e6578d180827fbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
