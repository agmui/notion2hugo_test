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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NIZUJC%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDgH9N21WQTuXwDxthW4%2BgHAgdz8dlsIfZqIr%2F0rrEOdgIhAIcSLcW1JiCIcNQgbf8J2UaCAplv3uGUCDlD%2FbozQgugKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FDssBXnfnnWxlhKMq3AMu0w28HdFN85AUSEyTQ8gC122ZWPQuUltTh9amWDiQJE%2BqxiCoh6%2BXdB3aTsc%2BtEIbLNzYyrs7XQAiNSOqb3U3RRYLYjStTdRglURTMHurWSizRJk5gp8EaXyVPSESsVXjAFexVrNaeDTpOuLv69LyGr8knuJCs2d6zfQJ%2Fxk1K6Z%2BrNb1afc8gQMgBr99HJ9qaP%2FEZYJUcLodqvsagNcPeAM1GKBFs69YfS9jM0hHeNWuY7YyOgUzrJdR%2FOKnaSGze5yepBGm7vp8sRmt7wnMmq%2B4At4AtGZfvrT1SLZoc7Pk8Sd8gzpBsyelIZ5ri4Pz4zBng10EOueGWnYUPrqBioL97zDxCUpGY8WgyOnDiv%2BHxFNADnfOUifi0L3JnWmZB9x6tuTlfGw%2BdQGhjM%2BSWZY7q4CPIJ51PW%2FX9wgpUc5e1VXBbI7REz4aBdTJCA55d%2BipPSL348PFH9xpR5k59%2B3XMPosbpwhZemcqoI%2BgjWULmSnmYlKicv2Er90Sam7x8XmojtxY2jmhAWsix6XcxGY%2BJG2moybSCJfPDnwa6jQqy1JJ%2Bbbx7%2Fev72elzUg9srkV4F9NhJVDMAZ3asFKuzUraddbJ791f1p0%2FpK81%2BDNmzBLfyglz1X1DCa8ZfABjqkAb8zgbvfMN%2BHItX190NBDGRficwcRiY2iDVB3v%2B9zYt6CZ4nFQ51Sx6QlEeS8QQvDrCMNKctUFspAYfrGNQ%2BKyrvvHkFopQlTZYhTDRL2TfULWF57NO1jgOIsKxzBt26%2Fr5oxYNYUuGuYt9%2BWz1FvBqxfOXr5ixdWJZfIGYRihpqobd3waL8BeT7SGuKnLu%2F3bErPcJ818bjaTnqxjyk%2B7S4oLN7&X-Amz-Signature=9c38aff1ca52b68e755dd7ac1a831d0af9355a053cd1c0dcf9773a766ffbd098&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
