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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENIJAFO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbUQAdiKNp4EUzsvWs8zpmbAUw5vCxnznylbunbsFtpAiEA3tvBLSDUvb%2FPabtY%2BahUaqZNVBsHylIRaL9Zm7WM580qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaKswezdioe9MTEySrcA2FF7sa7itevw63z0J0AxTPxxNcu258ZQMS7RCWIPv0snQi4ePpX%2Bi0p1k9bLKFEbHbl5tvnrAJoZPBqKlwEKBDMt%2BF7%2FEsk4vXUyZ6ImyqDlqCqyW4phU5RoVpY%2BhqRAOBqs9qOIx4RIkXpgc%2F1pW%2FG15IvqYPmCg6Yc8p%2BdDqDSFalyBnbibEWvl%2BroY9u0hHna5jeid4PdYWD9y1JkHoeWDqiYhOHZpGeCEbWADqGJ8fDskKzPItc8gtZ5kUA0Usqki%2F34akhIA0lclLo63XfwrRhYUXalyAGaWVA6TNcLUuAm2J4h7QuuCXZ3fN6w542os1bt67nTMaK7KyIRpJ15dKk7zfYOCACe8FoMTmcq77BAJAb4Yo07dMDEwyZsvsrAi1gKJCMHHuMUXqE%2Ff9ZKZLwycbLIDS7JA0C3GUMnLCyPhH8FwEU42F9IHDkzrKWiIC5spb7oM6kG2TeeoYrD%2BJh%2BkM5eFSXwHD%2BYqFa9vaJWXNzmrAUpi6w2OWTecN2Rty6D4NftZipqH3VRNsT5E4SoXOH1jrcGL8F0GomkbbwacLwthTL5K6wP7seYnPQdYHsvGJjQVTUEXW7s4SrHilTGcDrUv4YqHJ%2FC5jW0D5mV4H%2BtgeL1BakMPKNib8GOqUByHt73xE5KEpeP5N4N4cWlNuKSgakUK0BL5m4M8zzRyFvX00x8MTtnAOPvuQ50NGSmhwdnrhvWTPyrZv5HNVc9a2D41pqhGyUHXMc0IQatnd4IJmTcWebOLtj7a3rBr5QTtF46uBlyCdGo6lL04Nb2%2BGhUfIHe8h2DdzWhQBk1eQHE5qs%2FkjWPUM8fhSmpboezzWnpNxIz4WHT6WlTb6X1X7Tp%2FXK&X-Amz-Signature=0f648846df7b640766342ecf3210724e6a5551b22a7785cd75fef101aef955e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
