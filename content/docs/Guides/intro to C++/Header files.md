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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7G5PSF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDBmw4M76dH%2Fd2cvClw247gKFHyPcxoMOssc2to7U9FsQIgGF4jdnIW1cyQZBw2ce1FFYz3hdErnupXCMVlPQ1w0ZEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDA5GbQHAsAv15YFn4SrcA0nu8LYAHRC2XVUXOqNim9uIcUxK6u3WWu627VG1cSe%2BrmhfSPDzKTlpj0Oktbzcp8%2FIU2wDg7d%2FwgbOO9q7jp7JXlPsvaKygIcrpaQbdjlkeHmay47%2BCcJROrA8KOlV8K3MGKgeVh5plR6qR1CQbLSBi%2FtcmkKbawwpa2kLZApgubvMX68umdHBADdp3fRv3XDdXCROovXLHFkCSRnJDV0vGRGwsOPkMHiZD0hov0hOMryW8zijZ5x8R0ZzzvMw8OfJx2TwrZXJTtaHPuoNV5yfs2lwgNM0zbz9Qu4ONR03wLeitk9DWY8IFM1hj1Ns3th4JJWTa3IYVWEyx569Ys8ZIXYxugjXSOkTyIYWcySa8NZb43mlGSD1d%2BGKC4jdI0hpPJI3zRlg4ehdvvUwaNHRfVWIU3lwQycEZT2fhhlumuWJvhIMSWifhL1eObtocYje5sq0vY%2BZRHU%2FeLWEQDVy3oyrtRzwsmdZsoYpi%2F6qb0haXuQL%2FtIwDl%2BNiT0eom06pqm1JUDxcbbv%2FwqSvWgX3oO3IFemFLWu0whOILoVQIhclQs11na0oRnwiIo7JcWz9rgkWuhHaTfwuMBUOQ7yPiEtzKC5fbmyzRyRtwJMKV6qEbQhvRg5fkQEMJuG2sMGOqUBPh0G6SDBkx%2Fk54mv3zPfGT4ikNLHAaZS3o2LMQ0SVjEkVtOi8eHd88d6S9CNbBWrw4%2F0bHzyfrenTSu9cSdkajfgOqHS74oQ9HlKqNXjDETuLC6ZIF7HS03eYyqKLdr5OwYdQkZYZrtwNGhpvECP7T26jDL12cY5IWj3KXfVLImoCNhFxJYRWFCFy5c3pmt6xC%2BE7EFiVjGapxvEm8HNwN2sHpP9&X-Amz-Signature=738714efa1949241866abaf5cf9a94a6c1aad195f30551617c939cb3b637a384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
