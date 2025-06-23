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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU2OYLY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCQOva7VJvjX2MeCf8v5dAPiS7br2uOeaHl03Ts1fJCrQIhALgKqrmQ5kggCs%2FH9BukL9ljNajag4%2BXa1j1FovYGpb%2BKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxzg1kTqT8Fr9WWP8Qq3AOFUHcJmKW3WSx4Uk0ff9eXGW%2B1pnfh32PFRNfUtC%2BH0VfV%2FVdRuoLNlpsFak2LDLV5vblQBO0ogQvu5%2By8k4mGz5YmHtQdArtZgUr4lBZdwnqY2crXGh0rocVKty92gQg2jrwFV%2FO2mkwYoBrKUvcbwNrOT4TLxSAkuEeuoFPvjITPWaGTWLhf3tT7xTEVy7kT0d9CHOlmUozcZpzs%2FsGYIpdg%2FdfWHg68Fxn1A73qrEqJwgFLfAbTpnQ01%2FSyBKOibyj8DlHqTXM6vtBSfWBrgF%2BoEbTjS965prEVFkFoVxLT5QJJIvaIHX1WBuEk%2FZd3Shht0ut0ovwooL3B7dipDxtYXSy3Q2Mnum%2BbLe6kh5W4iemQm2OXiB8QhMCGbxyWaTFid7HoQ%2FLIpj817FEFg6SOxibrs62GGvVEBXZ%2BADvhPEHG1v%2FDuJVU8TZVepGkU0nLGcIAZeecQvKNFHgRXbLiD8qjq9KYFZuG61cdyKqhUJe1sr76Mfhm1VDEBlPrWgKp8RbPMXx%2BQYJ%2FCUNS5fl1V07lXf81N02RfW7aEU28ybGyh9HQkOF9oo2qXKiVB1VoX4pC6oCFV84V0AqEkYK06VHbRQi%2FTAuHChGSY7FhgTFuTHHAoc1y2DCdp%2BLCBjqkAedVzAmSEs2bjcFCPef40%2BYmoeaTr64uAjPiH5zybR0s8%2FR9gSfRKnH%2Bx5PVnm9luHxKpMxuvoiKWTfNE%2F4yaPBZlz2UvpegDrBt7nw0ayod%2FQ01qvQQSwPefVGMgUldstQOOHN5TbzKdWO1rHiujNg1RoBmCEfu46PQJiTyK2L%2FnXpIJdYWJSa02ohOTkcrLq2K6zDDhMajDRVwO8ZyPhVnm7%2Bz&X-Amz-Signature=df46ed759f9780d23c2fa66e8861108e2b453f2a29a4c4f3f5fcfa623e7e24f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
