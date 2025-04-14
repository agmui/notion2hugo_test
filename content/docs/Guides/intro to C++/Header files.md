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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6O6XHOA%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKbtxSD8Vamx9nE97%2B3dHEdzIbyKNtWpSABjZoVpwHDAiBcpsxPlbytfx3xbI%2F6mtX47AUNIQF1gzZ5ic9WMXKxvyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOuEkPiAzmffrQ4YeKtwDzyuL07yoHdUkcc2a%2FDRLpGvyALB9Sz3NGsEU5W%2FptT8B1QyqRnKJqcV2yUoLcc1cAhLKLAs%2FoDu%2Fn6HJcEbqCwOkraBmzZNfXErYT5ho2vCgz9cwLsQfbXWr36zKE%2Fr3hJdORU775JvU2TYVI%2B5uwbHWVbAfKfOq2IQc2n12bbQZZ9T8D6kRBLyqbBEu1x%2F4WxJRKK2gmJTQjk0AYfTVScTMQipkNOGlBWybleet8cuhl4A7xAfBlNtjdZnFejMU6PxiXfh9zYceT5my0Aj52VH8FJHjkaERP5xvbklP3yK72KbrHu3pViBnNqtJXLndLRO11NH8WCDO2pmcEKgKduo7Efa5QdG1rDHyjy2IhL6AEJUbiNQI7U7sa%2BtPFV7N4lWuKIxeoYSd8TcS8hhxkLJ4HCAHPH9WulhAQw6TDlf8OdFfz84hz%2FVOQUHEnwqxQtV3V5zUDOilOw2QrqLXkOyofQxZdJxWquJpcaddEw18fEleeU0TPdWGmW%2FDnrPA4fA6z3ILPo5QaAHAdBD6ww4s7xA7OhW8mo8zoj6Yy3Ag9pNekc97SLX69HNgxhb9rM%2FjHsACtkWcaNFDyziodbGsw7FRjogV3DgU%2BpL6s%2BE%2B%2Bm5OliZV3eq6QFMwuLnxvwY6pgFCvpQn6koKZHaQGvylsxgnb0yfPcXD%2B91QWO7wY0KfFlNghNLG2eXGfpz87eYsWhqZPfaP2k5Wpi4aDOeEojSsH4AgqNg4gG9fgFcPD%2BBh5%2Bla1mfu8wezjcbsjVoV06eOBBDlGCVUD5n3vaigBvWeM1ew%2FugYQUz9esD2wq4sEhpQR7ya2AJukw3GSikALGeMVSJrx8573m4LsIzp9zwK7dYVDRne&X-Amz-Signature=ce9a160ea632664fa003d3794fb08ccea5994e37bb149fc04447285160d31e81&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
