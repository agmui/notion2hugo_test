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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIPUWAF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCHwcwlhiXpvVdly855ftIk5xfCHqHTa7gJGGVN0HEbugIgG6rkFYWvqnMyOnx42v5SFJiAbCFZBuPzYm31mVe2J%2Bwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEIPAOmabQUFa4MZEircA57UfLihJxoRrk%2BDFc2Qixd%2BLq53Hj5HGusnG5Zysd22QHDu54Lw7L%2FE%2FByC8Lqz3FA5me%2FVOA2ZEbi7ottyxY85ZlBX4DBk39aXoAyNHxT%2FtYzSkJOzLgNVyrurKUURsnhAjo5n2r4mW55sqejgSe2ln5EA63HVFP5S0wxk6xEtX9r%2B4N5hcbq9ey3Vxu5xpof14XwxdiP9Gn%2BMskrV2G0U15LvikoIoHk7qvqgNddNZftv8Mk5TT%2BU2g7OGB%2BdvcnfTSxUjvnDtCEhDN41tniSqcVn9iKQt6vZDydFlJtAPDaLxS3snS%2Ft4zuIJz0NABjpohAd5F9DbXzSFFRHFqzAS2fPjCSAgQUQArqMSba3EkV%2FwpAAvwnpxP117i7aPiJezUj0biZQeK8G67DqlKBkH3qLbrpstyiE%2BY3IvcYJiHCkBLTjZSuph%2BKigsYaBzQNXfUQbBDgnZKz4cAkN%2F8O7oj1H4Wq%2FH3Pbd3yy8Qd9mJ%2FpqfwRTztygF8hIWT4OMe1Zn9Ce9IzEUjYjJzUp2ii8bm6OijtlL1lsedK0KBBEQh5XH65PRVYDw6UsM6xKclcTZc99sKFS8bCTwBWlIsq6q1BjuZ%2BGT8lMzCx7jS5bjJrYPMuCJWJXqlMMD3i8QGOqUB6EIuZjviEKCmUdLj09JsW1IFFYs30%2BlE7nkaiHXiK76GZOnwP%2BjmjI1Ot1kuUsaRHFqaEv1mjmaUvrRCaoUs%2BgXQz%2BPhCxZWJUZxCAl82jVbXdAg4rwummR2CiedTF3DJz1c5Ag%2BPNjRZeyzya5BN8sScr5WIpPFtxLgXS9yO6LR9W4o00flW7iyUlE68oTEf%2FIARUGb3%2B8vf7lyDEH7vC%2BcLHKX&X-Amz-Signature=126ead937030a27d41b1f496531078494073165fe891c688efa9e65f07679247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
