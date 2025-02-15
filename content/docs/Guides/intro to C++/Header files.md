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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNRVXKN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCYT1rIsBwauwIzOO%2FbZD3Fn7%2FouCdrSyXoEecexaxxnAIhAKgdUvVio%2FolQXGXpiEZxHqPkvPik8nNjK0YZ3Zinl98Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxFOdAK%2FR2AvInbccAq3AP%2BGcVe4jfc6UPd1Bg2Ee1qbxK14SrAwbQkRInLaE3opX3dCf8hdlqWG0MBhoU8JjShL1H0e1FBfm%2BlZQW6oMN%2BJpdsW6zc7w3DKKCkpLGEUumagEgWPpWjHxweUU%2FftPAtnJkQDWWG66p0MGq%2BcJSfsEtsnPiayG%2BJneonQBW5%2FLCTX1sJmzmxJs3Su%2BstXpBNHw3TFHgR7cQE7iUJlUprWDGeRAqDOxwgx8ySZCcXRZjJpf7omdYK9VLdPn2oofioAoDqruhvzqQ8yA7KDV9srJp4w6fFCS3CnCYe2EiKO68RLGF3DAEBQ1dyXi%2FCaoWMqh2aydwloJgg9CyLpY7Ai37DDBluQIy2oGBm%2FLzzOCfKqaUEXivqMDMce2yn0lxW3cneJ5oLfF50Gp4I8Es%2FVax5xmL76SOjePM8i0qVBnotxR6RjCizOvO4YRF4s5vpIIvxhEfCAJO8XGB4BgROWMFU1ssMTLy8oqbL4T1vTOjYnhSMfUpMRu718pZQ5tTdlFF1qOFSksuPVhQ5AbkiNQDS5KQy1a1XmGaGN10ECHw9dB5kpbcM%2Bgx05TVFYLWOwGr9GmPeoDTepnUVA1t7bXFNVasGl6%2BjU9P5Z611deKotHHLu6NafBfadjCGx8K9BjqkAdiMGEO%2FpeXlz7ZzfDBUdmWPLRLrH92u97nAWeSoZBCHxcTlkR%2FrclqFuQkYcmpouB9vZQaKUQ3r%2Bi%2FUPBSvRD%2FWjuTu2yx4tnthPp5as%2BDlD%2FttIOxj%2FGtsnVcTkqOcKMFdGDhBrWrj7mrFMLmmZkQAfTtksBv2%2F2Rc1gftTCXQCMEUMxSHXLhLqJlys%2FozKaZCPAQekczVhAwkHtBhTjNuSiMB&X-Amz-Signature=7b598858f1e6cb293ca90b2db74e770244e02e9c77715fd426f67e8584c3e2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
