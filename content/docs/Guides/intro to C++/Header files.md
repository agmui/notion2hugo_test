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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R72ZBNA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAZVLeIGah3R9NOLlLHFQR9my28sGnt2l3aEFnl15iyhAiAcfTxk4h9TtWxQDNc2tns2SOsyvN0kEueu7R5XpXd1syqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRWCfTDd88iQ5O3ppKtwDMVnJwk1kOIHU1o7U%2BrnH9E0texlc%2BfXGG9V67rkoKwuLiBuCFVPkd5WRx32qreXkPqYV3JWPAGbWRJKkL59s0h%2BwwFMwbQS8LffQ4U5pDaPKwnIecApT5jfBqCiIHTNl6gy9%2F1ut3kogvEnl4XPHdJlDPQsxQ34GGydnNohjRFbTcjReii2%2B3m3%2FUWdKWlI8W1dzZu1gOFzE6jaYfrKIwaL0EfiAzPAE02eoaWKYzdO5FRv6o8VX5kSmVaW%2BpxP3Dy7aXSsfA9j%2Ff4E5aP%2F7fFi%2FWgJy%2FYwF%2BkbgxZ%2BX6ucMOLvTc4nys3bHYHpkQs0gOXqpqpmQCLLt5q53QYCLfMypueg5%2BDoBuRnZ66wHJ%2FNRoMbIavIV9TquWoXiT%2B45ZAHk4DJOFzSsR4lJvrBgojhoUVmgPtVn%2B41VA%2BMRpbQyNr0bpox%2F%2FgquJ4frTnvw3A2pZCat1YS5CgUyLOhKjpw3hW2n0X6wRAYorAXaQ5jKLld%2BWl0EWuvEkp3Tz6HcWcSM0lHZoJOsB8vdl5DwpQx2682iTxw2v2X1pY3Vtv5ZpIbVsYCEGQU197I10j5UCVE72qvCqXUwC%2FGQ7LAJ9c%2BONGJEhFd3DdebmNzwH%2FPS7t%2B7zciigG4mc5swwa36vgY6pgFxSo3ZJHY%2BU%2BvuQA3kM1Pok1yZ73WCoMAMK%2Fjy%2BQ2hpugE4%2BD2SMu8Pacbz2tY08hSdkM4EVxSz2o4OEnoGnEkok00dIpSPCPNc7PbcdNjBdAjF8lXIv6anQdku0SK7xxi1Vn%2BvNJvaJcxkleO0MZFjWA9%2BlJV9v87XhCptPEJ2UwctlDWVdPObZe6wA4vdUWDqUNQzHxQwIHXZOtwgncYWCix1ep1&X-Amz-Signature=8850a59fda7a0580f256a8da4c3371deab3199eb4dfa6e741ae3e8a778afc960&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
