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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXXO5N4K%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLFI3nRGT%2B%2BJPjyqzCzc0cJw7l%2BbG1%2Fysc0%2BVw%2FT%2FYkQIhAKuC8s9SmgN1V110LGhHudnrpX6RyBh8LgH0F8Hgp9goKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkupfMJy3tFt%2FehkMq3AO3HUNVIFm%2FofIv0pvB7f2ltIIJ1LBDzXDtiypdpRsiFuaIopmqE07mGYLd7uu%2FPAruIYfHsqsL42DYjhMJKR2dRDCzCKOv2RubqE1%2BvNcPXvpKB1aQHPaxhlGIvwtO81dp%2BFRtNog1PhuZaFG8F9k1a%2B9eS5PwOWRcIm6M%2F0zPTgdciFXswJLnHcD3j59pyX6p%2BU0nquZig3TjDNYHsYJc1OJMwJ6c9DTSB7JPyRRKqcXQ88mJUFz2czLIbPL7I%2BTr3hrb9ucGW9%2Bk01gHAy%2FnIcOCjyFwJ5CV6fAJ9wlU7kWNYLZOGUDtwkCkEXa5OxCRdV37h2VhcgLg4hQ5nHGkRC3oOb1mFSBSyLgg41w8zpKTEq8Caa98AbHl%2FTZWOYh0JxqeTpKJrVUfoa9sRS1wTHccjuEFKG8ipsFdDlJcbzlisgLQENy6fTo2DH%2FPOq5JADQA6CY0r%2BXL4HgkCvwaYhjrc9Ii0ebt3MijpnsYgsXSGABBygMMVDRlnPNxR9sIXGvBY0BM2DEt62%2F8jMSGcd0jrhZGa3NXkepQG8kcXx%2BM2S6ukKsgGy2%2FqtLaQWW8jX9SBbE0S9ET%2Fjhh9dvLzB1GOMD7d%2FO3aAemMQdpPrydeAv5fY%2BuYIw%2FKDCp1YTDBjqkAegKskNLiLkE27npa%2BOfK9miyLWMdqKcBqJilrgwjUO7ol9WgokVfm0%2F185L3o5dT6umrQsWg1AnITgUkUauU8EHcHzxqiuQHPa89UXSWoxg6VO%2BoN5FxZOXJL8KbBI6eNbWhz70VHAucKkSA%2BEnODSRmx0IKtq8mH5QLEbMXAxZMVoRvKf34gbSpahxP6B2yOAB%2FHdr8gcl1lkJp%2FKvABq16KXh&X-Amz-Signature=c5b7987a63f12437b0001f011b88402c31cb61d77bf6666f383b82cf69e8de2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
