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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLFLEW6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICntC5NCW0g%2FNkRMCfK6iK9JFGjufsWSvUkmIQaQBi20AiEArAlOsIOalxXpDtoyx7%2BLeEjTkO308d3OfMaxkp2dR5kqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7gfoYJBqUfDWroQircAwblBVMXMCIAvhoXdLAq4yW6%2BxKu%2B%2B9ZkcJxSkbgZ8zyRtFf30S%2Fzyk9QOypXnexbfOhocGIjkwgrfxKoQAYudK9i%2B1iTXt52xKolEbE5bo9QqLToW4vJp4ZLpBFA7SZE%2BL%2BqZWaav%2BODYIc9QWV5HpCpC7ndZ6lq%2FP85yekaRNDmMOfEL9ASHvrNJz0q0jgmGEqHgTO1q5kMMHgJORaJ08umTXGnreVbOmD1eTh2SCv2nMuls9Lcwnubs3vg4MXtUHpVHsYuoFne3BKqCsXH6xt0rC56QoTv48EEke7zC9xpqhiYblxH5D259dlwLuV07eqH0iUBS9QXDoja6ws8WEqyvjONnZnHh3a6rj6KQd0dTbwHDH3Ap1HULYN7a4qkaKO%2FG5bXz0mCDITVT5IP2dcNYSlEzQgMTHypJvqepFXJZYkqwqqczmVk%2BBjwp%2F3S7bgGN6rB7eYDzX0DqrJZDVsA1JKOay3X9UHAq1vEdbzV4KKRGEdm3z0gX8gvxClIGh3D2swzA2dmNkSByFF7PfBD3XEYC6AJurV0hiXfZGR0a8mmFbA%2B78%2BXtbabIImMUxPWAXtUdryo%2FQ0RWU%2Fan0tuhY4XBEMIQeA88%2FfapwVpsMjA7X%2FN23W54voMNz35cQGOqUBupuIzVJjG6SIT1WzklIcJtSxQ%2Bb5tSLer86lhT05BrtAzgppCfi%2FtFkk79PCbTLZwtoYA56%2FxiwTzB%2Bcbe6Bt%2FjBW4CV3Ta96QJDZGavtTArbD%2BiJJHo4WVoG2IyDt1xFDIBCOryz0hDUIyB87F8dzz2RWIhifV7OSokaa2vJ2uf32z4Gn%2BhHh%2BvIfx7oaPWJPcHLI9845dpIVk51rUWHlxEnm1l&X-Amz-Signature=d5aa47e303202f7fec1370906f9f83c59ce19e96b894bef1f327b620400283da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
