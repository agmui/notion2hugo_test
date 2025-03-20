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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWU7U4NP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDxDYyDwThXahlluNShzWT2P05lbVzOWz6gtuN3njDy6AIhAPpqfIoyBykBTDAqsaoleuzteTgREvO25cX4%2FPkjTq0fKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOq9mYOvtvvUyj11Eq3ANJaAjkoeon%2F6VgCCaWid3bJSaBTiPiCt0%2BJs046HI0tMdvTlavqO%2FK5aQYwcaVsW3lpRPA2Vl7T9esqbhlkDnc36%2FrH5Y29oFLZhSQzH1AyMH%2BJbySf1FWgG7Kf376AvCbGrnJiqnXfNCWSvkxX9iABbMFefYdg0Wcax%2FbGbC2gEh%2F5a23dFOzHxKLJv330yZ4BKAmYqzSTtv%2BhbkQ%2FWdqBENe6%2BFZcZakW6SuIERfIKnK1LQOT9alDz6FtOqTBWM0OAlMDKM1KUAl%2BWBGrZW3S89kG4eFsToV2AUBh52XoSVSuOOFCz%2FWgMDv5mwcBeQdOzStSjg8we%2B%2FiH8bqFkIYKscioYh8tCw0CpcmyHa6dRcuTsL4zF5cQ0QeuM2hrpKElLk81wQAKpVtH3B8xyCVDRJsPSPBeX8LdeeMsMejCxznApkuyTewq%2B7GF9cPXXydEmAbKrNS4cVUxw9V2Pjaj3fs%2B7wKR6NZ9SHchBN4ZR5U6ILq7dPNVMP2VS85imwCTdrM1Rnh%2F27UX26QHtjaAqdj00T%2BPf%2Bq8PZbj4GMWaPfzfJT%2Fvp0ixZtrfb%2BmbIYrYaYiU3wfdcdHpmKejWKjvQVDrKE14%2BYF6XtFtHsxqlIHZb0yzNuFylNjDahvC%2BBjqkAfWwl6lZTjDn2NhHC0NPN7fHhjGu9v3Xpnutgw52tD2ZNeKTiOGSZURt4Y9eAxoDjN4ktbvZLlGAiGz9zOd7jMAA96QjuxBCn0mybEEkTlK0EQiZbSo67uNlY1RJrDC8kulEZcgjILl1jotR75BUi0rYj6njwbdDIooHKw2luGZxGcNIYRL8JFEBmk5C5Ihk5iAcSA%2FzVUszbeuFRQTeQVqjSatm&X-Amz-Signature=85e23b115bbb08e242e3aa6081f893f2fe87f56de5bc295714d260a7b98663ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
