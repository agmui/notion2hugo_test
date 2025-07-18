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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAGPLAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCgf%2F%2BV%2FuHZ8gJPwn0gmp%2BkL0Cgq2D3is724WVsSxf3%2BAIhAPbU4h3lpffGlq1LDxG2FiqgiFaVFz%2Fy2B56p25KhCaKKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsxSrFrVAbBjXCsXIq3ANmiLSv83nCCVjOX9fZLOV1OVwESvnNpvFK7HWOeIz%2FEJvDB3pVOjX%2FWNE9QYDCxyPBUBhdy93drZjB8yjSrolvIqPps4t5bIvbACCD7aw2O%2BQ9PlCslGrsKfyFiBZiXcuYleKf71UZo6vWrIPn4%2BaaFjHW51sUm5i%2BYuFJIhocadeSAh8nYUvDL3OYSm1GCHpuvlgXgL6yUqzmQSGZmd2P80cfhtwFtiR3JfsfOBy0Sme76wrLiXnIC6w3KNvQ2Z5liLJO%2Fs7ghkA2WdWuIh3KyFzQ8msu1pC1wWWhAs6zfX3bhA5H8vlKv6zxBV6oSFYuzaPSlF9Op84%2FF1s9yOVDSg9OFHgYwXgWDGECiANcfAVYSsnXtQmaCZaL6I5L5PW9ETV67IgTg1ptsyUg5R%2FZzLmgyEmnAMmhOHCIShxpv%2B0lnGK%2FLl9OkvKSqcksgCXQc%2BkAxIKq9Jt7UJw7cVYtP8yz5uIUWqrLxw%2Bn%2BYr6QT5E7KYA%2FikXBR97YNohLsLbC8wqIgZ%2FFLjl%2BzYysKPL73TbzIOG%2BVYPKz8szA9PRvQimRNIvZoNCMy90Mh2Ocerl2UojkHBLKA%2Br%2Bxl61ch1%2BghBEQr5zwSzaqC5KqNdSRzlawh61GrMWWiwjDGiuvDBjqkAaf%2Bo0C34WmImAlRu1P9mhzWSfV9dDj2GdmDXLnGIR3%2B8sctd7bS%2FzJ42C966qYlR30uuSqCVZxOWNJmz8rzrmNrKb%2F8pwzyf6j6USE3Em9XztmWMnMS2JkTqUdC2%2F%2FJQK4nZ%2FFlGVI1CGskhTeqhpCZbeVV6rCtkkTEP6sYRalWo1yLODhgm9fcsQ%2Bd3r39UVEbgf65c3%2FSzPPOZbHMJnTRgwZB&X-Amz-Signature=ac7de00fb251ca7e15e71b7ebf696448ae5b38df450a4fced668f95c706afda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
