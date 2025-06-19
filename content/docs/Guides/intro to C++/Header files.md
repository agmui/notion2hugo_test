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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5LFYFXV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYEKBs2AuH%2F0uY3PGbwskcuJgtz71mL2j07pbDR3XULAiEA2PadQh2JW8DKTZXz8AoiecU6DF0xJYJYNqiPQwASf04qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwzqtjLpons4%2FmmSrcA67kQedkQk7D2H1eqn3PRGp%2FPUojxReS5eUxtS3AoIiFXi1ay319lohGuTR2oov3Uu%2BKlTh5YcAMADHFYTxXeFlfyAiJX8JM4MVemFp4wHS72LXJy8rZxw2rLYf04xU3idm58%2FsjgSBauV60JFdyM48V9P6OmruG31yRRRTE2QbmZ2OyOIlgdSVxTUu88AOvngb9nHWnJILAcCFwtW163nQXoybcKFsNgkEI3ZQpkOhLO2Upcsal96THaog7qwWWw08%2FFsHIWq1ghdtoRAc2rDZ%2Fy733%2BCfTVgXlow0z3GJRbkrXifTj%2FPErcA%2FeblEN4azfbmH4nxPB8c5dI99BPGjwH8ULgpLXf74DGI4LIJUV78mjd4RHOiGxzfpY7IKoNbDzIJHcvSOI2MtpOnR4TUG62v3jv%2Fz8WIVplX6ZJaxOB%2FQCkw7dDy3hfObMuexx1f12iM7TNKODiJHE5jrnRnpm%2F6afbdo%2B%2BLuy2mE%2FG08FOBcV5rUj%2Bp9YHV6unShu%2B2MvIYV4Qg0Py1aZcSbze70BBdR7m4TjvNoD%2FbUcyWEENSozWq7Pd1S9tsGjbdzmWrQP7RkZ1CucDXWrMI%2BzzRW39RKlGKGE3NKeucT6uaRxWTa%2FtTUH1tFFZG5YMOrKzcIGOqUB5qmG3iLH258Rd%2BeWBcfBujDSmU5XGUB%2FEy9mrqHWt1bCrVQhetL7rdlbXdBC6z0VmoVILoFRIkMpmWi%2FDTyeu5f2x6C8kqMmK9iUyRbWL%2FZCOOVF5yjXem13%2FH0HO9os%2B289abVO1N4ke9n8l0botbOuAR53tDUcEezrkvSkslW4wi6KSKCPXbVs2TjMAmRnhM6FzghCAD0wxkb3LEnKzCGL5nYW&X-Amz-Signature=075d537bd5f8ece4b5bd6595f8526c8016b8c3e5432122176208c6256c607a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
