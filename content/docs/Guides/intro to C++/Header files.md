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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTZRPWX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6Me3XdSKfgEH1Nok09qRkidbuP37%2Beo7Ps064euuSawIhAL9FCYz2Vvqr%2B48gVm%2Fe8fsjHb8U7roe7eLIA0yv7XpNKv8DCEsQABoMNjM3NDIzMTgzODA1IgxzaLKfTE88jKe3gM4q3AOgsprXE42BgUE2UoKjxWtNSMtSSTh4QiaN4zjOERRUbOD33ZO8eeaut99627nkPAFqDtM79PFc7W%2BwUo2yBzuczMNFrGHbJsF9mhjuYGjBkfifBGBx%2FkF%2FNdURz73mZGIZ4Y5h%2FQj6RDeS2mfFXrflHlLsLfVn85LmYE2ekg5Go2bkFe%2BJODfzKKpb48sDmIXdCj5fFC6Cv23fwnhj%2BYepUa5N8gIQBWhiHmKDJ0GfWArBcz%2BfLXfdCoE6bB74DcMMDQTCHr7zWlkAqbLcOOZoooG2v87wbO9pKz8wAMRx36ldd%2B4yKkNar9%2BAZyfYoO288VRoTuy0us6Dobfrgq6BEuzYWVfdXWzlxUT52gd6ZKjqVKiQV2gOd%2FnzWagYTKBJt%2Bn4lmoJv6rJE7nRnIVSGM%2Bmu9r%2BNwDtvVF8Px81CExqJ07uTrlk0jEA4tsKQEA%2FBjLy3Ns0LGrIq2zgKNrjBjkVNqdzhJu2Cg8pHI58EV1LYazSRnS4sYXRJFSYxwX7MwQCxw9R2VR%2F1o42neB7WctqfqAaKk8cbXBTVEVg%2BR%2ByRQLenZTvlKKZZaLxdEyDkhmmtReE5SOcSq%2FWY2DP%2FBf2jRYTP4p4zXXoVNhaWKlVLSy63H9UWATVZzCFwvjEBjqkAQ4EGmH%2F0fVgiNlR1se86LsY2sbdmD%2BRa3PSYX%2FSni%2BP4xpygPoM9he6YeAyPgOIL6MV2bKvP5ur9Ww%2Birx9v51fIhq%2FhdjDBa2mHpBU5WqUe5lumjxfEElIuI%2Bg1UgupbEbzx2KrfD5%2Bzcy3FnznEsUyn7ZNBZuAR4Yok2K%2Fm48g%2BB54dI68WD3H35BUmLCH24xKHUrEbgoX%2FDYWnVG0W7LtQUE&X-Amz-Signature=7f37ef0dfe7ccf3b1ac44a8f89fae23110c30385e05b89537bc49bb2fe8112e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
