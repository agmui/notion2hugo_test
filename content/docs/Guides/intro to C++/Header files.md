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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZAJJQ2%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAGIWFfEpB3wvGMj9jUADXEzZsepztfMF6ID9M5%2Bwn24AiALnX%2FN92KNNz6fLZaKeOon%2Br9Xwh48GZe22SH1Tf7j2ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMkhwQRE0xSnQWda0dKtwDNnf9EVcYv355fgla7DtftsNsquAVROl76tZwYvHviEoBTlMZaRDLA4Kcubc4KuNii0Ys1zVXLL0rIOqf5RXUT68xpG3SeF0ZSutkO4XLqc%2FVW0rqanSffsUMLCHD4m3YoI6Vx5x15fPVCRs%2BHguBjU6pLZjBAwVWK%2F0h5FX66H5nw4St3vCzHgGvlIFOdY8E54rmeZcC029ZtOSJDi2%2F%2BQdY4B6almO1D2SqvB563QK5kMClosT3Zg4fq5njn7yKtgA1ro%2BiG8ZPcyY9EdYxm8HkCT45sCVA8V98WP9xruP53zIwSzd0zCxSfAmY27%2BTob%2Bo48D6h5z1G8dPwD4pOHYPrOWtAX85G8VfXRJUp74GAKQ9E5n%2Bt22p0HNpgjrcZcLOZrnm7xDTF%2Bq4iYO3MqSjW3WHcmbI9Vx2SkdhC5DJR%2BEvDztLDj7b7zU7T95x38GkU23QIAnq1fQNaMG8gxPFP6qWxJ2r2GEEhELMvKRwTFbOu4duMA8sHyzcOP3DHBgB9QI%2BwHdjNxbG7lt1iAaGZNtI62fsdNYk0KGiZPcAxPRo%2FdVGPKXbKKnHd15yvHv5tJjrHJ7cv3T94o4Aevst8koOMj40kv0FL0o2nQVXx3OrQRyllF9l6c8wwIu6wgY6pgFegjb8rE7Y2aKsyf2rGlFftbZGflUZkO2cAIFv%2FdI154abi8Kz2f5icauukNTIencwbWNSKEgHuyRLleDWfa1AM1jYZa%2BX62q4bzD%2B660enRul3wLckTqnJGT2FUmeqOvwB49o2Vb6h9iRFB5Y%2FuyMWyiXSjltYT7Dfrr7Bmdp4pLObbSnN3EKCL2lXjFEDF8%2FiArEDdoG5iuC3xJGyhQnJthX4MHz&X-Amz-Signature=3bc07b588a5c45e0e1e7f64dd9ca7121f137c2b2c97bad3ca1f9a1d0989deff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
