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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574EI6RN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIEZ3Q40sD52gnGUQt6IX7lRdt7SDlxMATotmQPfLGHBjAiEA7x2hPbXyaltpjZ1KP8Kv2kT9DRKRLAmPGaoZHOv6Magq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJS2vDTjcVFWdu7liircA973imrNN%2FExvo2oTfA61RI7RTWIvPYlTOjP%2FBsEq9h0asVSRM4%2BRz8aAUnHJfmS809yz6v%2BiSsBK74PW80nxAf40V8ZFSYOAw89AfSDDznl9yJLh0lw9sGNco757LSduWIsiMD9DWTbLzEOr70qWjgxXL0D%2FeMrE7mgNJJpWkJIwhJJUMBkTX7t33IknyZRs6N%2FpehoBOpuTOcDhlPtFA3vE4bF7eijMy9nEzVHYDztj0A2snyFdgdUEAeu%2FWoJkpsy2uZO88m%2FqRpVsgyQ6aYWkrqWz82NeZ5T7Tz86Tj%2BtSA6tXBu5oC7sQw6Lg%2FTOX9vwax48LBi1I1UZiidNZU5mxe5RX3eHznl1GUdOKVvrwBEXoYZKHTWEV3xwyitC4XQ0879FllhGMVoDP6jU8OTAl01Jv0PMhw7Js1KumMFfD70BRr5hKFsUEVYJ%2B5ifUtNjMVk65Ebbb55xYlt4NJ3EQ5QEjDRcq%2FXiu0TI%2FaeXqkzwTpFuMKF1VKmu1l4C7JkRJxINQPn0tIZw6qGIDopiN0418rH92Sk2sTfS3bn90WpKjPXu9l9WzExvy0UKnNk5Oh76mWCDYUxb5aM5SBp6pN8%2BP%2BsLoOXXmsfgsNrRmzvIccsJMfG7tk2MOWblb0GOqUBnlA%2FAtTyEN2EWPdSh2Q2X8GxdrRe2Rgin%2Frfj859Lo7skvK%2FnsNmKpueJWwTUiKu6YXTBzc0aW%2B%2FQDAg64akahNhcJdE6mkqrdCx4gO8dol5w699FZIkHxy%2Fwl5cXW4v5tsO2x89vI2ylE5HGrlpbTTMUQPGRjnlR1XKziYyKPawPtlz2QW5Fxj8Isy14uf3hf1lguTb8p6KOKDR39WVGq1fDyld&X-Amz-Signature=d40a99fd15e5d195bce43059015aa59a7e6f453998ddc9f2898c9fa1ec449555&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
