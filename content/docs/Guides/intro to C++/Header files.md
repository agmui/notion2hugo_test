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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7O3XAE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICgZHH5cHXTMSR%2BLRN4BwUIhoYHN9r9VRT411%2BBq1gWSAiEA7mNt2lawJpOAnH0Ulw06%2BwxD%2F6rkXjw7BBuErWpd0XoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMI35FshEsYK2tJUircA5GEFnMTo%2BtapWVSE36n0383NqJjuPlHFbCYmLRMzVBlD%2FesVOjASzA%2Fopp2DnRiFGlnlzgMjHk9xl90Up3LmXHMGzhoQHnxaQMyGghfjBfRJbosxPVQdn61oluJcdiKsB%2BL5IdNSXjYuka%2BdIAiaua%2BXNYRxtn%2FoPdBF1rxIjfS2gL0tKonfcC7jaquC51Nj8RUXBIp%2FYzq0DltTt65%2B9Zg2z7ao90K1OOhXBWPKMCQ2a4SEHhCUvqRu2O12HRmsrYH8YNotuqioHRCBXfZbzQNTV42PaZ34wHxFMT8WvJAsiHRsA2lBHg7Vb4qkk5Yqu6xWICKy%2F3XIi6ZFjjKZ4SmrTTzhn7ev4M6Ns%2FW99ZGHXqn2OCRlUbjMb4dPe12Kna4MQ2BApquXwl%2Bt8pv89B3nXR1BpAvCF9QQXumL%2BfRiuU%2B86e7bq2iWc7Q1F9jqr1gBXq3COcEaCkf2JxeixMzW%2BcFlTZe%2FKLLQ1sGV3T2wMTikgL%2FHgL0uDYHH64Jjx4jMjkJHGLJmTQuQ%2BpKUmJkzyhtBN%2FZXcEZNypTXuvlbSPGMm4NF4g%2FUWOa7dzKDo9c6JjSBFax%2BaaHBfqOCwRA5jFoBwwShDVQLu2OKPrjWHHTqTKcAsV8Ldi%2BMIOo4sIGOqUBin4Hle2AZug%2Fqt5p95GJLABTyQHkRrE1qnk7Z4aSChuldJV7bSvX2p3PTt8mtOxTDax4o7ghR2frWU%2B%2BzOys%2B7TDWyLwuPJhoWk05TKiqAFSdDaxpFghbU9l9Xdz4R%2FBqWCTwPSIv1o%2BPgj98rEJZ46Pr6NYZ9qBPgLPD8a6%2BCAEQSL40PMoUguwh9gXx5m63WFAk62pBFDVBpEvK86Sq8c0bS9j&X-Amz-Signature=df80bb520c811a8a1d0c5c0bfad85c6d6c83c50e3e45f595fe6d18976d2d31f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
