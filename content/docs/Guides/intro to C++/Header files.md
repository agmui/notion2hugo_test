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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNFNWESL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEnXQCmeAtCFPl78aA6yKdZx8FDJEeSVE6iw2eWd%2BYAEAiEA3%2BbDvMHA218oV31OLLvjx7c2N1iQgXiy7JiUMKmxTZMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBZDH3EjTUZTS0XztSrcA%2BPN9yMTiSZejwN%2F0FirUcmE1gfJHLLv78G9Hx0n9Xu4qECFi9bjOcq17uaO8LqvBUvQX1ILwa1JhmOEgIqfyot7oxP%2FgXcl6PvW2Gt1MGCe5EmCOhTgeXSHtasN70AvtCLcGs%2BDhs2UJwTUgz%2BtV0vJ6p294S6sYauhHq4Nw3%2FPGzFUdL9y8TB3vDZhtUwENqwd3oEOeEmI%2FZI5L1TIcJhlafChNiifzL35einaRZ5CgIsIhKFD%2BJ7BkWUmm3ZT3ERX2PPlzrIVTJ9hK1B0lKgRgW8Ssz7yUrTVAasNxfIWrmUXZHghyqqhziiNHAc3gztS6hb7lTDDe4Akf8JOK9BCA68yNaz50mB0%2BuDYhC%2B3OZbQ3pokraVOLGCDIf0WsHBAQMh1J02pKjltiF0y30aPNAFaiH7iSvWvFgpSVMx5UlUtWGGNf2sqmMKoQ1GvICqHh6eGbPhsCDtQx14xEcQr5rqF25UhP4kUk4gPcXDyJmGEAcOkYweyoMmjB9zuLBfEYBdHg0T6resrE3AFp6qEgU0ZlpiEWs3jJFrW2sBT6QuAWumPxS91gw3TaubWpxAlXH5OnPLC7waegKjv98EoT60sjh2GHkuwlZnz4847lqRdoL%2FPfvKzE7uJMJ7VxsEGOqUBFPJ%2FwBjeTHcj512rrryC4Frykytrk6hQoq2KlZeTDOdIOXU%2Ft6lYmPBSDAvP7yOuQzuQog6ATJdvE5TKozU4nzr8Zvl6LezOsVMY%2Boaem60WGZ8iwIz1Bv4RG1EQJfOu9Hfq0oZgzAak4klT%2B5Hf1%2FgHLdkLdRRWtoQ%2FKg3M%2BYCrFJBYBt%2FbueJI2KajDfu%2BAp0%2BavOm%2BWuAZ2be%2FbQRB481XrUz&X-Amz-Signature=ef0d1ad2090cb212960593cd13d1fc23376a776ec7674afec41ab145ddfdf5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
