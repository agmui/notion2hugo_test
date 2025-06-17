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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Z2NKM2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFX%2FtjPNpskvwMknVgTDIolqxtIdv1LkJq7iK0HAuOmuAiADfmnRQW%2BDCh8n7QYzlCKZIe6aRlG1iL83pSrBf8ZxlCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMV1cBnk%2BWPyn1Qph3KtwD6JokKo4aWgku3Sil9kQXYpJhNMQ9zmPkWC%2FMgPF1uVMMylUQoFqn%2FxrXvCdyOO3eTbTBOZ7xEFD8YUOjg56bnvYmufY%2FiiA8qnxizMD7TpMR3U8ojvAB3iNKksVP%2FBkPmGA6IxGa%2BEU1AjGyK54NWdNZowBPSS5bJ5yZLn8CrLhaUeM15oxoMvzzLPTXPdLLX9IMRyYDZsaACbwSC1btAB6OAfPcSrl1rp7gthC4a2W2765ECzwI917mRPhGWwssuSkS5Yjps1ouzZEpF1WBDhvH10b4Dj7fGRGlBvQkxzJKSMDH3Vit7lpmicCgljXDNA0XzUrwHz1XhRRZNLM1gHgvN3W%2FSSxXkM33N7BcMdyB3qa%2FM8BXYaz5%2FvApDWCth8q8Wt6GI6lmL5XPCL2XNX121QtpiBB2kkRR4Yw0BppjMkgM2Qu0It%2FntRkfGYO%2FeNQ6nVnrTo8VO99azYMt8sUgS%2FFsmm3Tg25b4jbHHEuvpv1LwbwqFv0zQIMYQPX7nU2tX91coUkjMucs75%2BGHSzubsgI0o9RJ7oBTtTCLhb5Xavb5%2FlVvw3UauTzv8pGKQ2H6uDyH6wNIMvSBv5YMd5MMkOXHFmip9%2BdmrIWwFCA45OWk1u4otBMYXkwgbvFwgY6pgEUePiOANtWtlX85jEqOQXx%2BggHmNlfjMBl2dZWQa9m8yRvymnHTIvMdbneLicorFUVQWS%2FsqM4YQnbTkgTCvwMCT3d6ZR0IdJKEdaSzKShPux3fJAvAxsLKqvLY%2FlPQytSlZYqPj82BT0gsy8Ok94wecvqGfHCkZmRIL2YyLtlz9kW%2BQm46FGRaZTU3lVD90gpgeHSztIHgrO8yTpYDwdjAZcH4S4o&X-Amz-Signature=a42994be5fcd3e3fe6f97c2ca9202d2b7f9c96afbe08f9b2de3766ff2db49956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
