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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC35SFMV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwQF978KZvElPZpqk%2F7A90FoNClGpFRm1zOHjfkufVUAiAlmG%2BaQR86ZshQ9iTSV3agpQAuz4UXtIFn2EBCNQOyBiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgwYg6N73GGmAIjpYKtwDnRgYaW9FZqCP90jH5d7BK4KyvAKuMQh3cePD3vayyzwp75jC6FqdMyEkf%2FWEojkU7aB%2FM%2Fw0%2BMhWjeIQK0sVo6ortwxXfROqwXLO2lbVhXCkn91n%2FMN1NCCJt8tard8Sm%2FyEjQF2AwF9aGoVVnBZ2KmtqTtKqUPDFw201JIIvg%2BwfKBPWzXdLtXDSaPlzVd3WQzz7VdIsw49jWUMeRlzAs2Rju1cx4Nih9tR4HZo80ufSBjvSEKkDzckhoHFgBsALPrWgNJ4xUjQl6LgbJBdDWxMrssr04DG0xDrvOOusY7Eseh3bgIyXIb47CpGaRoWvmix8eH4%2BYZiEtAjQgC8Ch5MARKaOx6PKxNLVO3%2BfgtWHZvaW%2B%2Bc9VuXyVfSJ1nbuNy1mYmQ0XbXtLFm0iRoCceDPAhDWhPRPQ6KYTVEtSpVg96K3SPkpXezRo8OCV%2FG1HBvSnzp3oxrv%2FZ1jXwoPTsmvCSUnRmY1U4BjJ1KAZGbW9G5zlumXr3cJXKNFJqOWK3%2FTGlvcFY9qyecZUtVUYfK3nE2lasZNeQKyvZYvmmOwF6OhyDAeElllNsoFszTJUf7cH41bedvXSaa0TrFqQW8AnijufzEzCtIlLVD9Apw%2BRnSSBCDT2NUW1owp6HIwgY6pgGyjnYfGcRMfeGr%2BZ%2BmzISbKrqJu7Z9p%2FauOxUIlctikD96e0ADSIsGDHeneO7oRHsJJBl3j%2FlNlBbnixrtrQUZnGbtUR5F63mBgJlT7lSjsiXYfwYJygtUBQ%2BY7MFBf3f2YZYSajEc43Uipo6JeewEtEegLsB0NxSdUXsq4VW7fjTf51ZWByAV%2BqT%2BG%2FHs1ENQmv6%2Bs6ueYm8tx%2FpaW9qqeV7Bc6Sv&X-Amz-Signature=091bf0bc54bf0ad0d70973ba4c232ba790b145fd69eda4c3403ca6dcb08347cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
