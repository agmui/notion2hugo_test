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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBUHYIQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIH5WK%2F76gsR3yIV00mCwXW4Oklj9VBR5dvugaIr%2FdfrsAiEAoHCeVdicmAsSEozjiAahugCdnMmRbt3DsmYmv8Qy%2FSQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKMmoGtmB6pRNPtwcyrcA2RQqZx%2BMb76tGY8Tixr%2BISn5Q9QYzQ%2BAcq2c%2BIqQHZWYN24fRLgPgEH2aLJz37ZAvZnkQXBJr7s8z%2FarRVFxwzNV3NPcR6rjtBzUMD8yYxngx0RT3cKlm4%2FU5JNO6UTlBSxSgw8avtMAa%2BePILMMqrqlEgj7bti%2BtPG3%2FWG9DNXd%2Fba1vRvbkqkUDhnl6YJ%2Bcs47Jv5ZqhG9lPjATRS63qP9Q5uzDoexXajObOhN%2F31lyzpHqkINss%2BfczM06SUvxnXu5V3LWc1bxJDg%2FLlUnKkJE3W5ZPHSlMqFmmGwqEFkJCGST%2F5PSD8wzLpVOWiEnP1HsrxUIwGjZpp0uCMKurVq5hzcp%2BHtp9StoqX8qpxlORpp%2Bv9oUSS9JRCOyUM4GgZn8z8OnfJ1WvQAJjpmCW85rFK9wCWBaFqlk%2Bf17Ze3bK5kjZaYR1zzPs%2B4yaEInyRC8I2QFmZ0DfuwoFqshY7AUao596ZaGof1w8ZuaHeDby03uc9P8aADumGUvHG3Etcvbqh0abLQhb8Q2nJmFu6SlSEOC8jYP9lmy%2Fnpyu29zHmh%2FDlHSS5%2BnUfgHJmDFg9h6Dgvzvy7%2BpxIuL%2BTdIfGGR58C4fBN8nA9y9qR%2BHl%2FZ%2FPpwRp%2B9u87dbMLnm5MMGOqUBDZuX569QVamrEOEHsM%2FK%2Bau%2Bz%2FmeLr6CeZVG1grCNJuDfJGqvVO%2BhMos8886PEWL0IfWWwRdpruiX6kXFdtuywVoznoApcjeEyL%2BDPpuKCBaclmeEXUDuSK1UCtuRr2EDkjXmlO%2BcEvt4VYPEE%2FkaIgNo7hrZjJs%2FbVaDKByuT5XvxHkFCoJPg5MkX04VXQayiKdKDsmgdXJvYsvVyeyB3wou31c&X-Amz-Signature=02aa0acedc247dde87bbd1dd081906b731d94887b8ec252f42318c378d727aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
