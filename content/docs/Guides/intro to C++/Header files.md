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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCWTYDD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFaDUonOnCHo8wnRQuUzdJmFdE%2FiKfzTPu9uLGoGvnsZAiAguO44PkcY%2B3cJELNJgPPybflpTEOtSVe0pKKqf%2FBRNiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqQJW9Hka7%2FqO5ooKtwD34AMZRsw970rHMEaTPGmnGfTTG9SaKTH2yGmUvHnY7B5rdl22peeYsg9ueZO2UqKSFTc0ZbWmAXFrkMJZfIhKCw5MYFjJHRJCR%2FQdBhrPfWUwJ1WxN04vlifrtXM32nlMFfAWKKvmBUUuMX8EdtsT2gzp5i7F9QuTDg%2BBEDuFf49NE8bnVD4t2p%2Frk87N3ZwXkExK3UEYfBBAWqxVCSV4BGY4fMSV2VUZA69EvyywrCmxi%2F2BD3KhYViCk4k07wTLRviSWcubC6cB4m%2BMQpReD%2Bghw4pXDIgefcwSx4nwW85Gi2nhPiHP0F3oiTiJCVRsCWkblhl5pmpmxpEKL%2FqB%2Ba8f5vcKH0cVD5QvbIKU33fqMkL77Ztdm9KX3KA4Kr6A9u36Me5g3djU1auUthfNjbNwOWX80TEHZm3XePcNt8Bdu1j4M1%2F8vkrSfF3vLFmEZjdJJ4FDdcUNsa65UhfFNZNyWPAKaXASubWz3WKhDiDVFADI0GYBYgbeoHkBcgsNsOzvPe%2BcYWo8x2jqilqdqw8jf6yv4citLPr%2FKkMp1aa860VdOkLmiPGYST70LTrxsTLd99AM2m2c%2FRBbIEiITBCuOSHDytel%2BwYClbqGjZraGkApp%2FZ%2BDSSGtMw3b7qwwY6pgG7T4XUc09DrETLqzfNhFVrjT3bZC8XO%2FP03PGLp0Oy4AndY%2BrxDlF6mdF4FpwOopvcJ%2FLCAxuYBbx%2BGwdiE6e2XNxMFe%2F2RuReCvnqdxreVKGgxRPMacmkWnArXzJY9%2FpD8PbsgceOG5yXydB8sNBCXRSPvSjw2y%2FolAw4z91tsFgaaK05kewWavY5tlH3L8nBqnnXuQpfwS0aBRrNrwnFLYfTJ3%2FN&X-Amz-Signature=67302805dff165a712bf7e4d9feb5293e65189a28932f285c6a459f53c48fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
