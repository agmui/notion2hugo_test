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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST3F624%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEBWMrv4Nw%2F3CtZApkivWdvT6RNMzaPZkfBFHi%2FkGhMgIhAIlbpnQ%2B08jn4LA28OE8zrTrp7RxZHZbszle8K5vFp%2FNKv8DCFYQABoMNjM3NDIzMTgzODA1Igw8%2BoovzUHvTFog5mQq3ANHj%2FoKaQWXj0tb2Eu329ElRIkJ8A3IbrVj7DfCgE%2BWN%2FdUxgdUUtLuyKazFD5oVXFCNVHNRWai1iaJISul%2FxnaJlAmda2WnwQ39qrPkYoyiAPV%2BPHIOEOdsoXI65U9YatTsT3il4qaDlm327fdUEvf7hDWltjCfz4zRCVRrAWiNNBaR3nZPkBtz4hVtg8DE5l1667YQ5FMkDzOFCdMrsxNsDsK3lT6gh79WDAr3Ldjdqox7Omsc2ejLD9QPafeZxXxFp%2BB1TDTolVVM4inr4%2FGr%2BSeNGVeiVryLOtto4FZCbs5hrz3fSVIyvTh3CyeH6qz5oyfifuAU0%2F4Yl4RYDYpTXdZcDKXzRhrJRnymxNDQE5R1PEE7JMj6cExAO7vVZmA%2BTxRxQ4vQM23wPDdXrNarpTkmgD7jvpBToMp7Q23qIY%2F5rbiW32Pg1bbpCNoysX%2BJ0gcBymZm%2B8D4pUqhu%2BWArmwdGMXcjyc%2BOZHZQpan0anHbb0UZ%2FuNTTVKrmxDQHlI2PJ3V7BMdwzaT2gvowtEJ7GBU5w3lcwgvyYd9AhduUiT5vXb9EIwvtBGKARry%2BbbW%2FmMSTGle%2BU8Hxb0t6N8oI1IbPnM1TZqb73xSdMLiPRy1d3l%2FTyWrdOazCAzZi%2FBjqkAboUZ7TtyHB1dsQyUpsAWGrrSQn9bCgWUPrnPl9ZwmOtYyXbMs5woNP2vlbk5sZNgyiFMN6%2FhH0zl9LS5WS9atPE6w9rXWN7Lz4AE0obtkFoZX5y269cQJPZmU%2BdQdG%2FA%2BWFEPSapWbLOFS0FOjFQd4kNv0pZhPwCFHFlLuMEPiPTa5QD8F4ZPESbnU53PHMDsK5lCXe8cAF2bZERxzHh6jG1nfK&X-Amz-Signature=da1280a8ef36478987e87659de8bcdc9deb22e33238ed3eccdc497297a691186&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
