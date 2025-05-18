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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6JHSJ7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD6JS5Q27ZDihpin97pWT37tIiqPgX%2FxRqBDXdH%2F9aaAiAvGyq8x2vjYH66WvkwdHGhyDYA6pA%2FzY%2FDtAVVX3N2Byr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMP3g6Oqr0VUQr7RZiKtwDMcjt0tosVchiWEbYzJMt7Xqhn%2Bq273DfoTIzkfx7dexI8RLd%2BtGLhgoUJe%2FIhlp5y3ilkwo2pmsg7OuhGYeo2EM38JwZNWvtcJJM2sJdFEM6WjTzQ0T6%2F0rgrYP7E9S%2BRSthexzfrK%2FXUn4AhysU2D30PGplbZRNKXLahGj9QR4ff%2BciEF991KevKBMDIsJiJdeHVszKN3tuhigXICM%2BQb5Sqsyk9WzaLsgFT0nt81c22yzCfpv15mgP%2BGTa%2F7Mk6%2B1%2Ft7%2BkJQ6%2BA9mgWm93JcPbSni9TU%2F059dYokQJ2%2FeaD1hESUPQga4KWypJUb4djT8jfzDYZgX2l7K7FClkVaw9HNHpr3kqSLgZJhE6IVj%2FXrxhRWAJHl5kclwARC%2BaKXn4RVTteZkELQ0Bbs2gijIDAB7P159OaPaFmdWGuJDt1ExPeIA8wj%2BBv2CpNml67GwtLVZ8d6pgClid6wwdKlODxFVmexY%2B1Lqh1Ks2fqy6SbVwVvyQ4TgdoryQp3%2BZxtKS%2FgbZwc1EqRrTDRMcenu4niGKIppkkcwiiYevhFB6gKTM9arzMhkrviDDxitjaHMZM0LellqmcrIIVn67NUZvZyFWY%2FGvrkkN3OqshqhfyJUiBfevaLq%2BfHsw5dekwQY6pgEUhFh2vGxYvpYS7H88eSTEathHya%2BmSW6bGIcLuSaec4hW01Cxk%2FgxaleVZDIjhOn3XxwLOYftaFFIOX%2F6eBwy%2Bzaf96ipHfOMB1v9NGz4hMkaLvu9ezaLDgjk5mwxxeQk5hNMx5QH7muZNAOZcpHccFYdSffebPa7KKMnxydkaRZJsSOhlrsuHSyWcGue6D7NzAL93HNewIfLHEoMShM8kYWbAVK7&X-Amz-Signature=fde268d17c7a60a404d5d8211e1eec26bfd2543c6f24644dcecc36f69d06a702&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
