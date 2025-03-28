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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCCWL2F%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmNUmFvBhJLQoyfBbh%2FbDhQ67EihdFnzOfumYrzyFtWgIgIwtpL84%2BY9cRRsuf5bksm5N6dZrHWcX4RDLOvDPdxgAq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDPf1rb7wbHMgJfg9PCrcAwplexFAzRBCPrmItfiU8I52%2FFBqaGbDOoJM84MO69Sf%2FwcRHBQ2nSn%2Fqq7Xakyn8VYI58PZ4BdxufSuSTlIG2hYZp8mtX5LOPXOa3QUGVnLxRTkDI6oB6jx0pkV%2FHJn0%2FG10fp9YWK98B9VvUGFwnf7ILtGxEAQCay4GrGYBylQQUBycvbZpGuz71ioPD92odiRNocrgNenlWo675%2BDgX7D9Jx%2BjVSes3yE0JiOUExfdQlvc%2BOgyW7FngXluSNn%2BsX9qeXp9XLc6hb5m9L4%2FVZjmiyznPt1MDnFqfW8AJHVDwaUWYDTeMgIkta9Dth%2BhoslCJqVkKP6CGIYJf5Mtn2QXRlChHiVKOR3BtcuL0%2Bq4l%2F3yaWx8UVRR2uDV%2FL08gCElqO9LzWEL%2BJX0c9JozMfqcBSSuVKDeAX89qzt0MwT8FevKfbytvW2r5rtjz8YoqJhaF%2FCj39AabT1VTZ18H3vIeftIEF26c4RUTn9%2FjlZa%2BymiOyRrqcpj%2FUMnZVIEov2WQ7uu8wXPDRcM8PkBsWS%2BcUilw%2Bgj0Rr6tOmW6ZKPecG5R%2FOSQ4jL8bI5Lb70IE2u4LHaWW0Srf7lQm1JxikcnTqvFrhOmihvNFm5d7F0gwKA9fChfJfwhJMLjZm78GOqUBn3U55TjvWito06nTuvRxDBjPC7%2BR7K1QZ%2FiPxryf49xPZu0VWUpatFEwwreGR3LExXOAg3FLFFphdG726yig%2Bgw5Lze0T3N4GREze0AatEQ0g5RJG06gjHvtF%2B5TMGCWeoSso0nrf%2FSZZkJeS5HIAyRnLdTa5SvBQKZsvhHxP%2BvKfv27OXXS3KeYiHoprAv3z4Glxt66wtC0wLjOtzUvAVeVqk%2BR&X-Amz-Signature=e253e1403ef514d346217d89488e1058ee80529d3bc91749b1f086fcc9ccc5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
