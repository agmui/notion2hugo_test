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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5DBXY3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2BgauiF4ngR1HSvl8%2BpF71FYl1FRiYWNyY3T2osv7PwIhAL8PM6lM7HWbJwLWZSuNoI5JEsgqFoxShHASrUglMG6zKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuO%2FWFVnAl0brQWIIq3APlfupmkyMKPMXDbJbtaCXDNDaU8ydkAIqfMiq1EXcSburkRx09HDyswaH9pg473fpq%2F1Jc6V3EgLlE9MijrBqrVFbHKeUaki9EAbCcWDRznDufbKpYONgdfC4PvWwC94kCY%2BtmeBjvzeHt3kiHeqjr67%2F4a%2Fs2JNWXspTxPRRdkWvAPf5abd4bIEZSRl%2B3oPcDxnMwrRShQFq%2B44F05YlUw7yEJbgzmdbM6IhoOa%2FqpS3ENT2PFzP2Uvk04YQsVLU0J8j%2BI4PUdW35XNeIhPOj%2FuIDbOlPXtC15mJdkkE3%2BO3w07sPogm0p4X6ekTiQA3sfwCqOxzeQHmZuWmB01xQj0ab537vAdGK5QD3GNaAaCi%2FRCgJ%2FUWpU5jcc1zgxLp2N6%2BfY5H4tdKhcRxwrQt1AYkNK88j4BSfwPBWN%2BX0xdLkwKhFaoSxhWC2SB9y9kwhgOpbmPTexbWEFBLHgpA8AJGpy80Ao5Wc3dnai0RTYcrYSIfH5d0g535vE2dHv9rk8O70waK477UPnXN7KfhHmwYeMcYE2dOMunKd6ICU7MZmIfuy0VIRJ1%2F%2BFqHVcoEOMr%2FtOocPdNOXwEVDnmCkIZV1S8pUiQlmI57i65yrVexPK46vdJJf0lgv9jC09qvEBjqkAX1ZfOUNk9Cqc6DyCaAtcH48tTFM45r%2FGWW0%2FOWs2rwFrouqG47Ej%2BTsLWOIMtwotVG88G94utZT7n4hTbE5KvL4gi2Ul62M8YDBk3VAdnXiPSlyX47UiM0kwnAi6AUC4FWmtxQadT7JQt%2F%2BlSjAA3guqaiSXhbt22jFFVIXf%2FRRKK%2BC4zOHEGoBCLSIlLoc13E9IVxpAdeRiD0gvW0xB2%2BD%2BN63&X-Amz-Signature=5cd0060ab1196362f00e11e856aead79b9fd40716226f83cca35bef2c813741d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
