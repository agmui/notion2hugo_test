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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVAFZ6FL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Jo6XiO1KGbm5kNrfJhrJ0tgFFaKIF6zzD%2BZ2qEiz5gIhAO1AZ1xhWl4mcfX4MF7FuypucOdhUXh3Sqkesiul9pNYKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDduOmNVZ9G%2FFu5wsq3ANeAZQsHz73KCFAaHXQdEcKtiKt%2Fk35aRKatE6WqNrEamL2QfHZ27P4V3%2BtmTOYyVhCLjCNoSt1B56HmuHCYM2GwGCYTbX%2BobqklHv4HPQuH12IVqff8q3GVONW5mNnvuFJ%2FrOnHlrXnr7gMYOltaNQYmbljZp3mYcMdJlV8R57apZbRyDW035zGDDWsRh3sBrlj%2FTa5pIzVbe3jT67BXx1WffbKEklcY2T%2B8L54lix6hgJVMHs6WF4xrOvbV3wsLr2Q4XEsLmqlHfgX7cbqoBZkAbs4%2BljlwFDstcqBwFgoMGAlTn1MPQ047hsYIBX2jJe0nAIHwPN3ZSlOgDdmnIZgPZZ3gkKxbsxxRdFDnwhnDS9EwsctEGIKl4ttajXsi2ItNkoz%2FAle3dPURoM0nXPV7LbkHhlSccLwRIswt9%2FFQNDP%2B%2BGSjvQm9X%2FqjZDH%2B0W8HIFXketl47vNzAWaSS4B%2F24OU78X1OVWTvHfdryisteOltisDzawzfwlzI8eQesenZn3Ja8PqxH5aArzPkVVahdV7jHauMbFcMfECpcbF2hCsH89qr%2FUVHoW0Z0SWWfoYgtZr%2BJJkDsarizsFxSlHKDJdMTQ2MXUHZf%2F3G2ueP1WHUx0217%2F0rA9DCX1b7DBjqkAd3FB3DzBKSPVKwm2u%2FbjGgvkaYdkIPEnoMJk8A2nP6tOJ2N8EE9uTNwsFxdP9Kku7K5K3SP6n5lNQ72TWhB78qi5hzZNN3RpKta28da%2FRQ7IyIb3i28vTQF%2FJMXo5f%2FTrEZAHhHM1Dd2srtl0%2BZDRUDy3gQ3H41fLaXNOG2bZevdMrFV8ySGlkhVLjkBt0n7HrF%2F7E6kOxzu3OOilH%2FfNYnIzGh&X-Amz-Signature=fdc3973f77950ebdb1c58d09604b5d02414f88902a300ddfa8bb5024c7ba2574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
