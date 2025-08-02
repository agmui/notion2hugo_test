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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJIGQRU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ0hN8PcDPckT8jziNmz56NHUkZjfhMOu3USCYvyRoYAiEAgQ7JA9yUZENrjMNZP4Aks81hVCMvEa5%2BooeRf1RdvI8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMadGPpIs7wbILAtySrcA1UOayFiGBAXmGfm4dH14aOVxnF1DWqQD3KQPoFf3zunBFonVqMUpTKeYfXjQ5wh8GecTRNZcchAk8%2B0iyf5gzDDmnRyys%2BuKXRf5L8K2sAVuo9Si8Lt%2BQEF%2BCr55%2FNcrGdhtyxym4pU6bwAJ11b64fWQU75Qqw9CWshdfd1cFXJJmrEmThYfrYosuEiFKUfPA5iM5oFVutD69NCDxh7AK004OJFfqdr1TfrS5X86O9M9bFivcIr%2Fa1C7QcD6%2FKl%2BTsD%2B7Ned90MZ7lOs68P9Bjo0FfROUB%2BHuJTlRhAS40%2FEGmZDuoF%2Bhu1lYslQQnpaUtaG6GIM7bUTGpsX59C%2Bvnb4jUI8N1DD6%2FczaHh2M9xFIy2Q5tFx87qYv%2FRM3oJSOCtB%2FSQIt8a7ggdtWsqvb664J7KNSWDS8NyG93puTm%2BOhAiaE9sqpQqzhWkEeDKcuj3Ye6j0hGWN65elYrHaU0HohRnH1KoBTWAaZkblL%2Fppqie6NaDdAG%2Bdy4MHXqSkVVmxZ%2BNE5HyuLCAXaFay%2BTwox2sova6Jq8E2K6G0p1o64rDpq51kd4Y0PIPeK5vDX1Ht8Q%2BR1T44yuVC65kkE%2FGRb2F519CzlUEmjxIAq3%2BHbPAIgeQ6nK3KVgMMKqeucQGOqUB34UFc28Q6ldjU%2Bh%2BnoG8wYD5QluSjCTu9iPKyye4Un890cPjhebPXjVixx8afnWcDMrTaaIeuO1jepBTprsKugdt7yV6MwrnUyOCt9R8oCufy35Zm5tiEOybR0SPlDARd2tPHETPKqC6Vs4vqhjkyCLbEwgEYBv1AmRTINeZ8QT2R6J%2BECn2azQoJoZxJ2l655Xv8%2Fp6QGW9SFUEmSik0Dilh%2F3r&X-Amz-Signature=180395e93b521694b103e939e686d13cfefd393e5cca16e98f4cf38ebb496bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
