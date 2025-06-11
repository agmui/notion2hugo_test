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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHN3G6L%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9JkCqcPSMS2lpkPDFoFYuEzLjXDghIW%2FtwtXbqnKZwIhAOd56bimy0BjZAGbsxF1ra9t1Cg1YOmjQ8qO3GPD%2BtcYKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLy70rfS0wkTFJ3KUq3ANWZ62aruoipTY3p%2FttCPpIcdRMX4Zj8R9VruR587oMwH4%2B8nSa33Mz9RyPxs0FQjbkTb81IytQhCGoQPZzKSTnomhI%2B5lX7n1gkbDGWtbKOU%2BmrrPlSm4h4i2VSX8lFx5WVl0oE7%2F2Q1qNF7FKFLiUMCmkYXMB44LCYPIvC5O2NPhvmNQwKaq22d1wcAUCPYwGnwkdcnie3z93wy7aIW9ZahMa1lIZcumxXB5mVLwpgU0QN6baDiIS%2BfhRNlHs%2BIMjal50TC4DepOhblVYvcnxg7juqBf77n9%2BmX70GbBl3U86sJ3NiPhuleDkt86wwSade8kNxkr0vte8ZzX5ctXQyo4SU1Yh62JXKGTEak2KFM6hHvgk48vKquybuK0lBqJessVdLX2rbxrt8pn4%2FZFHTK7X5vzKNOPi4FVeuVJGtZerfTxBws4YfZ0pA9COx1ZQ2RghtR%2B%2FIe3rKBaV1Mct1mVCSn%2BeXEhHeakpdpb1NZGqTwFzIa8lt4IKzrCbJtMJ390t33Ic%2FPPudSlBBmbabHePmJ4TQdFIqPI0YG8XESXRrDlH8JOHJSo%2BxwrHgfcNFJ8Q4Fzf07knbHPjKpYZaddLwTO8JmzCFEnolhB47FKMXNiNISdPMfD5gTDFuqbCBjqkAd6aW0v62q1VPOrlD%2F9nu7ThAS%2F61OeuXpck0tukKw4Tp4bYH53elqzT0YnnkhYjockNigZaI7L%2BJBScfHfb3Ko1Gm1EI8H98JrBAbesxEpakos4tEs0ZeI0U%2FDa%2B1Y1m%2BdEXCEAI1NONhPf5QueFTOQF0QxQEf0BLHJzGix2IcfGf9LARaBRBVe0rbizNXDfNP6vAJXNasOqdrq2cTn08qjH%2Fnx&X-Amz-Signature=24f38e0adc2074dd31ae2df66f80d109e72ae0c385d527a42296aa303780a7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
