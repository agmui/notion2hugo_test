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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5X3MMG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGGT3hZtyPN3%2FJ%2FNA%2BuaYbuEbFZNV5v8KyrFaciS2qSDAiBFpeZ8ApGWXsdT7W7Jc%2BThWxEQ%2BLzg0cFq5GVnn2HJoSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMUEuRK4E%2B%2B4%2BJYm65KtwDYkbqxJHlnCeBIdNr0HkgwN23DAcC130gYO5cMv4slc4RllIp%2Ft3ehi1aR3PaYANuvjguEAaecaRZJllXzWtLlIGVcLLO57EzrYrDlWr0%2FdL%2FImszop0URr1Nso%2BEUxMF4A6grhThHo2HCmeGdyECkXkbisTmoxH78XWtmTCEzKmDlBsMPaaPVwrMq%2B00ffSTkJwqyzpeFlAPXUyEsiJFAzD%2Fi%2FUz4Yxk%2B92wzasSWQj%2BOM6mJ3nb5EBatgWhd4cQu47GEtqJZaYiclfGh2HeYf3hdq4n5PLThXSM%2F2ecNyYdkVmxncwf6L2HgQfN6%2BhtKc2eKjm8g9gT8djNwh79Ocqz%2Fi9Wm%2FvUkxt%2BHK1UY%2FGuwHxlRA2kjsL7fmT2owJ8NT8oXhDxNmcKd%2BhuBn0%2Fz5lX60rUM%2B3qKadtzfCuP5XVZCotXKOXf7D7WCtJ8JTHxMI%2FU5jyALJ4oXI0uM7k56uaJ%2BkeWAHTV4r5c7%2F0LxmaUKmuLIAR21Op54gscGLxx%2FV2lwlk70NBHoZ%2BivQisKaKgnk5%2FucNYr19%2FsUZHHe3mJdlYR2EJnUd2fCYFxcRp582axt4R%2F7%2FTKpQ%2FYiEFKE4TXYHs3rBftZda7qN4IUA4znIw4HY0A5BQCMw8fTExAY6pgEvyTtxsLs8tJELmMJTg9xSKkn%2B%2F42GxEYjpVr7eoq6%2BkI5jkcmd3sOWerO5W5WyIODI5T4Q9OemHBU%2F%2F40miX1cnHhVpBZu9Zlze%2BzXwAEM%2F9iKWoe8Sok6bjw2O0RF%2B9C%2B6ClXG22RXv%2FItGQAzrcfqMkTQTTIZjBL8wKfwV4fTgG09m3iTq3Rr8OwLzunvq5mYtDJheOU1IeJMiTk%2BuI3Dm73VzS&X-Amz-Signature=ab96d18020b966bba65a6e54d199c1c5a51003beed28b4e5aa048be2c39299ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
