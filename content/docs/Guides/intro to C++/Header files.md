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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKJV2SLZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwVC9vmscN48UuLQbWnd1KU0Wn3fMNknxj8waCnipKPAiEAghbPjc5eD8T7TfaqBpZJsTVCEBJ9ViZgPYloCMd%2FUb8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM286zaQn8Nc2xHhWircA%2BeLBRnLomLqqsQmJ0b0dC8xK2qxfLM61xfw%2BJBi5N4hR4V26%2FQB1nQRS%2FkotUcUr6ZaoGF7p42%2Fqo75H6NqTmK6hjSfMeN6ZI7L9JiA64m3ccaTZY3hc6%2BgrYFfkfg17jO5cpttOl%2FJi4KKTjDJ0RoB9N8bGIExI044Ag4jhxl%2BgdKuGmPzoKpSvX7RKDsZW%2BqScahTJPlNyZ4JHdOpwq1z1sY86PRoPP878yTBWj8d2FqGDvvC6I1%2FrO%2FofNo7R57mMYba4xavipNl5LJ3fEbp1Uiztt1oYT59p55rfuOmH9yHZP%2BmcSWWTmMzmwYD3NVmPO6fWxYXoCBhbKYIf1ODYOxSsALQT0GaUnXMI3puDpoOpIgtSYV3La%2BZBeGCik%2BY2%2FTg8Sf%2FArUMSlsDHP7c02ttuQvxnYeWNDX%2Fdz0tsvPUNJ2B6siW3UqS3IUOCj9v%2FS1LxR%2Fs02jRdnsCEy2WHhj3ZJ%2BcUbHMGTF19fOKl3m0WZgWITeVUdXAuRu9vvJmJ%2Bpf%2FLz3CrDebZZDRXgiQF7EgXU%2FlY3oEUqK2IRfiFb2DCO58viwWT4F3x4xMqrdKWPG7oS48K3CXUOuoXHxI18pCqcceUZJRgpCbUR6hH7zkFXwvIIxoGQ%2FMJzW%2Br8GOqUBV2QMS4YYeiG%2BNdA1TAWPRzkgxPGwrSz2phdTMHlfdyyHeFVLnDPVIxiZrvRUVHywow9nkNNFKafdZN%2Flsw6BZ0Wd%2BpxBd3sCjxVHQ2Jx3fDAICXgvt%2BgAkCGfZwjwTbUO50w2%2BXL7A0AeO0ZioU1wRw7rRDS4EFaMsccfJF4Ai2c2Q6y%2FzYd8xuXlfbpJV08yGQXMFIbRGLq%2BuC9g%2BnjAotEw4HX&X-Amz-Signature=801c8fcd9d3d3899130de4e839167dbbb6fb217a2ec3f4b30fd2c386f1224f14&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
