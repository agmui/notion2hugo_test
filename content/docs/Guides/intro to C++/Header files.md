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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXEZNO3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCVvIj97AKBwB9dmK7%2BFZnolQyCPhDvoNlgR72a6LXxDwIgS1x4mHmr9EUcPmi%2Fzupdlz7LuqzFgZHfzTCZqfEvBBQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCouRswQolzTPo3bAyrcA9%2Fj7BCDrB%2FZpuaPiS8%2FJAaoa9%2BguQ6m2XgG73pI%2BY2iPhBpx0kZdFO6484WBesU0BMedvveDfbOXFLB%2FwYICzWAO8RE48a%2BIjdNgtCmQ0I0cq0CMOX9ROyNRliGrnT4WzNv6m7E3ejeO2L2K8NWbyT5OVt11SCXe3g8nlSVZvP3zv0oeQy7LqfE4o0VJspcyrO07PE2wWv6PxQHjGTMdr8NwB0I33quYURFeiJabARYo4eLYdD5JTXYntizk2Gri6bqCfR8ri8DQ%2BszuslZFeFGtOkpOsUg%2FJFunNLKqJ%2FsU0Fnhl7rGbJ8esea8cl%2BfpmKCnNN8BV5GWl37SPxYKcnQfQvzg68odAx7W2YKKRt5NvZ9KHWOYNmEiXL69TBo05gFDaMuEzztXEQwAnldlE3wwDR%2FSR7XA7bSZPtBQ%2BMSrSUMyVUJyp9DxvFUI96LSAvUmPb0htx95yGXt3zKAR6sFdPqIkPDFDW98dMUzieJGBnLbMb1dE79oAhDn8ZliajL73JgSNWDVYPMWm8gY16KoH9qbWBwlUT6zcvIfpm2QklI8pw1kDg6oUHpes2wvHkbsZOSeg%2B9%2FoFVBJf62G4%2BAyrU2AGXVj1RYuUhoD3tvAp8CS0Z9HgMBB%2BMMaI08MGOqUBe7Im3BKGSNbrvBdBoB8CurnVXr26u0H2ETFDHWGkCD8QXb84IIGU0Cmx9ZwKUAplnUljdnVpdUwAN6LB5AfiNSNofSxAjigeJfwv%2FiPrkY0eMBs097kMNggRSp21intgim3oyzmN9gAgbGw2bP3tivDOxxqqDKPdbZ5H1mbPGCzciiNor5NrNyAp%2FNIhF6KyOF%2FTzAvfIj1y3WIXp%2B%2BbwtzyP8FX&X-Amz-Signature=102a6d3c90d9b14e386555fbc5260261d888e2cf9add5244ec00f97c392228bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
