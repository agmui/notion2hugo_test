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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7KL63E%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCSd5NoHZF1osUP2ZCIzWbdCXvR%2BqaAkWyMqQn%2BXuASmAIgPxE2Y2HadZSi9UIHQ%2BKzdNMBtvRTqisk7nFdS6cwdBkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDoXF37bT3wF%2FhzCtyrcA71T%2F46exu8%2F6V8FnejR7p8XYebuqRXFVy6%2BZhvO44RFB7FRERkLU8vCzlydBOGDRf5hhDoDOVRf%2BVHqmfN%2FCSNtcT5JlTV0meVRP43Yaox9p5yiRI7sG3dnDJFi%2BTxv2ebDlbKSPjHLbnze%2BQDXsZAh%2F8AdPo9NmoEgZqa4XQY6JURlckrcM%2FqsVfAmx5Hz25b2FkG56U9Z12tx7F6baWg9JCQwDLXWAuXJJoOb1FTouVM72AVbjbb3BKXHm9lJ46OmXYcn3%2F8aJYOQfa3W3gY7R%2Fu8m4mc4lRjzRQKkSsAWNLgPILYZOkt6yYFALt5rbxh3wEnYKvBx3boZy%2BW%2B33r%2FHIJ9IUOhnNYyhJH3MAWay0RzRzFVpbdkghJbJzEQ%2Bdn723kjbwBZX7YqZnejR%2BRoi5RZc3Chr73Gx8zGCOPJxLv7WYAU7XcJZKkC6UdOFDiaHw11zZIiLoFpE4TQuEmFKcVuENi%2Beu0PRKdTnqgA0LoKgojer3lnoYJTsATz8LcirqFeGyvXQCTXzATVR2ghv1SWg6qcCmhSn4%2BmfvBTFOa1hkyszEDenwui0LYQWtpZa7coTst9BD%2BF9zsw%2Bsv2VAZEAber1uy7w0dYc4pj8861wdMTjWbOaroMLGpsMIGOqUBkIKRRhmfUamKSOu4%2Bmemq4cIubsomaqzLgiuyd4am7eDqtuYqnOF4oYS14wcr3ruRgd5JMeLtekCzxXVZXLehp4jWtOcQQmBLbMdM6qX9DlASWghTSmxVFU2yBMnSBZ6ayII18sLa6Muz0ymVUufiDv%2FQgJRvDrOxsd3QqMBlVhf%2FIzHbsxOvB6gIk8tH1xdVv96nAAb%2By8wt%2Fy3XLmmkZkPFMHU&X-Amz-Signature=dde4550d78302cb7a6b0551ba9254b65a0ea3e29fc81210fb8ef0c8796612525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
