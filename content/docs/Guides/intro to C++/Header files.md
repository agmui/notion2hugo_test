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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RT2LJF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBMw%2F8bzufij%2FhpMxLV0aD%2BxUaLUj2ahrFgdrdgbWNE5AiEAxuQ%2FWHv1NjxvpNVpgVBUL%2BS1OGABhBCehxCop2jKajMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFpgYCF9ng3Vp32%2FBSrcA%2FQBJ%2BceeO%2FMJMfKUrAbSknc6if8R2mXiENb1lE4E6Ybv8%2BB5C1If07SgeqViIGQqI%2Flkijo1PEjbLBDTvfPsgTojg2UZGVSxPphVZwlEJu67GplvgitempowdLnGB8CGYYXbPKD1Om9py3%2Fe%2Bgp1ZF2YxObvwlU9qi%2FkiHfQFrbVex0KXzxSHKkyTU4DAr6VW4D%2FwSZ3SNkFVaEf3IHzk0z8RuY78ywJQpZhzr5A5ZJ1xan3WrMYsPWaqzgSYP9Xo3yRFF%2Fd6auHlSgLW2wK02Y9p%2BKWg9N5SWsyij2U3TVjmcWGvL8mczsXa6i5zohEkTrukLvqt7eKEfV5FiwEMLVonQjTkfRYby3Otwg%2F6VpDtqVZ2Df4wZDxmC5hU2wIXkDjadDRQL71%2BG9TIAqik1qy8V9Pr2YvKR7AcxOrl1xf6gD5rd0tuHvgnE3cI9mSpVBLkawO0lng%2BBSt3Xxxvt6PwnKoPXKMQIPEiLxT1%2FfwPPIQ9YDn6i94SvuzBTAxGhlhwxSy9l0vzrLm1h2tbEAgdEqiJgDxhoA%2Fh%2FFgrLF0ijLx6GHO24S4YM8zGVWZYGRXYQ4%2FSL5syscX5G%2FuiDbGaLkfrJ1lcw%2BPNPtHNdRxqWgAl%2BtLTFesrwdMI7Kyr0GOqUBwhhV%2FMAQTmfnATXSVHj83jLEseTUSZi5CJ47zsOTntsHfwF5XcNeOo8gW%2B0GTCyjvfYeyT5y28xR3AQh55E82axk%2FQ6q9T8uWN72REbiVK3f6IY3%2BbWABWtwh82ex350YZPvLhC66EwahYOFoTIF8mCzJqkG9KqisfBe%2FZGHIyScqrbdXjaRylrarESH3pQQTyJzlvq24GnXqymm%2B8Q0zQzbZ1hg&X-Amz-Signature=b7649a98c97f44ec2ea3611763a9ea0c65bea1ffc1399f108b0cc53f19506293&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
