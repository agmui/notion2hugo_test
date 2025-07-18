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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6CZFJG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFgyHmPsn%2BosDP0MKshyvwEGAhYeJ3McS0zN2ZdwzRDbAiEAjW3EiDDqzGcqpd0m%2Fx9yJb48hg1FDAeaZsYNXOaMZKEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf3OG93zXtPXBKWLyrcA3RORmSi06knDLEOwd5Wzl1pwD2p3DHt2ztxhughTs3J44bZNgZqSCGA3ZLnl3VwS2W3h6K0Vvd0yFX2Ulqm3rFHtAPfw0P2k7Ze4bUEo8%2FfhkOPcnULxJdK56MUriw2LuzAhD%2B0z2yKOVqlHBrw5GBTD2tcpTvWjrVgaEfAK%2B8dTzf9pUlWOVq1LSfc5%2FqL39s2iIvy0NJXUUT558w4mZexrSBJnoGrv2OZosrhfLj30Hm7yUm41T7MfNHnxCFLtxYrB3cNXlcmLbYHurm9JdB8OxdlUuHbkwE1CzbyFM1odmbwjNVE0%2FjSH%2BAGrKOYjLqve5Hhz4I1KEge7X1MGulUUe0mbaLL%2FCVoERQKcUSLt9Mio2%2BWVqio0tdyciWs0A7xpbjSS1OFVhrJR7faJMfjmqrmM4ac9l1QsNFKX86TsylpfOKSYJESa2u86ezyt%2BkDBH62GyulWHeBAo9FzRBGbNJc8Yrt%2B15zKvS5VSRFC%2Fbk4VTPkzhNqa05su14liDgNLf03gwl85pyM87OwZ5c26w%2FzZK8tvOZpgbM%2FgZgmUV6rnPYMtRuc3iHlk2doJxzokht8iUkanXQ872n9nT7Dx1VEkvtELWKWlyPyquM8WYgOmXAXOWAet1LMNTW58MGOqUBKp%2BYmgmz%2F%2BiVTSpP5PLDFFqOugYtJ%2B8umEM80WiTrh4NOb0mGIObtuU5aTJ%2FNCfOpRCv7ESdMP9SmzzscTnYC5%2BbfI9D88qZcEN7ydHfP4RUKACLq1t0cDrA0KnM%2BgY4N0gDvmc5Ka2eDtloNIOOWS%2BNGWOvrEsmhj6GPdDJ%2FArpbZQSQyFsaJ8uCyUVCD4vwwpy7IFd2QGrpvBg7NUAgrGlPXAo&X-Amz-Signature=2b919aca3cc41bdc87e0f17dbb33c66587ccf19a990e6954b90dbc5371be74f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
