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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5IH4XS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIACJ9dGQtq6A2AWxisGIn3XykdMm9Sq1c9guLfpEXrGbAiAkPyR7U8H%2BgtjKWdXZOXVVSZeNz98OEnMecwKlSsCyVCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrr5FhX5NFx6k3rWhKtwDZllwGauvKKqZ41vYtPC60fs4ocH8WDrzvJEyUYciOhmGfG2kymYAE%2FRsurwLOjNkYjPIoBL8skbOnZUul5TYm8hOoH2leqkRuymp31%2BUa5s28C6mP1%2Bf9Ile%2FiYsuvuZddsNbv6HQu%2B3O5IKgYPxmJTcomJMWBawz%2Fd0Jba3nCWlAqfkKB1%2B1d4q2ZBesglxDcWadhvl9JlchqPj5DbYnR8o4uDU4bwOervbhIYIpTJ1R9QZQyAnlx0D8%2BoDc%2FeIeRFYh%2BY2HPjmlOIpuVqZoFCgyjCbFei9zHmU%2BSU7Vh0X6SSP%2Bu7U4czozEpgDLWRaOXRXrmzGbwNFNHj6gqjbo6ZHVOhgRn0bFUnFmfLoFVD%2BpvI3YOwtTBn8gDR%2BuNLWhRbrnkaeZ%2B3goD8a3oXBprvoHJDHJsAwOeUwRDOTMjsLQ5HlneVT1p4fPWlko8jNtUwLj%2FCM39siG856OHVasJaOoZHhC7YNw0Gtua4uKBiRJS9pJV5oU37g8kJG7BqEs1J%2F9wo4BMJjAEZxgOw5sPaOWDBNM2kkY6Rn0Ntw%2BEVmRA5JVl5SUEnwRXN6gdwcRtmgS2bUH1juXzDej%2F6LHHEER92O7tYlqPiCVlOv4EQMd7F4l3MawiGyrAwgZv1vgY6pgE5LvRG9ZSUK%2BiMGB4tf6rhBUllWG05zkCmicItMSNYi%2ByIbHcUkmFlCdroAjT4qynjV9d0tLL91G0w2EvIuEkRc0dqDkbLOPCdgAcO7c2TtUiDjugMmCyWImgaloeV7FN3Q0V92lYUX962SeJdkROeDKySiex4qRXvrxk7iNDXBms3WhB9jy3KgcUnHlLoilrHhLD%2FE25RluNQ2M1f7H9EhydRX2p7&X-Amz-Signature=9302efbbf026a8824d8805556b0ad5b807ff364d13e207c5b796987d2246db0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
