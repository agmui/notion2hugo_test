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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5UOELJ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCeR8VD9Zntzkg5xQkWiZoXPckZ5cKp%2Bwq8MrBpzlww0wIgB8fignwJaYyM%2BHCpb%2FVuPz0uhuJ2K4ys1Gyh7HTK%2BgAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDATYFDOEAb%2B93TqC4ircAyurZATKuJBPrI901ybZXK5ACLJwXQMR0CuO4tG7%2Be5qNO4WpjPcN%2BcmTmLFNg93FmcnfRNlBFUlU4w%2FESG72OYwZSSobr8sQ%2FaKejn5POY03rVRyn0rTjRrHTJN6yFv7KF8IZdHuHnoOGNze%2BoFOZkHsqMgYzgPmeML%2BEguw5t1I7i1Exl2JCrhc7nW9m6NLWRxrkE0nbtp%2BCFGbrF4qORay1w%2BC6aHJ%2BZHltyRRf2qJmOnA6Zs%2FHqiN0525IggM5fOhTJGFRIWndOYijEUGj%2Ffs42zu%2FNiQIpf3JWnjOvyiFH7VPHBkuDxfJHNLaaNsNiXw6LxTWTD%2FTYeH%2Ft2BGmpskf7Akm16kkldquwH6DlQIZeWaBQSALkSfQV2fgL1fqf2NlHJttTecE7BQ07%2BDc3bO0S9L5ELG%2BjhJPyUAK8p9SFd7ZJiP8kp9dZ45LBwvLpCYHrOkCBG8FGgpyqDRjglh4N2lAq%2Bt7VrOqeTDgEwlAQvPuJhFqqPSz6ggeSvi5fw%2B%2B8BzOU9TTdBxbuQroofr0rXpetksni4tDG%2FfYeiRlfLhCXqHIMf02tGrLN4ytBMbrwCD5QqTurt6NueqkS%2B1ueY7DwMYZJ5w1R6%2BgADvb1PJf3qYBKJpZSMPKLjb0GOqUB%2Fm2CeJLEFqbmmQRqdrW2W%2BLqJLP1cHdf1FrSsSrniR7qUXdD%2F81EOq9wf8iKR3Sy94dHzjCF6jWgcKiYVCJeQ8UDsPoZreSqOE5WiwH6rosuLgCLoYALIU6KuxlDNQqH6OjXEhMHAJETr65wTLm68DSAFMRGRFc%2F5MxrEdaVfLNGWiYvRj7PcTD1VLEQD%2FmDYytBFvfAFfJ1iLFEVSVgveShQFCh&X-Amz-Signature=b725ad4fbb8e6daefaad803f35da1c65135379f694b359ff9d06484eba57a3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
