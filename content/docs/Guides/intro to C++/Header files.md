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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI27KTS2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU%2B87aMBW3sz428It3l3R032%2Bz1fvX44NIVjK6kENJyAiEA%2B7cQMr6W%2B3pRyfso2haofoVI44J0O4FKEdyoL63YAGUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDKIryB5lR8%2BWL4pnTCrcA%2FKNcVY8cCuNGphk9UxPQ%2BV64m2RG8JPzbAxU4jh5BAq7zdQYHPp9reC84i%2FMCD4WQ7B9PPqOQkXsv9jx1emmKoU7tlUUcxQ8t9OpWOJZOi2VhMjCBKOwmiXfHB6iaBjS1X036bBaCPFCjPUjBidjZuNt6wanJmKXZrCyVEcyRjbGpda4t%2BlRnSaeLAdXRD%2B7Krck9r4e1Ghge0af%2FXd5AknuIBnX8XuU7%2FT%2Bnq2Fb0oe4zZye2mJrMtgT8rbQMPzctrwVB1D3zfP2eozKIaiVQVRoFyPvLYu6vQxOJh9lbdecfCiiLMr9Ap0Vpt5ZXX%2Fzgw5iiLpj7fbCQ%2FuIv4gOuj98ez0mzExKPw7Nl%2Fzsm9scXIFWvg%2FoxwyrzRrbFQLuBYMsYjHQ%2B06VhmP%2BXvrSed%2F4cUcAGz%2F%2FJ3ETdzDfPC14Y71IztWQkQCuMVV7oFTDx%2Byir2Zpmd6R9gBiEuFYQIsKv5Z0ODOxMrZ2dojo%2BlwXd8iZhmi4DKwfG7NxJ%2BsJbaZ1E67wgvII3hv0f0e1jiNRyU%2BpoPhwEfFCgj%2FtmZKWmF4Lqjx96Hvms1kx0Vsa78P%2FBYCBOijKedrxXZlEGVz%2Fd3DpFOyIgrIXBoX8kUNC6MlI1FWK1B6hsBMPXjvr8GOqUB05ODlpZWJnWCo262sG19HZaEToGS2%2FXE1iNnOjCadSTZutNjao5ifbYGWQSqqt%2BRwsiztHUxHIVas8lKUlVIG2K2PdrJOrmcOBiMdgwFve64IoMXHv6yvRiT3PQcfG505gjGUwN0vpDXYfthwd8nZZNecm02lCUmcelRkdT2KaZywSIWW890bMtTgxhI47cJbMqcKuJ65SvnZP7Igq1yq6T9ae8M&X-Amz-Signature=b4998f7e3c3dd2ebb8927299a8c224badf999ebc06bfb2bd3023b7167ed8a48e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
