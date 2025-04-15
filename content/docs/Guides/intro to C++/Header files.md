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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPGNP2VX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGTSLwxKHASpFf0%2BYiZkBQaDRcFN9eeBIzQQoK5hLcnAiEAvJyxRKOn%2Bw80j7JJCkOh9%2Bbm4hCMU6TcPVVz%2F8j2GREq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFzuZqKdxUwcExadTyrcA03Nd1lzdPCCFz7We8UIIEzvi%2FkVn2C7nk86lVzLpvpo1cKEFhoWjuOZaz%2B%2F1wKk4%2Bw%2Bwyi9abtl4QMrrQSPdNJEbUW%2FCl6afILiYN9qBaMxm%2FOEgAw9%2F89QQ%2FmlxpsAhK0Imryet7Fiifh2DA1LwuW7EuYbVzV09gse09luJN6sHIo8faZ0x%2Flo8saTcsw1wozgqVYBRaQqyPDkFuQaMj%2FrkmRFB2IIgBb%2FHaOicSaIquLkdV07z%2BZkEwWU19h43cDo6hAcnk66g13%2BSoBaC%2BkHXxc9jcr%2FmmGgKDOK9VlaoveBcYM%2BFUaO2pYTn%2BOI4dQdVbPsiogzvJq6fswc%2FERCoxUmQc6AAGH%2FekhO5cPc65g%2FoyB3bsHDb92TJGupj4wQq0nnb4V3NS5OH530okjflWhj2mwgcfNMZeF2PoP64r%2BoruKjUVNw5xUYwYF%2BNoEX5FWbuKjbuNc1x%2FBABtj8pK8c0drJuiaIPPXnz03qdThQu3Wo%2BQdnpK49OnP6aYN4tng1U1uXfh5xUKtr%2BiGskSvcL%2FKPIm%2FcjYYqvdK3QbHPE8MKrHBqhx1pu8wI%2Ffn63E2dC%2BHEa5A%2BdUPZtcTXQkJHO9OS2ROEhP1JokDt9e2%2FEMMkEapEUQ0sMO%2FW%2Br8GOqUB%2Fq7MjojO9ok01FO4o2Iyg5s%2Fd7KjgWvIQChs7P%2BgILAYCIR%2BVocSOEA23wMRD5fCealXLKJcsXU8bsDId1qv%2FuHf5hAqAf3ejUzFAog9zT4zcSPIMUqEWIVN2RnsURnRGic2bl6e7ysbvoM0Rs%2BO585ZP4rPYQu9%2F0cch4DBudsqhe%2BLfB9aG%2FLpTLOxfr%2F067QRkVaTrW0xOZRRPKDN%2F2hcAQAz&X-Amz-Signature=88c4ee5ea20598d57aa353d7397da2092008287cb3e93e794293e129d2d70b92&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
