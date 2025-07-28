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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHTJ5HJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIE2k0qqH59WVYCcHb84gvwjuHA63G4AT%2BFgY%2Fvj5fAJ1AiBwPkXV99%2BAEV5IpsJM8qbQ%2BsptabYVjliOIpoQOSz22iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2Fy31Gqh%2BTb6Uv7vKtwDqQ%2BHtVHNBz3mWj7vZ6Tqne0uSDo75ov1JAOtfmHjcoCPIEuZfcOrUXndi9K7rlYgpjW7AGDQroaxF597hfhM322gY1rWuNPOpI0TV3W%2B9Aa6qODPR1C5%2BByuA2eAqdwJgLcf5UvRXBNTQDyQLAkiInJ3jf1apct5vKTtApTbMawkhndnvnlbCKgC%2F1GhKdYEduOT4ZoXIJCLKf9tHakHT0zc5qJxMFbHcBFA3%2BRYFwbdYPdnGF1THRAYHw84tUadyhnlodPHKBvMO5LBxvGAMBaOjzwr3aplp7p26qXGZz9Qn%2FXKCqd7vcRlpqfKb5Z5doiGzleSqVp%2BlfhdKyYHxG1y4U8a563tb9qm7puwbf7tYy9rF0cs9vxrX2E2GBlSa%2FDp1iA3kgc63gU5E84D2IIBT77qRSUSKRAoBkprSepodkdb%2BOOui115UjdG0BHbARZbnsZn%2B8DCgF7bziBbNVB%2B%2FYt%2B2tw4sVU4dmOycEg%2B%2Be%2BGJrks1Mf1OFkUag64%2FnZDa4q5LZUnCMw3xt2bJoqzYfXwdfDbhkqKerzdtuLiTFeF0zM%2BcmjhRwU25A3S0SCXxYc33ZA3Hm8WErMMeExo4NX%2B%2BCRTZKZqESzyz6zho0oPsO4%2BMYb1qoEwyNGexAY6pgFRpYcvHVMXlALWNzo1jze0H7rkW1VJUkwrApBbOtXGXwlJDk6xTpvccQLsf0Sn62qX%2F2rPsnEQFiI2CLfvVCS3DUT2AxI1kpRtZGIxMuzgw%2BJNNkAymogiTIzMts5OaxkAep3BzEA7GyW61cwsisUmolv2xUZm8InAz0DORC7SFpjcgBBrAm2s5inwdf4cQ3pz2efLb9Svz6cbtE0sHlm0moDcIXUs&X-Amz-Signature=7d5935ab22b35c2eaad1c23d269c10677de91ad03f6e66eb3f53737678fb35ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
