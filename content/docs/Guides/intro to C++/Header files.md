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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2RIYWR%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzRnoqmgkcTMy3OrTtsOy2xAq9KpXT7D7afNPHONT1IAIhAI0uA2pbUyX%2BNVhB%2BSwERu3%2Fwf6pt3uYtcsdf7h741PEKv8DCFIQABoMNjM3NDIzMTgzODA1IgwRokk5tO84RiEntsEq3APjt5U5GNcK2Vo4BWlqoBTFhPaEKhgJfDGGk2Rq6%2Fx9DDMW0U%2F9WGsbHTFctKdL93qcXVuQGpkhUMV43lx7n23znMO5E6POB8AflDpPBbSnO%2F8ImLYc7Y3ZWzb%2FPeHMvGXYIcQwbAsXE93aJdXjVGdB7lVrzK7bMnsUmj9t%2Bt3CtejuAl9K46DDfFwY2Ta8kQRpInuhdeAQjO2PFV%2FssvVDj%2FFIUtlJRTRcERB%2BdBpO09U2I1pMeJ9%2BcgT0RpeK%2B1aXiKoIay0xW2YbWc3aBwtVzAPVkCvj%2FtvoX5PS1hDIO77K%2BkT7qpAMcncsPcyT2ZNsO2GDCjOoCy8WGo19oyIlWxxyUi6lgtGWRi3K4%2BUe%2BlDRxaitecE2M3uta0fgFOYRk36EaqKZHkE13iRHSgKKPq7p7U2t81eTguSXrbDpxSsSIdKDWk%2BKUAloFA7hJ5D8ShzakEoRzvBL5e0wrdMOPXUlx61d835uh9%2BEQ8rlNNEehiQQ9F64u52EcY%2FNEm6H9iwptyGtatmpaMSOhBoJVgm71h4MEpgwTY%2BJjiPBNurTIK4jPuQ6%2Fm3ZEdbaRHN7uRlCpWCyWSNT9CMxWHfWgVL3MV3K%2B%2FyWJcsKW2eFm1BFhOw5k%2FAUEU%2Fg5DDNlqfDBjqkAfLL8O4cdmCqTymYLPfzO4Cz1CO8UI2lhfiPBAla7T60dOxan52FlpYg7pTxUCgqPdiVo46qPFEkyfMjHIgjx2ldojp5knxG3CtQLbbwmGBRX44PupCTrEZqaFs2qygnI3Tyo9jNO%2FACROwjP5XU%2BNOppKB9bezf0GRVlGhrxyYdg%2FMulxG6CFgNMBpk5TTkQNsakO5g2%2Ff64CZymmZZj6u%2Btetn&X-Amz-Signature=33a33797ee9610fdb47c554d6ca49b0800283dd2e86b3560b46574831206d63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
