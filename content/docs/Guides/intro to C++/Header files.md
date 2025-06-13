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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LBZEBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFWhwheYhU0f88U6tct88%2FOddtmoiJxPucHNiWTDJvqYAiEAysQ8VX02tM6pioLecG1jjmQTcKVh9a40TTSlK%2BfzK%2Bkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPakQlxto3cL2G8%2FNSrcA0Cw3W6BLgrQ7UNoSNH9LeajPbiFfPCVUA3FfgXXQ0hu6Eg4bT7jphlbtxuGDkT%2FAPNMNSlwYQf8va%2Fxldd5yCJy%2B%2BJ4qeok5%2FcnehxDXf3643v9HQXSUuU5cG7iIqttXMIhBpGnMACd%2Fn181JulfBwZL%2F5A3YOLyrBRocZKx%2B2xuiJQPv40r2YA%2B%2BNOfZY1npDy9JuFF1ZLY71C50pOynGN%2BXiUgL%2FHBc3fmvVBAketcKpgM5KohiosblTtNvzzTFfOVSCrj60laAEqW30eKt%2Fy6cHSPnRzpMeXx9VWbu%2FM0IOZQWlhcd9eT2eWxR9XXgR45vAew49nnmqK4aQiF21mfMATQQbynzT%2Fn6pFIP0YrJTg%2Bc5WH7t73f4AZ60ROGEUnsybVE192%2Fc3PqovLlIxwM3twe2VZrILEajOfmaP5e9voOeKw0gqbNwSgClCzpwdKdUCnjZGHFC4WyiDlpIa%2F6LRW8uK1nxOcizox0wmH2Zp%2Bhb%2BKo3PjosGt1AMeINqLBZZxWKydaANcUMVHa3pNf4AHP2%2F41CH1nMUbNmGi649GXMKli2fTQokVRDUrDpkqRwOEQoMZpCHSjQ7Bal8ZLGkNPP5iCzq77O9i9n55UaxFdyre83eKUv3MLzSscIGOqUBVp%2FChjDDdiB7BbLaSRSQhAA3Vc%2FIczCuQlzEvDKkcN0teWdf4YJyYSjfPtBA8crmkqw4tHqBCs63w9HoDuLxL%2BX3gmBrDLV2T0IQkd0u9RTAPyws7wVyM7IGZvvYdoQWThnLm9avt4H61XqPgxP2sPPnVUVzfLPTpnhgb9HWiogy%2BdEMfaFOXOCbYHFcZykW7BRrm4ROYS6PunQD1uSY%2FyFFTsaV&X-Amz-Signature=3df95e0ed2c54bf4ca9bfc23d4c642017c8671a226e51d741de7b01be35c357a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
