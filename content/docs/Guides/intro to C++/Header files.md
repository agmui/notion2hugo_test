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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QIMZ3D%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFpHTJF8By6DTM6Grcl%2FCvCw%2FiymmD%2FmBgfl5QXu87ZRAiBmHl6JtbkD1WeANQQ%2BnHgnzPyPWubbXzaAeybul%2BmhlyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuiExVCF53Kq6mXTKtwD5OCUz%2FRWi5iA9Cl56y50NNKFvsWtC0oDzSBwddS9cpfI2jpz7T5FivX28IVVzwLCstEhzWOScT%2Ft9WQLt%2FoRY4Jwzmxpfia%2F04Un9BHIcf32iTc8CmDS55rovpXTLnk9LZF3Vl6sc53sm3YQnoEIkk25BcIY9CVcWgF8xqIA8cBM9zJGelX%2BGI0ln1cnTUlHKNV%2FJaKgmHDgrFBBR%2Fb00WuHIsSuQYHEmi9WSwqKgVSrhvjk%2FGQmaiSPWTMJB949ugYJCa2Hr%2FO8R%2BBdz8WCDk%2FXiUfMwrTesQOl0M2XfanQ2wWYyK%2FkEVCijtIMMiRaRDpap2MUY%2FvAnoBQnIfkWtw5argUMxCr641AMCW54K4wSI5BDX0kt7pMFOe5UBycvDeoYWerIW%2FPXhZ8uo5pGNRFBHKWlIrpfT3tZUby4448tNiNMTBl%2FiQ2ewhleXRe1HDGFbhsYJ2DA6oYcxh8KD7uQeZhw%2BhIXZUHLK6yQolyJgl0tgsIUIpFMwR%2FATWuHG1ZSsavVO1WIANZ4eUbLlJAdEjXNRt1korWIhlFdYJYdPPUA%2Fslpxl4MBLNokjL9q%2FFQJx75kjZgQ7nv1iskUFJ%2Fx7UCqKAPz6eK6q6IXzLmiN7kqGDQroCeOAw5vK3wQY6pgFGCIU%2BMxgn1MF3WvwhzL8hxB2geZsYiZW3jdHmD6CkM%2BuyODMtdbb3e3fkmL0N1Cuh5e0u%2B9n4AWzajD4Nl%2FY3TKUGsWdmr3ATQ6iYY%2Frz%2FDGcmcM018MR0DJxB%2FymGrWam%2B9LBPt0W%2FCeu9gjRHzGaIbWFoSI8gv%2BMi7UCjtLe0K0zKE4r5ggGycChNsuU%2BHoze6NzfNOqxOx2zq6HeUPkyb3mtym&X-Amz-Signature=310a9c8a0fffe6bc4616f42c68b69bac0be69291e04c62d3616b1a86db7a09df&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
