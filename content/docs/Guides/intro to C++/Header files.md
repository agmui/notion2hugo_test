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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3NYHEL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDD%2BEseh1PATBhuJha5t9pPpKo93QscsYd8iffsYp%2BPHgIgXR9V%2FhcDSDYMOwhQjGcwKuITmCnhLZydpQLzk04%2FQVsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKe6Xc6GxOTvDoFGuSrcAyhP9PYg0AfJK%2Bulkiw24adydXrU0HGwetOcaZPvH9aBTwB3SoWeGypHbB21QnDri13naWWlMhGKFt0d%2FeyaXWOCX%2FAPYDYRiO7IS8uqhiO5EJ3s6U2R1wsMDgjJMwF6z6P4V7DxXgDyYual%2BSniQOpE%2FL6vRNouqQIM3rbBE%2F8u1oSAAwR%2FvcxEHlSeculg0D4Vyb0K2J%2FopR5iVEFmpuIfD%2F51XJtIX0nAxo0dvP8pnCY6GmnFen09OvMEto6SjcrHQrnASMvCOSrXMWaS1nLh1nPoGBCGHyKzDVuMnDWmvFRMtDvPYlooQOOvMBUpk3Cgt6f3T5meIOEovn%2Bm%2F4EeurZy8mld0kKdggDmbK%2BKJ9HxS1Ss2Vc%2Fl%2BwaZX4eNQg%2B3eJg0IJJNj4hmOAgEPO9nVGof64nV7MJX3sBjeu8V5FV5Zdz7EE331stD7vt4ptHKMqT0rUyWvW3m%2B6moubztBLuB%2Bq6Kh1M6g2k%2BNP222zHEnGn3daW8a%2B8%2FB0WIRiw%2FBSnEyxH6jwEIMbC4oJ%2BQmBZNGKqeblZc75Wn6DD0VzFpIvDfVv2i7LUmlKFA0BtGECVPBnNjU53Z29YfaJLeGu1kGqtvTE9Hae8diZrxHoOBsh9T%2BP0L3qGMJO4nMMGOqUBSkPg2r0fgDPRmak5%2FC5BEYhQ8AIK0nadQO0rmaqGiiKWPEGqFkMwJL%2FYr7TzypRZnJgFhCcPjBtn1kvumXVYKOJtKy0gDPSjHhLqny9yBLuUIvtEgt%2FsoNA6ypndfXzqMzFh4Hj2AqbuTZ4HlHqbPEJEAQrI8%2F5Z7NDpzegbhhCgka8DxJjEinrqnxVg%2FkfPFExqcapULumU8oexHtavgUXJZdc3&X-Amz-Signature=13af65da9c61ff68227df3f5bdf87432d4d7f14080c6bc24684b1072c3f26442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
