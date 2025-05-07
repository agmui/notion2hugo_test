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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7MNM5T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtzqFxMN7L0AZScXNZKmpugv90%2FVlCevlnRVJnP8EsKAiEA2puH%2FnIhaxRXIabxTxiOi5TPDhXb2861P8jkD9QhxJwq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDD%2F%2FPtm6JYz46QGzISrcA97O%2FcL7sBJKAASM1RbtjqNB7sf8qu89zPBlF8KoFI4E69etfPw902wk76t9agMhmy25wPsS3MghQDOQTV2AJAa4YxhBgXKN5VFBJB%2BIj8vLaXAIU%2BZL7k0Q%2BUS42dePzLxpmDIQLR6W5%2FGKOSIvAVJhK6mKWlezzd14UwreeruwHM%2BTOPATiXLvg2G56OggHOgecqlLg%2FUDcIoYbwT%2BfId7avbsoh5t12tKwyd62j8%2Foy%2FRijvv7ATDn%2FXlVFIz2cc0FKjYiZV7LcgkkKuKAWaCnD08hkxlA0dn6k%2BoKRaklaKFWpAvhxxhyJQo3VOEFAQzOooPfbu%2FqDEcQ8Wv5BEBLB1jwsnYmeaeK07Xb9DkQeJuVSNM1wwYwjr9P0T3GmFsMRjczBlsfwJyHtIEi8dL%2FoASOI6uVjXWwHTyjGe2x88PxBNHrO7ry1o2T%2BetL%2Fsn8no3N9qT29qTH5CAZI1VDQcGvrpJfWTz4eaFD7JDIhPvNf4LHy17fT60onUsCij%2FqPFt8xSXdaglUU3oqrRcxmLvqWKuRAY9Z2mQfQjNcQ8GPW0ppqht%2F3o1CyFFqPd%2FOhutSNlVgrpCd8Wa%2FeVJtIrFiTcYixbrxMUiZkTyepk%2BVGCXGtO3yTSMMMv37MAGOqUBXfrDYnFsEVO%2BMeQrOBof02OnsSu9etXvyQ3R1msiRvzQE4RYc6%2FI38B2%2Bu2ZlYf3%2BWllUQ3YCYJu6AHTIXP2ESkp3TWhSlTr0s%2Fqd7%2FxYxMEcd5HMk36HuHBqY7Xy6qXLjEt6ze%2BsBYFhbP19wrvAGW9hve8%2FSI%2B%2F4b5ikAmpk5oD%2BH6ODX5XKJhIkDKPb%2FYt8xHKQ9ENePlYw8OuWRYGwg0q0AY&X-Amz-Signature=6b68e1b012df434c675ee22e4938a73269a55550372d00d2f0ff0577c64c93d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
