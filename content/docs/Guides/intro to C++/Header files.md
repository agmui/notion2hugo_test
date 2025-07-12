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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBPXU52%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FsboAu%2FoBSMZkkYDnruavKpGitlMcU0WIOcEYDJDiIAiEAieB4%2BOomh6xhuj%2BOert5tPI0OIFihIPiLjreL%2Fxg2%2FcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAapCGrNn33gdiiznSrcA3PFPo%2BFf3P9Q5guXmFWLr4VX5K9hXcgqUGrr%2FLzLyUMzbBtpCV7ccsYVaRr30lAmaZ9xU1DHV2G3S9nimmIbAgkw6bm%2B7NDVrVNANFmEor%2B12Dexc5Nyp3RSplZ7Oocoiehm6%2BvvHtjPMBQHso3mkO0%2FRsc0hauYQGO83qRnU0FUjyF8kuFxH9P4EotQx1FDqBggWrvIuzIV649RLPf8T%2BoumdgDHVtpR0aZd%2Fh4pXt%2FYNuMEYwK%2F%2F6gyHpJEtyrmouw1tdqVeRFfc2DncgRT0IVNODxdUbQlCSCxUxmtLq7FPJJOz5nDkbMno4XpfIbxRa%2FkC3gjGcq%2BaO5bnH60h2H%2F1Wh%2BpAM6ic7BXRVsqWZt%2F1YT8eA85HTBW0pa8XtThCDQx4oS0RH9o%2F80al%2BdS0AZAFiVSczv27A6TlO5EKcSPwIubs617PIPOQn%2FsfvXneOiFaIU2xXVEDILmggA9YBKfy5Xm12w0166MinKqnGxAzmJ1Qzh2juCpBWppjcJPLO2%2BrPBA3ZoQBb3V9LWy8LZzgF%2FLHHj8CXmvDdpG1Qw59azdFwCb2VB5dA3r1GklJv6%2Fnj6d5E9uL3AYhcBXqKt3MVjZTTrwiVdzoTRSXXTKi2tXIaf80L2ZTMIH9yMMGOqUBW9cErqQaiqw7VXdPxU1ZVPpjvPAz%2FbB%2F91J48JQ9AmarxoIO4IX2pmc94V32xbux7x%2F999jznvppx5nj6Ch8Jrz0KEYThWRK1umUV%2BZEs77GVYWqSqbiwyD8roTGVq8NaQ2I0f1%2FSsXZ79LohKxpFBW8F00wHHPgptQ9FC9DmPBlm6To1DkfOxRe25S5fk6Y6auseVV%2BK4YBm40NbLwMul68XO3J&X-Amz-Signature=f1922d63c9afe5c69d85349208d699ddfbd8611e07cf8d5adfa62906c37b33d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
