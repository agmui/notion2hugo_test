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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VREK5PE7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEdg9Xr1OrNKCKs6hT9WcOw8QdLBPGv1svZmBHHMboQwAiEAkSQsiR%2FWVzSZsLWTEdp0saWE7va3C%2FeL3J%2FuXCj8hTsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEe6BquCQUY9viLdXyrcA5HtakG37%2FOD%2FC50tnwTjcnT6IdBdVQ0KLENqBG706jiK2wjVmkBU%2FnfMDAY8eU6n32w8EY4FlU3R6AyAti8lVMAaksi5Sm%2Bx0KzNOD1YvoXokOBd%2BAwt5MEo76msoFK7nuAYN9QV2wgyZ7v2u1gPpKR74BbvmWXD4oo6KUUS0A0HJuPOU1G8Yc1893KBFlkcRulPgAACnhNBgYtOu1QbBakirNcEM24osabnHFGSsu1Okutbyn42xbRP6hWfL6OgmrW%2BQi20%2BVR2loAmQvLGTIzHYD0FBkeFCaXygAMsKhQeQRrklX1b93qo0m7gOwYs%2Frt9wPn86NRFZ9QSWAjdN%2BiCEJoUd0hIPHGbgVu1QNDkbU47H7bilicFeM7M9k2qYuVudFIucOatAjbrJD5MaBdHY3kfgnXfzKm15843i46M%2F1omzi%2BVrvvC2NsjdojrtPalqTTT1ZltLrHYAeNo5uQhKW0VDbMET0xtFiWPR5JAMflOgrgai40C3tnR7lY84ETnhwvDQtUhHejME7PA9UzBc76qEj46aeoU%2F5UQI6EMXaXROpw%2Bf39SBxylTxO%2BCrt%2BH7Fx0IjnN0c8d6oa%2F79s2Kfc%2FGTRO5HYE4a66dUFno5PRI4DNF6x%2FB%2FMNzDhMIGOqUBD16WAHkKg07DJceej6w8BCZ0E85KyRtHzDESGaw53lIIuCBDaoAmBScsY6PVyP4%2F8NTc4TVaJpxeH5BepMfLdMZAHdU8ANR0BhAgiJvALJIYsiPzBrzHLEtt6X6XhwRNIZI0WNzvA9W0bZkY%2Fe6QlK8kPb4PPOkH9ewO3p2BZbg8yJWY%2FVi23ilLITrEz5QnNGNCCKnSVqr5GCLjuPUxDr3yzjqb&X-Amz-Signature=7fce412263f06f5dd69ede8bc3beab2692a05cd48c85929742e68b57707b011b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
