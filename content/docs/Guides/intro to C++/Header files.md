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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZJBK6N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICznob49OvPzkd3CAQZ67t78I5iHBdEFAcdMQGySHGGLAiEA%2F9%2FAaOvaOrFbbmz9GlYwGO56D8DOrdGqUSztLHWX4GYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXsTREVsq7AAjItpircA7axBytihGssVJ4Cd8A0TOr5xZvNQTf17lR%2BI%2F6qkgFRf380lh1PXxHSnadr12t9GfKpRlFWIsJ16v6k%2BGcy3NR1Zbql6oEdQiG4wWuzFltqHcXe3KyJY%2FEmH3dNeb%2B0aLiiFmKKGNwRgZXLFRKfC%2BizG6ntbjkBzeFCMo7rVtdgV1glG%2Bhgj897pp7D1J53f4kk36opGCnUV4dW159dWjqB%2FlTwkyUGr785bRCorcmHaxnAesMfICxzgaXrc8k7I3wl2NaInWFgVjI4I%2FGgoAs6JAmcId%2F4Gw6n2enXCyBuPh3PAQaGEnIeQbyRHEgkj6mit0Aakz25Nlel6z7%2F0xIu5MvkNPYhLzDDrBn%2FhoRU0tzyRjgrPD%2FPe8hPqT0OjEK0K4O%2FIfM4dz0RscGu%2Bgro5ze%2BdF8CGYt2SuX%2F2KdBuaTIZ0QKDuTS7wWXFSCBWGDsKUiy0sv%2B45UxwbbPsPoTvaNpdTf945F%2Fo0owEZyczfcm6GZKPfHrNLTcBqyQqAL0DT%2Fu4BaY%2FERkhgyV%2F%2BTqUn5BMMuuLGnj%2BPFUwBfEzrebJcsSzFOPtQg6FiivpHypkMc1W26%2FVunRsDPDCrYQf8zZ2NV4vdjdcMpLOSbpbG4SXEPwY18QGEt1MKnCv8EGOqUB2gVWjBRrVq8sDKQw49xInhwS3h0wMMe8zY1WX%2F5xgxrrZ0PmMmWsKZMjUvUBjXGRr%2B6aWEhTC%2FT4F7t5Lh7rTVatulHYpVSWC7WKmxuIyMSMPNDO3WFrBcsZZW7xdiiSBN2fimPPH9MUGssStRLICtS49VM6fFkskV%2FoqCiCtqndpsch6nY1WtMbQDJV8ilCeclmPG21QG7lcur6LROzrBJPEqQO&X-Amz-Signature=055d201fc7594987110ff90974563814a514cc2072e5d8b5691e7116a28c81ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
